"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountPage = void 0;
var core_1 = require("@angular/core");
var AccountPage = /** @class */ (function () {
    function AccountPage(router, navCtrl, util, api, cart) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.cart = cart;
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.back = function () {
        this.navCtrl.back();
    };
    AccountPage.prototype.openMenu = function () {
        this.util.openMenu();
    };
    AccountPage.prototype.ditProfile = function () {
        this.router.navigate(['/edit-profile']);
    };
    AccountPage.prototype.logout = function () {
        localStorage.clear();
        this.cart.cart = [];
        this.cart.itemId = [];
        this.cart.totalPrice = 0;
        this.cart.grandTotal = 0;
        this.cart.coupon = null;
        this.cart.discount = null;
        this.util.clearKeys('cart');
        this.navCtrl.navigateRoot(['/tabs/home']);
    };
    AccountPage.prototype.orders = function () {
        this.router.navigate(['/tabs/orders']);
    };
    AccountPage.prototype.goToFav = function () {
        this.router.navigate(['/favorite']);
    };
    AccountPage.prototype.goToMethods = function () {
        this.router.navigate(['/payment-method']);
    };
    AccountPage.prototype.goToHistory = function () {
        this.router.navigate(['/payment-history']);
    };
    AccountPage.prototype.goToAbout = function () {
        this.router.navigate(['/tabs/account/about']);
    };
    AccountPage.prototype.editProfile = function () {
        this.router.navigate(['/tabs/account/profile']);
    };
    AccountPage.prototype.getName = function () {
        return this.util.userInfo && this.util.userInfo.first_name ? this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'Groceryee';
    };
    AccountPage.prototype.getEmail = function () {
        return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@groceryee.com';
    };
    AccountPage.prototype.getProfile = function () {
        return this.util.userInfo && this.util.userInfo.cover ? this.api.mediaURL + this.util.userInfo.cover : 'assets/imgs/user.png';
    };
    AccountPage.prototype.goLangs = function () {
        this.router.navigate(['languages']);
    };
    AccountPage.prototype.goToAddress = function () {
        var param = {
            queryParams: {
                from: 'account'
            }
        };
        this.router.navigate(['address'], param);
    };
    AccountPage.prototype.goToContact = function () {
        this.router.navigate(['tabs/account/contacts']);
    };
    AccountPage.prototype.reset = function () {
        this.router.navigate(['reset-password']);
    };
    AccountPage.prototype.goToChats = function () {
        this.router.navigate(['chats']);
    };
    AccountPage.prototype.goFaqs = function () {
        this.router.navigate(['tabs/account/faqs']);
    };
    AccountPage.prototype.goHelp = function () {
        this.router.navigate(['tabs/account/help']);
    };
    AccountPage = __decorate([
        core_1.Component({
            selector: 'app-account',
            templateUrl: './account.page.html',
            styleUrls: ['./account.page.scss']
        })
    ], AccountPage);
    return AccountPage;
}());
exports.AccountPage = AccountPage;
