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
exports.AppComponent = void 0;
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
var environment_1 = require("src/environments/environment");
var moment = require("moment");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, navCtrl, oneSignal, api, util, cart, router, menuCtrl) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.oneSignal = oneSignal;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.appPages = [];
        this.priceFilter = {
            lower: 10,
            upper: 500
        };
        this.selectedIndex = 0;
        var uid = localStorage.getItem('uid');
        if ((uid == "") || (uid === null)) {
            this.util.isLoggedIn = false;
            console.log("not logged");
        }
        else {
            this.util.isLoggedIn = true;
            console.log("logged");
        }
        console.log("is logged in", this.util.isLoggedIn);
        this.initializeApp();
        this.menuCtrl.enable(false, 'menu1');
        console.log(moment().format('lll'));
    }
    AppComponent.prototype.ngOnInit = function () {
        var uid = localStorage.getItem('uid');
        if ((uid == "") || (uid === null)) {
            this.loggedIn = false;
            console.log("not logged");
        }
        else {
            this.loggedIn = true;
            console.log("logged");
        }
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#45C261');
            _this.splashScreen.hide();
            console.log('%c Copyright and Good Faith Purchasers © 2020-present initappz. ', 'background: #222; color: #bada55');
            _this.appPages = _this.util.appPage;
            var lng = localStorage.getItem('language');
            console.log("localstorage language", lng);
            if (!lng || lng === null) {
                _this.api.get('users/getDefaultSettings').subscribe(function (data) {
                    console.log('----------------- app setting', data);
                    if (data && data.status === 200 && data.data) {
                        var manage = data.data.manage;
                        var language = data.data.lang;
                        if (manage && manage.length > 0) {
                            if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                                _this.util.appClosed = true;
                                _this.util.appClosedMessage = manage[0].message;
                            }
                            else {
                                _this.util.appClosed = false;
                            }
                        }
                        else {
                            _this.util.appClosed = false;
                        }
                        if (language) {
                            _this.util.translations = language;
                            localStorage.setItem('language', data.data.file);
                            console.log("translations", _this.util.translations);
                            localStorage.setItem('language_id', data.data.langid);
                        }
                        if (data.data.lang_position) {
                            if (data.data.lang_position == "0") {
                                _this.util.direction = "rtl";
                                _this.util.cside = "left";
                            }
                            else {
                                _this.util.direction = "ltr";
                                _this.util.cside = "right";
                            }
                        }
                        var settings = data.data.settings;
                        if (settings && settings.length > 0) {
                            var info = settings[0];
                            // this.util.direction = info.appDirection;
                            // this.util.cside = info.currencySide;
                            _this.util.currecny = info.currencySymbol;
                            _this.util.logo = info.logo;
                            _this.util.twillo = info.twillo;
                            _this.util.delivery = info.delivery;
                            document.documentElement.dir = _this.util.direction;
                            console.log("utility direction", data.data.lang_position);
                        }
                        else {
                            _this.util.direction = 'ltr';
                            _this.util.cside = 'right';
                            _this.util.currecny = '$';
                            document.documentElement.dir = _this.util.direction;
                            console.log("utility direction", _this.util.direction);
                        }
                        var general = data.data.general;
                        console.log('generalllll============================>', general);
                        if (general && general.length > 0) {
                            var info = general[0];
                            _this.util.general = info;
                            _this.cart.minOrderPrice = parseFloat(info.min);
                            _this.cart.shipping = info.shipping;
                            _this.cart.shippingPrice = parseFloat(info.shippingPrice);
                            _this.cart.orderTax = parseFloat(info.tax);
                            _this.cart.freeShipping = parseFloat(info.free);
                        }
                    }
                }, function (error) {
                    console.log('default settings', error);
                });
            }
            else {
                var param = {
                    id: localStorage.getItem('language_id')
                };
                _this.api.post('users/getDefaultSettingsById', param).subscribe(function (data) {
                    console.log('----------------- app setting', data);
                    if (data && data.status === 200 && data.data) {
                        var manage = data.data.manage;
                        var language = data.data.lang;
                        if (manage && manage.length > 0) {
                            if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                                _this.util.appClosed = true;
                                _this.util.appClosedMessage = manage[0].message;
                            }
                            else {
                                _this.util.appClosed = false;
                            }
                        }
                        else {
                            _this.util.appClosed = false;
                        }
                        if (language) {
                            _this.util.translations = language;
                        }
                        var settings = data.data.settings;
                        if (settings && settings.length > 0) {
                            var info = settings[0];
                            console.log("language position", data.data.lang_position);
                            if (data.data.lang_position == "0") {
                                _this.util.direction = "rtl";
                            }
                            else {
                                _this.util.direction = "ltr";
                            }
                            _this.util.cside = info.currencySide;
                            _this.util.currecny = info.currencySymbol;
                            _this.util.logo = info.logo;
                            _this.util.twillo = info.twillo;
                            _this.util.delivery = info.delivery;
                            document.documentElement.dir = _this.util.direction;
                            console.log("utility direction", _this.util.direction);
                        }
                        else {
                            _this.util.direction = 'ltr';
                            _this.util.cside = 'right';
                            _this.util.currecny = '$';
                            document.documentElement.dir = _this.util.direction;
                            console.log("utility direction", _this.util.direction);
                        }
                        var general = data.data.general;
                        console.log('generalllll============================>', general);
                        if (general && general.length > 0) {
                            var info = general[0];
                            _this.util.general = info;
                            _this.cart.minOrderPrice = parseFloat(info.min);
                            _this.cart.shipping = info.shipping;
                            _this.cart.shippingPrice = parseFloat(info.shippingPrice);
                            _this.cart.orderTax = parseFloat(info.tax);
                            _this.cart.freeShipping = parseFloat(info.free);
                        }
                    }
                }, function (error) {
                    console.log('default settings by id', error);
                    _this.util.appClosed = false;
                    _this.util.direction = 'ltr';
                    _this.util.cside = 'right';
                    _this.util.currecny = '$';
                    document.documentElement.dir = _this.util.direction;
                    console.log("utility direction", _this.util.direction);
                });
            }
            if (_this.platform.is('cordova')) {
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.oneSignal.startInit(environment_1.environment.onesignal.appId, environment_1.environment.onesignal.googleProjectNumber)];
                            case 1:
                                _a.sent();
                                this.oneSignal.getIds().then(function (data) {
                                    localStorage.setItem('fcm', data.userId);
                                    var uid = localStorage.getItem('uid');
                                    if (uid && uid !== null && uid !== 'null') {
                                        var param = {
                                            id: uid,
                                            fcm_token: data.userId
                                        };
                                        _this.api.post('users/edit_profile', param).subscribe(function (data) {
                                            console.log('user info=>', data);
                                        }, function (error) {
                                            console.log(error);
                                        });
                                    }
                                });
                                return [4 /*yield*/, this.oneSignal.endInit()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }, 1000);
            }
            var uid = localStorage.getItem('uid');
            if (uid && uid !== null && uid !== 'null') {
                var param = {
                    id: uid
                };
                _this.api.post('users/getById', param).subscribe(function (data) {
                    console.log('user info=>', data);
                    if (data && data.status === 200 && data.data && data.data.length) {
                        _this.util.userInfo = data.data[0];
                    }
                    else {
                        localStorage.removeItem('uid');
                    }
                }, function (error) {
                    console.log(error);
                });
                _this.api.post('favourite/getByUid', param).subscribe(function (data) {
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
            }
            _this.platform.backButton.subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log('Back Button --------------->>>', this.router.url, 'ad', this.router.isActive('/tabs/', true));
                    if (this.router.url === '/tabs/categories' || this.router.url === '/tabs/cart' ||
                        this.router.url === '/tabs/orders' || this.router.url === '/tabs/account'
                        || this.router.url === '/login') {
                        console.log('can close');
                        this.navCtrl.navigateRoot(['/tabs/home']);
                    }
                    else if (this.router.url === '/tabs/home' || this.router.url === '/cities') {
                        navigator['app'].exitApp();
                    }
                    return [2 /*return*/];
                });
            }); });
        });
        console.log("utility direction", this.util.direction);
    };
    AppComponent.prototype.logout = function () {
        var fuid = localStorage.getItem("fuid");
        localStorage.clear();
        localStorage.setItem("fuid", fuid);
        this.navCtrl.navigateRoot(['/login']);
    };
    AppComponent.prototype.login = function () {
        this.navCtrl.navigateRoot(['/login']);
    };
    AppComponent.prototype.getTranslate = function (str) {
        return this.util.getString(str);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
