"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
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
var router_1 = require("@angular/router");
var auth_guard_1 = require("./guard/auth.guard");
var city_guard_1 = require("./CityGuard/city.guard");
var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/tabs/tabs.module'); }).then(function (m) { return m.TabsPageModule; }); },
        canActivate: [city_guard_1.CityGuard]
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/home/home.module'); }).then(function (m) { return m.HomePageModule; }); }
    },
    {
        path: 'categories',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/categories/categories.module'); }).then(function (m) { return m.CategoriesPageModule; }); }
    },
    {
        path: 'store',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/store/store.module'); }).then(function (m) { return m.StorePageModule; }); }
    },
    {
        path: 'product',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/product/product.module'); }).then(function (m) { return m.ProductPageModule; }); }
    },
    {
        path: 'cart',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/cart/cart.module'); }).then(function (m) { return m.CartPageModule; }); },
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'account',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/account/account.module'); }).then(function (m) { return m.AccountPageModule; }); }
    },
    {
        path: 'orders',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/orders/orders.module'); }).then(function (m) { return m.OrdersPageModule; }); }
    },
    {
        path: 'order-details',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/order-details/order-details.module'); }).then(function (m) { return m.OrderDetailsPageModule; }); }
    },
    {
        path: 'register',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/register/register.module'); }).then(function (m) { return m.RegisterPageModule; }); }
    },
    {
        path: 'reset-password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/reset-password/reset-password.module'); }).then(function (m) { return m.ResetPasswordPageModule; }); }
    },
    {
        path: 'languages',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/languages/languages.module'); }).then(function (m) { return m.LanguagesPageModule; }); }
    },
    {
        path: 'about',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/about/about.module'); }).then(function (m) { return m.AboutPageModule; }); }
    },
    {
        path: 'payment',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/payment/payment.module'); }).then(function (m) { return m.PaymentPageModule; }); }
    },
    {
        path: 'inbox',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/inbox/inbox.module'); }).then(function (m) { return m.InboxPageModule; }); }
    },
    {
        path: 'sub-category',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/sub-category/sub-category.module'); }).then(function (m) { return m.SubCategoryPageModule; }); }
    },
    {
        path: 'products',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/products/products.module'); }).then(function (m) { return m.ProductsPageModule; }); }
    },
    {
        path: 'profile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/profile/profile.module'); }).then(function (m) { return m.ProfilePageModule; }); }
    },
    {
        path: 'cities',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/cities/cities.module'); }).then(function (m) { return m.CitiesPageModule; }); }
    },
    {
        path: 'offers',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/offers/offers.module'); }).then(function (m) { return m.OffersPageModule; }); }
    },
    {
        path: 'top-picked',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/top-picked/top-picked.module'); }).then(function (m) { return m.TopPickedPageModule; }); }
    },
    {
        path: 'top-stores',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/top-stores/top-stores.module'); }).then(function (m) { return m.TopStoresPageModule; }); }
    },
    {
        path: 'all-offers',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/all-offers/all-offers.module'); }).then(function (m) { return m.AllOffersPageModule; }); }
    },
    {
        path: 'address',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/address/address.module'); }).then(function (m) { return m.AddressPageModule; }); }
    },
    {
        path: 'add-address',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/add-address/add-address.module'); }).then(function (m) { return m.AddAddressPageModule; }); }
    },
    {
        path: 'delivery-options',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/delivery-options/delivery-options.module'); }).then(function (m) { return m.DeliveryOptionsPageModule; }); }
    },
    {
        path: 'stripe-payments',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/stripe-payments/stripe-payments.module'); }).then(function (m) { return m.StripePaymentsPageModule; }); }
    },
    {
        path: 'add-card',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/add-card/add-card.module'); }).then(function (m) { return m.AddCardPageModule; }); }
    },
    {
        path: 'favorite',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/favorite/favorite.module'); }).then(function (m) { return m.FavoritePageModule; }); }
    },
    {
        path: 'contacts',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/contacts/contacts.module'); }).then(function (m) { return m.ContactsPageModule; }); }
    },
    {
        path: 'order-rating',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/order-rating/order-rating.module'); }).then(function (m) { return m.OrderRatingPageModule; }); }
    },
    {
        path: 'store-rating',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/store-rating/store-rating.module'); }).then(function (m) { return m.StoreRatingPageModule; }); }
    },
    {
        path: 'product-rating',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/product-rating/product-rating.module'); }).then(function (m) { return m.ProductRatingPageModule; }); }
    },
    {
        path: 'rating-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/rating-list/rating-list.module'); }).then(function (m) { return m.RatingListPageModule; }); }
    },
    {
        path: 'chats',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/chats/chats.module'); }).then(function (m) { return m.ChatsPageModule; }); }
    },
    {
        path: 'driver-rating',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/driver-rating/driver-rating.module'); }).then(function (m) { return m.DriverRatingPageModule; }); }
    },
    {
        path: 'faqs',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/faqs/faqs.module'); }).then(function (m) { return m.FaqsPageModule; }); }
    },
    {
        path: 'help',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/help/help.module'); }).then(function (m) { return m.HelpPageModule; }); }
    },
    {
        path: 'sort',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/sort/sort.module'); }).then(function (m) { return m.SortPageModule; }); }
    },
    {
        path: 'verify',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/verify/verify.module'); }).then(function (m) { return m.VerifyPageModule; }); }
    },
    {
        path: 'direction',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/direction/direction.module'); }).then(function (m) { return m.DirectionPageModule; }); }
    },
    {
        path: 'success',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./success/success.module'); }).then(function (m) { return m.SuccessPageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
