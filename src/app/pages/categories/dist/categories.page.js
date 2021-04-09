"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoriesPage = void 0;
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
var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(util, cat, router, api, navCtrl) {
        this.util = util;
        this.cat = cat;
        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.categories = [];
        this.dummy = Array(20);
        this.getCates();
    }
    CategoriesPage.prototype.ngOnInit = function () {
    };
    CategoriesPage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    CategoriesPage.prototype.back = function () {
        this.navCtrl.back();
    };
    CategoriesPage.prototype.getCates = function () {
        var _this = this;
        this.categories = [];
        this.dummy = Array(20);
        this.api.get('categories').subscribe(function (datas) {
            _this.dummy = [];
            if (datas && datas.data && datas.data.length) {
                datas.data.forEach(function (element) {
                    if (element.status === '1') {
                        var info = {
                            id: element.id,
                            name: element.name,
                            cover: element.cover,
                            subCates: []
                        };
                        _this.categories.push(info);
                    }
                });
            }
            // this.api.get('subcate').subscribe((subCates: any) => {
            //   console.log('sub cates', subCates);
            //   if (subCates && subCates.status === 200 && subCates.data && subCates.data.length) {
            //     this.categories.forEach((element, i) => {
            //       subCates.data.forEach(sub => {
            //         if (sub.status === '1' && element.id === sub.cate_id) {
            //           this.categories[i].subCates.push(sub);
            //         }
            //       });
            //     });
            //     console.log('=>>', this.categories);
            //   }
            // }, error => {
            //   console.log(error);
            //   this.util.errorToast(this.util.getString('Something went wrong'));
            // });
        }, function (error) {
            console.log(error);
            _this.util.errorToast(_this.util.getString('Something went wrong'));
            _this.dummy = [];
        });
    };
    CategoriesPage.prototype.change = function (id) {
        if (this.selectedIndex === id) {
            this.selectedIndex = '';
        }
        else {
            this.selectedIndex = id;
        }
    };
    CategoriesPage.prototype.goToProductList = function (val) {
        this.subIndex = val.id;
        var navData = {
            queryParams: {
                id: val.id,
                name: val.name
            }
        };
        this.router.navigate(['/tabs/categories/products'], navData);
    };
    CategoriesPage = __decorate([
        core_1.Component({
            selector: 'app-categories',
            templateUrl: './categories.page.html',
            styleUrls: ['./categories.page.scss']
        })
    ], CategoriesPage);
    return CategoriesPage;
}());
exports.CategoriesPage = CategoriesPage;
