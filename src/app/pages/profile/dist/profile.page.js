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
exports.ProfilePage = void 0;
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
var ProfilePage = /** @class */ (function () {
    function ProfilePage(api, util, navCtrl, actionSheetController, camera) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.cover = '';
        this.edit_flag = true;
        console.log(localStorage.getItem('uid'));
        this.getProfile();
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        var param = {
            id: localStorage.getItem('uid')
        };
        this.util.show();
        this.api.post('users/getById', param).subscribe(function (data) {
            _this.util.hide();
            console.log('user info=>', data);
            if (data && data.status === 200 && data.data && data.data.length) {
                var info = data.data[0];
                _this.util.userInfo = info;
                _this.fname = info.first_name;
                _this.lname = info.last_name;
                _this.mobile = info.mobile;
                _this.gender = "";
                _this.cover = info.cover;
                _this.email = "";
            }
        }, function (error) {
            console.log(error);
            _this.util.hide();
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ProfilePage.prototype.updateProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: this.util.getString('Choose from'),
                            buttons: [{
                                    text: this.util.getString('Camera'),
                                    icon: 'camera',
                                    handler: function () {
                                        console.log('camera clicked');
                                        _this.upload('camera');
                                    }
                                }, {
                                    text: this.util.getString('Gallery'),
                                    icon: 'images',
                                    handler: function () {
                                        console.log('gallery clicked');
                                        _this.upload('gallery');
                                    }
                                }, {
                                    text: this.util.getString('Cancel'),
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.update = function () {
        var _this = this;
        if (!this.fname || this.fname === '' || !this.lname || this.lname === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
        }
        var param = {
            first_name: this.fname,
            last_name: this.lname,
            email: "",
            gender: "",
            cover: this.cover,
            mobile: this.mobile,
            id: localStorage.getItem('uid')
        };
        this.util.show(this.util.getString('updating...'));
        this.api.post('users/edit_profile', param).subscribe(function (data) {
            _this.util.hide();
            console.log(data);
            _this.getProfile();
        }, function (error) {
            _this.util.hide();
            console.log(error);
            _this.util.errorToast(_this.util.getString('Something went wrong'));
        });
    };
    ProfilePage.prototype.back = function () {
        this.navCtrl.back();
    };
    ProfilePage.prototype.upload = function (type) {
        var _this = this;
        try {
            var options = {
                quality: 100,
                targetHeight: 800,
                targetWidth: 800,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (url) {
                console.log('url->', url);
                _this.util.show('uploading');
                var alpha = {
                    img: url,
                    type: 'jpg'
                };
                console.log('parma==>', alpha);
                _this.api.nativePost('users/upload_file', alpha).then(function (data) {
                    _this.util.hide();
                    console.log('data', JSON.parse(data.data));
                    var info = JSON.parse(data.data);
                    _this.cover = info.data;
                    console.log('cover image', _this.cover);
                    var param = {
                        cover: _this.cover,
                        id: localStorage.getItem('uid')
                    };
                    _this.util.show(_this.util.getString('updating...'));
                    _this.api.post('users/edit_profile', param).subscribe(function (update) {
                        _this.util.hide();
                        console.log(update);
                    }, function (error) {
                        _this.util.hide();
                        console.log(error);
                        _this.util.errorToast(_this.util.getString('Something went wrong'));
                    });
                }, function (error) {
                    console.log(error);
                    _this.util.hide();
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                })["catch"](function (error) {
                    console.log(error);
                    _this.util.hide();
                    _this.util.errorToast(_this.util.getString('Something went wrong'));
                });
            });
        }
        catch (error) {
            console.log('error', error);
            this.util.errorToast(this.util.getString('Something went wrong'));
        }
    };
    ProfilePage = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss']
        })
    ], ProfilePage);
    return ProfilePage;
}());
exports.ProfilePage = ProfilePage;
