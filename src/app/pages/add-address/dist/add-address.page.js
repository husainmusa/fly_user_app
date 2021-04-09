"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddAddressPage = void 0;
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
var AddAddressPage = /** @class */ (function () {
    function AddAddressPage(geolocation, navCtrl, api, util, route, platform, androidPermissions, nativeGeocoder, locationAccuracy) {
        var _this = this;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.route = route;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.nativeGeocoder = nativeGeocoder;
        this.locationAccuracy = locationAccuracy;
        this.latitude = "";
        this.longitude = "";
        this.address = '';
        this.house = '';
        this.landmark = '';
        this.title = 'home';
        this.pincode = '';
        this.dragged = false;
        this.checkGPSPermission();
        this.route.queryParams.subscribe(function (data) {
            console.log(data);
            if (data && data.from) {
                _this.from = 'edit';
                var info = JSON.parse(data.data);
                console.log('da===>', info);
                _this.address = info.address;
                _this.house = info.house;
                _this.id = info.id;
                _this.landmark = info.landmark;
                _this.lat = info.lat;
                _this.lng = info.lng;
                _this.pincode = info.pincode;
            }
            else {
                _this.from = 'new';
            }
            _this.platform.ready().then(function () {
                var mapOptions = {
                    center: { lat: 31.92923, lng: 34.86563 },
                    zoom: 7
                };
                _this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
                // google.maps.event.addListener(this.map, "dragend", function() {
                //   alert('map dragged');
                // });
            });
            _this.GetLocation();
        });
    }
    AddAddressPage.prototype.checkGPSPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
            if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
                _this.askToTurnOnGPS();
            }
            else {
                //If not having permission ask for permission
                _this.requestGPSPermission();
            }
        }, function (err) {
            alert(err);
        });
    };
    AddAddressPage.prototype.requestGPSPermission = function () {
        var _this = this;
        console.log("inside");
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                console.log("4");
            }
            else {
                //Show 'GPS Permission Request' dialogue
                _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(function () {
                    // call method to turn on GPS
                    _this.askToTurnOnGPS();
                }, function (error) {
                    //Show alert if user click on 'No Thanks'
                    alert('requestPermission Error requesting location permissions ' + error);
                });
            }
        });
    };
    AddAddressPage.prototype.askToTurnOnGPS = function () {
        var _this = this;
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
            // When GPS Turned ON call method to get Accurate location coordinates
            _this.getLocationCoordinates();
        }, function (error) { return alert('Error requesting location permissions ' + JSON.stringify(error)); });
    };
    AddAddressPage.prototype.getLocationCoordinates = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            // this.locationCoords.accuracy = resp.coords.accuracy;
            // this.locationCoords.timestamp = resp.timestamp;
        })["catch"](function (error) {
            alert('Error getting location' + error);
        });
    };
    AddAddressPage.prototype.GetLocation = function () {
        var _this = this;
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (position) {
            if (!_this.dragged) {
                var gps = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.getAddressFromCoords(position.coords.latitude, position.coords.longitude);
                if (_this.marker == null) {
                    _this.marker = new google.maps.Marker({
                        position: gps,
                        map: _this.map,
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        title: 'my position'
                    });
                }
                else {
                    _this.marker.setPosition(gps);
                }
                _this.map.panTo(gps);
                console.log(position.coords.latitude.toString(), "position");
                _this.latitude = position.coords.latitude.toString();
                _this.longitude = position.coords.longitude.toString();
                _this.timestamp = (new Date(position.timestamp)).toString();
            }
            google.maps.event.addListener(_this.marker, 'dragend', function () {
                _this.dragged = true;
                console.log("dragged");
                _this.map.panTo(_this.marker.getPosition());
                _this.latitude = _this.map.center.lat();
                _this.longitude = _this.map.center.lng();
                _this.getAddressFromCoords(_this.map.center.lat(), _this.map.center.lng());
            });
        });
        console.log(this.latitude, this.longitude, "current Position");
        // this.geolocation.getCurrentPosition().then((resp) => {
        //   // resp.coords.latitude
        //   // resp.coords.longitude
        //  }).catch((error) => {
        //    console.log('Error getting location', error);
        //  });
        //  let watch = this.geolocation.watchPosition();
        //  watch.subscribe((data) => {
        //   // data can be a set of coordinates, or an error (if an error occurred).
        //   // data.coords.latitude
        //   // data.coords.longitude
        //  });
    };
    AddAddressPage.prototype.ngOnInit = function () {
    };
    AddAddressPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        console.log("getAddressFromCoords " + lattitude + " " + longitude);
        var options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then(function (result) {
            _this.address = "";
            var responseAddress = [];
            for (var _i = 0, _a = Object.entries(result[0]); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (value.length > 0)
                    responseAddress.push(value);
            }
            responseAddress.reverse();
            for (var _c = 0, responseAddress_1 = responseAddress; _c < responseAddress_1.length; _c++) {
                var value = responseAddress_1[_c];
                _this.address += value + ", ";
            }
            _this.address = _this.address.slice(0, -2);
        })["catch"](function (error) {
            _this.address = "Address Not Available!";
        });
        console.log("this address", this.address);
    };
    AddAddressPage.prototype.addAddress = function () {
        var _this = this;
        if (this.address === '' || this.address == 'Address Not Available!' || this.landmark === '' || this.house === '' || this.pincode === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
        }
        this.lat = this.latitude;
        this.lng = this.longitude;
        if (!this.lat || this.lat === '' || !this.lng || this.lng === '') {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode }, function (results, status) {
                console.log(results, status);
                if (status === 'OK' && results && results.length) {
                    _this.lat = results[0].geometry.location.lat();
                    _this.lng = results[0].geometry.location.lng();
                    console.log('----->', _this.lat, _this.lng);
                    console.log('call api');
                    _this.util.show();
                }
                else {
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                    return false;
                }
            });
        }
        var param = {
            uid: localStorage.getItem('uid'),
            address: this.address,
            lat: this.lat,
            lng: this.lng,
            title: this.title,
            house: this.house,
            landmark: this.landmark,
            pincode: this.pincode
        };
        this.api.post('address/save', param).subscribe(function (data) {
            _this.util.hide();
            if (data && data.status === 200) {
                _this.util.publishNewAddress();
                _this.navCtrl.back();
                _this.util.showToast('Address added', 'success', 'bottom');
            }
            else {
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.util.hide();
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    AddAddressPage.prototype.updateAddress = function () {
        var _this = this;
        if (this.address === '' || this.landmark === '' || this.house === '' || this.pincode === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
        }
        this.lat = this.latitude;
        this.lng = this.longitude;
        if (!this.lat || this.lat === '' || !this.lng || this.lng === '') {
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode }, function (results, status) {
                console.log(results, status);
                if (status === 'OK' && results && results.length) {
                    _this.lat = results[0].geometry.location.lat();
                    _this.lng = results[0].geometry.location.lng();
                    console.log('----->', _this.lat, _this.lng);
                }
                else {
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                    return false;
                }
            });
        }
        var param = {
            id: this.id,
            uid: localStorage.getItem('uid'),
            address: this.address,
            lat: this.lat,
            lng: this.lng,
            title: this.title,
            house: this.house,
            landmark: this.landmark,
            pincode: this.pincode
        };
        this.util.show();
        this.api.post('address/editList', param).subscribe(function (data) {
            _this.util.hide();
            if (data && data.status === 200) {
                _this.util.publishNewAddress();
                _this.navCtrl.back();
                _this.util.showToast('Address updated', 'success', 'bottom');
            }
            else {
                _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
        }, function (error) {
            console.log(error);
            _this.util.hide();
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    AddAddressPage.prototype.back = function () {
        this.navCtrl.back();
    };
    __decorate([
        core_1.ViewChild('map', { static: true })
    ], AddAddressPage.prototype, "mapEle");
    AddAddressPage = __decorate([
        core_1.Component({
            selector: 'app-add-address',
            templateUrl: './add-address.page.html',
            styleUrls: ['./add-address.page.scss']
        })
    ], AddAddressPage);
    return AddAddressPage;
}());
exports.AddAddressPage = AddAddressPage;
