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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.DeliveryOptionsPage = void 0;
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
var time_component_1 = require("src/app/components/time/time.component");
var moment = require("moment");
var DeliveryOptionsPage = /** @class */ (function () {
    function DeliveryOptionsPage(navCtrl, api, util, cart, popoverController, router) {
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
        this.time = this.util.getString('Today - ') + moment().format('dddd, MMMM Do YYYY');
    }
    DeliveryOptionsPage.prototype.ngOnInit = function () {
    };
    DeliveryOptionsPage.prototype.back = function () {
        this.navCtrl.back();
    };
    DeliveryOptionsPage.prototype.getStoreList = function () {
        var _this = this;
        var info = __spreadArrays(new Set(this.cart.cart.map(function (item) { return item.store_id; })));
        console.log('store iddss==================>>', info);
        // test
        // info.push(10, 17);
        // test
        var param = {
            id: info.join()
        };
        this.api.post('stores/getStoresData', param).subscribe(function (data) {
            console.log(data);
            if (data && data.status === 200 && data.data.length) {
                _this.storeAddress = data.data;
                _this.cart.stores = _this.storeAddress;
            }
            else {
                _this.util.showToast(_this.util.getString('No Stores Found'), 'danger', 'bottom');
                _this.back();
            }
        }, function (error) {
            console.log('error', error);
            _this.util.showToast(_this.util.getString('Something went wrong'), 'danger', 'bottom');
        });
    };
    DeliveryOptionsPage.prototype.openTime = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: time_component_1.TimeComponent,
                            event: ev,
                            mode: 'ios'
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            console.log(data.data);
                            if (data.data) {
                                if (data.data === 'today') {
                                    _this.datetime = 'today';
                                    _this.time = _this.util.getString('Today - ') + moment().format('dddd, MMMM Do YYYY');
                                }
                                else {
                                    _this.datetime = 'tomorrow';
                                    _this.time = _this.util.getString('Tomorrow - ') + moment().add(1, 'days').format('dddd, MMMM Do YYYY');
                                }
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeliveryOptionsPage.prototype.payment = function () {
        this.cart.deliveryAt = this.deliveryOption;
        this.cart.datetime = this.datetime;
        localStorage.setItem('deliveryAt', this.cart.deliveryAt);
        localStorage.setItem('datetime', this.cart.datetime);
        if (this.deliveryOption === 'home') {
            console.log('address');
            var param = {
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
    };
    DeliveryOptionsPage = __decorate([
        core_1.Component({
            selector: 'app-delivery-options',
            templateUrl: './delivery-options.page.html',
            styleUrls: ['./delivery-options.page.scss']
        })
    ], DeliveryOptionsPage);
    return DeliveryOptionsPage;
}());
exports.DeliveryOptionsPage = DeliveryOptionsPage;
