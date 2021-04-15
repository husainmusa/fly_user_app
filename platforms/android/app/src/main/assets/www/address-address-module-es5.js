function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-list lines=\"none\">\n  <ion-item (click)=\"select('edit')\">\n    <ion-label color=\"secondary\"> {{util.getString('EDIT')}} </ion-label>\n  </ion-item>\n  <ion-item (click)=\"select('delete')\">\n    <ion-label color=\"danger\"> {{util.getString('DELETE')}} </ion-label>\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddressAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title *ngIf=\"from ==='cart'\"> {{util.getString('Delivery Address')}} </ion-title>\n    <ion-title *ngIf=\"from ==='account'\"> {{util.getString('Manage Address')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"group\">\n    <div class=\"mainContent\">\n      <ion-button (click)=\"addNew()\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        {{util.getString('Add Address')}}\n      </ion-button>\n      <div class=\"noData\" *ngIf=\"!dummy?.length && !myaddress?.length\"\n        [style.backgroundImage]=\"'url(assets/imgs/nothing.png)'\">\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <ion-list *ngIf=\"from ==='cart'\">\n        <ion-radio-group [(ngModel)]=\"selectedAddress\">\n          <ion-item *ngFor=\"let item of myaddress\" class=\"list\">\n            <ion-label class=\"title\">{{util.getString(item.title)}}<br>\n              <span class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}</span></ion-label>\n            <!-- <ion-label class=\"name\"></ion-label> -->\n            <ion-radio [value]=\"item.id\" slot=\"start\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <div *ngIf=\"from ==='account'\">\n        <div class=\"list\" *ngFor=\"let item of myaddress\" scrollX=\"true\">\n          <ion-label class=\"title\">{{util.getString(item.title)}}</ion-label>\n          <ion-label class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}\n          </ion-label>\n          <ion-icon *ngIf=\"util.direction == 'rtl'\" class=\"moreIcon\" (click)=\"openMenu(item,$event)\" style=\"left: 0px; right: unset;\" name=\"ellipsis-vertical-outline\">\n          </ion-icon>\n          <ion-icon *ngIf=\"util.direction == 'ltr'\" class=\"moreIcon\" (click)=\"openMenu(item,$event)\" name=\"ellipsis-vertical-outline\">\n          </ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedAddress\" (click)=\"selectAddress()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/popover/popover.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcG92ZXJcXHBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qLyIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovIl19 */";
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/popover/popover.component.ts ***!
    \*********************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
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


    var PopoverComponent = /*#__PURE__*/function () {
      function PopoverComponent(popoverController, util) {
        _classCallCheck(this, PopoverComponent);

        this.popoverController = popoverController;
        this.util = util;
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "select",
        value: function select(type) {
          this.popoverController.dismiss(type);
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popover.component.scss */
      "./src/app/components/popover/popover.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], PopoverComponent);
    /***/
  },

  /***/
  "./src/app/pages/address/address-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/address/address-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddressPageRoutingModule */

  /***/
  function srcAppPagesAddressAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function () {
      return AddressPageRoutingModule;
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


    var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./address.page */
    "./src/app/pages/address/address.page.ts");
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
      component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }];

    var AddressPageRoutingModule = function AddressPageRoutingModule() {
      _classCallCheck(this, AddressPageRoutingModule);
    };

    AddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/address/address.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/address/address.module.ts ***!
    \*************************************************/

  /*! exports provided: AddressPageModule */

  /***/
  function srcAppPagesAddressAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPageModule", function () {
      return AddressPageModule;
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


    var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./address-routing.module */
    "./src/app/pages/address/address-routing.module.ts");
    /* harmony import */


    var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./address.page */
    "./src/app/pages/address/address.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddressPageModule = function AddressPageModule() {
      _classCallCheck(this, AddressPageModule);
    };

    AddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]],
      declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })], AddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/address/address.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/address/address.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddressAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-label {\n  display: block;\n}\n.group {\n  padding: 10px 15px;\n  width: 100%;\n  background: #fff !important;\n}\n.group .mainContent {\n  padding: 5px 10px;\n}\n.group .mainContent .savedTitle {\n  font-weight: bold;\n}\n.group .mainContent .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n.group .mainContent .list {\n  margin-top: 20px;\n  position: relative;\n  overflow-x: auto;\n}\n.group .mainContent .list::-webkit-scrollbar {\n  display: none;\n}\n.group .mainContent .list .scroll-item {\n  flex: 0 0 auto;\n}\n.group .mainContent .list .title {\n  font-weight: bold;\n  color: black;\n  font-size: 0.8rem;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n}\n.group .mainContent .list .name {\n  color: lightgray;\n  font-size: 0.7rem;\n}\n.group .mainContent .list .moreIcon {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkcmVzcy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxhZGRyZXNzXFxhZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGNBQUE7QURFSjtBQ0FBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QURHSjtBQ0ZJO0VBQ0ksaUJBQUE7QURJUjtBQ0hRO0VBQ0ksaUJBQUE7QURLWjtBQ0hRO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBREtaO0FDSFE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7QURHWjtBQ0ZZO0VBQ0ksYUFBQTtBREloQjtBQ0ZZO0VBQ0ksY0FBQTtBREloQjtBQ0ZZO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FESWhCO0FDRlk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FESWhCO0FDRlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FESWhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmdyb3VwIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmdyb3VwIC5tYWluQ29udGVudCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAuc2F2ZWRUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubm9EYXRhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3QgLnNjcm9sbC1pdGVtIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdCAubmFtZSB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdCAubW9yZUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMXB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmdyb3VwIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC5tYWluQ29udGVudHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIC5zYXZlZFRpdGxle1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgXG4gICAgICAgIH1cbiAgICAgICAgLm5vRGF0YXtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5saXN0e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zY3JvbGwtaXRlbSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9yZUljb257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/address/address.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/address/address.page.ts ***!
    \***********************************************/

  /*! exports provided: AddressPage */

  /***/
  function srcAppPagesAddressAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
      return AddressPage;
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


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddressPage = /*#__PURE__*/function () {
      function AddressPage(navCtrl, api, util, router, route, popoverController, cart) {
        var _this = this;

        _classCallCheck(this, AddressPage);

        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.route = route;
        this.popoverController = popoverController;
        this.cart = cart;
        this.myaddress = [];
        this.dummy = Array(10);
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.from) {
            _this.from = data.from;
          }
        });
        this.getAddress();
        this.util.subscribeNewAddress().subscribe(function (data) {
          console.log('subscribe master address');

          _this.getAddress();
        });
      }

      _createClass(AddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this2 = this;

          var param = {
            id: localStorage.getItem('uid')
          };
          this.myaddress = [];
          this.dummy = Array(10);
          this.api.post('address/getByUid', param).subscribe(function (data) {
            console.log(data);
            _this2.dummy = [];

            if (data && data.status === 200 && data.data.length) {
              _this2.myaddress = data.data;
            }
          }, function (error) {
            console.log(error);
            _this2.dummy = [];

            _this2.util.errorToast(_this2.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {// this.getAddress();
        }
      }, {
        key: "addNew",
        value: function addNew() {
          this.router.navigate(['add-address']);
        }
      }, {
        key: "selectAddress",
        value: function selectAddress() {
          var _this3 = this;

          if (this.from === 'cart') {
            var selecte = this.myaddress.filter(function (x) {
              return x.id === _this3.selectedAddress;
            });
            var item = selecte[0];
            console.log('item', item);
            this.cart.deliveryAddress = item;
            this.cart.calcuate();
            this.router.navigate(['/tabs/cart/payment']);
          }
        }
      }, {
        key: "openMenu",
        value: function openMenu(item, events) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
                      event: events,
                      mode: 'ios'
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (data) {
                      console.log(data.data);

                      if (data && data.data) {
                        if (data.data === 'edit') {
                          var navData = {
                            queryParams: {
                              from: 'edit',
                              data: JSON.stringify(item)
                            }
                          };

                          _this4.router.navigate(['add-address'], navData);
                        } else if (data.data === 'delete') {
                          console.log(item);
                          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: 'Are you sure?',
                            text: 'to delete this address',
                            icon: 'question',
                            confirmButtonText: 'Yes',
                            backdrop: false,
                            background: 'white',
                            showCancelButton: true,
                            showConfirmButton: true,
                            cancelButtonText: 'cancel'
                          }).then(function (data) {
                            console.log(data);

                            if (data && data.value) {
                              _this4.util.show();

                              var param = {
                                id: item.id
                              };

                              _this4.api.post('address/deleteList', param).subscribe(function (info) {
                                console.log(info);

                                _this4.util.hide();

                                _this4.getAddress();
                              }, function (error) {
                                console.log(error);

                                _this4.util.hide();

                                _this4.util.errorToast(_this4.util.getString('Something went wrong'));
                              });
                            }
                          });
                        }
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
      }]);

      return AddressPage;
    }();

    AddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]
      }];
    };

    AddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./address.page.scss */
      "./src/app/pages/address/address.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]])], AddressPage);
    /***/
  }
}]);
//# sourceMappingURL=address-address-module-es5.js.map