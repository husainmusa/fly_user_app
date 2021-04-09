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
exports.ProductPage = void 0;
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
var ngx_ionic_image_viewer_1 = require("ngx-ionic-image-viewer");
var ProductPage = /** @class */ (function () {
    function ProductPage(api, util, route, navCtrl, router, cart, modalController, alertCtrl) {
        var _this = this;
        this.api = api;
        this.util = util;
        this.route = route;
        this.navCtrl = navCtrl;
        this.router = router;
        this.cart = cart;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        // img;
        // price;
        // proDetail;
        // chipVal;
        // products;
        this.qty = 0;
        this.name = '';
        this.coverImage = '';
        this.addons = [];
        this.childrenId = [];
        this.key_features = '';
        this.disclaimer = '';
        this.subProductId = [];
        this.parent = [];
        this.relatedProduct = [];
        this.gallery = [];
        this.slideOpts = {
            slidesPerView: 1
        };
        this.slideOpts1 = {
            slidesPerView: 2.5
        };
        this.related = [];
        this.quantiy = 0;
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            if (data && data.id) {
                _this.loaded = false;
                _this.id = data.id;
                _this.getProduct();
            }
        });
    }
    ProductPage.prototype.openViewer = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ngx_ionic_image_viewer_1.ViewerModalComponent,
                            componentProps: {
                                src: url
                            },
                            cssClass: 'ion-img-viewer',
                            keyboardClose: true,
                            showBackdrop: true
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductPage.prototype.ionViewWillEnter = function () {
    };
    ProductPage.prototype.removeChild = function (parentId) {
        console.log(this.cart.cart.length, "cartlength");
        var cart = this.cart.cart;
        var cartlength = cart.length;
        for (var i = 0; i < cartlength; i++) {
            console.log(this.cart.cart.length, "cartlength inside", i);
            console.log("this cart", this.cart.cart[i]);
            var parent_id = cart[i].parent_id.split(',');
            console.log("parentid", parent_id, "id", this.cart.cart[i].id);
            for (var j = 0; j < parent_id.length; j++) {
                if (parent_id[j] == parentId) {
                    this.childrenId.push(cart[i].id);
                }
            }
        }
        this.cart.removeChild(this.childrenId);
    };
    ProductPage.prototype.getRelated = function () {
        var _this = this;
        var param = {
            id: this.subId,
            limit: 1000,
            cid: localStorage.getItem('city')
        };
        this.subProductId = [];
        this.related = [];
        this.api.post('products/getRelated', param).subscribe(function (data) {
            // for(let i = 0; i < data.data.length; i++){
            //   this.parent = data.data[i]['parent_id'].split(',');
            //   for(let j = 0; j < this.parent.length; j++){
            //     console.log(this.selectedProduct);
            //     console.log("parent", this.parent[j]);
            //     console.log("exit");
            //     if(this.parent[j] == this.selectedProduct  && this.parent[j] != 0){
            //       this.subProductId.push(data.data[i]);
            //       console.log("sub products",this.subProductId )
            //       // this.getSubQuanity(data.data[i].id);
            //       if (data.data[i].variations && data.data[i].size === '1' && data.data[i].variations !== '') {
            //         if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(data.data[i].status)) {
            //           this.variations = JSON.parse(data.data[i].variations);
            //           this.variant = 0;
            //           data.data[i]['variations'] = JSON.parse(data.data[i].variations);
            //           data.data[i]['variant'] = 0;
            //         } else {
            //           data.data[i].variations = [];
            //           data.data[i]['variations'] = [];
            //           this.variant = 1;
            //           data.data[i]['variant'] = 1;
            //         }
            //       } else {
            //         this.variations = [];
            //         this.variant = 1;
            //         this.productt['variations'] = [];
            //         this.productt['variant'] = 1;
            //       }
            //       this.checkCartItems();
            //     }   
            //   }
            // }
            console.log("subproduct", _this.subProductId);
            console.log('=>related=>', data);
            if (data && data.status === 200 && data.data && data.data.length) {
                var products = data.data;
                _this.relatedProduct = [];
                for (var i = 0; i < products.length; i++) {
                    if (products[i].parent_id == '0' || products[i].parent_id == '') {
                        _this.relatedProduct.push(products[i]);
                    }
                }
                _this.related = _this.relatedProduct.filter(function (x) { return x.id !== _this.id; });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductPage.prototype.checkCartItems = function () {
        var _this = this;
        var item = this.cart.cart.filter(function (x) { return x.id === _this.id; });
        console.log("this product", this.productt);
        console.log('cart=====>>>>>>', item);
        if (item && item.length) {
            this.quantiy = item[0].quantiy;
            if (this.productt.variations[0]) {
                this.productt.variations[0].items.forEach(function (pageElement) {
                    item[0].variations[0].items.forEach(function (cartElement) {
                        if (pageElement.id == cartElement.id) {
                            pageElement.quantity = cartElement.quantity;
                        }
                    });
                });
            }
        }
        console.log("this product after", this.productt, this.quantiy);
    };
    ProductPage.prototype.getProduct = function () {
        var _this = this;
        this.selectedProduct = this.id;
        var param = {
            id: this.id
        };
        this.api.post('products/getById', param).subscribe(function (data) {
            _this.loaded = true;
            console.log(data);
            _this.gallery = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                var info = data.data[0];
                _this.productt = info;
                _this.productt['quantiy'] = 0;
                // console.log("json parsed", JSON.parse(this.productt.variations[0].items));
                _this.name = info.name;
                _this.description = info.descriptions;
                _this.subId = info.sub_cate_id;
                _this.coverImage = info.cover;
                _this.key_features = info.key_features;
                _this.disclaimer = info.disclaimer;
                _this.discount = info.discount;
                _this.exp_date = info.exp_date;
                _this.gram = info.gram;
                _this.have_gram = info.have_gram;
                _this.kg = info.kg;
                _this.have_kg = info.have_kg;
                _this.liter = info.liter;
                _this.have_liter = info.have_liter;
                _this.ml = info.ml;
                _this.have_ml = info.have_ml;
                _this.pcs = info.pcs;
                _this.have_pcs = info.have_pcs;
                _this.in_offer = info.in_offer;
                _this.in_stoke = info.in_stoke;
                _this.is_single = info.is_single;
                _this.veg = info.kind;
                _this.realPrice = parseFloat(info.original_price);
                _this.sellPrice = parseFloat(info.sell_price);
                _this.status = info.status;
                _this.rate = info.rating;
                _this.totalRating = info.total_rating;
                _this.storeId = info.store_id;
                _this.storeName = info.s_name;
                _this.gallery.push(_this.coverImage);
                _this.size = info.size;
                _this.quantiy = info.quantiy;
                if (info.variations && info.size === '1' && info.variations !== '') {
                    if ((function (x) { try {
                        JSON.parse(x);
                        return true;
                    }
                    catch (e) {
                        return false;
                    } })(info.variations)) {
                        _this.variations = JSON.parse(info.variations);
                        _this.variant = 0;
                        _this.productt['variations'] = JSON.parse(info.variations);
                        _this.productt['variant'] = 0;
                    }
                    else {
                        info.variations = [];
                        _this.productt['variations'] = [];
                        _this.variant = 1;
                        _this.productt['variant'] = 1;
                    }
                }
                else {
                    _this.variations = [];
                    _this.variant = 1;
                    _this.productt['variations'] = [];
                    _this.productt['variant'] = 1;
                }
                if (_this.productt.variations[0]) {
                    if (_this.productt.variations[0]) {
                        _this.productt.variations[0].items.forEach(function (element) {
                            element['quantity'] = 0;
                            element.id = _this.id + '_' + element.title;
                        });
                    }
                }
                // console.log("producttttt", this.productt.variations[0].items);
                // this.addOns();
                _this.checkCartItems();
                if (info.images) {
                    var images = JSON.parse(info.images);
                    console.log('images======>>>', images);
                    if (images[0]) {
                        _this.gallery.push(images[0]);
                    }
                    if (images[1]) {
                        _this.gallery.push(images[1]);
                    }
                    if (images[2]) {
                        _this.gallery.push(images[2]);
                    }
                    if (images[3]) {
                        _this.gallery.push(images[3]);
                    }
                    if (images[4]) {
                        _this.gallery.push(images[4]);
                    }
                    if (images[5]) {
                        _this.gallery.push(images[5]);
                    }
                }
                _this.getRelated();
            }
        }, function (error) {
            console.log(error);
            _this.loaded = true;
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ProductPage.prototype.back = function () {
        this.navCtrl.back();
    };
    ProductPage.prototype.ngOnInit = function () {
    };
    ProductPage.prototype.gotoStore = function () {
        var param = {
            queryParams: {
                id: this.storeId,
                name: this.storeName
            }
        };
        this.router.navigate(['tabs/home/store'], param);
    };
    ProductPage.prototype.add = function () {
        this.quantiy = this.quantiy + 1;
        this.cart.addQuantity(this.quantiy, this.id);
    };
    ProductPage.prototype.remove = function () {
        if (this.quantiy === 1) {
            if (this.productt.variations[0]) {
                this.productt.variations[0].items.forEach(function (element) {
                    element.quantity = 0;
                });
            }
            this.quantiy = 0;
            this.cart.removeItem(this.id);
        }
        else {
            this.quantiy = this.quantiy - 1;
            this.cart.addQuantity(this.quantiy, this.id);
        }
    };
    ProductPage.prototype.onShare = function () {
    };
    ProductPage.prototype.onFav = function () {
        var _this = this;
        if (this.util.favIds.includes(this.id)) {
            console.log('remove this');
            this.util.removeFav(this.id);
            console.log('after removed', this.util.favIds);
            console.log('edit');
            var param = {
                id: localStorage.getItem('uid'),
                ids: this.util.favIds.join()
            };
            this.util.haveFav = true;
            console.log('parama', param);
            this.api.post('favourite/editList', param).subscribe(function (data) {
                console.log('save response', data);
                if (data && data.status !== 200) {
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                }
            }, function (error) {
                console.log('error on save', error);
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            });
        }
        else {
            console.log('add new');
            this.util.setFav(this.id);
            console.log('after added', this.util.favIds);
            if (this.util.haveFav) {
                console.log('edit');
                var param = {
                    id: localStorage.getItem('uid'),
                    ids: this.util.favIds.join()
                };
                this.util.haveFav = true;
                console.log('parama', param);
                this.api.post('favourite/editList', param).subscribe(function (data) {
                    console.log('save response', data);
                    if (data && data.status !== 200) {
                        _this.util.errorToast(_this.util.getString('Something went wrong'));
                    }
                }, function (error) {
                    console.log('error on save', error);
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                });
            }
            else {
                console.log('save');
                var param = {
                    uid: localStorage.getItem('uid'),
                    ids: this.util.favIds.join()
                };
                this.util.haveFav = true;
                console.log('parama', param);
                this.api.post('favourite/save', param).subscribe(function (data) {
                    console.log('save response', data);
                    if (data && data.status !== 200) {
                        _this.util.errorToast(_this.util.getString('Something went wrong'));
                    }
                }, function (error) {
                    console.log('error on save', error);
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                });
            }
        }
    };
    ProductPage.prototype.singleProduct = function (item) {
        var param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['/tabs/categories/product'], param);
    };
    ProductPage.prototype.productRating = function () {
        var param = {
            queryParams: {
                id: this.id,
                name: this.name,
                type: 'product'
            }
        };
        this.router.navigate(['/tabs/home/ratings'], param);
    };
    // async variants() {
    //   const allData = [];
    //   if (this.variations !== '' && this.variations.length > 0 && this.variations[0].items.length > 0) {
    //     console.log('->', this.variations[0].items);
    //     this.variations[0].items.forEach((element, index) => {
    //       console.log('OK');
    //       let title = '';
    //       if (this.util.cside === 'left') {
    //         const price = this.variations && this.variations[0] &&
    //           this.variations[0].items[index] &&
    //           this.variations[0].items[index].discount ? this.variations[0].items[index].discount :
    //           this.variations[0].items[index].price;
    //         title = element.title + ' - ' + this.util.currecny + ' ' + price;
    //       } else {
    //         const price = this.variations && this.variations[0] && this.variations[0].items[index] &&
    //           this.variations[0].items[index].discount ? this.variations[0].items[index].discount :
    //           this.variations[0].items[index].price;
    //         title = element.title + ' - ' + price + ' ' + this.util.currecny;
    //       }
    //       const data = {
    //         name: element.title,
    //         type: 'radio',
    //         label: title,
    //         value: index,
    //         checked: this.variant === index
    //       };
    //       allData.push(data);
    //     });
    //     console.log('All Data', allData);
    //     const alert = await this.alertCtrl.create({
    //       header: this.name,
    //       inputs: allData,
    //       buttons: [
    //         {
    //           text: this.util.getString('Cancel'),
    //           role: 'cancel',
    //           cssClass: 'secondary',
    //           handler: () => {
    //             console.log('Confirm Cancel');
    //           }
    //         }, {
    //           text: this.util.getString('Ok'),
    //           handler: (data) => {
    //             console.log('Confirm Ok', data);
    //             console.log('before', this.variant);
    //             this.variant = data;
    //             console.log('after', this.variant);
    //             this.productt['variant'] = data;
    //           }
    //         }
    //       ]
    //     });
    //     await alert.present();
    //   } else {
    //     console.log('none');
    //   }
    // }
    // addOns() {
    //   this.addons = [];
    //   if (this.variations !== '' && this.variations.length > 0 && this.variations[0].items.length > 0) {
    //     console.log('->', this.variations[0].items);
    //     this.variations[0].items.forEach((element) => {
    //       this.addons.push(element);
    //       console.log("addon", this.addons);
    //     });
    //   } else {
    //     console.log('none');
    //   }
    // }
    ProductPage.prototype.addToCart = function () {
        this.quantiy = 1;
        this.productt.quantiy = 1;
        // console.log("this product", this.productt, this.variations[0].items);
        this.cart.addItem(this.productt);
    };
    ProductPage.prototype.addSubToCart = function (id) {
        var _this = this;
        this.subId = id;
        var param = {
            id: this.subId
        };
        this.api.post('products/getById', param).subscribe(function (data) {
            console.log(data), "data";
            if (data && data.status === 200 && data.data && data.data.length) {
                var info = data.data[0];
                _this.subProduct = info;
                _this.subQuantity = 1;
                _this.subProduct.quantiy = 1;
                console.log("sub quantity", _this.subProduct.quantiy);
                _this.cart.subAddItem(_this.subProduct, id);
            }
        });
    };
    ProductPage.prototype.addAddOn = function (item, parent) {
        var _this = this;
        // this.parentId = id;
        // const param = {
        //   id: this.parentId
        // };
        console.log("item", item, parent);
        var id = item.id;
        this.productt.variations[0].items.forEach(function (element) {
            if (element.id == id) {
                console.log("element id", element.id, id);
                element.quantity = element.quantity + 1;
                console.log(_this.variations[0].items);
                _this.cart.addAddOn(id, parent, element.quantity);
            }
        });
    };
    ProductPage.prototype.minusAddOn = function (item, parent) {
        var _this = this;
        // this.parentId = id;
        // const param = {
        //   id: this.parentId
        // };
        console.log("item", item, parent);
        var id = item.id;
        this.productt.variations[0].items.forEach(function (element) {
            if (element.id == id) {
                console.log("element id", element.id, id);
                element.quantity = element.quantity - 1;
                console.log(_this.variations[0].items);
                _this.cart.addAddOn(id, parent, element.quantity);
            }
        });
    };
    ProductPage.prototype.subAdd = function (id) {
        this.subQuantity = this.getSubQuanity(id);
        this.subQuantity = this.subQuantity + 1;
        this.cart.subAddQuantity(this.subQuantity, id);
    };
    ProductPage.prototype.subRemove = function (id) {
        this.subQuantity = this.getSubQuanity(id);
        if (this.subQuantity === 1) {
            this.subQuantity = 0;
            this.cart.removeItem(id);
        }
        else {
            this.subQuantity = this.subQuantity - 1;
            this.cart.subAddQuantity(this.subQuantity, id);
        }
    };
    ProductPage.prototype.getSubQuanity = function (id) {
        var data = this.cart.cart.filter(function (x) { return x.id === id; });
        console.log("getSubQuanity", data);
        var quantity = data[0].quantiy;
        return quantity;
    };
    ProductPage = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.page.html',
            styleUrls: ['./product.page.scss']
        })
    ], ProductPage);
    return ProductPage;
}());
exports.ProductPage = ProductPage;
