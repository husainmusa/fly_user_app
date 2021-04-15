function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-address-add-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddAddressAddAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Add New Address')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"informations\">\n    <!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\"> \n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n       </agm-marker> \n    </agm-map> -->\n    <div class=\"upper_div\">\n\n      <div #map id=\"map\" class=\"map\"></div>\n      <div class=\"custom-map-control-button\" (click)=\"GetCrrunt()\">\n        <img class=\"custom-map-control-button-dib\" src=\"../../../assets/imgs/aim.png\" />\n\n        \n      </div>\n    </div>\n    <!-- <ion-row>\n      <ion-col text-center>\n        <ion-button (click)=\"checkGPSPermission()\">\n          Request GPS Accuracy\n        </ion-button>\n      </ion-col>\n    </ion-row> -->\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('LOCATIONS')}} </ion-label>\n      <!-- <ion-input [(ngModel)]=\"address\" ></ion-input> -->\n      <ion-input [(ngModel)]=\"address\" (ionInput)=\"UpdateSearchResults()\" placeholder=\"Search for a place\"  (ionClear)=\"ClearAutocomplete()\" ></ion-input>\n    </ion-item>\n    <ion-list [hidden]=\"autocompleteItems.length == 0\">\n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n        {{ item.description }}\n      </ion-item>\n    </ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('HOUSE / FLAT NO')}} </ion-label>\n      <ion-input [(ngModel)]=\"house\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('LANDMARK')}} </ion-label>\n      <ion-input [(ngModel)]=\"landmark\"></ion-input>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('Pincode')}} </ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"pincode\"></ion-input>\n    </ion-item> -->\n    <ion-radio-group [(ngModel)]=\"title\">\n      <ion-label class=\"title\">\n        {{util.getString('SAVE AS')}}\n      </ion-label>\n      <ion-item style=\"margin-top: 20px;\">\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('HOME')}} </ion-label>\n        <ion-radio value=\"home\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('WORK')}} </ion-label>\n        <ion-radio value=\"work\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"navigate-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('OTHER')}} </ion-label>\n        <ion-radio value=\"other\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button *ngIf=\"from ==='new'\" (click)=\"addAddress()\" expand=\"block\">\n      {{util.getString('Add')}}\n    </ion-button>\n\n    <ion-button *ngIf=\"from ==='edit'\" (click)=\"updateAddress()\" expand=\"block\">\n      {{util.getString('Update')}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/add-address/add-address-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddAddressPageRoutingModule */

  /***/
  function srcAppPagesAddAddressAddAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPageRoutingModule", function () {
      return AddAddressPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _add_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _add_address_page__WEBPACK_IMPORTED_MODULE_3__["AddAddressPage"]
    }];

    var AddAddressPageRoutingModule = function AddAddressPageRoutingModule() {
      _classCallCheck(this, AddAddressPageRoutingModule);
    };

    AddAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddAddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-address/add-address.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddAddressPageModule */

  /***/
  function srcAppPagesAddAddressAddAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function () {
      return AddAddressPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-address-routing.module */
    "./src/app/pages/add-address/add-address-routing.module.ts");
    /* harmony import */


    var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddAddressPageModule = function AddAddressPageModule() {
      _classCallCheck(this, AddAddressPageModule);
    };

    AddAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddAddressPageRoutingModule"]],
      declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
    })], AddAddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-address/add-address.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddAddressAddAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.upper_div {\n  width: 100%;\n  height: 250px;\n  position: relative;\n}\n.upper_div #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n.map {\n  width: 100%;\n  height: 100%;\n}\n.informations {\n  padding: 10px;\n}\n.informations .title {\n  font-weight: bold;\n  padding: 10px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtYWRkcmVzcy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxhZGQtYWRkcmVzc1xcYWRkLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBREVGO0FDREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBREdGO0FDQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBREdGO0FDREE7RUFDSSxhQUFBO0FESUo7QUNISTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURLUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4udXBwZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51cHBlcl9kaXYgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufVxuXG4ubWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmluZm9ybWF0aW9ucyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaW5mb3JtYXRpb25zIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi51cHBlcl9kaXZ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4jbWFwX2NlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgbWFyZ2luLXRvcDogLTQxcHg7XG59XG59XG4ubWFwe1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmluZm9ybWF0aW9uc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/add-address/add-address.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddAddressPage */

  /***/
  function srcAppPagesAddAddressAddAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPage", function () {
      return AddAddressPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddAddressPage = /*#__PURE__*/function () {
      function AddAddressPage(geolocation, navCtrl, api, util, route, platform, androidPermissions, nativeGeocoder, locationAccuracy, zone, router) {
        _classCallCheck(this, AddAddressPage);

        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.route = route;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.nativeGeocoder = nativeGeocoder;
        this.locationAccuracy = locationAccuracy;
        this.zone = zone;
        this.router = router;
        this.latitude = "";
        this.longitude = "";
        this.address = '';
        this.house = '';
        this.landmark = '';
        this.title = 'home';
        this.pincode = '';
        this.dragged = false;
        this.autocompleteItems = []; // this.initializeMapInfo();
      }

      _createClass(AddAddressPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          setTimeout(function () {
            _this.initializeMapInfo(); // let marker =  new google.maps.Marker({
            //   position: { lat: this.lat, lng:  this.lng},
            //   map:  this.map,
            //   // draggable: true,
            // });
            // google.maps.event.addListener(marker, 'click', function() {
            //   console.log('draggged runnnn')
            // })

          }, 500);
        }
      }, {
        key: "initializeMapInfo",
        value: function initializeMapInfo() {
          var me = this;
          me.GoogleAutocomplete = new google.maps.places.AutocompleteService(); // this.autocomplete = { input: '' };

          me.autocompleteItems = [];
          me.checkGPSPermission();
          me.route.queryParams.subscribe(function (data) {
            console.log(data);

            if (data && data.from) {
              me.from = 'edit';
              var info = JSON.parse(data.data);
              console.log('da===>', info);
              me.address = info.address;
              me.house = info.house;
              me.id = info.id;
              me.landmark = info.landmark;
              me.lat = info.lat;
              me.lng = info.lng;
              me.latitude = info.lat;
              me.longitude = info.lng;
              me.pincode = info.pincode;
            } else {
              me.from = 'new';
            }

            me.platform.ready().then(function () {
              var mapOptions = {
                center: {
                  lat: 31.92923,
                  lng: 34.86563
                },
                zoom: 7
              };
              console.log('me.mapEle.nativeElement', me.mapEle.nativeElement);
              me.map = new google.maps.Map(me.mapEle.nativeElement, mapOptions);
              me.placesService = new google.maps.places.PlacesService(me.map.map);
              new google.maps.Marker({
                position: mapOptions.center,
                map: me.map
              }); // google.maps.event.addListener(me.map, "dragend", function() {
              //     console.log('dasd')
              // });
            });
            me.GetCrrunt();
          });
        }
      }, {
        key: "checkGPSPermission",
        value: function checkGPSPermission() {
          var _this2 = this;

          this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
              //If having permission show 'Turn On GPS' dialogue
              _this2.askToTurnOnGPS();
            } else {
              //If not having permission ask for permission
              _this2.requestGPSPermission();
            }
          }, function (err) {// alert(err);
          });
        }
      }, {
        key: "requestGPSPermission",
        value: function requestGPSPermission() {
          var _this3 = this;

          console.log("inside");
          this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
              console.log("4");
            } else {
              //Show 'GPS Permission Request' dialogue
              _this3.androidPermissions.requestPermission(_this3.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function () {
                // call method to turn on GPS
                _this3.askToTurnOnGPS();
              }, function (error) {//Show alert if user click on 'No Thanks'
                // alert('requestPermission Error requesting location permissions ')
              });
            }
          });
        }
      }, {
        key: "askToTurnOnGPS",
        value: function askToTurnOnGPS() {
          var _this4 = this;

          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this4.getLocationCoordinates();
          });
        }
      }, {
        key: "getLocationCoordinates",
        value: function getLocationCoordinates() {
          var _this5 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            _this5.latitude = resp.coords.latitude;
            _this5.longitude = resp.coords.longitude; // this.locationCoords.accuracy = resp.coords.accuracy;
            // this.locationCoords.timestamp = resp.timestamp;
          })["catch"](function (error) {//alert('Error getting location' + error);
          });
        }
      }, {
        key: "GetCrrunt",
        value: function GetCrrunt() {
          var _this6 = this;

          this.geolocation.getCurrentPosition().then(function (resp) {
            _this6.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
          })["catch"](function (error) {
            console.log('Error getting location', error);
          });
        }
      }, {
        key: "GetLocation",
        value: function GetLocation() {
          var _this7 = this;

          var watch = this.geolocation.watchPosition();
          watch.subscribe(function (position) {
            console.log('==================>', position);

            if (!_this7.dragged) {
              var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

              _this7.getAddressFromCoords(position.coords.latitude, position.coords.longitude);

              if (_this7.marker == null) {
                _this7.marker = new google.maps.Marker({
                  position: gps,
                  map: _this7.map,
                  // draggable: true,
                  animation: google.maps.Animation.DROP,
                  title: 'my position'
                });
              } else {
                _this7.marker.setPosition(gps);
              }

              _this7.map.panTo(gps);

              console.log(position.coords.latitude.toString(), "position");
              _this7.latitude = position.coords.latitude.toString();
              _this7.longitude = position.coords.longitude.toString();
              _this7.timestamp = new Date(position.timestamp).toString();
            }

            google.maps.event.addListener(_this7.marker, 'dragend', function () {
              _this7.dragged = true;
              console.log("dragged");

              _this7.map.panTo(_this7.marker.getPosition());

              _this7.latitude = _this7.map.center.lat();
              _this7.longitude = _this7.map.center.lng();

              _this7.getAddressFromCoords(_this7.map.center.lat(), _this7.map.center.lng());
            });
          });
          console.log(this.latitude, this.longitude, "current Position");
          this.geolocation.getCurrentPosition().then(function (resp) {// resp.coords.latitude
            // resp.coords.longitude
          })["catch"](function (error) {
            console.log('Error getting location', error);
          }); //  let watch = this.geolocation.watchPosition();

          watch.subscribe(function (data) {// data can be a set of coordinates, or an error (if an error occurred).
            // data.coords.latitude
            // data.coords.longitude
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// setTimeout(() =>{
          //   this.initializeMapInfo();
          //   // let marker =  new google.maps.Marker({
          //   //   position: { lat: this.lat, lng:  this.lng},
          //   //   map:  this.map,
          //   //   // draggable: true,
          //   // });
          //   // google.maps.event.addListener(marker, 'click', function() {
          //   //   console.log('draggged runnnn')
          //   // })
          // },500)
        }
      }, {
        key: "getAddressFromCoords",
        value: function getAddressFromCoords(lattitude, longitude) {
          var _this8 = this;

          console.log("getAddressFromCoords " + lattitude + " " + longitude);
          var options = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(function (result) {
            _this8.address = "";
            var responseAddress = [];
            console.log('resultsd=>', result);

            for (var _i = 0, _Object$entries = Object.entries(result[0]); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              if (value.length > 0) responseAddress.push(value);
            }

            console.log('responseAddress=======>', responseAddress);
            responseAddress.reverse();

            for (var _i2 = 0, _responseAddress = responseAddress; _i2 < _responseAddress.length; _i2++) {
              var _value = _responseAddress[_i2];
              _this8.address += _value + ", ";
            }

            _this8.address = _this8.address.slice(0, -2);
            _this8.house = responseAddress[0][0];
            _this8.landmark = responseAddress[1];
            _this8.map = new google.maps.Map(_this8.mapEle.nativeElement, {
              center: new google.maps.LatLng(lattitude, longitude),
              zoom: 16
            });
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var labelIndex = 0;
            new google.maps.Marker({
              position: {
                lat: _this8.lat,
                lng: _this8.lng
              },
              label: labels[labelIndex++ % labels.length],
              map: _this8.map
            });
          })["catch"](function (error) {
            _this8.address = "Address Not Available!";
          });
          console.log("this address", this.address);
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          var _this9 = this;

          if (this.address === '' || this.address == 'Address Not Available!' || this.landmark === '' || this.house === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
          }

          console.log('this.latitude', this.latitude);
          console.log('this.longitude', this.longitude);

          if (this.lat && this.lng) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
            }, function (results, status) {
              console.log(results, status);

              if (status === 'OK' && results && results.length) {
                _this9.lat = results[0].geometry.location.lat();
                _this9.lng = results[0].geometry.location.lng();
                _this9.latitude = _this9.lat;
                _this9.longitude = _this9.lng;
                var param = {
                  uid: localStorage.getItem('uid'),
                  address: _this9.address,
                  lat: _this9.lat,
                  lng: _this9.lng,
                  title: _this9.title,
                  house: _this9.house,
                  landmark: _this9.landmark,
                  pincode: _this9.pincode
                };

                _this9.util.show();

                _this9.api.post('address/save', param).subscribe(function (data) {
                  _this9.util.hide();

                  if (data && data.status === 200) {
                    _this9.util.publishNewAddress(); // this.zone.run(() => {
                    //   this.router.navigate(['/address'])
                    //   this.navCtrl.back();
                    // })


                    _this9.router.navigate(['/address']);

                    _this9.util.showToast('Address added', 'success', 'bottom');

                    _this9.util.hide();
                  } else {
                    _this9.util.errorToast(_this9.util.getString('Something went wrong'));

                    _this9.util.hide();
                  }
                }, function (error) {
                  console.log(error);

                  _this9.util.hide();

                  _this9.util.errorToast(_this9.util.getString('Something went wrong'));
                });
              } else {
                _this9.util.errorToast(_this9.util.getString('Something went wrong'));

                return false;
              }
            });
          } else {
            this.util.errorToast(this.util.getString('Something went wrong'));
            console.log('elas===lat=>', this.lat);
            console.log('elas===lng=>', this.lng);
          }
        }
      }, {
        key: "updateAddress",
        value: function updateAddress() {
          var _this10 = this;

          if (this.address === '' || this.landmark === '' || this.house === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
          }

          this.lat = this.latitude;
          this.lng = this.longitude;

          if (this.lat && this.lng) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
            }, function (results, status) {
              // console.log('=======results===status==>',results, status);
              if (status === 'OK' && results && results.length) {
                _this10.lat = results[0].geometry.location.lat();
                _this10.lng = results[0].geometry.location.lng();
                _this10.latitude = _this10.lat;
                _this10.longitude = _this10.lng;
                var param = {
                  id: _this10.id,
                  uid: localStorage.getItem('uid'),
                  address: _this10.address,
                  lat: _this10.lat,
                  lng: _this10.lng,
                  title: _this10.title,
                  house: _this10.house,
                  landmark: _this10.landmark,
                  pincode: _this10.pincode
                };

                _this10.util.show();

                _this10.api.post('address/editList', param).subscribe(function (data) {
                  _this10.util.hide();

                  if (data && data.status === 200) {
                    _this10.util.publishNewAddress(); // this.zone.run(() => {
                    //   this.router.navigate(['/address'])
                    //  // this.navCtrl.back();
                    // })


                    _this10.router.navigate(['/address']);

                    _this10.util.showToast('Address updated', 'success', 'bottom');

                    _this10.util.hide();
                  } else {
                    _this10.util.errorToast(_this10.util.getString('Something went wrong'));

                    _this10.util.hide();
                  }
                }, function (error) {
                  console.log(error);

                  _this10.util.hide();

                  _this10.util.errorToast(_this10.util.getString('Something went wrong'));
                });
              } else {
                _this10.util.errorToast(_this10.util.getString('Something went wrong'));

                return false;
              }
            });
          } else {
            this.util.errorToast(this.util.getString('Something went wrong'));
          }
        }
      }, {
        key: "back",
        value: function back() {
          // this.zone.run(() => {
          //   this.navCtrl.back();
          // })
          this.router.navigate(['/address']);
        } //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.

      }, {
        key: "UpdateSearchResults",
        value: function UpdateSearchResults() {
          var _this11 = this;

          if (this.address == '') {
            this.autocompleteItems = [];
            return;
          }

          this.GoogleAutocomplete.getPlacePredictions({
            input: this.address,
            language: 'he-IL'
          }, function (predictions, status) {
            _this11.autocompleteItems = [];

            _this11.zone.run(function () {
              predictions.forEach(function (prediction) {
                _this11.autocompleteItems.push(prediction);
              });
            });
          });
        }
      }, {
        key: "SelectSearchResult",
        value: function SelectSearchResult(item) {
          var _this12 = this;

          console.log(item);
          this.placeid = item.place_id;
          this.address = item.description;
          this.autocompleteItems = [];
          this.house = item.structured_formatting.main_text;
          this.landmark = item.structured_formatting.secondary_text;
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
          }, function (results, status) {
            // console.log('============selected result====>>>>>>>>>>>>>>',results, status);
            if (status === 'OK' && results && results.length) {
              _this12.lat = results[0].geometry.location.lat();
              _this12.lng = results[0].geometry.location.lng();
              var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              var labelIndex = 0; // console.log('this.lat==============>',this.lat)
              // console.log('this.lng==============>',this.lng)

              _this12.map = new google.maps.Map(_this12.mapEle.nativeElement, {
                center: new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()),
                zoom: 16
              });
              new google.maps.Marker({
                position: {
                  lat: _this12.lat,
                  lng: _this12.lng
                },
                label: labels[labelIndex++ % labels.length],
                map: _this12.map
              });
            }
          });
        }
      }]);

      return AddAddressPage;
    }();

    AddAddressPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
      }, {
        type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_9__["LocationAccuracy"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddAddressPage.prototype, "mapEle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pleaseConnect'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddAddressPage.prototype, "pleaseConnect", void 0);
    AddAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-address',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-address.page.scss */
      "./src/app/pages/add-address/add-address.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_9__["LocationAccuracy"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], AddAddressPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-address-add-address-module-es5.js.map