(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Order Details')}} ##{{id}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n\n\n    <ion-label class=\"titles\"> {{util.getString('Orders')}} </ion-label>\n    <div class=\"desc_div\">\n      <div *ngIf=\"orders?.length\" class=\"border_bottom\">\n        <div *ngFor=\"let item of orders\">\n          <p class=\"storeName\">\n            <span class=\"name\"> {{getStoreName(item.id)}} </span>\n            <span class=\"status\"> {{getOrderStatus(item.id)}} </span>\n          </p>\n          <p *ngFor=\"let order of item.order;let ol = index\" class=\"items\">\n            <span>\n\n              <span *ngIf=\"util.direction == 'rtl'\">\n                <span style=\"float: left; margin-right: 5px;\" class=\"quantity\">{{order.quantiy}} <span>X</span></span>\n                <span *ngIf=\"order.have_gram === '1'\" style=\"float: left;\"> {{order.gram}} {{util.getString('grams')}} </span>\n                <span *ngIf=\"order.have_kg === '1'\"  style=\"float: left;\"> {{order.kg}} {{util.getString('kg')}} </span>\n                <span *ngIf=\"order.have_liter ==='1'\"  style=\"float: left;\"> {{order.liter}} {{util.getString('ltr')}} </span>\n                <span *ngIf=\"order.have_ml ==='1'\"  style=\"float: left;\"> {{order.ml}} {{util.getString('ml')}}</span>\n                <span *ngIf=\"order.have_pcs === '1'\"  style=\"float: left;\"> {{order.pcs}} {{util.getString('pcs')}} </span>\n                <span>\n                  {{util.currecny}} {{order.discount ==='0' ? order.original_price : order.sell_price}}\n                </span>\n                <span style=\"float: right;\">{{order.name}} - </span>\n              </span>\n\n              <span *ngIf=\"util.direction == 'ltr'\">{{order.name}} -\n                <span *ngIf=\"order.have_gram === '1'\"> {{order.gram}} {{util.getString('grams')}} </span>\n                <span *ngIf=\"order.have_kg === '1'\"> {{order.kg}} {{util.getString('kg')}} </span>\n                <span *ngIf=\"order.have_liter ==='1'\"> {{order.liter}} {{util.getString('ltr')}} </span>\n                <span *ngIf=\"order.have_ml ==='1'\"> {{order.ml}} {{util.getString('ml')}}</span>\n                <span *ngIf=\"order.have_pcs === '1'\"> {{order.pcs}} {{util.getString('pcs')}} </span>\n                <span>\n                  {{util.currecny}} {{order.discount ==='0' ? order.original_price : order.sell_price}}\n                </span>\n              </span>\n              <!-- <span  *ngIf=\"order.size\">{{order.name}} -\n                <span *ngIf=\"order.have_gram === '1'\"> {{order.gram}} {{util.getString('grams')}} </span>\n                <span *ngIf=\"order.have_kg === '1'\"> {{order.kg}} {{util.getString('kg')}} </span>\n                <span *ngIf=\"order.have_liter ==='1'\"> {{order.liter}} {{util.getString('ltr')}} </span>\n                <span *ngIf=\"order.have_ml ==='1'\"> {{order.ml}} {{util.getString('ml')}} </span>\n                <span *ngIf=\"order.have_pcs === '1'\"> {{order.pcs}} {{util.getString('pcs')}} </span>\n              </span> -->\n              <!-- <span *ngIf=\"order.size ==='1'\">\n                {{order.name}} - <span> {{order.variations[0].items[order.variant].title}} </span>\n              </span> -->\n              <span *ngIf=\"util.direction == 'ltr'\" style=\"float: right;\">X {{order.quantiy}}</span>\n            </span>\n            \n            <span *ngIf=\"order.variations[0]\">\n              <span *ngFor=\"let addon of order.variations[0].items;let al = index\">\n                <span *ngIf=\"util.direction == 'rtl'\" style=\"display: block;\">\n                  <span *ngIf=\"addon.quantity !=0\">{{addon.title}}<span>\n                    </span> </span>\n                  <span *ngIf=\"addon.quantity !=0\" class=\"quantity\">{{addon.quantity}} <span>X</span></span>\n                </span>\n                <span *ngIf=\"util.direction =='ltr'\" style=\"display: block;\">\n                  <span *ngIf=\"addon.quantity !=0\">{{addon.title}} <span >\n                    </span> </span>\n                  <span *ngIf=\"addon.quantity !=0\" style=\"float: right;\">X {{addon.quantity}}</span>\n                </span>\n              </span>\n            </span>\n            <span *ngIf=\"order.second_variation\">\n              <span *ngFor=\"let addon of order.second_variation;let al = index\">\n                <span *ngIf=\"util.direction == 'rtl'\" style=\"display: block;\">\n                <span *ngFor=\"let subaddon of addon.sub_category;\">\n                  <span *ngIf=\"subaddon.quantity !=0\" style=\"float: right;\">{{subaddon.hb_title}} - </span>\n                  <span *ngIf=\"subaddon.quantity !=0\"> {{subaddon.price}} {{util.currecny}} </span>\n                  <span *ngIf=\"subaddon.quantity !=0\" class=\"quantity\">{{subaddon.quantity}} <span>X</span></span>\n                </span>\n              </span>\n              <span  *ngIf=\"util.direction =='ltr'\" style=\"display: block;\">\n                <span *ngFor=\"let subaddon of addon.sub_category;\">\n                  <span *ngIf=\"subaddon.quantity !=0\">{{subaddon.en_title}} - </span>\n                  <span *ngIf=\"subaddon.quantity !=0\">{{util.currecny}} {{subaddon.price}} </span>\n                  <span *ngIf=\"subaddon.quantity !=0\" style=\"float: right;\">X {{subaddon.quantity}}</span>\n                </span>\n              </span>\n              </span>\n            </span>\n          </p>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Deliver to')}} </ion-label>\n      <ion-label class=\"values\"> {{util.getString(orderAt)}}</ion-label>\n    </div>\n    <div class=\"flex_div\" *ngIf=\"orderAt ==='home'\">\n      <ion-label class=\"values\">\n        <ion-icon slot=\"start\" name=\"location-outline\" color=\"primary\"></ion-icon> {{address}}\n      </ion-label>\n\n    </div>\n\n    <ion-label class=\"titles\"> {{util.getString('Basic Details')}} </ion-label>\n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Order ID')}} </ion-label>\n      <ion-label class=\"values\">{{id}}</ion-label>\n    </div>\n\n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Payment Status')}} </ion-label>\n      <ion-label class=\"values\">  {{util.getString(cashPaid)}} </ion-label>\n    </div>\n\n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Payment Method')}} </ion-label>\n      <ion-label class=\"values\"> {{payMethod}} </ion-label>\n    </div>\n\n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Delivery On')}} </ion-label>\n      <ion-label class=\"values\">{{ util.getString(datetime,true)}} </ion-label>\n    </div>\n\n\n    <ion-label class=\"titles\"> {{util.getString('Order Tracking')}} </ion-label>\n\n    <div class=\"tracking_div\">\n\n      <div class=\"left\">\n        <span *ngFor=\"let item of orderDetail\">\n          <div class=\"line_div\" [class.line_div_darkgray]=\"item.status === 1\"></div>\n          <ion-icon *ngIf=\"item.status === 1\" name=\"checkmark-sharp\"></ion-icon>\n        </span>\n\n      </div>\n\n      <div class=\"right\">\n        <span *ngFor=\"let item of orderDetail\">\n          <div class=\"line_div\">\n            <ion-label [class.round_div_red]=\"item.status === 1\" [class.round_div_darkgray]=\"item.status === 1\">\n              {{ util.getString(item.time,true)}}</ion-label>\n          </div>\n          <div class=\"round_div_gray\" [class.round_div_red]=\"item.status === 1\"\n            [class.round_div_darkgray]=\"item.status === 1\">\n             {{util.getString(item.default)}} {{item.user}}\n          </div>\n        </span>\n      </div>\n\n    </div>\n\n    <ion-label class=\"titles\" *ngIf=\"driverInfo\"> {{util.getString('Driver Informations')}}\n    </ion-label>\n\n    <div  *ngIf=\"driverInfo\">\n      <div class=\"card_div\">\n        <div class=\"resto_detail\">\n          <div class=\"back_image\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+driverInfo.cover+'),url(assets/imgs/user.png)'}\"></div>\n          <div style=\"margin-left: 10px; margin-right: 10px;\" (click)=\"contanctDriver(driverInfo)\">\n            <ion-label class=\"res_name\">{{driverInfo.first_name}} {{driverInfo.last_name}}</ion-label>\n            <ion-label class=\"res_location\">\n              <!-- <ion-icon name=\"mail-outline\" *ngIf=\"driverInfo.email\"></ion-icon> {{driverInfo.email}} -->\n            </ion-label>\n            <ion-label class=\"res_location\">\n              <ion-icon name=\"call-outline\" *ngIf=\"driverInfo.mobile\"></ion-icon> {{driverInfo.mobile}}\n            </ion-label>\n          </div>\n          <ion-fab class=\"directionBtn\" (click)=\"direction(driverInfo,'driver')\"\n            *ngIf=\"getOrderStatusFromDriver(driverInfo.id) ==='ongoing' || getOrderStatusFromDriver(driverInfo.id) ==='accepted' \">\n            <ion-fab-button color=\"light\" size=\"small\">\n              <ion-icon name=\"compass-outline\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"stores && stores?.length\">\n      <ion-label class=\"titles\" *ngIf=\"stores\"> {{util.getString('Stores Informations')}} </ion-label>\n      <div *ngFor=\"let item of stores\">\n        <div class=\"card_div\">\n          <div class=\"resto_detail\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n            </div>\n            <div style=\"margin-left: 10px; margin-right: 10px;\" (click)=\"contanct(item)\">\n              <ion-label class=\"res_name\">{{item.name}}</ion-label>\n              <ion-label class=\"res_location\">\n                <!-- <ion-icon name=\"mail-outline\"></ion-icon> {{item.email}} -->\n              </ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"call-outline\"></ion-icon> {{item.mobile}}\n              </ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"location-outline\"></ion-icon>{{item.address}}\n              </ion-label>\n            </div>\n            <ion-fab class=\"directionBtn\" (click)=\"direction(item,'store')\"\n              *ngIf=\"getOrderStatus(item.uid) ==='ongoing' || getOrderStatus(item.uid) ==='accepted' \">\n              <ion-fab-button color=\"light\" size=\"small\">\n                <ion-icon name=\"compass-outline\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\">\n      <ion-button *ngIf=\"isDelivered\" (click)=\"presentAlertConfirm()\" class=\"ratae\">\n        <ion-icon name=\"star\" color=\"light\" slot=\"start\"></ion-icon>\n        {{util.getString('Rate Order')}}\n      </ion-button>\n      <!-- <ion-button *ngIf=\"canCancle\" (click)=\"changeStatus()\" class=\"reject\">\n        {{util.getString('Cancel Order')}}\n      </ion-button> -->\n      <app-cancle-button *ngIf=\"loaded\" (onClickBtn)=\"changeStatus()\"\n      [btnLable]=\"util.getString('Cancel Order')\"\n      [creationTime]=\"OrderCreationTime\"\n      ></app-cancle-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/order-details/order-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-details/order-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function() { return OrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");

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
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }
];
let OrderDetailsPageRoutingModule = class OrderDetailsPageRoutingModule {
};
OrderDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details-routing.module */ "./src/app/pages/order-details/order-details-routing.module.ts");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");
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







