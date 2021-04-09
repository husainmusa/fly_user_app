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
exports.CartService = void 0;
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
var CartService = /** @class */ (function () {
    function CartService(api, util) {
        var _this = this;
        this.api = api;
        this.util = util;
        this.cart = [];
        this.itemId = [];
        this.totalPrice = 0;
        this.grandTotal = 0;
        this.discount = 0;
        this.orderTax = 0;
        this.shippingPrice = 0;
        this.minOrderPrice = 0;
        this.freeShipping = 0;
        this.deliveryPrice = 0;
        this.stores = [];
        this.subCart = [];
        this.bulkOrder = [];
        this.util.getKeys('cart').then(function (data) {
            if (data && data !== null && data !== 'null') {
                var userCart = JSON.parse(data);
                console.log("user cart", userCart);
                if (userCart && userCart.length > 0) {
                    _this.cart = userCart;
                    _this.itemId = __spreadArrays(new Set(_this.cart.map(function (item) { return item.id; })));
                    _this.calcuate();
                }
                else {
                    _this.calcuate();
                }
            }
            else {
                _this.calcuate();
            }
        });
    }
    CartService.prototype.clearCart = function () {
        this.cart = [];
        this.itemId = [];
        this.totalPrice = 0;
        this.grandTotal = 0;
        this.coupon = undefined;
        this.discount = 0;
        this.orderPrice = 0;
        this.datetime = undefined;
        this.stores = [];
        this.util.clearKeys('cart');
    };
    CartService.prototype.addItem = function (item) {
        console.log('item to adde', item);
        this.cart.push(item);
        this.itemId.push(item.id);
        this.calcuate();
        console.log("cart", this.cart);
    };
    CartService.prototype.addAddOn = function (id, parent, quantity) {
        console.log("parent id is", parent, id);
        console.log(this.cart);
        this.cart.forEach(function (element) {
            if (element.id == parent) {
                element.variations[0].items.forEach(function (addOnElement) {
                    if (addOnElement.id == id) {
                        addOnElement.quantity = quantity;
                    }
                });
            }
        });
        this.calcuate();
    };
    CartService.prototype.addQuantity = function (quantity, id) {
        console.log('iddd-->>', id);
        console.log('quantity', quantity);
        this.cart.forEach(function (element) {
            if (element.id === id) {
                element.quantiy = quantity;
            }
        });
        this.calcuate();
    };
    CartService.prototype.removeItem = function (id) {
        console.log('remove this item from cart');
        console.log('current cart items', this.cart);
        this.cart = this.cart.filter(function (x) { return x.id !== id; });
        this.itemId = this.itemId.filter(function (x) { return x !== id; });
        console.log('====>>>>>>>>>', this.cart);
        console.log('items====>>>', this.itemId);
        this.calcuate();
    };
    CartService.prototype.subAddItem = function (item, id) {
        console.log('item to adde', item);
        this.cart.push(item);
        this.itemId.push(id);
        this.calcuate();
    };
    CartService.prototype.subAddQuantity = function (quantity, id) {
        console.log("subAddQuantitytest");
        console.log('iddd-->>', id);
        console.log('quantity', quantity);
        this.cart.forEach(function (element) {
            console.log("subAddQuantity", element);
            if (element.id === id) {
                element.quantiy = quantity;
            }
        });
        this.calcuate();
    };
    CartService.prototype.subRemoveItem = function (id) {
        console.log('remove this item from cart');
        console.log('current cart items', this.cart);
        this.cart = this.cart.filter(function (x) { return x.id !== id; });
        this.itemId = this.itemId.filter(function (x) { return x !== id; });
        console.log('====>>>>>>>>>', this.cart);
        console.log('items====>>>', this.itemId);
        if (this.cart.length) {
            this.calcuate();
        }
        else {
            this.clearCart();
        }
    };
    CartService.prototype.calcuate = function () {
        var _this = this;
        console.log('cart==>', this.cart);
        console.log('couiponnnnnnneee---->>', this.coupon);
        var total = 0;
        this.cart.forEach(function (element) {
            if (element && element.discount === '0') {
                if (element.size === '1' || element.size === 1) {
                    total = total + (parseFloat(element.original_price) * element.quantiy);
                    // if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                    //   total = total + (parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy);
                    // } else {
                    //   total = total + (parseFloat(element.variations[0].items[element.variant].price) * element.quantiy);
                    // }
                }
                else {
                    total = total + (parseFloat(element.original_price) * element.quantiy);
                }
            }
            else {
                if (element.size === '1' || element.size === 1) {
                    // if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                    //   total = total + (parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy);
                    // } else {
                    //   total = total + (parseFloat(element.variations[0].items[element.variant].price) * element.quantiy);
                    // }
                    total = total + (parseFloat(element.sell_price) * element.quantiy);
                }
                else {
                    total = total + (parseFloat(element.sell_price) * element.quantiy);
                }
            }
            // console.log("variant items", element.variations[0].items);
            if (element.variations[0]) {
                var addon_items = element.variations[0].items;
                addon_items.forEach(function (addonElement) {
                    if (addonElement.price > 0 && addonElement.quantity > 0) {
                        var discount_price = (addonElement.discount / 100) * addonElement.price;
                        total = total + ((parseFloat(addonElement.price) - discount_price) * addonElement.quantity);
                    }
                });
            }
        });
        console.log('total->', total);
        this.totalPrice = total;
        if (this.coupon && this.coupon.type) {
            var min = parseFloat(this.coupon.min);
            if (this.totalPrice >= min) {
                if (this.coupon && this.coupon.type === 'per') {
                    console.log('per');
                    function percentage(num, per) {
                        return (num / 100) * per;
                    }
                    var totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), parseFloat(this.coupon.off));
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.discount = totalPrice.toFixed(2);
                    // this.grandTotal = (this.totalPrice - parseFloat(this.discount)) + this.orderTax;
                }
                else {
                    console.log('currency');
                    this.discount = this.coupon.off;
                    // this.grandTotal = (this.totalPrice - parseFloat(this.discount)) + this.orderTax;
                }
            }
            else {
                this.discount = 0;
                this.coupon = null;
            }
        }
        else {
            this.grandTotal = this.totalPrice + this.orderTax;
        }
        if (this.stores && this.stores.length && this.deliveryAddress && this.deliveryAt === 'home') {
            console.log('--->>> delivery address===>>>', this.deliveryAddress);
            // this.deliveryPrice = 0;
            var totalKM_1 = 0;
            this.stores.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                var distance;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.distanceInKmBetweenEarthCoordinates(this.deliveryAddress.lat, this.deliveryAddress.lng, element.lat, element.lng)];
                        case 1:
                            distance = _a.sent();
                            console.log('distance', distance);
                            totalKM_1 = totalKM_1 + distance;
                            return [2 /*return*/];
                    }
                });
            }); });
            setTimeout(function () {
                console.log('free', _this.freeShipping);
                console.log('totalprice', _this.totalPrice);
                if (_this.freeShipping > _this.totalPrice) {
                    if (_this.shipping === 'km') {
                        var distancePricer = totalKM_1 * _this.shippingPrice;
                        console.log('====================> KM price', distancePricer);
                        _this.deliveryPrice = Math.floor(distancePricer).toFixed(2);
                        if (!_this.discount || _this.discount === null) {
                            _this.discount = 0;
                        }
                        _this.grandTotal = (_this.totalPrice - parseFloat(_this.discount)) + _this.orderTax + distancePricer;
                        _this.grandTotal = parseFloat(_this.grandTotal).toFixed(2);
                        console.log('grand total===>>', _this.grandTotal);
                        // console.log('deliveryeeeeeeeee', this.deliveryPrice);
                    }
                    else {
                        _this.deliveryPrice = _this.shippingPrice;
                        console.log('shippppppppp=-======0-00-=-=', _this.shippingPrice);
                        if (!_this.discount || _this.discount === null) {
                            _this.discount = 0;
                        }
                        _this.grandTotal = (_this.totalPrice - parseFloat(_this.discount)) + _this.orderTax + _this.shippingPrice;
                        _this.grandTotal = parseFloat(_this.grandTotal).toFixed(2);
                        console.log('grand total===>>', _this.grandTotal);
                    }
                }
                else {
                    _this.deliveryPrice = 0;
                    // this.grandTotal = this.totalPrice + this.orderTax;
                    console.log('discount', _this.discount);
                    if (!_this.discount || _this.discount === null) {
                        _this.discount = 0;
                    }
                    console.log('order tax', _this.orderTax);
                    _this.grandTotal = (_this.totalPrice - parseFloat(_this.discount)) + _this.orderTax;
                    _this.grandTotal = parseFloat(_this.grandTotal).toFixed(2);
                    console.log('grand total===>>', _this.grandTotal);
                }
            }, 1000);
        }
        else {
            console.log('no store,no delivery address, no shipping price valid');
            this.deliveryPrice = 0;
            // this.grandTotal = this.totalPrice + this.orderTax;
            this.grandTotal = (this.totalPrice - parseFloat(this.discount)) + this.orderTax;
            this.grandTotal = parseFloat(this.grandTotal).toFixed(2);
            console.log('grand total===>>', this.grandTotal);
        }
        console.log('=====>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', this.orderTax);
        this.util.clearKeys('cart');
        this.util.setKeys('cart', JSON.stringify(this.cart));
        // this.createBulkOrder();
    };
    CartService.prototype.createBulkOrder = function () {
        var _this = this;
        var order = [];
        var ids = __spreadArrays(new Set(this.cart.map(function (item) { return item.store_id; })));
        ids.forEach(function (element) {
            var param = {
                id: element,
                order: []
            };
            order.push(param);
        });
        ids.forEach(function (element, index) {
            _this.cart.forEach(function (cart) {
                if (cart.store_id === element) {
                    order[index].order.push(cart);
                }
            });
        });
        this.bulkOrder = order;
        console.log('=====================================================');
        console.log(order);
        console.log('=====================================================');
    };
    CartService.prototype.checkProductInCart = function (id) {
        return this.itemId.includes(id);
    };
    CartService.prototype.degreesToRadians = function (degrees) {
        return degrees * Math.PI / 180;
    };
    CartService.prototype.removeChild = function (childrenId) {
        var _loop_1 = function (i) {
            this_1.cart = this_1.cart.filter(function (x) { return x.id !== childrenId[i]; });
            this_1.itemId = this_1.itemId.filter(function (x) { return x !== childrenId[i]; });
            this_1.calcuate();
        };
        var this_1 = this;
        for (var i = 0; i < childrenId.length; i++) {
            _loop_1(i);
        }
    };
    CartService.prototype.distanceInKmBetweenEarthCoordinates = function (lat1, lon1, lat2, lon2) {
        console.log(lat1, lon1, lat2, lon2);
        var earthRadiusKm = 6371;
        var dLat = this.degreesToRadians(lat2 - lat1);
        var dLon = this.degreesToRadians(lon2 - lon1);
        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    };
    CartService.prototype.checkChild = function (id) {
        this.subCart = [];
        var cartItems = this.cart;
        console.log("cartitems", cartItems, "length", cartItems.length);
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].parent_id != 0 || cartItems[i].parent_id != '0' || cartItems[i].parent_id != '') {
                console.log("parent_id", cartItems[i].parent_id, "finish", id);
                var parentidArray = [];
                parentidArray = cartItems[i].parent_id.split(',');
                for (var j = 0; j < parentidArray.length; j++) {
                    if (parentidArray[j] != '0' && parentidArray[j] == id) {
                        this.subCart.push(cartItems[i]);
                        this.calcuate();
                    }
                }
            }
        }
        if (this.subCart.length > 0) {
            return this.subCart;
        }
        else {
            return "";
        }
    };
    CartService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
