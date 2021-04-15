(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"t\"> {{util.getString('Profile')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"edit_flag = !edit_flag\" *ngIf=\"edit_flag\">\n        <ion-icon slot=\"icon-only\" name=\"pencil\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"update()\" *ngIf=\"!edit_flag\">\n        <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\">\n\n      <div class=\"info_div\">\n        <div class=\"user_img\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+cover+'),url(assets/imgs/user.png)'}\"\n          (click)=\"updateProfile()\">\n        </div>\n\n        <div class=\"name\">\n          <div class=\"image_div\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n          </div>\n          <div class=\"content_div\">\n            <span>{{util.getString('First name')}} &nbsp;- </span>\n            <ion-input type=\"text\" [disabled]=\"edit_flag\" [placeholder]=\"util.getString('First name')\"\n              [(ngModel)]=\"fname\">\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"name\">\n          <div class=\"image_div\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n          </div>\n          <div class=\"content_div\">\n            <span>{{util.getString('Last name')}} &nbsp;- </span>\n            <ion-input type=\"text\" [disabled]=\"edit_flag\" [placeholder]=\"util.getString('Last name')\"\n              [(ngModel)]=\"lname\">\n            </ion-input>\n          </div>\n        </div>\n\n        <!-- <div class=\"name\">\n          <div class=\"image_div\">\n            <ion-icon name=\"mail-outline\"></ion-icon>\n          </div>\n          <div class=\"content_div\">\n            <span>{{util.getString('Email')}} &nbsp;- </span>\n            <ion-input type=\"text\" [disabled]=\"true\" [placeholder]=\"util.getString('Email')\" [(ngModel)]=\"email\">\n            </ion-input>\n          </div>\n        </div> -->\n\n        <div class=\"name\">\n          <div class=\"image_div\">\n            <ion-icon name=\"call-outline\"></ion-icon>\n          </div>\n          <div class=\"content_div\">\n            <span>{{util.getString('Mobile')}} &nbsp;- </span>\n            <ion-input type=\"text\" [disabled]=\"true\" [placeholder]=\"util.getString('Mobile')\" [(ngModel)]=\"mobile\">\n            </ion-input>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");

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
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-button .img_search {\n  width: 12px;\n  margin-right: 10px;\n}\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  height: 60vh;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  height: 45px;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992AA;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454D62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFVSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBRENSO0FDR0E7RUFDSSxhQUFBO0FEQUo7QUNFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBREFSO0FDRUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURBUjtBQ0VJO0VBQ0ksa0JBQUE7RUFDQSxvREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FEQVI7QUNFUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBREFaO0FDRVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QURBWjtBQ0VRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEQVo7QUNFWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURBaEI7QUNFWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FEQWhCO0FDS0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FESFI7QUNLSTtFQUNJLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QURIUjtBQ0lRO0VBQ0ksV0FBQTtBREZaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tYnV0dG9uIC5pbWdfc2VhcmNoIHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA2MHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcl9pbWcge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5pY24ge1xuICBtYXgtd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmNvbnRlbnRfZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODk5MkFBO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmNvbnRlbnRfZGl2IGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM0NTRENjI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiAubG9nb3V0X2ljb24ge1xuICB3aWR0aDogMTJweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWJ1dHRvbntcbiAgICAuaW1nX3NlYXJjaHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIH1cbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAubWFpbl9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogNjB2aDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAudXNlcl9pbWd7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7ICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgLmljbntcbiAgICAgICAgICAgIG1heC13aWR0aDogMTVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50X2RpdntcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg5OTJBQTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ1NEQ2MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idG5fZGl2e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE1OSwgMjAxLCAxNjUsIDAuNSk7XG4gICAgICAgIC0tY29sb3ItYWN0aXZlZDogd2hpdGU7XG4gICAgICAgIC5sb2dvdXRfaWNvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





let ProfilePage = class ProfilePage {
    constructor(api, util, navCtrl, actionSheetController, camera) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.cover = '';
        this.edit_flag = true;
        console.log(localStorage.getItem('uid'));
        this.getProfile();
    }
    ngOnInit() {
    }
    getProfile() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.util.show();
        this.api.post('users/getById', param).subscribe((data) => {
            this.util.hide();
            console.log('user info=>', data);
            if (data && data.status === 200 && data.data && data.data.length) {
                const info = data.data[0];
                this.util.userInfo = info;
                this.fname = info.first_name;
                this.lname = info.last_name;
                this.mobile = info.mobile;
                this.gender = "";
                this.cover = info.cover;
                this.email = "";
            }
        }, error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    updateProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.util.getString('Choose from'),
                buttons: [{
                        text: this.util.getString('Camera'),
                        icon: 'camera',
                        handler: () => {
                            console.log('camera clicked');
                            this.upload('camera');
                        }
                    }, {
                        text: this.util.getString('Gallery'),
                        icon: 'images',
                        handler: () => {
                            console.log('gallery clicked');
                            this.upload('gallery');
                        }
                    }, {
                        text: this.util.getString('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    update() {
        if (!this.fname || this.fname === '' || !this.lname || this.lname === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
        }
        const param = {
            first_name: this.fname,
            last_name: this.lname,
            email: "",
            gender: "",
            cover: this.cover,
            mobile: this.mobile,
            id: localStorage.getItem('uid')
        };
        this.util.show(this.util.getString('updating...'));
        this.api.post('users/edit_profile', param).subscribe((data) => {
            this.util.hide();
            console.log(data);
            this.getProfile();
        }, error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    back() {
        this.navCtrl.back();
    }
    upload(type) {
        try {
            const options = {
                quality: 100,
                targetHeight: 800,
                targetWidth: 800,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then((url) => {
                console.log('url->', url);
                this.util.show('uploading');
                const alpha = {
                    img: url,
                    type: 'jpg'
                };
                console.log('parma==>', alpha);
                this.api.nativePost('users/upload_file', alpha).then((data) => {
                    this.util.hide();
                    console.log('data', JSON.parse(data.data));
                    const info = JSON.parse(data.data);
                    this.cover = info.data;
                    console.log('cover image', this.cover);
                    const param = {
                        cover: this.cover,
                        id: localStorage.getItem('uid')
                    };
                    this.util.show(this.util.getString('updating...'));
                    this.api.post('users/edit_profile', param).subscribe((update) => {
                        this.util.hide();
                        console.log(update);
                    }, error => {
                        this.util.hide();
                        console.log(error);
                        this.util.errorToast(this.util.getString('Something went wrong'));
                    });
                }, error => {
                    console.log(error);
                    this.util.hide();
                    this.util.errorToast(this.util.getString('Something went wrong'));
                }).catch(error => {
                    console.log(error);
                    this.util.hide();
                    this.util.errorToast(this.util.getString('Something went wrong'));
                });
            });
        }
        catch (error) {
            console.log('error', error);
            this.util.errorToast(this.util.getString('Something went wrong'));
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map