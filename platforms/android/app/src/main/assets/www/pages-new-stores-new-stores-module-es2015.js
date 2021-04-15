(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-stores-new-stores-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-stores/new-stores.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-stores/new-stores.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>New Stores</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"search()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" *ngIf=\"haveSearch\" (ionCancel)=\"search()\" [placeholder]=\"util.getString('Search')\"\n    type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" showCancelButton=\"always\">\n  </ion-searchbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngFor=\"let item of dummy\" style=\"margin-bottom: 10px;\">\n    <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n  </div>\n\n  <div class=\"content_div\" *ngFor=\"let item of stores\">\n    <div class=\"card_div\">\n      <div class=\"image_div\" (click)=\"openStore(item)\"\n        [ngStyle]=\"{'background-image':'url('+ api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n        <img src=\"assets/imgs/open.png\" class=\"isOpen\" alt=\"Veg\" *ngIf=\"item.isClosed ==='0'\">\n        <img src=\"assets/imgs/close.png\" class=\"isOpen\" alt=\"Non Veg\" *ngIf=\"item.isClosed === '1'\" >\n      </div>\n      <div class=\"desc_div\" (click)=\"openStore(item)\">\n        <ion-label class=\"pro_name\">\n          {{ (item.name.length>12)? (item.name | slice:0:12)+'..':(item.name) }}</ion-label>\n        <ion-label class=\"pro_detail\">\n          {{ (item.address.length>20)? (item.address | slice:0:20)+'..':(item.address) }}\n        </ion-label>\n        <!-- <ion-label class=\"price_lbl\"> {{getTime(item.open_time)}} - {{getTime(item.close_time)}} </ion-label> -->\n        <ion-label class=\"price_lbl\" *ngIf=\"item.open_time\"> {{getTime(item.open_time)}} - {{getTime(item.close_time)}} </ion-label>\n        <ion-label class=\"price_lbl\" *ngIf=\"!item.open_time\">  {{util.getString('Closed')}}</ion-label>\n        <div class=\"small_flex\">\n          <div class=\"btnBtm\">\n            <div class=\"ion-activatable ripple-parent\">\n              {{util.getString('View')}}\n              <ion-ripple-effect></ion-ripple-effect>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/new-stores/new-stores-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/new-stores/new-stores-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NewStoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStoresPageRoutingModule", function() { return NewStoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_stores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-stores.page */ "./src/app/pages/new-stores/new-stores.page.ts");




const routes = [
    {
        path: '',
        component: _new_stores_page__WEBPACK_IMPORTED_MODULE_3__["NewStoresPage"]
    }
];
let NewStoresPageRoutingModule = class NewStoresPageRoutingModule {
};
NewStoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewStoresPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/new-stores/new-stores.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-stores/new-stores.module.ts ***!
  \*******************************************************/
/*! exports provided: NewStoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStoresPageModule", function() { return NewStoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_stores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-stores-routing.module */ "./src/app/pages/new-stores/new-stores-routing.module.ts");
/* harmony import */ var _new_stores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-stores.page */ "./src/app/pages/new-stores/new-stores.page.ts");







let NewStoresPageModule = class NewStoresPageModule {
};
NewStoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_stores_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewStoresPageRoutingModule"]
        ],
        declarations: [_new_stores_page__WEBPACK_IMPORTED_MODULE_6__["NewStoresPage"]]
    })
], NewStoresPageModule);



/***/ }),

