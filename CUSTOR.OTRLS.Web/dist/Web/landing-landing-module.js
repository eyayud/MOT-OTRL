(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/landing/actions/actions.component.html":
/*!********************************************************!*\
  !*** ./src/app/landing/actions/actions.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"section-gap pb-0\" style=\"margin-top:90px; margin-left: 2%; margin-right: 2%\">\n    <div class=\"container\">\n      <div fxLayout=\"row wrap\" class=\"col-gap feature-section-v2\">\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\n          <mat-card style=\"background-color:whitesmoke\">\n            <div class=\"feature-section-v2-list\" fxLayoutAlign=\"space-between\">\n              <button mat-fab color=\"primary\"><i class=\"material-icons\">\n                  account_circle\n                </i></button>\n              <div class=\"ml-4 feature-section-v2-content\">\n                <h4 class=\"mb-2 font-bold\"><a routerLink=\"/auth/login\">Create Account</a></h4>\n                <p class=\"mb-0\">Please register to access our online services. You also need to confirm your account after registration</p>\n            </div>\n            </div>\n          </mat-card>\n        </div>\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\n          <mat-card style=\"background-color:whitesmoke\">\n            <div class=\"feature-section-v2-list\" fxLayoutAlign=\"space-between\">\n              <button mat-fab color=\"primary\"><i class=\"material-icons\">\n                  lock_open\n                </i></button>\n              <div class=\"ml-4 feature-section-v2-content\">\n                <h4 class=\"mb-2 font-bold\"><a routerLink=\"/auth/login\">Login</a></h4>\n                <p class=\"mb-0\">Login to access our services, if you already have created online account.</p>\n                <br>\n            </div>\n            </div>\n          </mat-card>\n        </div>\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\n          <mat-card style=\"background-color:whitesmoke\">\n            <div class=\"feature-section-v2-list\" fxLayoutAlign=\"space-between\">\n              <button mat-fab color=\"primary\"><i class=\"material-icons\">\n                thumb_up\n                </i></button>\n              <div class=\"ml-4 feature-section-v2-content\">\n                <h4 class=\"mb-2 font-bold\">Get Information</h4>\n                <p class=\"mb-0\">Information about each online service, document requirements and service fee is available here.</p>\n              </div>\n            </div>\n          </mat-card>\n        </div>\n       \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/landing/actions/actions.component.scss":
/*!********************************************************!*\
  !*** ./src/app/landing/actions/actions.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-bottom: 0px;\n  font-size: large;\n  color: azure;\n  margin-bottom: 10px; }\n\n.section-gap {\n  padding-left: 1rem 0; }\n\n.section-gap-lg {\n  padding: 7rem 0; }\n\n.section-title-toolbar {\n  padding: 1rem; }\n\n.section-title-toolbar {\n  border-radius: 10px; }\n\n.text-inverse {\n  color: #fff; }\n\n.col-gap {\n  margin-left: -15px;\n  margin-right: -15px; }\n\n.col-gap > div {\n    padding-left: .75rem;\n    padding-right: .75rem;\n    margin-bottom: .75rem;\n    margin-top: .75rem; }\n\n.service-card-gap {\n  margin-top: -120px;\n  padding: 1.5rem; }\n\n.section-title-toolbar {\n  border-radius: 6px; }\n\n.feature-section-v2-list .material-icons {\n  font-size: 2.3rem; }\n\n.feature-section-v2-list .mat-fab {\n  width: 85px;\n  height: 85px;\n  margin-top: -65px; }\n\n.feature-section-v2-list p {\n  color: rgba(0, 0, 0, 0.6); }\n\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n\n.px-4 {\n  padding-right: 1.5rem !important; }\n\n.mb-2 {\n  margin-bottom: 0.5rem !important; }\n\n@media (max-width: 991px) {\n  .feature-section-v2-list .material-icons {\n    font-size: 1.7rem; }\n  .feature-section-v2-list {\n    display: block !important;\n    text-align: center;\n    /* margin: 0 !important; */ }\n  .feature-section-v2-list .mat-fab {\n    width: 55px;\n    height: 55px;\n    margin-top: 0;\n    margin: 12px auto;\n    text-align: center;\n    display: block; }\n  .ml-4.feature-section-v2-content {\n    margin: 0 !important; } }\n\n.font-bold {\n  font-weight: 700 !important; }\n\n.ml-4,\n.mx-4 {\n  margin-left: 0.5rem !important; }\n\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL2xhbmRpbmcvYWN0aW9ucy9hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFlO0VBRWYsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxhQUFZLEVBQUE7O0FBR2Y7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDQSxXQUFXLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRnZCO0lBS00sb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWMsRUFBQTs7QUFJakI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFFSyxpQkFBaUIsRUFBQTs7QUFGdEI7RUFNSyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQVJ0QjtFQWFLLHlCQUF5QixFQUFBOztBQUk5Qjs7RUFFSSw0QkFBMkIsRUFBQTs7QUFFaEM7RUFDQyxnQ0FBK0IsRUFBQTs7QUFFaEM7RUFDQyxnQ0FBOEIsRUFBQTs7QUFHL0I7RUFDSTtJQUNFLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwwQkFBQSxFQUEyQjtFQUc3QjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBR2hCO0lBQ0Usb0JBQW9CLEVBQUEsRUFDckI7O0FBR0g7RUFDRCwyQkFBMEIsRUFBQTs7QUFFM0I7O0VBRUMsOEJBQTRCLEVBQUE7O0FBRzdCOztFQUVDLGdDQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6bGFyZ2U7XHJcbiAgICAvLyBjb2xvcjogIzAwYmNkNDtcclxuICAgIGNvbG9yOiBhenVyZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1nYXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLWdhcC1sZyB7XHJcbiAgICBwYWRkaW5nOiA3cmVtIDA7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXRpdGxlLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nOjFyZW07XHJcbiB9XHJcbiBcclxuIC5zZWN0aW9uLXRpdGxlLXRvb2xiYXIge1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiB9XHJcbiAudGV4dC1pbnZlcnNlIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbC1nYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICBcclxuICAgID5kaXYge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IC43NXJlbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogLjc1cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IC43NXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZXJ2aWNlLWNhcmQtZ2Fwe1xyXG4gICAgbWFyZ2luLXRvcDogLTEyMHB4O1xyXG4gICAgcGFkZGluZzoxLjVyZW07XHJcbiB9XHJcbiBcclxuIFxyXG4gLnNlY3Rpb24tdGl0bGUtdG9vbGJhciB7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gfVxyXG4gXHJcbiAuZmVhdHVyZS1zZWN0aW9uLXYyLWxpc3Qge1xyXG4gICAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LWZhYiB7XHJcbiAgICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC02NXB4O1xyXG4gICAgICAvLyBib3gtc2hhZG93OiAwIDRweCAxNHB4IDAgI0I4OThGRjtcclxuICAgIH1cclxuICBcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAucGItMCxcclxuIC5weS0wIHtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnRcclxuIH1cclxuLnB4LTQge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEuNXJlbSFpbXBvcnRhbnRcclxufVxyXG4ubWItMntcclxuXHRtYXJnaW4tYm90dG9tOiAuNXJlbSFpbXBvcnRhbnRcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5OTFweCkge1xyXG4gICAgLmZlYXR1cmUtc2VjdGlvbi12Mi1saXN0IC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZlYXR1cmUtc2VjdGlvbi12Mi1saXN0IHtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAvKiBtYXJnaW46IDAgIWltcG9ydGFudDsgKi9cclxuICAgIH1cclxuICBcclxuICAgIC5mZWF0dXJlLXNlY3Rpb24tdjItbGlzdCAubWF0LWZhYiB7XHJcbiAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIG1hcmdpbjogMTJweCBhdXRvO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1sLTQuZmVhdHVyZS1zZWN0aW9uLXYyLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgLmZvbnQtYm9sZCB7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1sLTQsXHJcbi5teC00IHtcclxuXHRtYXJnaW4tbGVmdDogLjVyZW0haW1wb3J0YW50XHJcbn1cclxuXHJcbi5tYi0yLFxyXG4ubXktMiB7XHJcblx0bWFyZ2luLWJvdHRvbTogLjVyZW0haW1wb3J0YW50XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/landing/actions/actions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landing/actions/actions.component.ts ***!
  \******************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
    }
    ActionsComponent.prototype.ngOnInit = function () {
    };
    ActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-actions',
            template: __webpack_require__(/*! ./actions.component.html */ "./src/app/landing/actions/actions.component.html"),
            styles: [__webpack_require__(/*! ./actions.component.scss */ "./src/app/landing/actions/actions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<mat-toolbar class=\"landing-toolbar mat-elevation-z4\" color=\"primary\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex>\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">               \n                <a routerLink=\"/\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"logo\">\n                    <span class=\"mx-2\"><h1 style=\"font-weight:bolder\">ንግድና ኢንዱስትሪ ሚኒስቴር</h1></span>\n                    <img src=\".././../assets/image/Federal.png\" alt=\"logo\">\n                    <span class=\"mx-2\"><h3 style=\"font-size:16px\">Ministry of Trade and Industry</h3></span> \n                </a>\n            </div> \n            \n        </div>\n</mat-toolbar>\n<mat-drawer-container class=\"landing-container w-100 h-100\">     \n    <mat-drawer-content>\n        <app-content-header id=\"home\"\n            [icon]=\"''\" \n            [title]=\"'Online Trade Registration and Licensing (OTRLS)'\"\n            [desc]=\"' The Ministry of Trade and Industry is pleased to introduce online services in order to make its services easily accessible to its customers'\" \n            [hasBgImage]=\"true\" \n            [class]=\"'py-5 px-2'\">\n        </app-content-header>        \n        \n        <div class=\"p-2\">\n           <app-actions></app-actions>\n           <app-our-services></app-our-services>\n        </div> \n       \n    </mat-drawer-content>\n</mat-drawer-container>\n</div>\n<mat-toolbar color=\"primary\" class=\"landing-footer mt-5\">\n    <div fxLayout.xs=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"w-100\">\n        <span>Copyright ©2019. All Rights Reserved. </span>\n        <span> MOTI</span>\n    </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-container {\n  margin-top: 56px;\n  padding-bottom: 56px; }\n  .landing-container .landing-sidenav {\n    width: 200px; }\n  .landing-container .landing-sidenav button {\n      text-transform: capitalize; }\n  .landing-container .title-section {\n    font-size: 16px;\n    text-align: center; }\n  .landing-container .block-title {\n    text-transform: uppercase;\n    font-weight: 500; }\n  .landing-container .client-item {\n    height: 80px;\n    text-align: center; }\n  .landing-container .client-item img {\n      max-width: 100%;\n      max-height: 100%; }\n  .landing-container .testimonial-item {\n    margin-top: 50px;\n    text-align: center;\n    overflow: visible; }\n  .landing-container .testimonial-item .text {\n      font-style: italic; }\n  .landing-container .testimonial-item img {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      margin-top: -76px; }\n  .landing-container .landing-footer {\n    width: 100%;\n    font-size: 10px;\n    font-weight: 400;\n    height: 68px !important; }\n  .footer {\n  height: 56px;\n  position: relative;\n  z-index: 3; }\n  .arrow-btn.mat-mini-fab {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0; }\n  .arrow-btn.mat-mini-fab.prev {\n    left: 12px; }\n  .arrow-btn.mat-mini-fab.next {\n    right: 12px; }\n  .arrow-btn.mat-mini-fab.hidden {\n    display: none !important; }\n  .landing-toolbar {\n  position: fixed;\n  top: 0;\n  height: 56px !important;\n  z-index: 2; }\n  .landing-toolbar button {\n    text-transform: capitalize;\n    font-weight: 400; }\n  .landing-toolbar .logo {\n    min-width: 160px !important; }\n  .landing-footer {\n  width: 100%;\n  font-size: 10px;\n  font-weight: 400;\n  height: 68px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTtFQUZ4QjtJQUlRLFlBQVksRUFBQTtFQUpwQjtNQU1ZLDBCQUEwQixFQUFBO0VBTnRDO0lBVVEsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBWDFCO0lBY1EseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFBO0VBZnhCO0lBa0JRLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQW5CMUI7TUFxQlksZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBdEI1QjtJQTBCUSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBNUJ6QjtNQThCWSxrQkFBa0IsRUFBQTtFQTlCOUI7TUFpQ1ksWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUE7RUFwQzdCO0lBeUNRLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0VBSS9CO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7RUFFZDtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVMsRUFBQTtFQUpiO0lBTVEsVUFBVSxFQUFBO0VBTmxCO0lBU1EsV0FBVyxFQUFBO0VBVG5CO0lBWVEsd0JBQXdCLEVBQUE7RUFHaEM7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixVQUFVLEVBQUE7RUFKZDtJQU1RLDBCQUEwQjtJQUMxQixnQkFBZ0IsRUFBQTtFQVB4QjtJQVVRLDJCQUEyQixFQUFBO0VBR25DO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxhbmRpbmctY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTZweDtcclxuICAgIC5sYW5kaW5nLXNpZGVuYXZ7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudGl0bGUtc2VjdGlvbntcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJsb2NrLXRpdGxle1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC5jbGllbnQtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXN0aW1vbmlhbC1pdGVte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTsgICAgICAgXHJcbiAgICAgICAgLnRleHR7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTc2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICAubGFuZGluZy1mb290ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgaGVpZ2h0OiA2OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uZm9vdGVyeyAgICBcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuLmFycm93LWJ0bi5tYXQtbWluaS1mYWJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICAmLnByZXZ7XHJcbiAgICAgICAgbGVmdDogMTJweDtcclxuICAgIH1cclxuICAgICYubmV4dHtcclxuICAgICAgICByaWdodDogMTJweDtcclxuICAgIH1cclxuICAgICYuaGlkZGVue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4ubGFuZGluZy10b29sYmFye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAubG9nb3tcclxuICAgICAgICBtaW4td2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmxhbmRpbmctZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgaGVpZ2h0OiA2OHB4ICFpbXBvcnRhbnQ7XHJcbn0gICJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import {ContentHeaderComponent} from '@custor/components/content-header/content-header.component';
var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: routes, LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/actions.component */ "./src/app/landing/actions/actions.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-services/our-services.component */ "./src/app/landing/our-services/our-services.component.ts");
/* harmony import */ var _our_services_customer_services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-services/customer-services.service */ "./src/app/landing/our-services/customer-services.service.ts");
/* harmony import */ var _custor_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/components/content-header/content-header.module */ "./src/@custor/components/content-header/content-header.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




// import { SharedModule } from '@custor/modules/shared.module';




// import { ContentHeaderComponent } from '@custor/components/content-header/content-header.component';




var routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"], pathMatch: 'full' }
];
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"],
                _actions_actions_component__WEBPACK_IMPORTED_MODULE_4__["ActionsComponent"],
                _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_6__["OurServicesComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _custor_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_8__["ContentHeaderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]
            ],
            providers: [
                _our_services_customer_services_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"]
            ]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ }),

