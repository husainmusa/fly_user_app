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
exports.CartPage = void 0;
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
var CartPage = /** @class */ (function () {
    function CartPage(util, alertCtrl, router, cart, api, navCtrl) {
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.cart = cart;
        this.api = api;
        this.navCtrl = navCtrl;
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.topPosToStartShowing = 100;
        this.subCart = [];
        this.latestCart = [];
        this.childrenId = [];
        console.log("cart page starts");
        console.log(this.cart.cart, "this cart");
        // this.cart.cart.forEach(element => {
        //   console.log("element", element);
        //   console.log(this.cart.cart, "this cart");
        //   if(element.parent_id != 0 || element.parent_id != '0'){
        //     this.subCart = this.cart.cart;
        //     console.log(this.subCart, "sub cart new");
        //   }
        // });
        // for(let i = 0; i < this.cart.cart.length;i++)
        // console.log("latest Cart", this.latestCart);
        // this.latestCart.forEach(element => {
        //   console.log("element id", element.id);
        //   this.checkChild(element.id);
        //   this.latestCart.push(this.subCart);
        // });
        // console.log("latest Cart", this.latestCart);
    }
    CartPage.prototype.ionViewWillEnter = function () {
        this.subItems();
    };
    CartPage.prototype.ngOnInit = function () {
    };
    CartPage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    CartPage.prototype.addAddOn = function (item, parent) {
        var _this = this;
        // this.parentId = id;
        // const param = {
        //   id: this.parentId
        // };
        console.log("item", item, parent);
        var id = item.id;
        parent.variations[0].items.forEach(function (element) {
            if (element.id == id) {
                console.log("element id", element.id, id);
                element.quantity = element.quantity + 1;
                _this.cart.addAddOn(id, parent.id, element.quantity);
            }
        });
    };
    CartPage.prototype.minusAddOn = function (item, parent) {
        var _this = this;
        // this.parentId = id;
        // const param = {
        //   id: this.parentId
        // };
        console.log("item", item, parent);
        var id = item.id;
        parent.variations[0].items.forEach(function (element) {
            if (element.id == id) {
                console.log("element id", element.id, id);
                element.quantity = element.quantity - 1;
                _this.cart.addAddOn(id, parent.id, element.quantity);
            }
        });
    };
    CartPage.prototype.subItems = function () {
        this.subCart = [];
        for (var i = 0; i < this.cart.cart.length; i++) {
            if (this.cart.cart[i].parent_id != "0" || this.cart.cart[i].parent_id != 0) {
                var parent_id = this.cart.cart[i].parent_id.split(',');
                for (var j = 0; j < parent_id.length; j++) {
                    if (parent_id[j] != 0 || parent_id[j] != "0") {
                        console.log("parent_id", parent_id[j], this.cart.cart[i].id);
                        var temp = JSON.parse(JSON.stringify(this.cart.cart[i]));
                        console.log("before", temp.parent_id, this.cart.cart[i].id);
                        temp.parent_id = parent_id[j];
                        console.log("after", temp.parent_id, this.cart.cart[i].id);
                        this.subCart.push(temp);
                        console.log(this.subCart);
                    }
                }
            }
        }
    };
    CartPage.prototype.removeChild = function (parentId) {
        var cart = this.cart.cart;
        var cartlength = cart.length;
        for (var i = 0; i < cartlength; i++) {
            var parent_id = cart[i].parent_id.split(',');
            for (var j = 0; j < parent_id.length; j++) {
                if (parent_id[j] == parentId) {
                    this.childrenId.push(cart[i].id);
                }
            }
        }
        this.cart.removeChild(this.childrenId);
    };
    CartPage.prototype.add = function (product, index) {
        if (this.cart.cart[index].quantiy > 0) {
            this.cart.cart[index].quantiy = this.cart.cart[index].quantiy + 1;
            this.cart.addQuantity(this.cart.cart[index].quantiy, product.id);
        }
    };
    CartPage.prototype.remove = function (product, index) {
        if (this.cart.cart[index].quantiy === 1) {
            if (this.cart.cart[index].variations[0]) {
                this.cart.cart[index].variations[0].items.forEach(function (element) {
                    element.quantity = 0;
                });
            }
            this.cart.cart[index].quantiy = 0;
            this.cart.removeItem(product.id);
        }
        else {
            this.cart.cart[index].quantiy = this.cart.cart[index].quantiy - 1;
            this.cart.addQuantity(this.cart.cart[index].quantiy, product.id);
        }
    };
    CartPage.prototype.goToPayment = function () {
        console.log(this.cart.minOrderPrice);
        if (this.cart.totalPrice < this.cart.minOrderPrice) {
            var text = void 0;
            if (this.util.cside === 'left') {
                text = this.util.currecny + ' ' + this.cart.minOrderPrice;
            }
            else {
                text = this.cart.minOrderPrice + ' ' + this.util.currecny;
            }
            this.util.errorToast(this.util.getString('Minimum order amount must be') + text + this.util.getString('or more'));
            return false;
        }
        this.router.navigate(['/tabs/cart/delivery-options']);
    };
    CartPage.prototype.back = function () {
        this.navCtrl.back();
    };
    CartPage.prototype.openCoupon = function () {
        this.router.navigate(['offers']);
    };
    CartPage.prototype.variant = function (item, indeX) {
        return __awaiter(this, void 0, void 0, function () {
            var allData, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(item);
                        allData = [];
                        console.log(item && item.variations !== '');
                        console.log(item && item.variations !== '' && item.variations.length > 0);
                        console.log(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0);
                        if (!(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0)) return [3 /*break*/, 3];
                        console.log('->', item.variations[0].items);
                        item.variations[0].items.forEach(function (element, index) {
                            console.log('OK');
                            var title = '';
                            if (_this.util.cside === 'left') {
                                var price = item.variations && item.variations[0] &&
                                    item.variations[0].items[index] &&
                                    item.variations[0].items[index].discount ? item.variations[0].items[index].discount :
                                    item.variations[0].items[index].price;
                                title = element.title + ' - ' + _this.util.currecny + ' ' + price;
                            }
                            else {
                                var price = item.variations && item.variations[0] && item.variations[0].items[index] &&
                                    item.variations[0].items[index].discount ? item.variations[0].items[index].discount :
                                    item.variations[0].items[index].price;
                                title = element.title + ' - ' + price + ' ' + _this.util.currecny;
                            }
                            var data = {
                                name: element.title,
                                type: 'radio',
                                label: title,
                                value: index,
                                checked: item.variant === index
                            };
                            allData.push(data);
                        });
                        console.log('All Data', allData);
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: item.name,
                                inputs: allData,
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
                                            console.log('before', _this.cart.cart[indeX].variant);
                                            _this.cart.cart[indeX].variant = data;
                                            console.log('after', _this.cart.cart[indeX].variant);
                                            _this.cart.calcuate();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        console.log('none');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CartPage.prototype.subAdd = function (id) {
        this.subQuantity = this.getSubQuanity(id);
        this.subQuantity = this.subQuantity + 1;
        this.cart.subAddQuantity(this.subQuantity, id);
    };
    CartPage.prototype.subRemove = function (id) {
        this.subQuantity = this.getSubQuanity(id);
        if (this.subQuantity === 1) {
            this.subQuantity = 0;
            this.cart.removeItem(id);
            this.subItems();
        }
        else {
            this.subQuantity = this.subQuantity - 1;
            this.cart.subAddQuantity(this.subQuantity, id);
        }
    };
    // checkChild(id){
    //   this.subCart = [];
    //   let cartItems = this.cart.cart;
    //   console.log("cartitems",cartItems, "length", cartItems.length );
    //   for(let i = 0; i< cartItems.length; i++){
    //     if(cartItems[i].parent_id != 0 || cartItems[i].parent_id != '0' || cartItems[i].parent_id != ''){
    //       console.log("parent_id", cartItems[i].parent_id, "finish", id);
    //       let parentidArray = [];
    //       parentidArray = cartItems[i].parent_id.split(',');
    //       for(let j = 0; j < parentidArray.length; j++){
    //         if(parentidArray[j] != '0' && parentidArray[j] == id){
    //           this.subCart.push(cartItems[i]);
    //           this.cart.calcuate();
    //         }
    //       }
    //     }
    //   }
    //   if(this.subCart != ""){
    //     return this.subCart;
    //   }else{
    //     return "";
    //   }
    // }
    CartPage.prototype.getSubQuanity = function (id) {
        var data = this.cart.cart.filter(function (x) { return x.id === id; });
        console.log("getSubQuanity", data);
        var quantity = data[0].quantiy;
        return quantity;
    };
    CartPage = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.page.html',
            styleUrls: ['./cart.page.scss']
        })
    ], CartPage);
    return CartPage;
}());
exports.CartPage = CartPage;
