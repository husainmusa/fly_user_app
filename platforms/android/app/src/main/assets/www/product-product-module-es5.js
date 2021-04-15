function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
  /***/
  "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js ***!
    \*********************************************************************************************/

  /*! exports provided: NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, NgxIonicImageViewerModule, NgxIonicImageViewerService, ViewerModalComponent */

  /***/
  function node_modulesNgxIonicImageViewer__ivy_ngcc__Fesm2015NgxIonicImageViewerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerComponent", function () {
      return NgxIonicImageViewerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerDirective", function () {
      return NgxIonicImageViewerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerModule", function () {
      return NgxIonicImageViewerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerService", function () {
      return NgxIonicImageViewerService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewerModalComponent", function () {
      return ViewerModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["sliderRef"];

    var _c1 = function _c1(a0) {
      return {
        "no-title": a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "no-text": a0
      };
    };

    var NgxIonicImageViewerService = function NgxIonicImageViewerService() {
      _classCallCheck(this, NgxIonicImageViewerService);
    };

    NgxIonicImageViewerService.ɵfac = function NgxIonicImageViewerService_Factory(t) {
      return new (t || NgxIonicImageViewerService)();
    };

    NgxIonicImageViewerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxIonicImageViewerService,
      factory: NgxIonicImageViewerService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    NgxIonicImageViewerService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    NgxIonicImageViewerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgxIonicImageViewerService_Factory() {
        return new NgxIonicImageViewerService();
      },
      token: NgxIonicImageViewerService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxIonicImageViewerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/viewer-modal/viewer-modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ViewerModalComponent = /*#__PURE__*/function () {
      /**
       * @param {?} modalController
       */
      function ViewerModalComponent(modalController) {
        _classCallCheck(this, ViewerModalComponent);

        this.modalController = modalController; // tslint:disable: no-inferrable-types

        this.alt = '';
        this.scheme = 'auto';
        this.slideOptions = {};
        this.srcFallback = '';
        this.srcHighRes = '';
        this.swipeToClose = true;
        this.text = '';
        this.title = '';
        this.titleSize = ''; // tslint:enable: no-inferrable-types

        this.defaultSlideOptions = {
          centeredSlides: true,
          passiveListeners: false,
          zoom: {
            enabled: true
          }
        };
        this.options = {};
        this.swipeState = {
          phase: 'init',
          direction: 'none',
          swipeType: 'none',
          startX: 0,
          startY: 0,
          distance: 0,
          distanceX: 0,
          distanceY: 0,
          threshold: 150,
          // required min distance traveled to be considered swipe
          restraint: 100,
          // maximum distance allowed at the same time in perpendicular direction
          allowedTime: 500,
          // maximum time allowed to travel that distance
          elapsedTime: 0,
          startTime: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(ViewerModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var swiper;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.options = Object.assign({}, this.defaultSlideOptions, this.slideOptions);
                    this.src = this.srcHighRes || this.src;
                    this.setStyle();
                    this.setScheme(this.scheme);
                    this.initSwipeToClose(this.swipeToClose);
                    /**
                     * Current Workaround
                     * See reported bug: https://github.com/ionic-team/ionic/issues/19638#issuecomment-584828315
                     * Hint: Comment in '<ion-slide>' in component
                     * @type {?}
                     */

                    _context.next = 7;
                    return this.slides.getSwiper();

                  case 7:
                    swiper = _context.sent;
                    swiper.appendSlide("<ion-slide><img alt=\"".concat(this.alt, "\" src=\"").concat(this.src, "\" onerror=\"this.src='").concat(this.srcFallback, "'\"/></ion-slide>"));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle() {
          /** @type {?} */
          var el = document.querySelector('.ion-img-viewer');
          el.style.setProperty('--height', '100%');
          el.style.setProperty('--width', '100%');
          el.style.setProperty('--border-radius', '0');
        }
        /**
         * @param {?} scheme
         * @return {?}
         */

      }, {
        key: "setScheme",
        value: function setScheme(scheme) {
          if (scheme === 'auto') {
            return;
          }
          /** @type {?} */


          var el = document.querySelector('.ion-img-viewer');

          if (this.scheme === 'light') {
            el.style.setProperty('--ion-background-color', '#ffffff');
            el.style.setProperty('--ion-background-color-rgb', '255, 255, 255');
            el.style.setProperty('--ion-text-color', '#000');
            el.style.setProperty('--ion-text-color-rgb', '0,0,0');
          }

          if (this.scheme === 'dark') {
            if (el.classList.contains('ios')) {
              el.style.setProperty('--ion-background-color', '#000000');
              el.style.setProperty('--ion-background-color-rgb', '0, 0, 0');
            } else {
              el.style.setProperty('--ion-background-color', '#121212');
              el.style.setProperty('--ion-background-color-rgb', '18,18,18');
            }

            el.style.setProperty('--ion-text-color', '#ffffff');
            el.style.setProperty('--ion-text-color-rgb', '255,255,255');
          }
        }
        /**
         * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
         * @param {?=} isActive
         * @return {?}
         */

      }, {
        key: "initSwipeToClose",
        value: function initSwipeToClose() {
          var _this = this;

          var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (!isActive) {
            return;
          }
          /** @type {?} */


          var el = document.querySelector('ion-modal');
          el.addEventListener('mousedown',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeStart(event);
          }, true);
          el.addEventListener('mousemove',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeMove(event);
          }, true);
          el.addEventListener('mouseup',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeEnd(event);
          }, true);
          el.addEventListener('touchstart',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeStart(event);
          }, true);
          el.addEventListener('touchmove',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeMove(event);
          }, true);
          el.addEventListener('touchend',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeEnd(event);
          }, true);
          this.modalController.getTop().then(
          /**
          * @param {?} modal
          * @return {?}
          */
          function (modal) {
            modal.onWillDismiss().then(
            /**
            * @return {?}
            */
            function () {
              document.removeEventListener('mousedown', _this.swipeStart, true);
              document.removeEventListener('mousemove', _this.swipeMove, true);
              document.removeEventListener('mouseup', _this.swipeMove, true);
              document.removeEventListener('touchstart', _this.swipeStart, true);
              document.removeEventListener('touchmove', _this.swipeMove, true);
              document.removeEventListener('touchend', _this.swipeMove, true);
            });
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "swipeStart",
        value: function swipeStart(event) {
          var _ref = event.type === 'touchstart' ? event.changedTouches[0] : event,
              pageX = _ref.pageX,
              pageY = _ref.pageY;

          this.swipeState = Object.assign({}, this.swipeState, {
            phase: 'start',
            direction: 'none',
            distance: 0,
            startX: pageX,
            startY: pageY,
            startTime: new Date().getTime()
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "swipeMove",
        value: function swipeMove(event) {
          if (this.swipeState.phase === 'none') {
            return;
          }

          var _ref2 = event.type === 'touchmove' ? event.changedTouches[0] : event,
              pageX = _ref2.pageX,
              pageY = _ref2.pageY; // get horizontal dist traveled by finger while in contact with surface

          /** @type {?} */


          var distanceX = pageX - this.swipeState.startX; // get vertical dist traveled by finger while in contact with surface

          /** @type {?} */

          var distanceY = pageY - this.swipeState.startY;
          /** @type {?} */

          var direction;
          /** @type {?} */

          var distance;

          if (Math.abs(distanceX) > Math.abs(distanceY)) {
            // if distance traveled horizontally is greater than vertically, consider this a horizontal swipe
            direction = distanceX < 0 ? 'left' : 'right';
            distance = distanceX;
          } else {
            // else consider this a vertical swipe
            direction = distanceY < 0 ? 'up' : 'down';
            distance = distanceY;
          }

          this.swipeState = Object.assign({}, this.swipeState, {
            phase: 'move',
            direction: direction,
            distance: distance,
            distanceX: distanceX,
            distanceY: distanceY
          });
          event.preventDefault();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "swipeEnd",
        value: function swipeEnd(event) {
          if (this.swipeState.phase === 'none') {
            return;
          }

          var _this$swipeState = this.swipeState,
              allowedTime = _this$swipeState.allowedTime,
              direction = _this$swipeState.direction,
              restraint = _this$swipeState.restraint,
              startTime = _this$swipeState.startTime,
              threshold = _this$swipeState.threshold,
              distanceX = _this$swipeState.distanceX,
              distanceY = _this$swipeState.distanceY;
          /** @type {?} */

          var swipeType;
          /** @type {?} */

          var elapsedTime = new Date().getTime() - startTime;

          if (elapsedTime <= allowedTime) {
            // first condition for a swipe met
            if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
              // 2nd condition for horizontal swipe met
              swipeType = direction; // set swipeType to either "left" or "right"
            } else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
              // 2nd condition for vertical swipe met
              swipeType = direction; // set swipeType to either "top" or "down"
            }
          }

          this.swipeState = Object.assign({}, this.swipeState, {
            phase: 'end',
            swipeType: swipeType
          });

          if (swipeType === 'down') {
            return this.closeModal();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }]);

      return ViewerModalComponent;
    }();

    ViewerModalComponent.ɵfac = function ViewerModalComponent_Factory(t) {
      return new (t || ViewerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
    };

    ViewerModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewerModalComponent,
      selectors: [["ion-viewer-modal"]],
      viewQuery: function ViewerModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
        }
      },
      inputs: {
        alt: "alt",
        scheme: "scheme",
        slideOptions: "slideOptions",
        srcFallback: "srcFallback",
        srcHighRes: "srcHighRes",
        swipeToClose: "swipeToClose",
        text: "text",
        title: "title",
        titleSize: "titleSize",
        src: "src"
      },
      decls: 14,
      vars: 11,
      consts: [[3, "ngClass"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "name", "close"], [3, "size"], [3, "forceOverscroll"], [3, "options"], ["sliderRef", ""], [1, "ion-text-center"]],
      template: function ViewerModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewerModalComponent_Template_ion_button_click_3_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-slides", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-toolbar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.title.length <= 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.titleSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forceOverscroll", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.text.length <= 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"]],
      styles: ["ion-slides[_ngcontent-%COMP%]{--height:100%;height:100%}ion-toolbar[_ngcontent-%COMP%]{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header[_ngcontent-%COMP%]{opacity:1;position:absolute}ion-header.no-title[_ngcontent-%COMP%]:after{content:none}ion-header.no-title[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer[_ngcontent-%COMP%]{position:absolute;bottom:0}ion-footer.no-text[_ngcontent-%COMP%]:before{content:none}ion-footer.no-text[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
    });
    /** @nocollapse */

    ViewerModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ViewerModalComponent.propDecorators = {
      alt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scheme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcFallback: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcHighRes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      swipeToClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['sliderRef', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewerModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ion-viewer-modal',
          template: "<ion-header [ngClass]=\"{ 'no-title': title.length <= 0 }\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [size]=\"titleSize\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n  <ion-slides [options]=\"options\" #sliderRef>\n    <!-- <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [alt]=\"this.alt\" [src]=\"this.src\" (error)=\"onError($event)\" />\n      </div>\n    </ion-slide> -->\n  </ion-slides>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ 'no-text': text.length <= 0 }\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-text>{{ text }}</ion-text>\n  </ion-toolbar>\n</ion-footer>\n",
          styles: ["ion-slides{--height:100%;height:100%}ion-toolbar{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header{opacity:1;position:absolute}ion-header.no-title:after{content:none}ion-header.no-title ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer{position:absolute;bottom:0}ion-footer.no-text:before{content:none}ion-footer.no-text ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      }, {
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sliderRef', {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgxIonicImageViewerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} modalController
       */
      function NgxIonicImageViewerComponent(modalController) {
        _classCallCheck(this, NgxIonicImageViewerComponent);

        this.modalController = modalController;
      }
      /**
       * @param {?} src
       * @param {?=} srcFallback
       * @param {?=} srcHighRes
       * @param {?=} title
       * @param {?=} titleSize
       * @param {?=} text
       * @param {?=} scheme
       * @param {?=} slideOptions
       * @param {?=} swipeToClose
       * @return {?}
       */


      _createClass(NgxIonicImageViewerComponent, [{
        key: "viewImage",
        value: function viewImage(src) {
          var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
          var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
          var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
          var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: ViewerModalComponent,
                      componentProps: {
                        src: src,
                        srcFallback: srcFallback,
                        srcHighRes: srcHighRes,
                        title: title,
                        titleSize: titleSize,
                        text: text,
                        scheme: scheme,
                        slideOptions: slideOptions,
                        swipeToClose: swipeToClose
                      },
                      cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NgxIonicImageViewerComponent;
    }();

    NgxIonicImageViewerComponent.ɵfac = function NgxIonicImageViewerComponent_Factory(t) {
      return new (t || NgxIonicImageViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
    };

    NgxIonicImageViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxIonicImageViewerComponent,
      selectors: [["ion-img-viewer"]],
      inputs: {
        alt: "alt",
        cssClass: "cssClass",
        scheme: "scheme",
        slideOptions: "slideOptions",
        src: "src",
        srcFallback: "srcFallback",
        srcHighRes: "srcHighRes",
        swipeToClose: "swipeToClose",
        text: "text",
        title: "title",
        titleSize: "titleSize"
      },
      decls: 1,
      vars: 2,
      consts: [[3, "alt", "src", "click", "error"]],
      template: function NgxIonicImageViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxIonicImageViewerComponent_Template_img_click_0_listener() {
            return ctx.viewImage(ctx.src, ctx.srcFallback, ctx.srcHighRes, ctx.title, ctx.titleSize, ctx.text, ctx.scheme, ctx.slideOptions, ctx.swipeToClose);
          })("error", function NgxIonicImageViewerComponent_Template_img_error_0_listener() {
            return ctx.src = ctx.srcFallback;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.alt)("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"]
    });
    /** @nocollapse */

    NgxIonicImageViewerComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    NgxIonicImageViewerComponent.propDecorators = {
      alt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cssClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scheme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcFallback: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcHighRes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      swipeToClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxIonicImageViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ion-img-viewer',
          template: "<img\n  [alt]=\"alt\"\n  [src]=\"src\"\n  (click)=\"viewImage(src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose)\"\n  (error)=\"src = srcFallback\"\n/>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
          styles: ["\n      :host {\n        display: block;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      }, {
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgxIonicImageViewerDirective = /*#__PURE__*/function () {
      /**
       * @param {?} el
       * @param {?} renderer
       * @param {?} modalController
       */
      function NgxIonicImageViewerDirective(el, renderer, modalController) {
        _classCallCheck(this, NgxIonicImageViewerDirective);

        this.el = el;
        this.renderer = renderer;
        this.modalController = modalController;
      }
      /**
       * @return {?}
       */


      _createClass(NgxIonicImageViewerDirective, [{
        key: "onClick",
        value: function onClick() {
          this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
        }
        /**
         * @param {?} error
         * @return {?}
         */

      }, {
        key: "onError",
        value: function onError(error) {
          if (this.src !== this.el.nativeElement.src) {
            this.src = this.el.nativeElement.src;
          }

          if (this.srcFallback) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.el.nativeElement.hasAttribute('src')) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
          }
        }
        /**
         * @param {?} src
         * @param {?=} srcFallback
         * @param {?=} srcHighRes
         * @param {?=} title
         * @param {?=} titleSize
         * @param {?=} text
         * @param {?=} scheme
         * @param {?=} slideOptions
         * @param {?=} swipeToClose
         * @return {?}
         */

      }, {
        key: "viewImage",
        value: function viewImage(src) {
          var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
          var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
          var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
          var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: ViewerModalComponent,
                      componentProps: {
                        src: src,
                        srcFallback: srcFallback,
                        srcHighRes: srcHighRes,
                        title: title,
                        titleSize: titleSize,
                        text: text,
                        scheme: scheme,
                        slideOptions: slideOptions,
                        swipeToClose: swipeToClose
                      },
                      cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return NgxIonicImageViewerDirective;
    }();

    NgxIonicImageViewerDirective.ɵfac = function NgxIonicImageViewerDirective_Factory(t) {
      return new (t || NgxIonicImageViewerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
    };

    NgxIonicImageViewerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgxIonicImageViewerDirective,
      selectors: [["", "ionImgViewer", ""]],
      hostBindings: function NgxIonicImageViewerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxIonicImageViewerDirective_click_HostBindingHandler() {
            return ctx.onClick();
          })("error", function NgxIonicImageViewerDirective_error_HostBindingHandler($event) {
            return ctx.onError($event);
          });
        }
      },
      inputs: {
        src: "src",
        cssClass: "cssClass",
        scheme: "scheme",
        slideOptions: "slideOptions",
        srcFallback: "srcFallback",
        srcHighRes: "srcHighRes",
        swipeToClose: "swipeToClose",
        text: "text",
        title: "title",
        titleSize: "titleSize"
      }
    });
    /** @nocollapse */

    NgxIonicImageViewerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    NgxIonicImageViewerDirective.propDecorators = {
      cssClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scheme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcFallback: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcHighRes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      swipeToClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }],
      onError: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['error', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxIonicImageViewerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ionImgViewer]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['error', ['$event']]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgxIonicImageViewerModule = function NgxIonicImageViewerModule() {
      _classCallCheck(this, NgxIonicImageViewerModule);
    };

    NgxIonicImageViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxIonicImageViewerModule
    });
    NgxIonicImageViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgxIonicImageViewerModule_Factory(t) {
        return new (t || NgxIonicImageViewerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxIonicImageViewerModule, {
        declarations: function declarations() {
          return [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]];
        },
        exports: function exports() {
          return [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxIonicImageViewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
          entryComponents: [ViewerModalComponent],
          exports: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-ionic-image-viewer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-ionic-image-viewer.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"loaded && name\">\n      <ion-button (click)=\"onFav()\">\n        <ion-icon slot=\"icon-only\" [name]=\"util.favIds.includes(id)?'heart': 'heart-outline'\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"slider_div\" *ngIf=\"loaded && name\">\n    <ion-slides [options]=\"slideOpts\" pager>\n      <ion-slide *ngFor=\"let item of gallery\">\n        <div class=\"back_image\" (click)=\"openViewer(api.mediaURL+item)\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+item+'),url(assets/imgs/user.png)'}\">\n          <div class=\"percent\" *ngIf=\"this.discount !== '0'\"> {{this.discount}}% </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded && name\">\n\n\n    <div class=\"detail_div\">\n      <ion-label class=\"pro_name\">{{name}}</ion-label>\n      <ion-label class=\"itemsKind\" *ngIf=\"size ==='0'\">\n        <span *ngIf=\"have_gram === '1'\"> {{gram}} grams </span>\n        <span *ngIf=\"have_kg === '1'\"> {{kg}} kg </span>\n        <span *ngIf=\"have_liter ==='1'\"> {{liter}} ltr </span>\n        <span *ngIf=\"have_ml ==='1'\"> {{ml}} ml</span>\n        <span *ngIf=\"have_pcs === '1'\"> {{pcs}} pcs </span>\n      </ion-label>\n\n      <div class=\"ratingItems ion-activatable\" (click)=\"productRating()\">\n        <ion-icon [name]=\"rate >= 1 ? 'star':'star'\" [color]=\"rate >= 1 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"rate >= 2 ? 'star':'star'\" [color]=\"rate >= 2 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"rate >= 3 ? 'star':'star'\" [color]=\"rate >= 3 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"rate >= 4 ? 'star':'star'\" [color]=\"rate >= 4 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"rate >= 5 ? 'star':'star'\" [color]=\"rate >= 5 ? 'warning':'medium'\">\n        </ion-icon>\n        ({{totalRating}} {{util.getString('Rating')}})\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n      <div class=\"storeName ion-activatable\" (click)=\"gotoStore()\" *ngIf=\"storeName\">\n        {{storeName}}\n      </div>\n      <!-- <div *ngIf=\"size ==='1'\" class=\"variant\" (click)=\"variants()\">\n        <ion-label class=\"selecter ion-activatable\">\n          <span>\n            <span> {{\n                            variations && variations[0] && variations[0].items[variant] &&\n                            variations[0].items[variant].title ?\n                            variations[0].items[variant].title : ''}} </span>\n            -\n            <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n              <span class=\"original\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                     variations[0].items[variant].discount\">\n                {{ variations && variations[0] && variations[0].items[variant] &&\n                                     variations[0].items[variant].price ?\n                                     variations[0].items[variant].price : 0}}\n              </span>\n              <span class=\"sell\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount\"> {{variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount ?\n                                    variations[0].items[variant].discount : 0}}\n              </span>\n              <span\n                *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount === 0 && !variations[0].items[variant].discount\">\n                {{ variations && variations[0] && variations[0].items[variant] &&\n                                     variations[0].items[variant].price ?\n                                     variations[0].items[variant].price : 0}}\n              </span>\n\n            </span>\n            <span *ngIf=\"util.cside ==='right'\">\n              <span class=\"original\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                      variations[0].items[variant].discount\">\n                {{ variations && variations[0] && variations[0].items[variant] &&\n                                      variations[0].items[variant].price ?\n                                      variations[0].items[variant].price : 0}}\n              </span>\n              <span class=\"sell\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount\"> {{variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount ?\n                                    variations[0].items[variant].discount : 0}}\n              </span>\n              <span\n                *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                      variations[0].items[variant].discount === 0 && !variations[0].items[variant].discount\">\n                {{ variations && variations[0] && variations[0].items[variant] &&\n                                      variations[0].items[variant].price ?\n                                      variations[0].items[variant].price : 0}}\n              </span>\n              {{util.currecny}}\n            </span>\n          </span>\n          <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </ion-label>\n      </div> -->\n      <div class=\"small_flex_div\">\n\n        <div class=\"left ion-align-items-center\">\n          <img src=\"assets/imgs/veg.png\" *ngIf=\"veg\">\n          <img src=\"assets/imgs/non-veg.png\" *ngIf=\"!veg\">\n          <div class=\"price_div\">\n            <ion-label class=\"price_lbl\" *ngIf=\"this.discount === '0' && util.direction ==='ltr'\"> {{util.currecny}}\n              {{this.realPrice}} </ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"this.discount === '0' && util.direction ==='rtl'\">{{this.realPrice}}\n              {{util.currecny}}</ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"this.discount !== '0'\">\n              <span class=\"original\" *ngIf=\"util.direction ==='ltr'\"> {{util.currecny}} {{this.realPrice}} </span>\n              <span class=\"sell\" *ngIf=\"util.direction ==='ltr'\">{{util.currecny}} {{this.sellPrice}} </span>\n              <span class=\"original\" *ngIf=\"util.direction ==='rtl'\"> {{this.realPrice}} {{util.currecny}}</span>\n              <span class=\"sell\" *ngIf=\"util.direction ==='rtl'\"> {{this.sellPrice}} {{util.currecny}}</span>\n            </ion-label>\n          </div>\n        </div>\n\n        <div class=\"addBtn\" *ngIf=\"!cart.itemId.includes(id) && this.quantiy <= 0 && status ==='1' && in_stoke ==='1'\">\n          <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart()\">\n            {{util.getString('Add')}}\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n        </div>\n\n        <div class=\"abs_add\" *ngIf=\"cart.itemId.includes(id)\">\n          <img src=\"assets/imgs/remove.png\" (click)=\"remove()\">\n          <ion-label>{{quantiy}}</ion-label>\n          <img src=\"assets/imgs/add.png\" (click)=\"add()\">\n        </div>\n      </div>\n\n      <div class=\"pro_desc_div\" *ngIf=\"description\">\n        <ion-label class=\"head_lbl\"> {{util.getString('Description')}} </ion-label>\n        <ion-label class=\"light_lbl\"> {{description}} </ion-label>\n      </div>\n\n      <div class=\"pro_desc_div\" *ngIf=\"key_features\">\n        <ion-label class=\"head_lbl\"> {{util.getString('Highlight')}} </ion-label>\n        <ion-label class=\"light_lbl\"><span> {{util.getString('Key Features')}} :</span> {{key_features}} </ion-label>\n      </div>\n\n      <div class=\"pro_desc_div\" *ngIf=\"disclaimer\">\n        <ion-label class=\"head_lbl\"> {{util.getString('Desclaimer')}} </ion-label>\n        <ion-label class=\"light_lbl\"> {{disclaimer}} </ion-label>\n      </div>\n\n      <!-- <div *ngIf=\"this.quantiy != 0\">\n        <div *ngFor=\"let elem of subProductId; let i = index\" class=\"details row align-items-center\">\n          <div *ngIf=\"elem.parent_id == id && elem.status === '1'\">\n            <div class=\"col-2 subproduct\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+elem.cover+')'}\">\n            \n            </div>\n            <div class=\"col-8\">\n              <p class=\"name\"> {{ elem.name}} </p>\n              \n              <p class=\"itemsKind\" *ngIf=\"size ==='0'\">\n                <span *ngIf=\"elem.have_gram === '1'\"> {{elem.gram}} {{util.getString('grams')}} </span>\n                <span *ngIf=\"elem.have_kg === '1'\"> {{elem.kg}} {{util.getString('kg')}} </span>\n                <span *ngIf=\"elem.have_liter ==='1'\"> {{elem.liter}} {{util.getString('ltr')}} </span>\n                <span *ngIf=\"elem.have_ml ==='1'\"> {{elem.ml}} {{util.getString('ml')}} </span>\n                <span *ngIf=\"elem.have_pcs === '1'\"> {{elem.pcs}} {{util.getString('pcs')}} </span>\n              </p>\n              \n              <div *ngIf=\"elem.size ==='0'\">\n                <p class=\"price_lbl\" *ngIf=\"elem.discount === '0' && util.cside ==='left'\">\n                  <span class=\"mrptag\"> {{util.getString('MRP')}} </span>\n                  {{util.currecny}}\n                  {{elem.original_price}} </p>\n                <p class=\"price_lbl\" *ngIf=\"elem.discount === '0' && util.cside ==='right'\"><span class=\"mrptag\">\n                    {{util.getString('MRP')}} </span>{{elem.original_price}}\n                  {{util.currecny}}</p>\n                <p class=\"price_lbl\" *ngIf=\"elem.discount !== '0'\">\n                  <span class=\"mrptag\">{{util.getString('MRP')}} </span>\n                  <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{elem.original_price}} </span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{elem.sell_price}} </span>\n              \n                  <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{elem.original_price}} {{util.currecny}}</span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{elem.sell_price}} {{util.currecny}}</span>\n                  <span class=\"redDB\">{{util.getString('You Save')}} : {{elem.discount}} %</span>\n              \n                </p>\n              </div>    \n              <div *ngIf=\"elem.size ==='1'\" class=\"variant\">\n                <div class=\"selecter\" [ngbPopover]=\"popContent\" placement=\"bottom\" triggers=\"manual\" #p1=\"ngbPopover\"\n                  (click)=\"p1.open()\">\n                  <span>\n                    <span> {{\n                              variations && variations[0] && variations[0].items[variant] &&\n                              variations[0].items[variant].title ?\n                              variations[0].items[variant].title : ''}} </span>\n                    -\n                    <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                      <span class=\"original\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                            variations[0].items[variant].discount\">\n                        {{ variations && variations[0] && variations[0].items[variant] &&\n                            variations[0].items[variant].price ?\n                            variations[0].items[variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                            variations[0].items[variant].discount\"> {{variations && variations[0] && variations[0].items[variant] &&\n                            variations[0].items[variant].discount ?\n                            variations[0].items[variant].discount : 0}}\n                      </span>\n                      <span *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                          variations[0].items[variant].discount === 0 && !variations[0].items[variant].discount\">\n                        {{ variations && variations[0] && variations[0].items[variant] &&\n                          variations[0].items[variant].price ?\n                          variations[0].items[variant].price : 0}}\n                      </span>\n            \n                    </span>\n                    <span *ngIf=\"util.cside ==='right'\">\n                      <span class=\"original\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                          variations[0].items[variant].discount\">\n                        {{ variations && variations[0] && variations[0].items[variant] &&\n                          variations[0].items[variant].price ?\n                          variations[0].items[variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                          variations[0].items[variant].discount\"> {{variations && variations[0] && variations[0].items[variant] &&\n                          variations[0].items[variant].discount ?\n                          variations[0].items[variant].discount : 0}}\n                      </span>\n                      <span *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                          variations[0].items[variant].discount === 0 && !variations[0].items[variant].discount\">\n                        {{ variations && variations[0] && variations[0].items[variant] &&\n                          variations[0].items[variant].price ?\n                          variations[0].items[variant].price : 0}}\n                      </span>\n                      {{util.currecny}}\n                    </span>\n                  </span>\n                  <mdb-icon fas icon=\"angle-down\"></mdb-icon>\n            \n                </div>\n                <ng-template #popContent let-greeting=\"greeting\">\n                  <div *ngFor=\"let option of variations[0].items;let ix = index\" class=\"normalItem\" (click)=\"changes(ix)\">\n                    {{option.title}} -\n                    <span class=\"price_lbl\" *ngIf=\"option.discount === 0 && util.cside ==='left'\"> {{util.currecny}}\n                      {{option.price}} </span>\n                    <span class=\"price_lbl\" *ngIf=\"option.discount === 0 && util.cside ==='right'\">\n                      {{option.price}}\n                      {{util.currecny}}</span>\n                    <span class=\"price_lbl\" *ngIf=\"option.discount !== 0\">\n                      <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{option.price}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{option.discount}} </span>\n                      <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{option.price}}\n                        {{util.currecny}}</span>\n                      <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{option.discount}} {{util.currecny}}</span>\n                    </span>\n                  </div>\n                </ng-template>\n              </div>\n              <div class=\"addBtn\" *ngIf=\"!cart.itemId.includes(elem.id)  && elem.status ==='1' &&   elem.in_stoke ==='1'\">\n                <div class=\"ion-activatable ripple-parent\" (click)=\"addSubToCart(elem.id)\">\n                  {{util.getString('Add')}}\n                </div>\n              </div>\n            \n              <div class=\"abs_add\" *ngIf=\"cart.itemId.includes(elem.id)\">\n                <img src=\"assets/imgs/remove.png\" (click)=\"subRemove(elem.id)\">\n                <p>{{getSubQuanity(elem.id)}}</p>\n                <img src=\"assets/imgs/add.png\" (click)=\"subAdd(elem.id)\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      \n      <div *ngIf=\"this.productt.variations[0]\">\n        <div *ngIf=\"(this.quantiy != 0) && (this.productt.variations[0].items.length > 0)\">\n          <ion-label class=\"addons\"> {{util.getString('Add Ons')}} </ion-label>\n\n          <!--- default product radio button section --->\n          \n          <div class=\"default_product\">\n            <div class=\"addon_main_div\">\n              <div class=\"image_addon\">\n                <img [src]=\"api.mediaURL+productt.cover\">\n              </div>\n              <div class=\"addons_title_default\" *ngIf=\"util.direction ==='ltr'\">{{productt.name}}</div> \n              <div class=\"addons_title_default\"  *ngIf=\"util.direction ==='rtl'\">{{productt.name}}</div> \n              <input  (click)=\"removeAllAdones(productt)\" type=\"radio\" class=\"inpuptype\" name=\"radio\" checked >\n            </div>\n          </div>\n\n         <!--- close default product radio button section --->\n          \n          <div *ngFor=\"let addon of this.productt.variations[0].items\">\n            <div class=\"addon_main_div\">\n              <div class=\"image_addon\">\n                <img [src]=\"api.mediaURL+addon.image\">\n              </div>\n              <div class=\"addons_title\" *ngIf=\"util.direction ==='ltr'\">{{addon.title}}</div> \n              <div class=\"addons_title\"  *ngIf=\"util.direction ==='rtl'\">{{addon.hb_title}}</div> \n              <div class=\"\" *ngIf=\"util.direction ==='ltr'\">{{util.currecny}} {{addon.price}} </div> \n              <!-- <div *ngIf=\"util.direction ==='ltr'\">{{util.currecny}} {{addon.price - ((addon.price / 100) * addon.discount)}} </div>  -->\n              <div class=\"\" *ngIf=\"util.direction ==='rtl'\">{{addon.price}} {{util.currecny}}</div> \n              <!-- <div *ngIf=\"util.direction ==='rtl'\">{{addon.price - ((addon.price / 100) * addon.discount)}} {{util.currecny}}</div>  -->\n             \n              <!-- <div class=\"addBtn\" *ngIf=\"addon.quantity == 0\">\n                <div class=\"ion-activatable ripple-parent addOnBtn\" (click)=\"addAddOn(addon, this.id)\">\n                  {{util.getString('Choose')}}\n                </div>\n              </div> -->\n              <input  (click)=\"addAddOn(addon, this.id)\" type=\"radio\" class=\"inpuptype\" name=\"radio\" [checked]=\"addon.quantity\" >\n\n              <!-- <div class=\"plus_minus\" *ngIf=\"addon.quantity != 0\">\n                <img src=\"assets/imgs/remove.png\" (click)=\"minusAddOn(addon, this.id)\">\n                <ion-label class=\"addOnquantity\">{{addon.quantity}}</ion-label>\n                <img src=\"assets/imgs/add.png\" (click)=\"addAddOn(addon, this.id)\">\n              </div> -->\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n  <div *ngIf=\"this.productt.second_variation\">\n        <div *ngIf=\"(this.quantiy != 0) &&(this.productt.second_variation.length > 0)\">\n          <ion-label class=\"addons\"> {{util.getString('Secondary Add Ons')}} </ion-label>\n           <div *ngFor=\"let addon of this.productt.second_variation; i as index \" >\n            <div >\n            <div class=\"topaddon_main_div\"  >\n              <div class=\"addons_title\" *ngIf=\"util.direction ==='ltr'\">{{addon.en_cat_title}}</div> \n              <div class=\"addons_title\"  *ngIf=\"util.direction ==='rtl'\">{{addon.hb_cat_title}}</div> \n\n              <div class=\"addBtn\">\n                <div class=\"ion-activatable ripple-parent addOnBtn acc_btn\" (click)=\"addAddOn(addon, this.id)\">\n                  <!-- {{util.getString('Open')}} -->\n                  <ion-icon name=\"add\" class=\"add\" (click)=\"toggle(addon ,true)\" *ngIf=\"!addon.isOpen\"></ion-icon>\n                  <ion-icon name=\"remove\" class=\"remove\" (click)=\"toggle(addon, false)\" *ngIf=\"addon.isOpen\"></ion-icon>\n                </div>\n              </div>\n            </div>\n              <div *ngIf=\"addon.sub_category && addon.isOpen \">\n                <div *ngFor=\"let subaddon of addon.sub_category; let i = index\"> \n                  \n                  <div class=\"addon_main_div\">\n                    <ion-row style=\"width: 100%;\">\n                      <ion-col size=\"2\">\n                        <div class=\"image_addon\">\n                          <img [src]=\"api.mediaURL+subaddon.image\">\n                        </div>\n                      </ion-col>\n                      <ion-col size=\"4\">\n                        <div class=\"addons_title_cus\" *ngIf=\"util.direction ==='ltr'\">{{subaddon.en_title}}</div> \n                        <div class=\"addons_title_cus\"  *ngIf=\"util.direction ==='rtl'\">{{subaddon.hb_title}}</div> \n                      </ion-col>\n                      <ion-col size=\"3\">\n                        \n                        <!--add button-->\n                        <div class=\"plus_minus\" *ngIf=\"subaddon.qty_enable && subaddon.quantity > 0 \">\n                            <img src=\"assets/imgs/remove.png\" (click)=\"addRemoveSubAddonQty(subaddon,this.id, subaddon.type,$event,i ,'remove')\">\n                            <ion-label class=\"addOnquantity\">{{subaddon.quantity}}</ion-label>\n                            <img src=\"assets/imgs/add.png\" (click)=\"addRemoveSubAddonQty(subaddon,this.id, subaddon.type,$event,i,'add' )\">\n                        </div>\n                      <!--close add button-->\n                      </ion-col>\n                      <ion-col size=\"1.5\">\n                        <div class=\"float_right_cgw\" *ngIf=\"util.direction ==='ltr' && subaddon.price > 0 \" >{{util.currecny}} {{subaddon.price}} </div> \n                        <div class=\"float_right_cgw\" *ngIf=\"util.direction ==='rtl'  && subaddon.price > 0 \">{{subaddon.price}} {{util.currecny}}</div>\n                      </ion-col>\n                      <ion-col size=\"1.5\">\n                      <input *ngIf=\"addon.type == 'radio'\" (click)=\"addSubAddOn(subaddon,this.id,'radio',$event, i )\" type=\"radio\" class=\"inpuptype float_right_cgw\" name=\"radio\" [checked]=\"subaddon.quantity\">\n                      <input type=\"checkbox\"  (click)=\"addSubAddOn(subaddon,this.id, 'checkbox',$event,i)\" *ngIf=\"addon.type == 'checkbox'\" class=\"inpuptype float_right_cgw\"   [checked]=\"subaddon.quantity\" >\n                  \n                      </ion-col>\n                    </ion-row>\n                      \n                   \n\n\n\n                \n                  </div>\n                </div>\n              </div>\n            </div>\n              </div>\n          </div>\n      </div>\n\n\n\n\n      <div class=\"related\" *ngIf=\"related?.length\">\n        <ion-label class=\"head_lbl\"> {{util.getString('Related')}} </ion-label>\n        <ion-slides [options]=\"slideOpts1\">\n          <ion-slide *ngFor=\"let item of related\">\n            <div style=\"border: 1px solid lightgray;margin-right: 10px;border-radius: 5px; width: 100%;\">\n              <div class=\"back_image\"\n                [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n                (click)=\"singleProduct(item)\">\n                <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n                <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n                  <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n                </div>\n                <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n                <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n              </div>\n              <div class=\"second_div\">\n                <ion-label class=\"name_lbl\" (click)=\"singleProduct(item)\">\n                  {{ (item.name.length>100)? (item.name | slice:0:10)+'..':(item.name) }} \n                </ion-label>\n             \n                <ion-label class=\"itemsKind\">\n                  <span>\n                  <ng-container *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </ng-container>\n                  <ng-container *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </ng-container>\n                  <ng-container *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </ng-container>\n                  <ng-container *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </ng-container>\n                  <ng-container *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </ng-container>\n                  &nbsp;\n                  </span>\n                </ion-label>\n                <!-- <ion-label class=\"desc\" (click)=\"singleProduct(item)\">\n                  {{ (item.descriptions.length>40)? (item.descriptions | slice:0:40)+'..':(item.descriptions) }}\n                </ion-label> -->\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.direction ==='ltr'\"> {{util.currecny}}\n                  {{item.original_price}} </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.direction ==='rtl'\">\n                  {{item.original_price}}\n                  {{util.currecny}}</ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n                  <span class=\"original\" *ngIf=\"util.direction ==='ltr'\"> {{util.currecny}} {{item.original_price}} </span>\n                  <span class=\"sell\" *ngIf=\"util.direction ==='ltr'\">{{util.currecny}} {{item.sell_price}} </span>\n                  <span class=\"original\" *ngIf=\"util.direction ==='rtl'\"> {{item.original_price}} {{util.currecny}}</span>\n                  <span class=\"sell\" *ngIf=\"util.direction ==='rtl'\"> {{item.sell_price}} {{util.currecny}}</span>\n                </ion-label>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n\n\n    </div>\n\n    \n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/product/product-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/product/product-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProductPageRoutingModule */

  /***/
  function srcAppPagesProductProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function () {
      return ProductPageRoutingModule;
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


    var _product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product.page */
    "./src/app/pages/product/product.page.ts");
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
      component: _product_page__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]
    }];

    var ProductPageRoutingModule = function ProductPageRoutingModule() {
      _classCallCheck(this, ProductPageRoutingModule);
    };

    ProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product/product.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/product/product.module.ts ***!
    \*************************************************/

  /*! exports provided: ProductPageModule */

  /***/
  function srcAppPagesProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageModule", function () {
      return ProductPageModule;
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


    var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-routing.module */
    "./src/app/pages/product/product-routing.module.ts");
    /* harmony import */


    var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product.page */
    "./src/app/pages/product/product.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductPageModule = function ProductPageModule() {
      _classCallCheck(this, ProductPageModule);
    };

    ProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPageRoutingModule"]],
      declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
    })], ProductPageModule);
    /***/
  },

  /***/
  "./src/app/pages/product/product.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/product/product.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.addOnquantity {\n  color: white;\n}\n.addon_original_price {\n  text-decoration: line-through;\n}\n.plus_minus {\n  width: 72px;\n  background: var(--ion-color-primary);\n  height: 24px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.plus_minus img {\n  color: #FF8E80;\n  width: 25px;\n}\n.plus_minus label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.addon_main_div {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding: 5px 0px;\n}\n.addOnBtn {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.addons {\n  color: gray;\n  font-family: muli-bold;\n  margin: 5px 0px;\n}\n.addons_title {\n  color: gray;\n  margin-bottom: 5px;\n}\n.addons_title div {\n  font-size: 13px;\n}\n.details {\n  display: flex;\n  flex: 1 0 100%;\n  flex-wrap: wrap;\n}\n.details .subproduct {\n  height: 35px;\n  width: 50px;\n  align-self: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: center;\n  margin-right: 4px;\n}\n.details .name {\n  font-weight: bold;\n  margin: 5px 0px;\n}\n.details .itemsKind {\n  font-size: 14px;\n  font-weight: 500;\n  margin: 5px 0px;\n}\n.details .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n  width: 50%;\n}\n.details .normalItem {\n  color: black;\n  padding: 5px 0px;\n  text-align: start;\n  cursor: pointer;\n}\n.details .normalItem:hover {\n  color: #45c261;\n}\n.details .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n  margin: 5px;\n}\n.details .price_lbl .mrptag {\n  font-size: 15px;\n  color: gray;\n  font-weight: bold;\n}\n.details .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 15px;\n}\n.details .price_lbl .sell {\n  font-weight: bold;\n}\n.details .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 14px;\n}\n.details .price_lbl .redDB {\n  color: red;\n}\n.details .addBtn {\n  cursor: pointer;\n}\n.details .addBtn .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n  width: 100px;\n  text-align: center;\n  margin: 10px 0px;\n}\n.details .abs_add {\n  width: 100px;\n  background: #e8e8e8;\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n  margin: 10px 0px;\n}\n.details .abs_add p {\n  color: black;\n  font-size: 14px;\n  margin: 0px;\n  font-weight: 600;\n}\n.details .abs_add img {\n  color: #ff8e80;\n  width: 25px;\n  cursor: pointer;\n}\n.details .storeName {\n  font-weight: bold;\n  color: #45c261;\n  font-size: 14px;\n}\n.slider_div ion-slide img {\n  width: 100%;\n  height: 250px;\n}\n.slider_div ion-slide .back_image {\n  width: 100%;\n  height: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.slider_div ion-slide .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  right: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 80px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .top_lbl {\n  font-size: 25px;\n  font-family: muli-bold;\n}\n.main_content_div .detail_div .pro_name {\n  font-size: 20px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_div .itemsKind {\n  font-size: 12px;\n  font-weight: 500;\n}\n.main_content_div .detail_div .pro_detail {\n  font-size: 14px;\n  color: gray;\n}\n.main_content_div .detail_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .detail_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .detail_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .detail_div .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content_div .detail_div .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content_div .detail_div .small_flex_div {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding: 0px 0px 10px 0px;\n}\n.main_content_div .detail_div .small_flex_div .left {\n  display: flex;\n}\n.main_content_div .detail_div .small_flex_div .left img {\n  width: 15px;\n  height: 15px;\n}\n.main_content_div .detail_div .small_flex_div .left ion-label {\n  font-family: muli-bold;\n  padding-left: 10px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_div {\n  padding: 0px 5px 0px 5px !important;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content_div .detail_div .small_flex_div .addBtn .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .detail_div .small_flex_div .abs_add {\n  width: 80px;\n  background: var(--ion-color-primary);\n  height: 27px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .detail_div .small_flex_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .detail_div .small_flex_div .abs_add img {\n  color: #FF8E80;\n  width: 23px;\n}\n.main_content_div .detail_div .ratingItems {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 12px;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .detail_div .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 12px;\n  position: relative;\n  overflow: hidden;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  margin: 10px 0px;\n}\n.main_content_div .pro_desc_div {\n  padding: 15px 0px;\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .pro_desc_div .head_lbl {\n  color: gray;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .pro_desc_div ion-chip {\n  background: #f3f3f3;\n  border: 2px solid lightgray;\n}\n.main_content_div .pro_desc_div ion-chip ion-label {\n  font-family: muli-bold;\n}\n.main_content_div .pro_desc_div .active {\n  background: rgba(69, 194, 97, 0.2);\n  color: var(--ion-color-primary);\n  border: 2px solid var(--ion-color-primary);\n}\n.main_content_div .pro_desc_div .light_lbl {\n  font-size: 14px;\n  color: gray;\n}\n.main_content_div .pro_desc_div .light_lbl span {\n  font-family: muli-bold;\n}\n.main_content_div .content_div {\n  padding: 10px 0px;\n}\n.main_content_div .content_div .head_lbl {\n  font-family: muli-bold;\n  margin-bottom: 8px;\n}\n.main_content_div .content_div .card_div {\n  padding: 10px;\n  display: flex;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n}\n.main_content_div .content_div .card_div .image_div {\n  height: 95px;\n  width: 95px;\n  min-width: 95px;\n}\n.main_content_div .content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.main_content_div .content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .pro_detail {\n  font-size: 13px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left {\n  display: flex;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left img {\n  width: 15px;\n  height: 15px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left ion-label {\n  font-family: muli-bold;\n  font-size: 14px;\n  padding-left: 10px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .related {\n  margin-top: 10px;\n}\n.main_content_div .related .head_lbl {\n  font-family: muli-bold;\n  margin-bottom: 8px;\n}\n.main_content_div .related .back_image {\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.main_content_div .related .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div .related .back_image .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 80%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 20px;\n  line-height: 20px;\n}\n.main_content_div .related .back_image .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content_div .related .back_image .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .related .second_div {\n  padding: 5px;\n  position: relative;\n  width: 100%;\n  text-align: right;\n}\n.main_content_div .related .second_div ion-label {\n  display: block !important;\n  padding-bottom: 2px;\n}\n.main_content_div .related .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content_div .related .second_div .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .related .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 12px;\n}\n.main_content_div .related .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content_div .related .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .related .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content_div .related .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 13px;\n  text-transform: capitalize;\n}\n.main_content_div .related .second_div .desc {\n  font-size: 12px;\n}\n.main_content_div .related .second_div .stoke {\n  font-size: 10px;\n}\n.main_content_div .related .second_div .stoke .in {\n  color: green;\n}\n.main_content_div .related .second_div .stoke .out {\n  color: indianred;\n}\n.main_content_div .related .second_div .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.main_content_div .related .second_div .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .related .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content_div .related .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n.addon_main_div .adone_img {\n  border-radius: 100%;\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n}\n.addon_main_div .addons_title {\n  width: 50%;\n  text-align: right;\n  padding: 0 5px;\n  font-size: 12px;\n}\n.addon_main_div .addons_title_cus {\n  width: 100%;\n  text-align: right;\n  padding: 0 5px;\n  font-size: 12px;\n}\n.addon_main_div .addon_original_price {\n  width: 40%;\n  padding: 0 15px;\n}\n.addon_main_div {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding: 5px 0px;\n  align-items: center;\n  position: relative;\n  flex-wrap: wrap;\n}\n.addon_main_div div {\n  font-size: 13px;\n}\n.addon_main_div img {\n  border-radius: 100px;\n  height: 22px;\n  width: 22px;\n}\n.topaddon_main_div {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding: 5px 0px;\n  align-items: center;\n  position: relative;\n  flex-wrap: wrap;\n}\n.inpuptype {\n  height: 15px;\n  width: 15px;\n  padding-top: 3px;\n}\n.acc_btn {\n  font-size: 1.5rem;\n  opacity: 1;\n  color: white;\n  border-radius: 100% !important;\n  width: 26px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  background: #ff4556 !important;\n}\nion-col {\n  padding: unset;\n  margin: unset;\n}\nion-col .float_right_cgw {\n  float: right;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9FOlxccHVuZWV0XFxmbHl2aXBfMjMtMDMtMjJcXFVzZXJfYXBwXzA2LTA0LTIwMjEvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0XFxwcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNFLFlBQUE7QURFRjtBQ0FBO0VBQ0UsNkJBQUE7QURHRjtBQ0RBO0VBQ0ksV0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FESUo7QUNGSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FESU47QUNESTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURHTjtBQ0NBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0FERUo7QUNBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0RBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBRElKO0FDRkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QURLSjtBQ0pJO0VBQ0UsZUFBQTtBRE1OO0FDRkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURLRjtBQ0hFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FES0o7QUNGRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRElKO0FDRkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FESUo7QUNESTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBREdOO0FDQUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0FFO0VBQ0UsY0FBQTtBREVKO0FDQUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FERUo7QUNESTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURHTjtBQ0RJO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FER047QUNESTtFQUNFLGlCQUFBO0FER047QUNESTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBREdOO0FDREk7RUFDRSxVQUFBO0FER047QUNBRTtFQUNFLGVBQUE7QURFSjtBQ0RJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FER047QUNHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEREo7QUNFSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEQU47QUNHSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBREROO0FDSUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FERko7QUNTVTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FETmQ7QUNRVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRE5aO0FDT1k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRExoQjtBQ1VBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRFBKO0FDUUk7RUFDSSxjQUFBO0FETlI7QUNTSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBRFBSO0FDYVE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRFhaO0FDYVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURYVjtBQ2NRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QURaWjtBQ2dCWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRGRoQjtBQ2dCWTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QURkWjtBQ2VZO0VBQ0ksMEJBQUE7QURiaEI7QUNlWTtFQUNJLHdCQUFBO0FEYmhCO0FDZVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRGJoQjtBQ2tCUTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBRGhCWjtBQ2tCWTtFQUNFLGFBQUE7QURoQmQ7QUNpQmM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRGZoQjtBQ2lCYztFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QURmaEI7QUNpQmM7RUFDRSxtQ0FBQTtBRGZoQjtBQ2lCYztFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBRGZoQjtBQ2dCZ0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QURkcEI7QUNnQmdCO0VBQ0ksaUJBQUE7QURkcEI7QUNnQmdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FEZHBCO0FDb0JjO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGxCbEI7QUN3Qlk7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUR0QmhCO0FDd0JnQjtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUR0QmxCO0FDeUJnQjtFQUNFLGNBQUE7RUFDQSxXQUFBO0FEdkJsQjtBQzJCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRHpCVjtBQzJCUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRHpCVjtBQzZCSTtFQUNJLGlCQUFBO0VBQ0Esa0NBQUE7QUQzQlI7QUM2QlE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRDNCWjtBQzhCUTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7QUQ1Qlo7QUM4Qlk7RUFDSSxzQkFBQTtBRDVCaEI7QUNnQ1E7RUFDSSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7QUQ5Qlo7QUNpQ1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBRC9CWjtBQ2lDWTtFQUNJLHNCQUFBO0FEL0JoQjtBQ29DTTtFQUNJLGlCQUFBO0FEbENWO0FDb0NVO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBRGxDZDtBQ3FDVTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURuQ1o7QUNxQ1k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QURuQ2Q7QUNxQ2M7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURuQ2hCO0FDd0NjO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUR0Q2hCO0FDd0NjO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRHRDaEI7QUN5Q2M7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBRHZDaEI7QUN5Q2dCO0VBQ0UsYUFBQTtBRHZDbEI7QUN3Q2tCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUR0Q3BCO0FDd0NrQjtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEdENwQjtBQzJDYztFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRHpDaEI7QUMyQ2dCO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRHpDbEI7QUM0Q2dCO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUQxQ2xCO0FDaURNO0VBQ0UsZ0JBQUE7QUQvQ1I7QUNnRFE7RUFDTSxzQkFBQTtFQUNBLGtCQUFBO0FEOUNkO0FDZ0RXO0VBQ0csV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEOUNkO0FDK0NjO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUQ3Q2xCO0FDK0NjO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUQ3Q2xCO0FDOENrQjtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRDVDdEI7QUMrQ2M7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUQ3Q2xCO0FDZ0RVO0VBQ00sWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEOUNoQjtBQytDZ0I7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FEN0NwQjtBQytDZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUQ3Q3BCO0FDK0NnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRDdDcEI7QUMrQ2dCO0VBQ00sZ0JBQUE7RUFDQSxlQUFBO0FEN0N0QjtBQzhDc0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUQ1QzFCO0FDOENzQjtFQUNJLGlCQUFBO0FENUMxQjtBQzhDc0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUQ1QzFCO0FDK0NrQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FEN0N0QjtBQytDa0I7RUFDSSxlQUFBO0FEN0N0QjtBQytDa0I7RUFDSSxlQUFBO0FEN0N0QjtBQzhDc0I7RUFDSSxZQUFBO0FENUMxQjtBQzhDc0I7RUFDSSxnQkFBQTtBRDVDMUI7QUMrQ2dCO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FEN0NwQjtBQzhDb0I7RUFDTSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FENUMxQjtBQytDa0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBRDdDdEI7QUNnRGtCO0VBQ0ksa0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUQvQ3RCO0FDdURBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEcERGO0FDdURBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURwREY7QUN1REE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRHBERjtBQ3NEQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FEbkRGO0FDc0RBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURuREY7QUNzREE7RUFDRSxlQUFBO0FEbkRGO0FDcURBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRGxERjtBQ3FEQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEbERGO0FDcURBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRGxERjtBQ3NEQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QURuREY7QUNzREE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRG5ERjtBQ3FEQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FEbkRGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uYWRkT25xdWFudGl0eSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFkZG9uX29yaWdpbmFsX3ByaWNlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5wbHVzX21pbnVzIHtcbiAgd2lkdGg6IDcycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4ucGx1c19taW51cyBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG4ucGx1c19taW51cyBsYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuXG4uYWRkb25fbWFpbl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cblxuLmFkZE9uQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYWRkb25zIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmFkZG9uc190aXRsZSB7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uYWRkb25zX3RpdGxlIGRpdiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDAgMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmRldGFpbHMgLnN1YnByb2R1Y3Qge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLmRldGFpbHMgLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmRldGFpbHMgLml0ZW1zS2luZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmRldGFpbHMgLnZhcmlhbnQgLnNlbGVjdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA1MCU7XG59XG4uZGV0YWlscyAubm9ybWFsSXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZXRhaWxzIC5ub3JtYWxJdGVtOmhvdmVyIHtcbiAgY29sb3I6ICM0NWMyNjE7XG59XG4uZGV0YWlscyAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5kZXRhaWxzIC5wcmljZV9sYmwgLm1ycHRhZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRldGFpbHMgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmRldGFpbHMgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRldGFpbHMgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGV0YWlscyAucHJpY2VfbGJsIC5yZWREQiB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZGV0YWlscyAuYWRkQnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRldGFpbHMgLmFkZEJ0biAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4uZGV0YWlscyAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4uZGV0YWlscyAuYWJzX2FkZCBwIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRldGFpbHMgLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICNmZjhlODA7XG4gIHdpZHRoOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGV0YWlscyAuc3RvcmVOYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDVjMjYxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zbGlkZXJfZGl2IGlvbi1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5zbGlkZXJfZGl2IGlvbi1zbGlkZSAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXJfZGl2IGlvbi1zbGlkZSAuYmFja19pbWFnZSAucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICByaWdodDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudG9wX2xibCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5wcm9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLml0ZW1zS2luZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5wcm9fZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAudmFyaWFudCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC52YXJpYW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gLnNlbGVjdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmxlZnQgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IC5wcmljZV9kaXYge1xuICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAubGVmdCAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAubGVmdCAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmxlZnQgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmFkZEJ0biAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAuYWJzX2FkZCB7XG4gIHdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMjdweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5yYXRpbmdJdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc3RvcmVOYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvX2Rlc2NfZGl2IHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvX2Rlc2NfZGl2IC5oZWFkX2xibCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvX2Rlc2NfZGl2IGlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiBpb24tY2hpcCBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2OSwgMTk0LCA5NywgMC4yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiAubGlnaHRfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9fZGVzY19kaXYgLmxpZ2h0X2xibCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiB7XG4gIGhlaWdodDogOTVweDtcbiAgd2lkdGg6IDk1cHg7XG4gIG1pbi13aWR0aDogOTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJvX25hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcm9fZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5sZWZ0IGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCAubGVmdCBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5iYWNrX2ltYWdlIC5wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLmJhY2tfaW1hZ2UgLm5vdEluU3Rva2Uge1xuICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDgwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5iYWNrX2ltYWdlIC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLmJhY2tfaW1hZ2UgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5vZmZlciB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLml0ZW1zS2luZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5uYW1lX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5zdG9rZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5zdG9rZSAuaW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAuc3Rva2UgLm91dCB7XG4gIGNvbG9yOiBpbmRpYW5yZWQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAuYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjliNTA3O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG59XG5cbi5hZGRvbl9tYWluX2RpdiAuYWRvbmVfaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFkZG9uX21haW5fZGl2IC5hZGRvbnNfdGl0bGUge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFkZG9uX21haW5fZGl2IC5hZGRvbnNfdGl0bGVfY3VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYWRkb25fbWFpbl9kaXYgLmFkZG9uX29yaWdpbmFsX3ByaWNlIHtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uYWRkb25fbWFpbl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hZGRvbl9tYWluX2RpdiBkaXYge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5hZGRvbl9tYWluX2RpdiBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbn1cblxuLnRvcGFkZG9uX21haW5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaW5wdXB0eXBlIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmFjY19idG4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmY0NTU2ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiB1bnNldDtcbiAgbWFyZ2luOiB1bnNldDtcbn1cbmlvbi1jb2wgLmZsb2F0X3JpZ2h0X2NndyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uYWRkT25xdWFudGl0eXtcbiAgY29sb3I6IHdoaXRlXG59XG4uYWRkb25fb3JpZ2luYWxfcHJpY2V7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnBsdXNfbWludXN7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGhlaWdodDogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgaW1ne1xuICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICB9XG4gICAgXG4gICAgbGFiZWx7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgIH1cbn1cblxuLmFkZG9uX21haW5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG59XG4uYWRkT25CdG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hZGRvbnN7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG4uYWRkb25zX3RpdGxle1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBkaXZ7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG59XG4uZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMCAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLnN1YnByb2R1Y3R7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gIH1cbiAgLml0ZW1zS2luZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICB9XG4gIC52YXJpYW50IHtcbiAgICAuc2VsZWN0ZXIge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICB9XG4gIC5ub3JtYWxJdGVtIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm5vcm1hbEl0ZW06aG92ZXIge1xuICAgIGNvbG9yOiAjNDVjMjYxO1xuICB9XG4gIC5wcmljZV9sYmwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIC5tcnB0YWcge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLm9yaWdpbmFsIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAuc2VsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmRpY291bnQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5yZWREQiB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuICAuYWRkQnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZFxuXG4gIC5hYnNfYWRkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIHAge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBjb2xvcjogI2ZmOGU4MDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAuc3RvcmVOYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzQ1YzI2MTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLnNsaWRlcl9kaXZ7XG4gICAgICAvLyBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5wZXJjZW50e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC50b3BfbGJse1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgfVxuXG4gICBcblxuICAgIC5kZXRhaWxfZGl2e1xuICAgICAgICAucHJvX25hbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtc0tpbmR7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4OztcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb19kZXRhaWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICAudmFyaWFudHtcbiAgICAgICAgICAgIC5zZWxlY3RlcntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWxlY3QtaWNvbntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc21hbGxfZmxleF9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG4gIFxuICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnByaWNlX2RpdntcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICAuYWRkQnRue1xuICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhZGRcbiAgICAgICAgICBcbiAgICAgICAgICAgIC5hYnNfYWRke1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgIFxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICAucmF0aW5nSXRlbXN7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5zdG9yZU5hbWV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9fZGVzY19kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jaGlwe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjksMTk0LDk3LDAuMik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpZ2h0X2xibHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgIC5jb250ZW50X2RpdntcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcblxuICAgICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBcbiAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgIGhlaWdodDogOTVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogOTVweDtcbiAgICAgIFxuICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgICAucHJvX25hbWV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcm9fZGV0YWlse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAuc21hbGxfZmxleHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBcbiAgICAgICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIC5hYnNfYWRke1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICBcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnJlbGF0ZWR7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgLnBlcmNlbnR7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ub3RJblN0b2tle1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAua2luZHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWNvbmRfZGl2e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm9mZmVye1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLml0ZW1zS2luZHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubmFtZV9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuc3Rva2V7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIC5pbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAub3V0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5kaWFucmVkO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnRuQnRte1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjUwNztcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjUwNztcbiAgICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogIzczRDI1QztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG59XG5cblxuXG4uYWRkb25fbWFpbl9kaXYgLmFkb25lX2ltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hZGRvbl9tYWluX2RpdiAuYWRkb25zX3RpdGxlIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGRvbl9tYWluX2RpdiAuYWRkb25zX3RpdGxlX2N1cyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hZGRvbl9tYWluX2RpdiAuYWRkb25fb3JpZ2luYWxfcHJpY2Uge1xuICB3aWR0aDogNDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5hZGRvbl9tYWluX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmFkZG9uX21haW5fZGl2IGRpdntcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmFkZG9uX21haW5fZGl2IGltZ3tcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG59XG5cbi50b3BhZGRvbl9tYWluX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxufVxuLmlucHVwdHlwZXtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuXG4uYWNjX2J0biB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNmZjQ1NTYgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbHtcbiAgcGFkZGluZzogdW5zZXQ7XG4gIG1hcmdpbjogdW5zZXQ7XG4gIFxuLmZsb2F0X3JpZ2h0X2NndyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/product/product.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/product/product.page.ts ***!
    \***********************************************/

  /*! exports provided: ProductPage */

  /***/
  function srcAppPagesProductProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPage", function () {
      return ProductPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductPage = /*#__PURE__*/function () {
      function ProductPage(api, ngZone, util, route, navCtrl, router, cart, modalController, alertCtrl) {
        var _this2 = this;

        _classCallCheck(this, ProductPage);

        this.api = api;
        this.ngZone = ngZone;
        this.util = util;
        this.route = route;
        this.navCtrl = navCtrl;
        this.router = router;
        this.cart = cart;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl; // img;
        // price;
        // proDetail;
        // chipVal;
        // products;

        this.qty = 0;
        this.name = '';
        this.coverImage = '';
        this.addons = [];
        this.childrenId = [];
        this.key_features = '';
        this.disclaimer = '';
        this.subProductId = [];
        this.parent = [];
        this.relatedProduct = [];
        this.second_sub_variation = [];
        this.gallery = [];
        this.slideOpts = {
          slidesPerView: 1
        };
        this.SelectedSecondryAddons = [];
        this.slideOpts1 = {
          slidesPerView: 2.5
        };
        this.related = [];
        this.quantiy = 0;
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this2.loaded = false;
            _this2.id = data.id;

            _this2.getProduct();
          }
        });
      }

      _createClass(ProductPage, [{
        key: "openViewer",
        value: function openViewer(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__["ViewerModalComponent"],
                      componentProps: {
                        src: url
                      },
                      cssClass: 'ion-img-viewer',
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {}
      }, {
        key: "removeChild",
        value: function removeChild(parentId) {
          console.log(this.cart.cart.length, "cartlength");
          var cart = this.cart.cart;
          var cartlength = cart.length;

          for (var i = 0; i < cartlength; i++) {
            console.log(this.cart.cart.length, "cartlength inside", i);
            console.log("this cart", this.cart.cart[i]);
            var parent_id = cart[i].parent_id.split(',');
            console.log("parentid", parent_id, "id", this.cart.cart[i].id);

            for (var j = 0; j < parent_id.length; j++) {
              if (parent_id[j] == parentId) {
                this.childrenId.push(cart[i].id);
              }
            }
          }

          this.cart.removeChild(this.childrenId);
        }
      }, {
        key: "getRelated",
        value: function getRelated() {
          var _this3 = this;

          var param = {
            id: this.productt.cate_id,
            limit: 1000,
            cid: localStorage.getItem('city')
          };
          this.subProductId = [];
          this.related = [];
          this.api.post('products/getRelated', param).subscribe(function (data) {
            // for(let i = 0; i < data.data.length; i++){
            //   this.parent = data.data[i]['parent_id'].split(',');
            //   for(let j = 0; j < this.parent.length; j++){
            //     console.log(this.selectedProduct);
            //     console.log("parent", this.parent[j]);
            //     console.log("exit");
            //     if(this.parent[j] == this.selectedProduct  && this.parent[j] != 0){
            //       this.subProductId.push(data.data[i]);
            //       console.log("sub products",this.subProductId )
            //       // this.getSubQuanity(data.data[i].id);
            //       if (data.data[i].variations && data.data[i].size === '1' && data.data[i].variations !== '') {
            //         if (((x) => { try { JSON.parse(x); return true; } catch (e) { return false } })(data.data[i].status)) {
            //           this.variations = JSON.parse(data.data[i].variations);
            //           this.variant = 0;
            //           data.data[i]['variations'] = JSON.parse(data.data[i].variations);
            //           data.data[i]['variant'] = 0;
            //         } else {
            //           data.data[i].variations = [];
            //           data.data[i]['variations'] = [];
            //           this.variant = 1;
            //           data.data[i]['variant'] = 1;
            //         }
            //       } else {
            //         this.variations = [];
            //         this.variant = 1;
            //         this.productt['variations'] = [];
            //         this.productt['variant'] = 1;
            //       }
            //       this.checkCartItems();
            //     }   
            //   }
            // }
            console.log("subproduct", _this3.subProductId);
            console.log('=>related=>', data);

            if (data && data.status === 200 && data.data && data.data.length) {
              var products = data.data;
              _this3.relatedProduct = [];

              for (var i = 0; i < products.length; i++) {
                if (products[i].parent_id == '0' || products[i].parent_id == '') {
                  _this3.relatedProduct.push(products[i]);
                }
              }

              _this3.related = _this3.relatedProduct.filter(function (x) {
                return x.id !== _this3.id && x.store_id == _this3.productt.store_id;
              });
              console.log('related', _this3.related);
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "checkCartItems",
        value: function checkCartItems() {
          var _this4 = this;

          var item = this.cart.cart.filter(function (x) {
            return x.id === _this4.id;
          });
          console.log('item i am hgere', item);

          if (item && item.length) {
            this.quantiy = item[0].quantiy;

            if (this.productt.variations[0]) {
              this.productt.variations[0].items.forEach(function (pageElement) {
                item[0].variations[0].items.forEach(function (cartElement) {
                  if (pageElement.id == cartElement.id) {
                    pageElement.quantity = cartElement.quantity;
                  }
                });
              });
            }

            if (this.productt.second_variation) {
              this.productt.second_variation.forEach(function (pageElement) {
                pageElement.sub_category.forEach(function (elementinnerPage) {
                  item[0].second_variation.forEach(function (cartElementout) {
                    cartElementout.sub_category.forEach(function (element) {
                      if (element.id == elementinnerPage.id) {
                        elementinnerPage.quantity = element.quantity;
                      }
                    });
                  });
                });
              });
            }
          }

          console.log("this product after", this.productt, this.quantiy);
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          var _this5 = this;

          this.selectedProduct = this.id;
          var param = {
            id: this.id
          };
          this.api.post('products/getById', param).subscribe(function (data) {
            _this5.loaded = true;
            console.log(data);
            _this5.gallery = [];

            if (data && data.status === 200 && data.data && data.data.length) {
              var info = data.data[0];
              _this5.productt = info;
              console.log('  this.productt ::::::', _this5.productt);
              _this5.productt['quantiy'] = 0; // console.log("json parsed", JSON.parse(this.productt.variations[0].items));

              _this5.name = info.name;
              _this5.description = info.descriptions;
              _this5.subId = info.sub_cate_id;
              _this5.coverImage = info.cover;
              _this5.key_features = info.key_features;
              _this5.disclaimer = info.disclaimer;
              _this5.discount = info.discount;
              _this5.exp_date = info.exp_date;
              _this5.gram = info.gram;
              _this5.have_gram = info.have_gram;
              _this5.kg = info.kg;
              _this5.have_kg = info.have_kg;
              _this5.liter = info.liter;
              _this5.have_liter = info.have_liter;
              _this5.ml = info.ml;
              _this5.have_ml = info.have_ml;
              _this5.pcs = info.pcs;
              _this5.have_pcs = info.have_pcs;
              _this5.in_offer = info.in_offer;
              _this5.in_stoke = info.in_stoke;
              _this5.is_single = info.is_single;
              _this5.veg = info.kind;
              _this5.realPrice = parseFloat(info.original_price);
              _this5.sellPrice = parseFloat(info.sell_price);
              _this5.status = info.status;
              _this5.rate = info.rating;
              _this5.totalRating = info.total_rating;
              _this5.storeId = info.store_id;
              _this5.storeName = info.s_name;

              _this5.gallery.push(_this5.coverImage);

              _this5.size = info.size;
              _this5.quantiy = info.quantiy;

              if (info.variations && info.size === '1' && info.variations !== '') {
                if (function (x) {
                  try {
                    JSON.parse(x);
                    return true;
                  } catch (e) {
                    return false;
                  }
                }(info.variations)) {
                  _this5.variations = JSON.parse(info.variations);
                  _this5.variant = 0;
                  _this5.productt['variations'] = JSON.parse(info.variations);
                  _this5.productt['variant'] = 0;
                } else {
                  info.variations = [];
                  _this5.productt['variations'] = [];
                  _this5.variant = 1;
                  _this5.productt['variant'] = 1;
                }
              } else {
                _this5.variations = [];
                _this5.second_variation = [];
                _this5.variant = 1;
                _this5.productt['variations'] = [];
                _this5.productt['variant'] = 1;
              }

              if (info.second_variation && info.second_variation !== '') {
                if (function (x) {
                  try {
                    JSON.parse(x);
                    return true;
                  } catch (e) {
                    return false;
                  }
                }(info.second_variation)) {
                  _this5.second_variation = JSON.parse(info.second_variation);
                  _this5.variant = 0;
                  _this5.productt['second_variation'] = JSON.parse(info.second_variation);
                  _this5.productt['second_variant'] = 0;

                  var _loop = function _loop(a) {
                    // console.log('sadssdasdasdasdasdasda',JSON.parse(this.productt.second_variation[a].sub_category))
                    _this5.productt.second_variation[a]['sub_category'] = JSON.parse(_this5.productt.second_variation[a].sub_category);

                    if (_this5.productt.second_variation[a]['sub_category']) {
                      console.log(' this.productt.second_variation[a]==>', _this5.productt.second_variation[a]);

                      _this5.productt.second_variation[a]['sub_category'].forEach(function (element, index) {
                        element['quantity'] = 0;
                        element['id'] = _this5.id + '_' + element.en_title + index;
                        element['type'] = _this5.productt.second_variation[a].type;
                      });
                    }
                  };

                  for (var a = 0; a < _this5.productt.second_variation.length; a++) {
                    _loop(a);
                  } // console.log('sadssdasdasdasdasdasda', this.productt)

                } else {
                  info.variations = [];
                  _this5.productt['second_variation'] = [];
                  _this5.variant = 1;
                  _this5.productt['second_variant'] = 1;
                }
              } else {
                _this5.second_variation = [];
                _this5.second_variant = 1;
                _this5.productt['second_variation'] = [];
                _this5.productt['second_variant'] = 1;
              }

              if (_this5.productt.variations[0]) {
                if (_this5.productt.variations[0]) {
                  _this5.productt.variations[0].items.forEach(function (element) {
                    element['quantity'] = 0;
                    element.id = _this5.id + '_' + element.title;
                  });
                }
              } // if(this.productt.second_variation){
              //   if(this.productt.second_variation){
              //     this.productt.second_variation.forEach(element => {
              //       console.log('element,element',element)
              //       element.id = this.id + '_' + element.en_cat_title;
              //     });
              //   }
              // }
              // console.log("producttttt", this.productt.variations[0].items);
              // this.addOns();


              _this5.checkCartItems();

              if (info.images) {
                var images = JSON.parse(info.images);
                console.log('images[0]=====>>>', images[0]);

                if (images[0] !== 'NULL') {
                  _this5.gallery.push(images[0]);
                }

                if (images[1] !== 'NULL') {
                  _this5.gallery.push(images[1]);
                }

                if (images[2] !== 'NULL') {
                  _this5.gallery.push(images[2]);
                }

                if (images[3] !== 'NULL') {
                  _this5.gallery.push(images[3]);
                }

                if (images[4] !== 'NULL') {
                  _this5.gallery.push(images[4]);
                }

                if (images[5] !== 'NULL') {
                  _this5.gallery.push(images[5]);
                }
              }

              _this5.getRelated();
            }
          }, function (error) {
            console.log(error);
            _this5.loaded = true;

            _this5.util.errorToast(_this5.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gotoStore",
        value: function gotoStore() {
          var param = {
            queryParams: {
              id: this.storeId,
              name: this.storeName
            }
          };
          this.router.navigate(['tabs/home/store'], param);
        }
      }, {
        key: "add",
        value: function add() {
          this.quantiy = this.quantiy + 1;
          this.cart.addQuantity(this.quantiy, this.id);
        }
      }, {
        key: "remove",
        value: function remove() {
          if (this.quantiy === 1) {
            if (this.productt.variations[0]) {
              this.productt.variations[0].items.forEach(function (element) {
                element.quantity = 0;
              });
            }

            this.quantiy = 0;
            this.cart.removeItem(this.id);
          } else {
            this.quantiy = this.quantiy - 1;
            this.cart.addQuantity(this.quantiy, this.id);
          }
        }
      }, {
        key: "onShare",
        value: function onShare() {}
      }, {
        key: "onFav",
        value: function onFav() {
          var _this6 = this;

          if (this.util.favIds.includes(this.id)) {
            console.log('remove this');
            this.util.removeFav(this.id);
            console.log('after removed', this.util.favIds);
            console.log('edit');
            var param = {
              id: localStorage.getItem('uid'),
              ids: this.util.favIds.join()
            };
            this.util.haveFav = true;
            console.log('parama', param);
            this.api.post('favourite/editList', param).subscribe(function (data) {
              console.log('save response', data);

              if (data && data.status !== 200) {
                _this6.util.errorToast(_this6.util.getString('Something went wrong'));
              }
            }, function (error) {
              console.log('error on save', error);

              _this6.util.errorToast(_this6.util.getString('Something went wrong'));
            });
          } else {
            console.log('add new');
            this.util.setFav(this.id);
            console.log('after added', this.util.favIds);

            if (this.util.haveFav) {
              console.log('edit');
              var _param = {
                id: localStorage.getItem('uid'),
                ids: this.util.favIds.join()
              };
              this.util.haveFav = true;
              console.log('parama', _param);
              this.api.post('favourite/editList', _param).subscribe(function (data) {
                console.log('save response', data);

                if (data && data.status !== 200) {
                  _this6.util.errorToast(_this6.util.getString('Something went wrong'));
                }
              }, function (error) {
                console.log('error on save', error);

                _this6.util.errorToast(_this6.util.getString('Something went wrong'));
              });
            } else {
              console.log('save');
              var _param2 = {
                uid: localStorage.getItem('uid'),
                ids: this.util.favIds.join()
              };
              this.util.haveFav = true;
              console.log('parama', _param2);
              this.api.post('favourite/save', _param2).subscribe(function (data) {
                console.log('save response', data);

                if (data && data.status !== 200) {
                  _this6.util.errorToast(_this6.util.getString('Something went wrong'));
                }
              }, function (error) {
                console.log('error on save', error);

                _this6.util.errorToast(_this6.util.getString('Something went wrong'));
              });
            }
          }
        }
      }, {
        key: "singleProduct",
        value: function singleProduct(item) {
          var param = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['/tabs/categories/product'], param);
        }
      }, {
        key: "productRating",
        value: function productRating() {
          var param = {
            queryParams: {
              id: this.id,
              name: this.name,
              type: 'product'
            }
          };
          this.router.navigate(['/tabs/home/ratings'], param);
        } // async variants() {
        //   const allData = [];
        //   if (this.variations !== '' && this.variations.length > 0 && this.variations[0].items.length > 0) {
        //     console.log('->', this.variations[0].items);
        //     this.variations[0].items.forEach((element, index) => {
        //       console.log('OK');
        //       let title = '';
        //       if (this.util.cside === 'left') {
        //         const price = this.variations && this.variations[0] &&
        //           this.variations[0].items[index] &&
        //           this.variations[0].items[index].discount ? this.variations[0].items[index].discount :
        //           this.variations[0].items[index].price;
        //         title = element.title + ' - ' + this.util.currecny + ' ' + price;
        //       } else {
        //         const price = this.variations && this.variations[0] && this.variations[0].items[index] &&
        //           this.variations[0].items[index].discount ? this.variations[0].items[index].discount :
        //           this.variations[0].items[index].price;
        //         title = element.title + ' - ' + price + ' ' + this.util.currecny;
        //       }
        //       const data = {
        //         name: element.title,
        //         type: 'radio',
        //         label: title,
        //         value: index,
        //         checked: this.variant === index
        //       };
        //       allData.push(data);
        //     });
        //     console.log('All Data', allData);
        //     const alert = await this.alertCtrl.create({
        //       header: this.name,
        //       inputs: allData,
        //       buttons: [
        //         {
        //           text: this.util.getString('Cancel'),
        //           role: 'cancel',
        //           cssClass: 'secondary',
        //           handler: () => {
        //             console.log('Confirm Cancel');
        //           }
        //         }, {
        //           text: this.util.getString('Ok'),
        //           handler: (data) => {
        //             console.log('Confirm Ok', data);
        //             console.log('before', this.variant);
        //             this.variant = data;
        //             console.log('after', this.variant);
        //             this.productt['variant'] = data;
        //           }
        //         }
        //       ]
        //     });
        //     await alert.present();
        //   } else {
        //     console.log('none');
        //   }
        // }
        // addOns() {
        //   this.addons = [];
        //   if (this.variations !== '' && this.variations.length > 0 && this.variations[0].items.length > 0) {
        //     console.log('->', this.variations[0].items);
        //     this.variations[0].items.forEach((element) => {
        //       this.addons.push(element);
        //       console.log("addon", this.addons);
        //     });
        //   } else {
        //     console.log('none');
        //   }
        // }

      }, {
        key: "addToCart",
        value: function addToCart() {
          this.quantiy = 1;
          this.productt.quantiy = 1; // console.log("this product", this.productt, this.variations[0].items);

          this.cart.addItem(this.productt);
        }
      }, {
        key: "addSubToCart",
        value: function addSubToCart(id) {
          var _this7 = this;

          this.subId = id;
          var param = {
            id: this.subId
          };
          this.api.post('products/getById', param).subscribe(function (data) {
            console.log(data), "data";

            if (data && data.status === 200 && data.data && data.data.length) {
              var info = data.data[0];
              _this7.subProduct = info;
              _this7.subQuantity = 1;
              _this7.subProduct.quantiy = 1;
              console.log("sub quantity", _this7.subProduct.quantiy);

              _this7.cart.subAddItem(_this7.subProduct, id);
            }
          });
        } // addAddOn(item, parent) {
        //   // this.parentId = id;
        //   // const param = {
        //   //   id: this.parentId
        //   // };
        //   console.log('parent',parent)
        //   console.log("item", item, parent);
        //   let id = item.id;
        //   this.productt.variations[0].items.forEach(element => {
        //     if(element.id == id){
        //       console.log("element id", element.id, id);
        //       element.quantity = element.quantity + 1;
        //       // console.log(this.variations[0].items);
        //       this.cart.addAddOn(id, parent, element.quantity);
        //     }
        //   });
        // }

      }, {
        key: "minusAddOn",
        value: function minusAddOn(item, parent) {
          var _this8 = this;

          console.log("item", item, parent);
          var id = item.id;
          this.productt.variations[0].items.forEach(function (element) {
            if (element.id == id) {
              console.log("element id", element.id, id);
              element.quantity = element.quantity - 1;
              console.log(_this8.variations[0].items);

              _this8.cart.addAddOn(id, parent, element.quantity);
            }
          });
        }
      }, {
        key: "subAdd",
        value: function subAdd(id) {
          this.subQuantity = this.getSubQuanity(id);
          this.subQuantity = this.subQuantity + 1;
          this.cart.subAddQuantity(this.subQuantity, id);
        }
      }, {
        key: "subRemove",
        value: function subRemove(id) {
          this.subQuantity = this.getSubQuanity(id);

          if (this.subQuantity === 1) {
            this.subQuantity = 0;
            this.cart.removeItem(id);
          } else {
            this.subQuantity = this.subQuantity - 1;
            this.cart.subAddQuantity(this.subQuantity, id);
          }
        }
      }, {
        key: "getSubQuanity",
        value: function getSubQuanity(id) {
          var data = this.cart.cart.filter(function (x) {
            return x.id === id;
          });
          console.log("getSubQuanity", data);
          var quantity = data[0].quantiy;
          return quantity;
        }
      }, {
        key: "addAddOn",
        value: function addAddOn(item, parent) {
          var _this9 = this;

          // this.parentId = id;
          // const param = {
          //   id: this.parentId
          // };
          console.log('parent<<<==', parent);
          console.log("item<<<==", item, parent);
          var id = item.id;
          this.productt.variations[0].items.forEach(function (element) {
            if (element.id == id) {
              console.log("element id", element.id, id);
              element.quantity = element.quantity + 1; // console.log(this.variations[0].items);

              _this9.cart.addAddOn(id, parent, element.quantity);
            }
          });
        }
      }, {
        key: "addSubAddOn",
        value: function addSubAddOn(item, parent, type, event, index) {
          var _this10 = this;

          /*let id = item.id;
          if(type == 'radio'){
            let id = item.id;
            this.cart.addSubAddOn(id, parent,1, index ,type);
            
          }
          if(type == 'checkbox'){
            if(event.target.checked ){
              let id = item.id;
              this.cart.addSubAddOn(id, parent,1, index,type);
            }else{
              let id = item.id;
              this.cart.addSubAddOn(id, parent,0, index,type);
            }
          }*/
          this.ngZone.run(function () {
            var qty = type == 'radio' ? 1 : type == 'checkbox' && event.target.checked ? 1 : 0;

            _this10.cart.addSubAddOn(item.id, parent, qty, index, type);

            console.log(qty, '::item ->addSubAddOn::', item);

            _this10.checkCartItems();
          });
        }
      }, {
        key: "toggle",
        value: function toggle(data, value) {
          data['isOpen'] = value;
        }
      }, {
        key: "removeAllAdones",
        value: function removeAllAdones(parent) {
          var _this11 = this;

          parent.variations[0].items.forEach(function (element) {
            element.quantity = 0;

            _this11.cart.addAddOn('none', parent.id, element.quantity);
          });
        }
      }, {
        key: "addRemoveSubAddonQty",
        value: function addRemoveSubAddonQty(item, parent, type, event, index, opration) {
          console.log('item======addRemoveSubAddonQty=>', item);
          var id = item.id;

          if (opration === 'add') {
            var quentity = item.quantity + 1;
            this.cart.addSubAddOn(id, parent, quentity, index, type);
            this.checkCartItems();
          } else {
            var _quentity = item.quantity - 1;

            this.cart.addSubAddOn(id, parent, _quentity, index, type);
            this.checkCartItems();
          }

          console.log('item======addRemoveSubAddonQty=fff>', item);
        }
      }]);

      return ProductPage;
    }();

    ProductPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    ProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product.page.scss */
      "./src/app/pages/product/product.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], ProductPage);
    /***/
  }
}]);
//# sourceMappingURL=product-product-module-es5.js.map