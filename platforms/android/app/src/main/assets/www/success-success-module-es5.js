function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["success-success-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSuccessSuccessPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> Order Report </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"this.orderStatus == 0\">\n  <ion-row>\n    <ion-col class=\"ion-margin ion-text-center\" style=\"font-weight: bold;\">\n      <ion-text>\n        Your Order Placed Successfully. Redirecting to Order Page\n      </ion-text>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-content *ngIf=\"this.orderStatus != 0\">\n  <ion-row>\n    <ion-col class=\"ion-margin ion-text-center\" style=\"font-weight: bold; color: red\">\n      <ion-text>\n        Your Transaction failed. Please click the button below to go back to cart and retry\n      </ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-margin ion-text-center\">\n      <ion-button color=\"danger\" (click) = \"goToCart()\">Go To Cart</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/success/success-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/success/success-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SuccessPageRoutingModule */

  /***/
  function srcAppSuccessSuccessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function () {
      return SuccessPageRoutingModule;
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


    var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./success.page */
    "./src/app/success/success.page.ts");

    var routes = [{
      path: '',
      component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
    }];

    var SuccessPageRoutingModule = function SuccessPageRoutingModule() {
      _classCallCheck(this, SuccessPageRoutingModule);
    };

    SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SuccessPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/success/success.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/success/success.module.ts ***!
    \*******************************************/

  /*! exports provided: SuccessPageModule */

  /***/
  function srcAppSuccessSuccessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function () {
      return SuccessPageModule;
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


    var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./success-routing.module */
    "./src/app/success/success-routing.module.ts");
    /* harmony import */


    var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./success.page */
    "./src/app/success/success.page.ts");

    var SuccessPageModule = function SuccessPageModule() {
      _classCallCheck(this, SuccessPageModule);
    };

    SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]],
      declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
    })], SuccessPageModule);
    /***/
  },

  /***/
  "./src/app/success/success.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/success/success.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSuccessSuccessPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/success/success.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/success/success.page.ts ***!
    \*****************************************/

  /*! exports provided: SuccessPage */

  /***/
  function srcAppSuccessSuccessPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPage", function () {
      return SuccessPage;
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


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var SuccessPage = /*#__PURE__*/function () {
      function SuccessPage(route, navCtrl, cart, util, api) {
        var _this = this;

        _classCallCheck(this, SuccessPage);

        this.route = route;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.util = util;
        this.api = api;
        this.orderStatus = 1;
        this.date_time = localStorage.getItem('datetime');
        this.delivery_at = localStorage.getItem('deliveryAt');
        this.delivery_address = "";
        this.driver_id = "";

        if (this.delivery_at === 'home') {
          this.delivery_address = JSON.parse(localStorage.getItem('deliveryAddress'));
          this.driver_id = localStorage.getItem('driverid');
          console.log("delivery Address", this.delivery_address);
        }

        this.route.queryParams.subscribe(function (params) {
          _this.orderStatus = params.orderstatus;

          if (_this.orderStatus == 0) {
            _this.createOrder();
          }
        });
      }

      _createClass(SuccessPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {// this.navCtrl.back();
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var storeId, orderStatus, notes, param;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    //////////// new
                    //////////// new
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
                      time: moment__WEBPACK_IMPORTED_MODULE_7__().format('lll')
                    }];
                    param = {
                      uid: localStorage.getItem('uid'),
                      store_id: storeId.join(),
                      date_time: this.date_time === 'today' ? moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                      paid_method: 'online',
                      order_to: this.delivery_at,
                      orders: JSON.stringify(this.cart.cart),
                      notes: JSON.stringify(notes),
                      address: this.delivery_at === 'home' ? JSON.stringify(this.delivery_address) : '',
                      driver_id: this.delivery_at === 'home' ? this.driver_id : '',
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

                      _this2.util.hide();

                      _this2.api.createOrderNotification(_this2.cart.stores);

                      _this2.cart.clearCart();

                      _this2.util.publishNewOrder();

                      _this2.navCtrl.navigateRoot(['/tabs/orders'], {
                        replaceUrl: true,
                        skipLocationChange: true
                      });
                    }, function (error) {
                      console.log(error);

                      _this2.util.hide();

                      _this2.util.showToast(_this2.util.getString('Something went wrong'), 'danger', 'bottom');
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
        key: "goToCart",
        value: function goToCart() {
          this.navCtrl.navigateForward('tabs/cart');
        }
      }]);

      return SuccessPage;
    }();

    SuccessPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }];
    };

    SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-success',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./success.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./success.page.scss */
      "./src/app/success/success.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])], SuccessPage);
    /***/
  }
}]);
//# sourceMappingURL=success-success-module-es5.js.map