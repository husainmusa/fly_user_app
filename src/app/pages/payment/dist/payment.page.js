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
exports.PaymentPage = void 0;
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
var PaymentPage = /** @class */ (function () {
    function PaymentPage(router, navCtrl, cart, util, api, iab, route, zone) {
        var _this = this;
        this.router = router;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.util = util;
        this.api = api;
        this.iab = iab;
        this.route = route;
        this.zone = zone;
        this.navigateToSuccess = 0;
        this.instamojo = {
            key: '',
            token: '',
            code: ''
        };
        this.paystack = {
            pk: '',
            sk: '',
            code: ''
        };
        this.flutterwave = {
            pk: '',
            code: ''
        };
        this.currencyValue = "";
        this.allDriversId = [];
        this.allDrivers = [];
        this.allDriversIdString = "";
        this.orderStatus = 1;
        this.orderStatusURL = "";
        console.log('delivery at', this.cart.deliveryAt);
        console.log("cart details", this.cart);
        localStorage.setItem('deliveryAddress', JSON.stringify(this.cart.deliveryAddress));
        var param = {
            id: localStorage.getItem('city')
        };
        this.api.post('drivers/geyByCity', param).subscribe(function (data) {
            _this.allDrivers = data.data;
            console.log(_this.allDrivers, "all drivers");
            var alldid = [];
            for (var i = 0; i < _this.allDrivers.length; i++) {
                alldid.push(_this.allDrivers[i].id);
            }
            _this.allDriversId = alldid.join(",");
            console.log(_this.allDriversId, "all drivers return");
        });
        if (this.cart.util.currecny == '₪') {
            this.currencyValue = 1;
        }
        else if (this.cart.util.currecny == '$') {
            this.currencyValue = 2;
        }
        else if (this.cart.util.currecny == '€') {
            this.currencyValue = 5;
        }
        console.log("currencyvalue", this.cart.util.currecny);
        console.log("localStorageAddress", localStorage.getItem('deliveryAddress'));
        // const url= 'https://secure.e-c.co.il/easycard/createform.asp?RedirectToken=ecee3392-2939-4a46-b40e-c5b080b44fb5&Sum='+this.cart.totalPrice+'&MType='+this.currencyValue+'&returnURLTrue=http://localhost:8100/success&returnURLFalse=http://localhost:8100/success';
        var url = 'https://secure.e-c.co.il/easycard/createform.asp?RedirectToken=ecee3392-2939-4a46-b40e-c5b080b44fb5&Sum=' + this.cart.totalPrice + '&MType=' + this.currencyValue + '&returnURLTrue=http://localhost:8100/success&returnURLFalse=http://localhost:8100/success';
        console.log("thisurl", url);
        this.util.getCouponObservable().subscribe(function (data) {
            console.log(data);
            _this.cart.calcuate();
            console.log(_this.cart.discount);
        }, function (error) {
            console.log(error);
        });
        this.getPayments();
    }
    PaymentPage.prototype.getPayments = function () {
        var _this = this;
        this.util.show();
        this.api.get('payments').subscribe(function (data) {
            console.log(data);
            _this.util.hide();
            if (data && data.status === 200 && data.data) {
                var info = data.data.filter(function (x) { return x.status === '1'; });
                console.log('total payments', info);
                if (info && info.length > 0) {
                    console.log('---->>', info);
                    _this.havePayment = true;
                    var stripe = info.filter(function (x) { return x.id === '1'; });
                    _this.haveStripe = stripe && stripe.length > 0 ? true : false;
                    var cod = info.filter(function (x) { return x.id === '2'; });
                    _this.haveCOD = cod && cod.length > 0 ? true : false;
                    var payPal = info.filter(function (x) { return x.id === '3'; });
                    _this.havePayPal = payPal && payPal.length > 0 ? true : false;
                    var razor = info.filter(function (x) { return x.id === '4'; });
                    _this.haveRazor = razor && razor.length > 0 ? true : false;
                    var paytm = info.filter(function (x) { return x.id === '5'; });
                    _this.havePayTM = paytm && paytm.length > 0 ? true : false;
                    var insta = info.filter(function (x) { return x.id === '6'; });
                    _this.haveInstamojo = insta && insta.length > 0 ? true : false;
                    var paystack = info.filter(function (x) { return x.id === '7'; });
                    _this.havepayStack = paystack && paystack.length > 0 ? true : false;
                    var flutterwave = info.filter(function (x) { return x.id === '8'; });
                    _this.haveflutterwave = flutterwave && flutterwave.length > 0 ? true : false;
                    if (_this.haveStripe) {
                        // this.util.stripe = stripe;
                        if (stripe) {
                            var creds = JSON.parse(stripe[0].creds);
                            if (stripe[0].env === '1') {
                                _this.util.stripe = creds.live;
                            }
                            else {
                                _this.util.stripe = creds.test;
                            }
                            _this.util.stripeCode = creds && creds.code ? creds.code : 'USD';
                        }
                        console.log('============>>', _this.util.stripe);
                    }
                    if (_this.haveInstamojo) {
                        var datas = info.filter(function (x) { return x.id === '6'; });
                        _this.instaENV = datas[0].env;
                        if (insta) {
                            var instaPay = JSON.parse(datas[0].creds);
                            _this.instamojo = instaPay;
                            console.log('instaMOJO', _this.instamojo);
                        }
                    }
                    if (_this.haveRazor) {
                        var razorPay = info.filter(function (x) { return x.id === '4'; });
                        var env = razorPay[0].env;
                        if (razorPay) {
                            var keys = JSON.parse(razorPay[0].creds);
                            console.log('evnof razor pay', env);
                            _this.razorKey = env === '0' ? keys.test : keys.live;
                            console.log('----------', _this.razorKey);
                        }
                    }
                    if (_this.havepayStack) {
                        var keys = JSON.parse(paystack[0].creds);
                        _this.paystack = keys;
                        console.log('paystack variables', _this.paystack);
                    }
                    if (_this.haveflutterwave) {
                        var keys = JSON.parse(flutterwave[0].creds);
                        _this.flutterwave = keys;
                        console.log('flutterwave config', _this.flutterwave);
                    }
                }
                else {
                    _this.havePayment = false;
                    _this.util.showToast(_this.util.getString('No Payment Found'), 'danger', 'bottom');
                }
            }
            else {
                _this.havePayment = false;
                _this.util.showToast(_this.util.getString('No Payment Found'), 'danger', 'bottom');
            }
        }, function (error) {
            console.log(error);
            _this.util.hide();
            _this.havePayment = false;
            _this.util.showToast(_this.util.getString('Something went wrong'), 'danger', 'bottom');
        });
    };
    PaymentPage.prototype.ngOnInit = function () {
    };
    PaymentPage.prototype.proceed = function () {
        var _this = this;
        // this.util.errorToast('ongoing');
        var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        var param = {
            key: this.razorKey,
            amount: this.cart.grandTotal ? this.cart.grandTotal * 100 : 5,
            email: this.getEmail(),
            logo: this.api.mediaURL + this.util.logo
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        var url = this.api.baseUrl + 'razorpay?' + this.api.JSON_to_URLEncoded(param);
        var browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;
            if (navUrl.includes('success')) {
                console.log('close');
                browser.close();
                var urlItems = new URL(event.url);
                var orderId = urlItems.searchParams.get('id');
                _this.makeOrder('razorpay', orderId);
            }
        });
    };
    PaymentPage.prototype.easypay = function () {
        var _this = this;
        localStorage.setItem('driverid', this.allDriversId);
        var url = 'https://secure.e-c.co.il/easycard/createform.asp?RedirectToken=ecee3392-2939-4a46-b40e-c5b080b44fb5&Sum=' + this.cart.totalPrice + '&MType=' + this.currencyValue + '&returnURLTrue=https://success';
        // window.open(url, '_self');
        var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'no',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        var browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;
            _this.orderStatusURL = navUrl;
            if (navUrl.includes('success')) {
                browser.close();
                if (navUrl.includes('Code=000') || navUrl.includes('Code=00') || navUrl.includes('Code=0')) {
                    _this.orderStatus = 0;
                    _this.navigateToSuccess = 1;
                    console.log("orderstatus", _this.orderStatus);
                }
                else {
                    _this.navigateToSuccess = 1;
                    console.log("orderstatus", _this.orderStatus);
                }
            }
            if (_this.navigateToSuccess == 1) {
                _this.zone.run(function () { return _this.router.navigate(['/success'], {
                    queryParams: { "orderstatus": _this.orderStatus }
                }); });
            }
        });
    };
    PaymentPage.prototype.cardInfo = function (val) {
    };
    PaymentPage.prototype.openStripe = function () {
        this.router.navigate(['tabs/cart/stripe-payments']);
    };
    PaymentPage.prototype.goToSucess = function () {
        this.router.navigate(['/success']);
    };
    PaymentPage.prototype.back = function () {
        this.navCtrl.back();
    };
    PaymentPage.prototype.openCoupon = function () {
        this.router.navigate(['offers']);
    };
    PaymentPage.prototype.createOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storeId, orderStatus, notes, param;
            var _this = this;
            return __generator(this, function (_a) {
                storeId = __spreadArrays(new Set(this.cart.cart.map(function (item) { return item.store_id; })));
                orderStatus = [];
                storeId.forEach(function (element) {
                    var info = {
                        id: element,
                        status: 'created'
                    };
                    orderStatus.push(info);
                });
                notes = [
                    {
                        status: 1,
                        value: 'Order Created',
                        time: moment().format('lll')
                    }
                ];
                param = {
                    uid: localStorage.getItem('uid'),
                    store_id: storeId.join(),
                    date_time: this.cart.datetime === 'today' ? moment().format('YYYY-MM-DD HH:mm:ss') : moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                    paid_method: 'cod',
                    order_to: this.cart.deliveryAt,
                    orders: JSON.stringify(this.cart.cart),
                    notes: JSON.stringify(notes),
                    address: this.cart.deliveryAt === 'home' ? JSON.stringify(this.cart.deliveryAddress) : '',
                    driver_id: this.cart.deliveryAt === 'home' ? this.allDriversId : '',
                    total: this.cart.totalPrice,
                    tax: this.cart.orderTax,
                    grand_total: this.cart.grandTotal,
                    delivery_charge: this.cart.deliveryPrice,
                    coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
                    discount: this.cart.discount,
                    pay_key: '',
                    status: JSON.stringify(orderStatus),
                    assignee: ''
                };
                console.log('param----->', param);
                this.util.show();
                this.api.post('orders/save', param).subscribe(function (data) {
                    console.log(data);
                    _this.util.hide();
                    _this.api.createOrderNotification(_this.cart.stores);
                    _this.cart.clearCart();
                    _this.util.publishNewOrder();
                    _this.navCtrl.navigateRoot(['/tabs/orders'], { replaceUrl: true, skipLocationChange: true });
                }, function (error) {
                    console.log(error);
                    _this.util.hide();
                    _this.util.showToast(_this.util.getString('Something went wrong'), 'danger', 'bottom');
                });
                return [2 /*return*/];
            });
        });
    };
    PaymentPage.prototype.makeOrder = function (method, key) {
        return __awaiter(this, void 0, void 0, function () {
            var storeId, orderStatus, notes, param;
            var _this = this;
            return __generator(this, function (_a) {
                storeId = __spreadArrays(new Set(this.cart.cart.map(function (item) { return item.store_id; })));
                orderStatus = [];
                storeId.forEach(function (element) {
                    var info = {
                        id: element,
                        status: 'created'
                    };
                    orderStatus.push(info);
                });
                notes = [
                    {
                        status: 1,
                        value: 'Order Created',
                        time: moment().format('lll')
                    }
                ];
                param = {
                    uid: localStorage.getItem('uid'),
                    store_id: storeId.join(),
                    date_time: this.cart.datetime === 'today' ? moment().format('YYYY-MM-DD HH:mm:ss') : moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                    paid_method: method,
                    order_to: this.cart.deliveryAt,
                    orders: JSON.stringify(this.cart.cart),
                    notes: JSON.stringify(notes),
                    address: this.cart.deliveryAt === 'home' ? JSON.stringify(this.cart.deliveryAddress) : '',
                    driver_id: '',
                    total: this.cart.totalPrice,
                    tax: this.cart.orderTax,
                    grand_total: this.cart.grandTotal,
                    delivery_charge: this.cart.deliveryPrice,
                    coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
                    discount: this.cart.discount,
                    pay_key: key,
                    status: JSON.stringify(orderStatus),
                    assignee: ''
                };
                console.log('param----->', param);
                this.util.show();
                this.api.post('orders/save', param).subscribe(function (data) {
                    console.log(data);
                    _this.util.hide();
                    _this.api.createOrderNotification(_this.cart.stores);
                    _this.cart.clearCart();
                    _this.util.publishNewOrder();
                    _this.navCtrl.navigateRoot(['/tabs/orders'], { replaceUrl: true, skipLocationChange: true });
                }, function (error) {
                    console.log(error);
                    _this.util.hide();
                    _this.util.showToast(_this.util.getString('Something went wrong'), 'danger', 'bottom');
                });
                return [2 /*return*/];
            });
        });
    };
    PaymentPage.prototype.paypalPayment = function () {
        var _this = this;
        var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        var param = {
            uid: localStorage.getItem('uid'),
            itemName: 'groceryee',
            grandTotal: this.cart.grandTotal,
            dateTime: moment().format('YYYY-MM-DD HH:mm'),
            logo: this.api.mediaURL + this.util.logo
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        var url = this.api.baseUrl + 'paypal/buyProduct?' + this.api.JSON_to_URLEncoded(param);
        var browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;
            if (navUrl.includes('success') || navUrl.includes('checkout/done')) {
                console.log('close');
                browser.close();
                _this.makeOrder('paypal', 'fromApp');
            }
        });
    };
    PaymentPage.prototype.flutterpay = function () {
        var _this = this;
        var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        var param = {
            key: this.flutterwave.pk,
            amount: this.cart.grandTotal,
            email: this.getEmail(),
            phone: this.util.userInfo.mobile,
            name: this.getName(),
            code: this.flutterwave.code,
            logo: this.api.mediaURL + this.util.logo
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        var url = this.api.baseUrl + 'flutterwave?' + this.api.JSON_to_URLEncoded(param);
        var browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;
            if (navUrl.includes('success') || navUrl.includes('closed')) {
                console.log('close');
                browser.close();
                if (navUrl.includes('success')) {
                    var urlItems = new URL(event.url);
                    var orderId = urlItems.searchParams.get('transaction_id');
                    _this.makeOrder('flutterwave', orderId);
                }
            }
        });
    };
    PaymentPage.prototype.paystackPay = function () {
        var _this = this;
        var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        var paykey = '' + Math.floor((Math.random() * 1000000000) + 1);
        var param = {
            key: this.paystack.pk,
            email: this.util.userInfo.email,
            amount: this.cart.grandTotal * 100,
            firstname: this.util.userInfo.first_name,
            lastname: this.util.userInfo.last_name,
            ref: paykey
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        var url = this.api.baseUrl + 'paystack?' + this.api.JSON_to_URLEncoded(param);
        var browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;
            if (navUrl.includes('success') || navUrl.includes('close')) {
                console.log('close');
                browser.close();
                if (navUrl.includes('success')) {
                    console.log('closed---->>>>>');
                    _this.makeOrder('paystack', paykey);
                }
                else {
                    console.log('closed');
                }
            }
        });
    };
    PaymentPage.prototype.paytm = function () {
        var _this = this;
        var options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        var orderId = this.util.makeid(20);
        var param = {
            ORDER_ID: orderId,
            CUST_ID: localStorage.getItem('uid'),
            INDUSTRY_TYPE_ID: 'Retail',
            CHANNEL_ID: 'WAP',
            TXN_AMOUNT: this.cart.grandTotal ? this.cart.grandTotal : 5
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        var url = this.api.baseUrl + 'paytm/pay?' + this.api.JSON_to_URLEncoded(param);
        var browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            console.log('event?;>11', event);
            var navUrl = event.url;
            if (navUrl.includes('success')) {
                console.log('close');
                browser.close();
                _this.makeOrder('paytm', orderId);
            }
        });
    };
    PaymentPage.prototype.getName = function () {
        return this.util.userInfo && this.util.userInfo.first_name ? this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'Groceryee';
    };
    PaymentPage.prototype.getEmail = function () {
        return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@groceryee.com';
    };
    PaymentPage.prototype.instaPay = function () {
        var _this = this;
        var url;
        if (this.instaENV === '0') {
            url = 'https://test.instamojo.com/api/1.1/payment-requests/';
        }
        else {
            url = 'https://www.instamojo.com/api/1.1/payment-requests/';
        }
        ;
        var param = {
            allow_repeated_payments: 'False',
            amount: this.cart.grandTotal,
            buyer_name: this.getName(),
            purpose: 'Groceryee order',
            redirect_url: this.api.baseUrl + 'paypal/success',
            phone: this.util.userInfo && this.util.userInfo.mobile ? this.util.userInfo.mobile : '',
            send_email: 'True',
            webhook: this.api.baseUrl,
            send_sms: 'True',
            email: this.getEmail()
        };
        this.util.show();
        this.api.instaPay(url, param, this.instamojo.key, this.instamojo.token).then(function (data) {
            console.log(data);
            _this.util.hide();
            console.log(JSON.parse(data.data));
            var info = JSON.parse(data.data);
            console.log('data.status', data.status);
            if (data.status === 201 && info && info.success === true) {
                var options = {
                    location: 'no',
                    clearcache: 'yes',
                    zoom: 'yes',
                    toolbar: 'yes',
                    closebuttoncaption: 'close'
                };
                var browser_1 = _this.iab.create(info.payment_request.longurl, '_blank', options);
                browser_1.on('loadstop').subscribe(function (event) {
                    var navUrl = event.url;
                    console.log('navURL', navUrl);
                    if (navUrl.includes('success')) {
                        browser_1.close();
                        var urlItems = new URL(event.url);
                        console.log(urlItems);
                        var orderId = urlItems.searchParams.get('payment_id');
                        _this.makeOrder('instamojo', orderId);
                    }
                });
            }
            else {
                var error = JSON.parse(data.error);
                console.log('error message', error);
                if (error && error.message) {
                    _this.util.showToast(error.message, 'danger', 'bottom');
                    return false;
                }
                _this.util.showToast(_this.util.getString('Something went wrong'), 'danger', 'bottom');
            }
        }, function (error) {
            console.log(error);
            _this.util.hide();
            var message = JSON.parse(error.error);
            console.log('error message', message);
            if (message && message.message) {
                _this.util.showToast(message.message, 'danger', 'bottom');
                return false;
            }
            _this.util.showToast(_this.util.getString('Something went wrong'), 'danger', 'bottom');
        })["catch"](function (error) {
            console.log(error);
            _this.util.hide();
            var message = JSON.parse(error.error);
            console.log('error message', message);
            if (message && message.message) {
                _this.util.showToast(message.message, 'danger', 'bottom');
                return false;
            }
            _this.util.showToast(_this.util.getString('Something went wrong'), 'danger', 'bottom');
        });
    };
    PaymentPage = __decorate([
        core_1.Component({
            selector: 'app-payment',
            templateUrl: './payment.page.html',
            styleUrls: ['./payment.page.scss']
        })
    ], PaymentPage);
    return PaymentPage;
}());
exports.PaymentPage = PaymentPage;
