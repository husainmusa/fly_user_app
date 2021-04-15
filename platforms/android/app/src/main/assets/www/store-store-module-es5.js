function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-store-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFiltersFiltersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<div class=\"mainContent ion-activatable ripple-parent\">\n  <p (click)=\"selected('1')\"> {{util.getString('Popularity')}} </p>\n  <p (click)=\"selected('2')\">{{util.getString('Price - Low to High')}}</p>\n  <p (click)=\"selected('3')\"> {{util.getString('Price - High to Low')}} </p>\n  <p (click)=\"selected('4')\"> {{util.getString('A - Z')}} </p>\n  <p (click)=\"selected('5')\"> {{util.getString('Z - A')}} </p>\n  <p (click)=\"selected('6')\"> {{util.getString('% Off - High to Low')}} </p>\n  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store/store.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store/store.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStoreStorePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"back()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>{{name}}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"search()\">\n          <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"onChat()\">\n          <ion-icon slot=\"icon-only\" name=\"chatbubbles-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-searchbar mode=\"ios\" *ngIf=\"haveSearch\" (ionCancel)=\"search()\" [placeholder]=\"util.getString('Search')\"\n      type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" showCancelButton=\"always\">\n    </ion-searchbar>\n    <div class=\"topHeader\" *ngIf=\"products?.length\">\n      <p class=\"itemsFound\">\n        {{products.length}} {{util.getString('Items')}}\n      </p>\n      <div>\n        <ion-button (click)=\"changeMode()\" color=\"light\" size=\"small\">\n          <ion-icon slot=\"icon-only\" [name]=\"mode ==='list' ? 'apps' :'list'\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"filter($event)\" color=\"light\" size=\"small\">\n          <ion-icon slot=\"start\" name=\"options\"></ion-icon>\n          {{util.getString('Filter')}} {{selectedFilter}}\n        </ion-button>\n        <ion-button (click)=\"priceFilter()\" color=\"light\" size=\"small\">\n          <ion-icon slot=\"icon-only\" name=\"filter\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n  </ion-header>\n  \n  <ion-content>\n    <div class=\"main_content\">\n      <p class=\"ion-text-center\" *ngIf=\"!dummy?.length && !products?.length\"> {{util.getString('No Products found')}} </p>\n  \n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of dummy\">\n          <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 70%;height: 10px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 50%;height: 10px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 80%;height: 10px;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf=\"mode == 'grid' else listView\">\n\n    <!-- grid view -->\n      <div class=\"categery_secton\" *ngFor=\"let cate of categories\">\n      <div class=\"cat_name\">\n        <ion-label class=\"cat_name\" *ngIf=\"cate.prod && cate.prod.length && cate.prod.length > 0\">{{cate.name}}</ion-label>\n      </div>\n      <ion-row *ngIf=\"cate.prod && cate.prod.length && cate.prod.length > 0\">\n        <ng-container  *ngFor=\"let item of products;let i = index;\" >\n        <ion-col size=\"6\" *ngIf=\"cate.id == item.cate_id\">\n          <div style=\"border: 1px solid lightgray;\" >\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n              (click)=\"singleProduct(item)\">\n              <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n              <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n                <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n              </div>\n            \n              <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n              <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n            </div>\n            <div class=\"second_div\">\n              <ion-label class=\"name_lbl\" (click)=\"singleProduct(item)\">\n                {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n              </ion-label>\n              <!-- <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n                <ion-label class=\"selecter ion-activatable\">\n                  <span>\n                    <span> {{\n                              item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].title ?\n                              item.variations[0].items[item.variant].title : ''}} </span>\n                    -\n                    <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                      <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].price ?\n                              item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount ?\n                              item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].price ?\n                              item.variations[0].items[item.variant].price : 0}}\n                      </span>\n  \n                    </span>\n                    <span *ngIf=\"util.cside ==='right'\">\n                      <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].price ?\n                              item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount ?\n                              item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].price ?\n                              item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      {{util.currecny}}\n                    </span>\n                  </span>\n                  <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n                </ion-label>\n              </div> -->\n              <ion-label class=\"itemsKind\">\n                <span>\n                <ng-container *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </ng-container>\n                <ng-container *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </ng-container>\n                <ng-container *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </ng-container>\n                <ng-container *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </ng-container>\n                <ng-container *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </ng-container>\n                 &nbsp;\n              </span>\n              </ion-label>\n              <div>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.direction ==='ltr'\"> {{util.currecny}}\n                  {{item.original_price}} </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.direction ==='rtl'\">\n                  {{item.original_price}}\n                  {{util.currecny}}</ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n                  <span class=\"original\" *ngIf=\"util.direction ==='ltr'\"> {{util.currecny}} {{item.original_price}} </span>\n                  <span class=\"sell\" *ngIf=\"util.direction ==='ltr'\">{{util.currecny}} {{item.sell_price}} </span>\n  \n                  <span class=\"original\" *ngIf=\"util.direction ==='rtl'\"> {{item.original_price}} {{util.currecny}}</span>\n                  <span class=\"sell\" *ngIf=\"util.direction ==='rtl'\"> {{item.sell_price}} {{util.currecny}}</span>\n  \n                </ion-label>\n              </div>\n              <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.quantiy <= 0 && item.in_stoke === '1'\">\n                <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n                  {{util.getString('Add')}}\n                  <ion-ripple-effect></ion-ripple-effect>\n                </div>\n              </div>\n              <div *ngIf=\"item.in_stoke !== '1'\" style=\"height:30px\"></div>\n  \n              <div class=\"cartBtn\" *ngIf=\"cart.itemId.includes(item.id)\">\n                <div class=\"abs_add\">\n                  <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n                  <ion-label *ngIf=\"item.quantiy !== 0\">{{item.quantiy}}</ion-label>\n                  <ion-label *ngIf=\"item.quantiy === 0\">\n                    <ion-spinner name=\"circles\" color=\"light\"></ion-spinner>\n                  </ion-label>\n                  <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-col>\n      </ng-container>\n      </ion-row>\n  \n    </div>\n\n      </div>\n      \n    <ng-template #listView>\n      <!-- list view -->\n    <div class=\"categery_secton\" *ngFor=\"let cate of categories\">\n      <div class=\"cat_name\">\n        <ion-label *ngIf=\"cate.prod && cate.prod.length && cate.prod.length > 0\">{{cate.name}}</ion-label>\n      </div>\n      <div *ngIf=\"cate.prod && cate.prod.length && cate.prod.length > 0 \">\n      <ng-container  *ngFor=\"let item of products;let i = index\">\n        <div class=\"card_div\"  *ngIf=\"cate.id == item.cate_id\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+api.mediaURL+item.cover+')'\"\n            (click)=\"singleProduct(item)\">\n            <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n            <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n              <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n            </div>\n          </div>\n          <div class=\"second_div\">\n            <div class=\"product_label\">\n              <ion-label class=\"name_lbl\">\n                {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n              </ion-label>\n              <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n              <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n              <img src=\"assets/imgs/offer.png\" class=\"offer\" alt=\"Offer\" *ngIf=\"item.in_offer ==='1'\">\n            </div>\n            <!-- <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n              <ion-label class=\"selecter ion-activatable\">\n                <span>\n                  <span> {{\n                            item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].title ?\n                            item.variations[0].items[item.variant].title : ''}} </span>\n                  -\n                  <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                    <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].price ?\n                            item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].discount ?\n                            item.variations[0].items[item.variant].discount : 0}}\n                    </span>\n                    <span\n                      *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].price ?\n                              item.variations[0].items[item.variant].price : 0}}\n                    </span>\n  \n                  </span>\n                  <span *ngIf=\"util.cside ==='right'\">\n                    <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].price ?\n                            item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].discount ?\n                            item.variations[0].items[item.variant].discount : 0}}\n                    </span>\n                    <span\n                      *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].price ?\n                            item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    {{util.currecny}}\n                  </span>\n                </span>\n                <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </ion-label>\n            </div> -->\n            <ion-label class=\"itemsKind\">\n              <span>\n              <ng-container *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </ng-container>\n              <ng-container *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </ng-container>\n              <ng-container *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </ng-container>\n              <ng-container *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </ng-container>\n              <ng-container *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </ng-container>\n                &nbsp;\n            </span>\n            </ion-label>\n            <div>\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.direction ==='ltr'\"> {{util.currecny}}\n                {{item.original_price}} </ion-label>\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.direction ==='rtl'\">{{item.original_price}}\n                {{util.currecny}}</ion-label>\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n                <span class=\"original\" *ngIf=\"util.direction ==='ltr'\"> {{util.currecny}} {{item.original_price}} </span>\n                <span class=\"sell\" *ngIf=\"util.direction ==='ltr'\">{{util.currecny}} {{item.sell_price}} </span>\n  \n                <span class=\"original\" *ngIf=\"util.direction ==='rtl'\"> {{item.original_price}} {{util.currecny}}</span>\n                <span class=\"sell\" *ngIf=\"util.direction ==='rtl'\"> {{item.sell_price}} {{util.currecny}}</span>\n  \n              </ion-label>\n            </div>\n            <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.quantiy <= 0 && item.in_stoke === '1'\">\n              <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n                {{util.getString('Add')}}\n                <ion-ripple-effect></ion-ripple-effect>\n              </div>\n            </div>\n            <div class=\"cartBtn\" *ngIf=\"cart.itemId.includes(item.id)\">\n              <div class=\"abs_add\">\n                <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n                <ion-label>{{item.quantiy}}</ion-label>\n                <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n              </div>\n            </div>\n          </div>\n        </div>\n        </ng-container>\n      </div>\n  \n    </div>\n    </ng-template>\n  \n  \n      <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll> -->\n    </div>\n  \n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/components/filters/filters.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/filters/filters.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFiltersFiltersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.mainContent {\n  padding: 10px;\n}\n.mainContent p {\n  margin: 5px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsdGVycy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbHRlcnNcXGZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0FERUo7QUNESTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FER1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5Db250ZW50IHAge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5Db250ZW50e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/filters/filters.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/filters/filters.component.ts ***!
    \*********************************************************/

  /*! exports provided: FiltersComponent */

  /***/
  function srcAppComponentsFiltersFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
      return FiltersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var FiltersComponent = /*#__PURE__*/function () {
      function FiltersComponent(popoverController, util) {
        _classCallCheck(this, FiltersComponent);

        this.popoverController = popoverController;
        this.util = util;
      }

      _createClass(FiltersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selected",
        value: function selected(value) {
          this.popoverController.dismiss(value, 'selected');
        }
      }]);

      return FiltersComponent;
    }();

    FiltersComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    FiltersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filters',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filters.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filters.component.scss */
      "./src/app/components/filters/filters.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], FiltersComponent);
    /***/
  },

  /***/
  "./src/app/pages/store/store-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/store/store-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: StorePageRoutingModule */

  /***/
  function srcAppPagesStoreStoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorePageRoutingModule", function () {
      return StorePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store.page */
    "./src/app/pages/store/store.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _store_page__WEBPACK_IMPORTED_MODULE_3__["StorePage"]
    }];

    var StorePageRoutingModule = function StorePageRoutingModule() {
      _classCallCheck(this, StorePageRoutingModule);
    };

    StorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StorePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/store/store.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/store/store.module.ts ***!
    \*********************************************/

  /*! exports provided: StorePageModule */

  /***/
  function srcAppPagesStoreStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorePageModule", function () {
      return StorePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _store_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store-routing.module */
    "./src/app/pages/store/store-routing.module.ts");
    /* harmony import */


    var _store_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store.page */
    "./src/app/pages/store/store.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StorePageModule = function StorePageModule() {
      _classCallCheck(this, StorePageModule);
    };

    StorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _store_routing_module__WEBPACK_IMPORTED_MODULE_5__["StorePageRoutingModule"]],
      declarations: [_store_page__WEBPACK_IMPORTED_MODULE_6__["StorePage"]]
    })], StorePageModule);
    /***/
  },

  /***/
  "./src/app/pages/store/store.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/store/store.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStoreStorePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.product_label {\n  display: flex;\n  align-items: center;\n}\n.topHeader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: lightgray;\n  align-items: center;\n  padding: 0px 5px;\n}\n.topHeader .itemsFound {\n  color: gray;\n  font-weight: bold;\n}\n.main_content {\n  padding-bottom: 80px;\n}\n.main_content .back_image {\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.main_content .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content .back_image .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n}\n.main_content .back_image .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content .back_image .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content .second_div {\n  padding: 5px;\n  position: relative;\n  width: 100%;\n}\n.main_content .second_div ion-label {\n  display: block !important;\n  padding-bottom: 2px;\n}\n.main_content .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content .second_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content .second_div .variant .selecter ion-icon {\n  box-shadow: none !important;\n  font-size: 10px;\n  color: gray !important;\n}\n.main_content .second_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content .second_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content .second_div .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content .second_div .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content .second_div .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content .second_div .desc {\n  font-size: 12px;\n}\n.main_content .second_div .stoke {\n  font-size: 10px;\n}\n.main_content .second_div .stoke .in {\n  color: green;\n}\n.main_content .second_div .stoke .out {\n  color: indianred;\n}\n.main_content .second_div .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.main_content .second_div .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content .second_div .cartBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.main_content .second_div .cartBtn .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content .second_div .cartBtn .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content .second_div .cartBtn .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n.main_content .card_div {\n  width: 100%;\n  padding: 10px;\n  border-bottom: 0.5px solid #E8E8E8;\n  display: flex;\n  flex-direction: row;\n}\n.main_content .card_div .back_image {\n  width: 100px;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  min-width: 100px;\n  position: relative;\n}\n.main_content .card_div .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content .card_div .second_div {\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n}\n.main_content .card_div .second_div .kind {\n  height: 15px;\n  width: 15px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n.main_content .card_div .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content .card_div .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content .card_div .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content .card_div .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content .card_div .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content .card_div .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content .card_div .second_div .desc {\n  font-size: 12px;\n}\n.main_content .card_div .second_div .stoke {\n  font-size: 10px;\n}\n.main_content .card_div .second_div .stoke .in {\n  color: green;\n}\n.main_content .card_div .second_div .stoke .out {\n  color: indianred;\n}\n.main_content .card_div .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content .card_div .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n.cat_name {\n  margin: 24px 10px 12px 10px;\n  font-size: 25px;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUvc3RvcmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9yZS9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxzdG9yZVxcc3RvcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FERUo7QUNBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FER0o7QUNGSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBRElSO0FDREE7RUFDSSxvQkFBQTtBRElKO0FDSEk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURLUjtBQ0pRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURNWjtBQ0pRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURNWjtBQ0xZO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FET2hCO0FDSlE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURNWjtBQ0hJO0VBQ08sWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREtYO0FDRFc7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FER2Y7QUNEWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBREdoQjtBQ0FnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBREVwQjtBQ0RvQjtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FER3hCO0FDQWdCO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBREVoQjtBQ0RnQjtFQUNJLDBCQUFBO0FER3BCO0FDRGdCO0VBQ0ksd0JBQUE7QURHcEI7QUNEZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBREdwQjtBQ0NZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FEQ2hCO0FDQ1c7RUFDSyxnQkFBQTtFQUNBLGVBQUE7QURDaEI7QUNBZ0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QURFcEI7QUNBZ0I7RUFDSSxpQkFBQTtBREVwQjtBQ0FnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBREVwQjtBQ0NZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QURDaEI7QUNDWTtFQUNJLGVBQUE7QURDaEI7QUNDWTtFQUNJLGVBQUE7QURDaEI7QUNBZ0I7RUFDSSxZQUFBO0FERXBCO0FDQWdCO0VBQ0ksZ0JBQUE7QURFcEI7QUNDVztFQUNJLGFBQUE7RUFDQSwyQkFBQTtBRENmO0FDQWU7RUFDSyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FERXBCO0FDQ1c7RUFDSyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRENoQjtBQ0FnQjtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBREVwQjtBQ0FvQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURFeEI7QUNDb0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBREN4QjtBQ0lZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QURGaEI7QUNLWTtFQUNJLGtCQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FESmhCO0FDUUk7RUFDRyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FETlA7QUNRTztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FETlg7QUNPVztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FETFo7QUNRTztFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FETlg7QUNPWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRExoQjtBQ09ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FETGhCO0FDT1c7RUFDSyxnQkFBQTtFQUNBLGVBQUE7QURMaEI7QUNNZ0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QURKcEI7QUNNZ0I7RUFDSSxpQkFBQTtBREpwQjtBQ01nQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBREpwQjtBQ09ZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QURMaEI7QUNPWTtFQUNJLGVBQUE7QURMaEI7QUNPWTtFQUNJLGVBQUE7QURMaEI7QUNNZ0I7RUFDSSxZQUFBO0FESnBCO0FDTWdCO0VBQ0ksZ0JBQUE7QURKcEI7QUNPWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FETGhCO0FDUVk7RUFDSSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRFBoQjtBQ2FBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBRFZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RvcmUvc3RvcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5wcm9kdWN0X2xhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcEhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuLnRvcEhlYWRlciAuaXRlbXNGb3VuZCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1haW5fY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuLm1haW5fY29udGVudCAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnQgLmJhY2tfaW1hZ2UgLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50IC5iYWNrX2ltYWdlIC5ub3RJblN0b2tlIHtcbiAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuLm1haW5fY29udGVudCAuYmFja19pbWFnZSAubm90SW5TdG9rZSAudGV4dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnQgLmJhY2tfaW1hZ2UgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLm9mZmVyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAwcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC52YXJpYW50IC5zZWxlY3RlciBpb24taWNvbiB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAudmFyaWFudCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC52YXJpYW50IGlvbi1pdGVtIC5zZWxlY3QtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuaXRlbXNLaW5kIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5uYW1lX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuc3Rva2Uge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5zdG9rZSAuaW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5zdG9rZSAub3V0IHtcbiAgY29sb3I6IGluZGlhbnJlZDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmJ0bkJ0bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmNhcnRCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuY2FydEJ0biAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmNhcnRCdG4gLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5jYXJ0QnRuIC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyOWI1MDc7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDkwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyOWI1MDc7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNzNEMjVDO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0U4RThFODtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLmJhY2tfaW1hZ2UgLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAub2ZmZXIge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDBweDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5uYW1lX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5zdG9rZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5zdG9rZSAuaW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAuc3Rva2UgLm91dCB7XG4gIGNvbG9yOiBpbmRpYW5yZWQ7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDkwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyOWI1MDc7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNzNEMjVDO1xufVxuXG4uY2F0X25hbWUge1xuICBtYXJnaW46IDI0cHggMTBweCAxMnB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogMDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnByb2R1Y3RfbGFiZWx7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9wSGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAuaXRlbXNGb3VuZHtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5tYWluX2NvbnRlbnR7XG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnBlcmNlbnR7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5ub3RJblN0b2tle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIC50ZXh0e1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmtpbmR7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2Vjb25kX2RpdntcbiAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAvLyAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgLy8gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vZmZlcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZhcmlhbnR7XG4gICAgICAgICAgICAgICAgLnNlbGVjdGVye1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2VsZWN0LWljb257XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW1zS2luZHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgLnByaWNlX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAub3JpZ2luYWx7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zZWxse1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRpY291bnR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWVfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2N7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0b2tle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAuaW57XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm91dHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluZGlhbnJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIC5idG5CdG17XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICAgIC5jYXJ0QnRue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIC5hYnNfYWRke1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOWI1MDc7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOWI1MDc7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2e1xuICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgLnBlcmNlbnR7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICB9XG4gICAgICAgfVxuICAgICAgIC5zZWNvbmRfZGl2e1xuICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAua2luZHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vZmZlcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZV9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rva2V7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5pbntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3V0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5kaWFucmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjNzNEMjVDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2F0X25hbWUge1xuICAgIG1hcmdpbjogMjRweCAxMHB4IDEycHggMTBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLm91dGVyLWNvbHtcbiAgICBcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/store/store.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/store/store.page.ts ***!
    \*******************************************/

  /*! exports provided: StorePage */

  /***/
  function srcAppPagesStoreStorePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorePage", function () {
      return StorePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_components_filters_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/filters/filters.component */
    "./src/app/components/filters/filters.component.ts");
    /* harmony import */


    var _sort_sort_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sort/sort.page */
    "./src/app/pages/sort/sort.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StorePage = /*#__PURE__*/function () {
      function StorePage(route, navCtrl, api, util, cart, router, popoverController, modalController, alertCtrl) {
        var _this = this;

        _classCallCheck(this, StorePage);

        this.route = route;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.router = router;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.products = [];
        this.dummyProduct = [];
        this.dummy = Array(20);
        this.qty = 0;
        this.categories = [];
        this.mode = 'grid';
        this.selectedFilter = '';
        this.relatedProduct = [];
        this.productsCategoryWise = [];
        this.isClosedFilter = true;
        this.haveSearch = false;
        this.route.queryParams.subscribe(function (data) {
          // console.log(data);
          if (data && data.id) {
            _this.id = data.id;
            _this.name = data.name;
            _this.limit = 1;

            _this.getCategorys();

            _this.getStoreProducts(false, 'none');
          }
        });
      }

      _createClass(StorePage, [{
        key: "sortFilter",
        value: function sortFilter() {
          var _this2 = this;

          if (this.discount && this.discount !== null) {
            // console.log('filter with discount');
            var products = [];
            this.dummyProduct.forEach(function (element) {
              if (parseFloat(element.original_price) >= _this2.minValue && parseFloat(element.original_price) <= _this2.maxValue && parseFloat(_this2.discount) <= parseFloat(element.discount)) {
                products.push(element);
              }

              _this2.products = products;
            });
          } else {
            // console.log('filter without discount');
            var _products = [];
            this.dummyProduct.forEach(function (element) {
              if (parseFloat(element.original_price) >= _this2.minValue && parseFloat(element.original_price) <= _this2.maxValue) {
                _products.push(element);
              }
            });
            this.products = _products;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "getStoreProducts",
        value: function getStoreProducts(limit, event) {
          var _this3 = this;

          var param = {
            id: this.id,
            limit: this.limit * 1000
          }; // console.log('param->', param);

          this.api.post('products/getByStoreId', param).subscribe(function (data) {
            // console.log(data);
            // console.log('ids', data);
            _this3.dummy = [];

            if (data && data.status === 200 && data.data && data.data.length) {
              var products = data.data;
              console.log('products=========>', products);

              _this3.categories.forEach(function (element) {
                if (element && element.id) {
                  // console.log('element',element)
                  element.prod = [];
                  products.forEach(function (pro) {
                    if (pro.cate_id === element.id) {
                      element.prod.push(pro);
                    }
                  });
                }
              });

              _this3.relatedProduct = [];
              console.info(_this3.categories);

              for (var i = 0; i < products.length; i++) {
                if (products[i].parent_id == '0' || products[i].parent_id == '') {
                  _this3.relatedProduct.push(products[i]);
                }
              }

              _this3.products = _this3.relatedProduct.filter(function (x) {
                return x.status === '1';
              });
              _this3.dummyProduct = _this3.products; // this.products =  this.categories;
              // const cart = this.cart.cart;
              // console.log('cart===============>>>>>>', this.cart.cart);

              _this3.products.forEach(function (info) {
                if (info.variations && info.size === '1' && info.variations !== '') {
                  if (function (x) {
                    try {
                      JSON.parse(x);
                      return true;
                    } catch (e) {
                      return false;
                    }
                  }(info.variations)) {
                    info.variations = JSON.parse(info.variations);
                    info['variant'] = 0;
                  } else {
                    info.variations = [];
                    info['variant'] = 1;
                  }
                } else {
                  info.variations = [];
                  info['variant'] = 1;
                } // if (info.second_variation  && info.second_variation !== '') {
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


                if (info.second_variation && info.second_variation !== '') {
                  if (function (x) {
                    try {
                      JSON.parse(x);
                      return true;
                    } catch (e) {
                      return false;
                    }
                  }(info.second_variation)) {
                    info.second_variation = JSON.parse(info.second_variation); // console.log('element.second_variation=>',info.second_variation)

                    if (info.second_variation) {
                      info.second_variation.forEach(function (elementInner) {
                        // console.log('elementInner=======>',elementInner)
                        elementInner.sub_category = JSON.parse(elementInner.sub_category);

                        if (elementInner.sub_category.length) {
                          elementInner.sub_category.forEach(function (subcatelim, index) {
                            subcatelim['quantity'] = 0;
                            subcatelim['id'] = info.id + '_' + subcatelim.en_title + index;
                            subcatelim['type'] = elementInner.type;
                          });
                        }
                      });
                    }
                  } else {
                    info.second_variation = []; // element['variant'] = 1;
                  }
                }

                if (info.variations[0]) {
                  info.variations[0].items.forEach(function (element) {
                    element['quantity'] = 0;
                    element.id = info.id + '_' + element.title;
                  });
                } // console.log(this.products);


                if (_this3.cart.itemId.includes(info.id)) {
                  var index = _this3.cart.cart.filter(function (x) {
                    return x.id === info.id;
                  });

                  info['quantiy'] = index[0].quantiy;

                  if (info.variations[0]) {
                    info.variations[0].items.forEach(function (pageElement) {
                      index[0].variations[0].items.forEach(function (cartElement) {
                        if (pageElement.id == cartElement.id) {
                          pageElement.quantity = cartElement.quantity;
                        }
                      });
                    });
                  }
                } else {
                  info['quantiy'] = 0;

                  if (info.variations[0]) {
                    info.variations[0].items.forEach(function (addOnElement) {
                      addOnElement.quantity = 0;
                    });
                  }
                }
              });

              _this3.max = Math.max.apply(Math, _toConsumableArray(_this3.products.map(function (o) {
                return o.original_price;
              })).concat([0])); // console.log('maxValueOfPrice', this.max);

              _this3.min = Math.min.apply(null, _this3.products.map(function (item) {
                return item.original_price;
              })); // console.log('minValueOfPrice', this.min);

              if (_this3.selectedFilterID && _this3.selectedFilterID !== null) {
                _this3.updateFilter();
              }

              if (_this3.haveSortFilter && _this3.isClosedFilter === false) {
                _this3.sortFilter();
              }

              if (limit) {
                event.complete();
              }
            } else {
              if (limit) {
                event.complete();
              }
            }
          }, function (error) {
            // console.log(error);
            _this3.util.errorToast(_this3.util.getString('Something went wrong'));

            if (limit) {
              event.complete();
            }
          });
          console.log('===>>', this.categories);
        }
      }, {
        key: "search",
        value: function search() {
          this.haveSearch = !this.haveSearch;
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(event) {
          // console.log(event.detail.value);
          if (event.detail.value) {
            this.products = this.dummyProduct.filter(function (item) {
              return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
          } else {
            this.products = this.dummyProduct;
          }
        }
      }, {
        key: "changeMode",
        value: function changeMode() {
          this.mode = this.mode === 'grid' ? 'list' : 'grid';
        }
      }, {
        key: "updateFilter",
        value: function updateFilter() {
          switch (this.selectedFilterID) {
            case '1':
              // console.log('its rating');
              this.selectedFilter = this.util.getString('Popularity');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.total_rating) < parseFloat(a.total_rating) ? -1 : parseFloat(b.total_rating) > parseFloat(a.total_rating) ? 1 : 0;
              });
              break;

            case '2':
              // console.log('its low to high');
              this.selectedFilter = this.util.getString('Price L-H');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(a.original_price) < parseFloat(b.original_price) ? -1 : parseFloat(a.original_price) > parseFloat(b.original_price) ? 1 : 0;
              });
              break;

            case '3':
              // console.log('its highht to low');
              this.selectedFilter = this.util.getString('Price H-L');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.original_price) < parseFloat(a.original_price) ? -1 : parseFloat(b.original_price) > parseFloat(a.original_price) ? 1 : 0;
              });
              break;

            case '4':
              // console.log('its a - z');
              this.selectedFilter = this.util.getString('A-Z');
              this.products = this.products.sort(function (a, b) {
                if (a.name < b.name) {
                  return -1;
                }

                if (a.name > b.name) {
                  return 1;
                }

                return 0;
              });
              break;

            case '5':
              // console.log('its z - a');
              this.selectedFilter = this.util.getString('Z-A');
              this.products = this.products.sort(function (a, b) {
                if (a.name > b.name) {
                  return -1;
                }

                if (a.name < b.name) {
                  return 1;
                }

                return 0;
              });
              break;

            case '6':
              // console.log('its % off');
              this.selectedFilter = this.util.getString('% Off');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.discount) < parseFloat(a.discount) ? -1 : parseFloat(b.discount) > parseFloat(a.discount) ? 1 : 0;
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "filter",
        value: function filter(events) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_filters_filters_component__WEBPACK_IMPORTED_MODULE_7__["FiltersComponent"],
                      event: events,
                      mode: 'ios'
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (data) {
                      // console.log(data.data);
                      if (data && data.data && data.role === 'selected') {
                        _this4.selectedFilterID = data.data;

                        _this4.updateFilter();
                      }
                    });
                    _context.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onChat",
        value: function onChat() {
          var param = {
            queryParams: {
              id: this.id,
              name: this.name
            }
          };
          this.router.navigate(['inbox'], param);
        }
      }, {
        key: "add",
        value: function add(product, index) {
          // console.log(product);
          if (this.products[index].quantiy > 0) {
            this.products[index].quantiy = this.products[index].quantiy + 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
          }
        }
      }, {
        key: "remove",
        value: function remove(product, index) {
          // console.log(product, index);
          if (this.products[index].quantiy === 1) {
            this.products[index].quantiy = 0;
            this.cart.removeItem(product.id);

            if (this.products[index].variations[0]) {
              this.products[index].variations[0].items.forEach(function (element) {
                element.quantity = 0;
              });
            }
          } else {
            this.products[index].quantiy = this.products[index].quantiy - 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
          }
        }
      }, {
        key: "checkCartItems",
        value: function checkCartItems() {
          var _this5 = this;

          var cart = this.cart.cart;

          if (cart && cart.length) {
            cart.forEach(function (element) {
              if (_this5.cart.itemId && _this5.cart.itemId.length && _this5.cart.itemId.includes(element.id)) {
                var index = _this5.products.findIndex(function (x) {
                  return x.id === element.id;
                }); // console.log('index============>', index);
                // console.log('???', element.quantiy);


                _this5.products[index].quantiy = element.quantiy;
              }
            });
          }
        }
      }, {
        key: "addToCart",
        value: function addToCart(item, index) {
          // console.log(item);
          this.products[index].quantiy = 1;
          this.cart.addItem(item);
          this.singleProduct(item);
        }
      }, {
        key: "checkCart",
        value: function checkCart(id) {
          var item = this.cart.itemId; // console.log('item', item);

          return false; // return this.cart.itemId.includes(id);
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          // console.log(event);
          this.limit = this.limit + 1;
          this.getStoreProducts(true, event.target);
        }
      }, {
        key: "singleProduct",
        value: function singleProduct(item) {
          var param = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['/tabs/categories/product'], param);
        }
      }, {
        key: "priceFilter",
        value: function priceFilter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _sort_sort_page__WEBPACK_IMPORTED_MODULE_8__["SortPage"],
                      componentProps: {
                        min: this.min,
                        max: this.max,
                        from: 'products',
                        discountSelected: this.discount
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (datas) {
                      var data = datas.data; // console.log(data);

                      _this6.haveSortFilter = true;

                      if (_this6.products && data.from === 'products') {
                        _this6.minValue = data.min;
                        _this6.maxValue = data.max;
                        _this6.discount = data.discount;
                        _this6.isClosedFilter = data.close;

                        if (_this6.isClosedFilter === false) {
                          _this6.sortFilter();
                        } else {
                          _this6.products = _this6.dummyProduct;
                        }
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "variant",
        value: function variant(item, indeX) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            var allData, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // console.log(item);
                    allData = []; // console.log(item && item.variations !== '');
                    // console.log(item && item.variations !== '' && item.variations.length > 0);
                    // console.log(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0);

                    if (!(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0)) {
                      _context3.next = 10;
                      break;
                    }

                    // console.log('->', item.variations[0].items);
                    item.variations[0].items.forEach(function (element, index) {
                      // console.log('OK');
                      var title = '';

                      if (_this7.util.cside === 'left') {
                        var price = item.variations && item.variations[0] && item.variations[0].items[index] && item.variations[0].items[index].discount ? item.variations[0].items[index].discount : item.variations[0].items[index].price;
                        title = element.title + ' - ' + _this7.util.currecny + ' ' + price;
                      } else {
                        var _price = item.variations && item.variations[0] && item.variations[0].items[index] && item.variations[0].items[index].discount ? item.variations[0].items[index].discount : item.variations[0].items[index].price;

                        title = element.title + ' - ' + _price + ' ' + _this7.util.currecny;
                      }

                      var data = {
                        name: element.title,
                        type: 'radio',
                        label: title,
                        value: index,
                        checked: item.variant === index
                      };
                      allData.push(data);
                    }); // console.log('All Data', allData);

                    _context3.next = 5;
                    return this.alertCtrl.create({
                      header: item.name,
                      inputs: allData,
                      buttons: [{
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {// console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.util.getString('Ok'),
                        handler: function handler(data) {
                          // console.log('Confirm Ok', data);
                          // console.log('before', this.products[indeX].variant);
                          _this7.products[indeX].variant = data; // console.log('after', this.products[indeX].variant);
                        }
                      }]
                    });

                  case 5:
                    alert = _context3.sent;
                    _context3.next = 8;
                    return alert.present();

                  case 8:
                    _context3.next = 10;
                    break;

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
        /***  get categories here and map in product  **/

      }, {
        key: "getCategorys",
        value: function getCategorys() {
          var _this8 = this;

          var param = {
            id: this.id
          };
          this.api.post('categories/getByStoreId', param).subscribe(function (data) {
            if (data && data.status === 200 && data.data.catIndex && data.data.catIndex != '') {
              if (function (x) {
                try {
                  JSON.parse(x);
                  return true;
                } catch (e) {
                  return false;
                }
              }(data.data.catIndex)) {
                _this8.categories = JSON.parse(data.data['catIndex']);
                console.log('this.categoriessdsd', _this8.categories);

                _this8.categories.sort(function (a, b) {
                  return a.index - b.index;
                });
              }
            } else if (data && data.status === 300) {
              _this8.categories = data.data;
            }
          });
        }
      }]);

      return StorePage;
    }();

    StorePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    StorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-store',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store/store.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store.page.scss */
      "./src/app/pages/store/store.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], StorePage);
    /***/
  }
}]);
//# sourceMappingURL=store-store-module-es5.js.map