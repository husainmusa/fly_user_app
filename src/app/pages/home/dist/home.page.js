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
exports.HomePage = void 0;
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
var HomePage = /** @class */ (function () {
    function HomePage(util, router, api, cart, chMod, iab, alertCtrl) {
        var _this = this;
        this.util = util;
        this.router = router;
        this.api = api;
        this.cart = cart;
        this.chMod = chMod;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.slideOpts = {
            slidesPerView: 1.3
        };
        this.slideTops = {
            slidesPerView: 2,
            spaceBetween: 5,
            slideShadows: true
        };
        this.categories = [];
        this.dummyCates = [];
        this.dummyBanners = [];
        this.banners = [];
        this.bottomDummy = [];
        this.bottomBanners = [];
        this.betweenDummy = [];
        this.betweenBanners = [];
        this.dummyTopProducts = [];
        this.topProducts = [];
        this.products = [];
        this.dummyProducts = [];
        this.dummyStores = [];
        this.stores = [];
        this.storeCopy = [];
        this.allcates = [];
        console.log("direction", this.util.direction);
        this.dummyCates = Array(5);
        this.dummyBanners = Array(5);
        this.bottomDummy = Array(5);
        this.betweenDummy = Array(5);
        this.dummyTopProducts = Array(5);
        // this.dummyProducts = Array(5);
        this.categories = [];
        this.banners = [];
        this.bottomBanners = [];
        this.betweenBanners = [];
        this.topProducts = [];
        this.products = [];
        if (!this.util.appClosed) {
            this.getInit();
            var pop = localStorage.getItem('pop');
            if (pop && pop != null && pop !== 'null') {
                console.log('alredy poped');
            }
            else {
                console.log('open pop');
                this.getPopup();
            }
        }
        this.util.subscribeCity().subscribe(function (data) {
            _this.dummyCates = Array(5);
            _this.dummyBanners = Array(5);
            _this.bottomDummy = Array(5);
            _this.betweenDummy = Array(5);
            _this.dummyTopProducts = Array(5);
            // this.dummyProducts = Array(5);
            _this.categories = [];
            _this.banners = [];
            _this.bottomBanners = [];
            _this.betweenBanners = [];
            _this.topProducts = [];
            _this.products = [];
            if (!_this.util.appClosed) {
                _this.getInit();
            }
        });
    }
    HomePage.prototype.getPopup = function () {
        var _this = this;
        this.api.get('popup').subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var info, alertCtrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('popup message', data);
                        if (!(data && data.status === 200)) return [3 /*break*/, 2];
                        info = data.data[0];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: this.util.getString('Message'),
                                message: info.message,
                                mode: 'ios',
                                buttons: [this.util.getString('Cancle'), this.util.getString('Ok')]
                            })];
                    case 1:
                        alertCtrl = _a.sent();
                        localStorage.setItem('pop', 'true');
                        alertCtrl.present();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.getInit = function () {
        var _this = this;
        this.getCity();
        this.dummyCates = Array(5);
        this.dummyBanners = Array(5);
        this.bottomDummy = Array(5);
        this.betweenDummy = Array(5);
        this.dummyTopProducts = Array(5);
        // this.dummyProducts = Array(5);
        this.categories = [];
        this.banners = [];
        this.bottomBanners = [];
        this.betweenBanners = [];
        this.topProducts = [];
        this.products = [];
        var param = {
            id: localStorage.getItem('city')
        };
        this.api.post('stores/getByCity', param).subscribe(function (stores) {
            console.log('stores by city', stores);
            _this.stores = [];
            _this.storeCopy = [];
            if (stores && stores.status === 200 && stores.data && stores.data.length) {
                console.log('city found');
                _this.stores = stores.data;
                console.log("before sort", _this.stores);
                _this.stores.forEach(function (val) { return _this.storeCopy.push(Object.assign({}, val)); });
                _this.storeCopy = _this.storeCopy.sort(function (b, a) { return a.id - b.id; });
                console.log("after sort", _this.storeCopy);
                _this.stores.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = element;
                                _b = 'isOpen';
                                return [4 /*yield*/, this.isOpen(element.open_time, element.close_time)];
                            case 1:
                                _a[_b] = _c.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                console.log('store====>>>', _this.stores);
                _this.haveStores = true;
                _this.getCategorys();
                _this.getBanners();
                _this.topProducts = [];
                _this.dummyTopProducts = Array(5);
                _this.api.post('products/getTopRated', param).subscribe(function (data) {
                    console.log('top products', data);
                    _this.dummyTopProducts = [];
                    if (data && data.status === 200 && data.data && data.data.length) {
                        data.data.forEach(function (element) {
                            if (element.variations && element.size === '1' && element.variations !== '') {
                                if ((function (x) { try {
                                    JSON.parse(x);
                                    return true;
                                }
                                catch (e) {
                                    return false;
                                } })(element.variations)) {
                                    element.variations = JSON.parse(element.variations);
                                    element['variant'] = 0;
                                }
                                else {
                                    element.variations = [];
                                    element['variant'] = 1;
                                }
                            }
                            else {
                                element.variations = [];
                                element['variant'] = 1;
                            }
                            if (element.variations[0]) {
                                element.variations[0].items.forEach(function (addOnElement) {
                                    addOnElement['quantity'] = 0;
                                    addOnElement.id = element.id + '_' + addOnElement.title;
                                });
                            }
                            if (_this.cart.itemId.includes(element.id)) {
                                var index = _this.cart.cart.filter(function (x) { return x.id === element.id; });
                                element['quantiy'] = index[0].quantiy;
                            }
                            else {
                                element['quantiy'] = 0;
                            }
                            _this.topProducts.push(element);
                        });
                    }
                }, function (error) {
                    console.log(error);
                    _this.dummyTopProducts = [];
                });
                _this.api.post('products/getHome', param).subscribe(function (data) {
                    console.log('home products', data);
                    _this.dummyTopProducts = [];
                    if (data && data.status === 200 && data.data && data.data.length) {
                        data.data.forEach(function (element) {
                            if (element.variations && element.size === '1' && element.variations !== '') {
                                if ((function (x) { try {
                                    JSON.parse(x);
                                    return true;
                                }
                                catch (e) {
                                    return false;
                                } })(element.variations)) {
                                    element.variations = JSON.parse(element.variations);
                                    element['variant'] = 0;
                                }
                                else {
                                    element.variations = [];
                                    element['variant'] = 1;
                                }
                            }
                            else {
                                element.variations = [];
                                element['variant'] = 1;
                            }
                            if (_this.cart.itemId.includes(element.id)) {
                                var index_1 = _this.cart.cart.filter(function (x) { return x.id === element.id; });
                                element['quantiy'] = index_1[0].quantiy;
                                if (element.variations[0]) {
                                    element.variations[0].items.forEach(function (pageElement) {
                                        index_1[0].variations[0].items.forEach(function (cartElement) {
                                            if (pageElement.id == cartElement.id) {
                                                pageElement.quantity = cartElement.quantity;
                                            }
                                        });
                                    });
                                }
                            }
                            else {
                                element['quantiy'] = 0;
                                if (element.variations[0]) {
                                    element.variations[0].items.forEach(function (addOnElement) {
                                        addOnElement.quantity = 0;
                                    });
                                }
                            }
                            _this.topProducts.push(element);
                        });
                    }
                }, function (error) {
                    _this.dummyTopProducts = [];
                    console.log(error);
                });
                // this.api.post('products/getProductWithCity', param).subscribe((data: any) => {
                //   console.log('getProductWithCity', data);
                //   if (data && data.status === 200 && data.data && data.data.length) {
                //     this.dummyProducts = data.data;
                //   } else {
                //     this.dummyProducts = []
                //   }
                // }, error => {
                //   console.log(error);
                //   this.dummyProducts = []
                // });
            }
            else {
                _this.haveStores = false;
                _this.stores = [];
                console.log('no city found');
                _this.dummyCates = [];
                _this.dummyBanners = [];
                _this.bottomDummy = [];
                _this.betweenDummy = [];
                _this.dummyTopProducts = [];
                _this.dummyProducts = [];
                _this.categories = [];
                _this.banners = [];
                _this.bottomBanners = [];
                _this.betweenBanners = [];
                _this.topProducts = [];
                _this.products = [];
                _this.chMod.detectChanges();
            }
        }, function (error) {
            console.log('error in get store by city', error);
            _this.stores = [];
            _this.haveStores = false;
            _this.dummyCates = [];
            _this.dummyBanners = [];
            _this.bottomDummy = [];
            _this.betweenDummy = [];
            _this.dummyTopProducts = [];
            _this.dummyProducts = [];
            _this.categories = [];
            _this.banners = [];
            _this.bottomBanners = [];
            _this.betweenBanners = [];
            _this.topProducts = [];
            _this.products = [];
            _this.util.errorToast(_this.util.getString('Something went wrong'));
            _this.chMod.detectChanges();
        });
    };
    HomePage.prototype.isOpen = function (start, end) {
        var format = 'H:mm:ss';
        var ctime = moment().format('HH:mm:ss');
        var time = moment(ctime, format);
        var beforeTime = moment(start, format);
        var afterTime = moment(end, format);
        if (time.isBetween(beforeTime, afterTime)) {
            return true;
        }
        return false;
    };
    HomePage.prototype.getTime = function (time) {
        // const date = moment().format('DD-MM-YYYY');
        // return moment(date + ' ' + time).format('hh:mm a');
        return moment(time, ['h:mm A']).format('hh:mm A');
    };
    HomePage.prototype.addToCart = function (item, index) {
        console.log(item);
        this.topProducts[index].quantiy = 1;
        this.cart.addItem(item);
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.getBanners = function () {
        var _this = this;
        this.dummyBanners = Array(5);
        this.api.get('banners').subscribe(function (data) {
            console.log(data);
            _this.dummyBanners = [];
            _this.betweenDummy = [];
            _this.bottomDummy = [];
            _this.bottomBanners = [];
            _this.betweenBanners = [];
            _this.banners = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                data.data.forEach(function (element) {
                    if (element && element.status === '1') {
                        if (element.position === '0') {
                            _this.banners.push(element);
                        }
                        else if (element.position === '1') {
                            _this.bottomBanners.push(element);
                        }
                        else {
                            _this.betweenBanners.push(element);
                        }
                    }
                });
                console.log('top', _this.banners);
                console.log('bottom', _this.bottomBanners);
                console.log('between', _this.betweenBanners);
            }
        }, function (error) {
            console.log(error);
            _this.dummyBanners = [];
        });
    };
    HomePage.prototype.getQuanity = function (id) {
        var data = this.cart.cart.filter(function (x) { return x.id === id; });
        return data[0].quantiy;
    };
    HomePage.prototype.getCategorys = function () {
        var _this = this;
        this.dummyCates = Array(10);
        this.api.get('categories').subscribe(function (datas) {
            _this.dummyCates = [];
            var cates = [];
            if (datas && datas.data && datas.data.length) {
                datas.data.forEach(function (element) {
                    if (element.status === '1') {
                        var info = {
                            id: element.id,
                            name: element.name,
                            cover: element.cover,
                            subCates: []
                        };
                        var cats = {
                            id: element.id,
                            name: element.name,
                            cover: element.cover
                        };
                        _this.allcates.push(cats);
                        cates.push(info);
                    }
                });
            }
            // this.api.get('subcate').subscribe((subCates: any) => {
            //   console.log('sub cates', subCates);
            //   if (subCates && subCates.status === 200 && subCates.data && subCates.data.length) {
            //     cates.forEach((element, i) => {
            //       subCates.data.forEach(sub => {
            //         if (sub.status === '1' && element.id === sub.cate_id) {
            //           // this.categories[i].subCates.push(sub);
            //           cates[i].subCates.push(sub);
            //         }
            //       });
            //     });
            //     // console.log('=>>', this.categories);
            //     this.categories = cates;
            //   }
            // }, error => {
            //   console.log(error);
            //   this.util.errorToast(this.util.getString('Something went wrong'));
            // });
        }, function (error) {
            console.log(error);
            _this.util.errorToast(_this.util.getString('Something went wrong'));
            _this.dummyCates = [];
        });
    };
    HomePage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    HomePage.prototype.add = function (product, index) {
        console.log(product);
        this.topProducts[index].quantiy = this.getQuanity(product.id);
        if (this.topProducts[index].quantiy > 0) {
            this.topProducts[index].quantiy = this.topProducts[index].quantiy + 1;
            this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
        }
    };
    HomePage.prototype.remove = function (product, index) {
        console.log(product, index);
        this.topProducts[index].quantiy = this.getQuanity(product.id);
        if (this.topProducts[index].quantiy === 1) {
            if (this.topProducts[index].variations[0]) {
                this.topProducts[index].variations[0].items.forEach(function (element) {
                    element.quantity = 0;
                });
            }
            this.topProducts[index].quantiy = 0;
            this.cart.removeItem(product.id);
        }
        else {
            this.topProducts[index].quantiy = this.topProducts[index].quantiy - 1;
            this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
        }
    };
    HomePage.prototype.goToSingleProduct = function (item) {
        var param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['tabs/home/product'], param);
    };
    HomePage.prototype.goToCatrgory = function () {
        this.router.navigate(['/tabs/categories']);
    };
    HomePage.prototype.subCate = function (item) {
        var param = {
            queryParams: {
                id: item.id,
                name: item.name
            }
        };
        this.router.navigate(['tabs/home/sub-category'], param);
    };
    HomePage.prototype.changeCity = function () {
        this.router.navigate(['cities']);
    };
    HomePage.prototype.openLink = function (item) {
        console.log(item);
        if (item.type === '0') {
            // Category
            console.log('open category');
            var name = this.categories.filter(function (x) { return x.id === item.link; });
            var cateName = '';
            if (name && name.length) {
                cateName = name[0].name;
            }
            var param = {
                queryParams: {
                    id: item.link,
                    name: cateName
                }
            };
            this.router.navigate(['tabs/home/sub-category'], param);
        }
        else if (item.type === '1') {
            // product
            console.log('open product');
            var param = {
                queryParams: {
                    id: item.link
                }
            };
            this.router.navigate(['tabs/categories/product'], param);
        }
        else {
            // link
            console.log('open link');
            this.iab.create(item.link, '_blank');
        }
    };
    HomePage.prototype.goToProductList = function (val) {
        var navData = {
            queryParams: {
                id: val.id,
                name: val.name
            }
        };
        this.router.navigate(['/tabs/categories/products'], navData);
    };
    HomePage.prototype.onSearchChange = function (event) {
        if (event.detail.value) {
        }
        else {
            this.products = [];
        }
    };
    HomePage.prototype.getCity = function () {
        var _this = this;
        var city = localStorage.getItem('city');
        console.log('selected city===>>', city);
        if (city && city !== null && city !== 'null') {
            var param = {
                id: city
            };
            this.api.post('cities/getById', param).subscribe(function (data) {
                console.log('selected city', data);
                if (data && data.status === 200 && data.data && data.data.length) {
                    var selectedCity = data.data.filter(function (x) { return x.status === '1'; });
                    console.log('selected city=======================', selectedCity);
                    if (selectedCity && selectedCity.length) {
                        _this.util.city = selectedCity[0];
                        _this.chMod.detectChanges();
                    }
                    else {
                        localStorage.removeItem('city');
                    }
                }
                else {
                    localStorage.removeItem('city');
                }
            }, function (error) {
                console.log(error);
                localStorage.removeItem('city');
            });
        }
    };
    HomePage.prototype.openStore = function (item) {
        console.log('open store', item);
        var param = {
            queryParams: {
                id: item.uid,
                name: item.name
            }
        };
        this.router.navigate(['tabs/home/store'], param);
    };
    HomePage.prototype.topicked = function () {
        this.router.navigate(['/tabs/home/top-picked']);
    };
    HomePage.prototype.topStores = function () {
        this.router.navigate(['top-stores']);
    };
    HomePage.prototype.newStores = function () {
        this.router.navigate(['new-stores']);
    };
    HomePage.prototype.allOffers = function () {
        this.router.navigate(['all-offers']);
    };
    HomePage.prototype.search = function (event) {
        var _this = this;
        console.log(event);
        if (event && event !== '') {
            var param = {
                id: localStorage.getItem('city'),
                search: event
            };
            this.util.show();
            this.api.post('products/getSearchItems', param).subscribe(function (data) {
                console.log('search data==>', data);
                _this.util.hide();
                if (data && data.status === 200 && data.data) {
                    _this.products = data.data;
                }
            }, function (error) {
                console.log('error in searhc filess--->>', error);
                _this.util.hide();
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            });
        }
    };
    HomePage.prototype.variant = function (item, indeX) {
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
                                            console.log('before', _this.topProducts[indeX].variant);
                                            _this.topProducts[indeX].variant = data;
                                            console.log('after', _this.topProducts[indeX].variant);
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
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
