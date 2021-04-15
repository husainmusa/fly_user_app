function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-offers-all-offers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-offers/all-offers.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-offers/all-offers.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAllOffersAllOffersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Offers')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div *ngFor=\"let item of dummy\" style=\"margin-bottom: 10px;\">\n    <ion-skeleton-text animated style=\"width: 100%;height: 100px; border-radius: 5px;\"></ion-skeleton-text>\n  </div>\n\n  <div class=\"card\" *ngFor=\"let item of list\">\n    <div class=\"back_image\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n      (click)=\"openLink(item)\">\n      <div class=\"overlay_div\" *ngIf=\"item.message\">\n        <ion-label> {{item.message}} </ion-label>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/all-offers/all-offers-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/all-offers/all-offers-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AllOffersPageRoutingModule */

  /***/
  function srcAppPagesAllOffersAllOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllOffersPageRoutingModule", function () {
      return AllOffersPageRoutingModule;
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


    var _all_offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-offers.page */
    "./src/app/pages/all-offers/all-offers.page.ts");
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
      component: _all_offers_page__WEBPACK_IMPORTED_MODULE_3__["AllOffersPage"]
    }];

    var AllOffersPageRoutingModule = function AllOffersPageRoutingModule() {
      _classCallCheck(this, AllOffersPageRoutingModule);
    };

    AllOffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AllOffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/all-offers/all-offers.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/all-offers/all-offers.module.ts ***!
    \*******************************************************/

  /*! exports provided: AllOffersPageModule */

  /***/
  function srcAppPagesAllOffersAllOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllOffersPageModule", function () {
      return AllOffersPageModule;
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


    var _all_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./all-offers-routing.module */
    "./src/app/pages/all-offers/all-offers-routing.module.ts");
    /* harmony import */


    var _all_offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./all-offers.page */
    "./src/app/pages/all-offers/all-offers.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AllOffersPageModule = function AllOffersPageModule() {
      _classCallCheck(this, AllOffersPageModule);
    };

    AllOffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _all_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllOffersPageRoutingModule"]],
      declarations: [_all_offers_page__WEBPACK_IMPORTED_MODULE_6__["AllOffersPage"]]
    })], AllOffersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/all-offers/all-offers.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/all-offers/all-offers.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAllOffersAllOffersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.card {\n  width: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.card .back_image {\n  height: 120px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.card .back_image .overlay_div {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 70%;\n  right: 0;\n  padding: 10px;\n}\n.card .back_image .overlay_div ion-label {\n  color: white;\n  text-align: right;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsLW9mZmVycy9hbGwtb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWxsLW9mZmVycy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxhbGwtb2ZmZXJzXFxhbGwtb2ZmZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FERUo7QUNBSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7QURDUjtBQ0NRO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBRENaO0FDQ1k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbGwtb2ZmZXJzL2FsbC1vZmZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jYXJkIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcmQgLmJhY2tfaW1hZ2UgLm92ZXJsYXlfZGl2IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiA3MCU7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhcmQgLmJhY2tfaW1hZ2UgLm92ZXJsYXlfZGl2IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFxuICAgICAgICAub3ZlcmxheV9kaXZ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/all-offers/all-offers.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/all-offers/all-offers.page.ts ***!
    \*****************************************************/

  /*! exports provided: AllOffersPage */

  /***/
  function srcAppPagesAllOffersAllOffersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllOffersPage", function () {
      return AllOffersPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AllOffersPage = /*#__PURE__*/function () {
      function AllOffersPage(api, util, router, navCtrl, iab) {
        _classCallCheck(this, AllOffersPage);

        this.api = api;
        this.util = util;
        this.router = router;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.dummy = Array(10);
        this.list = [];
        this.getOffers();
      }

      _createClass(AllOffersPage, [{
        key: "getOffers",
        value: function getOffers() {
          var _this = this;

          this.api.get('banners').subscribe(function (data) {
            _this.dummy = [];
            _this.list = [];

            if (data && data.status === 200 && data.data && data.data.length) {
              data.data.forEach(function (element) {
                if (element && element.status === '1') {
                  _this.list.push(element);
                }
              });
            }
          }, function (error) {
            console.log(error);

            _this.util.errorToast(_this.util.getString('Something went wrong'));

            _this.dummy = [];
            _this.list = [];
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openLink",
        value: function openLink(item) {
          if (item.type === '0') {
            console.log('open category');
            var param = {
              queryParams: {
                id: item.link,
                name: 'Category'
              }
            };
            this.router.navigate(['tabs/home/sub-category'], param);
          } else if (item.type === '1') {
            // product
            console.log('open product');
            var _param = {
              queryParams: {
                id: item.link
              }
            };
            this.router.navigate(['tabs/categories/product'], _param);
          } else {
            // link
            // console.log('open link');
            this.iab.create(item.link, '_blank');
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }]);

      return AllOffersPage;
    }();

    AllOffersPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }];
    };

    AllOffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-offers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./all-offers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-offers/all-offers.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./all-offers.page.scss */
      "./src/app/pages/all-offers/all-offers.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])], AllOffersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-all-offers-all-offers-module-es5.js.map