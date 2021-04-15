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
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { CartService } from 'src/app/services/cart.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { cpuUsage } from 'process';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  // img;
  // price;
  // proDetail;
  // chipVal;
  // products;
  qty = 0;

  loaded: boolean;

  name: any = '';
  realPrice: any;
  sellPrice: any;
  discount: any;
  description: any;
  is_single: any;
  subId: any;
  status: any;
  coverImage: any = '';
  veg: any;
  addons:any = [];
  have_gram: any;
  gram: any;
  have_kg: any;
  kg: any;
  have_pcs: any;
  pcs: any;
  have_liter: any;
  liter: any;
  have_ml: any;
  ml: any;
  exp_date: any;
  childrenId:any = [];
  in_stoke: any;
  in_offer: any;
  key_features: any = '';
  disclaimer: any = '';
  subProductId: any[] = [];
  parent: any[] = [];
  relatedProduct: any[] = [];
  second_sub_variation: any[] = [];
  selectedProduct:any;
  subProduct:any;
  subQuantity:any; 
  id: any;
  parentId:any;
  rate: any;
  gallery: any[] = [];
  slideOpts = {
    slidesPerView: 1,
  };
  SelectedSecondryAddons: any[] = [];
  slideOpts1 = {
    slidesPerView: 2.5,
  };
  related: any[] = [];
  quantiy: any = 0;
  productt: any;
  totalRating: any;
  storeId: any;
  storeName: any;
  size: any;
  variations: any;
  second_variation: any;
  variant: any;
  second_variant: number;
  constructor(
    public api: ApiService,
    private ngZone : NgZone,
    public util: UtilService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    public cart: CartService,
    private modalController: ModalController,
    private alertCtrl: AlertController
  ) {

    this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      if (data && data.id) {
        this.loaded = false;
        this.id = data.id;
        this.getProduct();
      }
    })
  }
  async openViewer(url) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: url
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  ionViewWillEnter(){
    
  }
  
  removeChild(parentId){
    console.log(this.cart.cart.length, "cartlength");
    const cart = this.cart.cart;
    const cartlength = cart.length;
    for(let i = 0; i < cartlength; i++){  
      console.log(this.cart.cart.length, "cartlength inside" , i);
      console.log("this cart", this.cart.cart[i]);
      let parent_id = cart[i].parent_id.split(',');
      console.log("parentid",parent_id, "id", this.cart.cart[i].id );
      for(let j = 0; j < parent_id.length; j++ ){
        if(parent_id[j] == parentId){
          this.childrenId.push(cart[i].id);
        }
      }
    }
    this.cart.removeChild(this.childrenId);
  }

  getRelated() {
    const param = {
      id: this.productt.cate_id,
      limit: 1000,
      cid: localStorage.getItem('city')
    };
    this.subProductId = [];
    this.related = [];
    this.api.post('products/getRelated', param).subscribe((data: any) => {
      // for(let i = 0; i < data.data.length; i++){
      //   this.parent = data.data[i]['parent_id'].split(',');
      //   for(let j = 0; j < this.parent.length; j++){
      //     console.log(this.selectedProduct);
      //     console.log("parent", this.parent[j]);
      //     console.log("exit");
      //     if(this.parent[j] == this.selectedProduct  && this.parent[j] != 0){
      //       this.subProductId.push(data.data[i]);
      //       console.log("sub products",this.subProductId )
      //       // this.getSubQuanity(data.data[i].id);
      //       if (data.data[i].variations && data.data[i].size === '1' && data.data[i].variations !== '') {
      //         if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(data.data[i].status)) {
      //           this.variations = JSON.parse(data.data[i].variations);
      //           this.variant = 0;
      //           data.data[i]['variations'] = JSON.parse(data.data[i].variations);
      //           data.data[i]['variant'] = 0;
      //         } else {
      //           data.data[i].variations = [];
      //           data.data[i]['variations'] = [];
      //           this.variant = 1;
      //           data.data[i]['variant'] = 1;
      //         }
      //       } else {
      //         this.variations = [];
      //         this.variant = 1;
      //         this.productt['variations'] = [];
      //         this.productt['variant'] = 1;
      //       }
      //       this.checkCartItems();
      //     }   
      //   }
      // }
      console.log("subproduct", this.subProductId);
      console.log('=>related=>', data);
      if (data && data.status === 200 && data.data && data.data.length) {
        const products = data.data;
        this.relatedProduct = [];
        for(let i = 0; i< products.length; i++){
          if(products[i].parent_id == '0' || products[i].parent_id == ''){
            this.relatedProduct.push(products[i]);
          }
        }
        this.related = this.relatedProduct.filter(x => (x.id !== this.id  && x.store_id == this.productt.store_id ));
        console.log('related',this.related)
      }
    }, error => {
      console.log(error);
    });
  }

  checkCartItems() {
    const item = this.cart.cart.filter(x => x.id === this.id);
      console.log('item i am hgere',item)
    if (item && item.length) {
      this.quantiy = item[0].quantiy;
      if(this.productt.variations[0]){
        this.productt.variations[0].items.forEach(pageElement => {
          item[0].variations[0].items.forEach(cartElement => {
            if(pageElement.id == cartElement.id){
              pageElement.quantity = cartElement.quantity;
            }
          });
        });
      }

      if(this.productt.second_variation){
        this.productt.second_variation.forEach(pageElement => {
          pageElement.sub_category.forEach(elementinnerPage => {
           item[0].second_variation.forEach(cartElementout => {
            cartElementout.sub_category.forEach(element => {
             if(element.id == elementinnerPage.id){
              elementinnerPage.quantity = element.quantity;
             }
            });
   
          });
          });

        });
      }
    }
    console.log("this product after", this.productt, this.quantiy);
  }

  getProduct() {
    this.selectedProduct = this.id;
    const param = {
      id: this.id
    }
    this.api.post('products/getById', param).subscribe((data: any) => {
      this.loaded = true;
      console.log(data);
      this.gallery = [];
      if (data && data.status === 200 && data.data && data.data.length) {
        const info = data.data[0];
        this.productt = info;
        console.log('  this.productt ::::::',  this.productt)
        this.productt['quantiy'] = 0;
       
        // console.log("json parsed", JSON.parse(this.productt.variations[0].items));
        
        this.name = info.name;
        this.description = info.descriptions;
        this.subId = info.sub_cate_id;
        this.coverImage = info.cover;
        this.key_features = info.key_features;
        this.disclaimer = info.disclaimer;
        this.discount = info.discount;
        this.exp_date = info.exp_date;
        this.gram = info.gram;
        this.have_gram = info.have_gram;
        this.kg = info.kg;
        this.have_kg = info.have_kg;
        this.liter = info.liter;
        this.have_liter = info.have_liter;
        this.ml = info.ml;
        this.have_ml = info.have_ml;
        this.pcs = info.pcs;
        this.have_pcs = info.have_pcs;
        this.in_offer = info.in_offer;
        this.in_stoke = info.in_stoke;
        this.is_single = info.is_single;
        this.veg = info.kind;
        this.realPrice = parseFloat(info.original_price);
        this.sellPrice = parseFloat(info.sell_price);
        this.status = info.status;
        this.rate = info.rating;
        this.totalRating = info.total_rating;
        this.storeId = info.store_id;
        this.storeName = info.s_name;
        this.gallery.push(this.coverImage);
        this.size = info.size;
        this.quantiy = info.quantiy;

        if (info.variations && info.size === '1' && info.variations !== '') {
          if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(info.variations)) {
            this.variations = JSON.parse(info.variations);
            this.variant = 0;
            this.productt['variations'] = JSON.parse(info.variations);
            this.productt['variant'] = 0;
          } else {
            info.variations = [];
            this.productt['variations'] = [];
            this.variant = 1;
            this.productt['variant'] = 1;
          }
        } else {
          this.variations = [];
          this.second_variation =[]
          this.variant = 1;
          this.productt['variations'] = [];
          this.productt['variant'] = 1;
        }
        if (info.second_variation && info.second_variation !== '') {
          if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(info.second_variation)) {
            this.second_variation = JSON.parse(info.second_variation);
            this.variant = 0;
            this.productt['second_variation'] = JSON.parse(info.second_variation);
            this.productt['second_variant'] = 0;
              for(let a=0; a < this.productt.second_variation.length; a++){
                // console.log('sadssdasdasdasdasdasda',JSON.parse(this.productt.second_variation[a].sub_category))
                this.productt.second_variation[a]['sub_category']= JSON.parse(this.productt.second_variation[a].sub_category);
                  if(this.productt.second_variation[a]['sub_category']){
                    console.log(' this.productt.second_variation[a]==>', this.productt.second_variation[a])
                    this.productt.second_variation[a]['sub_category'].forEach((element,index) => {
                      element['quantity'] = 0;
                      element['id'] = this.id + '_' + element.en_title+ index;
                      element['type'] = this.productt.second_variation[a].type;

                    });
                }
              }

              // console.log('sadssdasdasdasdasdasda', this.productt)
          } else {
            info.variations = [];
            this.productt['second_variation'] = [];
            this.variant = 1;
            this.productt['second_variant'] = 1;
          }
        } else {
          this.second_variation =[]
          this.second_variant = 1;
          this.productt['second_variation'] = [];
          this.productt['second_variant'] = 1;
        }


        if(this.productt.variations[0]){
          if(this.productt.variations[0]){
            this.productt.variations[0].items.forEach(element => {
              element['quantity'] = 0;
              element.id = this.id + '_' + element.title;
            });
          }
        }

        // if(this.productt.second_variation){
        //   if(this.productt.second_variation){
        //     this.productt.second_variation.forEach(element => {
        //       console.log('element,element',element)
        //       element.id = this.id + '_' + element.en_cat_title;
        //     });
        //   }
        // }
                

        // console.log("producttttt", this.productt.variations[0].items);
        // this.addOns();
        this.checkCartItems();
        if (info.images) {
          const images = JSON.parse(info.images);
          console.log('images[0]=====>>>', (images[0]));
          if (images[0] !== 'NULL') {
            this.gallery.push(images[0]);
          }
          if (images[1]!== 'NULL') {
            this.gallery.push(images[1]);
          }
          if (images[2]!== 'NULL') {
            this.gallery.push(images[2]);
          }
          if (images[3]!== 'NULL') {
            this.gallery.push(images[3]);
          }
          if (images[4]!== 'NULL') {
            this.gallery.push(images[4]);
          }
          if (images[5]!== 'NULL') {
            this.gallery.push(images[5]);
          }
        }
        this.getRelated();
      }

    }, error => {
      console.log(error);
      this.loaded = true;
      this.util.errorToast(this.util.getString('Something went wrong'));
    });
  }

  back() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

  gotoStore() {
    const param: NavigationExtras = {
      queryParams: {
        id: this.storeId,
        name: this.storeName
      }
    };
    this.router.navigate(['tabs/home/store'], param);
  }

  add() {
    this.quantiy = this.quantiy + 1;
    this.cart.addQuantity(this.quantiy, this.id);
  }

  remove() {
    if (this.quantiy === 1) {
      if(this.productt.variations[0]){
        this.productt.variations[0].items.forEach(element => {
          element.quantity = 0;
        });
      }
      this.quantiy = 0;
      this.cart.removeItem(this.id)
    } else {
      this.quantiy = this.quantiy - 1;
      this.cart.addQuantity(this.quantiy, this.id);
    }
  }

  onShare() {

  }

  onFav() {
    if (this.util.favIds.includes(this.id)) {
      console.log('remove this')
      this.util.removeFav(this.id);
      console.log('after removed', this.util.favIds);
      console.log('edit');
      const param = {
        id: localStorage.getItem('uid'),
        ids: this.util.favIds.join()
      };
      this.util.haveFav = true;
      console.log('parama', param)
      this.api.post('favourite/editList', param).subscribe((data: any) => {
        console.log('save response', data);
        if (data && data.status !== 200) {
          this.util.errorToast(this.util.getString('Something went wrong'));
        }
      }, error => {
        console.log('error on save', error);
        this.util.errorToast(this.util.getString('Something went wrong'));
      });
    } else {
      console.log('add new');
      this.util.setFav(this.id);
      console.log('after added', this.util.favIds);
      if (this.util.haveFav) {
        console.log('edit');
        const param = {
          id: localStorage.getItem('uid'),
          ids: this.util.favIds.join()
        };
        this.util.haveFav = true;
        console.log('parama', param)
        this.api.post('favourite/editList', param).subscribe((data: any) => {
          console.log('save response', data);
          if (data && data.status !== 200) {
            this.util.errorToast(this.util.getString('Something went wrong'));
          }
        }, error => {
          console.log('error on save', error);
          this.util.errorToast(this.util.getString('Something went wrong'));
        });
      } else {
        console.log('save');
        const param = {
          uid: localStorage.getItem('uid'),
          ids: this.util.favIds.join()
        };
        this.util.haveFav = true;
        console.log('parama', param)
        this.api.post('favourite/save', param).subscribe((data: any) => {
          console.log('save response', data);
          if (data && data.status !== 200) {
            this.util.errorToast(this.util.getString('Something went wrong'));
          }
        }, error => {
          console.log('error on save', error);
          this.util.errorToast(this.util.getString('Something went wrong'));
        });
      }
    }
  }

  singleProduct(item) {
    const param: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };

    this.router.navigate(['/tabs/categories/product'], param);
  }

  productRating() {
    const param: NavigationExtras = {
      queryParams: {
        id: this.id,
        name: this.name,
        type: 'product'
      }
    }

    this.router.navigate(['/tabs/home/ratings'], param);
  }

  // async variants() {

  //   const allData = [];

  //   if (this.variations !== '' && this.variations.length > 0 && this.variations[0].items.length > 0) {
  //     console.log('->', this.variations[0].items);
  //     this.variations[0].items.forEach((element, index) => {
  //       console.log('OK');
  //       let title = '';
  //       if (this.util.cside === 'left') {
  //         const price = this.variations && this.variations[0] &&
  //           this.variations[0].items[index] &&
  //           this.variations[0].items[index].discount ? this.variations[0].items[index].discount :
  //           this.variations[0].items[index].price;
  //         title = element.title + ' - ' + this.util.currecny + ' ' + price;
  //       } else {
  //         const price = this.variations && this.variations[0] && this.variations[0].items[index] &&
  //           this.variations[0].items[index].discount ? this.variations[0].items[index].discount :
  //           this.variations[0].items[index].price;
  //         title = element.title + ' - ' + price + ' ' + this.util.currecny;
  //       }
  //       const data = {
  //         name: element.title,
  //         type: 'radio',
  //         label: title,
  //         value: index,
  //         checked: this.variant === index
  //       };
  //       allData.push(data);
  //     });

  //     console.log('All Data', allData);
  //     const alert = await this.alertCtrl.create({
  //       header: this.name,
  //       inputs: allData,
  //       buttons: [
  //         {
  //           text: this.util.getString('Cancel'),
  //           role: 'cancel',
  //           cssClass: 'secondary',
  //           handler: () => {
  //             console.log('Confirm Cancel');
  //           }
  //         }, {
  //           text: this.util.getString('Ok'),
  //           handler: (data) => {
  //             console.log('Confirm Ok', data);
  //             console.log('before', this.variant);
  //             this.variant = data;
  //             console.log('after', this.variant);
  //             this.productt['variant'] = data;
  //           }
  //         }
  //       ]
  //     });

  //     await alert.present();
  //   } else {
  //     console.log('none');
  //   }
  // }

  // addOns() {
  //   this.addons = [];
  //   if (this.variations !== '' && this.variations.length > 0 && this.variations[0].items.length > 0) {
  //     console.log('->', this.variations[0].items);
  //     this.variations[0].items.forEach((element) => {
  //       this.addons.push(element);
  //       console.log("addon", this.addons);
  //     });
  //   } else {
  //     console.log('none');
  //   }
  // }

  addToCart() {
    this.quantiy = 1;
    this.productt.quantiy = 1;
    // console.log("this product", this.productt, this.variations[0].items);
    this.cart.addItem(this.productt);
  }
  
  addSubToCart(id) {
    this.subId = id;
    const param = {
      id: this.subId
    };
    this.api.post('products/getById', param).subscribe((data: any) => {
      console.log(data), "data";
      if (data && data.status === 200 && data.data && data.data.length) {
        const info = data.data[0];
        this.subProduct = info;
        this.subQuantity = 1;
        this.subProduct.quantiy = 1;
        console.log("sub quantity", this.subProduct.quantiy);
        this.cart.subAddItem(this.subProduct,id);
      }
    });
  }

  // addAddOn(item, parent) {
  //   // this.parentId = id;
  //   // const param = {
  //   //   id: this.parentId
  //   // };
  //   console.log('parent',parent)
  //   console.log("item", item, parent);
  //   let id = item.id;
  //   this.productt.variations[0].items.forEach(element => {
  //     if(element.id == id){
  //       console.log("element id", element.id, id);
  //       element.quantity = element.quantity + 1;
  //       // console.log(this.variations[0].items);
  //       this.cart.addAddOn(id, parent, element.quantity);
  //     }
  //   });
  // }

  minusAddOn(item, parent) {
    console.log("item", item, parent);
    let id = item.id;
    this.productt.variations[0].items.forEach(element => {
      if(element.id == id){
        console.log("element id", element.id, id);
        element.quantity = element.quantity - 1;
        console.log(this.variations[0].items);
        this.cart.addAddOn(id, parent, element.quantity);
      }
    });
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
    } else {
      this.subQuantity = this.subQuantity - 1;
      this.cart.subAddQuantity(this.subQuantity, id);
    }
  }

  getSubQuanity(id) {
    const data = this.cart.cart.filter(x => x.id === id);
    console.log("getSubQuanity", data);
    let quantity = data[0].quantiy;
    return quantity;
  }

  addAddOn(item, parent) {
    // this.parentId = id;
    // const param = {
    //   id: this.parentId
    // };
    console.log('parent<<<==',parent)
    console.log("item<<<==", item, parent);
    let id = item.id;
    this.productt.variations[0].items.forEach(element => {
      if(element.id == id){
        console.log("element id", element.id, id);
        element.quantity = element.quantity + 1;
        // console.log(this.variations[0].items);
        this.cart.addAddOn(id, parent, element.quantity);
      }
    });
  }


  addSubAddOn(item, parent ,type,event,index) {
    /*let id = item.id;
    if(type == 'radio'){
      let id = item.id;
      this.cart.addSubAddOn(id, parent,1, index ,type);
      
    }
    if(type == 'checkbox'){
      if(event.target.checked ){
        let id = item.id;
        this.cart.addSubAddOn(id, parent,1, index,type);
      }else{
        let id = item.id;
        this.cart.addSubAddOn(id, parent,0, index,type);
      }
    }*/
    this.ngZone.run(()=>{
      let qty = type == 'radio' ? 1 : ( (type == 'checkbox' && event.target.checked) ? 1 : 0);
      this.cart.addSubAddOn(item.id, parent,qty, index,type);
      console.log(qty,'::item ->addSubAddOn::',item);

      this.checkCartItems();
    });   
 
  }


  toggle(data, value){
      data['isOpen']=value
  }

  removeAllAdones(parent){
    parent.variations[0].items.forEach(element => {
        element.quantity = 0;
        this.cart.addAddOn('none', parent.id, element.quantity);
      
    });
  }


  addRemoveSubAddonQty(item, parent ,type,event,index,opration) {
    console.log('item======addRemoveSubAddonQty=>',item)  
    let id = item.id;
    if(opration === 'add'){
      
      let quentity = item.quantity + 1;
      this.cart.addSubAddOn(id, parent,quentity, index,type);
      this.checkCartItems();
    }else{
      let quentity = item.quantity - 1;
      this.cart.addSubAddOn(id, parent,quentity, index,type);
      this.checkCartItems();
    }

    console.log('item======addRemoveSubAddonQty=fff>',item)
  }
  
}
