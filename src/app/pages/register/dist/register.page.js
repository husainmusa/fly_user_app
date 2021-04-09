"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RegisterPage = void 0;
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
var core_1 = require("@angular/core");
var moment = require("moment");
var verify_page_1 = require("../verify/verify.page");
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, util, router, api, iab, modalCtrl) {
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
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.openModal = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: verify_page_1.VerifyPage,
                            componentProps: { code: this.ccCode, mobile: this.mobile, uid: userId }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            console.log(data);
                        });
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.phoneNumberChange = function (event) {
        this.mobile = event.target.value;
    };
    RegisterPage.prototype.login = function () {
        var _this = this;
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
        var param = {
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
            status: this.util.twillo === '1' ? 0 : 1,
            verified: 0,
            others: 1,
            date: moment().format('YYYY-MM-DD'),
            stripe_key: ''
        };
        console.log('param', param);
        this.loggedIn = true;
        this.api.post('users/registerMobileUser', param).subscribe(function (data) {
            _this.loggedIn = false;
            console.log(data);
            if (data && data.status === 200) {
                _this.util.userInfo = data.data;
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
                _this.router.navigate(['/login']);
                // }
            }
            else if (data && data.status === 500) {
                _this.util.errorToast(data.data.message);
            }
            else {
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.loggedIn = false;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    RegisterPage.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
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
    RegisterPage.prototype.onCountryInput = function (events) {
        console.log(events.detail.value);
        if (events.value !== '') {
            this.countries = this.dummy.filter(function (item) {
                return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.countries = [];
        }
    };
    RegisterPage.prototype.selectedCC = function (item) {
        this.countries = [];
        console.log(item);
        this.cc = '+' + item.dialling_code + ' ' + item.country_name;
        this.ccCode = item.dialling_code;
    };
    RegisterPage.prototype.open = function (type) {
        // https://initappz.com/groceryeeaagya/privacy.html
        // https://initappz.com/groceryeeaagya/eula.html
        if (type === 'eula') {
            this.iab.create('https://initappz.com/groceryeeaagya/eula.html');
        }
        else {
            this.iab.create('https://initappz.com/groceryeeaagya/privacy.html');
        }
    };
    RegisterPage = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss']
        })
    ], RegisterPage);
    return RegisterPage;
}());
exports.RegisterPage = RegisterPage;
