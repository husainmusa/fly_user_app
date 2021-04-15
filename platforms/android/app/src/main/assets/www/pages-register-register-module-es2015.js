(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\">\n    </div>\n    <div class=\"form_div\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign Up')}} </ion-label>\n\n      <!-- <ion-input type=\"email\" [placeholder]=\"util.getString('Email')\" [(ngModel)]=\"email\">\n        <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n      </ion-input> -->\n\n      <ion-input type=\"number\" [placeholder]=\"util.getString('Mobile')\" [(ngModel)]=\"mobile\" (ionInput)=\"phoneNumberChange($event)\">\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <!-- <ion-input type=\"password\" [placeholder]=\"util.getString('Password')\" [(ngModel)]=\"password\">\n        <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n      </ion-input> -->\n\n      <ion-input type=\"text\" [placeholder]=\"util.getString('First Name')\" [(ngModel)]=\"fname\">\n        <ion-icon name=\"person\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-input type=\"text\" [placeholder]=\"util.getString('Last Name')\" [(ngModel)]=\"lname\">\n        <ion-icon name=\"person\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <!-- <ion-input [placeholder]=\"util.getString('Select your Country')\" type=\"text\" (ionChange)=\"onCountryInput($event)\"\n        [(ngModel)]=\"cc\">\n      </ion-input>\n      <div *ngFor=\"let item of countries\" class=\"cCode\" (click)=\"selectedCC(item)\">\n        <p class=\"ccLbl\">+{{item.dialling_code}} {{item.country_name}}</p>\n      </div> -->\n\n      <!-- <ion-item lines=\"none\">\n        <ion-icon name=\"man\" slot=\"icon-only\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('Gender')}} </ion-label>\n        <ion-select okText=\"Okay\" cancelText=\"Dismiss\" interface=\"popover\" [(ngModel)]=\"gender\">\n          <ion-select-option value=\"1\"> {{util.getString('Male')}} </ion-select-option>\n          <ion-select-option value=\"0\"> {{util.getString('Female')}} </ion-select-option>\n          <ion-select-option value=\"2\"> {{util.getString('Others')}} </ion-select-option>\n        </ion-select>\n      </ion-item> -->\n\n      <div class=\"div_chk\">\n        <ion-checkbox [checked]=\"check\" [(ngModel)]=\"check\" color=\"light\" class=\"chk\"></ion-checkbox>\n        <ion-label class=\"lbl_police_rtl\" *ngIf=\"util.direction == 'rtl'\"><span class=\"span_term\" >\n            {{util.getString('By clicking on the I agree button click, download or if you use the Application, you agree to be bound by the')}}\n          </span>\n          <u> <a style=\"color: white;\" (click)=\"open('eula')\"> {{util.getString('EULA certificate')}} </a> </u>\n          {{util.getString('and')}}\n          <u> <a style=\"color: white;\" (click)=\"open('privacy')\"> {{util.getString('Privacy Policy')}} </a> </u>\n          {{util.getString('of this app')}}.\n        </ion-label>\n\n        <ion-label class=\"lbl_police\" *ngIf=\"util.direction == 'ltr'\"><span class=\"span_term\" >\n          {{util.getString('By clicking on the I agree button click, download or if you use the Application, you agree to be bound by the')}}\n        </span>\n        <u> <a style=\"color: white;\" (click)=\"open('eula')\"> {{util.getString('EULA certificate')}} </a> </u>\n        {{util.getString('and')}}\n        <u> <a style=\"color: white;\" (click)=\"open('privacy')\"> {{util.getString('Privacy Policy')}} </a> </u>\n        {{util.getString('of this app')}}.\n      </ion-label>\n      </div>\n      <ion-button expand=\"block\" (click)=\"login()\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN UP')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"goToLogin()\"> {{util.getString('Already have an account ?')}} <span\n          class=\"signup_span\"> {{util.getString('Sign In')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");

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
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  text-align: left;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div .cCode {\n  padding: 0px 10px;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 5px;\n}\n.main_content_div .form_div .cCode .ccLbl {\n  margin: 0px;\n  color: white;\n  padding: 5px;\n}\n.main_content_div .form_div ion-item {\n  --border-radius: 20px;\n}\n.main_content_div .form_div ion-item ion-label {\n  color: gray !important;\n}\n.main_content_div .form_div ion-item ion-icon {\n  padding: 0px !important;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .form_div .div_chk {\n  width: 100%;\n  margin: 20px 0px;\n  position: relative;\n}\n.main_content_div .form_div .div_chk .lbl_police {\n  font-size: 10px;\n  margin-left: 30px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .form_div .div_chk .lbl_police_rtl {\n  font-size: 10px;\n  margin-right: 30px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .form_div .div_chk .span_term {\n  color: white;\n  margin-right: 10px;\n}\n.main_content_div .form_div .div_chk .chk {\n  --size: 20px;\n  --border-radius: 5px !important;\n  --border-color-checked: var(--ion-color-primary);\n}\n.main_content_div .form_div .div_chk .lbl_by {\n  display: block;\n  font-size: 10px;\n  color: black;\n  margin-top: 10px;\n}\n.main_content_div .form_div .div_chk .span_termm {\n  color: #8992AA;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksc0NBQUE7QURFSjtBQ0NBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QURFSjtBQ0FJO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBREVSO0FDQUk7RUFFSSxrQkFBQTtBRENSO0FDQVE7RUFFSSxXQUFBO0FEQ1o7QUNFSTtFQUNJLGFBQUE7RUFFQSxrQkFBQTtBRERSO0FDRVE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBREFaO0FDRVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBREFaO0FDR1E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FERFo7QUNHUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUREWjtBQ0lRO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FERlo7QUNHWTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRERaO0FDS1E7RUFDSSxxQkFBQTtBREhaO0FDSVk7RUFDSSxzQkFBQTtBREZoQjtBQ0lZO0VBQ0ksdUJBQUE7QURGaEI7QUNNUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QURKWjtBQ01RO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURKWjtBQ01RO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FESlo7QUNNUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURKWjtBQ01TO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURKWjtBQ01ZO0VBQ0ksZUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QURMaEI7QUNRWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FETmhCO0FDU1k7RUFDSSxZQUFBO0VBRUEsa0JBQUE7QURSaEI7QUNXWTtFQUNJLFlBQUE7RUFFQSwrQkFBQTtFQUNBLGdEQUFBO0FEVmhCO0FDWVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRFZoQjtBQ1lZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FEVmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmljb25EaXYgLmljb24ge1xuICB3aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubWFpbl9oZWFkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmZvcmdvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuY0NvZGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5jQ29kZSAuY2NMYmwge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taXRlbSBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAudHJpIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubGJsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5zaWdudXBfc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAubGJsX3BvbGljZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAubGJsX3BvbGljZV9ydGwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIC5zcGFuX3Rlcm0ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAuY2hrIHtcbiAgLS1zaXplOiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGsgLmxibF9ieSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAuc3Bhbl90ZXJtbSB7XG4gIGNvbG9yOiAjODk5MkFBO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcblxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIC5pY29uRGl2e1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5pY29ue1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvcm1fZGl2e1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAubWFpbl9oZWFke1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcmdvdHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jQ29kZXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIC5jY0xibHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaSB7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmx7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZ251cF9zcGFue1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICAgLmRpdl9jaGt7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5sYmxfcG9saWNle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxibF9wb2xpY2VfcnRse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNwYW5fdGVybXtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodCA6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGt7XG4gICAgICAgICAgICAgICAgLS1zaXplIDogMjBweDtcbiAgICAgICAgICAgICAgICAvLyAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1cyA6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQgOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsX2J5e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zcGFuX3Rlcm1te1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODk5MkFBO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodCA6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../verify/verify.page */ "./src/app/pages/verify/verify.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let RegisterPage = class RegisterPage {
    constructor(navCtrl, util, router, api, iab, modalCtrl) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.router = router;
        this.api = api;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.fname = '';
        this.lname = '';
        this.mobile = '';
        this.gender = '1';
        this.email = '';
        this.password = '';
        this.cc = '';
        this.ccCode = '';
        this.countries = [];
        this.dummy = [];
        this.dummy = this.util.countrys;
    }
    ngOnInit() {
    }
    openModal(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                componentProps: { code: this.ccCode, mobile: this.mobile, uid: userId }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
            });
            modal.present();
        });
    }
    phoneNumberChange(event) {
        this.mobile = event.target.value;
    }
    login() {
        console.log('login');
        if (!this.check) {
            this.util.showToast(this.util.getString('Please accept terms and conditions'), 'dark', 'bottom');
            return false;
        }
        if (!this.fname || !this.lname || !this.mobile) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
        }
        // const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        // if (!emailfilter.test(this.email)) {
        //   this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
        //   return false;
        // }
        console.log(typeof (this.mobile, "mobile"));
        if (this.mobile != '') {
            if (this.mobile.startsWith("0") == true) {
                this.mobile = this.mobile.replace(/^0+/, '');
            }
        }
        console.log("mobile number", this.mobile, this.mobile.startsWith("0"));
        const param = {
            first_name: this.fname,
            last_name: this.lname,
            email: "",
            password: "",
            gender: "",
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : 'NA',
            type: 'user',
            lat: '',
            lng: '',
            cover: 'NA',
            mobile: '972' + this.mobile,
            // mobile: '91' + this.mobile,
            status: this.util.twillo === '1' ? 0 : 1,
            verified: 0,
            others: 1,
            date: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
            stripe_key: ''
        };
        console.log('param', param);
        this.loggedIn = true;
        this.api.post('users/registerMobileUser', param).subscribe((data) => {
            this.loggedIn = false;
            console.log(data);
            if (data && data.status === 200) {
                this.util.userInfo = data.data;
                // if (this.util.twillo === '1') {
                //   console.log('open model=>>>');
                //   localStorage.setItem('uMobile', '972' + this.mobile);
                //   // this.openModal(data.data.id);
                // } else {
                // localStorage.setItem('uid', data.data.id);
                // const fcm = localStorage.getItem('fcm');
                // if (fcm && fcm !== null && fcm !== 'null') {
                //   const updateParam = {
                //     id: data.data.id,
                //     fcm_token: fcm
                //   };
                //   this.api.post('users/edit_profile', updateParam).subscribe((data: any) => {
                //     console.log('user info=>', data);
                //   }, error => {
                //     console.log(error);
                //   });
                // }
                // this.sendVerification(this.email, this.api.baseUrl + 'users/verify?uid=' + data.data.id);
                this.router.navigate(['/login']);
                // }
            }
            else if (data && data.status === 500) {
                this.util.errorToast(data.data.message);
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.loggedIn = false;
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
    // sendVerification(mail, link) {
    //   const param = {
    //     email: mail,
    //     url: link
    //   };
    //   this.api.post('users/sendVerificationMail', param).subscribe((data) => {
    //     console.log('mail', data);
    //   }, error => {
    //     console.log(error);
    //   });
    // }
    onCountryInput(events) {
        console.log(events.detail.value);
        if (events.value !== '') {
            this.countries = this.dummy.filter((item) => {
                return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.countries = [];
        }
    }
    selectedCC(item) {
        this.countries = [];
        console.log(item);
        this.cc = '+' + item.dialling_code + ' ' + item.country_name;
        this.ccCode = item.dialling_code;
    }
    open(type) {
        // https://initappz.com/groceryeeaagya/privacy.html
        // https://initappz.com/groceryeeaagya/eula.html
        if (type === 'eula') {
            this.iab.create('https://initappz.com/groceryeeaagya/eula.html');
        }
        else {
            this.iab.create('https://initappz.com/groceryeeaagya/privacy.html');
        }
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map