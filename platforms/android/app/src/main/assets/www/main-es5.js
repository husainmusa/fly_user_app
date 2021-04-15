function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n <!-- dir=\"rtl\"-->\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" side=\"end\">\n      <ion-content>\n        <div class=\"infoSection\">\n          <img class=\"userPhoto\" src=\"assets/imgs/icon.png\" onError=\"this.src='assets/imgs/icon.png'\" alt=\"\">\n          <p class=\"userName\">Flyvip</p>\n        </div>\n        <ion-list id=\"inbox-list\" class=\"ion-no-padding\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" name=\"{{p.icn}}\" [class.active]=\"selectedIndex == i\"></ion-icon>\n              <ion-label>{{ getTranslate(p.title)  }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle auto-hide=\"false\" (click)=\"logout()\" *ngIf=\"util.isLoggedIn\">\n            <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"power-outline\"></ion-icon>\n              <ion-label> {{getTranslate('Logout')}} </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle auto-hide=\"false\" (click)=\"login()\" *ngIf=\"!util.isLoggedIn\">\n            <ion-item routerDirection=\"root\" lines=\"none\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"log-in-outline\"></ion-icon>\n              <ion-label> {{getTranslate('Login')}} </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <!-- <ion-menu side=\"end\" menuId=\"menu1\" contentId=\"main-content\">\n      <ion-header>\n        <ion-toolbar color=\"primary\">\n          <ion-title>Filter</ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <div class=\"filterItems\">\n          <ion-item lines=\"none\">\n            <ion-label>Price</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-range [min]=\"min\" mode=\"md\" [(ngModel)]=\"priceFilter\" color=\"dark\" dualKnobs=\"true\" [max]=\"max\"\n              color=\"secondary\">\n              <ion-label slot=\"start\">{{min}} </ion-label>\n              <ion-label slot=\"end\">{{max}}</ion-label>\n            </ion-range>\n          </ion-item>\n\n          <ion-item lines=\"none\">\n            <ion-label>Discount</ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"discount('10')\" expand=\"block\" [fill]=\"discountValue ==='10' ? 'solid':'outline'\"\n              shape=\"round\" size=\"small\">\n              10% Off\n            </ion-button>\n            <ion-button (click)=\"discount('25')\" expand=\"block\" [fill]=\"discountValue ==='25' ? 'solid':'outline'\"\n              shape=\"round\" size=\"small\">\n              25% Off\n            </ion-button>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-button (click)=\"discount('35')\" expand=\"block\" [fill]=\"discountValue ==='35' ? 'solid':'outline'\"\n              shape=\"round\" size=\"small\">\n              35% Off\n            </ion-button>\n            <ion-button (click)=\"discount('50')\" expand=\"block\" [fill]=\"discountValue ==='50' ? 'solid':'outline'\"\n              shape=\"round\" size=\"small\">\n              50% Off\n            </ion-button>\n          </ion-item>\n        </div>\n      </ion-content>\n      <ion-footer>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"close()\">\n              Clear Filters\n            </ion-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"apply()\">\n              Apply\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu> -->\n\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDriverRatingDriverRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close('fail')\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"main_div\">\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.getString('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.getString('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductRatingProductRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close('fail')\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\">\n\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.getString('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.getString('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sort/sort.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sort/sort.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSortSortPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Filter</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"filterItems\">\n    <ion-item lines=\"none\">\n      <ion-label>Price</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-range [min]=\"min\" mode=\"md\" pin [(ngModel)]=\"priceFilter\" color=\"dark\" dualKnobs=\"true\" [max]=\"max\"\n        color=\"secondary\">\n        <ion-label slot=\"start\">{{min}} </ion-label>\n        <ion-label slot=\"end\">{{max}}</ion-label>\n      </ion-range>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>Discount</ion-label>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-button (click)=\"discount('10')\" expand=\"block\" [fill]=\"discountValue ==='10' ? 'solid':'outline'\"\n        shape=\"round\" size=\"small\">\n        10% Off or more\n      </ion-button>\n      <ion-button (click)=\"discount('25')\" expand=\"block\" [fill]=\"discountValue ==='25' ? 'solid':'outline'\"\n        shape=\"round\" size=\"small\">\n        25% Off or more\n      </ion-button>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-button (click)=\"discount('35')\" expand=\"block\" [fill]=\"discountValue ==='35' ? 'solid':'outline'\"\n        shape=\"round\" size=\"small\">\n        35% Off or more\n      </ion-button>\n      <ion-button (click)=\"discount('50')\" expand=\"block\" [fill]=\"discountValue ==='50' ? 'solid':'outline'\"\n        shape=\"round\" size=\"small\">\n        50% Off or more\n      </ion-button>\n    </ion-item>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        Clear Filters\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"apply()\">\n        Apply\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-rating/store-rating.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-rating/store-rating.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStoreRatingStoreRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close('fail')\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"main_div\">\n\n      <div class=\"info_div\">\n        <div class=\"rattingBtns\">\n          <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\"\n            halfStarIconName=\"star-half\" starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\">\n          </rating>\n        </div>\n        <div class=\"name\">\n          <div class=\"content_div\">\n            <ion-textarea row=\"8\" type=\"text\" [placeholder]=\"util.getString('Comment')\" [(ngModel)]=\"comment\">\n            </ion-textarea>\n          </div>\n        </div>\n        <ion-button (click)=\"submit()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          {{util.getString('Submit')}}\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVerifyVerifyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Verify')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"otpContainer\">\n    <h2 class=\"headerText\"> {{util.getString('Verification')}} </h2>\n    <p class=\"subTitleText\">{{util.getString('We texted you a code to verify')}}\n      <br> {{util.getString('your phone')}} {{mobile}}\n    </p>\n    <div class=\"otpInputs\">\n      <ng-otp-input (onInputChange)=\"onOtpChange($event)\"\n        [config]=\"{length:6,inputStyles:{'width': '30px','height': '30px'}}\">\n      </ng-otp-input>\n    </div>\n    <ion-button class=\"btn_class\" (click)=\"continue()\" type=\"submit\" expand=\"block\">{{util.getString('Continue')}}\n    </ion-button>\n\n    <ion-button (click)=\"resend()\" *ngIf=\"resendCode\" type=\"submit\" expand=\"block\" fill=\"clear\">\n      {{util.getString('Resend code')}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/CityGuard/city.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/CityGuard/city.guard.ts ***!
    \*****************************************/

  /*! exports provided: CityGuard */

  /***/
  function srcAppCityGuardCityGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CityGuard", function () {
      return CityGuard;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CityGuard = /*#__PURE__*/function () {
      function CityGuard(router, menuController) {
        _classCallCheck(this, CityGuard);

        this.router = router;
        this.menuController = menuController;
      }

      _createClass(CityGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var city = localStorage.getItem('city');
          console.log('city', localStorage.getItem('city'));

          if (city && city != null && city !== 'null') {
            this.menuController.enable(true);
            return true;
          }

          this.menuController.enable(false);
          this.router.navigate(['/cities']);
          return false;
        }
      }]);

      return CityGuard;
    }();

    CityGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
      }];
    };

    CityGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])], CityGuard);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts");
    /* harmony import */


    var _CityGuard_city_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./CityGuard/city.guard */
    "./src/app/CityGuard/city.guard.ts");
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


    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-tabs-tabs-module */
        "pages-tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./pages/tabs/tabs.module */
        "./src/app/pages/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_CityGuard_city_guard__WEBPACK_IMPORTED_MODULE_4__["CityGuard"]]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("default~firebase-auth~pages-login-login-module"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-home-home-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~a28c7eb7"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'categories',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-categories-categories-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~a28c7eb7"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/categories/categories.module */
        "./src/app/pages/categories/categories.module.ts")).then(function (m) {
          return m.CategoriesPageModule;
        });
      }
    }, {
      path: 'store',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-store-store-module */
        "store-store-module").then(__webpack_require__.bind(null,
        /*! ./pages/store/store.module */
        "./src/app/pages/store/store.module.ts")).then(function (m) {
          return m.StorePageModule;
        });
      }
    }, {
      path: 'product',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-product-product-module */
        "product-product-module").then(__webpack_require__.bind(null,
        /*! ./pages/product/product.module */
        "./src/app/pages/product/product.module.ts")).then(function (m) {
          return m.ProductPageModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-cart-cart-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~a28c7eb7"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/cart/cart.module */
        "./src/app/pages/cart/cart.module.ts")).then(function (m) {
          return m.CartPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'account',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-account-account-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~a28c7eb7"), __webpack_require__.e("account-account-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/account/account.module */
        "./src/app/pages/account/account.module.ts")).then(function (m) {
          return m.AccountPageModule;
        });
      }
    }, {
      path: 'orders',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-orders-orders-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~a28c7eb7"), __webpack_require__.e("orders-orders-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/orders/orders.module */
        "./src/app/pages/orders/orders.module.ts")).then(function (m) {
          return m.OrdersPageModule;
        });
      }
    }, {
      path: 'order-details',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-order-details-order-details-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~a28c7eb7"), __webpack_require__.e("pages-order-details-order-details-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/order-details/order-details.module */
        "./src/app/pages/order-details/order-details.module.ts")).then(function (m) {
          return m.OrderDetailsPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "pages-register-register-module").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'reset-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-reset-password-reset-password-module */
        "pages-reset-password-reset-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/reset-password/reset-password.module */
        "./src/app/pages/reset-password/reset-password.module.ts")).then(function (m) {
          return m.ResetPasswordPageModule;
        });
      }
    }, {
      path: 'languages',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-languages-languages-module */
        "languages-languages-module").then(__webpack_require__.bind(null,
        /*! ./pages/languages/languages.module */
        "./src/app/pages/languages/languages.module.ts")).then(function (m) {
          return m.LanguagesPageModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-about-about-module */
        "about-about-module").then(__webpack_require__.bind(null,
        /*! ./pages/about/about.module */
        "./src/app/pages/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'payment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payment-payment-module */
        "payment-payment-module").then(__webpack_require__.bind(null,
        /*! ./pages/payment/payment.module */
        "./src/app/pages/payment/payment.module.ts")).then(function (m) {
          return m.PaymentPageModule;
        });
      }
    }, {
      path: 'inbox',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-inbox-inbox-module */
        "pages-inbox-inbox-module").then(__webpack_require__.bind(null,
        /*! ./pages/inbox/inbox.module */
        "./src/app/pages/inbox/inbox.module.ts")).then(function (m) {
          return m.InboxPageModule;
        });
      }
    }, {
      path: 'sub-category',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-sub-category-sub-category-module */
        "sub-category-sub-category-module").then(__webpack_require__.bind(null,
        /*! ./pages/sub-category/sub-category.module */
        "./src/app/pages/sub-category/sub-category.module.ts")).then(function (m) {
          return m.SubCategoryPageModule;
        });
      }
    }, {
      path: 'products',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-products-products-module */
        "products-products-module").then(__webpack_require__.bind(null,
        /*! ./pages/products/products.module */
        "./src/app/pages/products/products.module.ts")).then(function (m) {
          return m.ProductsPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/profile/profile.module */
        "./src/app/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'cities',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-cities-cities-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~a28c7eb7"), __webpack_require__.e("pages-cities-cities-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/cities/cities.module */
        "./src/app/pages/cities/cities.module.ts")).then(function (m) {
          return m.CitiesPageModule;
        });
      }
    }, {
      path: 'offers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-offers-offers-module */
        "pages-offers-offers-module").then(__webpack_require__.bind(null,
        /*! ./pages/offers/offers.module */
        "./src/app/pages/offers/offers.module.ts")).then(function (m) {
          return m.OffersPageModule;
        });
      }
    }, {
      path: 'top-picked',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-top-picked-top-picked-module */
        "top-picked-top-picked-module").then(__webpack_require__.bind(null,
        /*! ./pages/top-picked/top-picked.module */
        "./src/app/pages/top-picked/top-picked.module.ts")).then(function (m) {
          return m.TopPickedPageModule;
        });
      }
    }, {
      path: 'top-stores',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-top-stores-top-stores-module */
        "pages-top-stores-top-stores-module").then(__webpack_require__.bind(null,
        /*! ./pages/top-stores/top-stores.module */
        "./src/app/pages/top-stores/top-stores.module.ts")).then(function (m) {
          return m.TopStoresPageModule;
        });
      }
    }, {
      path: 'all-offers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-all-offers-all-offers-module */
        "pages-all-offers-all-offers-module").then(__webpack_require__.bind(null,
        /*! ./pages/all-offers/all-offers.module */
        "./src/app/pages/all-offers/all-offers.module.ts")).then(function (m) {
          return m.AllOffersPageModule;
        });
      }
    }, {
      path: 'address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-address-address-module */
        "address-address-module").then(__webpack_require__.bind(null,
        /*! ./pages/address/address.module */
        "./src/app/pages/address/address.module.ts")).then(function (m) {
          return m.AddressPageModule;
        });
      }
    }, {
      path: 'add-address',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-address-add-address-module */
        "pages-add-address-add-address-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-address/add-address.module */
        "./src/app/pages/add-address/add-address.module.ts")).then(function (m) {
          return m.AddAddressPageModule;
        });
      }
    }, {
      path: 'delivery-options',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-delivery-options-delivery-options-module */
        [__webpack_require__.e("default~account-account-module~cart-cart-module~categories-categories-module~delivery-options-delive~a28c7eb7"), __webpack_require__.e("delivery-options-delivery-options-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/delivery-options/delivery-options.module */
        "./src/app/pages/delivery-options/delivery-options.module.ts")).then(function (m) {
          return m.DeliveryOptionsPageModule;
        });
      }
    }, {
      path: 'stripe-payments',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-stripe-payments-stripe-payments-module */
        "stripe-payments-stripe-payments-module").then(__webpack_require__.bind(null,
        /*! ./pages/stripe-payments/stripe-payments.module */
        "./src/app/pages/stripe-payments/stripe-payments.module.ts")).then(function (m) {
          return m.StripePaymentsPageModule;
        });
      }
    }, {
      path: 'add-card',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-add-card-add-card-module */
        "add-card-add-card-module").then(__webpack_require__.bind(null,
        /*! ./pages/add-card/add-card.module */
        "./src/app/pages/add-card/add-card.module.ts")).then(function (m) {
          return m.AddCardPageModule;
        });
      }
    }, {
      path: 'favorite',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-favorite-favorite-module */
        "pages-favorite-favorite-module").then(__webpack_require__.bind(null,
        /*! ./pages/favorite/favorite.module */
        "./src/app/pages/favorite/favorite.module.ts")).then(function (m) {
          return m.FavoritePageModule;
        });
      }
    }, {
      path: 'contacts',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-contacts-contacts-module */
        "contacts-contacts-module").then(__webpack_require__.bind(null,
        /*! ./pages/contacts/contacts.module */
        "./src/app/pages/contacts/contacts.module.ts")).then(function (m) {
          return m.ContactsPageModule;
        });
      }
    }, {
      path: 'order-rating',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-order-rating-order-rating-module */
        "pages-order-rating-order-rating-module").then(__webpack_require__.bind(null,
        /*! ./pages/order-rating/order-rating.module */
        "./src/app/pages/order-rating/order-rating.module.ts")).then(function (m) {
          return m.OrderRatingPageModule;
        });
      }
    }, {
      path: 'store-rating',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/store-rating/store-rating.module */
        "./src/app/pages/store-rating/store-rating.module.ts")).then(function (m) {
          return m.StoreRatingPageModule;
        });
      }
    }, {
      path: 'product-rating',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/product-rating/product-rating.module */
        "./src/app/pages/product-rating/product-rating.module.ts")).then(function (m) {
          return m.ProductRatingPageModule;
        });
      }
    }, {
      path: 'rating-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-rating-list-rating-list-module */
        "rating-list-rating-list-module").then(__webpack_require__.bind(null,
        /*! ./pages/rating-list/rating-list.module */
        "./src/app/pages/rating-list/rating-list.module.ts")).then(function (m) {
          return m.RatingListPageModule;
        });
      }
    }, {
      path: 'chats',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-chats-chats-module */
        "pages-chats-chats-module").then(__webpack_require__.bind(null,
        /*! ./pages/chats/chats.module */
        "./src/app/pages/chats/chats.module.ts")).then(function (m) {
          return m.ChatsPageModule;
        });
      }
    }, {
      path: 'driver-rating',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/driver-rating/driver-rating.module */
        "./src/app/pages/driver-rating/driver-rating.module.ts")).then(function (m) {
          return m.DriverRatingPageModule;
        });
      }
    }, {
      path: 'faqs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-faqs-faqs-module */
        "faqs-faqs-module").then(__webpack_require__.bind(null,
        /*! ./pages/faqs/faqs.module */
        "./src/app/pages/faqs/faqs.module.ts")).then(function (m) {
          return m.FaqsPageModule;
        });
      }
    }, {
      path: 'help',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-help-help-module */
        "help-help-module").then(__webpack_require__.bind(null,
        /*! ./pages/help/help.module */
        "./src/app/pages/help/help.module.ts")).then(function (m) {
          return m.HelpPageModule;
        });
      }
    }, {
      path: 'sort',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/sort/sort.module */
        "./src/app/pages/sort/sort.module.ts")).then(function (m) {
          return m.SortPageModule;
        });
      }
    }, {
      path: 'verify',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./pages/verify/verify.module */
        "./src/app/pages/verify/verify.module.ts")).then(function (m) {
          return m.VerifyPageModule;
        });
      }
    }, {
      path: 'direction',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-direction-direction-module */
        "pages-direction-direction-module").then(__webpack_require__.bind(null,
        /*! ./pages/direction/direction.module */
        "./src/app/pages/direction/direction.module.ts")).then(function (m) {
          return m.DirectionPageModule;
        });
      }
    }, {
      path: 'success',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | success-success-module */
        "success-success-module").then(__webpack_require__.bind(null,
        /*! ./success/success.module */
        "./src/app/success/success.module.ts")).then(function (m) {
          return m.SuccessPageModule;
        });
      }
    }, {
      path: 'new-stores',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-new-stores-new-stores-module */
        "pages-new-stores-new-stores-module").then(__webpack_require__.bind(null,
        /*! ./pages/new-stores/new-stores.module */
        "./src/app/pages/new-stores/new-stores.module.ts")).then(function (m) {
          return m.NewStoresPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n.infoSection {\n  background: var(--ion-color-primary);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 50px;\n}\n.infoSection .userPhoto {\n  width: 80px;\n  margin: 20px 0px;\n}\n.infoSection .userName {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: white;\n  margin-bottom: 20px;\n}\n.version {\n  margin: 0px;\n  padding: 0px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: black;\n  margin-bottom: 25px;\n  text-align: center;\n  position: absolute;\n  bottom: 0px;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: black;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-item {\n  border-bottom: 1px solid lightgray;\n  --padding-start:30px !important;\n  --min-height: 60px !important;\n}\n.filterItems ion-item {\n  border-bottom: none !important;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary) ;\n}\n.imgs {\n  height: 20px;\n  width: 20px;\n  margin-right: 10px;\n}\n.menu_user_image {\n  height: 90px;\n  width: 90px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  margin: auto;\n}\n.username {\n  margin-top: 20px;\n  font-weight: 600;\n  display: block;\n  text-align: center;\n  font-size: 20px;\n}\n.email {\n  margin-top: 5px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNFLDJFQUFBO0FERUY7QUNDQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FERUY7QUNERTtFQUVFLFdBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBREVGO0FDV0E7RUFDRSxtQkFBQTtBRFJGO0FDV0E7O0VBRUUsa0JBQUE7QURSRjtBQ2VBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QURiRjtBQ2dCQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBRGhCRjtBQ21CQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGhCRjtBQ21CQTtFQUNFLHNEQUFBO0FEaEJGO0FDbUJBO0VBQ0UsK0JBQUE7QURoQkY7QUNtQkE7RUFHRSxZQUFBO0FEbEJGO0FDeUJBO0VBQ0Usc0JBQUE7QUR0QkY7QUM2QkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FEMUJGO0FDNEJBO0VBQ0Usa0NBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0FEekJGO0FDNEJFO0VBQ0UsOEJBQUE7QUR6Qko7QUM0QkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUR6QkY7QUM0QkE7RUFDRSwrQkFBQTtBRHpCRjtBQzRCQTtFQUNFLGVBQUE7QUR6QkY7QUM2QkE7RUFDRSxrQkFBQTtBRDFCRjtBQzZCQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FEMUJGO0FDNkJBO0VBQ0Usa0JBQUE7QUQxQkY7QUM2QkE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBRDNCRjtBQzhCQTtFQUNFLGtDQUFBO0FEM0JGO0FDK0JBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDVCRjtBQzhCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEM0JGO0FDOEJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQzQkY7QUM2QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEMUJGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG4uaW5mb1NlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5pbmZvU2VjdGlvbiAudXNlclBob3RvIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG4uaW5mb1NlY3Rpb24gLnVzZXJOYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnZlcnNpb24ge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbGVmdDogNTAlO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIC0tcGFkZGluZy1zdGFydDozMHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVySXRlbXMgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA7XG59XG5cbi5pbWdzIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWVudV91c2VyX2ltYWdlIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnVzZXJuYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZW1haWwge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG4uaW5mb1NlY3Rpb257XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICAudXNlclBob3Rve1xuICAgIC8vIGhlaWdodDogMTEwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgfVxuICAudXNlck5hbWV7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi52ZXJzaW9ue1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICBsZWZ0OiA1MCU7XG59XG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC8vIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAvLyAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC8vIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC8vIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgLy8gcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgLy8gcGFkZGluZzogNDBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5pb24taXRlbXtcbiAgYm9yZGVyLWJvdHRvbTogIDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIC0tcGFkZGluZy1zdGFydDozMHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuLmZpbHRlckl0ZW1ze1xuICBpb24taXRlbXtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIH0gXG59XG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxuXG59XG5cbi5pbWdze1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWVudV91c2VyX2ltYWdle1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udXNlcm5hbWV7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5lbWFpbHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, navCtrl, oneSignal, api, util, cart, router, menuCtrl, db) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.oneSignal = oneSignal;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.db = db;
        this.appPages = [];
        this.priceFilter = {
          lower: 10,
          upper: 500
        };
        this.selectedIndex = 0;
        var uid = localStorage.getItem('uid');

        if (uid == "" || uid === null) {
          this.util.isLoggedIn = false;
        } else {
          this.util.isLoggedIn = true;
        }

        this.initializeApp();
        this.menuCtrl.enable(false, 'menu1');
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var uid = localStorage.getItem('uid');

          if (uid == "" || uid === null) {
            this.loggedIn = false;
            console.log("not logged");
          } else {
            this.loggedIn = true;
            console.log("logged");
          }
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.hide(); // this.statusBar.backgroundColorByHexString('#45C261');


            _this.splashScreen.hide();

            console.log('%c Copyright and Good Faith Purchasers © 2020-present initappz. ', 'background: #222; color: #bada55');
            _this.appPages = _this.util.appPage;
            var lng = localStorage.getItem('language');
            console.log("localstorage language", lng); // this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
            // // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            // this.oneSignal.endInit();

            if (!lng || lng === null) {
              _this.api.get('users/getDefaultSettings').subscribe(function (data) {
                console.log('----------------- app setting', data);

                if (data && data.status === 200 && data.data) {
                  var manage = data.data.manage;
                  var language = data.data.lang;

                  if (manage && manage.length > 0) {
                    if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                      _this.util.appClosed = true;
                      _this.util.appClosedMessage = manage[0].message;
                    } else {
                      _this.util.appClosed = false;
                    }
                  } else {
                    _this.util.appClosed = false;
                  }

                  console;

                  if (language) {
                    console.log('data.data.file=>', data.data.file);
                    _this.util.translations = language;
                    localStorage.setItem('language', data.data.file);
                    console.log("translations", _this.util.translations);
                    localStorage.setItem('language_id', data.data.langid);
                  }

                  if (data.data.lang_position) {
                    if (data.data.lang_position == "0") {
                      _this.util.direction = "rtl";
                      _this.util.cside = "left";
                    } else {
                      _this.util.direction = "ltr";
                      _this.util.cside = "right";
                    }
                  }

                  var settings = data.data.settings;

                  if (settings && settings.length > 0) {
                    var info = settings[0]; // this.util.direction = info.appDirection;
                    // this.util.cside = info.currencySide;

                    _this.util.currecny = info.currencySymbol;
                    _this.util.logo = info.logo;
                    _this.util.twillo = info.twillo;
                    _this.util.delivery = info.delivery;
                    document.documentElement.dir = _this.util.direction;
                    console.log("utility direction", data.data.lang_position);
                  } else {
                    _this.util.direction = 'ltr';
                    _this.util.cside = 'right';
                    _this.util.currecny = '$';
                    document.documentElement.dir = _this.util.direction;
                    console.log("utility direction", _this.util.direction);
                  }

                  var general = data.data.general;
                  console.log('generalllll============================>', general);

                  if (general && general.length > 0) {
                    var _info = general[0];
                    _this.util.general = _info;
                    _this.cart.minOrderPrice = parseFloat(_info.min);
                    _this.cart.shipping = _info.shipping;
                    _this.cart.shippingPrice = parseFloat(_info.shippingPrice);
                    _this.cart.orderTax = parseFloat(_info.tax);
                    _this.cart.freeShipping = parseFloat(_info.free);
                  }
                }
              }, function (error) {
                console.log('default settings', error);
              });
            } else {
              var param = {
                id: localStorage.getItem('language_id')
              };

              _this.api.post('users/getDefaultSettingsById', param).subscribe(function (data) {
                console.log('----------------- app setting', data);

                if (data && data.status === 200 && data.data) {
                  var manage = data.data.manage;
                  var language = data.data.lang;

                  if (manage && manage.length > 0) {
                    if (manage[0].app_close === 0 || manage[0].app_close === '0') {
                      _this.util.appClosed = true;
                      _this.util.appClosedMessage = manage[0].message;
                    } else {
                      _this.util.appClosed = false;
                    }
                  } else {
                    _this.util.appClosed = false;
                  }

                  if (language) {
                    _this.util.translations = language;
                  }

                  var settings = data.data.settings;

                  if (settings && settings.length > 0) {
                    var info = settings[0];
                    console.log("language position", data.data.lang_position);

                    if (data.data.lang_position == "0") {
                      _this.util.direction = "rtl";
                    } else {
                      _this.util.direction = "ltr";
                    }

                    _this.util.cside = info.currencySide;
                    _this.util.currecny = info.currencySymbol;
                    _this.util.logo = info.logo;
                    _this.util.twillo = info.twillo;
                    _this.util.delivery = info.delivery;
                    document.documentElement.dir = _this.util.direction;
                    console.log("utility direction", _this.util.direction);
                  } else {
                    _this.util.direction = 'ltr';
                    _this.util.cside = 'right';
                    _this.util.currecny = '$';
                    document.documentElement.dir = _this.util.direction;
                    console.log("utility direction", _this.util.direction);
                  }

                  var general = data.data.general;
                  console.log('generalllll============================>', general);

                  if (general && general.length > 0) {
                    var _info2 = general[0];
                    _this.util.general = _info2;
                    _this.cart.minOrderPrice = parseFloat(_info2.min);
                    _this.cart.shipping = _info2.shipping;
                    _this.cart.shippingPrice = parseFloat(_info2.shippingPrice);
                    _this.cart.orderTax = parseFloat(_info2.tax);
                    _this.cart.freeShipping = parseFloat(_info2.free);
                  }
                }
              }, function (error) {
                console.log('default settings by id', error);
                _this.util.appClosed = false;
                _this.util.direction = 'ltr';
                _this.util.cside = 'right';
                _this.util.currecny = '₪';
                document.documentElement.dir = _this.util.direction;
                console.log("utility direction", _this.util.direction);
              });
            }

            if (_this.platform.is('cordova')) {
              setTimeout(function () {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  var _this2 = this;

                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return this.oneSignal.startInit(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.appId, src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].onesignal.googleProjectNumber);

                        case 2:
                          this.oneSignal.getIds().then(function (data) {
                            localStorage.setItem('fcm', data.userId); // this.oneSignal.handleNotificationReceived().subscribe((res) => {
                            //   console.log('event=>',res)
                            // });
                            // this.oneSignal.handleNotificationOpened().subscribe((res) => {
                            //   // do something when a notification is opened
                            //   console.log('event=ddd>',res)
                            // });

                            var uid = localStorage.getItem('uid');

                            if (uid && uid !== null && uid !== 'null') {
                              var _param = {
                                id: uid,
                                fcm_token: data.userId
                              };

                              _this2.api.post('users/edit_profile', _param).subscribe(function (data) {
                                console.log('user info=>', data);
                              }, function (error) {
                                console.log(error);
                              });
                            }
                          });
                          _context.next = 5;
                          return this.oneSignal.endInit();

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, 1000);
            }

            var uid = localStorage.getItem('uid');

            if (uid && uid !== null && uid !== 'null') {
              var _param2 = {
                id: uid
              };

              _this.api.post('users/getById', _param2).subscribe(function (data) {
                console.log('user info=>', data);

                if (data && data.status === 200 && data.data && data.data.length) {
                  _this.util.userInfo = data.data[0];
                } else {
                  localStorage.removeItem('uid');
                }
              }, function (error) {
                console.log(error);
              });

              _this.api.post('favourite/getByUid', _param2).subscribe(function (data) {
                console.log('fav data', data);

                if (data && data.status === 200 && data.data.length > 0) {
                  _this.util.haveFav = true;

                  try {
                    _this.util.favIds = data.data[0].ids.split(',');
                  } catch (error) {
                    console.log('eroor', error);
                  }
                } else {
                  _this.util.haveFav = false;
                }
              }, function (error) {
                _this.util.haveFav = false;
                console.log('fav error', error);
              });
            }

            _this.platform.backButton.subscribe(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log('Back Button --------------->>>', this.router.url, 'ad', this.router.isActive('/tabs/', true));

                        if (this.router.url === '/tabs/categories' || this.router.url === '/tabs/cart' || this.router.url === '/tabs/orders' || this.router.url === '/tabs/account' || this.router.url === '/login') {
                          console.log('can close');
                          this.navCtrl.navigateRoot(['/tabs/home']);
                        } else if (this.router.url === '/tabs/home' || this.router.url === '/cities') {
                          navigator['app'].exitApp();
                        }

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          });
          console.log("utility direction", this.util.direction);
        }
      }, {
        key: "logout",
        value: function logout() {
          var fuid = localStorage.getItem("fuid");
          localStorage.clear();
          localStorage.setItem("fuid", fuid);
          this.navCtrl.navigateRoot(['/login']);
        }
      }, {
        key: "login",
        value: function login() {
          this.navCtrl.navigateRoot(['/login']);
        }
      }, {
        key: "getTranslate",
        value: function getTranslate(str) {
          return this.util.getString(str);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }, {
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabase"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"], _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabase"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pipes/pipe.module */
    "./src/app/pipes/pipe.module.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/file-transfer/ngx */
    "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _pages_store_rating_store_rating_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/store-rating/store-rating.module */
    "./src/app/pages/store-rating/store-rating.module.ts");
    /* harmony import */


    var _pages_product_rating_product_rating_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/product-rating/product-rating.module */
    "./src/app/pages/product-rating/product-rating.module.ts");
    /* harmony import */


    var _pages_driver_rating_driver_rating_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/driver-rating/driver-rating.module */
    "./src/app/pages/driver-rating/driver-rating.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_sort_sort_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/sort/sort.module */
    "./src/app/pages/sort/sort.module.ts");
    /* harmony import */


    var _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/verify/verify.module */
    "./src/app/pages/verify/verify.module.ts");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */
    // plugins


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipeModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_20__["IonicStorageModule"].forRoot(), _pages_store_rating_store_rating_module__WEBPACK_IMPORTED_MODULE_26__["StoreRatingPageModule"], _pages_product_rating_product_rating_module__WEBPACK_IMPORTED_MODULE_27__["ProductRatingPageModule"], _pages_driver_rating_driver_rating_module__WEBPACK_IMPORTED_MODULE_28__["DriverRatingPageModule"], _pages_verify_verify_module__WEBPACK_IMPORTED_MODULE_31__["VerifyPageModule"], _pages_sort_sort_module__WEBPACK_IMPORTED_MODULE_30__["SortPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_19__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_18__["SplashScreen"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_16__["HTTP"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_17__["OneSignal"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_15__["FileTransferObject"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_21__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_22__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_23__["Geolocation"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_25__["InAppBrowser"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"]
      }, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_32__["NativeGeocoder"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_24__["LocationAccuracy"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_33__["CallNumber"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var uid = localStorage.getItem('uid');
          console.log('uid', localStorage.getItem('uid'));

          if (uid && uid != null && uid !== 'null') {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DriverRatingPageRoutingModule */

  /***/
  function srcAppPagesDriverRatingDriverRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPageRoutingModule", function () {
      return DriverRatingPageRoutingModule;
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


    var _driver_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./driver-rating.page */
    "./src/app/pages/driver-rating/driver-rating.page.ts");
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
      component: _driver_rating_page__WEBPACK_IMPORTED_MODULE_3__["DriverRatingPage"]
    }];

    var DriverRatingPageRoutingModule = function DriverRatingPageRoutingModule() {
      _classCallCheck(this, DriverRatingPageRoutingModule);
    };

    DriverRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DriverRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.module.ts ***!
    \*************************************************************/

  /*! exports provided: DriverRatingPageModule */

  /***/
  function srcAppPagesDriverRatingDriverRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPageModule", function () {
      return DriverRatingPageModule;
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


    var _driver_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./driver-rating-routing.module */
    "./src/app/pages/driver-rating/driver-rating-routing.module.ts");
    /* harmony import */


    var _driver_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./driver-rating.page */
    "./src/app/pages/driver-rating/driver-rating.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var DriverRatingPageModule = function DriverRatingPageModule() {
      _classCallCheck(this, DriverRatingPageModule);
    };

    DriverRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_driver_rating_page__WEBPACK_IMPORTED_MODULE_6__["DriverRatingPage"]]
    })], DriverRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDriverRatingDriverRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992AA;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454D62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZHJpdmVyLXJhdGluZy9kcml2ZXItcmF0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZHJpdmVyLXJhdGluZy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxkcml2ZXItcmF0aW5nXFxkcml2ZXItcmF0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGFBQUE7QURFSjtBQ0FJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QURFUjtBQ0FJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FERVI7QUNBSTtFQUNJLGdCQUFBO0FERVI7QUNBSTtFQUNJLGtCQUFBO0VBQ0Esb0RBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FERVI7QUNBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURFWjtBQ0FRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FERVo7QUNBUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBREVaO0FDQVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FERWhCO0FDQVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBREVoQjtBQ0dJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRERSO0FDR0k7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0FERFI7QUNFUTtFQUNJLFdBQUE7QURBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RyaXZlci1yYXRpbmcvZHJpdmVyLXJhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm1haW5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfaW1nIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDkwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yYXR0aW5nQnRucyB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuaWNuIHtcbiAgbWF4LXdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBzcGFuIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzg5OTJBQTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiBpb24taW5wdXQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNDU0RDYyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTU5LCAyMDEsIDE2NSwgMC41KTtcbiAgLS1jb2xvci1hY3RpdmVkOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24gLmxvZ291dF9pY29uIHtcbiAgd2lkdGg6IDEycHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLm1haW5fZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC51c2VyX2ltZ3tcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnJhdHRpbmdCdG5ze1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIH1cbiAgICAubmFtZXtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpOyAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pY257XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudF9kaXZ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcblxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTkyQUE7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NTRENjI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuX2RpdntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAgICAgICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xuICAgICAgICAubG9nb3V0X2ljb257XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/driver-rating/driver-rating.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/driver-rating/driver-rating.page.ts ***!
    \***********************************************************/

  /*! exports provided: DriverRatingPage */

  /***/
  function srcAppPagesDriverRatingDriverRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriverRatingPage", function () {
      return DriverRatingPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var DriverRatingPage = /*#__PURE__*/function () {
      function DriverRatingPage(navParam, modalCtrl, util, api) {
        var _this3 = this;

        _classCallCheck(this, DriverRatingPage);

        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.api = api;
        this.rate = 2;
        this.comment = '';
        this.rating = [];
        this.id = this.navParam.get('id');
        this.name = this.navParam.get('name');

        if (this.navParam.get('way')) {
          this.way = this.navParam.get('way');
        } else {
          this.way = 'order';
        }

        console.log('id', this.id);
        console.log('name', this.name);
        var param = {
          where: 'did = ' + this.id
        };
        this.util.show();
        this.api.post('rating/getFromCount', param).subscribe(function (data) {
          _this3.util.hide();

          console.log('data', data);

          if (data && data.status === 200) {
            if (data && data.data && data.data.total) {
              _this3.total = data.data.total;

              if (data.data.rating) {
                var rats = data.data.rating;
                console.log(rats.split(','));
                _this3.rating = rats.split(',');
              } else {
                _this3.rating = [];
              }
            } else {
              _this3.total = 0;
              _this3.rating = [];
            }
          } else {
            _this3.total = 0;
            _this3.rating = [];
          }

          console.log('total', _this3.total);
        }, function (error) {
          console.log(error);

          _this3.util.hide();

          _this3.total = 0;
          _this3.rating = [];
        });
      }

      _createClass(DriverRatingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(item) {
          this.modalCtrl.dismiss(item, item);
        }
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this4 = this;

          this.rating.push(this.rate);
          var count = 0;
          var sum = this.rating.reduce(function (sum, item, index) {
            item = parseFloat(item);
            console.log(sum, item, index);
            count += item;
            return sum + item * (index + 1);
          }, 0);
          console.log(sum / count);
          var storeRating = (sum / count).toFixed(2);
          console.log('rate', this.rate, this.comment);

          if (this.comment === '') {
            this.util.errorToast(this.util.getString('Something went wrong'));
            return false;
          }

          var param = {
            uid: localStorage.getItem('uid'),
            pid: 0,
            did: this.id,
            sid: 0,
            rate: this.rate,
            msg: this.comment,
            way: this.way,
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD')
          };
          this.util.show();
          this.api.post('rating/save', param).subscribe(function (data) {
            console.log(data);

            _this4.util.hide();

            if (data && data.status === 200) {
              _this4.util.showToast(_this4.util.getString('Rating added'), 'success', 'bottom');

              _this4.close('success');
            } else {
              _this4.util.errorToast(_this4.util.getString('Something went wrong'));
            }
          }, function (error) {
            _this4.util.hide();

            console.log(error);

            _this4.util.errorToast(_this4.util.getString('Something went wrong'));
          });
        }
      }]);

      return DriverRatingPage;
    }();

    DriverRatingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    DriverRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-driver-rating',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./driver-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/driver-rating/driver-rating.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./driver-rating.page.scss */
      "./src/app/pages/driver-rating/driver-rating.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], DriverRatingPage);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductRatingPageRoutingModule */

  /***/
  function srcAppPagesProductRatingProductRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPageRoutingModule", function () {
      return ProductRatingPageRoutingModule;
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


    var _product_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
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
      component: _product_rating_page__WEBPACK_IMPORTED_MODULE_3__["ProductRatingPage"]
    }];

    var ProductRatingPageRoutingModule = function ProductRatingPageRoutingModule() {
      _classCallCheck(this, ProductRatingPageRoutingModule);
    };

    ProductRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.module.ts ***!
    \***************************************************************/

  /*! exports provided: ProductRatingPageModule */

  /***/
  function srcAppPagesProductRatingProductRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPageModule", function () {
      return ProductRatingPageModule;
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


    var _product_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-rating-routing.module */
    "./src/app/pages/product-rating/product-rating-routing.module.ts");
    /* harmony import */


    var _product_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductRatingPageModule = function ProductRatingPageModule() {
      _classCallCheck(this, ProductRatingPageModule);
    };

    ProductRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_product_rating_page__WEBPACK_IMPORTED_MODULE_6__["ProductRatingPage"]]
    })], ProductRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductRatingProductRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992AA;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454D62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1yYXRpbmcvcHJvZHVjdC1yYXRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LXJhdGluZy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LXJhdGluZ1xccHJvZHVjdC1yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtBREVKO0FDQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBREVSO0FDQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURFUjtBQ0FJO0VBQ0ksZ0JBQUE7QURFUjtBQ0FJO0VBQ0ksa0JBQUE7RUFDQSxvREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURFUjtBQ0FRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBREVaO0FDQVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QURFWjtBQ0FRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FERVo7QUNBWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURFaEI7QUNBWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FERWhCO0FDR0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FERFI7QUNHSTtFQUNJLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QUREUjtBQ0VRO0VBQ0ksV0FBQTtBREFaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1yYXRpbmcvcHJvZHVjdC1yYXRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5tYWluX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51c2VyX2ltZyB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmF0dGluZ0J0bnMge1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmltYWdlX2RpdiB7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmljbiB7XG4gIG1heC13aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmNvbnRlbnRfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4OTkyQUE7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubmFtZSAuY29udGVudF9kaXYgaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzQ1NEQ2Mjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5idG5fZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE1OSwgMjAxLCAxNjUsIDAuNSk7XG4gIC0tY29sb3ItYWN0aXZlZDogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tYnV0dG9uIC5sb2dvdXRfaWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5tYWluX2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAudXNlcl9pbWd7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5yYXR0aW5nQnRuc3tcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICB9XG4gICAgLm5hbWV7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTsgICAgICAgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaWNue1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODk5MkFBO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDU0RDYyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bl9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMTU5LCAyMDEsIDE2NSwgMC41KTtcbiAgICAgICAgLS1jb2xvci1hY3RpdmVkOiB3aGl0ZTtcbiAgICAgICAgLmxvZ291dF9pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICBcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/product-rating/product-rating.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/product-rating/product-rating.page.ts ***!
    \*************************************************************/

  /*! exports provided: ProductRatingPage */

  /***/
  function srcAppPagesProductRatingProductRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRatingPage", function () {
      return ProductRatingPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductRatingPage = /*#__PURE__*/function () {
      function ProductRatingPage(navParam, modalCtrl, util, api) {
        var _this5 = this;

        _classCallCheck(this, ProductRatingPage);

        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.api = api;
        this.rate = 2;
        this.comment = '';
        this.rating = [];
        this.id = this.navParam.get('id');
        this.name = this.navParam.get('name');

        if (this.navParam.get('way')) {
          this.way = this.navParam.get('way');
        } else {
          this.way = 'order';
        }

        console.log('id', this.id);
        console.log('name', this.name);
        var param = {
          where: 'pid = ' + this.id
        };
        this.util.show();
        this.api.post('rating/getFromCount', param).subscribe(function (data) {
          _this5.util.hide();

          console.log('data', data);

          if (data && data.status === 200) {
            if (data && data.data && data.data.total) {
              _this5.total = data.data.total;

              if (data.data.rating) {
                var rats = data.data.rating;
                console.log(rats.split(','));
                _this5.rating = rats.split(',');
              } else {
                _this5.rating = [];
              }
            } else {
              _this5.total = 0;
              _this5.rating = [];
            }
          } else {
            _this5.total = 0;
            _this5.rating = [];
          }

          console.log('total', _this5.total);
        }, function (error) {
          console.log(error);

          _this5.util.hide();

          _this5.total = 0;
          _this5.rating = [];
        });
      }

      _createClass(ProductRatingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(item) {
          this.modalCtrl.dismiss(item, item);
        }
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this6 = this;

          this.rating.push(this.rate);
          var count = 0;
          var sum = this.rating.reduce(function (sum, item, index) {
            item = parseFloat(item);
            console.log(sum, item, index);
            count += item;
            return sum + item * (index + 1);
          }, 0);
          console.log(sum / count);
          var storeRating = (sum / count).toFixed(2);
          console.log('rate', this.rate, this.comment);

          if (this.comment === '') {
            this.util.errorToast(this.util.getString('Something went wrong'));
            return false;
          }

          var param = {
            uid: localStorage.getItem('uid'),
            pid: this.id,
            did: 0,
            sid: 0,
            rate: this.rate,
            msg: this.comment,
            way: this.way,
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD')
          };
          this.util.show();
          this.api.post('rating/save', param).subscribe(function (data) {
            console.log(data);

            _this6.util.hide();

            if (data && data.status === 200) {
              _this6.util.showToast('Rating added', 'success', 'bottom');

              var storeParam = {
                id: _this6.id,
                total_rating: _this6.total + 1,
                rating: storeRating
              };

              _this6.api.post('products/editList', storeParam).subscribe(function (stores) {
                console.log('products edit done', stores);
              }, function (error) {
                console.log(error);
              });

              _this6.close('success');
            } else {
              _this6.util.errorToast(_this6.util.getString('Something went wrong'));
            }
          }, function (error) {
            _this6.util.hide();

            console.log(error);

            _this6.util.errorToast(_this6.util.getString('Something went wrong'));
          });
        }
      }]);

      return ProductRatingPage;
    }();

    ProductRatingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    ProductRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-rating',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-rating/product-rating.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-rating.page.scss */
      "./src/app/pages/product-rating/product-rating.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], ProductRatingPage);
    /***/
  },

  /***/
  "./src/app/pages/sort/sort-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/sort/sort-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SortPageRoutingModule */

  /***/
  function srcAppPagesSortSortRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPageRoutingModule", function () {
      return SortPageRoutingModule;
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


    var _sort_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sort.page */
    "./src/app/pages/sort/sort.page.ts");

    var routes = [{
      path: '',
      component: _sort_page__WEBPACK_IMPORTED_MODULE_3__["SortPage"]
    }];

    var SortPageRoutingModule = function SortPageRoutingModule() {
      _classCallCheck(this, SortPageRoutingModule);
    };

    SortPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SortPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sort/sort.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/sort/sort.module.ts ***!
    \*******************************************/

  /*! exports provided: SortPageModule */

  /***/
  function srcAppPagesSortSortModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPageModule", function () {
      return SortPageModule;
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


    var _sort_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sort-routing.module */
    "./src/app/pages/sort/sort-routing.module.ts");
    /* harmony import */


    var _sort_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sort.page */
    "./src/app/pages/sort/sort.page.ts");

    var SortPageModule = function SortPageModule() {
      _classCallCheck(this, SortPageModule);
    };

    SortPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sort_routing_module__WEBPACK_IMPORTED_MODULE_5__["SortPageRoutingModule"]],
      declarations: [_sort_page__WEBPACK_IMPORTED_MODULE_6__["SortPage"]]
    })], SortPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sort/sort.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/sort/sort.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSortSortPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvcnQvc29ydC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/sort/sort.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/sort/sort.page.ts ***!
    \*****************************************/

  /*! exports provided: SortPage */

  /***/
  function srcAppPagesSortSortPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPage", function () {
      return SortPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SortPage = /*#__PURE__*/function () {
      function SortPage(modalCtrl, navParam) {
        _classCallCheck(this, SortPage);

        this.modalCtrl = modalCtrl;
        this.navParam = navParam;
        this.priceFilter = {
          lower: 10,
          upper: 500
        };
        this.min = this.navParam.get('min') ? this.navParam.get('min') : 0;
        this.max = this.navParam.get('max') ? this.navParam.get('max') : 100;
        this.fromFilter = this.navParam.get('from');
        this.discountValue = this.navParam.get('discountSelected');
      }

      _createClass(SortPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          console.log('clear');
          this.discountValue = null;
          this.modalCtrl.dismiss({
            min: this.priceFilter.lower,
            max: this.priceFilter.upper,
            discount: this.discountValue,
            from: this.fromFilter,
            close: true
          });
        }
      }, {
        key: "apply",
        value: function apply() {
          console.log(this.discountValue);
          console.log(this.priceFilter);
          this.modalCtrl.dismiss({
            min: this.priceFilter.lower,
            max: this.priceFilter.upper,
            discount: this.discountValue,
            from: this.fromFilter,
            close: false
          });
        }
      }, {
        key: "discount",
        value: function discount(value) {
          console.log(value);
          this.discountValue = value;
        }
      }]);

      return SortPage;
    }();

    SortPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    SortPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sort',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sort.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sort/sort.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sort.page.scss */
      "./src/app/pages/sort/sort.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], SortPage);
    /***/
  },

  /***/
  "./src/app/pages/store-rating/store-rating-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/store-rating/store-rating-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: StoreRatingPageRoutingModule */

  /***/
  function srcAppPagesStoreRatingStoreRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreRatingPageRoutingModule", function () {
      return StoreRatingPageRoutingModule;
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


    var _store_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./store-rating.page */
    "./src/app/pages/store-rating/store-rating.page.ts");
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
      component: _store_rating_page__WEBPACK_IMPORTED_MODULE_3__["StoreRatingPage"]
    }];

    var StoreRatingPageRoutingModule = function StoreRatingPageRoutingModule() {
      _classCallCheck(this, StoreRatingPageRoutingModule);
    };

    StoreRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StoreRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/store-rating/store-rating.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/store-rating/store-rating.module.ts ***!
    \***********************************************************/

  /*! exports provided: StoreRatingPageModule */

  /***/
  function srcAppPagesStoreRatingStoreRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreRatingPageModule", function () {
      return StoreRatingPageModule;
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


    var _store_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store-rating-routing.module */
    "./src/app/pages/store-rating/store-rating-routing.module.ts");
    /* harmony import */


    var _store_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store-rating.page */
    "./src/app/pages/store-rating/store-rating.page.ts");
    /* harmony import */


    var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating */
    "./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StoreRatingPageModule = function StoreRatingPageModule() {
      _classCallCheck(this, StoreRatingPageModule);
    };

    StoreRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _store_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoreRatingPageRoutingModule"], ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]],
      declarations: [_store_rating_page__WEBPACK_IMPORTED_MODULE_6__["StoreRatingPage"]]
    })], StoreRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/store-rating/store-rating.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/store-rating/store-rating.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStoreRatingStoreRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  padding: 20px;\n}\n.main_content_div .main_div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_content_div .rattingBtns {\n  margin: 20px 0px;\n}\n.main_content_div .name {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  justify-content: flex-start;\n  position: relative;\n  margin-bottom: 20px;\n}\n.main_content_div .name .image_div {\n  width: 20px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div .name .icn {\n  max-width: 15px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .name .content_div {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  margin-left: 15px;\n}\n.main_content_div .name .content_div span {\n  font-size: 11px;\n  color: #8992AA;\n  padding-top: 5px;\n}\n.main_content_div .name .content_div ion-input {\n  font-size: 11px;\n  color: #454D62;\n}\n.main_content_div .btn_div {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 3px;\n  --color: white;\n  font-weight: bold;\n  font-size: 12px;\n  height: 40px;\n  width: 150px;\n  text-transform: capitalize;\n  --background-activated: rgba(159, 201, 165, 0.5);\n  --color-actived: white;\n}\n.main_content_div ion-button .logout_icon {\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RvcmUtcmF0aW5nL3N0b3JlLXJhdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0b3JlLXJhdGluZy9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxzdG9yZS1yYXRpbmdcXHN0b3JlLXJhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0FERUo7QUNBSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FERVI7QUNBSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBREVSO0FDQUk7RUFDSSxnQkFBQTtBREVSO0FDQUk7RUFDSSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREVSO0FDQVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FERVo7QUNBUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBREVaO0FDQVE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURFWjtBQ0FZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBREVoQjtBQ0FZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QURFaEI7QUNHSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUREUjtBQ0dJO0VBQ0ksc0NBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQkFBQTtBRERSO0FDRVE7RUFDSSxXQUFBO0FEQVoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9yZS1yYXRpbmcvc3RvcmUtcmF0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubWFpbl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcl9pbWcge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJhdHRpbmdCdG5zIHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTNweCByZ2JhKDMwLCA5OCwgMjU1LCAwLjMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5pbWFnZV9kaXYge1xuICB3aWR0aDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5pY24ge1xuICBtYXgtd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5uYW1lIC5jb250ZW50X2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmNvbnRlbnRfZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODk5MkFBO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5hbWUgLmNvbnRlbnRfZGl2IGlvbi1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM0NTRENjI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgxNTksIDIwMSwgMTY1LCAwLjUpO1xuICAtLWNvbG9yLWFjdGl2ZWQ6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWJ1dHRvbiAubG9nb3V0X2ljb24ge1xuICB3aWR0aDogMTJweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAubWFpbl9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLnVzZXJfaW1ne1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAucmF0dGluZ0J0bnN7XG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7ICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmljbntcbiAgICAgICAgICAgIG1heC13aWR0aDogMTVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50X2RpdntcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg5OTJBQTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWlucHV0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ1NEQ2MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5idG5fZGl2e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE1OSwgMjAxLCAxNjUsIDAuNSk7XG4gICAgICAgIC0tY29sb3ItYWN0aXZlZDogd2hpdGU7XG4gICAgICAgIC5sb2dvdXRfaWNvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/store-rating/store-rating.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/store-rating/store-rating.page.ts ***!
    \*********************************************************/

  /*! exports provided: StoreRatingPage */

  /***/
  function srcAppPagesStoreRatingStoreRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreRatingPage", function () {
      return StoreRatingPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var StoreRatingPage = /*#__PURE__*/function () {
      function StoreRatingPage(navParam, modalCtrl, util, api) {
        var _this7 = this;

        _classCallCheck(this, StoreRatingPage);

        this.navParam = navParam;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.api = api;
        this.rate = 2;
        this.comment = '';
        this.rating = [];
        this.id = this.navParam.get('id');
        this.name = this.navParam.get('name');
        console.log('id', this.id);
        console.log('name', this.name);

        if (this.navParam.get('way')) {
          this.way = this.navParam.get('way');
        } else {
          this.way = 'order';
        }

        var param = {
          where: 'sid = ' + this.id
        };
        this.util.show();
        this.api.post('rating/getFromCount', param).subscribe(function (data) {
          _this7.util.hide();

          console.log('data', data);

          if (data && data.status === 200) {
            if (data && data.data && data.data.total) {
              _this7.total = data.data.total;

              if (data.data.rating) {
                var rats = data.data.rating;
                console.log(rats.split(','));
                _this7.rating = rats.split(',');
              } else {
                _this7.rating = [];
              }
            } else {
              _this7.total = 0;
              _this7.rating = [];
            }
          } else {
            _this7.total = 0;
            _this7.rating = [];
          }

          console.log('total', _this7.total);
        }, function (error) {
          console.log(error);

          _this7.util.hide();

          _this7.total = 0;
          _this7.rating = [];
        });
      }

      _createClass(StoreRatingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(item) {
          this.modalCtrl.dismiss(item, item);
        }
      }, {
        key: "onRatingChange",
        value: function onRatingChange(event) {
          console.log(event);
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this8 = this;

          this.rating.push(this.rate);
          var count = 0;
          var sum = this.rating.reduce(function (sum, item, index) {
            item = parseFloat(item);
            console.log(sum, item, index);
            count += item;
            return sum + item * (index + 1);
          }, 0);
          console.log(sum / count);
          var storeRating = (sum / count).toFixed(2);
          console.log('rate', this.rate, this.comment);

          if (this.comment === '') {
            this.util.errorToast(this.util.getString('Something went wrong'));
            return false;
          }

          var param = {
            uid: localStorage.getItem('uid'),
            pid: 0,
            did: 0,
            sid: this.id,
            rate: this.rate,
            msg: this.comment,
            way: this.way,
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD')
          };
          this.util.show();
          this.api.post('rating/save', param).subscribe(function (data) {
            console.log(data);

            _this8.util.hide();

            if (data && data.status === 200) {
              _this8.util.showToast(_this8.util.getString('Rating added'), 'success', 'bottom');

              var storeParam = {
                id: _this8.id,
                total_rating: _this8.total + 1,
                rating: storeRating
              };

              _this8.api.post('stores/editByUid', storeParam).subscribe(function (stores) {
                console.log('store edit done', stores);
              }, function (error) {
                console.log(error);
              });

              _this8.close('success');
            } else {
              _this8.util.errorToast(_this8.util.getString('Something went wrong'));
            }
          }, function (error) {
            _this8.util.hide();

            console.log(error);

            _this8.util.errorToast(_this8.util.getString('Something went wrong'));
          });
        }
      }]);

      return StoreRatingPage;
    }();

    StoreRatingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    StoreRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-store-rating',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./store-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/store-rating/store-rating.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./store-rating.page.scss */
      "./src/app/pages/store-rating/store-rating.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])], StoreRatingPage);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/verify/verify-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: VerifyPageRoutingModule */

  /***/
  function srcAppPagesVerifyVerifyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function () {
      return VerifyPageRoutingModule;
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


    var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/pages/verify/verify.page.ts");

    var routes = [{
      path: '',
      component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }];

    var VerifyPageRoutingModule = function VerifyPageRoutingModule() {
      _classCallCheck(this, VerifyPageRoutingModule);
    };

    VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/verify/verify.module.ts ***!
    \***********************************************/

  /*! exports provided: VerifyPageModule */

  /***/
  function srcAppPagesVerifyVerifyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function () {
      return VerifyPageModule;
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


    var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verify-routing.module */
    "./src/app/pages/verify/verify-routing.module.ts");
    /* harmony import */


    var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify.page */
    "./src/app/pages/verify/verify.page.ts");
    /* harmony import */


    var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-otp-input */
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");

    var VerifyPageModule = function VerifyPageModule() {
      _classCallCheck(this, VerifyPageModule);
    };

    VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]],
      declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })], VerifyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/verify/verify.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVerifyVerifyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".otpContainer {\n  margin-top: 50%;\n}\n.otpContainer .headerText {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 2rem;\n}\n.otpContainer .subTitleText {\n  text-align: center;\n  font-weight: bold;\n  color: gray;\n  font-size: 1rem;\n}\n.otpContainer .otpInputs {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n}\n.otpContainer .btn_class {\n  color: white;\n  margin: 30px 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVyaWZ5L0U6XFxwdW5lZXRcXGZseXZpcF8yMy0wMy0yMlxcVXNlcl9hcHBfMDYtMDQtMjAyMS9zcmNcXGFwcFxccGFnZXNcXHZlcmlmeVxcdmVyaWZ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmVyaWZ5L3ZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmeS92ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cENvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgLmhlYWRlclRleHR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH0gICAgXG4gICAgLnN1YlRpdGxlVGV4dHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLm90cElucHV0c3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5idG5fY2xhc3N7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luOiAzMHB4IDUwcHg7XG4gICAgfVxufVxuIiwiLm90cENvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cbi5vdHBDb250YWluZXIgLmhlYWRlclRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5vdHBDb250YWluZXIgLnN1YlRpdGxlVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDFyZW07XG59XG4ub3RwQ29udGFpbmVyIC5vdHBJbnB1dHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5vdHBDb250YWluZXIgLmJ0bl9jbGFzcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAzMHB4IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/verify/verify.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/verify/verify.page.ts ***!
    \*********************************************/

  /*! exports provided: VerifyPage */

  /***/
  function srcAppPagesVerifyVerifyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyPage", function () {
      return VerifyPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var VerifyPage = /*#__PURE__*/function () {
      function VerifyPage(api, util, navParam, navCtrl, modalCtrl) {
        var _this9 = this;

        _classCallCheck(this, VerifyPage);

        this.api = api;
        this.util = util;
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.textCode = '';
        this.userCode = '';
        this.resendCode = false;
        this.uid = this.navParam.get('uid');
        console.log('uid-->>', this.uid);
        this.mobile = localStorage.getItem('uMobile');
        console.log(this.mobile);
        this.sendOTP();
        setTimeout(function () {
          _this9.resendCode = true;
        }, 30000);
      }

      _createClass(VerifyPage, [{
        key: "sendOTP",
        value: function sendOTP() {
          var _this10 = this;

          console.log('uid-->>', this.uid);
          this.mobile = localStorage.getItem('uMobile');
          console.log(this.mobile);
          var message = this.util.getString('Your Grocery app verification code : ');
          var param = {
            msg: message,
            to: this.mobile
          };
          console.log(param);
          this.util.show();
          this.api.post('users/twilloMessage', param).subscribe(function (data) {
            console.log(data);
            _this10.id = data.data.id;

            _this10.util.hide();
          }, function (error) {
            console.log(error);

            _this10.util.hide();

            _this10.util.errorToast(_this10.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onOtpChange",
        value: function onOtpChange(event) {
          console.log(event);
          this.userCode = event;
        }
      }, {
        key: "resend",
        value: function resend() {
          this.sendOTP();
        }
      }, {
        key: "continue",
        value: function _continue() {
          var _this11 = this;

          console.log(this.userCode);
          console.log('uid-->>', this.uid);

          if (this.userCode === '' || !this.userCode) {
            this.util.errorToast(this.util.getString('Not valid code'));
            return false;
          }

          if (this.userCode) {
            var param = {
              id: this.id,
              otp: this.userCode
            };
            this.util.show();
            this.api.post('users/verifyOTP', param).subscribe(function (data) {
              console.log(data);

              if (data && data.status === 200) {
                var params = {
                  status: 1,
                  id: _this11.uid
                };

                _this11.api.post('users/edit_profile', params).subscribe(function (data) {
                  _this11.util.hide();

                  console.log(data);

                  _this11.modalCtrl.dismiss();

                  localStorage.setItem('uid', _this11.uid);

                  _this11.navCtrl.navigateRoot(['']);
                }, function (error) {
                  _this11.util.hide();

                  console.log(error);

                  _this11.util.errorToast(_this11.util.getString('Something went wrong'));
                });
              } else {
                _this11.util.hide();

                if (data && data.status === 500 && data.data && data.data.message) {
                  _this11.util.errorToast(data.data.message);

                  return false;
                }

                _this11.util.errorToast(_this11.util.getString('Something went wrong'));

                return false;
              }
            }, function (error) {
              _this11.util.hide();

              console.log(error);

              _this11.util.errorToast(_this11.util.getString('Something went wrong'));
            });
          } else {
            this.util.errorToast(this.util.getString('Not valid code'));
            return false;
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss();
        }
      }]);

      return VerifyPage;
    }();

    VerifyPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./verify.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verify/verify.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./verify.page.scss */
      "./src/app/pages/verify/verify.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], VerifyPage);
    /***/
  },

  /***/
  "./src/app/pipes/currency/currency.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pipes/currency/currency.pipe.ts ***!
    \*************************************************/

  /*! exports provided: CurrencyPipe */

  /***/
  function srcAppPipesCurrencyCurrencyPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyPipe", function () {
      return CurrencyPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CurrencyPipe = /*#__PURE__*/function () {
      function CurrencyPipe() {
        _classCallCheck(this, CurrencyPipe);
      }

      _createClass(CurrencyPipe, [{
        key: "transform",
        value: function transform(value) {
          return null;
        }
      }]);

      return CurrencyPipe;
    }();

    CurrencyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'currency'
    })], CurrencyPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipe.module.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/pipe.module.ts ***!
    \**************************************/

  /*! exports provided: PipeModule */

  /***/
  function srcAppPipesPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipeModule", function () {
      return PipeModule;
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


    var _translate_translate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translate/translate.pipe */
    "./src/app/pipes/translate/translate.pipe.ts");
    /* harmony import */


    var _currency_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./currency/currency.pipe */
    "./src/app/pipes/currency/currency.pipe.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var PipeModule = function PipeModule() {
      _classCallCheck(this, PipeModule);
    };

    PipeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_translate_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _currency_currency_pipe__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      imports: [],
      exports: [_translate_translate_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _currency_currency_pipe__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]]
    })], PipeModule);
    /***/
  },

  /***/
  "./src/app/pipes/translate/translate.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/pipes/translate/translate.pipe.ts ***!
    \***************************************************/

  /*! exports provided: TranslatePipe */

  /***/
  function srcAppPipesTranslateTranslatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
      return TranslatePipe;
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


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var TranslatePipe = /*#__PURE__*/function () {
      function TranslatePipe(util) {
        _classCallCheck(this, TranslatePipe);

        this.util = util;
      }

      _createClass(TranslatePipe, [{
        key: "transform",
        value: function transform(str) {
          var value = this.util.translations[str];
          console.log('valueeee', value);

          if (value && value !== undefined) {
            return this.util.translations[str];
          }

          return str;
        }
      }]);

      return TranslatePipe;
    }();

    TranslatePipe.ctorParameters = function () {
      return [{
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }];
    };

    TranslatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'translate'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])], TranslatePipe);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */
    // import { CartService } from './cart.service';


    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, nativeHttp, // public cart: CartService
      firbaseDB, util) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.nativeHttp = nativeHttp;
        this.firbaseDB = firbaseDB;
        this.util = util;
        this.baseUrl = '';
        this.mediaURL = '';
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
        this.mediaURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mediaURL;
      }
      /*============= firebase update store status ===========*/


      _createClass(ApiService, [{
        key: "updateStoreOrderStatus",
        value: function updateStoreOrderStatus(storeUid) {
          var today = new Date();
          var itemRef = this.firbaseDB.object(['store', storeUid].join('/'));
          itemRef.update({
            status: today.getTime()
          });
        }
        /*============= firebase update store status ===========*/

      }, {
        key: "alerts",
        value: function alerts(title, message, type) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(title, message, type);
        } // checkphone(phonenumber)
        // {
        //   console.log("phone number after send", phonenumber);
        //   return this.http.post(this.baseUrl+'users/checkphone/',phonenumber)
        //            .pipe(map(results => results));
        // }

      }, {
        key: "otplogin",
        value: function otplogin(data) {
          return this.http.post(this.baseUrl + 'users/otplogin', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) {
            return results;
          }));
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(files) {
          var formData = new FormData();
          Array.from(files).forEach(function (f) {
            return formData.append('userfile', f);
          });
          return this.http.post(this.baseUrl + 'users/upload_image', formData);
        }
      }, {
        key: "getCurrencyCode",
        value: function getCurrencyCode() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].general.code;
        }
      }, {
        key: "getCurrecySymbol",
        value: function getCurrecySymbol() {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].general.symbol;
        }
      }, {
        key: "createOrderNotification",
        value: function createOrderNotification(stores) {
          var _this12 = this;

          var ids = _toConsumableArray(new Set(stores.map(function (item) {
            return item.token;
          })));

          console.log(ids, 'stores sendNotification ', stores);
          /*
          const apiCalls = [];
          ids.forEach(element => {
            apiCalls.push(this.sendNotification('You have received new order', 'New Order Received', element));
          });
          forkJoin(apiCalls).subscribe((data) => {
            console.log('fork result', data);
          }, error => {
            console.log('fork error', error);
          });*/

          var traverse = function traverse() {
            if (ids.length > 0) {
              var idToken = ids.shift();

              if (idToken != "") {
                _this12.sendNotification(_this12.util.getString('You have received new order'), _this12.util.getString('New Order Received'), idToken).toPromise().then(function (r) {
                  console.log('CALLING- ' + idToken, 'RES', r);
                  traverse();
                })["catch"](function () {
                  traverse();
                });
              } else {
                traverse();
              }
            } else {
              console.log('OVER1');
            }
          };

          traverse();
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(msg, title, id) {
          var body = {
            app_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.appId,
            include_player_ids: [id],
            headings: {
              en: title
            },
            contents: {
              en: msg
            },
            data: {
              task: msg
            }
          };
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', "Basic ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].onesignal.restKey))
          };
          return this.http.post('https://onesignal.com/api/v1/notifications', body, header);
        }
      }, {
        key: "JSON_to_URLEncoded",
        value: function JSON_to_URLEncoded(element, key, list) {
          var new_list = list || [];

          if (typeof element === 'object') {
            for (var idx in element) {
              this.JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, new_list);
            }
          } else {
            new_list.push(key + '=' + encodeURIComponent(element));
          }

          return new_list.join('&');
        }
      }, {
        key: "post",
        value: function post(url, body) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
          };
          var param = this.JSON_to_URLEncoded(body);
          console.log(param);
          return this.http.post(this.baseUrl + url, param, header);
        }
      }, {
        key: "externalPost",
        value: function externalPost(url, body, key) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }, {
        key: "twilloPost",
        value: function twilloPost(url, body, sid, token) {
          var authorizationData = 'Basic ' + btoa(sid + ':' + token);
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', authorizationData)
          };
          var order = this.JSON_to_URLEncoded(body);
          console.log(order);
          return this.http.post(url, order, header);
        }
      }, {
        key: "instaPay",
        value: function instaPay(url, body, key, token) {
          return this.nativeHttp.post(url, body, {
            'X-Api-Key': "".concat(key),
            'X-Auth-Token': "".concat(token)
          });
        }
      }, {
        key: "get",
        value: function get(url) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Basic', "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken))
          };
          return this.http.get(this.baseUrl + url, header);
        }
      }, {
        key: "externalGet",
        value: function externalGet(url) {
          return this.http.get(url);
        }
      }, {
        key: "httpGet",
        value: function httpGet(url, key) {
          var header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', "Bearer ".concat(key))
          };
          return this.http.get(url, header);
        }
      }, {
        key: "nativePost",
        value: function nativePost(url, post) {
          console.log(this.baseUrl + url, post);
          return this.nativeHttp.post(this.baseUrl + url, post, {
            Basic: "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authToken)
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabase"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CartService = /*#__PURE__*/function () {
      function CartService(api, util, alertController, navCtrl) {
        var _this13 = this;

        _classCallCheck(this, CartService);

        this.api = api;
        this.util = util;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.cart = [];
        this.itemId = [];
        this.totalPrice = 0;
        this.grandTotal = 0;
        this.discount = 0;
        this.orderTax = 0;
        this.shippingPrice = 0;
        this.minOrderPrice = 0;
        this.freeShipping = 0;
        this.deliveryPrice = 0;
        this.stores = [];
        this.subCart = [];
        this.bulkOrder = [];
        this.BaseShippingPrice = 0;
        this.PerKmShippingPrice = 0;
        this.storeDeliverLength = 10;
        this.maxPriceForCod = 0;
        this.util.getKeys('cart').then(function (data) {
          if (data && data !== null && data !== 'null') {
            var userCart = JSON.parse(data); // console.log("user cart", userCart);

            if (userCart && userCart.length > 0) {
              _this13.cart = userCart;
              _this13.itemId = _toConsumableArray(new Set(_this13.cart.map(function (item) {
                return item.id;
              }))); // console.log('this.cart==>',this.cart)

              _this13.calcuate();
            } else {
              _this13.calcuate();
            }
          } else {
            _this13.calcuate();
          }
        });
        this.api.get('general/index').subscribe(function (data) {
          if (data.status == 200) {
            console.log('data======general/index=======>', data);
            _this13.AdminInfo = data.data[0];
            _this13.BaseShippingPrice = parseInt(_this13.AdminInfo.shipping_price_for3);
            _this13.PerKmShippingPrice = parseInt(_this13.AdminInfo.shipping_price_after3);
            _this13.maxPriceForCod = parseInt(_this13.AdminInfo.max_price_for_cod); // this.storeDeliverLength =  parseInt(this.AdminInfo.delivery_range)
          }
        });
      }

      _createClass(CartService, [{
        key: "clearCart",
        value: function clearCart() {
          this.cart = [];
          this.itemId = [];
          this.totalPrice = 0;
          this.grandTotal = 0;
          this.coupon = undefined;
          this.discount = 0;
          this.orderPrice = 0;
          this.datetime = undefined;
          this.stores = [];
          this.util.clearKeys('cart');
          this.util.isPaymentInit = false;
        }
      }, {
        key: "addItem",
        value: function addItem(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var found;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (this.cart.length == 0 || this.cart.length > 0) {
                      found = this.cart.find(function (storeInfo) {
                        return storeInfo.store_id == item.store_id;
                      });

                      if (found) {
                        this.cart.push(item);
                        this.itemId.push(item.id);
                        this.calcuate();
                      } else {
                        if (this.cart.length > 0) {
                          this.cartAlertConfirm();
                        }

                        this.clearCart();
                        this.cart.push(item);
                        this.itemId.push(item.id);
                        this.calcuate();
                      }
                    }

                    this.getStoreInfo(item.store_id);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addAddOn",
        value: function addAddOn(id, parent, quantity) {
          this.cart.forEach(function (element) {
            if (element.id == parent) {
              element.variations[0].items.forEach(function (addOnElement) {
                console.log('addOnElement', addOnElement);

                if (addOnElement.id == id) {
                  addOnElement.quantity = element.quantiy;
                } else {
                  addOnElement.quantity = 0;
                }
              });
            }
          });
          this.calcuate();
        }
      }, {
        key: "addSubAddOn",
        value: function addSubAddOn(id, parent, quantity, index, type) {
          var _this14 = this;

          var totalItem = this.cart.length || 0;
          totalItem = totalItem - 1;
          if (totalItem < 0) totalItem = 0;
          this.cart.forEach(function (element, i) {
            if (element.id == parent) {
              element.second_variation.forEach(function (elementVariant) {
                elementVariant.sub_category.forEach(function (elim) {
                  // console.log('sas',elim)
                  if (elim.id == id) {
                    elim.quantity = quantity;
                  } else {
                    if (elim.type == 'radio' && elim.type == type) {
                      elim.quantity = 0;
                    }
                  }
                });
              });
            }

            if (totalItem >= i) {
              console.log('OVER::CART->SERVICE->addSubAddOn->element', _this14.cart);

              _this14.calcuate();
            }

            console.log(totalItem, '::CART->SERVICE->addSubAddOn->element', element, 'id', id, 'III', i);
          });
          if (totalItem == 0) this.calcuate();
        } // addSubAddOnCheckBox(id,  parent, quantity,index){
        //   this.cart.forEach(element => {
        //     if (element.id == parent) {
        //         element.second_variation.forEach(element => {
        //           console.log(element)
        //           element.sub_category.forEach(elim => {
        //             if(elim.id == id){
        //               elim.quantity = quantity;
        //             }
        //           })
        //         });
        //     }
        //   });
        //   this.calcuate();
        // }

      }, {
        key: "addQuantity",
        value: function addQuantity(quantity, id) {
          // console.log('addQuantity:')
          this.cart.forEach(function (element) {
            if (element.id === id) {
              // console.log('===========>',element)
              element.quantiy = quantity;

              if (element.variations && element.variations[0] && element.variations[0].items && element.variations[0].items.length && element.variations[0].items.length > 0) {
                element.variations[0].items.forEach(function (addones) {
                  if (addones.quantity > 0) {
                    addones.quantity = quantity;
                  } else {
                    addones.quantity = 0;
                  }
                });
              }
            }
          });
          this.calcuate();
        }
      }, {
        key: "removeItem",
        value: function removeItem(id) {
          // console.log('removeItem:')
          this.cart = this.cart.filter(function (x) {
            return x.id !== id;
          });
          this.itemId = this.itemId.filter(function (x) {
            return x !== id;
          });
          this.calcuate();
        }
      }, {
        key: "subAddItem",
        value: function subAddItem(item, id) {
          // console.log('subAddItem:')
          this.cart.push(item);
          this.itemId.push(id);
          this.calcuate();
        }
      }, {
        key: "subAddQuantity",
        value: function subAddQuantity(quantity, id) {
          // console.log('subAddQuantity:')
          this.cart.forEach(function (element) {
            if (element.id === id) {
              element.quantiy = quantity;
            }
          });
          this.calcuate();
        }
      }, {
        key: "subRemoveItem",
        value: function subRemoveItem(id) {
          // console.log('subRemoveItem:')
          // console.log('remove this item from cart');
          // console.log('current cart items', this.cart);
          this.cart = this.cart.filter(function (x) {
            return x.id !== id;
          });
          this.itemId = this.itemId.filter(function (x) {
            return x !== id;
          });

          if (this.cart.length) {
            this.calcuate();
          } else {
            this.clearCart();
          }
        }
      }, {
        key: "calcuate",
        value: function calcuate() {
          var _this15 = this;

          var total = 0;
          this.cart.forEach(function (element) {
            if (element && element.discount === '0') {
              if (element.size === '1' || element.size === 1) {
                // console.log('======1=========>')
                total = total + parseFloat(element.original_price) * element.quantiy; // if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                //   total = total + (parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy);
                // } else {
                //   total = total + (parseFloat(element.variations[0].items[element.variant].price) * element.quantiy);
                // }
              } else {
                // console.log('=====2=========>')
                total = total + parseFloat(element.original_price) * element.quantiy;
              }
            } else {
              if (element.size === '1' || element.size === 1) {
                // if (element.variations[0].items[element.variant].discount && element.variations[0].items[element.variant].discount !== 0) {
                //   total = total + (parseFloat(element.variations[0].items[element.variant].discount) * element.quantiy);
                // } else {
                //   total = total + (parseFloat(element.variations[0].items[element.variant].price) * element.quantiy);
                // }
                total = total + parseFloat(element.sell_price) * element.quantiy; // console.log('=====3=========>')
              } else {
                total = total + parseFloat(element.sell_price) * element.quantiy; // console.log('====4=========>')
              }
            } // console.log("variant items", element.variations[0].items);


            if (element.variations[0]) {
              var addon_items = element.variations[0].items;
              addon_items.forEach(function (addonElement) {
                if (addonElement.price > 0 && addonElement.quantity > 0) {
                  // console.log('=====5=========>')
                  // let discount_price = (addonElement.discount / 100) * addonElement.price;
                  total = total + parseFloat(addonElement.price) * addonElement.quantity; // console.log('===6=========>')
                }
              });
            }

            if (element.second_variation) {
              // console.log('here======>')
              for (var a = 0; a < element.second_variation.length; a++) {
                element.second_variation[a].sub_category = element.second_variation[a].sub_category;

                if (element.second_variation[a].sub_category) {
                  console.log(element.second_variation[a].sub_category);
                  element.second_variation[a].sub_category.forEach(function (addonElement) {
                    // console.log('addonElement.price========>',addonElement.price ,)
                    if (addonElement.price > 0 && addonElement.quantity > 0) {
                      console.log();
                      total = total + parseFloat(addonElement.price) * addonElement.quantity;
                    }
                  });
                }
              }
            }
          });
          this.totalPrice = total.toFixed(2);

          if (this.coupon && this.coupon.type) {
            var min = parseFloat(this.coupon.min);

            if (this.totalPrice >= min) {
              if (this.coupon && this.coupon.type === 'per') {
                // console.log('i am here cart service==========>');
                var percentage = function percentage(num, per) {
                  return num / 100 * per;
                };

                var totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), parseFloat(this.coupon.off));
                this.discount = totalPrice.toFixed(2);
                this.grandTotal = this.totalPrice - parseFloat(this.discount); // console.log('this.grandTotal:::::',this.grandTotal);
                // console.log('this.discount:::::',this.discount)
              } else {
                // console.log('currency');
                this.discount = this.coupon.off;
                this.grandTotal = this.totalPrice - parseFloat(this.discount); // console.log('this.grandTotal::::else:',this.grandTotal);
                // console.log('this.discount:::else:',this.discount)
              }
            } else {
              this.discount = 0;
              this.coupon = null;
            }
          } else {
            this.grandTotal = this.totalPrice;
          }

          if (this.stores && this.stores.length && this.deliveryAddress && this.deliveryAt === 'home') {
            this.deliveryPrice = 0; // this.grandTotal = this.totalPrice + this.deliveryPrice 

            var totalKM = 0;
            this.stores.forEach(function (element) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var distance;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        // console.log('--->>> element==>>>', element);
                        if (!element.delivery_range) {
                          element.delivery_range = 10;
                        } else {
                          this.storeDeliverLength = element.delivery_range;
                        }

                        _context4.next = 3;
                        return this.distanceInKmBetweenEarthCoordinates(this.deliveryAddress.lat, this.deliveryAddress.lng, element.lat, element.lng);

                      case 3:
                        distance = _context4.sent;
                        // console.log('distance', distance);
                        totalKM = totalKM + distance;

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
            setTimeout(function () {
              if (totalKM >= _this15.storeDeliverLength) {
                _this15.util.errorToast(_this15.util.getString('store not provide delivery at your location'));

                _this15.navCtrl.back();
              } else {
                if (totalKM > 3) {
                  var other = totalKM - 3;
                  var normalPrice = _this15.BaseShippingPrice;
                  var priceOfExtraKm = other * _this15.PerKmShippingPrice;
                  _this15.deliveryPrice = Math.floor(normalPrice + priceOfExtraKm).toFixed(2); // this.totalPrice =  this.totalPrice - this.discount;

                  var grandTotPrice = parseFloat(_this15.totalPrice) + parseFloat(_this15.deliveryPrice);

                  if (!_this15.discount || _this15.discount === null) {
                    _this15.discount = 0;
                    _this15.grandTotal = Math.floor(grandTotPrice).toFixed(2);
                    _this15.grandTotal = _this15.grandTotal - _this15.discount;
                  } else {
                    _this15.grandTotal = _this15.grandTotal - _this15.discount;
                  }
                } else {
                  if (!_this15.discount || _this15.discount === null) {
                    _this15.discount = 0;
                    _this15.deliveryPrice = _this15.BaseShippingPrice;
                    _this15.grandTotal = parseFloat(_this15.totalPrice) + _this15.deliveryPrice;
                  } else {
                    _this15.deliveryPrice = _this15.BaseShippingPrice;
                    _this15.grandTotal = parseFloat(_this15.totalPrice) + _this15.deliveryPrice;
                    _this15.grandTotal = _this15.grandTotal - parseFloat(_this15.discount);
                  }
                }
              } //   console.log('totalKM===========>',totalKM)
              // if (this.freeShipping > this.totalPrice) {
              //   if (this.shipping === 'km') {
              //     const distancePricer = totalKM * this.shippingPrice;
              // //    this.deliveryPrice = Math.floor(distancePricer).toFixed(2);
              // this.deliveryPrice = Math.floor(distancePricer).toFixed(2);
              //     if (!this.discount || this.discount === null) {
              //       this.discount = 0;
              //     }
              //     this.grandTotal = (this.totalPrice - parseFloat(this.discount))  + distancePricer;
              //     this.grandTotal = parseFloat(this.grandTotal).toFixed(2);
              //     // console.log('deliveryeeeeeeeee', this.deliveryPrice);
              //   } else {
              //     this.deliveryPrice = this.shippingPrice;
              //     if (!this.discount || this.discount === null) {
              //       this.discount = 0;
              //     }
              //     this.grandTotal = (this.totalPrice - parseFloat(this.discount)) + this.shippingPrice;
              //     this.grandTotal = parseFloat(this.grandTotal).toFixed(2);
              //     console.log('grand total===>>', this.grandTotal);
              //   }
              // } else {
              //   this.deliveryPrice = 0;
              //   // this.grandTotal = this.totalPrice + this.orderTax;
              //   console.log('discount', this.discount);
              //   if (!this.discount || this.discount === null) {
              //     this.discount = 0;
              //   }
              //   this.grandTotal = (this.totalPrice - parseFloat(this.discount)) ;
              //   this.grandTotal = parseFloat(this.grandTotal).toFixed(2);
              //   console.log('grand total===>>', this.grandTotal);
              // }

            }, 500);
          } else {
            // console.log(';globle else')
            if (!this.discount || this.discount === null) {
              this.discount = 0;
              this.deliveryPrice = this.BaseShippingPrice;
              this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.deliveryPrice);
            } else {
              this.deliveryPrice = this.BaseShippingPrice;
              this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.deliveryPrice);
              this.grandTotal = this.grandTotal - parseFloat(this.discount);
            }
          }

          this.util.clearKeys('cart');
          this.util.setKeys('cart', JSON.stringify(this.cart)); // this.createBulkOrder();

          this.deliveryPrice = Math.floor(this.deliveryPrice).toFixed(2);
          this.grandTotal = Math.floor(this.grandTotal).toFixed(2);
        }
      }, {
        key: "createBulkOrder",
        value: function createBulkOrder() {
          var _this16 = this;

          var order = [];

          var ids = _toConsumableArray(new Set(this.cart.map(function (item) {
            return item.store_id;
          })));

          ids.forEach(function (element) {
            var param = {
              id: element,
              order: []
            };
            order.push(param);
          });
          ids.forEach(function (element, index) {
            _this16.cart.forEach(function (cart) {
              if (cart.store_id === element) {
                order[index].order.push(cart);
              }
            });
          });
          this.bulkOrder = order; // console.log(order);
        }
      }, {
        key: "checkProductInCart",
        value: function checkProductInCart(id) {
          return this.itemId.includes(id);
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "removeChild",
        value: function removeChild(childrenId) {
          var _this17 = this;

          var _loop = function _loop(i) {
            _this17.cart = _this17.cart.filter(function (x) {
              return x.id !== childrenId[i];
            });
            _this17.itemId = _this17.itemId.filter(function (x) {
              return x !== childrenId[i];
            });

            _this17.calcuate();
          };

          for (var i = 0; i < childrenId.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          // console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }, {
        key: "checkChild",
        value: function checkChild(id) {
          this.subCart = [];
          var cartItems = this.cart; // console.log("cartitems",cartItems, "length", cartItems.length );

          for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].parent_id != 0 || cartItems[i].parent_id != '0' || cartItems[i].parent_id != '') {
              // console.log("parent_id", cartItems[i].parent_id, "finish", id);
              var parentidArray = [];
              parentidArray = cartItems[i].parent_id.split(',');

              for (var j = 0; j < parentidArray.length; j++) {
                if (parentidArray[j] != '0' && parentidArray[j] == id) {
                  this.subCart.push(cartItems[i]);
                  this.calcuate();
                }
              }
            }
          }

          if (this.subCart.length > 0) {
            return this.subCart;
          } else {
            return "";
          }
        }
      }, {
        key: "cartAlertConfirm",
        value: function cartAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.util.getString('CHANGE TO'),
                      message: this.util.getString('You cant order from multiple stores, only the last order added to cart'),
                      buttons: [{
                        text: 'Okay',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getStoreInfo",
        value: function getStoreInfo(id) {
          var _this18 = this;

          var parms = {
            id: id
          };
          this.api.post('stores/getByUid', parms).subscribe(function (data) {
            if (data.status == 200) {
              _this18.crrStoreToCart = data.data[0]; // this.storeDeliverLength =  parseInt(this.AdminInfo.delivery_range)
            }
          });
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], CartService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var UtilService = /*#__PURE__*/function () {
      function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, menuCtrl, storage) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.isPaymentInit = false;
        this.isLoading = false;
        this.address = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.coupon = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.review = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.changeLocation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.profile = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.newOrder = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.appPage = [];
        this.appClosedMessage = '';
        this.translations = [];
        this.selectedCity = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isLoggedIn = false;
        this.favIds = [];
        this.newAddress = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // public creds = {
        //   sid: '',
        //   token: '',
        //   from: ''
        // }

        this.countrys = [{
          country_code: 'AF',
          country_name: 'Afghanistan',
          dialling_code: '93'
        }, {
          country_code: 'AL',
          country_name: 'Albania',
          dialling_code: '355'
        }, {
          country_code: 'DZ',
          country_name: 'Algeria',
          dialling_code: '213'
        }, {
          country_code: 'AS',
          country_name: 'American Samoa',
          dialling_code: '1'
        }, {
          country_code: 'AD',
          country_name: 'Andorra',
          dialling_code: '376'
        }, {
          country_code: 'AO',
          country_name: 'Angola',
          dialling_code: '244'
        }, {
          country_code: 'AI',
          country_name: 'Anguilla',
          dialling_code: '1'
        }, {
          country_code: 'AG',
          country_name: 'Antigua',
          dialling_code: '1'
        }, {
          country_code: 'AR',
          country_name: 'Argentina',
          dialling_code: '54'
        }, {
          country_code: 'AM',
          country_name: 'Armenia',
          dialling_code: '374'
        }, {
          country_code: 'AW',
          country_name: 'Aruba',
          dialling_code: '297'
        }, {
          country_code: 'AU',
          country_name: 'Australia',
          dialling_code: '61'
        }, {
          country_code: 'AI',
          country_name: 'Austria',
          dialling_code: '43'
        }, {
          country_code: 'AZ',
          country_name: 'Azerbaijan',
          dialling_code: '994'
        }, {
          country_code: 'BH',
          country_name: 'Bahrain',
          dialling_code: '973'
        }, {
          country_code: 'BD',
          country_name: 'Bangladesh',
          dialling_code: '880'
        }, {
          country_code: 'BB',
          country_name: 'Barbados',
          dialling_code: '1'
        }, {
          country_code: 'BY',
          country_name: 'Belarus',
          dialling_code: '375'
        }, {
          country_code: 'BE',
          country_name: 'Belgium',
          dialling_code: '32'
        }, {
          country_code: 'BZ',
          country_name: 'Belize',
          dialling_code: '501'
        }, {
          country_code: 'BJ',
          country_name: 'Benin',
          dialling_code: '229'
        }, {
          country_code: 'BM',
          country_name: 'Bermuda',
          dialling_code: '1'
        }, {
          country_code: 'BT',
          country_name: 'Bhutan',
          dialling_code: '975'
        }, {
          country_code: 'BO',
          country_name: 'Bolivia',
          dialling_code: '591'
        }, {
          country_code: 'BA',
          country_name: 'Bosnia and Herzegovina',
          dialling_code: '387'
        }, {
          country_code: 'BW',
          country_name: 'Botswana',
          dialling_code: '267'
        }, {
          country_code: 'BR',
          country_name: 'Brazil',
          dialling_code: '55'
        }, {
          country_code: 'IO',
          country_name: 'British Indian Ocean Territory',
          dialling_code: '246'
        }, {
          country_code: 'VG',
          country_name: 'British Virgin Islands',
          dialling_code: '1'
        }, {
          country_code: 'BN',
          country_name: 'Brunei',
          dialling_code: '673'
        }, {
          country_code: 'BG',
          country_name: 'Bulgaria',
          dialling_code: '359'
        }, {
          country_code: 'BF',
          country_name: 'Burkina Faso',
          dialling_code: '226'
        }, {
          country_code: 'MM',
          country_name: 'Burma Myanmar',
          dialling_code: '95'
        }, {
          country_code: 'BI',
          country_name: 'Burundi',
          dialling_code: '257'
        }, {
          country_code: 'KH',
          country_name: 'Cambodia',
          dialling_code: '855'
        }, {
          country_code: 'CM',
          country_name: 'Cameroon',
          dialling_code: '237'
        }, {
          country_code: 'CA',
          country_name: 'Canada',
          dialling_code: '1'
        }, {
          country_code: 'CV',
          country_name: 'Cape Verde',
          dialling_code: '238'
        }, {
          country_code: 'KY',
          country_name: 'Cayman Islands',
          dialling_code: '1'
        }, {
          country_code: 'CF',
          country_name: 'Central African Republic',
          dialling_code: '236'
        }, {
          country_code: 'ID',
          country_name: 'Chad',
          dialling_code: '235'
        }, {
          country_code: 'CL',
          country_name: 'Chile',
          dialling_code: '56'
        }, {
          country_code: 'CN',
          country_name: 'China',
          dialling_code: '86'
        }, {
          country_code: 'CO',
          country_name: 'Colombia',
          dialling_code: '57'
        }, {
          country_code: 'KM',
          country_name: 'Comoros',
          dialling_code: '269'
        }, {
          country_code: 'CK',
          country_name: 'Cook Islands',
          dialling_code: '682'
        }, {
          country_code: 'CR',
          country_name: 'Costa Rica',
          dialling_code: '506'
        }, {
          country_code: 'CI',
          country_name: "C\xF4te d'Ivoire",
          dialling_code: '225'
        }, {
          country_code: 'HR',
          country_name: 'Croatia',
          dialling_code: '385'
        }, {
          country_code: 'CU',
          country_name: 'Cuba',
          dialling_code: '53'
        }, {
          country_code: 'CY',
          country_name: 'Cyprus',
          dialling_code: '357'
        }, {
          country_code: 'CZ',
          country_name: 'Czech Republic',
          dialling_code: '420'
        }, {
          country_code: 'CD',
          country_name: 'Democratic Republic of Congo',
          dialling_code: '243'
        }, {
          country_code: 'DK',
          country_name: 'Denmark',
          dialling_code: '45'
        }, {
          country_code: 'DJ',
          country_name: 'Djibouti',
          dialling_code: '253'
        }, {
          country_code: 'DM',
          country_name: 'Dominica',
          dialling_code: '1'
        }, {
          country_code: 'DO',
          country_name: 'Dominican Republic',
          dialling_code: '1'
        }, {
          country_code: 'EC',
          country_name: 'Ecuador',
          dialling_code: '593'
        }, {
          country_code: 'EG',
          country_name: 'Egypt',
          dialling_code: '20'
        }, {
          country_code: 'SV',
          country_name: 'El Salvador',
          dialling_code: '503'
        }, {
          country_code: 'GQ',
          country_name: 'Equatorial Guinea',
          dialling_code: '240'
        }, {
          country_code: 'ER',
          country_name: 'Eritrea',
          dialling_code: '291'
        }, {
          country_code: 'EE',
          country_name: 'Estonia',
          dialling_code: '372'
        }, {
          country_code: 'ET',
          country_name: 'Ethiopia',
          dialling_code: '251'
        }, {
          country_code: 'FK',
          country_name: 'Falkland Islands',
          dialling_code: '500'
        }, {
          country_code: 'FO',
          country_name: 'Faroe Islands',
          dialling_code: '298'
        }, {
          country_code: 'FM',
          country_name: 'Federated States of Micronesia',
          dialling_code: '691'
        }, {
          country_code: 'FJ',
          country_name: 'Fiji',
          dialling_code: '679'
        }, {
          country_code: 'FI',
          country_name: 'Finland',
          dialling_code: '358'
        }, {
          country_code: 'FR',
          country_name: 'France',
          dialling_code: '33'
        }, {
          country_code: 'GF',
          country_name: 'French Guiana',
          dialling_code: '594'
        }, {
          country_code: 'PF',
          country_name: 'French Polynesia',
          dialling_code: '689'
        }, {
          country_code: 'GA',
          country_name: 'Gabon',
          dialling_code: '241'
        }, {
          country_code: 'GE',
          country_name: 'Georgia',
          dialling_code: '995'
        }, {
          country_code: 'DE',
          country_name: 'Germany',
          dialling_code: '49'
        }, {
          country_code: 'GH',
          country_name: 'Ghana',
          dialling_code: '233'
        }, {
          country_code: 'GI',
          country_name: 'Gibraltar',
          dialling_code: '350'
        }, {
          country_code: 'GR',
          country_name: 'Greece',
          dialling_code: '30'
        }, {
          country_code: 'GL',
          country_name: 'Greenland',
          dialling_code: '299'
        }, {
          country_code: 'GD',
          country_name: 'Grenada',
          dialling_code: '1'
        }, {
          country_code: 'GP',
          country_name: 'Guadeloupe',
          dialling_code: '590'
        }, {
          country_code: 'GU',
          country_name: 'Guam',
          dialling_code: '1'
        }, {
          country_code: 'GT',
          country_name: 'Guatemala',
          dialling_code: '502'
        }, {
          country_code: 'GN',
          country_name: 'Guinea',
          dialling_code: '224'
        }, {
          country_code: 'GW',
          country_name: 'Guinea-Bissau',
          dialling_code: '245'
        }, {
          country_code: 'GY',
          country_name: 'Guyana',
          dialling_code: '592'
        }, {
          country_code: 'HT',
          country_name: 'Haiti',
          dialling_code: '509'
        }, {
          country_code: 'HN',
          country_name: 'Honduras',
          dialling_code: '504'
        }, {
          country_code: 'HK',
          country_name: 'Hong Kong',
          dialling_code: '852'
        }, {
          country_code: 'HU',
          country_name: 'Hungary',
          dialling_code: '36'
        }, {
          country_code: 'IS',
          country_name: 'Iceland',
          dialling_code: '354'
        }, {
          country_code: 'IN',
          country_name: 'India',
          dialling_code: '91'
        }, {
          country_code: 'ID',
          country_name: 'Indonesia',
          dialling_code: '62'
        }, {
          country_code: 'IR',
          country_name: 'Iran',
          dialling_code: '98'
        }, {
          country_code: 'IQ',
          country_name: 'Iraq',
          dialling_code: '964'
        }, {
          country_code: 'IE',
          country_name: 'Ireland',
          dialling_code: '353'
        }, {
          country_code: 'IL',
          country_name: 'Israel',
          dialling_code: '972'
        }, {
          country_code: 'IT',
          country_name: 'Italy',
          dialling_code: '39'
        }, {
          country_code: 'JM',
          country_name: 'Jamaica',
          dialling_code: '1'
        }, {
          country_code: 'JP',
          country_name: 'Japan',
          dialling_code: '81'
        }, {
          country_code: 'JO',
          country_name: 'Jordan',
          dialling_code: '962'
        }, {
          country_code: 'KZ',
          country_name: 'Kazakhstan',
          dialling_code: '7'
        }, {
          country_code: 'KE',
          country_name: 'Kenya',
          dialling_code: '254'
        }, {
          country_code: 'KI',
          country_name: 'Kiribati',
          dialling_code: '686'
        }, {
          country_code: 'XK',
          country_name: 'Kosovo',
          dialling_code: '381'
        }, {
          country_code: 'KW',
          country_name: 'Kuwait',
          dialling_code: '965'
        }, {
          country_code: 'KG',
          country_name: 'Kyrgyzstan',
          dialling_code: '996'
        }, {
          country_code: 'LA',
          country_name: 'Laos',
          dialling_code: '856'
        }, {
          country_code: 'LV',
          country_name: 'Latvia',
          dialling_code: '371'
        }, {
          country_code: 'LB',
          country_name: 'Lebanon',
          dialling_code: '961'
        }, {
          country_code: 'LS',
          country_name: 'Lesotho',
          dialling_code: '266'
        }, {
          country_code: 'LR',
          country_name: 'Liberia',
          dialling_code: '231'
        }, {
          country_code: 'LY',
          country_name: 'Libya',
          dialling_code: '218'
        }, {
          country_code: 'LI',
          country_name: 'Liechtenstein',
          dialling_code: '423'
        }, {
          country_code: 'LT',
          country_name: 'Lithuania',
          dialling_code: '370'
        }, {
          country_code: 'LU',
          country_name: 'Luxembourg',
          dialling_code: '352'
        }, {
          country_code: 'MO',
          country_name: 'Macau',
          dialling_code: '853'
        }, {
          country_code: 'MK',
          country_name: 'Macedonia',
          dialling_code: '389'
        }, {
          country_code: 'MG',
          country_name: 'Madagascar',
          dialling_code: '261'
        }, {
          country_code: 'MW',
          country_name: 'Malawi',
          dialling_code: '265'
        }, {
          country_code: 'MY',
          country_name: 'Malaysia',
          dialling_code: '60'
        }, {
          country_code: 'MV',
          country_name: 'Maldives',
          dialling_code: '960'
        }, {
          country_code: 'ML',
          country_name: 'Mali',
          dialling_code: '223'
        }, {
          country_code: 'MT',
          country_name: 'Malta',
          dialling_code: '356'
        }, {
          country_code: 'MH',
          country_name: 'Marshall Islands',
          dialling_code: '692'
        }, {
          country_code: 'MQ',
          country_name: 'Martinique',
          dialling_code: '596'
        }, {
          country_code: 'MR',
          country_name: 'Mauritania',
          dialling_code: '222'
        }, {
          country_code: 'MU',
          country_name: 'Mauritius',
          dialling_code: '230'
        }, {
          country_code: 'YT',
          country_name: 'Mayotte',
          dialling_code: '262'
        }, {
          country_code: 'MX',
          country_name: 'Mexico',
          dialling_code: '52'
        }, {
          country_code: 'MD',
          country_name: 'Moldova',
          dialling_code: '373'
        }, {
          country_code: 'MC',
          country_name: 'Monaco',
          dialling_code: '377'
        }, {
          country_code: 'MN',
          country_name: 'Mongolia',
          dialling_code: '976'
        }, {
          country_code: 'ME',
          country_name: 'Montenegro',
          dialling_code: '382'
        }, {
          country_code: 'MS',
          country_name: 'Montserrat',
          dialling_code: '1'
        }, {
          country_code: 'MA',
          country_name: 'Morocco',
          dialling_code: '212'
        }, {
          country_code: 'MZ',
          country_name: 'Mozambique',
          dialling_code: '258'
        }, {
          country_code: 'NA',
          country_name: 'Namibia',
          dialling_code: '264'
        }, {
          country_code: 'NR',
          country_name: 'Nauru',
          dialling_code: '674'
        }, {
          country_code: 'NP',
          country_name: 'Nepal',
          dialling_code: '977'
        }, {
          country_code: 'NL',
          country_name: 'Netherlands',
          dialling_code: '31'
        }, {
          country_code: 'AN',
          country_name: 'Netherlands Antilles',
          dialling_code: '599'
        }, {
          country_code: 'NC',
          country_name: 'New Caledonia',
          dialling_code: '687'
        }, {
          country_code: 'NZ',
          country_name: 'New Zealand',
          dialling_code: '64'
        }, {
          country_code: 'NI',
          country_name: 'Nicaragua',
          dialling_code: '505'
        }, {
          country_code: 'NE',
          country_name: 'Niger',
          dialling_code: '227'
        }, {
          country_code: 'NG',
          country_name: 'Nigeria',
          dialling_code: '234'
        }, {
          country_code: 'NU',
          country_name: 'Niue',
          dialling_code: '683'
        }, {
          country_code: 'NF',
          country_name: 'Norfolk Island',
          dialling_code: '672'
        }, {
          country_code: 'KP',
          country_name: 'North Korea',
          dialling_code: '850'
        }, {
          country_code: 'MP',
          country_name: 'Northern Mariana Islands',
          dialling_code: '1'
        }, {
          country_code: 'NO',
          country_name: 'Norway',
          dialling_code: '47'
        }, {
          country_code: 'OM',
          country_name: 'Oman',
          dialling_code: '968'
        }, {
          country_code: 'PK',
          country_name: 'Pakistan',
          dialling_code: '92'
        }, {
          country_code: 'PW',
          country_name: 'Palau',
          dialling_code: '680'
        }, {
          country_code: 'PS',
          country_name: 'Palestine',
          dialling_code: '970'
        }, {
          country_code: 'PA',
          country_name: 'Panama',
          dialling_code: '507'
        }, {
          country_code: 'PG',
          country_name: 'Papua New Guinea',
          dialling_code: '675'
        }, {
          country_code: 'PY',
          country_name: 'Paraguay',
          dialling_code: '595'
        }, {
          country_code: 'PE',
          country_name: 'Peru',
          dialling_code: '51'
        }, {
          country_code: 'PH',
          country_name: 'Philippines',
          dialling_code: '63'
        }, {
          country_code: 'PL',
          country_name: 'Poland',
          dialling_code: '48'
        }, {
          country_code: 'PT',
          country_name: 'Portugal',
          dialling_code: '351'
        }, {
          country_code: 'PR',
          country_name: 'Puerto Rico',
          dialling_code: '1'
        }, {
          country_code: 'QA',
          country_name: 'Qatar',
          dialling_code: '974'
        }, {
          country_code: 'CG',
          country_name: 'Republic of the Congo',
          dialling_code: '242'
        }, {
          country_code: 'RE',
          country_name: 'Réunion',
          dialling_code: '262'
        }, {
          country_code: 'RO',
          country_name: 'Romania',
          dialling_code: '40'
        }, {
          country_code: 'RU',
          country_name: 'Russia',
          dialling_code: '7'
        }, {
          country_code: 'RW',
          country_name: 'Rwanda',
          dialling_code: '250'
        }, {
          country_code: 'BL',
          country_name: 'Saint Barthélemy',
          dialling_code: '590'
        }, {
          country_code: 'SH',
          country_name: 'Saint Helena',
          dialling_code: '290'
        }, {
          country_code: 'KN',
          country_name: 'Saint Kitts and Nevis',
          dialling_code: '1'
        }, {
          country_code: 'MF',
          country_name: 'Saint Martin',
          dialling_code: '590'
        }, {
          country_code: 'PM',
          country_name: 'Saint Pierre and Miquelon',
          dialling_code: '508'
        }, {
          country_code: 'VC',
          country_name: 'Saint Vincent and the Grenadines',
          dialling_code: '1'
        }, {
          country_code: 'WS',
          country_name: 'Samoa',
          dialling_code: '685'
        }, {
          country_code: 'SM',
          country_name: 'San Marino',
          dialling_code: '378'
        }, {
          country_code: 'ST',
          country_name: 'São Tomé and Príncipe',
          dialling_code: '239'
        }, {
          country_code: 'SA',
          country_name: 'Saudi Arabia',
          dialling_code: '966'
        }, {
          country_code: 'SN',
          country_name: 'Senegal',
          dialling_code: '221'
        }, {
          country_code: 'RS',
          country_name: 'Serbia',
          dialling_code: '381'
        }, {
          country_code: 'SC',
          country_name: 'Seychelles',
          dialling_code: '248'
        }, {
          country_code: 'SL',
          country_name: 'Sierra Leone',
          dialling_code: '232'
        }, {
          country_code: 'SG',
          country_name: 'Singapore',
          dialling_code: '65'
        }, {
          country_code: 'SK',
          country_name: 'Slovakia',
          dialling_code: '421'
        }, {
          country_code: 'SI',
          country_name: 'Slovenia',
          dialling_code: '386'
        }, {
          country_code: 'SB',
          country_name: 'Solomon Islands',
          dialling_code: '677'
        }, {
          country_code: 'SO',
          country_name: 'Somalia',
          dialling_code: '252'
        }, {
          country_code: 'ZA',
          country_name: 'South Africa',
          dialling_code: '27'
        }, {
          country_code: 'KR',
          country_name: 'South Korea',
          dialling_code: '82'
        }, {
          country_code: 'ES',
          country_name: 'Spain',
          dialling_code: '34'
        }, {
          country_code: 'LK',
          country_name: 'Sri Lanka',
          dialling_code: '94'
        }, {
          country_code: 'LC',
          country_name: 'St. Lucia',
          dialling_code: '1'
        }, {
          country_code: 'SD',
          country_name: 'Sudan',
          dialling_code: '249'
        }, {
          country_code: 'SR',
          country_name: 'Suriname',
          dialling_code: '597'
        }, {
          country_code: 'SZ',
          country_name: 'Swaziland',
          dialling_code: '268'
        }, {
          country_code: 'SE',
          country_name: 'Sweden',
          dialling_code: '46'
        }, {
          country_code: 'CH',
          country_name: 'Switzerland',
          dialling_code: '41'
        }, {
          country_code: 'SY',
          country_name: 'Syria',
          dialling_code: '963'
        }, {
          country_code: 'TW',
          country_name: 'Taiwan',
          dialling_code: '886'
        }, {
          country_code: 'TJ',
          country_name: 'Tajikistan',
          dialling_code: '992'
        }, {
          country_code: 'TZ',
          country_name: 'Tanzania',
          dialling_code: '255'
        }, {
          country_code: 'TH',
          country_name: 'Thailand',
          dialling_code: '66'
        }, {
          country_code: 'BS',
          country_name: 'The Bahamas',
          dialling_code: '1'
        }, {
          country_code: 'GM',
          country_name: 'The Gambia',
          dialling_code: '220'
        }, {
          country_code: 'TL',
          country_name: 'Timor-Leste',
          dialling_code: '670'
        }, {
          country_code: 'TG',
          country_name: 'Togo',
          dialling_code: '228'
        }, {
          country_code: 'TK',
          country_name: 'Tokelau',
          dialling_code: '690'
        }, {
          country_code: 'TO',
          country_name: 'Tonga',
          dialling_code: '676'
        }, {
          country_code: 'TT',
          country_name: 'Trinidad and Tobago',
          dialling_code: '1'
        }, {
          country_code: 'TN',
          country_name: 'Tunisia',
          dialling_code: '216'
        }, {
          country_code: 'TR',
          country_name: 'Turkey',
          dialling_code: '90'
        }, {
          country_code: 'TM',
          country_name: 'Turkmenistan',
          dialling_code: '993'
        }, {
          country_code: 'TC',
          country_name: 'Turks and Caicos Islands',
          dialling_code: '1'
        }, {
          country_code: 'TV',
          country_name: 'Tuvalu',
          dialling_code: '688'
        }, {
          country_code: 'UG',
          country_name: 'Uganda',
          dialling_code: '256'
        }, {
          country_code: 'UA',
          country_name: 'Ukraine',
          dialling_code: '380'
        }, {
          country_code: 'AE',
          country_name: 'United Arab Emirates',
          dialling_code: '971'
        }, {
          country_code: 'GB',
          country_name: 'United Kingdom',
          dialling_code: '44'
        }, {
          country_code: 'US',
          country_name: 'United States',
          dialling_code: '1'
        }, {
          country_code: 'UY',
          country_name: 'Uruguay',
          dialling_code: '598'
        }, {
          country_code: 'VI',
          country_name: 'US Virgin Islands',
          dialling_code: '1'
        }, {
          country_code: 'UZ',
          country_name: 'Uzbekistan',
          dialling_code: '998'
        }, {
          country_code: 'VU',
          country_name: 'Vanuatu',
          dialling_code: '678'
        }, {
          country_code: 'VA',
          country_name: 'Vatican City',
          dialling_code: '39'
        }, {
          country_code: 'VE',
          country_name: 'Venezuela',
          dialling_code: '58'
        }, {
          country_code: 'VN',
          country_name: 'Vietnam',
          dialling_code: '84'
        }, {
          country_code: 'WF',
          country_name: 'Wallis and Futuna',
          dialling_code: '681'
        }, {
          country_code: 'YE',
          country_name: 'Yemen',
          dialling_code: '967'
        }, {
          country_code: 'ZM',
          country_name: 'Zambia',
          dialling_code: '260'
        }, {
          country_code: 'ZW',
          country_name: 'Zimbabwe',
          dialling_code: '263'
        }];
        this.appPage = [{
          title: 'Home',
          url: 'tabs/home',
          icon: 'assets/sidemenu/home.png',
          icon2: 'assets/sidemenu/home2.png',
          icn: 'home-outline'
        }, {
          title: 'History',
          url: 'tabs/orders',
          icon: 'assets/sidemenu/home.png',
          icon2: 'assets/sidemenu/home2.png',
          icn: 'document-text-outline'
        }, {
          title: 'Profile',
          url: 'tabs/account',
          icon: 'assets/sidemenu/user.png',
          icon2: 'assets/sidemenu/user2.png',
          icn: 'person-outline'
        }, {
          title: 'Language',
          url: 'languages',
          icon: 'assets/sidemenu/language.png',
          icon2: 'assets/sidemenu/language2.png',
          icn: 'language-outline'
        }, {
          title: 'About',
          url: 'tabs/account/about',
          icon: 'assets/sidemenu/info.png',
          icon2: 'assets/sidemenu/info2.png',
          icn: 'alert-circle-outline'
        }, {
          title: 'Contact us',
          url: 'tabs/account/contacts',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'mail-outline'
        }, {
          title: 'FAQs',
          url: 'tabs/account/faqs',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'flag-outline'
        }, {
          title: 'Help',
          url: 'tabs/account/help',
          icon: 'assets/sidemenu/contact.png',
          icon2: 'assets/sidemenu/contact2.png',
          icn: 'help-circle-outline'
        }];
      }
      /*
      Start Loader
      Call this method to Start your Loader
      */


      _createClass(UtilService, [{
        key: "publishAddress",
        value: function publishAddress(data) {
          this.address.next(data);
        }
      }, {
        key: "setFav",
        value: function setFav(id) {
          this.favIds.push(id);
        }
      }, {
        key: "removeFav",
        value: function removeFav(id) {
          this.favIds = this.favIds.filter(function (x) {
            return x !== id;
          });
        }
      }, {
        key: "publishNewOrder",
        value: function publishNewOrder() {
          this.newOrder.next();
        }
      }, {
        key: "subscribeOrder",
        value: function subscribeOrder() {
          return this.newOrder;
        }
      }, {
        key: "publishReview",
        value: function publishReview(data) {
          this.review.next(data);
        }
      }, {
        key: "publishProfile",
        value: function publishProfile(data) {
          this.profile.next(data);
        }
      }, {
        key: "publishNewAddress",
        value: function publishNewAddress() {
          this.newAddress.next();
        }
      }, {
        key: "subscribeNewAddress",
        value: function subscribeNewAddress() {
          return this.newAddress;
        }
      }, {
        key: "observProfile",
        value: function observProfile() {
          return this.profile;
        }
      }, {
        key: "getReviewObservable",
        value: function getReviewObservable() {
          return this.review;
        }
      }, {
        key: "publishLocation",
        value: function publishLocation(data) {
          this.changeLocation.next(data);
        }
      }, {
        key: "subscribeLocation",
        value: function subscribeLocation() {
          return this.changeLocation;
        }
      }, {
        key: "publishLoggedIn",
        value: function publishLoggedIn(data) {
          this.loggedIn.next(data);
        }
      }, {
        key: "subscribeLoggedIn",
        value: function subscribeLoggedIn() {
          return this.loggedIn;
        }
      }, {
        key: "publishCity",
        value: function publishCity(data) {
          this.selectedCity.next(data);
        }
      }, {
        key: "subscribeCity",
        value: function subscribeCity() {
          return this.selectedCity;
        }
      }, {
        key: "getObservable",
        value: function getObservable() {
          return this.address;
        }
      }, {
        key: "publishCoupon",
        value: function publishCoupon(data) {
          this.coupon.next(data);
        }
      }, {
        key: "getCouponObservable",
        value: function getCouponObservable() {
          return this.coupon;
        }
      }, {
        key: "setOrders",
        value: function setOrders(data) {
          this.orders = null;
          this.orders = data;
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menuCtrl.toggle();
        }
      }, {
        key: "getKeys",
        value: function getKeys(key) {
          var _this19 = this;

          return new Promise(function (resolve, reject) {
            _this19.storage.get(key).then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "clearKeys",
        value: function clearKeys(key) {
          this.storage.remove(key);
        }
      }, {
        key: "setKeys",
        value: function setKeys(key, value) {
          var _this20 = this;

          return new Promise(function (resolve, reject) {
            _this20.storage.set(key, value).then(function (data) {
              resolve(data);
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "gerOrder",
        value: function gerOrder() {
          return this.orders;
        }
      }, {
        key: "show",
        value: function show(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this21 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.isLoading = true;
                    _context6.next = 3;
                    return this.loadingCtrl.create({
                      message: msg,
                      spinner: 'bubbles'
                    }).then(function (a) {
                      a.present().then(function () {
                        //console.log('presented');
                        if (!_this21.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.isLoading = false;
                    _context7.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context7.abrupt("return", _context7.sent);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var alert;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.alertCtrl.create({
                      header: '',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context9.sent;
                    _context9.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var alert;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context10.sent;
                    _context10.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var emailfilter, alert;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context11.next = 10;
                      break;
                    }

                    _context11.next = 4;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: 'Please enter valid email',
                      buttons: ['OK']
                    });

                  case 4:
                    alert = _context11.sent;
                    _context11.next = 7;
                    return alert.present();

                  case 7:
                    return _context11.abrupt("return", false);

                  case 10:
                    return _context11.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background
           color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, colors, positon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var toast;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: colors,
                      position: positon
                    });

                  case 2:
                    toast = _context12.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "shoNotification",
        value: function shoNotification(msg, colors, positon) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var toast;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 4000,
                      color: colors,
                      position: positon,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        handler: function handler() {// console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context13.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var toast;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context14.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          // console.log('Error got in service =>', err)
          if (err.status === -1) {
            this.showErrorAlert('Failed To Connect With Server');
          } else if (err.status === 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
          } else if (err.status === 500) {
            this.showErrorAlert('Somethimg Went Wrong..');
          }
        }
      }, {
        key: "makeid",
        value: function makeid(length) {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;

          for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }

          return result;
        } // getString(str) {
        //   if (this.translations[str]) {
        //     return this.translations[str];
        //   }
        //   return str;
        // }

      }, {
        key: "__translate",
        value: function __translate(str) {
          if (this.translations[str]) {
            return this.translations[str];
          }

          return str;
        }
      }, {
        key: "getString",
        value: function getString(str, isDateString) {
          if (isDateString) {
            var dtString = str.split(' ');
            var covertedString = [];

            for (var i = 0; i < dtString.length; i++) {
              var k = dtString[i];
              var isHasCommas = k.indexOf(",");
              var addCommas = false;

              if (isHasCommas != -1) {
                k = k.replace(/,/g, '');
                addCommas = true;
              }

              var trsStr = this.__translate(k);

              covertedString.push([trsStr, addCommas ? ',' : ''].join(''));
            }

            return covertedString.join(' ');
          } else {
            return this.__translate(str);
          }
          /*if (this.translations[str]) {
            return this.translations[str];
          }
          return str;*/

        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])], UtilService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      // baseURL: 'https://most-api.flyvip.biz/index.php/',
      // mediaURL: 'https://most-api.flyvip.biz/uploads/',
      // baseURL: 'http://192.168.1.33/most-api/index.php/',
      // mediaURL: 'http://192.168.1.33/most-api/uploads/',
      // baseURL: 'https://fly.manytranslations.com/index.php/',
      // mediaURL: 'https://fly.manytranslations.com/uploads/',
      // baseURL: 'https://most-api.flyvip.biz/index.php/',
      // mediaURL: 'https://most-api.flyvip.biz/uploads/',
      baseURL: 'https://most-api.flyvip.co.il/index.php/',
      mediaURL: 'https://most-api.flyvip.co.il/uploads/',
      firebase: {
        apiKey: "AIzaSyC-sHiCnL96PiXV7ornEu1pQ6OUkyoTs6A",
        authDomain: "flyvip-8c66e.firebaseapp.com",
        projectId: "flyvip-8c66e",
        storageBucket: "flyvip-8c66e.appspot.com",
        messagingSenderId: "364812891343",
        appId: "1:364812891343:web:8e196e0767a77d55e233ba",
        measurementId: "G-PMRBQJWGMY"
      },
      // onesignal: {
      //   appId: 'd9d6c621-8d9d-4a2f-9098-cfae13036d8b',
      //   googleProjectNumber: '888633870378',
      //   restKey: 'YmQ4OWYwNTEtZjlkMy00NzhhLTkyY2UtN2MwZWY0YjYyNTFm'
      //   // appId: '',
      //   // googleProjectNumber: '',
      //   // restKey: ''
      // },
      ///FlyVip Onesignal Keys
      onesignal: {
        appId: '0a0822e8-efcc-40d6-bd4c-d69a8a68ee59',
        googleProjectNumber: '364812891343',
        // restKey: 'ZjE5MzdlNDEtMTA4ZS00MzI1LWI1Y2QtNjI4ZmY5MGM4NGUz'
        restKey: 'ZTJiMGRjNmYtNWIzZi00OWQxLTkwZDYtMTk5MDcxNGEyYTJj'
      },
      //// this is used defoult in admin
      // onesignal: {
      //   appId: '67ce0dc4-d91b-47b1-9461-e5435a59ef4d',
      //   googleProjectNumber: '62057288644',
      //   restKey: 'NzE1YmEyZjItNThjOS00ZDk2LThiNDktNmJmYzk1ZjQ2ZGQ3'
      // },
      general: {
        symbol: '₪',
        code: 'ILS'
      },
      authToken: '175162159'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\puneet\flyvip_23-03-22\User_app_06-04-2021\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map