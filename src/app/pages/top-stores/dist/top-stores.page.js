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
exports.TopStoresPage = void 0;
var core_1 = require("@angular/core");
var moment = require("moment");
var TopStoresPage = /** @class */ (function () {
    function TopStoresPage(navCtrl, api, util, router) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.dummy = Array(10);
        this.dummyStores = [];
        this.stores = [];
        this.haveSearch = false;
        this.getStores();
    }
    TopStoresPage.prototype.ngOnInit = function () {
    };
    TopStoresPage.prototype.search = function () {
        this.haveSearch = !this.haveSearch;
    };
    TopStoresPage.prototype.onSearchChange = function (event) {
        if (event.detail.value) {
            this.stores = this.dummyStores.filter(function (item) {
                return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.stores = this.dummyStores;
        }
    };
    TopStoresPage.prototype.openStore = function (item) {
        console.log('open store', item);
        var param = {
            queryParams: {
                id: item.uid,
                name: item.name
            }
        };
        this.router.navigate(['tabs/home/store'], param);
    };
    TopStoresPage.prototype.getTime = function (time) {
        // const date = moment().format('DD-MM-YYYY');
        // return moment(date + ' ' + time).format('hh:mm a');
        return moment(time, ['h:mm A']).format('hh:mm A');
    };
    TopStoresPage.prototype.getStores = function () {
        var _this = this;
        var param = {
            id: localStorage.getItem('city')
        };
        this.api.post('stores/getByCity', param).subscribe(function (stores) {
            console.log('stores by city', stores);
            _this.stores = [];
            _this.dummy = [];
            if (stores && stores.status === 200 && stores.data && stores.data.length) {
                _this.stores = stores.data;
                _this.dummy = [];
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
                _this.dummyStores = _this.stores;
            }
        }, function (error) {
            console.log(error);
            _this.util.errorToast(_this.util.getString('Something went wrong'));
            _this.dummy = [];
            _this.dummyStores = [];
            _this.stores = [];
        });
    };
    TopStoresPage.prototype.isOpen = function (start, end) {
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
    TopStoresPage.prototype.back = function () {
        this.navCtrl.back();
    };
    TopStoresPage = __decorate([
        core_1.Component({
            selector: 'app-top-stores',
            templateUrl: './top-stores.page.html',
            styleUrls: ['./top-stores.page.scss']
        })
    ], TopStoresPage);
    return TopStoresPage;
}());
exports.TopStoresPage = TopStoresPage;
