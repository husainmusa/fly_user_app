(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title color=\"light\" (click)=\"changeCity()\" class=\"ion-text-left\" [ngClass]=\"{'left': util.direction ==='ltr','right': util.direction ==='rtl'}\">\n      <div class=\"ion-activatable\" *ngIf=\"util && util.city && util.city.name\">\n        <ion-icon slot=\"start\" name=\"location\"></ion-icon>\n        {{ util.city.name }}\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n\n<ion-content *ngIf=\"!util.appClosed\">\n  <div class=\"flx\">\n    <ion-searchbar [placeholder]=\"util.getString('Search  products')\" [(ngModel)]=\"terms\" inputmode=\"text\" type=\"search\"\n      (keyup.enter)=\"search(q.value)\" (ionChange)=\"onSearchChange($event)\" #q [debounce]=\"250\" mode=\"ios\"\n      showCancelButton=\"never\">\n    </ion-searchbar>\n    <ion-button (click)=\"search(terms)\" expand=\"block\" fill=\"clear\" size=\"small\">\n      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n    </ion-button>\n\n  </div>\n  <div class=\"searchList\" *ngIf=\"products?.length\">\n    <ion-item *ngFor=\"let item of products\" (click)=\"goToSingleProduct(item)\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-icon name=\"arrow-redo-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"haveStores === true\">\n\n    <div class=\"cateLbl\">\n      <ion-label class=\"all\"> {{util.getString('All Categories')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"goToCatrgory()\">{{util.getString('View All')}}<ion-icon\n          name=\"chevron-forward-outline\" color=\"primary\">\n        </ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"sliders\">\n      <div class=\"categoryIcon\" *ngFor=\"let item of allcates\" (click)=\"goToProductList(item)\">\n        <div class=\"imgs\">\n          <img [src]=\"api.mediaURL + item.cover\" class=\"icon\">\n        </div>\n        <!-- {{ (item.name.length>10)? (item.name | slice:0:10)+'..':(item.name) }} -->\n        <ion-label class=\"name\">{{item.name}}</ion-label>\n      </div>\n\n      <div *ngFor=\"let item of dummyCates\" style=\"margin: 0px 10px;\">\n        <ion-skeleton-text animated style=\"width: 35px;height: 35px;border-radius: 50%;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%;height:10px;\"></ion-skeleton-text>\n      </div>\n    </div>\n\n    <div class=\"cateLbl\" *ngIf=\"!dummyBanners?.length && banners?.length\">\n      <ion-label class=\"all\"> {{util.getString('Exclusive Offers')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"allOffers()\">{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <!-- Top Banners -->\n    <div class=\"slider_div\" *ngIf=\"!dummyBanners?.length && banners?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of dummyBanners\">\n          <!-- <div class=\"card\"> -->\n          <ion-skeleton-text animated style=\"width: 100%;height: 120px;\"></ion-skeleton-text>\n          <!-- </div> -->\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of banners\">\n          <div class=\"card\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\">\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class=\"cateLbl\" *ngIf=\"!dummyTopProducts?.length && topProducts?.length\">\n      <ion-label class=\"all\"> {{util.getString('Top Picked')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"topicked()\">{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <!-- NEW -->\n    <div class=\"listView\">\n      <ion-slides [options]=\"slideTops\">\n        <ion-slide *ngFor=\"let item of dummyTopProducts\">\n          <ion-skeleton-text animated style=\"width: 100%;height: 120px;\"></ion-skeleton-text>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of topProducts;let i = index;\">\n          <div class=\"box\" *ngIf=\"item.parent_id == '0' || item.parent_id == ''\">\n            <div class=\"image_div\" (click)=\"goToSingleProduct(item)\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n              <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n              <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n                <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n              </div>\n              <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n              <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n            </div>\n            <div class=\"details\">\n              <ion-label class=\"pro_name\" (click)=\"goToSingleProduct(item)\">\n                {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}</ion-label>\n              <!-- <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n                <ion-label class=\"selecter ion-activatable\">\n                  <span>\n                    <span> {{\n                    item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                    item.variations[0].items[item.variant].title ?\n                    item.variations[0].items[item.variant].title : ''}} </span>\n                    -\n                    <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                      <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                       item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                       item.variations[0].items[item.variant].price ?\n                       item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount ?\n                      item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                       item.variations[0].items[item.variant].price ?\n                       item.variations[0].items[item.variant].price : 0}}\n                      </span>\n\n                    </span>\n                    <span *ngIf=\"util.cside ==='right'\">\n                      <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount ?\n                      item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      {{util.currecny}}\n                    </span>\n                  </span>\n                  <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n                </ion-label>\n              </div> -->\n\n              <ion-label class=\"itemsKind\">\n                <!-- <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n                <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n                <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n                <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </span>\n                <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span> -->\n                <span>\n                  <ng-container *ngIf=\"item.have_gram === '1'\">{{item.gram}} {{util.getString('grams')}}</ng-container>\n                  <ng-container *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </ng-container>\n                  <ng-container *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </ng-container>\n                  <ng-container *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </ng-container>\n                  <ng-container *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </ng-container>\n                  &nbsp;\n                </span>\n\n              </ion-label>\n              <div>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.direction ==='ltr'\"> {{util.currecny}}\n                  {{item.original_price}} </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.direction ==='rtl'\">\n                  {{item.original_price}}\n                  {{util.currecny}}</ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"goToSingleProduct(item)\">\n                  <span class=\"original\" *ngIf=\"util.direction ==='ltr'\"> {{util.currecny}} {{item.original_price}} </span>\n                  <span class=\"sell\" *ngIf=\"util.direction ==='ltr'\">{{util.currecny}} {{item.sell_price}} </span>\n                  <span class=\"original\" *ngIf=\"util.direction ==='rtl'\"> {{item.original_price}} {{util.currecny}}</span>\n                  <span class=\"sell\" *ngIf=\"util.direction ==='rtl'\"> {{item.sell_price}} {{util.currecny}}</span>\n                </ion-label>\n              </div>\n              <div class=\"small_flex\">\n                <div class=\"btn_img_store\">\n                <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.in_stoke === '1'\">\n                  <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n                    {{util.getString('Add')}}\n                    <ion-ripple-effect></ion-ripple-effect>\n                  </div>\n                </div>\n  \n                <div *ngIf=\"item.in_stoke !== '1'\" style=\"height:30px\"></div>\n                <div class=\"abs_add\" *ngIf=\"cart.itemId.includes(item.id)\">\n                  <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n                  <ion-label>{{getQuanity(item.id)}}</ion-label>\n                  <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n                </div>\n              </div>\n              <div class=\"store_image\" (click)=\"openStore(item.storeInfo[0])\" >\n                <img [src]=\"api.mediaURL + item.storeInfo[0].cover\" />\n              </div>\n            </div>\n          </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- NEW -->\n\n    <!-- Start Top Store -->\n    <div class=\"cateLbl\" *ngIf=\"haveStores && stores?.length\">\n      <ion-label class=\"all\"> {{util.getString('Top Stores')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"topStores()\">{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"topProducts\" *ngIf=\"haveStores && stores?.length\">\n      <ion-slides [options]=\"slideOpts\">\n\n        <ion-slide *ngFor=\"let item of stores;let i = index;\">\n          <div class=\"content_div\">\n            <div class=\"card_div\">\n              <div class=\"image_div\" (click)=\"openStore(item)\"\n                [ngStyle]=\"{'background-image':'url('+ api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n                <img src=\"assets/imgs/open.png\" class=\"isOpen\" alt=\"Veg\" *ngIf=\"item.isClosed ==='0'\">\n                <img src=\"assets/imgs/close.png\" class=\"isOpen\" alt=\"Non Veg\" *ngIf=\"item.isClosed === '1'\">\n              </div>\n              <div class=\"desc_div\" (click)=\"openStore(item)\">\n                <ion-label class=\"pro_name\">\n                  {{ (item.name.length>100)? (item.name | slice:0:12)+'..':(item.name) }}</ion-label>\n                <ion-label class=\"pro_detail\">\n                  {{ (item.address.length>100)? (item.address | slice:0:20)+'..':(item.address) }}\n                </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.open_time\"> {{getTime(item.open_time)}} - {{getTime(item.close_time)}} </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"!item.open_time\">  {{util.getString('Closed')}}</ion-label>\n\n                <div class=\"small_flex\">\n                  <div class=\"btnBtm\">\n                    <div class=\"ion-activatable ripple-parent\">\n                      {{util.getString('View')}}\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- End Top Store -->\n\n    <!-- Start New Store -->\n    <div class=\"cateLbl\" *ngIf=\"haveStores && storeCopy?.length\">\n      <ion-label class=\"all\"> {{util.getString('New Stores')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"newStores()\">{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"topProducts\" *ngIf=\"haveStores && storeCopy?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of storeCopy;let i = index;\">\n          <div class=\"content_div\">\n            <div class=\"card_div\">\n              <div class=\"image_div\" (click)=\"openStore(item)\"\n                [ngStyle]=\"{'background-image':'url('+ api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n                <img src=\"assets/imgs/open.png\" class=\"isOpen\" alt=\"Veg\" *ngIf=\"item.isClosed ==='0'\">\n                <img src=\"assets/imgs/close.png\" class=\"isOpen\" alt=\"Non Veg\" *ngIf=\"item.isClosed === '1'\">\n              </div>\n              <div class=\"desc_div\" (click)=\"openStore(item)\">\n                <ion-label class=\"pro_name\">\n                  {{ (item.name.length>100)? (item.name | slice:0:12)+'..':(item.name) }}</ion-label>\n                <ion-label class=\"pro_detail\">\n                  {{ (item.address.length>100)? (item.address | slice:0:20)+'..':(item.address) }}\n                </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.open_time\"> {{getTime(item.open_time)}} - {{getTime(item.close_time)}} </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"!item.open_time\">  {{util.getString('Closed')}}</ion-label>\n                <div class=\"small_flex\">\n                  <div class=\"btnBtm\">\n                    <div class=\"ion-activatable ripple-parent\">\n                      {{util.getString('View')}}\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- End New Store -->\n\n    <!-- Between Banner -->\n    <!-- <div class=\"slider_div\" *ngIf=\"!betweenDummy?.length && betweenBanners?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of betweenDummy\">\n          <div class=\"card\">\n            <ion-skeleton-text animated style=\"width: 100%;height: 120px;\"></ion-skeleton-text>\n          </div>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of betweenBanners\">\n          <div class=\"card\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\">\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div> -->\n\n    <!-- Bottom Banner -->\n    <!-- <div class=\"slider_div\" *ngIf=\"!bottomDummy?.length && bottomBanners?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of bottomDummy\">\n          <div class=\"card\">\n            <ion-skeleton-text animated style=\"width: 100%;height: 120px;\"></ion-skeleton-text>\n          </div>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of bottomBanners\">\n          <div class=\"card\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\">\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div> -->\n\n    <!-- <div *ngFor=\"let item of dummyCates\" class=\"catess\">\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n      <ion-row>\n        <ion-col size=\"4\" *ngFor=\"let item of [1,2,3,4,5,6,7,8,9]\">\n          <div class=\"bg_img\">\n            <ion-skeleton-text animated style=\"width: 100%;height:80px;\"></ion-skeleton-text>\n          </div>\n          <p class=\"subCateName\">\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </p>\n        </ion-col>\n      </ion-row>\n    </div> -->\n\n    <!-- <div *ngFor=\"let item of categories\" class=\"catess\">\n      <p class=\"cateName\">{{item.name}}</p>\n      <ion-row>\n        <ion-col size=\"4\" *ngFor=\"let sub of item.subCates\" class=\"bgColor\" (click)=\"goToProductList(sub)\">\n          <div class=\"bg_img\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+sub.cover+'),url(assets/bg.png)'}\">\n          </div>\n          <p class=\"subCateName\"> {{sub.name}} </p>\n        </ion-col>\n      </ion-row>\n    </div> -->\n\n  </div>\n\n  <div *ngIf=\"haveStores === false\" class=\"nothing\">\n    <img src=\"assets/imgs/nothing.png\" alt=\"\" srcset=\"\" class=\"imgs\">\n    <p class=\"ion-text-center bolder\"> {{util.getString('No Stores Found Near You!')}} </p>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.right {\n  text-align: right !important;\n}\n.left {\n  text-align: left !important;\n}\n.searchbar {\n  padding: 0px 10px;\n}\n.flx {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 70px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .cateLbl {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .cateLbl .all {\n  font-weight: bold;\n  font-family: muli-bold;\n}\n.main_content_div .cateLbl .view {\n  font-family: muli-bold;\n  color: var(--ion-color-primary);\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n}\n.main_content_div .cateLbl .view ion-icon {\n  font-size: 16px;\n}\n.main_content_div .sliders {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  padding: 16px 0px;\n}\n.main_content_div .sliders .categoryIcon {\n  padding: 0px 5px;\n  text-align: center;\n}\n.main_content_div .sliders .categoryIcon .imgs {\n  border-radius: 50%;\n  padding: 5px;\n  line-height: 60px;\n  height: 60px;\n  width: 60px;\n  box-shadow: 1px 3px 6px rgba(130, 130, 130, 0.3);\n  position: relative;\n}\n.main_content_div .sliders .categoryIcon .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n  height: 60px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  border-radius: 50%;\n}\n.main_content_div .sliders .categoryIcon .name {\n  font-size: 10px;\n  font-weight: bold;\n  color: gray;\n  margin: 10px 0px;\n}\n.main_content_div .slider_div {\n  margin-top: 15px;\n}\n.main_content_div .slider_div .card {\n  width: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .slider_div .card .back_image {\n  height: 120px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.main_content_div .slider_div .card .back_image .overlay_div {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 70%;\n  right: 0;\n  padding: 10px;\n}\n.main_content_div .slider_div .card .back_image .overlay_div ion-label {\n  color: white;\n  text-align: right;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div {\n  padding: 10px 0px;\n  width: 100%;\n}\n.main_content_div .content_div .card_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n  margin-right: 10px;\n}\n.main_content_div .content_div .card_div .offer_tag {\n  width: 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n.main_content_div .content_div .card_div .off_lbl {\n  font-family: muli-bold;\n  position: absolute;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  font-size: 9px;\n  top: 4px;\n  left: 8px;\n  text-align: center;\n  color: white;\n  z-index: 999;\n}\n.main_content_div .content_div .card_div .image_div {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin: 5px;\n}\n.main_content_div .content_div .card_div .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .card_div .image_div .isOpen {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.main_content_div .content_div .card_div .desc_div {\n  text-align: right;\n  padding: 10px;\n  font-size: 10px !important;\n  width: 100%;\n  height: 125px;\n  max-height: 125px;\n}\n.main_content_div .content_div .card_div .desc_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item ion-select {\n  --padding-end: 0px;\n  --padding-start: 0px;\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .pro_detail {\n  font-size: 11px;\n  color: gray;\n  margin-bottom: 5px;\n  height: 35px;\n  max-height: 35px;\n  min-height: 35px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 12px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .listView {\n  margin: 10px 0px;\n}\n.main_content_div .listView .box {\n  border: 1px solid lightgray;\n  width: 100%;\n}\n.main_content_div .listView .box .image_div {\n  height: 80px;\n  width: 95%;\n  min-width: 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  margin: 5px;\n}\n.main_content_div .listView .box .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .listView .box .image_div .percent {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  background: #f27474;\n  left: 5px;\n  top: 2px;\n  line-height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div .listView .box .image_div .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.main_content_div .listView .box .image_div .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content_div .listView .box .details {\n  padding: 5px 10px;\n  text-align: right;\n}\n.main_content_div .listView .box .details .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .listView .box .details .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .listView .box .details .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .listView .box .details .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content_div .listView .box .details .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content_div .listView .box .details .pro_name {\n  font-size: 12px;\n  color: gray;\n}\n.main_content_div .listView .box .details .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .listView .box .details .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .small_flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n}\n.main_content_div .listView .box .details .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 15px;\n}\n.main_content_div .listView .box .details .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .listView .box .details .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .listView .box .details .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .listView .box .details .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .catess .cateName {\n  text-align: center;\n  font-weight: bold;\n  font-size: 13px;\n  background: #d0e3e3;\n  padding: 5px;\n  margin: 0px;\n  margin-top: 10px;\n}\n.main_content_div .catess .bgColor {\n  background: ivory;\n  border: 0.5px solid lightgray;\n}\n.main_content_div .catess .bgColor .bg_img {\n  height: 80px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 5px;\n  position: relative;\n}\n.main_content_div .catess .bgColor .subCateName {\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n}\n.nothing {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n.nothing .imgs {\n  height: 100px;\n  width: 100px;\n}\n.nothing .bolder {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNHLDRCQUFBO0FERUg7QUNBQTtFQUNJLDJCQUFBO0FER0o7QUNEQTtFQUNJLGlCQUFBO0FESUo7QUNGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURLSjtBQ0ZBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBREtKO0FDSEk7RUFDSSxjQUFBO0FES1I7QUNGSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FESVI7QUNGUTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QURJWjtBQ0ZRO0VBQ0ksc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURJWjtBQ0ZZO0VBQ0UsZUFBQTtBRElkO0FDQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEQ1I7QUNDUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QURDWjtBQ0NZO0VBUUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QUROaEI7QUNRWTtFQU9JLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBRFpoQjtBQ2VZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEYmhCO0FDa0JJO0VBQ0ksZ0JBQUE7QURoQlI7QUNrQlE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGhCWjtBQ2tCWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7QURqQmhCO0FDbUJnQjtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QURqQnBCO0FDbUJvQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRGpCeEI7QUN3Qkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUR0QlI7QUN1QlE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUR0Qlo7QUN1Qlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QURyQmhCO0FDd0JZO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUR0QmhCO0FDeUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBRHZCaEI7QUN3QmdCO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FEdEJsQjtBQ3dCZ0I7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUR0QmxCO0FDd0JnQjtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRHRCbEI7QUMwQlk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUR4QmhCO0FDMEJvQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEeEJ4QjtBQzBCb0I7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FEeEJwQjtBQ3lCb0I7RUFDSSwwQkFBQTtBRHZCeEI7QUN5Qm9CO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUR2QnhCO0FDMkJnQjtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEekJsQjtBQzJCZ0I7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUR6QmxCO0FDMkJnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRHpCcEI7QUMwQm9CO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FEeEJ4QjtBQzBCb0I7RUFDSSxpQkFBQTtBRHhCeEI7QUMwQm9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FEeEJ4QjtBQzJCZ0I7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBRHpCcEI7QUMwQm9CO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRHhCeEI7QUN5QndCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRHZCNUI7QUN3Q2M7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUR0Q2xCO0FDd0NrQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUR0Q3RCO0FDeUNrQjtFQUNJLGNBQUE7RUFDQSxXQUFBO0FEdkN0QjtBQzhDSTtFQUNJLGdCQUFBO0FENUNSO0FDNkNRO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0FEM0NaO0FDNENZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEMUNoQjtBQzJDZ0I7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUR6Q2xCO0FDMkNpQjtFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRHpDcEI7QUMyQ2dCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUR6Q3BCO0FDNENvQjtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRDFDeEI7QUM4Q1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FENUNoQjtBQzhDb0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDVDeEI7QUM4Q29CO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBRDVDcEI7QUM2Q29CO0VBQ0ksMEJBQUE7QUQzQ3hCO0FDNkNvQjtFQUNJLHdCQUFBO0FEM0N4QjtBQzZDb0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRDNDeEI7QUMrQ2dCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUQ3Q3BCO0FDK0NnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRDdDcEI7QUMrQ2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FEN0NwQjtBQzhDb0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUQ1Q3hCO0FDOENvQjtFQUNJLGlCQUFBO0FENUN4QjtBQzhDb0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUQ1Q3hCO0FDK0NpQjtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUQ3Q3BCO0FDOENvQjtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUQ1Q3hCO0FDNkN3QjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUQzQzVCO0FDZ0RpQjtFQUNHLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDlDcEI7QUNnRG9CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRDlDeEI7QUNpRG9CO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUQvQ3hCO0FDc0RRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURwRFo7QUNzRFE7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0FEcERaO0FDcURZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEbkRoQjtBQ3FEWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEbkRoQjtBQzBEQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHZESjtBQ3dESTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEdERSO0FDd0RJO0VBQ0ksaUJBQUE7QUR0RFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5mbHgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlTGJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVMYmwgLmFsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVMYmwgLnZpZXcge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZUxibCAudmlldyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTZweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIHtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcnMgLmNhdGVnb3J5SWNvbiAuaW1ncyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA2cHggcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5iYWNrX2ltYWdlIC5vdmVybGF5X2RpdiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogNzAlO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5iYWNrX2ltYWdlIC5vdmVybGF5X2RpdiBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAzcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5vZmZlcl90YWcge1xuICB3aWR0aDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAub2ZmX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBmb250LXNpemU6IDlweDtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiAua2luZCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgLmlzT3BlbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyNXB4O1xuICBtYXgtaGVpZ2h0OiAxMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnZhcmlhbnQgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAudmFyaWFudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC52YXJpYW50IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcm9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByb19kZXRhaWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgbWF4LWhlaWdodDogMzVweDtcbiAgbWluLWhlaWdodDogMzVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXggLmJ0bkJ0bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXggLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmltYWdlX2RpdiB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWluLXdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5pbWFnZV9kaXYgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmltYWdlX2RpdiAucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuaW1hZ2VfZGl2IC5ub3RJblN0b2tlIHtcbiAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA5MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuaW1hZ2VfZGl2IC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAudmFyaWFudCAuc2VsZWN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC52YXJpYW50IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAudmFyaWFudCBpb24taXRlbSAuc2VsZWN0LWljb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAudmFyaWFudCBpb24taXRlbSBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJvX25hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLml0ZW1zS2luZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5zbWFsbF9mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuc21hbGxfZmxleCAuYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuc21hbGxfZmxleCAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLmFic19hZGQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuYWJzX2FkZCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlc3MgLmNhdGVOYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjZDBlM2UzO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVzcyAuYmdDb2xvciB7XG4gIGJhY2tncm91bmQ6IGl2b3J5O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlc3MgLmJnQ29sb3IgLmJnX2ltZyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZXNzIC5iZ0NvbG9yIC5zdWJDYXRlTmFtZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vdGhpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4ubm90aGluZyAuaW1ncyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5ub3RoaW5nIC5ib2xkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnJpZ2h0IHtcbiAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG4ubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuIH1cbi5zZWFyY2hiYXJ7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uZmx4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNhdGVMYmx7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAgICAgLmFsbCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnZpZXd7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgIH1cblxuICAgIC5zbGlkZXJzeyAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG5cbiAgICAgICAgLmNhdGVnb3J5SWNvbntcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5pbWdze1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgLy8gbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA2cHggcmdiKDEzMCAxMzAgMTMwIC8gMzAlKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29ue1xuICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgLy8gdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgLy8gbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiKDAgMCAwIC8gMzAlKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNsaWRlcl9kaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5vdmVybGF5X2RpdntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudF9kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmNhcmRfZGl2e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAub2ZmZXJfdGFne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZl9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgICAgICAgIHRvcDogNHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgLmtpbmR7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmlzT3BlbntcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgICAgICAgICAudmFyaWFudHtcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9fbmFtZXtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9fZGV0YWlse1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNlX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAub3JpZ2luYWx7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNtYWxsX2ZsZXh7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgLmJ0bkJ0bXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAubGVmdHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYWJzX2FkZHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAubGlzdFZpZXd7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgIC5ib3h7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgLmtpbmR7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5wZXJjZW50e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ub3RJblN0b2tle1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRldGFpbHN7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgLnZhcmlhbnR7XG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvX25hbWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pdGVtc0tpbmR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNlX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAub3JpZ2luYWx7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5zbWFsbF9mbGV4e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLmJ0bkJ0bXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAuYWJzX2FkZHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2F0ZXNze1xuICAgICAgICAuY2F0ZU5hbWV7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkMGUzZTM7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJnQ29sb3J7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpdm9yeTtcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgLmJnX2ltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1YkNhdGVOYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG4ubm90aGluZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAuaW1nc3tcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuYm9sZGVye1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let HomePage = class HomePage {
    constructor(util, router, api, cart, chMod, iab, alertCtrl) {
        this.util = util;
        this.router = router;
        this.api = api;
        this.cart = cart;
        this.chMod = chMod;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.slideOpts = {
            slidesPerView: 1.3,
        };
        this.slideTops = {
            slidesPerView: 2,
            spaceBetween: 5,
            slideShadows: true,
        };
        this.categories = [];
        this.dummyCates = [];
        this.dummyBanners = [];
        this.banners = [];
        this.bottomDummy = [];
        this.bottomBanners = [];
        this.betweenDummy = [];
        this.betweenBanners = [];
        this.dummyTopProducts = [];
        this.topProducts = [];
        this.products = [];
        this.dummyProducts = [];
        this.dummyStores = [];
        this.stores = [];
        this.storeCopy = [];
        this.allcates = [];
        console.log("direction", this.util.direction);
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
            }
            else {
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
        this.api.get('popup').subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('popup message', data);
            if (data && data.status === 200) {
                const info = data.data[0];
                const alertCtrl = yield this.alertCtrl.create({
                    header: this.util.getString('Message'),
                    message: info.message,
                    mode: 'ios',
                    buttons: [this.util.getString('Cancle'), this.util.getString('Ok')],
                });
                localStorage.setItem('pop', 'true');
                alertCtrl.present();
            }
        }), error => {
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
        };
        this.api.post('stores/getByCity', param).subscribe((stores) => {
            console.log('stores by city', stores);
            this.stores = [];
            this.storeCopy = [];
            if (stores && stores.status === 200 && stores.data && stores.data.length) {
                console.log('city found');
                this.stores = stores.data;
                console.log("before sort", this.stores);
                this.stores.forEach(val => this.storeCopy.push(Object.assign({}, val)));
                this.storeCopy = this.storeCopy.sort((b, a) => a.id - b.id);
                console.log("after sort=========>", this.storeCopy);
                this.stores.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    element['isOpen'] = yield this.isOpen(element.open_time, element.close_time);
                }));
                console.log('store====>>>', this.stores);
                this.haveStores = true;
                this.getCategorys();
                this.getBanners();
                this.topProducts = [];
                this.dummyTopProducts = Array(5);
                this.api.post('products/getTopRated', param).subscribe((data) => {
                    console.log('top products', data);
                    this.dummyTopProducts = [];
                    if (data && data.status === 200 && data.data && data.data.length) {
                        data.data.forEach(element => {
                            if (element.variations && element.size === '1' && element.variations !== '') {
                                if (((x) => { try {
                                    JSON.parse(x);
                                    return true;
                                }
                                catch (e) {
                                    return false;
                                } })(element.variations)) {
                                    element.variations = JSON.parse(element.variations);
                                    element['variant'] = 0;
                                }
                                else {
                                    element.variations = [];
                                    element['variant'] = 1;
                                }
                            }
                            else {
                                element.variations = [];
                                element['variant'] = 1;
                            }
                            if (element.second_variation && element.second_variation !== '') {
                                if (((x) => { try {
                                    JSON.parse(x);
                                    return true;
                                }
                                catch (e) {
                                    return false;
                                } })(element.second_variation)) {
                                    element.second_variation = JSON.parse(element.second_variation);
                                    console.log('element.second_variation=>', element.second_variation);
                                    if (element.second_variation) {
                                        element.second_variation.forEach(elementInner => {
                                            console.log('elementInner=======>', elementInner);
                                            elementInner.sub_category = JSON.parse(elementInner.sub_category);
                                            if (elementInner.sub_category.length) {
                                                elementInner.sub_category.forEach((subcatelim, index) => {
                                                    subcatelim['quantity'] = 0;
                                                    subcatelim['id'] = element.id + '_' + subcatelim.en_title + index;
                                                    subcatelim['type'] = elementInner.type;
                                                });
                                            }
                                        });
                                    }
                                }
                                else {
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
                            if (element.variations[0]) {
                                element.variations[0].items.forEach(addOnElement => {
                                    addOnElement['quantity'] = 0;
                                    addOnElement.id = element.id + '_' + addOnElement.title;
                                });
                            }
                            if (this.cart.itemId.includes(element.id)) {
                                const index = this.cart.cart.filter(x => x.id === element.id);
                                element['quantiy'] = index[0].quantiy;
                            }
                            else {
                                element['quantiy'] = 0;
                            }
                            this.topProducts.push(element);
                        });
                    }
                }, error => {
                    console.log(error);
                    this.dummyTopProducts = [];
                });
                this.api.post('products/getHome', param).subscribe((data) => {
                    console.log('home products', data);
                    this.dummyTopProducts = [];
                    if (data && data.status === 200 && data.data && data.data.length) {
                        data.data.forEach(element => {
                            if (element.variations && element.size === '1' && element.variations !== '') {
                                if (((x) => { try {
                                    JSON.parse(x);
                                    return true;
                                }
                                catch (e) {
                                    return false;
                                } })(element.variations)) {
                                    element.variations = JSON.parse(element.variations);
                                    element['variant'] = 0;
                                }
                                else {
                                    element.variations = [];
                                    element['variant'] = 1;
                                }
                            }
                            else {
                                element.variations = [];
                                element['variant'] = 1;
                            }
                            if (this.cart.itemId.includes(element.id)) {
                                const index = this.cart.cart.filter(x => x.id === element.id);
                                element['quantiy'] = index[0].quantiy;
                                if (element.variations[0]) {
                                    element.variations[0].items.forEach(pageElement => {
                                        index[0].variations[0].items.forEach(cartElement => {
                                            if (pageElement.id == cartElement.id) {
                                                pageElement.quantity = cartElement.quantity;
                                            }
                                        });
                                    });
                                }
                            }
                            else {
                                element['quantiy'] = 0;
                                if (element.variations[0]) {
                                    element.variations[0].items.forEach(addOnElement => {
                                        addOnElement.quantity = 0;
                                    });
                                }
                            }
                            this.topProducts.push(element);
                        });
                    }
                    console.log(' this.topProducts', this.topProducts);
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
            }
            else {
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
        console.log('this.topProducts==============.', this.topProducts);
    }
    isOpen(start, end) {
        const format = 'H:mm:ss';
        const ctime = moment__WEBPACK_IMPORTED_MODULE_6__().format('HH:mm:ss');
        const time = moment__WEBPACK_IMPORTED_MODULE_6__(ctime, format);
        const beforeTime = moment__WEBPACK_IMPORTED_MODULE_6__(start, format);
        const afterTime = moment__WEBPACK_IMPORTED_MODULE_6__(end, format);
        if (time.isBetween(beforeTime, afterTime)) {
            return true;
        }
        return false;
    }
    getTime(time) {
        // const date = moment().format('DD-MM-YYYY');
        // return moment(date + ' ' + time).format('hh:mm a');
        return moment__WEBPACK_IMPORTED_MODULE_6__(time, ['h:mm A']).format('hh:mm A');
    }
    addToCart(item, index) {
        console.log(item);
        this.topProducts[index].quantiy = 1;
        this.cart.addItem(item);
        const param = {
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
        this.api.get('banners').subscribe((data) => {
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
                        }
                        else if (element.position === '1') {
                            this.bottomBanners.push(element);
                        }
                        else {
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
        this.api.get('categories').subscribe((datas) => {
            this.dummyCates = [];
            const cates = [];
            if (datas && datas.data && datas.data.length) {
                datas.data.forEach(element => {
                    if (element.status === '1' && element.showInApp === '1') {
                        const info = {
                            id: element.id,
                            name: element.name,
                            cover: element.cover,
                            subCates: []
                        };
                        const cats = {
                            id: element.id,
                            name: element.name,
                            cover: element.cover,
                        };
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
            if (this.topProducts[index].variations[0]) {
                this.topProducts[index].variations[0].items.forEach(element => {
                    element.quantity = 0;
                });
            }
            this.topProducts[index].quantiy = 0;
            this.cart.removeItem(product.id);
        }
        else {
            this.topProducts[index].quantiy = this.topProducts[index].quantiy - 1;
            this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
        }
    }
    goToSingleProduct(item) {
        const param = {
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
        const param = {
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
            let cateName = '';
            if (name && name.length) {
                cateName = name[0].name;
            }
            const param = {
                queryParams: {
                    id: item.link,
                    name: cateName
                }
            };
            this.router.navigate(['tabs/home/sub-category'], param);
        }
        else if (item.type === '1') {
            // product
            console.log('open product');
            const param = {
                queryParams: {
                    id: item.link
                }
            };
            this.router.navigate(['tabs/categories/product'], param);
        }
        else {
            // link
            console.log('open link');
            this.iab.create(item.link, '_blank');
        }
    }
    goToProductList(val) {
        const navData = {
            queryParams: {
                id: val.id,
                name: val.name
            }
        };
        this.router.navigate(['/tabs/categories/products'], navData);
    }
    onSearchChange(event) {
        if (event.detail.value) {
        }
        else {
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
            this.api.post('cities/getById', param).subscribe((data) => {
                console.log('selected city', data);
                if (data && data.status === 200 && data.data && data.data.length) {
                    const selectedCity = data.data.filter(x => x.status === '1');
                    console.log('selected city=======================', selectedCity);
                    if (selectedCity && selectedCity.length) {
                        this.util.city = selectedCity[0];
                        this.chMod.detectChanges();
                    }
                    else {
                        localStorage.removeItem('city');
                    }
                }
                else {
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
        const param = {
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
    search(event) {
        console.log(event);
        if (event && event !== '') {
            const param = {
                id: localStorage.getItem('city'),
                search: event
            };
            this.util.show();
            this.api.post('products/getSearchItems', param).subscribe((data) => {
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
    variant(item, indeX) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                    }
                    else {
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
                const alert = yield this.alertCtrl.create({
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
                yield alert.present();
            }
            else {
                console.log('none');
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map