/***/ "./src/app/pages/new-stores/new-stores.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-stores/new-stores.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.content_div {\n  width: 100%;\n}\n.content_div .card_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n}\n.content_div .card_div .offer_tag {\n  width: 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n.content_div .card_div .off_lbl {\n  font-family: muli-bold;\n  position: absolute;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  font-size: 9px;\n  top: 4px;\n  left: 8px;\n  text-align: center;\n  color: white;\n  z-index: 999;\n}\n.content_div .card_div .image_div {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin: 5px;\n}\n.content_div .card_div .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.content_div .card_div .image_div .isOpen {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.content_div .card_div .desc_div {\n  text-align: right;\n  padding: 10px;\n}\n.content_div .card_div .desc_div ion-label {\n  display: block !important;\n}\n.content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.content_div .card_div .desc_div .pro_detail {\n  font-size: 11px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.content_div .card_div .desc_div .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.content_div .card_div .desc_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.content_div .card_div .desc_div .price_lbl .sell {\n  font-weight: bold;\n}\n.content_div .card_div .desc_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.content_div .card_div .desc_div .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 12px;\n}\n.content_div .card_div .desc_div .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.content_div .card_div .desc_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LXN0b3Jlcy9uZXctc3RvcmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV3LXN0b3Jlcy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxuZXctc3RvcmVzXFxuZXctc3RvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFdBQUE7QURFSjtBQ0RJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBREVSO0FDRFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QURHWjtBQ0FRO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURFWjtBQ0NRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBRENaO0FDQVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURFaEI7QUNBWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBREVoQjtBQ0FZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FERWhCO0FDRVE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QURBWjtBQ0NZO0VBQ0kseUJBQUE7QURDaEI7QUNDWTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEQ2hCO0FDQ1k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEQ2hCO0FDQ1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QURDaEI7QUNBZ0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QURFcEI7QUNBZ0I7RUFDSSxpQkFBQTtBREVwQjtBQ0FnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBREVwQjtBQ0NZO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QURDaEI7QUNBZ0I7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FERXBCO0FDRG9CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREd4QjtBQ2NZO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEWmhCO0FDY2dCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRFpwQjtBQ2VnQjtFQUNJLGNBQUE7RUFDQSxXQUFBO0FEYnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3LXN0b3Jlcy9uZXctc3RvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDNweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5vZmZlcl90YWcge1xuICB3aWR0aDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAub2ZmX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBmb250LXNpemU6IDlweDtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiAua2luZCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgLmlzT3BlbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJvX25hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcm9fZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwgLmRpY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCAuYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmNvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5jYXJkX2RpdntcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgLm9mZmVyX3RhZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICB9XG5cbiAgICAgICAgLm9mZl9sYmx7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAua2luZHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXNPcGVue1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9fbmFtZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvX2RldGFpbHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAub3JpZ2luYWx7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zZWxse1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRpY291bnR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2ZsZXh7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAuYnRuQnRte1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gLmxlZnR7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgLy8gICAgIGltZ3tcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hYnNfYWRke1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/new-stores/new-stores.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/new-stores/new-stores.page.ts ***!
  \*****************************************************/
/*! exports provided: NewStoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewStoresPage", function() { return NewStoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let NewStoresPage = class NewStoresPage {
    constructor(navCtrl, api, util, router) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.dummy = Array(10);
        this.dummyStores = [];
        this.stores = [];
        this.haveSearch = false;
        this.getStores();
    }
    ngOnInit() {
    }
    search() {
        this.haveSearch = !this.haveSearch;
    }
    onSearchChange(event) {
        if (event.detail.value) {
            this.stores = this.dummyStores.filter((item) => {
                return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.stores = this.dummyStores;
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
    getTime(time) {
        // const date = moment().format('DD-MM-YYYY');
        // return moment(date + ' ' + time).format('hh:mm a');
        return moment__WEBPACK_IMPORTED_MODULE_6__(time, ['h:mm A']).format('hh:mm A');
    }
    getStores() {
        const param = {
            id: localStorage.getItem('city')
        };
        this.api.post('stores/getByCity', param).subscribe((stores) => {
            console.log('stores by city', stores);
            this.stores = [];
            this.dummy = [];
            if (stores && stores.status === 200 && stores.data && stores.data.length) {
                this.stores = stores.data;
                this.stores.sort((b, a) => a.id - b.id);
                this.dummy = [];
                this.stores.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    element['isOpen'] = yield this.isOpen(element.open_time, element.close_time);
                }));
                this.dummyStores = this.stores;
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.getString('Something went wrong'));
            this.dummy = [];
            this.dummyStores = [];
            this.stores = [];
        });
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
    back() {
        this.navCtrl.back();
    }
};
NewStoresPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
NewStoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-new-stores',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-stores.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-stores/new-stores.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-stores.page.scss */ "./src/app/pages/new-stores/new-stores.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], NewStoresPage);



/***/ })

}]);
//# sourceMappingURL=pages-new-stores-new-stores-module-es2015.js.map