let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
    })
], OrderDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .directionBtn {\n  position: absolute;\n  right: 0px;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.main_content_div .titles {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 20px 0px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .desc_div {\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom {\n  padding-bottom: 10px;\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .storeName .name {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .items {\n  margin: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 0.5px dashed lightgray;\n  margin-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .quantity {\n  float: left;\n}\n.main_content_div .desc_div .border_bottom .quantity > span {\n  float: right;\n  margin-left: 3px;\n}\n.main_content_div .desc_div .border_bottom .itemss {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n.main_content_div .flex_div .values {\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.main_content_div .hr_line_div {\n  margin-top: 15px;\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n}\n.main_content_div .tracking_div {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .tracking_div .left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n}\n.main_content_div .tracking_div .left .line_div {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #E8E8E8;\n}\n.main_content_div .tracking_div .left .line_div_darkgray {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #C8C7CE;\n}\n.main_content_div .tracking_div .left .round_div_gray {\n  height: 20px;\n  width: 20px;\n  background-color: #E8E8E8;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_darkgray {\n  height: 20px;\n  width: 20px;\n  background-color: #C8C7CE;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_red {\n  height: 20px;\n  width: 20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left ion-icon {\n  font-size: 20px;\n  margin-left: -7px;\n  color: var(--ion-color-primary);\n  background: #f4f5f8;\n  border-radius: 50%;\n}\n.main_content_div .tracking_div .right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n}\n.main_content_div .tracking_div .right .line_div {\n  height: 45px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n}\n.main_content_div .tracking_div .right .round_div_gray {\n  height: 20px;\n  width: 100% px;\n  color: #C8C7CE;\n}\n.main_content_div .tracking_div .right .round_div_red {\n  height: 20px;\n  width: 100% px;\n  color: var(--ion-color-main);\n}\n.main_content_div .tracking_div .right .round_div_darkgray {\n  height: 20px;\n  width: 100%;\n  color: gray;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.btn_div .reject {\n  --background:var(--ion-color-danger);\n}\n.btn_div .accept {\n  --background: var(--ion-color-primary);\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlci1kZXRhaWxzXFxvcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FERUo7QUNESTtFQUNJLGFBQUE7QURHUjtBQ0RRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREdaO0FDRFk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FER2hCO0FDRFk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QURHaEI7QUNBWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBREVkO0FDQVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBREVoQjtBQ0NZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FEQ2hCO0FDQ2dCO0VBQ0csaUJBQUE7QURDbkI7QUNJSTtFQUNJLGtCQUFBO0FERlI7QUNHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUREWjtBQ0dZO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FERGhCO0FDR1k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FERGhCO0FDR2E7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUREZDtBQ01ZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREpoQjtBQ01ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FESmhCO0FDT1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QURMaEI7QUNRWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRE5oQjtBQ1VZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURSaEI7QUNZSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBRFZSO0FDWUk7RUFDSSxjQUFBO0FEVlI7QUNhSztFQUNHLFdBQUE7QURYUjtBQ1lRO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FEVlo7QUNXWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBRFRoQjtBQ1VnQjtFQUNJLGlCQUFBO0FEUnBCO0FDVWdCO0VBQ0ksaUJBQUE7QURScEI7QUNXWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBRFRoQjtBQ1dZO0VBQ0ksV0FBQTtBRFRoQjtBQ1dZO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FEVGhCO0FDV1k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRFRoQjtBQ2dCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsZUFBQTtFQUNBLG9CQUFBO0FEZlI7QUNnQlE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FEZFo7QUNrQkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURoQlI7QUNtQkk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRGpCUjtBQ29CUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRGxCWjtBQ21CWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURqQmhCO0FDb0JZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRGxCaEI7QUNxQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRG5CaEI7QUNxQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRG5CaEI7QUNxQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRG5CaEI7QUNzQlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURwQmhCO0FDd0JRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FEdEJaO0FDd0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUR0QmhCO0FDeUJZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEdkJoQjtBQ3lCWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUR2QmhCO0FDeUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0FEeEJoQjtBQzhCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBRDNCSjtBQzZCSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUQzQlI7QUM4Qkk7RUFDSSxvQ0FBQTtBRDVCUjtBQzhCSTtFQUNJLHNDQUFBO0FENUJSO0FDZ0NBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEN0JKO0FDK0JJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FEN0JSO0FDZ0NJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBRDlCUjtBQ2tDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRC9CSjtBQ2lDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUQ5QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5kaXJlY3Rpb25CdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIC5yZXNfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuaGVhZF9ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5wcml6ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5wcml6ZTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5zbWFsbF9sYmwyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRpdGxlcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuc3RvcmVOYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuc3RvcmVOYW1lIC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLnN0b3JlTmFtZSAuc3RhdHVzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLml0ZW1zIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAucXVhbnRpdHkge1xuICBmbG9hdDogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAucXVhbnRpdHkgPiBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5pdGVtc3Mge1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLnZhbHVlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ocl9saW5lX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAubGluZV9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDOEM3Q0U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NFO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAucm91bmRfZGl2X3JlZCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogODAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLnJvdW5kX2Rpdl9ncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJSBweDtcbiAgY29sb3I6ICNDOEM3Q0U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAucm91bmRfZGl2X3JlZCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCUgcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAucm91bmRfZGl2X2RhcmtncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5idG5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnRuX2RpdiBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYnRuX2RpdiAucmVqZWN0IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuLmJ0bl9kaXYgLmFjY2VwdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc3RhdHVzX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXR1c19kaXYgaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206M3B4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGF0dXNfZGl2IGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmdyZWVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpcmVjdGlvbkJ0bntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc19uYW1le1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyAgXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9yZGVyX2lke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfZGl2MntcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAucGVyc29uYWxfZGV0YWlse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgLnJlc19uYW1le1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyAgXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICAub3JkZXJfZGV0YWlse1xuICAgICAgICAgICAgLmhlYWRfZ3JheXtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcml6ZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXplMXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc21hbGxfbGJsMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50aXRsZXN7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAgLmRlc2NfZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmJvcmRlcl9ib3R0b217XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLnN0b3JlTmFtZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RhdHVze1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAuNXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5xdWFudGl0eXtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5xdWFudGl0eT5zcGFue1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDsgXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtc3N7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAudmFsdWVze1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ocl9saW5lX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLnRyYWNraW5nX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI0ZBRkFGQTtcblxuICAgICAgICAubGVmdHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAubGluZV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpbmVfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOEM3Q0U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NFO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfcmVke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICAgICAgICAgIC5saW5lX2RpdntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNDOEM3Q0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X3JlZHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9kYXJrZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLy8gY29sb3I6ICNDOEM3Q0U7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLy8gd2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgICAucmVqZWN0e1xuICAgICAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgfVxuICAgIC5hY2NlcHR7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICB9XG59XG5cbi5zdGF0dXNfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tc2VsZWN0e1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tIDozcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn1cblxuLmdyZWVue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZWR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let OrderDetailsPage = class OrderDetailsPage {
    constructor(route, util, api, navCtrl, alertController, router, iab, callNumber) {
        this.route = route;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.iab = iab;
        this.callNumber = callNumber;
        this.orderDetail = [];
        this.orders = [];
        this.status = [];
        this.driverInfo = [];
        this.stores = [];
        this.assigneeDriver = [];
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                this.id = data.id;
                this.loaded = false;
                this.getOrder();
            }
            else {
                this.navCtrl.back();
            }
        });
    }
    back() {
        this.navCtrl.back();
    }
    getOrder() {
        const param = {
            id: this.id
        };
        this.api.post('orders/getById', param).subscribe((data) => {
            console.log('orders/getById getOrder::', data);
            this.loaded = true;
            if (data && data.status === 200 && data.data.length > 0) {
                const info = data.data[0];
                this.OrderCreationTime = info.date_time;
                console.log('OrderCreationTime', this.OrderCreationTime);
                if (this.OrderCreationTime) {
                    let oderCreationTime = new Date(this.OrderCreationTime).getTime();
                    let currentTime = new Date().getTime();
                    let diffrenceTime = currentTime - oderCreationTime;
                    let totalSecondsFromCreation = diffrenceTime / 1000;
                    console.log('currentTime', new Date(currentTime));
                    console.log('oderCreationTime', new Date(this.OrderCreationTime));
                }
                console.log(info);
                this.orderDetail = JSON.parse(info.notes);
                console.log('driver???? ======>', this.orderDetail);
                const order = JSON.parse(info.orders);
                console.log('order=====>>', order);
                const finalOrder = [];
                if (info.assignee && info.assignee !== '') {
                    this.assigneeDriver = JSON.parse(info.assignee);
                    console.log('ASSSIGNEE---->>>>', this.assigneeDriver);
                }
                const ids = [...new Set(order.map(item => item.store_id))];
                ids.forEach(element => {
                    const param = {
                        id: element,
                        order: []
                    };
                    finalOrder.push(param);
                });
                ids.forEach((element, index) => {
                    order.forEach(cart => {
                        console.log('cart->>>???', cart);
                        if (cart.variations && cart.variations !== '' && typeof cart.variations === 'string') {
                            cart.variations = JSON.parse(cart.variations);
                            console.log(cart['variant']);
                            if (cart["variant"] === undefined) {
                                cart['variant'] = 0;
                            }
                        }
                        if (cart.store_id === element) {
                            finalOrder[index].order.push(cart);
                        }
                    });
                });
                console.log('final order', finalOrder);
                this.orders = finalOrder;
                this.status = JSON.parse(info.status);
                console.log('order status--------------------', this.status);
                const status = this.status.filter(x => x.status === 'created');
                if (status.length === this.status.length) {
                    this.canCancle = true;
                }
                else {
                    this.canCancle = false;
                }
                const delivered = this.status.filter(x => x.status === 'delivered');
                if (delivered.length === this.status.length) {
                    this.isDelivered = true;
                }
                else {
                    this.isDelivered = false;
                }
                if (info.paid_method == "online") {
                    this.cashPaid = "Paid";
                }
                else {
                    if (info.paid_method == "cod" && this.isDelivered) {
                        this.cashPaid = "Paid";
                    }
                    else if (info.paid_method == "cod" && !this.isDelivered) {
                        this.cashPaid = "Pending";
                    }
                }
                console.log("cashPaid", info.paid_method, this.cashPaid);
                // if()
                this.datetime = moment__WEBPACK_IMPORTED_MODULE_7__(info.date_time).format('dddd, MMMM Do YYYY');
                this.payMethod = info.paid_method === 'cod' ? this.util.getString('COD') : 'Easy Card';
                this.orderAt = info.order_to;
                this.driverId = info.driver_id;
                if (this.driverId && this.driverId !== '') {
                    const userinfo = {
                        id: this.driverId
                    };
                    this.api.post('drivers/getDriversData', userinfo).subscribe((data) => {
                        console.log('driverid>', data);
                        if (data && data.status === 200 && data.data && data.data.length) {
                            // this.driverInfo = data.data;
                            data.data.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                const orderParam = {
                                    id: this.id
                                };
                                this.api.post('acceptedorders/getByOrderId', orderParam).subscribe((accepteddata) => {
                                    if (accepteddata && accepteddata.status === 200 && accepteddata.data.length > 0) {
                                        accepteddata.data.forEach((acceptedElement) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                            if (acceptedElement.driver_id == element.id) {
                                                this.driverInfo = element;
                                                // this.driverInfo.mobile = '0'+ this.driverInfo.mobile 
                                                console.log("yes=-====================>", this.driverInfo);
                                            }
                                        }));
                                    }
                                });
                            }));
                        }
                    }, error => {
                        console.log(error);
                    });
                }
                const stores = {
                    id: info.store_id
                };
                this.api.post('stores/getStoresData', stores).subscribe((data) => {
                    console.log('store=-============>>', data);
                    console.log('store=-============>>', data);
                    if (data && data.status === 200 && data.data.length) {
                        this.stores = data.data;
                        this.stores[0].mobile = '0' + this.stores[0].mobile;
                    }
                    else {
                        this.util.showToast(this.util.getString('No Stores Found'), 'danger', 'bottom');
                        this.back();
                    }
                }, error => {
                    console.log('error', error);
                    this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
                });
                if (this.orderAt === 'home') {
                    const address = JSON.parse(info.address);
                    console.log('---address', address);
                    if (address && address.address) {
                        this.userLat = address.lat;
                        this.userLng = address.lng;
                        this.address = address.landmark + ' ' + address.house + ' ' + address.address + ' ' + address.pincode;
                    }
                }
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.loaded = true;
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    ngOnInit() {
    }
    call() {
        if (this.userInfo.mobile) {
            // window.open('tel:' + this.userInfo.mobile);
            this.iab.create('tel:' + this.userInfo.mobile, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Number not found'));
        }
    }
    email() {
        if (this.userInfo.email) {
            // window.open('mailto:' + this.userInfo.email);
            this.iab.create('mailto:' + this.userInfo.email, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Email not found'));
        }
    }
    callStore(tel) {
        if (tel[0] !== '+' && tel[0] !== '0') {
            tel = '0' + tel;
        }
        this.callNumber.callNumber(tel, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    emailStore(item) {
        if (item) {
            // window.open('mailto:' + item);
            this.iab.create('mailto:' + item, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Email not found'));
        }
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.util.getString('How was your experience?'),
                message: this.util.getString('Rate your experience with stores and driver'),
                mode: 'ios',
                buttons: [
                    {
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: this.util.getString('Yes'),
                        handler: () => {
                            console.log('Confirm Okay');
                            // this.util.setOrders(this.orderData);
                            const param = {
                                queryParams: {
                                    id: this.id
                                }
                            };
                            this.router.navigate(['order-rating'], param);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    changeStatus() {
        console.log('changeStatus status');
        const newOrderNotes = {
            status: 1,
            value: this.util.getString('Order ') + this.util.getString('cancelled by you'),
            default: "Order cancelled by you",
            user: '',
            time: moment__WEBPACK_IMPORTED_MODULE_7__().format('lll'),
        };
        this.orderDetail.push(newOrderNotes);
        this.status.forEach(element => {
            if (element.status === 'created') {
                element.status = 'cancelled';
            }
        });
        this.util.show();
        const param = {
            id: this.id,
            notes: JSON.stringify(this.orderDetail),
            status: JSON.stringify(this.status),
        };
        console.log('---->', this.status);
        this.api.post('orders/editList', param).subscribe((data) => {
            console.log('order', data);
            this.util.hide();
            if (this.orderAt === 'home' && this.driverId !== '0') {
                // this.updateDriver(this.driverId, 'active');
            }
            if (data && data.status === 200) {
                this.sendNotification('cancelled');
                this.back();
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    sendNotification(value) {
        let sValue = [value, "__ED"].join();
        sValue = sValue.trim();
        if (this.userInfo && this.userInfo.fcm_token) {
            this.api.sendNotification(this.util.getString('Your order #') + this.id + ' ' + this.util.getString(sValue), this.util.getString('Order_ED')
                + ' ' + this.util.getString(sValue), this.userInfo.fcm_token)
                .subscribe((data) => {
                console.log('onesignal', data);
            }, error => {
                console.log('onesignal error', error);
            });
        }
    }
    updateDriver(uid, value) {
        const param = {
            id: uid,
            current: value
        };
        console.log('param', param);
        this.api.post('drivers/edit_profile', param).subscribe((data) => {
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    getStoreName(id) {
        const item = this.stores.filter(x => x.uid === id);
        if (item && item.length) {
            return item[0].name;
        }
        return this.util.getString('Store');
    }
    getOrderStatus(id) {
        const item = this.status.filter(x => x.id === id);
        if (item && item.length) {
            return this.util.getString(item[0].status.trim());
        }
        return this.util.getString('Created');
    }
    getOrderStatusFromDriver(id) {
        const item = this.assigneeDriver.filter(x => x.driver === id);
        if (item && item.length) {
            return this.getOrderStatus(item[0].assignee);
        }
        return this.util.getString('rejected');
    }
    contanct(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            const alert = yield this.alertController.create({
                header: this.util.getString('Contact') + ' ' + item.name,
                inputs: [
                    {
                        name: 'call',
                        type: 'radio',
                        label: this.util.getString('Call'),
                        value: 'call'
                    }
                ],
                buttons: [
                    {
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: this.util.getString('Ok'),
                        handler: (data) => {
                            console.log('Confirm Ok', data);
                            if (data && data === 'mail') {
                                this.emailStore(item.email);
                            }
                            else if (data && data === 'call') {
                                this.callStore(item.mobile);
                            }
                            else if (data && data === 'msg') {
                                console.log('none');
                                const param = {
                                    queryParams: {
                                        id: item.uid,
                                        name: item.name,
                                        uid: localStorage.getItem('uid')
                                    }
                                };
                                this.router.navigate(['inbox'], param);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    contanctDriver(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            const alert = yield this.alertController.create({
                header: this.util.getString('Contact') + ' ' + item.first_name,
                inputs: [
                    {
                        name: 'call',
                        type: 'radio',
                        label: this.util.getString('Call'),
                        value: 'call'
                    },
                ],
                buttons: [
                    {
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: this.util.getString('Ok'),
                        handler: (data) => {
                            console.log('Confirm Ok', data);
                            if (data && data === 'mail') {
                                this.emailStore(item.email);
                            }
                            else if (data && data === 'call') {
                                this.callStore(item.mobile);
                            }
                            else {
                                console.log('none');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    direction(item, type) {
        console.log(item, type);
        const navData = {
            queryParams: {
                lat: item.lat,
                lng: item.lng,
                who: type,
                id: type === 'store' ? item.uid : item.id,
                orderAt: this.orderAt,
                homeLat: this.userLat ? this.userLat : 'none',
                homeLng: this.userLng ? this.userLng : 'none',
                orderId: this.id
            }
        };
        this.router.navigate(['direction'], navData);
    }
};
OrderDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"] }
];
OrderDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-details.page.scss */ "./src/app/pages/order-details/order-details.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"]])
], OrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-details-order-details-module-es2015.js.map