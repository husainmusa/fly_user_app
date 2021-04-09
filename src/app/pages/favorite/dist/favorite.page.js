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
exports.FavoritePage = void 0;
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
var filters_component_1 = require("src/app/components/filters/filters.component");
var sort_page_1 = require("../sort/sort.page");
var FavoritePage = /** @class */ (function () {
    function FavoritePage(navCtrl, api, util, router, cart, popoverController, modalController, alertCtrl) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.cart = cart;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.products = [];
        this.dummyProduct = [];
        this.dummy = Array(20);
        this.qty = 0;
        this.mode = 'grid';
        this.selectedFilter = '';
        this.isClosedFilter = true;
    }
    FavoritePage.prototype.sortFilter = function () {
        var _this = this;
        if (this.discount && this.discount !== null) {
            console.log('filter with discount');
            var products_1 = [];
            this.dummyProduct.forEach(function (element) {
                if (parseFloat(element.original_price) >= _this.minValue && parseFloat(element.original_price) <= _this.maxValue &&
                    parseFloat(_this.discount) <= parseFloat(element.discount)) {
                    products_1.push(element);
                }
                _this.products = products_1;
            });
        }
        else {
            console.log('filter without discount');
            var products_2 = [];
            this.dummyProduct.forEach(function (element) {
                if (parseFloat(element.original_price) >= _this.minValue && parseFloat(element.original_price) <= _this.maxValue) {
                    products_2.push(element);
                }
            });
            this.products = products_2;
        }
    };
    FavoritePage.prototype.ngOnInit = function () {
    };
    FavoritePage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    FavoritePage.prototype.getFav = function () {
        var _this = this;
        this.haveSearch = false;
        this.limit = 1;
        var param = {
            id: this.util.favIds.join()
        };
        this.dummy = Array(20);
        this.api.post('products/getFavs', param).subscribe(function (data) {
            console.log(data);
            _this.dummy = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                var products = data.data;
                _this.products = products.filter(function (x) { return x.status === '1'; });
                _this.dummyProduct = _this.products;
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
                            element.id = _this.id + '_' + element.title;
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
                            info.variations[0].items.forEach(function (pageElement) {
                                pageElement.quantity = 0;
                            });
                        }
                    }
                });
                _this.max = Math.max.apply(Math, __spreadArrays(_this.products.map(function (o) { return o.original_price; }), [0]));
                console.log('maxValueOfPrice', _this.max);
                _this.min = Math.min.apply(null, _this.products.map(function (item) { return item.original_price; }));
                console.log('minValueOfPrice', _this.min);
                if (_this.selectedFilterID && _this.selectedFilterID !== null) {
                    _this.updateFilter();
                }
                if (_this.haveSortFilter && _this.isClosedFilter === false) {
                    _this.sortFilter();
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    FavoritePage.prototype.ionViewWillEnter = function () {
        this.getFav();
    };
    FavoritePage.prototype.search = function () {
        this.haveSearch = !this.haveSearch;
    };
    FavoritePage.prototype.onSearchChange = function (event) {
        console.log(event.detail.value);
        if (event.detail.value) {
            this.products = this.dummyProduct.filter(function (item) {
                return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.products = this.dummyProduct;
        }
    };
    FavoritePage.prototype.changeMode = function () {
        this.mode = this.mode === 'grid' ? 'list' : 'grid';
    };
    FavoritePage.prototype.updateFilter = function () {
        switch (this.selectedFilterID) {
            case '1':
                console.log('its rating');
                this.selectedFilter = this.util.getString('Popularity');
                this.products = this.products.sort(function (a, b) {
                    return parseFloat(b.total_rating) < parseFloat(a.total_rating) ? -1
                        : (parseFloat(b.total_rating) > parseFloat(a.total_rating) ? 1 : 0);
                });
                break;
            case '2':
                console.log('its low to high');
                this.selectedFilter = this.util.getString('Price L-H');
                this.products = this.products.sort(function (a, b) {
                    return parseFloat(a.original_price) < parseFloat(b.original_price) ? -1
                        : (parseFloat(a.original_price) > parseFloat(b.original_price) ? 1 : 0);
                });
                break;
            case '3':
                console.log('its highht to low');
                this.selectedFilter = this.util.getString('Price H-L');
                this.products = this.products.sort(function (a, b) {
                    return parseFloat(b.original_price) < parseFloat(a.original_price) ? -1
                        : (parseFloat(b.original_price) > parseFloat(a.original_price) ? 1 : 0);
                });
                break;
            case '4':
                console.log('its a - z');
                this.selectedFilter = this.util.getString('A-Z');
                this.products = this.products.sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case '5':
                console.log('its z - a');
                this.selectedFilter = this.util.getString('Z-A');
                this.products = this.products.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case '6':
                console.log('its % off');
                this.selectedFilter = this.util.getString('% Off');
                this.products = this.products.sort(function (a, b) {
                    return parseFloat(b.discount) < parseFloat(a.discount) ? -1
                        : (parseFloat(b.discount) > parseFloat(a.discount) ? 1 : 0);
                });
                break;
            default:
                break;
        }
    };
    FavoritePage.prototype.filter = function (events) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: filters_component_1.FiltersComponent,
                            event: events,
                            mode: 'ios'
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            console.log(data.data);
                            if (data && data.data && data.role === 'selected') {
                                _this.selectedFilterID = data.data;
                                _this.updateFilter();
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
    FavoritePage.prototype.add = function (product, index) {
        console.log(product);
        if (this.products[index].quantiy > 0) {
            this.products[index].quantiy = this.products[index].quantiy + 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
        }
    };
    FavoritePage.prototype.remove = function (product, index) {
        console.log(product, index);
        if (this.products[index].quantiy === 1) {
            if (this.products[index].variations[0]) {
                this.products[index].variations[0].items.forEach(function (element) {
                    element.quantity = 0;
                });
            }
            this.products[index].quantiy = 0;
            this.cart.removeItem(product.id);
        }
        else {
            this.products[index].quantiy = this.products[index].quantiy - 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
        }
    };
    FavoritePage.prototype.checkCartItems = function () {
        var _this = this;
        var cart = this.cart.cart;
        if (cart && cart.length) {
            cart.forEach(function (element) {
                if (_this.cart.itemId && _this.cart.itemId.length && _this.cart.itemId.includes(element.id)) {
                    var index = _this.products.findIndex(function (x) { return x.id === element.id; });
                    console.log('index============>', index);
                    console.log('???', element.quantiy);
                    _this.products[index].quantiy = element.quantiy;
                }
            });
        }
    };
    FavoritePage.prototype.addToCart = function (item, index) {
        console.log(item);
        this.products[index].quantiy = 1;
        this.cart.addItem(item);
    };
    FavoritePage.prototype.checkCart = function (id) {
        var item = this.cart.itemId;
        console.log('item', item);
        return false;
        // return this.cart.itemId.includes(id);
    };
    FavoritePage.prototype.back = function () {
        this.navCtrl.back();
    };
    FavoritePage.prototype.singleProduct = function (item) {
        var param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['/tabs/categories/product'], param);
    };
    FavoritePage.prototype.priceFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: sort_page_1.SortPage,
                            componentProps: { min: this.min, max: this.max, from: 'products', discountSelected: this.discount }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (datas) {
                            var data = datas.data;
                            console.log(data);
                            _this.haveSortFilter = true;
                            if (_this.products && data.from === 'products') {
                                _this.minValue = data.min;
                                _this.maxValue = data.max;
                                _this.discount = data.discount;
                                _this.isClosedFilter = data.close;
                                if (_this.isClosedFilter === false) {
                                    _this.sortFilter();
                                }
                                else {
                                    _this.products = _this.dummyProduct;
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FavoritePage.prototype.variant = function (item, indeX) {
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
    FavoritePage = __decorate([
        core_1.Component({
            selector: 'app-favorite',
            templateUrl: './favorite.page.html',
            styleUrls: ['./favorite.page.scss']
        })
    ], FavoritePage);
    return FavoritePage;
}());
exports.FavoritePage = FavoritePage;
