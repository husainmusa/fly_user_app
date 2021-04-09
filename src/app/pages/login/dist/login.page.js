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
exports.LoginPage = void 0;
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
var sweetalert2_1 = require("sweetalert2");
var environment_1 = require("../../../environments/environment");
var app_1 = require("firebase/app");
require("firebase/auth");
var LoginPage = /** @class */ (function () {
    function LoginPage(router, util, navCtrl, api, loadingController, alertController) {
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
        if (!app_1["default"].apps.length) {
            app_1["default"].initializeApp(environment_1.environment.firebase);
        }
        else {
            app_1["default"].app(); // if already initialized, use that one
        }
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.phoneNumberChange = function (event) {
        this.newPhoneNumber = event.target.value;
    };
    LoginPage.prototype.otpNumber = function (event) {
        this.newOtpNumber = event.target.value;
    };
    LoginPage.prototype.sendOTP = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, concatphone, orderParam;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.newPhoneNumber != '') {
                            if (this.newPhoneNumber.startsWith("0")) {
                                this.newPhoneNumber = this.newPhoneNumber.replace(/^0+/, '');
                            }
                            concatphone = "972" + this.newPhoneNumber;
                            this.phoneNumber = concatphone;
                            orderParam = {
                                phonenumber: concatphone
                            };
                            this.api.post("users/checkphone/", orderParam).subscribe(function (data) {
                                console.log("checkphone response", data);
                                console.log(data);
                                if (data && data.status === 200) {
                                    if (data && data.data[0] && data.data[0].type === 'user') {
                                        if (data.data[0].status === '1') {
                                            _this.userid = data.data[0].id;
                                            if ((localStorage.getItem("fuid") == "") || (typeof localStorage.getItem("fuid") === undefined)) {
                                                _this.getOTP();
                                                loading.dismiss();
                                            }
                                            else {
                                                var fuid = localStorage.getItem("fuid");
                                                if (fuid == _this.userid) {
                                                    localStorage.setItem('uid', _this.userid);
                                                    _this.navCtrl.navigateRoot(['']);
                                                    loading.dismiss();
                                                }
                                                else {
                                                    _this.getOTP();
                                                    loading.dismiss();
                                                }
                                            }
                                            _this.util.userInfo = data.data[0];
                                        }
                                        else {
                                            console.log('not valid');
                                            sweetalert2_1["default"].fire({
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
                                                }
                                                else {
                                                    _this.otpSent = false;
                                                    _this.router.navigate(['/login']);
                                                    loading.dismiss();
                                                }
                                            });
                                        }
                                    }
                                    else {
                                        _this.util.errorToast(_this.util.getString('Not valid user'));
                                        _this.email = '';
                                        _this.password = '';
                                        loading.dismiss();
                                    }
                                }
                                else if (data && data.status === 500) {
                                    _this.util.errorToast(data.data);
                                    loading.dismiss();
                                }
                                else {
                                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                                    loading.dismiss();
                                }
                            }, function (error) {
                                console.log(error);
                                _this.loggedIn = false;
                                _this.util.errorToast(_this.util.getString('Something went wrong'));
                                loading.dismiss();
                            });
                        }
                        else {
                            loading.dismiss();
                            this.presentAlert();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getOTP = function () {
        return __awaiter(this, void 0, void 0, function () {
            var concatphone, loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        concatphone = "+972 " + this.newPhoneNumber;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.recaptchaVerifier = new app_1["default"].auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
                        app_1["default"].auth().signInWithPhoneNumber(concatphone, this.recaptchaVerifier).then(function (data) {
                            _this.otpSent = true;
                            _this.otpconfirmationResult = data;
                            loading.dismiss();
                        })["catch"](function (err) {
                            console.log(err);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.verifyOTP = function () {
        return __awaiter(this, void 0, void 0, function () {
            var otpphone, loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        otpphone = this.newOtpNumber;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait...'
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (otpphone != '') {
                            this.otpconfirmationResult.confirm(otpphone).then(function (data) {
                                console.log(data);
                                if (data) {
                                    console.log("phone number before send", _this.phoneNumber);
                                    localStorage.setItem('uid', _this.userid);
                                    localStorage.setItem('fuid', _this.userid);
                                    var fcm = localStorage.getItem('fcm');
                                    if (fcm && fcm !== null && fcm !== 'null') {
                                        var updateParam = {
                                            id: _this.userid,
                                            fcm_token: fcm
                                        };
                                        _this.api.post('users/edit_profile', updateParam).subscribe(function (data) {
                                            console.log('user info=>', data);
                                        }, function (error) {
                                            console.log(error);
                                        });
                                    }
                                    var favParam = {
                                        id: _this.userid
                                    };
                                    _this.api.post('favourite/getByUid', favParam).subscribe(function (data) {
                                        console.log('fav data', data);
                                        if (data && data.status === 200 && data.data.length > 0) {
                                            _this.util.haveFav = true;
                                            try {
                                                _this.util.favIds = data.data[0].ids.split(',');
                                            }
                                            catch (error) {
                                                console.log('eroor', error);
                                            }
                                        }
                                        else {
                                            _this.util.haveFav = false;
                                        }
                                    }, function (error) {
                                        _this.util.haveFav = false;
                                        console.log('fav error', error);
                                    });
                                    _this.navCtrl.navigateRoot(['']);
                                    loading.dismiss();
                                }
                                // You can redirect to other protected route.
                            })["catch"](function (err) {
                                console.log(err);
                                loading.dismiss();
                                _this.otpErrorAlert();
                            });
                        }
                        else {
                            this.otpAlert();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
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
            _this.loggedIn = false;
            console.log(data);
            if (data && data.status === 200) {
                if (data && data.data && data.data.type === 'user') {
                    if (data.data.status === '1') {
                        localStorage.setItem('uid', data.data.id);
                        _this.util.userInfo = data.data;
                        var fcm = localStorage.getItem('fcm');
                        if (fcm && fcm !== null && fcm !== 'null') {
                            var updateParam = {
                                id: data.data.id,
                                fcm_token: fcm
                            };
                            _this.api.post('users/edit_profile', updateParam).subscribe(function (data) {
                                console.log('user info=>', data);
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        var favParam = {
                            id: data.data.id
                        };
                        _this.api.post('favourite/getByUid', favParam).subscribe(function (data) {
                            console.log('fav data', data);
                            if (data && data.status === 200 && data.data.length > 0) {
                                _this.util.haveFav = true;
                                try {
                                    _this.util.favIds = data.data[0].ids.split(',');
                                }
                                catch (error) {
                                    console.log('eroor', error);
                                }
                            }
                            else {
                                _this.util.haveFav = false;
                            }
                        }, function (error) {
                            _this.util.haveFav = false;
                            console.log('fav error', error);
                        });
                        _this.navCtrl.navigateRoot(['']);
                    }
                    else {
                        console.log('not valid');
                        sweetalert2_1["default"].fire({
                            title: _this.util.getString('Error'),
                            text: _this.util.getString('Your are blocked please contact administrator'),
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
                                        uid: data.data.id
                                    }
                                };
                                _this.router.navigate(['inbox'], inboxParam);
                            }
                        });
                    }
                }
                else {
                    _this.util.errorToast(_this.util.getString('Not valid user'));
                    _this.email = '';
                    _this.password = '';
                }
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
    LoginPage.prototype.resendOTP = function () {
        this.sendOTP();
    };
    LoginPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: 'Enter Your Number',
                            mode: 'ios',
                            buttons: [
                                {
                                    text: 'OK',
                                    role: 'ok',
                                    cssClass: 'primary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.otpAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: 'Enter the otp received in your given phone number',
                            mode: 'ios',
                            buttons: [
                                {
                                    text: 'OK',
                                    role: 'ok',
                                    cssClass: 'primary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.otpErrorAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            message: 'Enter a valid OTP',
                            mode: 'ios',
                            buttons: [
                                {
                                    text: 'OK',
                                    role: 'ok',
                                    cssClass: 'primary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.doLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, name, email, requestdata;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        name = document.getElementById("username").value;
                        email = document.getElementById("useremail").value;
                        requestdata = { 'phone': this.phoneNumber, 'name': name, 'email': email };
                        this.api.otplogin(requestdata).subscribe(function (response) {
                            if (response.msg == 'done') {
                                localStorage.setItem('user_id', response.user_id);
                                // this.events.publish('user_login', response.user_id);
                                loading.dismiss();
                                if (localStorage.getItem('cart_no')) {
                                    _this.navCtrl.navigateBack('cart');
                                }
                                else {
                                    _this.navCtrl.navigateRoot('home');
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        console.log('enter');
    };
    LoginPage.prototype.create = function () {
        this.router.navigate(['register']);
    };
    LoginPage.prototype.reset = function () {
        this.router.navigate(['reset-password']);
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
