/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ApiService } from 'src/app/services/api.service';
import { AlertController, NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  id: any;
  name: any;
  subCates: any[] = [];
  tabSelected: any;
  products: any[] = [];
  dummyProducts: any[] = [];
  allProducts: any[] = [];
  limit: any;

  dummys = Array(20);
  dummyCates = Array(10);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public util: UtilService,
    public api: ApiService,
    private navCtrl: NavController,
    public cart: CartService,
    private alertCtrl: AlertController
  ) {
    this.dummys = Array(20);
    this.route.queryParams.subscribe((data) => {
      console.log(data);
      if (data && data.id) {
        this.id = data.id;
        this.limit = 1;
        this.name = data.name ? data.name : 'Top Picked';
        this.getCates();
      }
    });

  }

  getCates() {
    const param = {
      id: this.id
    };
    this.subCates = [];
    this.api.post('subcate/getByCId', param).subscribe((data: any) => {
      this.dummyCates = [];
      if (data && data.status === 200 && data.data && data.data.length) {
        console.log('subcates', data.data);
        this.subCates = data.data.filter(x => x.status === '1');
        this.tabSelected = this.subCates[0].id;
        this.getSubProducts(false, 'none');
      } else {
        this.dummys = [];
        this.dummyCates = [];
      }

    }, error => {
      console.log(error);
      this.dummys = [];
      this.dummyCates = [];
      this.util.errorToast(this.util.getString('Something went wrong'));
    });
  }

  getSubProducts(limit, event) {
    const city = {
      id: this.id,
      cid: localStorage.getItem('city'),
      sid: this.tabSelected,
      limit: this.limit * 10
    }
    console.log('parma', city);
    // this.loaded = false;
    this.api.post('products/getByCSID', city).subscribe((cates: any) => {
      console.log(cates);
      if (cates && cates.status === 200 && cates.data && cates.data.length) {
        console.log('products', cates.data);
        const products = cates.data;
        this.products = products.filter(x => x.status === '1');
        this.dummyProducts = this.products;
        // const cart = this.cart.cart;
        console.log('cart===============>>>>>>', this.cart.cart);
        this.products.forEach(info => {
          if (info.variations && info.size === '1' && info.variations !== '') {
            if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(info.variations)) {
              info.variations = JSON.parse(info.variations);
              info['variant'] = 0;
            } else {
              info.variations = [];
              info['variant'] = 1;
            }
          } else {
            info.variations = [];
            info['variant'] = 1;
          }

          if(info.variations[0]){
            info.variations[0].items.forEach(element => {
              element['quantity'] = 0;
              element.id = info.id + '_' + element.title;
            });
          }
          if (info.second_variation  && info.second_variation !== '') {
            if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(info.second_variation)) {
              info.second_variation = JSON.parse(info.second_variation);
              console.log('element.second_variation=>',info.second_variation)
              if(info.second_variation){
                info.second_variation.forEach(elementInner => {
                  console.log('elementInner=======>',elementInner)
                  elementInner.sub_category = JSON.parse(elementInner.sub_category);
                  if(elementInner.sub_category.length){
                    elementInner.sub_category.forEach((subcatelim,index) => {
                      subcatelim['quantity'] = 0;
                      subcatelim['id'] = info.id + '_' + subcatelim.en_title+index;
                      subcatelim['type'] = elementInner.type;
                    })
                  }
                })
              }

            } else {
              info.second_variation = [];
             // element['variant'] = 1;
            }
            
          } 
          if (this.cart.itemId.includes(info.id)) {
            const index = this.cart.cart.filter(x => x.id === info.id);
            info['quantiy'] = index[0].quantiy;
            if(info.variations[0]){
              info.variations[0].items.forEach(pageElement => {
                index[0].variations[0].items.forEach(cartElement => {
                  if(pageElement.id == cartElement.id){
                    pageElement.quantity = cartElement.quantity;
                  }
                });
              });
            }
          } else {
            info['quantiy'] = 0;
            if(info.variations[0]){
              info.variations[0].items.forEach(addOnElement => {
                addOnElement.quantity = 0;
              });
            }
          }
        });
        this.dummys = [];
      } else {
        this.dummys = [];
      }
      if (limit) {
        event.complete();
      }
    }, error => {
      console.log(error);
      this.dummys = [];
      this.util.errorToast(this.util.getString('Something went wrong'));
    });
  }

  addToCart(item, index) {
    console.log(item);
    this.products[index].quantiy = 1;
    this.cart.addItem(item);
  }


  add(product, index) {
    console.log(product);
    if (this.products[index].quantiy > 0) {
      this.products[index].quantiy = this.products[index].quantiy + 1;
      this.cart.addQuantity(this.products[index].quantiy, product.id);
    }
  }

  remove(product, index) {
    console.log(product, index);
    if (this.products[index].quantiy === 1) {
      this.products[index].quantiy = 0;
      this.cart.removeItem(product.id);
      this.cart.removeItem(product.id)
      if(this.products[index].variations[0]){
        this.products[index].variations[0].items.forEach(element => {
          element.quantity = 0;
        });
      }
    } else {
      this.products[index].quantiy = this.products[index].quantiy - 1;
      this.cart.addQuantity(this.products[index].quantiy, product.id);
    }
  }
  // getByCid
  onMenuClick(cid) {

    this.tabSelected = cid;
    this.limit = 1;
    this.dummyProducts = [];
    this.allProducts = [];
    this.dummys = Array(30);
    this.getSubProducts(false, 'none');
    this.content.scrollToPoint(0, 0, 1000);
  }

  ngOnInit() {
  }

  onProductClick(item) {
    console.log(item);
    console.log(item);
    const param: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };

    this.router.navigate(['product'], param);
  }

  back() {
    this.navCtrl.back();
  }

  onSearchChange(event) {
    if (event.detail.value) {
      this.allProducts = this.dummyProducts.filter((item) => {
        return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
      });
    } else {
      this.allProducts = [];
    }

  }

  singleProduct(item) {
    console.log(item);
    const param: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };

    this.router.navigate(['product'], param);
  }

  loadData(event) {
    console.log(event);
    this.limit = this.limit + 1;
    this.getSubProducts(true, event.target);
  }

  goToSingleProduct(item) {
    const param: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };

    this.router.navigate(['tabs/home/product'], param);
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
              console.log('before', this.products[indeX].variant);
              this.products[indeX].variant = data;
              console.log('after', this.products[indeX].variant);
            }
          }
        ]
      });

      await alert.present();
    } else {
      console.log('none');
    }

  }
}
