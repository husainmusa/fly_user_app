function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stripe-payments-stripe-payments-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStripePaymentsStripePaymentsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Pay with Stripe')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <div *ngIf=\"!cards?.length\">\n      <p class=\"ion-text-center\"> {{util.getString('No Card Found Please Add Card')}} </p>\n    </div>\n    <ion-radio-group [(ngModel)]=\"token\">\n      <ion-item class=\"div_inner\" lines=\"none\" *ngFor=\"let card of cards;let i = index\">\n        <ion-thumbnail slot=\"end\">\n          {{card.brand}}\n        </ion-thumbnail>\n        <ion-radio (ionSelect)=\"changeMethod(card.id)\" [value]=\"card.id\" slot=\"start\"></ion-radio>\n        <ion-label>XXXX{{card.last4}} <br> {{util.getString('Expiry')}} {{card.exp_month}} / {{card.exp_year}}\n        </ion-label>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button expand=\"block\" *ngIf=\"cards?.length\" class=\"btn_addcard\" (click)=\"payment()\">\n      {{util.getString('Payment')}} &nbsp;\n      <span *ngIf=\"util.cside ==='left'\">\n        {{util.currecny}} {{cart.grandTotal}}\n      </span>\n      <span *ngIf=\"util.cside ==='right'\">\n        {{cart.grandTotal}} {{util.currecny}}\n      </span>\n    </ion-button>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: StripePaymentsPageRoutingModule */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPageRoutingModule", function () {
      return StripePaymentsPageRoutingModule;
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


    var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./stripe-payments.page */
    "./src/app/pages/stripe-payments/stripe-payments.page.ts");
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
      component: _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__["StripePaymentsPage"]
    }];

    var StripePaymentsPageRoutingModule = function StripePaymentsPageRoutingModule() {
      _classCallCheck(this, StripePaymentsPageRoutingModule);
    };

    StripePaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StripePaymentsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.module.ts ***!
    \*****************************************************************/

  /*! exports provided: StripePaymentsPageModule */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPageModule", function () {
      return StripePaymentsPageModule;
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


    var _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./stripe-payments-routing.module */
    "./src/app/pages/stripe-payments/stripe-payments-routing.module.ts");
    /* harmony import */


    var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./stripe-payments.page */
    "./src/app/pages/stripe-payments/stripe-payments.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StripePaymentsPageModule = function StripePaymentsPageModule() {
      _classCallCheck(this, StripePaymentsPageModule);
    };

    StripePaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["StripePaymentsPageRoutingModule"]],
      declarations: [_stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__["StripePaymentsPage"]]
    })], StripePaymentsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.btn_right {\n  position: relative;\n  z-index: 999999;\n}\n.img_menu {\n  width: 17px;\n  position: absolute;\n  right: 20px;\n}\n.div_content {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.div_content .div_inner {\n  width: 100%;\n  margin-top: 15px;\n  padding-bottom: 15px;\n}\n.div_content .div_inner .r {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.div_content .div_inner .lbl_number {\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n}\n.div_content .div_inner .img_visa {\n  float: right;\n  position: absolute;\n  top: 50%;\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n  transform: translateY(-50%);\n  height: 15px !important;\n  width: 50px !important;\n}\n.btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RyaXBlLXBheW1lbnRzL3N0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0cmlwZS1wYXltZW50cy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxzdHJpcGUtcGF5bWVudHNcXHN0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0FBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREdKO0FDREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRElKO0FDRkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBRElSO0FDRlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBRElaO0FDRlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRElaO0FDRlE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QURJWjtBQ0FBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBREdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RyaXBlLXBheW1lbnRzL3N0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmJ0bl9yaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5OTk5O1xufVxuXG4uaW1nX21lbnUge1xuICB3aWR0aDogMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cblxuLmRpdl9jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmRpdl9jb250ZW50IC5kaXZfaW5uZXIgLnIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9pbm5lciAubGJsX251bWJlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2lubmVyIC5pbWdfdmlzYSB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuX2FkZGNhcmQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmJ0bl9yaWdodHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5OTk5O1xufVxuLmltZ19tZW51e1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbn1cbi5kaXZfY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIC5kaXZfaW5uZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICAucntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfbnVtYmVye1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWdfdmlzYXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuLmJ0bl9hZGRjYXJke1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/stripe-payments/stripe-payments.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/stripe-payments/stripe-payments.page.ts ***!
    \***************************************************************/

  /*! exports provided: StripePaymentsPage */

  /***/
  function srcAppPagesStripePaymentsStripePaymentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StripePaymentsPage", function () {
      return StripePaymentsPage;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StripePaymentsPage = /*#__PURE__*/function () {
      function StripePaymentsPage(router, api, util, navCtrl, cart) {
        _classCallCheck(this, StripePaymentsPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.cards = []; // const items = this.cart.cart;
      }

      _createClass(StripePaymentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getCards",
        value: function getCards() {
          var _this = this;

          console.log(this.util.userInfo.stripe_key);
          this.api.httpGet('https://api.stripe.com/v1/customers/' + this.util.userInfo.stripe_key + '/sources?object=card', this.util.stripe).subscribe(function (cards) {
            console.log(cards);

            if (cards && cards.data) {
              _this.cards = cards.data;
              _this.token = _this.cards[0].id;
            }
          }, function (error) {
            console.log(error);

            if (error && error.error && error.error.error && error.error.error.message) {
              _this.util.showErrorAlert(error.error.error.message);

              return false;
            }

            _this.util.errorToast(_this.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "payment",
        value: function payment() {
          var _this2 = this;

          console.log('place order');
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: this.util.getString('Are you sure?'),
            text: this.util.getString('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            confirmButtonText: this.util.getString('Yes'),
            cancelButtonText: this.util.getString('cancel'),
            showCancelButton: true,
            backdrop: false,
            background: 'white'
          }).then(function (data) {
            console.log(data);

            if (data && data.value) {
              console.log('go to procesed,,');
              var options = {
                amount: _this2.cart.grandTotal * 100,
                currency: _this2.util.stripeCode,
                customer: _this2.util.userInfo.stripe_key,
                card: _this2.token
              };
              console.log('options', options);
              var url = 'https://api.stripe.com/v1/charges';

              _this2.util.show();

              _this2.api.externalPost(url, options, _this2.util.stripe).subscribe(function (data) {
                console.log('------------------------->', data);
                _this2.paykey = data.id;

                _this2.util.hide();

                _this2.util.showToast(_this2.util.getString('Payment Success'), 'success', 'bottom');

                _this2.createOrder();
              }, function (error) {
                _this2.util.hide();

                console.log(error);

                _this2.util.hide();

                if (error && error.error && error.error.error && error.error.error.message) {
                  _this2.util.showErrorAlert(error.error.error.message);

                  return false;
                }

                _this2.util.errorToast(_this2.util.getString('Something went wrong'));
              });
            }
          });
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var storeId, orderStatus, notes, param;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // 2020-07-23 14:09:19
                    storeId = _toConsumableArray(new Set(this.cart.cart.map(function (item) {
                      return item.store_id;
                    })));
                    orderStatus = [];
                    storeId.forEach(function (element) {
                      var info = {
                        id: element,
                        status: 'created'
                      };
                      orderStatus.push(info);
                    });
                    notes = [{
                      status: 1,
                      value: 'Order Created',
                      time: moment__WEBPACK_IMPORTED_MODULE_8__().format('lll')
                    }];
                    param = {
                      uid: localStorage.getItem('uid'),
                      store_id: storeId.join(),
                      date_time: this.cart.datetime === 'today' ? moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_8__().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                      paid_method: 'stripe',
                      order_to: this.cart.deliveryAt,
                      orders: JSON.stringify(this.cart.cart),
                      notes: JSON.stringify(notes),
                      address: this.cart.deliveryAt === 'home' ? JSON.stringify(this.cart.deliveryAddress) : '',
                      driver_id: '',
                      total: this.cart.totalPrice,
                      tax: this.cart.orderTax,
                      grand_total: this.cart.grandTotal,
                      delivery_charge: this.cart.deliveryPrice,
                      coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
                      discount: this.cart.discount,
                      pay_key: '',
                      status: JSON.stringify(orderStatus),
                      assignee: ''
                    };
                    console.log('param----->', param);
                    this.util.show();
                    this.api.post('orders/save', param).subscribe(function (data) {
                      console.log(data);

                      _this3.util.hide();

                      _this3.api.createOrderNotification(_this3.cart.stores);

                      _this3.cart.clearCart();

                      _this3.util.publishNewOrder();

                      _this3.navCtrl.navigateRoot(['/tabs/orders']);
                    }, function (error) {
                      console.log(error);

                      _this3.util.hide();

                      _this3.util.showToast(_this3.util.getString('Something went wrong'), 'danger', 'bottom');
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          this.router.navigate(['tabs/cart/add-card']);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "changeMethod",
        value: function changeMethod(id) {
          this.token = id;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.util.userInfo && this.util.userInfo.stripe_key) {
            this.getCards();
          }
        }
      }]);

      return StripePaymentsPage;
    }();

    StripePaymentsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
      }];
    };

    StripePaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stripe-payments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./stripe-payments.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./stripe-payments.page.scss */
      "./src/app/pages/stripe-payments/stripe-payments.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])], StripePaymentsPage);
    /***/
  }
}]);
//# sourceMappingURL=stripe-payments-stripe-payments-module-es5.js.map