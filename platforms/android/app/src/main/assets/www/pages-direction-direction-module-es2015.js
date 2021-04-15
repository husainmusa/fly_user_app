(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-direction-direction-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navCtrl.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\" *ngIf=\"who==='driver' && driverInfo && driverInfo.cover\">\n      <ion-label class=\"head_lbl\">Order on the Way</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+driverInfo.cover+'),url(assets/bg.png)'}\"></div>\n        <div style=\"padding-left: 20px;\" (click)=\"callDriver()\">\n          <ion-label class=\"boy_name\">{{driverInfo.first_name +' '+ driverInfo.last_name}}</ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"mail-outline\"></ion-icon> {{driverInfo.email}}\n          </ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"call-outline\"></ion-icon> {{driverInfo.mobile}}\n          </ion-label>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"lower_div\" *ngIf=\"who === 'store' && storeInfo && storeInfo.cover\">\n      <ion-label class=\"head_lbl\">Order on the Way</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+storeInfo.cover+'),url(assets/bg.png)'}\"></div>\n        <div style=\"padding-left: 20px;\" (click)=\"callStore()\">\n          <ion-label class=\"boy_name\">{{storeInfo.name}}</ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"location-outline\"></ion-icon> {{storeInfo.address}}\n          </ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"call-outline\"></ion-icon> {{storeInfo.mobile}}\n          </ion-label>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/direction/direction-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/direction/direction-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DirectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPageRoutingModule", function() { return DirectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _direction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./direction.page */ "./src/app/pages/direction/direction.page.ts");




const routes = [
    {
        path: '',
        component: _direction_page__WEBPACK_IMPORTED_MODULE_3__["DirectionPage"]
    }
];
let DirectionPageRoutingModule = class DirectionPageRoutingModule {
};
DirectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DirectionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/direction/direction.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/direction/direction.module.ts ***!
  \*****************************************************/
/*! exports provided: DirectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPageModule", function() { return DirectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _direction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./direction-routing.module */ "./src/app/pages/direction/direction-routing.module.ts");
/* harmony import */ var _direction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./direction.page */ "./src/app/pages/direction/direction.page.ts");







let DirectionPageModule = class DirectionPageModule {
};
DirectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _direction_routing_module__WEBPACK_IMPORTED_MODULE_5__["DirectionPageRoutingModule"]
        ],
        declarations: [_direction_page__WEBPACK_IMPORTED_MODULE_6__["DirectionPage"]]
    })
], DirectionPageModule);



/***/ }),

/***/ "./src/app/pages/direction/direction.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/direction/direction.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .upper_div {\n  height: 60vh;\n}\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlyZWN0aW9uL0U6XFxwdW5lZXRcXGZseXZpcF8yMy0wMy0yMlxcVXNlcl9hcHBfMDYtMDQtMjAyMS9zcmNcXGFwcFxccGFnZXNcXGRpcmVjdGlvblxcZGlyZWN0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGlyZWN0aW9uL2RpcmVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNHWjtBREFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNFUjtBRERRO0VBQ0ksY0FBQTtBQ0daO0FERFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0daO0FEQVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFWjtBRERZO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ0doQjtBRERZO0VBQ0ksZ0JBQUE7QUNHaEI7QUREWTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FDR2hCO0FERFk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0doQjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQ1E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpcmVjdGlvbi9kaXJlY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC51cHBlcl9kaXZ7XG4gICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAgI21hcHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sb3dlcl9kaXZ7XG4gICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRyaXZlcl9kZXRhaWxfZGl2e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aCA6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm95X25hbWV7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTNweDtcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcl9kZXRhaWx7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm9yZGVyX3N0YXR1c3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9ICAgXG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiB7XG4gIGhlaWdodDogNjB2aDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IHtcbiAgaGVpZ2h0OiA0MHZoO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5kcml2ZXJfZGV0YWlsX2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmRyaXZlcl9kZXRhaWxfZGl2IC5ib3lfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5kcml2ZXJfZGV0YWlsX2RpdiAuYWRkcmVzcyB7XG4gIGNvbG9yOiBncmF5O1xuICB3aWR0aDogODAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zcHg7XG4gIHRvcDogLTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5vcmRlcl9kZXRhaWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLm9yZGVyX3N0YXR1cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/direction/direction.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/direction/direction.page.ts ***!
  \***************************************************/
