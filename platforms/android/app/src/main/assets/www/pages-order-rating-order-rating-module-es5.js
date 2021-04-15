function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-rating-order-rating-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-rating/order-rating.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-rating/order-rating.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderRatingOrderRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Rate Order')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n\n\n    <ion-label class=\"titles\"> {{util.getString('Orders')}} </ion-label>\n    <div class=\"desc_div\">\n      <div *ngIf=\"orders?.length\" class=\"border_bottom\">\n        <div *ngFor=\"let item of orders\">\n          <p class=\"storeName\">\n            <span class=\"name\"> {{getStoreName(item.id)}} </span>\n            <span class=\"status\" (click)=\"rateStore(item.id)\">\n              <div class=\"ion-activatable ripple-parent\">\n                <ion-icon slot=\"start\" color=\"warning\" name=\"star-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </div>\n            </span>\n          </p>\n          <p *ngFor=\"let order of item.order;let ol = index\" class=\"items\">\n            <span>{{order.name}} -\n              <span *ngIf=\"order.have_gram === '1'\"> {{order.gram}} {{util.getString('grams')}} </span>\n              <span *ngIf=\"order.have_kg === '1'\"> {{order.kg}} {{util.getString('kg')}} </span>\n              <span *ngIf=\"order.have_liter ==='1'\"> {{order.liter}} {{util.getString('ltr')}} </span>\n              <span *ngIf=\"order.have_ml ==='1'\"> {{order.ml}} {{util.getString('ml')}}</span>\n              <span *ngIf=\"order.have_pcs === '1'\"> {{order.pcs}} {{util.getString('pcs')}} </span>\n            </span>\n            <span (click)=\"rateProduct(order)\">\n              <div class=\"ion-activatable ripple-parent\">\n                <ion-icon slot=\"start\" color=\"warning\" name=\"star-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </div>\n            </span>\n          </p>\n        </div>\n      </div>\n\n      <ion-label class=\"titles\" *ngIf=\"driverInfo && driverInfo.length\"> {{util.getString('Rate Drivers')}} </ion-label>\n\n      <div *ngFor=\"let item of driverInfo\">\n        <div class=\"card_div\">\n          <div class=\"resto_detail\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"></div>\n            <div style=\"margin-left: 10px;\" (click)=\"ratDriver(item)\">\n              <ion-label class=\"res_name\">{{item.first_name}} {{item.last_name}}</ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"mail-outline\"></ion-icon> {{item.email}}\n              </ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"call-outline\"></ion-icon> {{item.mobile}}\n              </ion-label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/order-rating/order-rating-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/order-rating/order-rating-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderRatingPageRoutingModule */

  /***/
  function srcAppPagesOrderRatingOrderRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRatingPageRoutingModule", function () {
      return OrderRatingPageRoutingModule;
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


    var _order_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-rating.page */
    "./src/app/pages/order-rating/order-rating.page.ts");
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
      component: _order_rating_page__WEBPACK_IMPORTED_MODULE_3__["OrderRatingPage"]
    }];

    var OrderRatingPageRoutingModule = function OrderRatingPageRoutingModule() {
      _classCallCheck(this, OrderRatingPageRoutingModule);
    };

    OrderRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/order-rating/order-rating.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/order-rating/order-rating.module.ts ***!
    \***********************************************************/

  /*! exports provided: OrderRatingPageModule */

  /***/
  function srcAppPagesOrderRatingOrderRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRatingPageModule", function () {
      return OrderRatingPageModule;
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


    var _order_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-rating-routing.module */
    "./src/app/pages/order-rating/order-rating-routing.module.ts");
    /* harmony import */


    var _order_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-rating.page */
    "./src/app/pages/order-rating/order-rating.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var OrderRatingPageModule = function OrderRatingPageModule() {
      _classCallCheck(this, OrderRatingPageModule);
    };

    OrderRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderRatingPageRoutingModule"]],
      declarations: [_order_rating_page__WEBPACK_IMPORTED_MODULE_6__["OrderRatingPage"]]
    })], OrderRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/order-rating/order-rating.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/order-rating/order-rating.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrderRatingOrderRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div .resto_detail .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.main_content_div .titles {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 20px 0px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .desc_div {\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom {\n  padding-bottom: 10px;\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .storeName .name {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .desc_div .border_bottom .items {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 0.5px dashed lightgray;\n  margin-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .itemss {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.main_content_div .desc_div .border_bottom .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n.main_content_div .flex_div .values {\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.main_content_div .hr_line_div {\n  margin-top: 15px;\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n}\n.main_content_div .tracking_div {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .tracking_div .left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n}\n.main_content_div .tracking_div .left .line_div {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #E8E8E8;\n}\n.main_content_div .tracking_div .left .line_div_darkgray {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #C8C7CE;\n}\n.main_content_div .tracking_div .left .round_div_gray {\n  height: 20px;\n  width: 20px;\n  background-color: #E8E8E8;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_darkgray {\n  height: 20px;\n  width: 20px;\n  background-color: #C8C7CE;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_red {\n  height: 20px;\n  width: 20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left ion-icon {\n  font-size: 20px;\n  margin-left: -7px;\n  color: var(--ion-color-primary);\n  background: #f4f5f8;\n  border-radius: 50%;\n}\n.main_content_div .tracking_div .right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n}\n.main_content_div .tracking_div .right .line_div {\n  height: 45px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n}\n.main_content_div .tracking_div .right .round_div_gray {\n  height: 20px;\n  width: 100% px;\n  color: #C8C7CE;\n}\n.main_content_div .tracking_div .right .round_div_red {\n  height: 20px;\n  width: 100% px;\n  color: var(--ion-color-main);\n}\n.main_content_div .tracking_div .right .round_div_darkgray {\n  height: 20px;\n  width: 100%;\n  color: gray;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .reject {\n  --background:var(--ion-color-danger);\n}\n.btn_div .accept {\n  --background: var(--ion-color-primary);\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItcmF0aW5nL29yZGVyLXJhdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyLXJhdGluZy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlci1yYXRpbmdcXG9yZGVyLXJhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBREVKO0FDREk7RUFDSSxhQUFBO0FER1I7QUNEUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURHWjtBQ0RZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBREdoQjtBQ0FZO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FERWQ7QUNBWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FERWhCO0FDQ1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QURDaEI7QUNDZ0I7RUFDRyxpQkFBQTtBRENuQjtBQ0VZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURBaEI7QUNJSTtFQUNJLGtCQUFBO0FERlI7QUNHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUREWjtBQ0dZO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FERGhCO0FDR1k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FERGhCO0FDR2E7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUREZDtBQ01ZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREpoQjtBQ01ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FESmhCO0FDT1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QURMaEI7QUNR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WUFBQTtFQUNBLGdCQUFBO0FEOUJKO0FDZ0NBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBRDdCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLXJhdGluZy9vcmRlci1yYXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbG9jYXRpb24ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLm9yZGVyX2lkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLm9yZGVyX2lkIGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLmhlYWRfZ3JheSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAucHJpemUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAucHJpemUxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50aXRsZXMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLnN0b3JlTmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLnN0b3JlTmFtZSAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5zdG9yZU5hbWUgLnN0YXR1cyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5zdG9yZU5hbWUgLnN0YXR1cyAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuaXRlbXMge1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBkYXNoZWQgbGlnaHRncmF5O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5pdGVtc3Mge1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnZhbHVlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ocl9saW5lX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAubGluZV9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDOEM3Q0U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NFO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAucm91bmRfZGl2X3JlZCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogODAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLnJvdW5kX2Rpdl9ncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJSBweDtcbiAgY29sb3I6ICNDOEM3Q0U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAucm91bmRfZGl2X3JlZCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCUgcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAucm91bmRfZGl2X2RhcmtncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5idG5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnRuX2RpdiBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cbi5idG5fZGl2IC5yZWplY3Qge1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG4uYnRuX2RpdiAuYWNjZXB0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zdGF0dXNfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3RhdHVzX2RpdiBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTozcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YXR1c19kaXYgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZ3JlZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC5jYXJkX2RpdntcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAucmVzdG9fZGV0YWlse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBcbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLnJlc19sb2NhdGlvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmRlcl9pZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9kaXYye1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIC5wZXJzb25hbF9kZXRhaWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcl9kZXRhaWx7XG4gICAgICAgICAgICAuaGVhZF9ncmF5e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXple1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemUxe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbWFsbF9sYmwye1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlc3tcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICAuZGVzY19kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuYm9yZGVyX2JvdHRvbXtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAuc3RvcmVOYW1le1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdGF0dXN7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW1ze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjVweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXNze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC5mbGV4X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAvLyBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIC52YWx1ZXN7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmhyX2xpbmVfZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAudHJhY2tpbmdfZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuXG4gICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIC5saW5lX2RpdntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGluZV9kaXZfZGFya2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0M4QzdDRTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9ncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZGFya2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEM3Q0U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9yZWR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTlweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICAgICAgLmxpbmVfZGl2e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M4QzdDRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfcmVke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogI0M4QzdDRTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ0bl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxuICAgIC5yZWplY3R7XG4gICAgICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmFjY2VwdHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuICAgIH1cbn1cblxuLnN0YXR1c19kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b20gOjNweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufVxuXG4uZ3JlZW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/order-rating/order-rating.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/order-rating/order-rating.page.ts ***!
    \*********************************************************/

  /*! exports provided: OrderRatingPage */

  /***/
  function srcAppPagesOrderRatingOrderRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRatingPage", function () {
      return OrderRatingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _store_rating_store_rating_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../store-rating/store-rating.page */
    "./src/app/pages/store-rating/store-rating.page.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _product_rating_product_rating_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../product-rating/product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
    /* harmony import */


    var _driver_rating_driver_rating_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../driver-rating/driver-rating.page */
    "./src/app/pages/driver-rating/driver-rating.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var OrderRatingPage = /*#__PURE__*/function () {
      function OrderRatingPage(route, util, api, navCtrl, modalCtrl) {
        var _this = this;

        _classCallCheck(this, OrderRatingPage);

        this.route = route;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.orderDetail = [];
        this.orders = [];
        this.status = [];
        this.stores = [];
        this.driverInfo = [];
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this.id = data.id;
            _this.loaded = false;

            _this.getOrder();
          } else {
            _this.navCtrl.back();
          }
        });
      }

      _createClass(OrderRatingPage, [{
        key: "getOrder",
        value: function getOrder() {
          var _this2 = this;

          var param = {
            id: this.id
          };
          this.api.post('orders/getById', param).subscribe(function (data) {
            console.log(data);
            _this2.loaded = true;

            if (data && data.status === 200 && data.data.length > 0) {
              var info = data.data[0];
              console.log(info);
              _this2.orderDetail = JSON.parse(info.notes);
              var order = JSON.parse(info.orders);
              console.log('order=====>>', order);
              var finalOrder = [];

              var ids = _toConsumableArray(new Set(order.map(function (item) {
                return item.store_id;
              })));

              ids.forEach(function (element) {
                var param = {
                  id: element,
                  order: []
                };
                finalOrder.push(param);
              });
              ids.forEach(function (element, index) {
                order.forEach(function (cart) {
                  if (cart.store_id === element) {
                    finalOrder[index].order.push(cart);
                  }
                });
              });
              console.log('final order', finalOrder);
              _this2.orders = finalOrder;
              _this2.status = JSON.parse(info.status);
              console.log('order status--------------------', _this2.status); // if()

              _this2.datetime = moment__WEBPACK_IMPORTED_MODULE_7__(info.date_time).format('dddd, MMMM Do YYYY');
              _this2.payMethod = info.paid_method === 'cod' ? 'COD' : 'PAID';
              _this2.orderAt = info.order_to;
              _this2.driverId = info.driver_id;

              if (_this2.driverId && _this2.driverId !== '') {
                var userinfo = {
                  id: _this2.driverId
                };

                _this2.api.post('drivers/getDriversData', userinfo).subscribe(function (data) {
                  console.log('driverid>', data);

                  if (data && data.status === 200 && data.data && data.data.length) {
                    _this2.driverInfo = data.data;
                    console.log(_this2.driverInfo);
                  }
                }, function (error) {
                  console.log(error);
                });
              }

              var stores = {
                id: info.store_id
              };

              _this2.api.post('stores/getStoresData', stores).subscribe(function (data) {
                console.log('store=-============>>', data);
                console.log('store=-============>>', data);

                if (data && data.status === 200 && data.data.length) {
                  _this2.stores = data.data;
                } else {
                  _this2.util.showToast(_this2.util.getString('No Stores Found'), 'danger', 'bottom');

                  _this2.back();
                }
              }, function (error) {
                console.log('error', error);

                _this2.util.showToast(_this2.util.getString('Something went wrong'), 'danger', 'bottom');
              });

              if (_this2.orderAt === 'home') {
                var address = JSON.parse(info.address);
                console.log('---address', address);
              }
            } else {
              _this2.util.errorToast(_this2.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this2.loaded = true;

            _this2.util.errorToast(_this2.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "getStoreName",
        value: function getStoreName(id) {
          var item = this.stores.filter(function (x) {
            return x.uid === id;
          });

          if (item && item.length) {
            return item[0].name;
          }

          return 'Store';
        }
      }, {
        key: "rateProduct",
        value: function rateProduct(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _product_rating_product_rating_page__WEBPACK_IMPORTED_MODULE_8__["ProductRatingPage"],
                      cssClass: 'modalContact',
                      backdropDismiss: false,
                      swipeToClose: true,
                      componentProps: {
                        id: item.id,
                        name: item.name
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "rateStore",
        value: function rateStore(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _store_rating_store_rating_page__WEBPACK_IMPORTED_MODULE_1__["StoreRatingPage"],
                      cssClass: 'modalContact',
                      componentProps: {
                        id: item,
                        name: this.getStoreName(item)
                      },
                      backdropDismiss: false,
                      swipeToClose: true
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
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
        key: "ratDriver",
        value: function ratDriver(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(item);
                    _context3.next = 3;
                    return this.modalCtrl.create({
                      component: _driver_rating_driver_rating_page__WEBPACK_IMPORTED_MODULE_9__["DriverRatingPage"],
                      cssClass: 'modalContact',
                      backdropDismiss: false,
                      swipeToClose: true,
                      componentProps: {
                        id: item.id,
                        name: item.first_name + ' ' + item.last_name
                      }
                    });

                  case 3:
                    modal = _context3.sent;
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return OrderRatingPage;
    }();

    OrderRatingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    OrderRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-order-rating',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-rating/order-rating.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-rating.page.scss */
      "./src/app/pages/order-rating/order-rating.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], OrderRatingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-order-rating-order-rating-module-es5.js.map