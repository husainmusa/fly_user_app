(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-options-delivery-options-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Delivery Options')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"header\"> {{util.getString('Delivery from')}} </p>\n  <ion-list lines=\"none\" class=\"delivery\">\n    <ion-radio-group [(ngModel)]=\"deliveryOption\">\n      <ion-item>\n        <ion-thumbnail>\n          <img src=\"assets/imgs/home.png\" />\n        </ion-thumbnail>\n        <ion-label> {{util.getString('At Home')}} </ion-label>\n        <ion-radio value=\"home\" slot=\"end\" mode=\"md\"></ion-radio>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-thumbnail>\n          <img src=\"assets/imgs/store.png\" />\n        </ion-thumbnail>\n        <ion-label> {{util.getString('Self Pickup')}} </ion-label>\n        <ion-radio value=\"store\" slot=\"end\" mode=\"md\"></ion-radio>\n      </ion-item> -->\n    </ion-radio-group>\n  </ion-list>\n\n  <div>\n    <p class=\"header\"> {{util.getString('Receive at')}} </p>\n    <div class=\"ion-activatable\" style=\"position: relative;overflow: hidden;padding: 10px 20px;\">\n      <ion-label> {{time}} </ion-label>\n      <!-- <ion-ripple-effect type=\"bounded\"></ion-ripple-effect> -->\n    </div>\n  </div>\n\n  <!-- <div *ngIf=\"deliveryOption === 'store'\">\n    <p class=\"header\"> {{util.getString('Stores')}} </p>\n    <div *ngFor=\"let item of storeAddress\" class=\"stores\">\n      <p class=\"name\">\n        <ion-icon name=\"location-outline\"></ion-icon> {{item.name}}\n      </p>\n      <p class=\"address\"> {{item.address}} </p>\n    </div>\n  </div> -->\n\n\n\n</ion-content>\n\n<ion-footer>\n  <div class=\"btm\">\n    <p class=\"bottomText\" *ngIf=\"deliveryOption === 'store'\"> <span class=\"bolder\">{{util.getString('Note')}} : </span>\n      {{util.getString(\"Please visit this stores for your grocery , you can find this address in order details as well, if you found more than one address in list then, you have to visit every stores for your grocery\")}}\n    </p>\n    <div (click)=\"payment()\" class=\"btmbar\">\n      <ion-label>{{cart.cart.length}} {{util.getString('Items')}}:\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.totalPrice}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.totalPrice}} {{util.currecny}} </span>\n      </ion-label>\n      <ion-label>{{util.getString('Payment')}}\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-label>\n    </div>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DeliveryOptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPageRoutingModule", function() { return DeliveryOptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _delivery_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-options.page */ "./src/app/pages/delivery-options/delivery-options.page.ts");

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
        component: _delivery_options_page__WEBPACK_IMPORTED_MODULE_3__["DeliveryOptionsPage"]
    }
];
let DeliveryOptionsPageRoutingModule = class DeliveryOptionsPageRoutingModule {
};
DeliveryOptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeliveryOptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.module.ts ***!
  \*******************************************************************/
/*! exports provided: DeliveryOptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPageModule", function() { return DeliveryOptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _delivery_options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-options-routing.module */ "./src/app/pages/delivery-options/delivery-options-routing.module.ts");
/* harmony import */ var _delivery_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-options.page */ "./src/app/pages/delivery-options/delivery-options.page.ts");
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







let DeliveryOptionsPageModule = class DeliveryOptionsPageModule {
};
DeliveryOptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _delivery_options_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveryOptionsPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_delivery_options_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryOptionsPage"]]
    })
], DeliveryOptionsPageModule);



