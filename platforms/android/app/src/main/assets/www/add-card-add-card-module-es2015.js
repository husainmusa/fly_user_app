(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-card-add-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Add New Card')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"inputType\">\n    <ion-input type=\"email\" [placeholder]=\"util.getString('Email address')\" [(ngModel)]=\"email\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"number\" [placeholder]=\"util.getString('Card Number')\" [(ngModel)]=\"cnumber\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"text\" [placeholder]=\"util.getString('Card Holder Name')\" [(ngModel)]=\"cname\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-input type=\"password\" [placeholder]=\"util.getString('CVC')\" [(ngModel)]=\"cvc\"></ion-input>\n  </div>\n  <div class=\"inputType\">\n    <ion-datetime [min]=\"minStartDate()\" [max]=\"getMaxDate()\" display-format=\"MM/YYYY\" [(ngModel)]=\"date\"\n      placeholder=\"MM/YYYY\">\n    </ion-datetime>\n  </div>\n\n  <ion-button expand=\"full\" color=\"primary\" class=\"btn_addcard\" (click)=\"addcard()\">{{util.getString('Add Card')}}\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add-card/add-card-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-card/add-card-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageRoutingModule", function() { return AddCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-card.page */ "./src/app/pages/add-card/add-card.page.ts");

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
        component: _add_card_page__WEBPACK_IMPORTED_MODULE_3__["AddCardPage"]
    }
];
let AddCardPageRoutingModule = class AddCardPageRoutingModule {
};
AddCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-card/add-card.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.module.ts ***!
  \***************************************************/
/*! exports provided: AddCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPageModule", function() { return AddCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-card-routing.module */ "./src/app/pages/add-card/add-card-routing.module.ts");
/* harmony import */ var _add_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-card.page */ "./src/app/pages/add-card/add-card.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let AddCardPageModule = class AddCardPageModule {
};
AddCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCardPageRoutingModule"]
        ],
        declarations: [_add_card_page__WEBPACK_IMPORTED_MODULE_6__["AddCardPage"]]
    })
], AddCardPageModule);



/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.inputType {\n  margin-bottom: 10px;\n  padding: 0px 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n}\nion-datetime {\n  --padding-start:0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhcmQvYWRkLWNhcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtY2FyZC9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxhZGQtY2FyZFxcYWRkLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9EQUFBO0FERUo7QUNDQTtFQUNJLG1CQUFBO0FERUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGQtY2FyZC9hZGQtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmlucHV0VHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIC0tcGFkZGluZy1zdGFydDowcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5pbnB1dFR5cGV7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOjBweCA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTsgIFxufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIC0tcGFkZGluZy1zdGFydDowcHg7XG59XG4uYnRuX2FkZGNhcmR7XG4gICAgXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/add-card/add-card.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/add-card/add-card.page.ts ***!
  \*************************************************/
/*! exports provided: AddCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardPage", function() { return AddCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





let AddCardPage = class AddCardPage {
    constructor(navCtrl, util, api) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.cnumber = '';
        this.cname = '';
        this.cvc = '';
        this.date = '';
        this.email = '';
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    addcard() {
        if (this.email === '' || this.cname === '' || this.cnumber === '' ||
            this.cvc === '' || this.date === '') {
            // this.util.showToast('All Fields are required', 'danger', 'bottom');
            this.util.showToast(this.util.getString('All Fields are required'), 'danger', 'bottom');
            return false;
        }
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (!(emailfilter.test(this.email))) {
            this.util.showToast(this.util.getString('Please enter valid email'), 'danger', 'bottom');
            return false;
        }
        const year = this.date.split('-')[0];
        const month = this.date.split('-')[1];
        const param = {
            'card[number]': this.cnumber,
            'card[exp_month]': month,
            'card[exp_year]': year,
            'card[cvc]': this.cvc
        };
        this.util.show();
        this.api.externalPost('https://api.stripe.com/v1/tokens', param, this.util.stripe).subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                // this.token = data.id;
                const customer = {
                    description: 'Customer for food app',
                    source: data.id,
                    email: this.email
                };
                this.api.externalPost('https://api.stripe.com/v1/customers', customer, this.util.stripe).subscribe((customer) => {
                    console.log(customer);
                    this.util.hide();
                    if (customer && customer.id) {
                        // this.cid = customer.id;
                        const cid = {
                            id: localStorage.getItem('uid'),
                            stripe_key: customer.id
                        };
                        this.updateUser(cid);
                    }
                }, error => {
                    this.util.hide();
                    console.log();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast(this.util.getString('Something went wrong'));
                });
            }
            else {
                this.util.hide();
            }
        }, (error) => {
            console.log(error);
            this.util.hide();
            console.log();
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    updateUser(param) {
        this.util.show(this.util.getString('updating...'));
        this.api.post('users/edit_profile', param).subscribe((data) => {
            this.util.hide();
            console.log(data);
            const getParam = {
                id: localStorage.getItem('uid')
            };
            this.api.post('users/getById', getParam).subscribe((data) => {
                console.log('user info=>', data);
                if (data && data.status === 200 && data.data && data.data.length) {
                    this.util.userInfo = data.data[0];
                    this.navCtrl.back();
                }
                else {
                    this.navCtrl.back();
                }
            }, error => {
                console.log(error);
            });
        }, error => {
            this.util.hide();
            console.log(error);
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    getMaxDate() {
        return moment__WEBPACK_IMPORTED_MODULE_5__().add('50', 'years').format('YYYY-MM-DD');
    }
    minStartDate() {
        return moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
    }
};
AddCardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
AddCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-card/add-card.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-card.page.scss */ "./src/app/pages/add-card/add-card.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
], AddCardPage);



/***/ })

}]);
//# sourceMappingURL=add-card-add-card-module-es2015.js.map