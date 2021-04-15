/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { CartService } from 'src/app/services/cart.service';
import { FiltersComponent } from 'src/app/components/filters/filters.component';
import { SortPage } from '../sort/sort.page';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  id: any;
  name: any;
  limit: any;
  products: any[] = [];
  dummyProduct: any[] = [];
  dummy = Array(20);
  qty = 0;
  categories: any[] = [];
  haveSearch: boolean;
  mode: any = 'grid';
  selectedFilter: any = '';
  selectedFilterID: any;
  relatedProduct: any[] = [];
  productsCategoryWise:any[]=[];
  min: any;
  max: any;
  minValue: any;
  maxValue: any;
  isClosedFilter: boolean = true;
  discount: any;
  haveSortFilter: boolean;
  categoriesAdmin:any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public api: ApiService,
    public util: UtilService,
    public cart: CartService,
    private router: Router,
    private popoverController: PopoverController,
    private modalController: ModalController,
    private alertCtrl: AlertController
  ) {
  
    this.haveSearch = false;
    this.route.queryParams.subscribe((data) => {
      // console.log(data);
      if (data && data.id) {
        this.id = data.id;
        this.name = data.name;
        this.limit = 1;
        this.getCategorys();
       

        this.getStoreProducts(false, 'none');
      }
    });
  
  }

  sortFilter() {
    if (this.discount && this.discount !== null) {
      // console.log('filter with discount');
      const products = [];
      this.dummyProduct.forEach(element => {
        if (parseFloat(element.original_price) >= this.minValue && parseFloat(element.original_price) <= this.maxValue &&
          parseFloat(this.discount) <= parseFloat(element.discount)) {
          products.push(element);
        }
        this.products = products;
      });
    } else {
      // console.log('filter without discount');
      const products = [];
      this.dummyProduct.forEach(element => {
        if (parseFloat(element.original_price) >= this.minValue && parseFloat(element.original_price) <= this.maxValue) {
          products.push(element);
        }
      });
      this.products = products;
    }
  }

  ngOnInit() {
  }

  back() {
    this.navCtrl.back();
  }

  getStoreProducts(limit, event) {
    const param = {
      id: this.id,
      limit: this.limit * 1000,
    };
    // console.log('param->', param);
    this.api.post('products/getByStoreId', param).subscribe((data: any) => {
      // console.log(data);
      // console.log('ids', data);
      this.dummy = [];
      if (data && data.status === 200 && data.data && data.data.length) {
        const products = data.data;
        console.log('products=========>',products)
        this.categories.forEach(element => {
          if(element && element.id){
            // console.log('element',element)
            element.prod = []
             products.forEach(pro =>{
              if(pro.cate_id ===  element.id){
                element.prod.push(pro)
              }
            })
          }
        });

        this.relatedProduct = [];
        console.info(this.categories);

        for(let i = 0; i< products.length; i++){
          if(products[i].parent_id == '0' || products[i].parent_id == ''){
            this.relatedProduct.push(products[i]);
          }
        }


        this.products = this.relatedProduct.filter(x => x.status === '1');
        this.dummyProduct = this.products;
        // this.products =  this.categories;

        // const cart = this.cart.cart;
        // console.log('cart===============>>>>>>', this.cart.cart);
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
          // if (info.second_variation  && info.second_variation !== '') {
          //   if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(info.second_variation)) {
          //     info.second_variation = JSON.parse(info.second_variation);
          //     // console.log('element.second_variation=>',info.second_variation)
          //     if(info.second_variation){
          //       info.second_variation.forEach(elementInner => {
          //         elementInner.sub_category = JSON.parse(elementInner.sub_category);
          //       })
          //     }

          //   } else {
          //     info.second_variation = [];
          //    // element['variant'] = 1;
          //   }
            
          // } 

          if (info.second_variation  && info.second_variation !== '') {
            if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(info.second_variation)) {
              info.second_variation = JSON.parse(info.second_variation);
              // console.log('element.second_variation=>',info.second_variation)
              if(info.second_variation){
                info.second_variation.forEach(elementInner => {
                  // console.log('elementInner=======>',elementInner)
                  elementInner.sub_category = JSON.parse(elementInner.sub_category);
                  if(elementInner.sub_category.length){
                    elementInner.sub_category.forEach((subcatelim,index) => {
                      subcatelim['quantity'] = 0;
                      subcatelim['id'] = info.id + '_' + subcatelim.en_title+ index;
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
          if(info.variations[0]){
            info.variations[0].items.forEach(element => {
              element['quantity'] = 0;
              element.id = info.id + '_' + element.title;
            });
          }
          
          // console.log(this.products);
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
        
        this.max = Math.max(...this.products.map(o => o.original_price), 0);
        // console.log('maxValueOfPrice', this.max);

        this.min = Math.min.apply(null, this.products.map(item => item.original_price))
        // console.log('minValueOfPrice', this.min);
        if (this.selectedFilterID && this.selectedFilterID !== null) {
          this.updateFilter();
        }
        if (this.haveSortFilter && this.isClosedFilter === false) {
          this.sortFilter();
        }

        if (limit) {
          event.complete();
        }
      } else {
        if (limit) {
          event.complete();
        }
      }
    }, error => {
      // console.log(error);
      this.util.errorToast(this.util.getString('Something went wrong'));
      if (limit) {
        event.complete();
      }
    });


    console.log('===>>',this.categories)


  }

  search() {
    this.haveSearch = !this.haveSearch;
  }

  onSearchChange(event) {
    // console.log(event.detail.value);
    if (event.detail.value) {
      this.products = this.dummyProduct.filter((item) => {
        return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
      });
    } else {
      this.products = this.dummyProduct;
    }
  }

  changeMode() {
    this.mode = this.mode === 'grid' ? 'list' : 'grid';
  }

  updateFilter() {
    switch (this.selectedFilterID) {
      case '1':
        // console.log('its rating');
        this.selectedFilter = this.util.getString('Popularity');
        this.products = this.products.sort((a, b) =>
          parseFloat(b.total_rating) < parseFloat(a.total_rating) ? -1
            : (parseFloat(b.total_rating) > parseFloat(a.total_rating) ? 1 : 0));
        break;

      case '2':
        // console.log('its low to high');
        this.selectedFilter = this.util.getString('Price L-H');
        this.products = this.products.sort((a, b) =>
          parseFloat(a.original_price) < parseFloat(b.original_price) ? -1
            : (parseFloat(a.original_price) > parseFloat(b.original_price) ? 1 : 0));
        break;

      case '3':
        // console.log('its highht to low');
        this.selectedFilter = this.util.getString('Price H-L');
        this.products = this.products.sort((a, b) =>
          parseFloat(b.original_price) < parseFloat(a.original_price) ? -1
            : (parseFloat(b.original_price) > parseFloat(a.original_price) ? 1 : 0));
        break;

      case '4':
        // console.log('its a - z');
        this.selectedFilter = this.util.getString('A-Z');
        this.products = this.products.sort((a, b) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
        break;

      case '5':
        // console.log('its z - a');
        this.selectedFilter = this.util.getString('Z-A');
        this.products = this.products.sort((a, b) => {
          if (a.name > b.name) { return -1; }
          if (a.name < b.name) { return 1; }
          return 0;
        });
        break;

      case '6':
        // console.log('its % off');
        this.selectedFilter = this.util.getString('% Off');
        this.products = this.products.sort((a, b) =>
          parseFloat(b.discount) < parseFloat(a.discount) ? -1
            : (parseFloat(b.discount) > parseFloat(a.discount) ? 1 : 0));
        break;

      default:
        break;
    }
  }

  async filter(events) {
    const popover = await this.popoverController.create({
      component: FiltersComponent,
      event: events,
      mode: 'ios',
    });
    popover.onDidDismiss().then(data => {
      // console.log(data.data);
      if (data && data.data && data.role === 'selected') {
        this.selectedFilterID = data.data;
        this.updateFilter();
      }
    });
    await popover.present();
  }

  onChat() {
    const param: NavigationExtras = {
      queryParams: {
        id: this.id,
        name: this.name
      }
    };
    this.router.navigate(['inbox'], param);
  }

  add(product, index) {
    // console.log(product);
    if (this.products[index].quantiy > 0) {
      this.products[index].quantiy = this.products[index].quantiy + 1;
      this.cart.addQuantity(this.products[index].quantiy, product.id);
    }
  }

  remove(product, index) {
    // console.log(product, index);
    if (this.products[index].quantiy === 1) {
      this.products[index].quantiy = 0;
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


  checkCartItems() {
    const cart = this.cart.cart;
    if (cart && cart.length) {
      cart.forEach(element => {
        if (this.cart.itemId && this.cart.itemId.length && this.cart.itemId.includes(element.id)) {
          const index = this.products.findIndex(x => x.id === element.id);
          // console.log('index============>', index);
          // console.log('???', element.quantiy);
          this.products[index].quantiy = element.quantiy;
        }
      });
    }
  }

  addToCart(item, index) {
    // console.log(item);
    this.products[index].quantiy = 1;
    this.cart.addItem(item);
    this.singleProduct(item);
  }

  checkCart(id) {
    const item = this.cart.itemId;
    // console.log('item', item);
    return false;
    // return this.cart.itemId.includes(id);
  }


  loadData(event) {
    // console.log(event);
    this.limit = this.limit + 1;
    this.getStoreProducts(true, event.target);
  }

  singleProduct(item) {
    const param: NavigationExtras = {
      queryParams: {
        id: item.id
      }
    };

    this.router.navigate(['/tabs/categories/product'], param);
  }

  async priceFilter() {
    // console.log('print a filter');
    // this.util.publishFilter({ min: this.min, max: this.max, from: 'products' });
    // this.menuCtrl.enable(true, 'menu1');
    // this.menuCtrl.open('menu1').then(() => {
    //   console.log('menu 1');
    // });
    const modal = await this.modalController.create({
      component: SortPage,
      componentProps: { min: this.min, max: this.max, from: 'products', discountSelected: this.discount }
    });
    modal.onDidDismiss().then((datas: any) => {
      const data = datas.data;
      // console.log(data);
      this.haveSortFilter = true;
      if (this.products && data.from === 'products') {
        this.minValue = data.min;
        this.maxValue = data.max;
        this.discount = data.discount;
        this.isClosedFilter = data.close;
        if (this.isClosedFilter === false) {
          this.sortFilter();
        } else {
          this.products = this.dummyProduct;
        }
      }
    })
    return await modal.present();
  }

  async variant(item, indeX) {
    // console.log(item);
    const allData = [];
    // console.log(item && item.variations !== '');
    // console.log(item && item.variations !== '' && item.variations.length > 0);
    // console.log(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0);
    if (item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0) {
      // console.log('->', item.variations[0].items);
      item.variations[0].items.forEach((element, index) => {
        // console.log('OK');
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

      // console.log('All Data', allData);
      const alert = await this.alertCtrl.create({
        header: item.name,
        inputs: allData,
        buttons: [
          {
            text: this.util.getString('Cancel'),
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              // console.log('Confirm Cancel');
            }
          }, {
            text: this.util.getString('Ok'),
            handler: (data) => {
              // console.log('Confirm Ok', data);
              // console.log('before', this.products[indeX].variant);
              this.products[indeX].variant = data;
              // console.log('after', this.products[indeX].variant);
            }
          }
        ]
      });

      await alert.present();
    } else {
      // console.log('none');
    }

  }


  /***  get categories here and map in product  **/

  getCategorys(){

    const param = {
      id: this.id
    }
    this.api.post('categories/getByStoreId',param).subscribe((data: any) => {
        if (data && data.status === 200 &&  data.data.catIndex  && data.data.catIndex != '' ) {
          if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(data.data.catIndex )) {
                this.categories =  JSON.parse(data.data['catIndex']);
                console.log('this.categoriessdsd',this.categories )
                this.categories.sort(function (a, b) {
                  return a.index - b.index;
                });
              }
          }else if(data && data.status === 300) {
            this.categories = data.data;
    
          }
      })
    }


}