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
exports.SubCategoryPage = void 0;
var core_1 = require("@angular/core");
var SubCategoryPage = /** @class */ (function () {
    function SubCategoryPage(route, router, util, api, navCtrl, cart, alertCtrl) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.alertCtrl = alertCtrl;
        this.subCates = [];
        this.products = [];
        this.dummyProducts = [];
        this.allProducts = [];
        this.dummys = Array(20);
        this.dummyCates = Array(10);
        this.dummys = Array(20);
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            if (data && data.id) {
                _this.id = data.id;
                _this.limit = 1;
                _this.name = data.name ? data.name : 'Top Picked';
                _this.getCates();
            }
        });
    }
    SubCategoryPage.prototype.getCates = function () {
        var _this = this;
        var param = {
            id: this.id
        };
        this.subCates = [];
        this.api.post('subcate/getByCId', param).subscribe(function (data) {
            _this.dummyCates = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                console.log('subcates', data.data);
                _this.subCates = data.data.filter(function (x) { return x.status === '1'; });
                _this.tabSelected = _this.subCates[0].id;
                _this.getSubProducts(false, 'none');
            }
            else {
                _this.dummys = [];
                _this.dummyCates = [];
            }
        }, function (error) {
            console.log(error);
            _this.dummys = [];
            _this.dummyCates = [];
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    SubCategoryPage.prototype.getSubProducts = function (limit, event) {
        var _this = this;
        var city = {
            id: this.id,
            cid: localStorage.getItem('city'),
            sid: this.tabSelected,
            limit: this.limit * 10
        };
        console.log('parma', city);
        // this.loaded = false;
        this.api.post('products/getByCSID', city).subscribe(function (cates) {
            console.log(cates);
            if (cates && cates.status === 200 && cates.data && cates.data.length) {
                console.log('products', cates.data);
                var products = cates.data;
                _this.products = products.filter(function (x) { return x.status === '1'; });
                _this.dummyProducts = _this.products;
                // const cart = this.cart.cart;
                console.log('cart===============>>>>>>', _this.cart.cart);
                _this.products.forEach(function (info) {
                    if (info.variations && info.size === '1' && info.variations !== '') {
                        if ((function (x) { try {
                            JSON.parse(x);
                            return true;
                        }
                        catch (e) {
                            return false;
                        } })(info.variations)) {
                            info.variations = JSON.parse(info.variations);
                            info['variant'] = 0;
                        }
                        else {
                            info.variations = [];
                            info['variant'] = 1;
                        }
                    }
                    else {
                        info.variations = [];
                        info['variant'] = 1;
                    }
                    if (info.variations[0]) {
                        info.variations[0].items.forEach(function (element) {
                            element['quantity'] = 0;
                            element.id = info.id + '_' + element.title;
                        });
                    }
                    if (_this.cart.itemId.includes(info.id)) {
                        var index_1 = _this.cart.cart.filter(function (x) { return x.id === info.id; });
                        info['quantiy'] = index_1[0].quantiy;
                        if (info.variations[0]) {
                            info.variations[0].items.forEach(function (pageElement) {
                                index_1[0].variations[0].items.forEach(function (cartElement) {
                                    if (pageElement.id == cartElement.id) {
                                        pageElement.quantity = cartElement.quantity;
                                    }
                                });
                            });
                        }
                    }
                    else {
                        info['quantiy'] = 0;
                        if (info.variations[0]) {
                            info.variations[0].items.forEach(function (addOnElement) {
                                addOnElement.quantity = 0;
                            });
                        }
                    }
                });
                _this.dummys = [];
            }
            else {
                _this.dummys = [];
            }
            if (limit) {
                event.complete();
            }
        }, function (error) {
            console.log(error);
            _this.dummys = [];
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    SubCategoryPage.prototype.addToCart = function (item, index) {
        console.log(item);
        this.products[index].quantiy = 1;
        this.cart.addItem(item);
    };
    SubCategoryPage.prototype.add = function (product, index) {
        console.log(product);
        if (this.products[index].quantiy > 0) {
            this.products[index].quantiy = this.products[index].quantiy + 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
        }
    };
    SubCategoryPage.prototype.remove = function (product, index) {
        console.log(product, index);
        if (this.products[index].quantiy === 1) {
            this.products[index].quantiy = 0;
            this.cart.removeItem(product.id);
            this.cart.removeItem(product.id);
            if (this.products[index].variations[0]) {
                this.products[index].variations[0].items.forEach(function (element) {
                    element.quantity = 0;
                });
            }
        }
        else {
            this.products[index].quantiy = this.products[index].quantiy - 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
        }
    };
    // getByCid
    SubCategoryPage.prototype.onMenuClick = function (cid) {
        this.tabSelected = cid;
        this.limit = 1;
        this.dummyProducts = [];
        this.allProducts = [];
        this.dummys = Array(30);
        this.getSubProducts(false, 'none');
        this.content.scrollToPoint(0, 0, 1000);
    };
    SubCategoryPage.prototype.ngOnInit = function () {
    };
    SubCategoryPage.prototype.onProductClick = function (item) {
        console.log(item);
        console.log(item);
        var param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['product'], param);
    };
    SubCategoryPage.prototype.back = function () {
        this.navCtrl.back();
    };
    SubCategoryPage.prototype.onSearchChange = function (event) {
        if (event.detail.value) {
            this.allProducts = this.dummyProducts.filter(function (item) {
                return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.allProducts = [];
        }
    };
    SubCategoryPage.prototype.singleProduct = function (item) {
        console.log(item);
        var param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['product'], param);
    };
    SubCategoryPage.prototype.loadData = function (event) {
        console.log(event);
        this.limit = this.limit + 1;
        this.getSubProducts(true, event.target);
    };
    SubCategoryPage.prototype.goToSingleProduct = function (item) {
        var param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['tabs/home/product'], param);
    };
    SubCategoryPage.prototype.variant = function (item, indeX) {
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
                                            console.log('before', _this.products[indeX].variant);
                                            _this.products[indeX].variant = data;
                                            console.log('after', _this.products[indeX].variant);
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
    __decorate([
        core_1.ViewChild('content', { static: false })
    ], SubCategoryPage.prototype, "content");
    SubCategoryPage = __decorate([
        core_1.Component({
            selector: 'app-sub-category',
            templateUrl: './sub-category.page.html',
            styleUrls: ['./sub-category.page.scss']
        })
    ], SubCategoryPage);
    return SubCategoryPage;
}());
exports.SubCategoryPage = SubCategoryPage;
