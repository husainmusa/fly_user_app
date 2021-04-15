function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\">\n    </div>\n    <div class=\"form_div\">\n      <div *ngIf=\"!otpSent && !otpVerified\">\n        <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n        <div id=\"recaptcha-container\" style=\"display: none;\"></div>\n        <ion-input type=\"number\" [placeholder]=\"util.getString('Phone Number')\" id=\"phoneNumber\" [(ngModel)]=\"phone\" (ionInput)=\"phoneNumberChange($event)\">\n          <ion-icon name=\"phone-portrait-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendOTP()\">\n          <span *ngIf=\"!loggedIn\"> {{util.getString('Login')}} </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n      <div *ngIf=\"otpSent && !otpVerified\">\n        <ion-input type=\"number\" [placeholder]=\"util.getString('Enter OTP')\" [(ngModel)]=\"password\" (ionInput)=\"otpNumber($event)\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"verifyOTP()\">\n          <span *ngIf=\"!loggedIn\"> {{util.getString('Verify OTP')}} </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n        <!-- <ion-text (click)=\"resendOTP()\" class=\"resendotp\">Resend OTP</ion-text> -->\n      </div>\n      <!-- <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\"> {{util.getString('Forgot Password ?')}}\n      </ion-label> -->\n      <!-- <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"login()\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button> -->\n\n      <ion-label class=\"lbl\" (click)=\"create()\"> {{util.getString(\"Don't have an account ?\")}} <span\n          class=\"signup_span\"> {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
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
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 120px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.resendotp {\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0Usc0NBQUE7QURFRjtBQ0NBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QURFRjtBQ0FFO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBREVKO0FDQUU7RUFFRSxrQkFBQTtBRENKO0FDQUk7RUFFRSxZQUFBO0FEQ047QUNFRTtFQUNFLGFBQUE7RUFFQSxrQkFBQTtBRERKO0FDRUk7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURETjtBQ0dJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QURETjtBQ0lJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBREZOO0FDSUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FERk47QUNLSTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QURITjtBQ0tJO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURITjtBQ0tJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FESE47QUNLSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURITjtBQ1NBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRE5GIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmljb25EaXYgLmljb24ge1xuICB3aWR0aDogMTIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYge1xuICBwYWRkaW5nOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLm1haW5faGVhZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5mb3Jnb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC50cmkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5sYmwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLnNpZ251cF9zcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZXNlbmRvdHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmljb25EaXYge1xuICAgIC8vIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5pY29uIHtcbiAgICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICB9XG4gIH1cbiAgLmZvcm1fZGl2IHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5tYWluX2hlYWQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAvLyB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZm9yZ290IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgIH1cbiAgICAudHJpIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTE1cHg7XG4gICAgfVxuICAgIC5sYmwge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuc2lnbnVwX3NwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuXG4ucmVzZW5kb3Rwe1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, util, navCtrl, api, loadingController, alertController) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.email = '';
        this.password = '';
        this.otpSent = false;
        this.otpVerified = false;
        this.phoneNumber = "";
        this.newPhoneNumber = "";
        this.selectedCountry = "";
        this.phoneNumberExist = false;

        if (!firebase_app__WEBPACK_IMPORTED_MODULE_8__["default"].apps.length) {
          firebase_app__WEBPACK_IMPORTED_MODULE_8__["default"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase);
        } else {
          firebase_app__WEBPACK_IMPORTED_MODULE_8__["default"].app(); // if already initialized, use that one
        }
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "phoneNumberChange",
        value: function phoneNumberChange(event) {
          this.newPhoneNumber = event.target.value;
        }
      }, {
        key: "otpNumber",
        value: function otpNumber(event) {
          this.newOtpNumber = event.target.value;
        }
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading, concatphone, orderParam;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    if (this.newPhoneNumber != '') {
                      if (this.newPhoneNumber.startsWith("0")) {
                        this.newPhoneNumber = this.newPhoneNumber.replace(/^0+/, '');
                      }

                      concatphone = "972" + this.newPhoneNumber; //  let concatphone = "91" + this.newPhoneNumber;

                      this.phoneNumber = concatphone;
                      orderParam = {
                        phonenumber: concatphone
                      };
                      this.api.post("users/checkphone", orderParam).subscribe(function (data) {
                        console.log("checkphone response", data);
                        console.log(data);

                        if (data && data.status === 200) {
                          if (data && data.data[0] && data.data[0].type === 'user') {
                            if (data.data[0].status === '1') {
                              _this.userid = data.data[0].id;

                              if (localStorage.getItem("fuid") == "" || typeof localStorage.getItem("fuid") === undefined) {
                                _this.getOTP();

                                loading.dismiss();
                              } else {
                                var fuid = localStorage.getItem("fuid");

                                if (fuid == _this.userid) {
                                  localStorage.setItem('uid', _this.userid);

                                  _this.navCtrl.navigateRoot(['']);

                                  loading.dismiss();
                                } else {
                                  _this.getOTP();

                                  loading.dismiss();
                                }
                              }

                              _this.util.userInfo = data.data[0];
                            } else {
                              console.log('not valid');
                              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                title: _this.util.getString('Error'),
                                text: _this.util.getString('please wait for admin to activate your account'),
                                icon: 'error',
                                showConfirmButton: true,
                                showCancelButton: true,
                                confirmButtonText: _this.util.getString('Need Help?'),
                                backdrop: false,
                                background: 'white'
                              }).then(function (status) {
                                if (status && status.value) {
                                  // localStorage.setItem('helpId', data.data.id);
                                  // this.router.navigate(['inbox']);
                                  var inboxParam = {
                                    queryParams: {
                                      id: 0,
                                      name: 'Support',
                                      uid: data.data[0].id
                                    }
                                  };

                                  _this.router.navigate(['inbox'], inboxParam);

                                  loading.dismiss();
                                } else {
                                  _this.otpSent = false;

                                  _this.router.navigate(['/login']);

                                  loading.dismiss();
                                }
                              });
                            }
                          } else {
                            _this.util.errorToast(_this.util.getString('Not valid user'));

                            _this.email = '';
                            _this.password = '';
                            loading.dismiss();
                          }
                        } else if (data && data.status === 500) {
                          _this.util.errorToast(data.data);

                          loading.dismiss();
                        } else {
                          _this.util.errorToast(_this.util.getString('Something went wrong'));

                          loading.dismiss();
                        }
                      }, function (error) {
                        console.log('========>', error);
                        _this.loggedIn = false;

                        _this.util.errorToast(_this.util.getString('Something went wrong'));

                        loading.dismiss();
                      });
                    } else {
                      loading.dismiss();
                      this.presentAlert();
                    }

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getOTP",
        value: function getOTP() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var concatphone, loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    concatphone = "+972 " + this.newPhoneNumber; // let concatphone = "+91" + this.newPhoneNumber;

                    _context2.next = 3;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 3:
                    loading = _context2.sent;
                    _context2.next = 6;
                    return loading.present();

                  case 6:
                    this.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_8__["default"].auth.RecaptchaVerifier('recaptcha-container', {
                      'size': 'invisible'
                    });
                    firebase_app__WEBPACK_IMPORTED_MODULE_8__["default"].auth().signInWithPhoneNumber(concatphone, this.recaptchaVerifier).then(function (data) {
                      _this2.otpSent = true;
                      _this2.otpconfirmationResult = data;
                      loading.dismiss();
                    })["catch"](function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var otpphone, loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    otpphone = this.newOtpNumber;
                    _context3.next = 3;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 3:
                    loading = _context3.sent;
                    _context3.next = 6;
                    return loading.present();

                  case 6:
                    if (otpphone != '') {
                      this.otpconfirmationResult.confirm(otpphone).then(function (data) {
                        console.log(data);

                        if (data) {
                          console.log("phone number before send", _this3.phoneNumber);
                          localStorage.setItem('uid', _this3.userid);
                          localStorage.setItem('fuid', _this3.userid);
                          var fcm = localStorage.getItem('fcm');

                          if (fcm && fcm !== null && fcm !== 'null') {
                            var updateParam = {
                              id: _this3.userid,
                              fcm_token: fcm
                            };

                            _this3.api.post('users/edit_profile', updateParam).subscribe(function (data) {
                              console.log('user info=>', data);
                            }, function (error) {
                              console.log(error);
                            });
                          }

                          var favParam = {
                            id: _this3.userid
                          };

                          _this3.api.post('favourite/getByUid', favParam).subscribe(function (data) {
                            console.log('fav data', data);

                            if (data && data.status === 200 && data.data.length > 0) {
                              _this3.util.haveFav = true;

                              try {
                                _this3.util.favIds = data.data[0].ids.split(',');
                              } catch (error) {
                                console.log('eroor', error);
                              }
                            } else {
                              _this3.util.haveFav = false;
                            }
                          }, function (error) {
                            _this3.util.haveFav = false;
                            console.log('fav error', error);
                          });

                          _this3.navCtrl.navigateRoot(['']);

                          loading.dismiss();
                        } // You can redirect to other protected route.

                      })["catch"](function (err) {
                        console.log(err);
                        loading.dismiss();

                        _this3.otpErrorAlert();
                      });
                    } else {
                      this.otpAlert();
                    }

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "login",
        value: function login() {
          var _this4 = this;

          console.log('login');

          if (!this.email || !this.password) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
          }

          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
            return false;
          }

          this.loggedIn = true;
          var param = {
            email: this.email,
            password: this.password
          };
          this.api.post('users/login', param).subscribe(function (data) {
            _this4.loggedIn = false;
            console.log(data);

            if (data && data.status === 200) {
              if (data && data.data && data.data.type === 'user') {
                if (data.data.status === '1') {
                  localStorage.setItem('uid', data.data.id);
                  _this4.util.userInfo = data.data;
                  var fcm = localStorage.getItem('fcm');

                  if (fcm && fcm !== null && fcm !== 'null') {
                    var updateParam = {
                      id: data.data.id,
                      fcm_token: fcm
                    };

                    _this4.api.post('users/edit_profile', updateParam).subscribe(function (data) {
                      console.log('user info=>', data);
                    }, function (error) {
                      console.log(error);
                    });
                  }

                  var favParam = {
                    id: data.data.id
                  };

                  _this4.api.post('favourite/getByUid', favParam).subscribe(function (data) {
                    console.log('fav data', data);

                    if (data && data.status === 200 && data.data.length > 0) {
                      _this4.util.haveFav = true;

                      try {
                        _this4.util.favIds = data.data[0].ids.split(',');
                      } catch (error) {
                        console.log('eroor', error);
                      }
                    } else {
                      _this4.util.haveFav = false;
                    }
                  }, function (error) {
                    _this4.util.haveFav = false;
                    console.log('fav error', error);
                  });

                  _this4.navCtrl.navigateRoot(['']);
                } else {
                  console.log('not valid');
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: _this4.util.getString('Error'),
                    text: _this4.util.getString('Your are blocked please contact administrator'),
                    icon: 'error',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: _this4.util.getString('Need Help?'),
                    backdrop: false,
                    background: 'white'
                  }).then(function (status) {
                    if (status && status.value) {
                      // localStorage.setItem('helpId', data.data.id);
                      // this.router.navigate(['inbox']);
                      var inboxParam = {
                        queryParams: {
                          id: 0,
                          name: 'Support',
                          uid: data.data.id
                        }
                      };

                      _this4.router.navigate(['inbox'], inboxParam);
                    }
                  });
                }
              } else {
                _this4.util.errorToast(_this4.util.getString('Not valid user'));

                _this4.email = '';
                _this4.password = '';
              }
            } else if (data && data.status === 500) {
              _this4.util.errorToast(data.data.message);
            } else {
              _this4.util.errorToast(_this4.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this4.loggedIn = false;

            _this4.util.errorToast(_this4.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "resendOTP",
        value: function resendOTP() {
          this.sendOTP();
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: 'Enter Your Number',
                      mode: 'ios',
                      buttons: [{
                        text: 'OK',
                        role: 'ok',
                        cssClass: 'primary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "otpAlert",
        value: function otpAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: 'Enter the otp received in your given phone number',
                      mode: 'ios',
                      buttons: [{
                        text: 'OK',
                        role: 'ok',
                        cssClass: 'primary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "otpErrorAlert",
        value: function otpErrorAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: 'Enter a valid OTP',
                      mode: 'ios',
                      buttons: [{
                        text: 'OK',
                        role: 'ok',
                        cssClass: 'primary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }]
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "doLogin",
        value: function doLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this5 = this;

            var loading, name, email, requestdata;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 2:
                    loading = _context7.sent;
                    _context7.next = 5;
                    return loading.present();

                  case 5:
                    name = document.getElementById("username").value;
                    email = document.getElementById("useremail").value;
                    requestdata = {
                      'phone': this.phoneNumber,
                      'name': name,
                      'email': email
                    };
                    this.api.otplogin(requestdata).subscribe(function (response) {
                      if (response.msg == 'done') {
                        localStorage.setItem('user_id', response.user_id); // this.events.publish('user_login', response.user_id);

                        loading.dismiss();

                        if (localStorage.getItem('cart_no')) {
                          _this5.navCtrl.navigateBack('cart');
                        } else {
                          _this5.navCtrl.navigateRoot('home');
                        }
                      }
                    });

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log('enter');
        }
      }, {
        key: "create",
        value: function create() {
          this.router.navigate(['register']);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.router.navigate(['reset-password']);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map