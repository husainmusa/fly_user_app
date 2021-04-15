(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["success-success-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> Order Report </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"this.orderStatus == 0\">\n  <ion-row>\n    <ion-col class=\"ion-margin ion-text-center\" style=\"font-weight: bold;\">\n      <ion-text>\n        Your Order Placed Successfully. Redirecting to Order Page\n      </ion-text>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-content *ngIf=\"this.orderStatus != 0\">\n  <ion-row>\n    <ion-col class=\"ion-margin ion-text-center\" style=\"font-weight: bold; color: red\">\n      <ion-text>\n        Your Transaction failed. Please click the button below to go back to cart and retry\n      </ion-text>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-margin ion-text-center\">\n      <ion-button color=\"danger\" (click) = \"goToCart()\">Go To Cart</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/success/success-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/success/success-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function() { return SuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./success.page */ "./src/app/success/success.page.ts");




const routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
    }
];
let SuccessPageRoutingModule = class SuccessPageRoutingModule {
};
SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SuccessPageRoutingModule);



/***/ }),

/***/ "./src/app/success/success.module.ts":
/*!*******************************************!*\
  !*** ./src/app/success/success.module.ts ***!
  \*******************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-routing.module */ "./src/app/success/success-routing.module.ts");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/success/success.page.ts");







let SuccessPageModule = class SuccessPageModule {
};
SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]
        ],
        declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
    })
], SuccessPageModule);



/***/ }),

/***/ "./src/app/success/success.page.scss":
/*!*******************************************!*\
  !*** ./src/app/success/success.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/success/success.page.ts":
/*!*****************************************!*\
  !*** ./src/app/success/success.page.ts ***!
  \*****************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let SuccessPage = class SuccessPage {
    constructor(route, navCtrl, cart, util, api) {
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
        this.route.queryParams.subscribe(params => {
            this.orderStatus = params.orderstatus;
            if (this.orderStatus == 0) {
                this.createOrder();
            }
        });
    }
    ngOnInit() {
    }
    back() {
        // this.navCtrl.back();
    }
    createOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //////////// new
            //////////// new
            const storeId = [...new Set(this.cart.cart.map(item => item.store_id))];
            const orderStatus = [];
            storeId.forEach(element => {
                const info = {
                    id: element,
                    status: 'created'
                };
                orderStatus.push(info);
            });
            const notes = [
                {
                    status: 1,
                    value: 'Order Created',
                    time: moment__WEBPACK_IMPORTED_MODULE_7__().format('lll'),
                }
            ];
            const param = {
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
            this.api.post('orders/save', param).subscribe((data) => {
                console.log(data);
                this.util.hide();
                this.api.createOrderNotification(this.cart.stores);
                this.cart.clearCart();
                this.util.publishNewOrder();
                this.navCtrl.navigateRoot(['/tabs/orders'], { replaceUrl: true, skipLocationChange: true });
            }, error => {
                console.log(error);
                this.util.hide();
                this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
            });
        });
    }
    goToCart() {
        this.navCtrl.navigateForward('tabs/cart');
    }
};
SuccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
];
SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./success.page.scss */ "./src/app/success/success.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
], SuccessPage);



/***/ })

}]);
//# sourceMappingURL=success-success-module-es2015.js.map