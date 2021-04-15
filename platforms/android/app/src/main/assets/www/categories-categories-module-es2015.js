(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Categories')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n\n<ion-content class=\"ion-padding\" *ngIf=\"!util.appClosed\">\n  <ion-item *ngFor=\"let item of dummy\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <div class=\"main\" *ngIf=\"categories?.length && !dummy?.length\">\n\n    <div class=\"flex_main\" *ngFor=\"let item of categories\">\n      <div class=\"flex_div\" (click)=\"goToProductList(item)\">\n        <img [src]=\"api.mediaURL+ item.cover\" alt=\"\" class=\"cateIcon\">\n        <div class=\"detail_div\">\n          <ion-label class=\"title_name\" [class.boldFont]=\"selectedIndex === item.id\">{{item.name}}</ion-label>\n        </div>\n        <!-- <ion-icon *ngIf=\"util.direction == 'rtl'\" name=\"chevron-down-outline\" class=\"arrow\" style=\"left: 20px; right: unset;\"></ion-icon>\n        <ion-icon *ngIf=\"util.direction == 'ltr'\" name=\"chevron-down-outline\" class=\"arrow\"></ion-icon> -->\n      </div>\n\n      <!-- <div class=\"details\" *ngIf=\"selectedIndex === item.id\">\n        <div class=\"inlnes\" *ngFor=\"let sub of item.subCates\" (click)=\"goToProductList(sub)\">\n          <ion-label class=\"titles\" [class.boldFont]=\"subIndex === sub.id\">{{sub.name}}</ion-label>\n        </div>\n      </div> -->\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/categories/categories-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/pages/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/pages/categories/categories.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div ion-grid {\n  padding: 0;\n}\n.main_content_div ion-grid ion-col {\n  text-align: center;\n}\n.main_content_div ion-grid ion-col .cat_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main_content_div ion-grid ion-col img {\n  height: 80px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  width: 100%;\n}\n.main_content_div ion-grid ion-col .lbl {\n  margin: 10px 0px;\n}\n.main {\n  margin-bottom: 10px;\n  padding-bottom: 70px;\n}\n.main ion-label {\n  display: block;\n}\n.main .flex_main {\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);\n  background: white;\n  border-radius: 12px;\n  margin-bottom: 10px;\n}\n.main .flex_main .flex_div {\n  display: flex;\n  height: 56px;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  position: relative;\n}\n.main .flex_main .flex_div .cateIcon {\n  height: 50px;\n  width: 50px;\n}\n.main .flex_main .flex_div .detail_div {\n  margin-left: 20px;\n}\n.main .flex_main .flex_div .detail_div .title_name {\n  font-size: 14px;\n}\n.main .flex_main .flex_div .detail_div .boldFont {\n  font-weight: bold;\n}\n.main .flex_main .flex_div .detail_div .time {\n  font-size: 12px;\n  color: #707070;\n}\n.main .flex_main .flex_div ion-icon {\n  position: absolute;\n  right: 20px;\n  color: #3D4148;\n  font-size: 20px;\n}\n.main .name {\n  margin: 0px;\n  font-size: 18px;\n  color: black;\n}\n.main .time {\n  margin: 5px 0px 0px 0px;\n  font-size: 15px;\n  color: gray;\n}\n.main .drop {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main .details {\n  padding: 10px;\n}\n.main .details .inlnes {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: gray;\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n.main .details .inlnes .boldFont {\n  font-weight: bold;\n}\n.main .details .inlnes ion-label {\n  font-size: 14px;\n  color: #575D67;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxjYXRlZ29yaWVzXFxjYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FERUo7QUNESTtFQUNJLGNBQUE7QURHUjtBQ0FJO0VBQ0ksVUFBQTtBREVSO0FDQVE7RUFDSSxrQkFBQTtBREVaO0FDRFk7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QURHaEI7QUNEWTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBREdoQjtBQ0RZO0VBQ0ksZ0JBQUE7QURHaEI7QUNHQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QURBSjtBQ0NJO0VBQ0UsY0FBQTtBRENOO0FDRUk7RUFDSSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBREFSO0FDRVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEQVo7QUNDWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FEQ2hCO0FDQ1k7RUFDSSxpQkFBQTtBRENoQjtBQ0FnQjtFQUNJLGVBQUE7QURFcEI7QUNBZ0I7RUFDSSxpQkFBQTtBREVwQjtBQ0FnQjtFQUNFLGVBQUE7RUFDQSxjQUFBO0FERWxCO0FDQ1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRENoQjtBQ01JO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FESlI7QUNPSTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURMUjtBQ1FJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRE5SO0FDU0k7RUFDSSxhQUFBO0FEUFI7QUNRUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBRE5aO0FDT1k7RUFDSSxpQkFBQTtBRExoQjtBQ09ZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURMZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWdyaWQgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1jb2wgLmNhdF9kaXYge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tZ3JpZCBpb24tY29sIGltZyB7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWdyaWQgaW9uLWNvbCAubGJsIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLm1haW4ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbi5tYWluIGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW4gLmZsZXhfbWFpbiB7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbiAuZmxleF9tYWluIC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbiAuZmxleF9tYWluIC5mbGV4X2RpdiAuY2F0ZUljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLm1haW4gLmZsZXhfbWFpbiAuZmxleF9kaXYgLmRldGFpbF9kaXYge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tYWluIC5mbGV4X21haW4gLmZsZXhfZGl2IC5kZXRhaWxfZGl2IC50aXRsZV9uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW4gLmZsZXhfbWFpbiAuZmxleF9kaXYgLmRldGFpbF9kaXYgLmJvbGRGb250IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbiAuZmxleF9tYWluIC5mbGV4X2RpdiAuZGV0YWlsX2RpdiAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG4ubWFpbiAuZmxleF9tYWluIC5mbGV4X2RpdiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjM0Q0MTQ4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubWFpbiAubmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tYWluIC50aW1lIHtcbiAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbiAuZHJvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4gLmRldGFpbHMge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW4gLmRldGFpbHMgLmlubG5lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ubWFpbiAuZGV0YWlscyAuaW5sbmVzIC5ib2xkRm9udCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW4gLmRldGFpbHMgLmlubG5lcyBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTc1RDY3O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlvbi1ncmlke1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAuY2F0X2RpdntcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmx7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1haW57XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmZsZXhfbWFpbntcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAuZmxleF9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAuY2F0ZUljb257XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRldGFpbF9kaXZ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgLnRpdGxlX25hbWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvbGRGb250e1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWV7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzRDQxNDg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICAubmFtZXtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIC50aW1lIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuXG4gICAgLmRyb3B7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyIDtcbiAgICB9XG5cbiAgICAuZGV0YWlsc3tcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLmlubG5lc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC5ib2xkRm9udHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICM1NzVENjc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/categories/categories.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let CategoriesPage = class CategoriesPage {
    constructor(util, cat, router, api, navCtrl) {
        this.util = util;
        this.cat = cat;
        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.categories = [];
        this.dummy = Array(20);
        this.getCates();
    }
    ngOnInit() {
    }
    openMenu() {
        this.util.openMenu();
    }
    back() {
        this.navCtrl.back();
    }
    getCates() {
        this.categories = [];
        this.dummy = Array(20);
        this.api.get('categories').subscribe((datas) => {
            this.dummy = [];
            if (datas && datas.data && datas.data.length) {
                datas.data.forEach(element => {
                    if (element.status === '1') {
                        const info = {
                            id: element.id,
                            name: element.name,
                            cover: element.cover,
                            subCates: []
                        };
                        this.categories.push(info);
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
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.getString('Something went wrong'));
            this.dummy = [];
        });
    }
    change(id) {
        if (this.selectedIndex === id) {
            this.selectedIndex = '';
        }
        else {
            this.selectedIndex = id;
        }
    }
    goToProductList(val) {
        this.subIndex = val.id;
        const navData = {
            queryParams: {
                id: val.id,
                name: val.name
            }
        };
        this.router.navigate(['/tabs/categories/products'], navData);
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.page.scss */ "./src/app/pages/categories/categories.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], CategoriesPage);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/

let CategoryService = class CategoryService {
    constructor() {
        this.category = [
            {
                img: 'assets/imgs/category/fruit.png',
                name: 'Fruits',
                color: 'rgba(226, 61, 61, 0.2)'
            },
            {
                img: 'assets/imgs/category/beverages.png',
                name: 'Beverages',
                color: 'rgba(113, 239, 239,0.2)'
            },
            {
                img: 'assets/imgs/category/veg.png',
                name: 'Veg',
                color: 'rgba(237, 129, 21, 0.2)'
            },
            {
                img: 'assets/imgs/category/non-veg.png',
                name: 'Non-veg',
                color: 'rgba(243, 210, 146,0.3)'
            },
            {
                img: 'assets/imgs/category/bread.png',
                name: 'Backery',
                color: 'rgba(195, 132, 91,0.3)'
            },
            {
                img: 'assets/imgs/category/grain.png',
                name: 'Grains',
                color: 'rgba(246, 225, 127,0.3)'
            },
            {
                img: 'assets/imgs/category/meat.png',
                name: 'Meat',
                color: 'rgba(250, 118, 141,0.3)'
            },
            {
                img: 'assets/imgs/category/dairy.png',
                name: 'Dairy',
                color: 'rgb(216, 242, 246)'
            },
            {
                img: 'assets/imgs/category/clean2.png',
                name: 'Cleaners',
                color: 'rgba(250, 118, 141,0.3)'
            }
        ];
    }
};
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CategoryService);



/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es2015.js.map