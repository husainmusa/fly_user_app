"use strict";
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var pipe_module_1 = require("./pipes/pipe.module");
// plugins
var ngx_1 = require("@ionic-native/camera/ngx");
var ngx_2 = require("@ionic-native/file-transfer/ngx");
var ngx_3 = require("@ionic-native/http/ngx");
var ngx_4 = require("@ionic-native/onesignal/ngx");
var ngx_5 = require("@ionic-native/splash-screen/ngx");
var ngx_6 = require("@ionic-native/status-bar/ngx");
var storage_1 = require("@ionic/storage");
var ngx_7 = require("@ionic-native/android-permissions/ngx");
var ngx_8 = require("@ionic-native/diagnostic/ngx");
var ngx_9 = require("@ionic-native/geolocation/ngx");
var ngx_10 = require("@ionic-native/location-accuracy/ngx");
var ngx_11 = require("@ionic-native/in-app-browser/ngx");
var store_rating_module_1 = require("./pages/store-rating/store-rating.module");
var product_rating_module_1 = require("./pages/product-rating/product-rating.module");
var driver_rating_module_1 = require("./pages/driver-rating/driver-rating.module");
var forms_1 = require("@angular/forms");
var sort_module_1 = require("./pages/sort/sort.module");
var verify_module_1 = require("./pages/verify/verify.module");
var ngx_12 = require("@ionic-native/native-geocoder/ngx");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot(),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                pipe_module_1.PipeModule,
                storage_1.IonicStorageModule.forRoot(),
                store_rating_module_1.StoreRatingPageModule,
                product_rating_module_1.ProductRatingPageModule,
                driver_rating_module_1.DriverRatingPageModule,
                verify_module_1.VerifyPageModule,
                sort_module_1.SortPageModule,
                forms_1.FormsModule,
            ],
            providers: [
                ngx_6.StatusBar,
                ngx_5.SplashScreen,
                ngx_3.HTTP,
                ngx_4.OneSignal,
                ngx_1.Camera,
                ngx_2.FileTransferObject,
                ngx_7.AndroidPermissions,
                ngx_8.Diagnostic,
                ngx_9.Geolocation,
                ngx_11.InAppBrowser,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                ngx_12.NativeGeocoder,
                ngx_10.LocationAccuracy
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
