"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrdersPage = void 0;
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
var OrdersPage = /** @class */ (function () {
    function OrdersPage(util, router, api, navCtrl) {
        this.util = util;
        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.dummy = [];
        this.orders = [];
    }
    OrdersPage.prototype.ionViewWillEnter = function () {
        this.getOrders('', false);
    };
    OrdersPage.prototype.back = function () {
        this.navCtrl.navigateForward('tabs/home');
    };
    OrdersPage.prototype.getOrders = function (event, haveRefresh) {
        var _this = this;
        this.dummy = Array(15);
        this.orders = [];
        var param = {
            id: localStorage.getItem('uid')
        };
        this.api.post('orders/getByUid', param).subscribe(function (data) {
            console.log(data);
            _this.dummy = [];
            if (data && data.status === 200 && data.data.length > 0) {
                // this.orders = data.data;
                var orders = data.data;
                orders.forEach(function (element) {
                    if ((function (x) { try {
                        JSON.parse(x);
                        return true;
                    }
                    catch (e) {
                        return false;
                    } })(element.orders)) {
                        element.orders = JSON.parse(element.orders);
                        element.date_time = moment(element.date_time).format('dddd, MMMM Do YYYY');
                        element.orders.forEach(function (order) {
                            console.log(element.id, '=>', order.variations);
                            if (order.variations && order.variations !== '' && typeof order.variations === 'string') {
                                console.log('strings', element.id);
                                order.variations = JSON.parse(order.variations);
                                console.log(order['variant']);
                                if (order["variant"] === undefined) {
                                    order['variant'] = 0;
                                }
                            }
                        });
                    }
                });
                _this.orders = orders;
                if (haveRefresh) {
                    event.target.complete();
                }
                console.log('orderss==>?', _this.orders);
            }
        }, function (error) {
            console.log(error);
            _this.dummy = [];
            _this.orders = [];
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    OrdersPage.prototype.ngOnInit = function () {
    };
    OrdersPage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    OrdersPage.prototype.goToOrder = function (val) {
        var navData = {
            queryParams: {
                id: val.id
            }
        };
        this.router.navigate(['/order-details'], navData);
    };
    OrdersPage.prototype.doRefresh = function (event) {
        console.log(event);
        this.getOrders(event, true);
    };
    OrdersPage = __decorate([
        core_1.Component({
            selector: 'app-orders',
            templateUrl: './orders.page.html',
            styleUrls: ['./orders.page.scss']
        })
    ], OrdersPage);
    return OrdersPage;
}());
exports.OrdersPage = OrdersPage;
