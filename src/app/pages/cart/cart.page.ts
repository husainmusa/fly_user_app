/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit,NgZone } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  loaded: boolean;
  deviceType = 'desktop';
  innerHeight: string;
  windowWidth: number;
  subQuantity:any;
  verticalNavType = 'expanded';
  verticalEffect = 'shrink';
  isShow: boolean;
  topPosToStartShowing = 100;
  subCart:any [] = [];
  latestCart:any = [];
  coupon: boolean;
  childrenId:any = [];
  // totalPrice: any;
  // serviceTax: any;
  deliveryCharge: any;
  // dicount: any;
  grandTotal: any;
  constructor(
    private ngZone : NgZone,
    public util: UtilService,
    private alertCtrl: AlertController,
    private router: Router,
    public cart: CartService,
    public api: ApiService,
    private navCtrl: NavController
  ) {
    console.log("cart page starts");
    console.log(this.cart.cart, "this cart");
    // this.cart.cart.forEach(element => {
    //   console.log("element", element);
    //   console.log(this.cart.cart, "this cart");
    //   if(element.parent_id != 0 || element.parent_id != '0'){
    //     this.subCart = this.cart.cart;
    //     console.log(this.subCart, "sub cart new");
    //   }
    // });

    // for(let i = 0; i < this.cart.cart.length;i++)
      // console.log("latest Cart", this.latestCart);
      // this.latestCart.forEach(element => {
      //   console.log("element id", element.id);
      //   this.checkChild(element.id);
      //   this.latestCart.push(this.subCart);
      // });
      // console.log("latest Cart", this.latestCart);
  }

  ionViewWillEnter(){
    this.subItems();
   // console.log(this.cart.cart, "this cart");
   this.cart.cart = this.cart.cart;
  }

  ngOnInit() {
  }

  openMenu() {
    this.util.openMenu();
  }

  addAddOn(item, parent) {
    let id = item.id;
    parent.variations[0].items.forEach(element => {
      if(element.id == id){
        console.log("element id", element.id, id);
        element.quantity = element.quantity + 1;
        this.cart.addAddOn(id, parent.id, element.quantity);
      }
    });


  }

  removeAllAdones(parent){
    parent.variations[0].items.forEach(element => {
        element.quantity = 0;
        this.cart.addAddOn('none', parent.id, element.quantity);
      
    });
  }
  rmSubAddOnQty(item, parent ,type,event,index){

  }

  addSubAddOnQty(item, parent ,type,event,index){
  
  }
  minusAddOn(item, parent) {
    // this.parentId = id;
    // const param = {
    //   id: this.parentId
    // };
    console.log("item", item, parent);
    let id = item.id;
    parent.variations[0].items.forEach(element => {
      if(element.id == id){
        console.log("element id", element.id, id);
        element.quantity = element.quantity - 1;
        this.cart.addAddOn(id, parent.id, element.quantity);
      }
    });
  }

  subItems(){
    this.subCart = [];
    for(let i = 0; i < this.cart.cart.length; i++){
      if(this.cart.cart[i].parent_id != "0" || this.cart.cart[i].parent_id != 0 ){
        let parent_id = this.cart.cart[i].parent_id.split(',');
        for(let j = 0; j < parent_id.length; j++ ){
          if(parent_id[j] != 0 || parent_id[j] != "0"){
            console.log("parent_id", parent_id[j], this.cart.cart[i].id);
            let temp = JSON.parse(JSON.stringify(this.cart.cart[i]));
            console.log("before",  temp.parent_id, this.cart.cart[i].id);
            temp.parent_id = parent_id[j];
            console.log("after",  temp.parent_id, this.cart.cart[i].id);
            this.subCart.push(temp);
            console.log(this.subCart);
          }
        }
      }
    }
  }

  removeChild(parentId){
    const cart = this.cart.cart;
    const cartlength = cart.length;
    for(let i = 0; i < cartlength; i++){  
      let parent_id = cart[i].parent_id.split(',');
      for(let j = 0; j < parent_id.length; j++ ){
        if(parent_id[j] == parentId){
          this.childrenId.push(cart[i].id);
        }
      }
    }
    this.cart.removeChild(this.childrenId);
  }

  add(product, index) {
    if (this.cart.cart[index].quantiy > 0) {
      this.cart.cart[index].quantiy = this.cart.cart[index].quantiy + 1;
      this.cart.addQuantity(this.cart.cart[index].quantiy, product.id);
    }
  }

  remove(product, index) {
    if (this.cart.cart[index].quantiy === 1) {
      if(this.cart.cart[index].variations[0]){
        this.cart.cart[index].variations[0].items.forEach(element => {
          element.quantity = 0;
        });
      }
      this.cart.cart[index].quantiy = 0;
      this.cart.removeItem(product.id)
    } else {
      this.cart.cart[index].quantiy = this.cart.cart[index].quantiy - 1;
      this.cart.addQuantity(this.cart.cart[index].quantiy, product.id);
    }
  }

  goToPayment() {
    console.log('======goToPayment:=========>',this.cart);
    if(this.cart.crrStoreToCart.isClosed === '1' ){
      this.util.errorToast(this.util.getString("Store is closed. you can't order this time!"));
    }else{
      if (this.cart.totalPrice < this.cart.minOrderPrice) {
        let text;
        if (this.util.cside === 'left') {
          text = this.util.currecny + ' ' + this.cart.minOrderPrice;
        } else {
          text = this.cart.minOrderPrice + ' ' + this.util.currecny;
        }
        this.util.errorToast(this.util.getString('Minimum order amount must be') + text + this.util.getString('or more'));
        return false;
      }
  
      this.util.isPaymentInit = true;
  
      this.router.navigate(['/tabs/cart/delivery-options']);
    }

  }

  back() {
    this.navCtrl.back();
  }

  openCoupon() {
    this.router.navigate(['offers']);
  }

  async variant(item, indeX) {
    console.log(item);
    const allData = [];
    console.log(item && item.variations !== '');
    console.log(item && item.variations !== '' && item.variations.length > 0);
    console.log(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0);
    if (item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0) {
      console.log('->', item.variations[0].items);
      item.variations[0].items.forEach((element, index) => {
        console.log('OK');
        let title = '';
        if (this.util.cside === 'left') {
          const price = item.variations && item.variations[0] &&
            item.variations[0].items[index] &&
            item.variations[0].items[index].discount ? item.variations[0].items[index].discount :
            item.variations[0].items[index].price;
          title = element.title + ' - ' + this.util.currecny + ' ' + price;
        } else {
          const price = item.variations && item.variations[0] && item.variations[0].items[index] &&
            item.variations[0].items[index].discount ? item.variations[0].items[index].discount :
            item.variations[0].items[index].price;
          title = element.title + ' - ' + price + ' ' + this.util.currecny;
        }
        const data = {
          name: element.title,
          type: 'radio',
          label: title,
          value: index,
          checked: item.variant === index
        };
        allData.push(data);
      });

      console.log('All Data', allData);
      const alert = await this.alertCtrl.create({
        header: item.name,
        inputs: allData,
        buttons: [
          {
            text: this.util.getString('Cancel'),
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: this.util.getString('Ok'),
            handler: (data) => {
              console.log('Confirm Ok', data);
              console.log('before', this.cart.cart[indeX].variant);
              this.cart.cart[indeX].variant = data;
              console.log('after', this.cart.cart[indeX].variant);
              this.cart.calcuate();
            }
          }
        ]
      });

      await alert.present();
    } else {
      console.log('none');
    }
  }

  subAdd(id){
    this.subQuantity = this.getSubQuanity(id);
    this.subQuantity = this.subQuantity + 1;
    this.cart.subAddQuantity(this.subQuantity, id);
  }

  subRemove(id) {
    this.subQuantity = this.getSubQuanity(id);
    if (this.subQuantity === 1) {
      this.subQuantity = 0;
      this.cart.removeItem(id);
      this.subItems();
    } else {
      this.subQuantity = this.subQuantity - 1;
      this.cart.subAddQuantity(this.subQuantity, id);
    }
  }

  // checkChild(id){
  //   this.subCart = [];
  //   let cartItems = this.cart.cart;
  //   console.log("cartitems",cartItems, "length", cartItems.length );
  //   for(let i = 0; i< cartItems.length; i++){
  //     if(cartItems[i].parent_id != 0 || cartItems[i].parent_id != '0' || cartItems[i].parent_id != ''){
  //       console.log("parent_id", cartItems[i].parent_id, "finish", id);
  //       let parentidArray = [];
  //       parentidArray = cartItems[i].parent_id.split(',');
  //       for(let j = 0; j < parentidArray.length; j++){
  //         if(parentidArray[j] != '0' && parentidArray[j] == id){
  //           this.subCart.push(cartItems[i]);
  //           this.cart.calcuate();
  //         }
  //       }
  //     }
  //   }
  //   if(this.subCart != ""){
  //     return this.subCart;
  //   }else{
  //     return "";
  //   }
  // }

  getSubQuanity(id) {
    const data = this.cart.cart.filter(x => x.id === id);
    console.log("getSubQuanity", data);
    let quantity = data[0].quantiy;
    return quantity;
  }
  toggle(data, value){
    data['isOpen']=value
}

addSubAddOn(item, parent ,type,event,index) {
  this.ngZone.run(()=>{
    let qty = type == 'radio' ? 1 : ( (type == 'checkbox' && event.target.checked) ? 1 : 0);
    this.cart.addSubAddOn(item.id, parent,qty, index,type);   
  }); 

}

addRemoveSubAddonQty(item, parent ,type,event,index,opration) {
  let id = item.id;
  if(opration === 'add'){
    let quentity = item.quantity + 1;
    this.cart.addSubAddOn(id, parent,quentity, index,type);
  }else{
    let quentity = item.quantity - 1;
    this.cart.addSubAddOn(id, parent,quentity, index,type);
  }

}



}