/***/ "./src/app/landing/our-services/customer-services.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/landing/our-services/customer-services.service.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerServiceData, CUSTOMER_SERVICE, CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServiceData", function() { return CustomerServiceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_SERVICE", function() { return CUSTOMER_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerServiceData = /** @class */ (function () {
    function CustomerServiceData() {
    }
    return CustomerServiceData;
}());

var CUSTOMER_SERVICE = [
    {
        ServiceId: '1', Title: 'አዲስ የንግድ ምዝገባ', TitleEnglish: 'Commercial Registration',
        Desc: 'All customers should have commercial registration certificate before they can request any other service.'
    },
    {
        ServiceId: '2', Title: 'አዲስ ንግድ ፈቃድ', TitleEnglish: 'New Trade License',
        Desc: 'Customers can use our online service to get new trade license for each business activity they intend to engage in.'
    },
    {
        ServiceId: '3', Title: 'የንግድ ፈቃድ  እድሳት', TitleEnglish: 'Renewal of Trade License',
        Desc: 'Customers can renew their Trade License every year using our online service application.'
    },
    {
        ServiceId: '4', Title: 'የድርጅት ስም ማጣርያ', TitleEnglish: 'Business Name Clearance ',
        Desc: 'Use this service to check that the company name you intend to establish is not taken up by other customers'
    },
    {
        ServiceId: '5', Title: 'የንግድ ስም ማጣርያ', TitleEnglish: 'Trade Name Clearance',
        Desc: 'Customers can search our Trade Name database to enusre that the Trade Name they intend to register is not taken up by other cuatomers.'
    },
];
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.getServiceList = function () {
        return CUSTOMER_SERVICE;
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/landing/our-services/our-services.component.html":
/*!******************************************************************!*\
  !*** ./src/app/landing/our-services/our-services.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"custService\" class=\"mt-2 pt-3\">\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"title-section p-2 mb-2\">  \n      <h1>Our Services</h1>             \n      <p class=\"secondary-text-color\">Click on each service link to find more information.</p>\n  </div>\n  <div fxLayout=\"row wrap\" fxLayoutAlign=\"center left\">        \n      <div fxFlex=\"100\">\n          <div fxLayout=\"row wrap\" fxLayoutAlign=\"left left\">\n              <div *ngFor=\"let customerService of services\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.md=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\n                  <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"w-100\">            \n                      <mat-icon class=\"mat-icon-xlg accent-color\">important_devices</mat-icon>\n                      <a  class=\"pointer\" (click)=\"goServiceDetail(customerService.Title, customerService.Id)\">\n                          <h3>{{customerService.Title}}</h3>\n                      </a>\n                      <p class=\"text-left secondary-text-color\">\n                          {{customerService.Desc}}\n                      </p>           \n                  </mat-card>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/landing/our-services/our-services.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/landing/our-services/our-services.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvb3VyLXNlcnZpY2VzL291ci1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/landing/our-services/our-services.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing/our-services/our-services.component.ts ***!
  \****************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-services.service */ "./src/app/landing/our-services/customer-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OurServicesComponent = /** @class */ (function () {
    function OurServicesComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.services = [];
    }
    OurServicesComponent.prototype.ngOnInit = function () {
        this.getServices('am');
    };
    OurServicesComponent.prototype.getServices = function (currentLang) {
        var _this = this;
        var service = new _customer_services_service__WEBPACK_IMPORTED_MODULE_2__["CustomerServiceData"]();
        this.customerService.getServiceList().forEach(function (ser) {
            service = {
                Id: ser.ServiceId.toString(),
                Title: (currentLang === 'et' ? ser.Title : ser.TitleEnglish),
                Desc: ser.Desc
            };
            _this.services.push(service);
        });
    };
    OurServicesComponent.prototype.goServiceDetail = function (title, id) {
        // localStorage.setItem('title', title);
        this.router.navigate(['/requirement/' + id]);
    };
    OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-services',
            template: __webpack_require__(/*! ./our-services.component.html */ "./src/app/landing/our-services/our-services.component.html"),
            styles: [__webpack_require__(/*! ./our-services.component.scss */ "./src/app/landing/our-services/our-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_customer_services_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OurServicesComponent);
    return OurServicesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map