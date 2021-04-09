/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { Router, NavigationExtras } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import * as moment from 'moment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    slidesPerView: 1.3,
  };
  slideTops = {
    slidesPerView: 2,
    spaceBetween: 5,
    slideShadows: true,
  }
  categories: any[] = [];
  dummyCates: any[] = [];

  dummyBanners: any[] = [];
  banners: any[] = [];

  bottomDummy: any[] = [];
  bottomBanners: any[] = [];

  betweenDummy: any[] = [];
  betweenBanners: any[] = [];

  dummyTopProducts: any[] = [];
  topProducts: any[] = [];

  products: any[] = [];
  dummyProducts: any[] = [];

  haveStores: boolean;

  dummyStores: any[] = [];
  stores: any[] = [];
  storeCopy: any[] = [];
  terms: any;
  
  allcates: any[] = [];
  constructor(
    public util: UtilService,
    private router: Router,
    public api: ApiService,
    public cart: CartService,
    private chMod: ChangeDetectorRef,
    private iab: InAppBrowser,
    private alertCtrl: AlertController
  ) {
    console.log("direction", this.util.direction );
    this.dummyCates = Array(5);
    this.dummyBanners = Array(5);
    this.bottomDummy = Array(5);
    this.betweenDummy = Array(5);
    this.dummyTopProducts = Array(5);
    // this.dummyProducts = Array(5);
    this.categories = [];
    this.banners = [];
    this.bottomBanners = [];
    this.betweenBanners = [];
    this.topProducts = [];
    this.products = [];
    if (!this.util.appClosed) {
      this.getInit();
      const pop = localStorage.getItem('pop');
      if (pop && pop != null && pop !== 'null') {
        console.log('alredy poped');
      } else {
        console.log('open pop');
        this.getPopup();
      }
    }
    this.util.subscribeCity().subscribe((data) => {
      this.dummyCates = Array(5);
      this.dummyBanners = Array(5);
      this.bottomDummy = Array(5);
      this.betweenDummy = Array(5);
      this.dummyTopProducts = Array(5);
      // this.dummyProducts = Array(5);
      this.categories = [];
      this.banners = [];
      this.bottomBanners = [];
      this.betweenBanners = [];
      this.topProducts = [];
      this.products = [];
      if (!this.util.appClosed) {
        this.getInit();
      }
    });

  }

  getPopup() {

    this.api.get('popup').subscribe(async (data: any) => {
      console.log('popup message', data);
      if (data && data.status === 200) {
        const info = data.data[0];
        const alertCtrl = await this.alertCtrl.create({
          header: this.util.getString('Message'),
          message: info.message,
          mode: 'ios',
          buttons: [this.util.getString('Cancle'), this.util.getString('Ok')],
        });
        localStorage.setItem('pop', 'true');
        alertCtrl.present();
      }
    }, error => {
      console.log(error);
    });
  }
  getInit() {
    this.getCity();
    this.dummyCates = Array(5);
    this.dummyBanners = Array(5);
    this.bottomDummy = Array(5);
    this.betweenDummy = Array(5);
    this.dummyTopProducts = Array(5);
    // this.dummyProducts = Array(5);
    this.categories = [];
    this.banners = [];
    this.bottomBanners = [];
    this.betweenBanners = [];
    this.topProducts = [];
    this.products = [];
    const param = {
      id: localStorage.getItem('city')
    }
    this.api.post('stores/getByCity', param).subscribe((stores: any) => {
      console.log('stores by city', stores);
      this.stores = [];
      this.storeCopy = [];
      if (stores && stores.status === 200 && stores.data && stores.data.length) {
        console.log('city found');
        this.stores = stores.data;
        console.log("before sort", this.stores);
        this.stores.forEach(val => this.storeCopy.push(Object.assign({}, val)));
        this.storeCopy = this.storeCopy.sort((b, a) => a.id - b.id)
        console.log("after sort=========>",this.storeCopy);

        this.stores.forEach(async (element) => {
          element['isOpen'] = await this.isOpen(element.open_time, element.close_time);
        });
        console.log('store====>>>', this.stores);
        this.haveStores = true;
        this.getCategorys();
        this.getBanners();

        this.topProducts = [];
        this.dummyTopProducts = Array(5);
        this.api.post('products/getTopRated', param).subscribe((data: any) => {
          console.log('top products', data);
          this.dummyTopProducts = [];
          if (data && data.status === 200 && data.data && data.data.length) {
            data.data.forEach(element => {
              if (element.variations && element.size === '1' && element.variations !== '') {
                if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(element.variations)) {
                  element.variations = JSON.parse(element.variations);
                  element['variant'] = 0;
                } else {
                  element.variations = [];
                  element['variant'] = 1;
                }
                
              } else {
                element.variations = [];
                element['variant'] = 1;
              }
              if (element.second_variation  && element.second_variation !== '') {
                if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(element.second_variation)) {
                  element.second_variation = JSON.parse(element.second_variation);
                  console.log('element.second_variation=>',element.second_variation)
                  if(element.second_variation){
                    element.second_variation.forEach(elementInner => {
                      console.log('elementInner=======>',elementInner)
                      elementInner.sub_category = JSON.parse(elementInner.sub_category);
                      if(elementInner.sub_category.length){
                        elementInner.sub_category.forEach((subcatelim , index )=> {
                          subcatelim['quantity'] = 0;
                          subcatelim['id'] = element.id + '_' + subcatelim.en_title+ index;
                          subcatelim['type'] = elementInner.type;
                        })
                      }
                    })
                  }

                } else {
                  element.second_variation = [];
                 // element['variant'] = 1;
                }
                
              } 

              // if (element.second_variation && element.second_variation !== '') {
              //   if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(element.second_variation)) {
              //     element.second_variation = JSON.parse(element.second_variation);
              //       for(let a=0; a < element.second_variation.length; a++){
              //         element.second_variation[a]['sub_category']= JSON.parse(element.second_variation[a].sub_category);
              //           if(element.second_variation[a]['sub_category']){
              //             console.log(' this.productt.second_variation[a]==>', element.second_variation[a])
              //             element.second_variation[a]['sub_category'].forEach(element => {
              //               element['quantity'] = 0;
              //               element['id'] = element.id + '_' + element.en_title;
              //               element['type'] = element.second_variation[a].type;
      
              //             });
              //         }
              //       }
      
              //       // console.log('sadssdasdasdasdasdasda', this.productt)
              //   } else {
              //     element.second_variation = [];
              //   }
              // } else {
              //   element.second_variation = [];
              // }

              if(element.variations[0]){
                element.variations[0].items.forEach(addOnElement => {
                  addOnElement['quantity'] = 0;
                  addOnElement.id = element.id + '_' + addOnElement.title;
                });
              }
                
              if (this.cart.itemId.includes(element.id)) {
                const index = this.cart.cart.filter(x => x.id === element.id);
                element['quantiy'] = index[0].quantiy;
              } else {
                element['quantiy'] = 0;
              }
              this.topProducts.push(element);

            });
          }
        }, error => {
          console.log(error);
          this.dummyTopProducts = [];
        });

        this.api.post('products/getHome', param).subscribe((data: any) => {
          console.log('home products', data);
          this.dummyTopProducts = [];
          if (data && data.status === 200 && data.data && data.data.length) {
            data.data.forEach(element => {
              if (element.variations && element.size === '1' && element.variations !== '') {
                if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(element.variations)) {
                  element.variations = JSON.parse(element.variations);
                  element['variant'] = 0;
                } else {
                  element.variations = [];
                  element['variant'] = 1;
                }
              } else {
                element.variations = [];
                element['variant'] = 1;
              }
              if (this.cart.itemId.includes(element.id)) {
                const index = this.cart.cart.filter(x => x.id === element.id);
                element['quantiy'] = index[0].quantiy;
                if( element.variations[0]){
                  element.variations[0].items.forEach(pageElement => {
                    index[0].variations[0].items.forEach(cartElement => {
                      if(pageElement.id == cartElement.id){
                        pageElement.quantity = cartElement.quantity;
                      }
                    });
                  });
                }
              } else {
                element['quantiy'] = 0;
                if(element.variations[0]){
                  element.variations[0].items.forEach(addOnElement => {
                    addOnElement.quantity = 0;
                  });
                }
              }
              this.topProducts.push(element);

            });
          }
          console.log(' this.topProducts', this.topProducts)
        }, error => {
          this.dummyTopProducts = [];
          console.log(error);
        });

        // this.api.post('products/getProductWithCity', param).subscribe((data: any) => {
        //   console.log('getProductWithCity', data);
        //   if (data && data.status === 200 && data.data && data.data.length) {
        //     this.dummyProducts = data.data;
        //   } else {
        //     this.dummyProducts = []
        //   }
        // }, error => {
        //   console.log(error);
        //   this.dummyProducts = []
        // });
      } else {
        this.haveStores = false;
        this.stores = [];
        console.log('no city found');
        this.dummyCates = [];
        this.dummyBanners = [];
        this.bottomDummy = [];
        this.betweenDummy = [];
        this.dummyTopProducts = [];
        this.dummyProducts = [];
        this.categories = [];
        this.banners = [];
        this.bottomBanners = [];
        this.betweenBanners = [];
        this.topProducts = [];
        this.products = [];
        this.chMod.detectChanges();
      }
    }, error => {
      console.log('error in get store by city', error);
      this.stores = [];
      this.haveStores = false;
      this.dummyCates = [];
      this.dummyBanners = [];
      this.bottomDummy = [];
      this.betweenDummy = [];
      this.dummyTopProducts = [];
      this.dummyProducts = [];
      this.categories = [];
      this.banners = [];
      this.bottomBanners = [];
      this.betweenBanners = [];
      this.topProducts = [];
      this.products = [];
      this.util.errorToast(this.util.getString('Something went wrong'));
      this.chMod.detectChanges();
    });
    console.log('this.topProducts==============.',this.topProducts)
  }

  isOpen(start, end) {
    const format = 'H:mm:ss';
    const ctime = moment().format('HH:mm:ss');
    const time = moment(ctime, format);
    const beforeTime = moment(start, format);
    const afterTime = moment(end, format);

    if (time.isBetween(beforeTime, afterTime)) {
      return true;
    }
    return false
  }

  getTime(time) {
    // const date = moment().format('DD-MM-YYYY');
    // return moment(date + ' ' + time).format('hh:mm a');
    return moment(time, ['h:mm A']).format('hh:mm A');
  }

  addToCart(item, index) {
    console.log(item);
    this.topProducts[index].quantiy = 1;
    this.cart.addItem(item);
    const param: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };

    this.router.navigate(['tabs/home/product'], param);

  }

  ngOnInit() {
  }

  getBanners() {
    this.dummyBanners = Array(5);
    this.api.get('banners').subscribe((data: any) => {
      console.log(data);
      this.dummyBanners = [];
      this.betweenDummy = [];
      this.bottomDummy = [];
      this.bottomBanners = [];
      this.betweenBanners = [];
      this.banners = [];
      if (data && data.status === 200 && data.data && data.data.length) {
        data.data.forEach(element => {
          if (element && element.status === '1') {
            if (element.position === '0') {
              this.banners.push(element);
            } else if (element.position === '1') {
              this.bottomBanners.push(element);
            } else {
              this.betweenBanners.push(element);
            }
          }
        });
        console.log('top', this.banners);
        console.log('bottom', this.bottomBanners);
        console.log('between', this.betweenBanners);
      }
    }, error => {
      console.log(error);
      this.dummyBanners = [];
    });
  }

  getQuanity(id) {
    const data = this.cart.cart.filter(x => x.id === id);
    return data[0].quantiy;
  }

  getCategorys() {
    this.dummyCates = Array(10);
    this.api.get('categories').subscribe((datas: any) => {
      this.dummyCates = [];
      const cates = [];
      if (datas && datas.data && datas.data.length) {
        datas.data.forEach(element => {
          if (element.status === '1') {
            const info = {
              id: element.id,
              name: element.name,
              cover: element.cover,
              subCates: []
            }
            const cats = {
              id: element.id,
              name: element.name,
              cover: element.cover,
            }
            this.allcates.push(cats);
            cates.push(info);
          }
        });
      }

      // this.api.get('subcate').subscribe((subCates: any) => {
      //   console.log('sub cates', subCates);
      //   if (subCates && subCates.status === 200 && subCates.data && subCates.data.length) {
      //     cates.forEach((element, i) => {
      //       subCates.data.forEach(sub => {
      //         if (sub.status === '1' && element.id === sub.cate_id) {
      //           // this.categories[i].subCates.push(sub);
      //           cates[i].subCates.push(sub);
      //         }
      //       });
      //     });
      //     // console.log('=>>', this.categories);
      //     this.categories = cates;
      //   }
      // }, error => {
      //   console.log(error);
      //   this.util.errorToast(this.util.getString('Something went wrong'));
      // });
    }, error => {
      console.log(error);
      this.util.errorToast(this.util.getString('Something went wrong'));
      this.dummyCates = [];
    });
  }

  openMenu() {
    this.util.openMenu();
  }

  add(product, index) {
    console.log(product);
    this.topProducts[index].quantiy = this.getQuanity(product.id);
    if (this.topProducts[index].quantiy > 0) {
      this.topProducts[index].quantiy = this.topProducts[index].quantiy + 1;
      this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
    }
  }

  remove(product, index) {
    console.log(product, index);
    this.topProducts[index].quantiy = this.getQuanity(product.id);
    if (this.topProducts[index].quantiy === 1) {
      if(this.topProducts[index].variations[0]){
        this.topProducts[index].variations[0].items.forEach(element => {
          element.quantity = 0;
        });
      }
      
      this.topProducts[index].quantiy = 0;
      this.cart.removeItem(product.id)
    } else {
      this.topProducts[index].quantiy = this.topProducts[index].quantiy - 1;
      this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
    }
  }

  goToSingleProduct(item) {
    const param: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };

    this.router.navigate(['tabs/home/product'], param);
  }

  goToCatrgory() {
    this.router.navigate(['/tabs/categories']);
  }

  subCate(item) {
    const param: NavigationExtras = {
      queryParams: {
        id: item.id,
        name: item.name
      }
    };
    this.router.navigate(['tabs/home/sub-category'], param);
  }

  changeCity() {
    this.router.navigate(['cities']);
  }

  openLink(item) {
    console.log(item);

    if (item.type === '0') {
      // Category
      console.log('open category');
      const name = this.categories.filter(x => x.id === item.link);
      let cateName: any = '';
      if (name && name.length) {
        cateName = name[0].name
      }
      const param: NavigationExtras = {
        queryParams: {
          id: item.link,
          name: cateName
        }
      };
      this.router.navigate(['tabs/home/sub-category'], param);
    } else if (item.type === '1') {
      // product
      console.log('open product');
      const param: NavigationExtras = {
        queryParams: {
          id: item.link
        }
      };

      this.router.navigate(['tabs/categories/product'], param);
    } else {
      // link
      console.log('open link');
      this.iab.create(item.link, '_blank');
    }
  }

  goToProductList(val) {
    const navData: NavigationExtras = {
      queryParams: {
        id: val.id,
        name: val.name
      }
    }
    this.router.navigate(['/tabs/categories/products'], navData);
  }

  onSearchChange(event) {
    if (event.detail.value) {
    } else {
      this.products = [];
    }
  }

  getCity() {
    const city = localStorage.getItem('city');
    console.log('selected city===>>', city);
    if (city && city !== null && city !== 'null') {
      const param = {
        id: city
      };

      this.api.post('cities/getById', param).subscribe((data: any) => {
        console.log('selected city', data);
        if (data && data.status === 200 && data.data && data.data.length) {
          const selectedCity = data.data.filter(x => x.status === '1');
          console.log('selected city=======================', selectedCity);
          if (selectedCity && selectedCity.length) {
            this.util.city = selectedCity[0];
            this.chMod.detectChanges();
          } else {
            localStorage.removeItem('city');
          }
        } else {
          localStorage.removeItem('city');
        }
      }, error => {
        console.log(error);
        localStorage.removeItem('city');
      });
    }
  }

  openStore(item) {
    console.log('open store', item);

    const param: NavigationExtras = {
      queryParams: {
        id: item.uid,
        name: item.name
      }
    };
    this.router.navigate(['tabs/home/store'], param);
  }

  topicked() {
    this.router.navigate(['/tabs/home/top-picked']);
  }

  topStores() {
    this.router.navigate(['top-stores']);
  }

  newStores() {
    this.router.navigate(['new-stores']);
  }

  allOffers() {
    this.router.navigate(['all-offers']);
  }


  search(event: string) {
    console.log(event);
    if (event && event !== '') {
      const param = {
        id: localStorage.getItem('city'),
        search: event
      };
      this.util.show();
      this.api.post('products/getSearchItems', param).subscribe((data: any) => {
        console.log('search data==>', data);
        this.util.hide();
        if (data && data.status === 200 && data.data) {
          this.products = data.data;
        }
      }, error => {
        console.log('error in searhc filess--->>', error);
        this.util.hide();
        this.util.errorToast(this.util.getString('Something went wrong'));
      });
    }
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
              console.log('before', this.topProducts[indeX].variant);
              this.topProducts[indeX].variant = data;
              console.log('after', this.topProducts[indeX].variant);
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