/*! exports provided: DirectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPage", function() { return DirectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");










let DirectionPage = class DirectionPage {
    constructor(api, util, route, navCtrl, iab, platform, androidPermissions, geolocation, alertController) {
        this.api = api;
        this.util = util;
        this.route = route;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.id && data.lat && data.lng && data.who) {
                this.uid = data.id;
                this.orderId = data.orderId;
                this.who = data.who;
                this.orderAt = data.orderAt;
                this.homeLat = data.homeLat;
                this.homeLng = data.homeLng;
                if (this.who === 'driver') {
                    this.driverLat = data.lat;
                    this.driverLng = data.lng;
                    this.homeLat = parseFloat(this.homeLat);
                    this.homeLng = parseFloat(this.homeLng);
                    this.driverLat = parseFloat(this.driverLat);
                    this.driverLng = parseFloat(this.driverLng);
                    const param = {
                        id: this.uid
                    };
                    this.api.post('drivers/getById', param).subscribe((infoss) => {
                        console.log('******************* driver --->>>> driverinfo --->', infoss);
                        if (infoss && infoss.status === 200 && infoss.data && infoss.data.length) {
                            this.driverInfo = infoss.data[0];
                            this.driverLat = parseFloat(infoss.data[0].lat);
                            this.driverLng = parseFloat(infoss.data[0].lng);
                            this.loadMap(this.driverLat, this.driverLng, this.homeLat, this.homeLng);
                        }
                    }, error => {
                        console.log('==>>', error);
                    });
                }
                else {
                    this.storeLat = parseFloat(data.lat);
                    this.storeLng = parseFloat(data.lng);
                    const param = {
                        id: this.uid
                    };
                    this.api.post('stores/getByUid', param).subscribe((data) => {
                        console.log('*******************', data);
                        if (data && data.status === 200 && data.data && data.data.length) {
                            this.storeLat = parseFloat(data.data[0].lat);
                            this.storeLng = parseFloat(data.data[0].lng);
                            this.storeInfo = data.data[0];
                            this.getMyLocation();
                        }
                    }, error => {
                        console.log(error);
                    });
                }
            }
            else {
                this.navCtrl.back();
            }
        });
    }
    callDriver() {
        this.iab.create('tel:' + this.driverInfo.mobile, '_blank');
    }
    callStore() {
        this.iab.create('tel:' + this.storeInfo.mobile, '_blank');
    }
    getMyLocation() {
        this.platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(result => console.log('Has permission?', result.hasPermission), err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION));
                this.grantRequest();
            }
            else if (this.platform.is('ios')) {
                this.grantRequest();
            }
            else {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                    if (resp) {
                        console.log('resp', resp);
                        this.myLat = resp.coords.latitude;
                        this.myLng = resp.coords.longitude;
                        this.loadMap(this.myLat, this.myLng, this.storeLat, this.storeLng);
                    }
                }).catch(error => {
                    console.log(error);
                    this.grantRequest();
                });
                const watch = this.geolocation.watchPosition();
                watch.subscribe((data) => {
                    if (data && data.coords) {
                        console.log('update', data.coords);
                        this.myLat = data.coords.latitude;
                        this.myLng = data.coords.longitude;
                    }
                });
            }
        });
    }
    grantRequest() {
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
            if (resp) {
                console.log('resp 1', resp);
                this.myLat = resp.coords.latitude;
                this.myLng = resp.coords.longitude;
                this.loadMap(this.myLat, this.myLng, this.storeLat, this.storeLng);
            }
        }).catch(error => {
            console.log(error);
            console.log('ASK Permission');
            if (this.platform.is('ios')) {
                this.iOSAlert();
            }
            else {
                this.presentAlertConfirm();
            }
        });
        const watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            if (data && data.coords) {
                console.log('update', data.coords);
                this.myLat = data.coords.latitude;
                this.myLng = data.coords.longitude;
            }
        });
    }
    iOSAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error',
                subHeader: 'Location error',
                message: 'Please Enable Location Service from settings for best experience',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Please Enable Location Service for best experience',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.askPermission();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    askPermission() {
        this.getMyLocation();
    }
    getDriverLocation(marker, maps) {
        const param = {
            id: this.uid
        };
        this.api.post('drivers/getById', param).subscribe((data) => {
            console.log('******************* driver --->>>> driverinfo --->', data);
            if (data && data.status === 200 && data.data && data.data.length) {
                this.driverLat = parseFloat(data.data[0].lat);
                this.driverLng = parseFloat(data.data[0].lng);
                this.changeMarkerPosition(marker, maps);
            }
        }, error => {
            console.log('==>>', error);
        });
    }
    loadMap(latOri, lngOri, latDest, lngDest) {
        const directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay = new google.maps.DirectionsRenderer();
        const bounds = new google.maps.LatLngBounds;
        const origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
        const destinationA = { lat: latDest, lng: lngDest };
        const maps = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: latOri, lng: lngOri },
            disableDefaultUI: true,
            zoom: 100
        });
        const custPos = new google.maps.LatLng(latOri, lngOri);
        const restPos = new google.maps.LatLng(latDest, lngDest);
        const logo = {
            url: 'assets/marker.png',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        const marker = new google.maps.Marker({
            map: maps,
            position: custPos,
            animation: google.maps.Animation.DROP,
            icon: logo,
        });
        const markerCust = new google.maps.Marker({
            map: maps,
            position: restPos,
            animation: google.maps.Animation.DROP,
        });
        marker.setMap(maps);
        markerCust.setMap(maps);
        directionsDisplay.setMap(maps);
        // directionsDisplay.setOptions({ suppressMarkers: true });
        directionsDisplay.setOptions({
            polylineOptions: {
                strokeWeight: 4,
                strokeOpacity: 1,
                strokeColor: '#44C261'
            },
            suppressMarkers: true
        });
        const geocoder = new google.maps.Geocoder;
        const service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status !== 'OK') {
                alert('Error was: ' + status);
            }
            else {
                const originList = response.originAddresses;
                const destinationList = response.destinationAddresses;
                const showGeocodedAddressOnMap = function (asDestination) {
                    return function (results, status) {
                        if (status === 'OK') {
                            maps.fitBounds(bounds.extend(results[0].geometry.location));
                        }
                        else {
                            alert('Geocode was not successful due to: ' + status);
                        }
                    };
                };
                directionsService.route({
                    origin: origin1,
                    destination: destinationA,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                    }
                    else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
                for (let i = 0; i < originList.length; i++) {
                    const results = response.rows[i].elements;
                    geocoder.geocode({ 'address': originList[i] }, showGeocodedAddressOnMap(false));
                    for (let j = 0; j < results.length; j++) {
                        geocoder.geocode({ 'address': destinationList[j] }, showGeocodedAddressOnMap(true));
                    }
                }
            }
        });
        this.interval = setInterval(() => {
            if (this.who === 'driver') {
                this.getDriverLocation(marker, maps);
            }
            else {
                console.log('update->');
                this.changeMyMarker(marker, maps);
            }
        }, 12000);
    }
    ionViewDidLeave() {
        console.log('leaved');
        clearInterval(this.interval);
    }
    changeMarkerPosition(marker, map) {
        const latlng = new google.maps.LatLng(this.driverLat, this.driverLng);
        map.setCenter(latlng);
        marker.setPosition(latlng);
    }
    changeMyMarker(marker, map) {
        const latlng = new google.maps.LatLng(this.myLat, this.myLng);
        map.setCenter(latlng);
        marker.setPosition(latlng);
    }
    ngOnInit() {
    }
};
DirectionPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DirectionPage.prototype, "mapElement", void 0);
DirectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-direction',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./direction.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./direction.page.scss */ "./src/app/pages/direction/direction.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], DirectionPage);



/***/ })

}]);
//# sourceMappingURL=pages-direction-direction-module-es2015.js.map