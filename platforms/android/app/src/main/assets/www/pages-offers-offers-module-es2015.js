(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-offers-offers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Offers')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated style=\"width: 100%;height: 50px;\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 90%\"></ion-skeleton-text>\n      </ion-label> <br>\n\n    </ion-item>\n\n    <ion-item *ngFor=\"let item of list\" (click)=\"selected(item)\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"api.mediaURL+item.image\" onError=\"this.src='assets/imgs/user.png'\" />\n      </ion-thumbnail>\n      <p class=\"couponDesc\">\n        <span class=\"code\"> {{util.getString('Use coupon code')}} {{item.name}} </span> <br>\n        <span class=\"desc\"> {{item.descriptions}} </span> <br>\n        <span class=\"desc\"> {{util.getString('Valid until')}} {{getTime(item.date_time)}} </span> <br>\n      </p>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/offers/offers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/offers/offers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function() { return OffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.page */ "./src/app/pages/offers/offers.page.ts");

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
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/offers/offers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.module.ts ***!
  \***********************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/pages/offers/offers-routing.module.ts");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/pages/offers/offers.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let OffersPageModule = class OffersPageModule {
};
OffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"]
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })
], OffersPageModule);



/***/ }),

/***/ "./src/app/pages/offers/offers.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.couponDesc {\n  margin: 0px;\n}\n.couponDesc .code {\n  font-weight: bold;\n  font-size: 14px;\n}\n.couponDesc .desc {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29mZmVycy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxvZmZlcnNcXG9mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxXQUFBO0FERUo7QUNESTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBREdSO0FDREk7RUFDSSxlQUFBO0FER1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uY291cG9uRGVzYyB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNvdXBvbkRlc2MgLmNvZGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvdXBvbkRlc2MgLmRlc2Mge1xuICBmb250LXNpemU6IDEycHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5jb3Vwb25EZXNje1xuICAgIG1hcmdpbjogMHB4O1xuICAgIC5jb2Rle1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/offers/offers.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/offers/offers.page.ts ***!
  \*********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let OffersPage = class OffersPage {
    constructor(api, util, navCtrl, cart) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.dummy = Array(5);
        this.list = [];
        this.dummyList = [];
        this.page = 1;
        this.getOffers();
    }
    ngOnInit() {
    }
    getOffers() {
        // this.dummy = Array(5);
        this.api.get('offers').subscribe((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                const info = data.data.filter(x => x.status === '1');
                this.list = info;
                this.dummyList = info;
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    back() {
        this.navCtrl.back();
    }
    selected(item) {
        console.log(item);
        const min = parseFloat(item.min);
        if (this.cart.totalPrice >= min) {
            this.cart.coupon = item;
            this.util.publishCoupon(item);
            this.back();
        }
        else {
            console.log('not valid with minimum amout', min);
            this.util.showToast(this.util.getString('Sorry') + '\n' + this.util.getString('minimum cart value must be') + ' ' + min +
                ' ' + this.util.getString('or equal'), 'danger', 'bottom');
        }
    }
    getTime(time) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(time).format('LLLL');
    }
};
OffersPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] }
];
OffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offers.page.scss */ "./src/app/pages/offers/offers.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])
], OffersPage);



/***/ })

}]);
//# sourceMappingURL=pages-offers-offers-module-es2015.js.map