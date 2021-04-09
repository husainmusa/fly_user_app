/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UtilService } from './util.service';
import { element } from 'protractor';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: any[] = [];
  public itemId: any[] = [];
  public totalPrice: any = 0;
  public grandTotal: any = 0;
  public coupon: any;
  public discount: any = 0;
  public orderTax: any = 0;
  public orderPrice: any;
  public shipping: any;
  public shippingPrice: any = 0;
  public minOrderPrice: any = 0;
  public freeShipping: any = 0;
  public datetime: any;
  public deliveryAt: any;
  public deliveryAddress: any;
  public deliveryPrice: any = 0;
  public stores: any[] = [];
  public subCart:any[] = [];
  public bulkOrder: any[] = [];
  public crrStoreToCart :any;
  public BaseShippingPrice :any = 0;
  public PerKmShippingPrice :any = 0;
  public storeDeliverLength:any = 10;
  public maxPriceForCod: any = 0;
  AdminInfo: any;
  constructor(
    public api: ApiService,
    public util: UtilService,
    public alertController: AlertController,
    private navCtrl: NavController,
  ) {
    this.util.getKeys('cart').then((data: any) => {
      if (data && data !== null && data !== 'null') {
        const userCart = JSON.parse(data);
        // console.log("user cart", userCart);
        if (userCart && userCart.length > 0) {
          this.cart = userCart;
          this.itemId = [...new Set(this.cart.map(item => item.id))];
          // console.log('this.cart==>',this.cart)
          this.calcuate();
        } else {
          this.calcuate();
        }
      } else {
        this.calcuate();
      }
    });

    this.api.get('general/index').subscribe((data: any) => {
      if(data.status == 200){
        console.log('data======general/index=======>',data)
          this.AdminInfo = data.data[0];
          this.BaseShippingPrice = parseInt(this.AdminInfo.shipping_price_for3)
          this.PerKmShippingPrice = parseInt(this.AdminInfo.shipping_price_after3);
          this.maxPriceForCod =  parseInt(this.AdminInfo.max_price_for_cod);
          
          // this.storeDeliverLength =  parseInt(this.AdminInfo.delivery_range)
      }
    })
  }
  clearCart() {
    this.cart = [];
    this.itemId = [];
    this.totalPrice = 0;
    this.grandTotal = 0;
    this.coupon = undefined;
    this.discount = 0;
    this.orderPrice = 0;
    this.datetime = undefined;
    this.stores = [];
    this.util.clearKeys('cart');
    this.util.isPaymentInit = false;

  }

 async addItem(item) {
 

      if(this.cart.length == 0 || this.cart.length > 0){
        const found = this.cart.find(storeInfo => storeInfo.store_id  == item.store_id );
        if(found){
          this.cart.push(item);
          this.itemId.push(item.id);
          this.calcuate();
        }else{
            if(this.cart.length > 0){
              this.cartAlertConfirm()
            }
            this.clearCart();
            this.cart.push(item);
            this.itemId.push(item.id);
            this.calcuate();
        }
      }
      this.getStoreInfo(item.store_id);
  }

  addAddOn(id,  parent, quantity){
    this.cart.forEach(element => {
      if (element.id == parent) {
        element.variations[0].items.forEach(addOnElement => {
          console.log('addOnElement',addOnElement)
          if(addOnElement.id == id){
            addOnElement.quantity = element.quantiy;
          }else{
            addOnElement.quantity = 0;
          }
        });

      }
    });
    this.calcuate();
  }


  addSubAddOn(id,  parent, quantity,index,type){
    let totalItem = this.cart.length || 0;
    totalItem = totalItem-1;

    if(totalItem<0) totalItem = 0;
    this.cart.forEach((element,i) => {      
      if (element.id == parent) {
          element.second_variation.forEach(elementVariant => {
            elementVariant.sub_category.forEach(elim => {
              // console.log('sas',elim)
              if(elim.id == id){
                elim.quantity = quantity;
              }else{
                if(elim.type == 'radio' &&  elim.type == type) {
                  elim.quantity = 0;
                }
              }
            })
          });
      }
      if(totalItem>=i){
        console.log('OVER::CART->SERVICE->addSubAddOn->element',this.cart);
        this.calcuate();
      }
      console.log(totalItem,'::CART->SERVICE->addSubAddOn->element',element,'id',id,'III',i);
    });
    if(totalItem==0) this.calcuate();
    
  }
  // addSubAddOnCheckBox(id,  parent, quantity,index){
  //   this.cart.forEach(element => {
  //     if (element.id == parent) {
  //         element.second_variation.forEach(element => {
  //           console.log(element)
  //           element.sub_category.forEach(elim => {
  //             if(elim.id == id){
  //               elim.quantity = quantity;
  //             }
  //           })
  //         });
  //     }
  //   });
  //   this.calcuate();
  // }

  addQuantity(quantity, id) {
    // console.log('addQuantity:')
    this.cart.forEach(element => {
      if (element.id === id) {
        // console.log('===========>',element)
        element.quantiy = quantity;
        if(element.variations && element.variations[0] && element.variations[0].items && element.variations[0].items.length && element.variations[0].items.length > 0 ){
          element.variations[0].items.forEach(addones => {
            if(addones.quantity > 0){
              addones.quantity = quantity;
            }else{
              addones.quantity = 0;
            }
          });
        }
      }
    });
    this.calcuate();
  }

  removeItem(id) {
    // console.log('removeItem:')
    this.cart = this.cart.filter(x => x.id !== id);
    this.itemId = this.itemId.filter(x => x !== id);

    this.calcuate();
  }

  subAddItem(item,id) {
    // console.log('subAddItem:')

    this.cart.push(item);
    this.itemId.push(id);
    this.calcuate();
  }

  subAddQuantity(quantity, id) {
    // console.log('subAddQuantity:')

    this.cart.forEach(element => {
      if (element.id === id) {
        element.quantiy = quantity;
      }
    });
    this.calcuate();
  }

  subRemoveItem(id) {
    // console.log('subRemoveItem:')

    // console.log('remove this item from cart');
    // console.log('current cart items', this.cart);
    this.cart = this.cart.filter(x => x.id !== id);
    this.itemId = this.itemId.filter(x => x !== id);

    if (this.cart.length) {
      this.calcuate();
    } else {
      this.clearCart();
    }
  }

  
  calcuate() {
    let total = 0;

    this.cart.forEach(element => {
      if (element && element.discount === '0') {
        if (element.size === '1' || element.size === 1) {
          // console.log('======1=========>')
          total = total + (parseFloat(element.original_price) * element.quantiy);
          // if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
          //   total = total + (parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy);
          // } else {
          //   total = total + (parseFloat(element.variations[0].items[element.variant].price) * element.quantiy);
          // }
        } else {
          // console.log('=====2=========>')
          total = total + (parseFloat(element.original_price) * element.quantiy);
        }
      } else {
        if (element.size === '1' || element.size === 1) {
          // if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
          //   total = total + (parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy);
          // } else {
          //   total = total + (parseFloat(element.variations[0].items[element.variant].price) * element.quantiy);
          // }
          total = total + (parseFloat(element.sell_price) * element.quantiy);
          // console.log('=====3=========>')

        } else {
          total = total + (parseFloat(element.sell_price) * element.quantiy);
          // console.log('====4=========>')

        }
      }
      // console.log("variant items", element.variations[0].items);
      if(element.variations[0]){
        let addon_items = element.variations[0].items;
        addon_items.forEach(addonElement => {
          if(addonElement.price > 0 && addonElement.quantity > 0){
            // console.log('=====5=========>')

            // let discount_price = (addonElement.discount / 100) * addonElement.price;
            total = total + ((parseFloat(addonElement.price)) * addonElement.quantity);
            // console.log('===6=========>')

          }
        });
      }
      if(element.second_variation){
        // console.log('here======>')
        for(let a=0; a < element.second_variation.length; a++){
          element.second_variation[a].sub_category= element.second_variation[a].sub_category;
            if(element.second_variation[a].sub_category){
              console.log(element.second_variation[a].sub_category,)
              element.second_variation[a].sub_category.forEach(addonElement => {
                // console.log('addonElement.price========>',addonElement.price ,)
                if(addonElement.price > 0 && addonElement.quantity > 0){
                  console.log()
                  total = total + ((parseFloat(addonElement.price)) * addonElement.quantity);      
                }
              });
          }
        }
      }
    });
    this.totalPrice = total.toFixed(2);

    if (this.coupon && this.coupon.type) {
      const min = parseFloat(this.coupon.min);
      if (this.totalPrice >= min) {
        if (this.coupon && this.coupon.type === 'per') {
          // console.log('i am here cart service==========>');
          function percentage(num, per) {
            return (num / 100) * per;
          }
          const totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), parseFloat(this.coupon.off));
          this.discount = totalPrice.toFixed(2);
          this.grandTotal = (this.totalPrice - parseFloat(this.discount));
          // console.log('this.grandTotal:::::',this.grandTotal);
          // console.log('this.discount:::::',this.discount)
        } else {
          // console.log('currency');
          this.discount = this.coupon.off;
          this.grandTotal = (this.totalPrice - parseFloat(this.discount)) 
          // console.log('this.grandTotal::::else:',this.grandTotal);
          // console.log('this.discount:::else:',this.discount)
        }
      } else {
        this.discount = 0;
        this.coupon = null;
      }
    } else {
      this.grandTotal = this.totalPrice;
    }



    if (this.stores && this.stores.length && this.deliveryAddress && this.deliveryAt === 'home') {
   
      this.deliveryPrice = 0;
      // this.grandTotal = this.totalPrice + this.deliveryPrice 
      let totalKM = 0;
      this.stores.forEach(async (element) => {
        // console.log('--->>> element==>>>', element);
        if(!element.delivery_range){
          element.delivery_range = 10;
        }else{
          this.storeDeliverLength = element.delivery_range;
        }
        
        const distance = await this.distanceInKmBetweenEarthCoordinates(this.deliveryAddress.lat, this.deliveryAddress.lng,
          element.lat, element.lng);
        // console.log('distance', distance);
        totalKM = totalKM + distance;
      });

      setTimeout(() => {
        if(totalKM >=  this.storeDeliverLength){
          this.util.errorToast(this.util.getString('store not provide delivery at your location'));
          this.navCtrl.back();
        }else{
          if(totalKM > 3){
            let other = totalKM - 3;
            let normalPrice = this.BaseShippingPrice;
            let priceOfExtraKm = other * this.PerKmShippingPrice;
            this.deliveryPrice = Math.floor(normalPrice + priceOfExtraKm).toFixed(2);
            // this.totalPrice =  this.totalPrice - this.discount;
            let grandTotPrice = parseFloat(this.totalPrice)  + parseFloat(this.deliveryPrice)

            if (!this.discount || this.discount === null) {
              this.discount = 0;
              this.grandTotal =  Math.floor(grandTotPrice).toFixed(2);
              this.grandTotal =  this.grandTotal -  this.discount;
            }else{
              this.grandTotal =  this.grandTotal -  this.discount;
            }
          

         } else{
          if (!this.discount || this.discount === null) {
            this.discount = 0;
            this.deliveryPrice = this.BaseShippingPrice;
            this.grandTotal = parseFloat(this.totalPrice) + this.deliveryPrice ;   
          }else{
            this.deliveryPrice = this.BaseShippingPrice;
            this.grandTotal =  parseFloat(this.totalPrice) + this.deliveryPrice ;   
            this.grandTotal =  this.grandTotal -  parseFloat(this.discount)
            
          }

   
         }
        }


        //   console.log('totalKM===========>',totalKM)
        // if (this.freeShipping > this.totalPrice) {
        //   if (this.shipping === 'km') {
        //     const distancePricer = totalKM * this.shippingPrice;
        // //    this.deliveryPrice = Math.floor(distancePricer).toFixed(2);
        // this.deliveryPrice = Math.floor(distancePricer).toFixed(2);
        //     if (!this.discount || this.discount === null) {
        //       this.discount = 0;
        //     }
        //     this.grandTotal = (this.totalPrice - parseFloat(this.discount))  + distancePricer;
        //     this.grandTotal = parseFloat(this.grandTotal).toFixed(2);
        //     // console.log('deliveryeeeeeeeee', this.deliveryPrice);
        //   } else {
        //     this.deliveryPrice = this.shippingPrice;
        //     if (!this.discount || this.discount === null) {
        //       this.discount = 0;
        //     }
        //     this.grandTotal = (this.totalPrice - parseFloat(this.discount)) + this.shippingPrice;
        //     this.grandTotal = parseFloat(this.grandTotal).toFixed(2);
        //     console.log('grand total===>>', this.grandTotal);
        //   }

        // } else {
        //   this.deliveryPrice = 0;
        //   // this.grandTotal = this.totalPrice + this.orderTax;
        //   console.log('discount', this.discount);
        //   if (!this.discount || this.discount === null) {
        //     this.discount = 0;
        //   }
        //   this.grandTotal = (this.totalPrice - parseFloat(this.discount)) ;
        //   this.grandTotal = parseFloat(this.grandTotal).toFixed(2);
        //   console.log('grand total===>>', this.grandTotal);
        // }
      }, 500);

    } else {
      // console.log(';globle else')
      if (!this.discount || this.discount === null) {
        this.discount = 0;
        this.deliveryPrice = this.BaseShippingPrice;
        this.grandTotal = parseFloat( this.totalPrice) + parseFloat(this.deliveryPrice) ;   
      }else{
        this.deliveryPrice = this.BaseShippingPrice;
        this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.deliveryPrice) ;   
        this.grandTotal =  this.grandTotal -  parseFloat(this.discount);
      }

    }





    this.util.clearKeys('cart');
    this.util.setKeys('cart', JSON.stringify(this.cart));
    // this.createBulkOrder();
    this.deliveryPrice = Math.floor(this.deliveryPrice).toFixed(2)
    this.grandTotal =   Math.floor(this.grandTotal).toFixed(2)
  }

  createBulkOrder() {
    const order = [];
    const ids = [...new Set(this.cart.map(item => item.store_id))];
    ids.forEach(element => {
      const param = {
        id: element,
        order: []
      };
      order.push(param);
    });

    ids.forEach((element, index) => {
      this.cart.forEach(cart => {
        if (cart.store_id === element) {
          order[index].order.push(cart);
        }
      })
    });
    this.bulkOrder = order;
    // console.log(order);
  }
  checkProductInCart(id) {
    return this.itemId.includes(id);
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  removeChild(childrenId){
    for(let i = 0; i < childrenId.length; i++){
      this.cart = this.cart.filter(x => x.id !== childrenId[i]);
      this.itemId = this.itemId.filter(x => x !== childrenId[i]);
      this.calcuate();
    }
  }

  distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    // console.log(lat1, lon1, lat2, lon2);
    const earthRadiusKm = 6371;

    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }

  checkChild(id){
    this.subCart = [];
    let cartItems = this.cart;
    // console.log("cartitems",cartItems, "length", cartItems.length );
    for(let i = 0; i< cartItems.length; i++){
      if(cartItems[i].parent_id != 0 || cartItems[i].parent_id != '0' || cartItems[i].parent_id != ''){
        // console.log("parent_id", cartItems[i].parent_id, "finish", id);
        let parentidArray = [];
        parentidArray = cartItems[i].parent_id.split(',');
        for(let j = 0; j < parentidArray.length; j++){
          if(parentidArray[j] != '0' && parentidArray[j] == id){
            this.subCart.push(cartItems[i]);
            this.calcuate();
          }
        }
      }
    }
    if(this.subCart.length > 0){
      return this.subCart;
    }else{
      return "";
    }
  }

  async cartAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header:this.util.getString('CHANGE TO') ,
      message: this.util.getString('You cant order from multiple stores, only the last order added to cart') ,
      buttons: [
         {
          text: 'Okay',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  getStoreInfo(id){
    const parms = {
      id:id
    }
    this.api.post('stores/getByUid',parms).subscribe((data: any) => {
      if(data.status == 200){
          this.crrStoreToCart = data.data[0]
          // this.storeDeliverLength =  parseInt(this.AdminInfo.delivery_range)
      }
    })
  }


}
