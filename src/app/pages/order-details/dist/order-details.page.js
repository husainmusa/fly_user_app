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
exports.OrderDetailsPage = void 0;
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
var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(route, util, api, navCtrl, alertController, router, iab) {
        var _this = this;
        this.route = route;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.iab = iab;
        this.orderDetail = [];
        this.orders = [];
        this.status = [];
        this.driverInfo = [];
        this.stores = [];
        this.assigneeDriver = [];
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            if (data && data.id) {
                _this.id = data.id;
                _this.loaded = false;
                _this.getOrder();
            }
            else {
                _this.navCtrl.back();
            }
        });
    }
    OrderDetailsPage.prototype.back = function () {
        this.navCtrl.back();
    };
    OrderDetailsPage.prototype.getOrder = function () {
        var _this = this;
        var param = {
            id: this.id
        };
        this.api.post('orders/getById', param).subscribe(function (data) {
            console.log(data);
            _this.loaded = true;
            if (data && data.status === 200 && data.data.length > 0) {
                var info = data.data[0];
                console.log(info);
                _this.orderDetail = JSON.parse(info.notes);
                console.log('driver???? ======>', _this.orderDetail);
                var order_1 = JSON.parse(info.orders);
                console.log('order=====>>', order_1);
                var finalOrder_1 = [];
                if (info.assignee && info.assignee !== '') {
                    _this.assigneeDriver = JSON.parse(info.assignee);
                    console.log('ASSSIGNEE---->>>>', _this.assigneeDriver);
                }
                var ids = __spreadArrays(new Set(order_1.map(function (item) { return item.store_id; })));
                ids.forEach(function (element) {
                    var param = {
                        id: element,
                        order: []
                    };
                    finalOrder_1.push(param);
                });
                ids.forEach(function (element, index) {
                    order_1.forEach(function (cart) {
                        console.log('cart->>>???', cart);
                        if (cart.variations && cart.variations !== '' && typeof cart.variations === 'string') {
                            cart.variations = JSON.parse(cart.variations);
                            console.log(cart['variant']);
                            if (cart["variant"] === undefined) {
                                cart['variant'] = 0;
                            }
                        }
                        if (cart.store_id === element) {
                            finalOrder_1[index].order.push(cart);
                        }
                    });
                });
                console.log('final order', finalOrder_1);
                _this.orders = finalOrder_1;
                _this.status = JSON.parse(info.status);
                console.log('order status--------------------', _this.status);
                var status = _this.status.filter(function (x) { return x.status === 'created'; });
                if (status.length === _this.status.length) {
                    _this.canCancle = true;
                }
                else {
                    _this.canCancle = false;
                }
                var delivered = _this.status.filter(function (x) { return x.status === 'delivered'; });
                if (delivered.length === _this.status.length) {
                    _this.isDelivered = true;
                }
                else {
                    _this.isDelivered = false;
                }
                if (info.paid_method == "online") {
                    _this.cashPaid = "Paid";
                }
                else {
                    if (info.paid_method == "cod" && _this.isDelivered) {
                        _this.cashPaid = "Paid";
                    }
                    else if (info.paid_method == "cod" && !_this.isDelivered) {
                        _this.cashPaid = "Pending";
                    }
                }
                console.log("cashPaid", info.paid_method, _this.cashPaid);
                // if()
                _this.datetime = moment(info.date_time).format('dddd, MMMM Do YYYY');
                _this.payMethod = info.paid_method === 'cod' ? 'COD' : 'Easy Card';
                _this.orderAt = info.order_to;
                _this.driverId = info.driver_id;
                if (_this.driverId && _this.driverId !== '') {
                    var userinfo = {
                        id: _this.driverId
                    };
                    _this.api.post('drivers/getDriversData', userinfo).subscribe(function (data) {
                        console.log('driverid>', data);
                        if (data && data.status === 200 && data.data && data.data.length) {
                            // this.driverInfo = data.data;
                            data.data.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var orderParam;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    orderParam = {
                                        id: this.id
                                    };
                                    this.api.post('acceptedorders/getByOrderId', orderParam).subscribe(function (accepteddata) {
                                        if (accepteddata && accepteddata.status === 200 && accepteddata.data.length > 0) {
                                            accepteddata.data.forEach(function (acceptedElement) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    if (acceptedElement.driver_id == element.id) {
                                                        this.driverInfo = element;
                                                        console.log("yes", element);
                                                    }
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                        }
                                    });
                                    return [2 /*return*/];
                                });
                            }); });
                        }
                    }, function (error) {
                        console.log(error);
                    });
                }
                var stores = {
                    id: info.store_id
                };
                _this.api.post('stores/getStoresData', stores).subscribe(function (data) {
                    console.log('store=-============>>', data);
                    console.log('store=-============>>', data);
                    if (data && data.status === 200 && data.data.length) {
                        _this.stores = data.data;
                    }
                    else {
                        _this.util.showToast(_this.util.getString('No Stores Found'), 'danger', 'bottom');
                        _this.back();
                    }
                }, function (error) {
                    console.log('error', error);
                    _this.util.showToast(_this.util.getString('Something went wrong'), 'danger', 'bottom');
                });
                if (_this.orderAt === 'home') {
                    var address = JSON.parse(info.address);
                    console.log('---address', address);
                    if (address && address.address) {
                        _this.userLat = address.lat;
                        _this.userLng = address.lng;
                        _this.address = address.landmark + ' ' + address.house + ' ' + address.address + ' ' + address.pincode;
                    }
                }
            }
            else {
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.loaded = true;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    OrderDetailsPage.prototype.ngOnInit = function () {
    };
    OrderDetailsPage.prototype.call = function () {
        if (this.userInfo.mobile) {
            // window.open('tel:' + this.userInfo.mobile);
            this.iab.create('tel:' + this.userInfo.mobile, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Number not found'));
        }
    };
    OrderDetailsPage.prototype.email = function () {
        if (this.userInfo.email) {
            // window.open('mailto:' + this.userInfo.email);
            this.iab.create('mailto:' + this.userInfo.email, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Email not found'));
        }
    };
    OrderDetailsPage.prototype.callStore = function (item) {
        if (item) {
            // window.open('tel:' + item);
            this.iab.create('tel:' + item, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Number not found'));
        }
    };
    OrderDetailsPage.prototype.emailStore = function (item) {
        if (item) {
            // window.open('mailto:' + item);
            this.iab.create('mailto:' + item, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Email not found'));
        }
    };
    OrderDetailsPage.prototype.presentAlertConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: this.util.getString('How was your experience?'),
                            message: this.util.getString('Rate your experience with stores and driver'),
                            mode: 'ios',
                            buttons: [
                                {
                                    text: this.util.getString('Cancel'),
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: this.util.getString('Yes'),
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        // this.util.setOrders(this.orderData);
                                        var param = {
                                            queryParams: {
                                                id: _this.id
                                            }
                                        };
                                        _this.router.navigate(['order-rating'], param);
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
    OrderDetailsPage.prototype.changeStatus = function () {
        var _this = this;
        console.log('status');
        var newOrderNotes = {
            status: 1,
            value: this.util.getString('Order ') + this.util.getString('cancelled by you'),
            time: moment().format('lll')
        };
        this.orderDetail.push(newOrderNotes);
        this.status.forEach(function (element) {
            if (element.status === 'created') {
                element.status = 'cancelled';
            }
        });
        this.util.show();
        var param = {
            id: this.id,
            notes: JSON.stringify(this.orderDetail),
            status: JSON.stringify(this.status)
        };
        console.log('---->', this.status);
        this.api.post('orders/editList', param).subscribe(function (data) {
            console.log('order', data);
            _this.util.hide();
            if (_this.orderAt === 'home' && _this.driverId !== '0') {
                _this.updateDriver(_this.driverId, 'active');
            }
            if (data && data.status === 200) {
                _this.sendNotification('cancelled');
                _this.back();
            }
            else {
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.util.hide();
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    OrderDetailsPage.prototype.sendNotification = function (value) {
        if (this.userInfo && this.userInfo.fcm_token) {
            this.api.sendNotification(this.util.getString('Your order #') + this.id + ' ' + value, this.util.getString('Order')
                + ' ' + value, this.userInfo.fcm_token)
                .subscribe(function (data) {
                console.log('onesignal', data);
            }, function (error) {
                console.log('onesignal error', error);
            });
        }
    };
    OrderDetailsPage.prototype.updateDriver = function (uid, value) {
        var param = {
            id: uid,
            current: value
        };
        console.log('param', param);
        this.api.post('drivers/edit_profile', param).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    OrderDetailsPage.prototype.getStoreName = function (id) {
        var item = this.stores.filter(function (x) { return x.uid === id; });
        if (item && item.length) {
            return item[0].name;
        }
        return 'Store';
    };
    OrderDetailsPage.prototype.getOrderStatus = function (id) {
        var item = this.status.filter(function (x) { return x.id === id; });
        if (item && item.length) {
            return this.util.getString(item[0].status);
        }
        return 'created';
    };
    OrderDetailsPage.prototype.getOrderStatusFromDriver = function (id) {
        var item = this.assigneeDriver.filter(function (x) { return x.driver === id; });
        if (item && item.length) {
            return this.getOrderStatus(item[0].assignee);
        }
        return 'rejected';
    };
    OrderDetailsPage.prototype.contanct = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        return [4 /*yield*/, this.alertController.create({
                                header: this.util.getString('Contact') + ' ' + item.name,
                                inputs: [
                                    {
                                        name: 'mail',
                                        type: 'radio',
                                        label: this.util.getString('Email'),
                                        value: 'mail'
                                    },
                                    {
                                        name: 'call',
                                        type: 'radio',
                                        label: this.util.getString('Call'),
                                        value: 'call'
                                    },
                                    {
                                        name: 'msg',
                                        type: 'radio',
                                        label: this.util.getString('Message'),
                                        value: 'msg'
                                    },
                                ],
                                buttons: [
                                    {
                                        text: this.util.getString('Cancel'),
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: this.util.getString('Ok'),
                                        handler: function (data) {
                                            console.log('Confirm Ok', data);
                                            if (data && data === 'mail') {
                                                _this.emailStore(item.email);
                                            }
                                            else if (data && data === 'call') {
                                                _this.callStore(item.mobile);
                                            }
                                            else if (data && data === 'msg') {
                                                console.log('none');
                                                var param = {
                                                    queryParams: {
                                                        id: item.uid,
                                                        name: item.name,
                                                        uid: localStorage.getItem('uid')
                                                    }
                                                };
                                                _this.router.navigate(['inbox'], param);
                                            }
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
    OrderDetailsPage.prototype.contanctDriver = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        return [4 /*yield*/, this.alertController.create({
                                header: this.util.getString('Contact') + ' ' + item.first_name,
                                inputs: [
                                    {
                                        name: 'mail',
                                        type: 'radio',
                                        label: this.util.getString('Email'),
                                        value: 'mail'
                                    },
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
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: this.util.getString('Ok'),
                                        handler: function (data) {
                                            console.log('Confirm Ok', data);
                                            if (data && data === 'mail') {
                                                _this.emailStore(item.email);
                                            }
                                            else if (data && data === 'call') {
                                                _this.callStore(item.mobile);
                                            }
                                            else {
                                                console.log('none');
                                            }
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
    OrderDetailsPage.prototype.direction = function (item, type) {
        console.log(item, type);
        var navData = {
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
    };
    OrderDetailsPage = __decorate([
        core_1.Component({
            selector: 'app-order-details',
            templateUrl: './order-details.page.html',
            styleUrls: ['./order-details.page.scss']
        })
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());
exports.OrderDetailsPage = OrderDetailsPage;