/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-thumbnail {\n  --size: 25px;\n  height: 25px;\n  width: 25px;\n  margin-right: 10px;\n}\n.header {\n  font-size: 16px;\n  font-weight: bold;\n  background: #f3f3f3;\n  margin: 0px;\n  padding: 10px;\n}\n.stores {\n  border-bottom: 1px solid lightgray;\n  padding: 0px 20px;\n  margin-top: 20px;\n}\n.name {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0px;\n}\n.address {\n  font-size: 12px;\n  margin: 0px;\n  margin-bottom: 5px;\n}\n.btm {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n.btm .bottomText {\n  font-size: 10px;\n  color: gray;\n  padding: 0px 20px;\n}\n.btm .bottomText .bolder {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n.btm .btmbar {\n  height: 60px;\n  width: 100%;\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n}\n.btm .btmbar ion-label {\n  color: white;\n  font-family: muli-bold;\n  display: flex;\n}\n.btm .btmbar ion-label ion-icon {\n  padding-left: 5px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVsaXZlcnktb3B0aW9ucy9kZWxpdmVyeS1vcHRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVsaXZlcnktb3B0aW9ucy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxkZWxpdmVyeS1vcHRpb25zXFxkZWxpdmVyeS1vcHRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FERUo7QUNBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURHSjtBQ0RBO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FESUo7QUNGQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QURLSjtBQ0hBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRE1KO0FDSEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FETUo7QUNMSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURPUjtBQ05RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRFFaO0FDTEk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBREtSO0FDSFE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FES1o7QUNIWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBREtoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5LW9wdGlvbnMvZGVsaXZlcnktb3B0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLXRodW1ibmFpbCB7XG4gIC0tc2l6ZTogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdG9yZXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5idG0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG0gLmJvdHRvbVRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbi5idG0gLmJvdHRvbVRleHQgLmJvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5idG0gLmJ0bWJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwcHggMTZweDtcbn1cbi5idG0gLmJ0bWJhciBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnRtIC5idG1iYXIgaW9uLWxhYmVsIGlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLXRodW1ibmFpbCB7XG4gICAgLS1zaXplOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uc3RvcmVze1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5uYW1le1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5hZGRyZXNze1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5idG17XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5ib3R0b21UZXh0e1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgLmJvbGRlcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5idG1iYXJ7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAvLyBib3R0b206IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.page.ts ***!
  \*****************************************************************/
/*! exports provided: DeliveryOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPage", function() { return DeliveryOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_components_time_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/time/time.component */ "./src/app/components/time/time.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let DeliveryOptionsPage = class DeliveryOptionsPage {
    constructor(navCtrl, api, util, cart, popoverController, router) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.popoverController = popoverController;
        this.router = router;
        this.deliveryOption = 'home';
        this.storeAddress = [];
        this.getStoreList();
        this.datetime = 'today';
        this.time = this.util.getString('Today - ') + moment__WEBPACK_IMPORTED_MODULE_7__().format('dddd, MMMM Do YYYY');
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    getStoreList() {
        const info = [...new Set(this.cart.cart.map(item => item.store_id))];
        console.log('store iddss==================>>', info);
        // test
        // info.push(10, 17);
        // test
        const param = {
            id: info.join()
        };
        this.api.post('stores/getStoresData', param).subscribe((data) => {
            console.log(data);
            if (data && data.status === 200 && data.data.length) {
                this.storeAddress = data.data;
                this.cart.stores = this.storeAddress;
            }
            else {
                this.util.showToast(this.util.getString('No Stores Found'), 'danger', 'bottom');
                this.back();
            }
        }, error => {
            console.log('error', error);
            this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
        });
    }
    openTime(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_time_time_component__WEBPACK_IMPORTED_MODULE_6__["TimeComponent"],
                event: ev,
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data.data) {
                    if (data.data === 'today') {
                        this.datetime = 'today';
                        this.time = this.util.getString('Today - ') + moment__WEBPACK_IMPORTED_MODULE_7__().format('dddd, MMMM Do YYYY');
                    }
                    else {
                        this.datetime = 'tomorrow';
                        this.time = this.util.getString('Tomorrow - ') + moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'days').format('dddd, MMMM Do YYYY');
                    }
                }
            });
            yield popover.present();
        });
    }
    payment() {
        this.cart.deliveryAt = this.deliveryOption;
        this.cart.datetime = this.datetime;
        localStorage.setItem('deliveryAt', this.cart.deliveryAt);
        localStorage.setItem('datetime', this.cart.datetime);
        if (this.deliveryOption === 'home') {
            console.log('address');
            const param = {
                queryParams: {
                    from: 'cart'
                }
            };
            this.router.navigate(['tabs/cart/address'], param);
        }
        else {
            console.log('payment');
            this.router.navigate(['tabs/cart/payment']);
        }
    }
};
DeliveryOptionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
DeliveryOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-options',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery-options.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-options.page.scss */ "./src/app/pages/delivery-options/delivery-options.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], DeliveryOptionsPage);



/***/ })

}]);
//# sourceMappingURL=delivery-options-delivery-options-module-es2015.js.map