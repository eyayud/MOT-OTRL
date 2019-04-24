(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/@custor/components/lang-switcher/lang-switcher.component.html":
/*!***************************************************************************!*\
  !*** ./src/@custor/components/lang-switcher/lang-switcher.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form #form=\"ngForm\" [formGroup]=\"langForm\" novalidate>\n<mat-form-field>\n    <mat-select formControlName=\"cLang\" [(ngModel)]=\"config.language\"    (selectionChange)=\"setLang($event.value)\">\n        <mat-option *ngFor=\"let language of languages\" [value]=\"language.locale\">\n                <span >{{language.name}}</span>\n        </mat-option>\n    </mat-select>\n</mat-form-field>\n</form> -->\n\n<button mat-button fxHide fxShow.gt-xs class=\"language-button\"  [matMenuTriggerFor]=\"languageMenu\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img class=\"flag mr-8\" [src]=\"'../../assets/flags/'+selectedLanguage+'.png'\">\n        <span class=\"iso text-uppercase\">{{selectedLanguageName}}</span>\n    </div>\n</button>\n\n<mat-menu #languageMenu=\"matMenu\" [overlapTrigger]=\"false\">\n    <button mat-menu-item *ngFor=\"let lang of languages\" (click)=\"setLang(lang.locale)\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <img class=\"flag mr-16\" [src]=\"'../assets/flags/'+lang.locale+'.png'\">\n            <span class=\"iso\">{{lang.name}}</span>\n        </div>\n    </button>\n</mat-menu>"

/***/ }),

/***/ "./src/@custor/components/lang-switcher/lang-switcher.component.scss":
/*!***************************************************************************!*\
  !*** ./src/@custor/components/lang-switcher/lang-switcher.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-select {\n  font-size: 10px;\n  width: 90px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvQGN1c3Rvci9jb21wb25lbnRzL2xhbmctc3dpdGNoZXIvbGFuZy1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9AY3VzdG9yL2NvbXBvbmVudHMvbGFuZy1zd2l0Y2hlci9sYW5nLXN3aXRjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/@custor/components/lang-switcher/lang-switcher.component.ts":
/*!*************************************************************************!*\
  !*** ./src/@custor/components/lang-switcher/lang-switcher.component.ts ***!
  \*************************************************************************/
/*! exports provided: LangSwitcher, LangSwitcherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangSwitcher", function() { return LangSwitcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangSwitcherModule", function() { return LangSwitcherModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/configuration.service */ "./src/@custor/services/configuration.service.ts");





var LangSwitcher = /** @class */ (function () {
    function LangSwitcher(config) {
        var _this = this;
        this.config = config;
        this.languages = [
            { name: 'English', locale: 'en' },
            { name: 'አማርኛ', locale: 'et' },
        ];
        config.configurationImported$.subscribe(function () { return _this.setLang(_this.currentLang); });
        this.selectedLanguage = this.currentLang;
        this.selectedLanguageName = this.getLangName(this.selectedLanguage);
    }
    Object.defineProperty(LangSwitcher.prototype, "currentLang", {
        get: function () {
            return this.config.language || '';
        },
        enumerable: true,
        configurable: true
    });
    LangSwitcher.prototype.setLang = function (lang) {
        if (lang) {
            alert(this.config.language);
            this.config.language = lang;
            this.selectedLanguage = lang;
            this.selectedLanguageName = this.getLangName(lang);
        }
    };
    LangSwitcher.prototype.getLangName = function (locale) {
        switch (locale) {
            case 'et':
                return 'አማርኛ';
            case 'en':
                return 'English';
            default:
                return 'አማርኛ';
        }
    };
    LangSwitcher = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lang-switcher',
            template: __webpack_require__(/*! ./lang-switcher.component.html */ "./src/@custor/components/lang-switcher/lang-switcher.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./lang-switcher.component.scss */ "./src/@custor/components/lang-switcher/lang-switcher.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]])
    ], LangSwitcher);
    return LangSwitcher;
}());

var LangSwitcherModule = /** @class */ (function () {
    function LangSwitcherModule() {
    }
    LangSwitcherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
            ],
            exports: [LangSwitcher],
            declarations: [LangSwitcher],
            providers: [_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]],
        })
    ], LangSwitcherModule);
    return LangSwitcherModule;
}());



/***/ }),

/***/ "./src/app/common/navigation/sidebar-customer.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/navigation/sidebar-customer.ts ***!
  \*******************************************************/
/*! exports provided: CUSTOMER_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMER_ROUTES", function() { return CUSTOMER_ROUTES; });
var CUSTOMER_ROUTES = [{
        path: 'main/customer/dashboard',
        title: 'mainMenu.Home',
        type: 'link',
        iconType: 'dashboard'
    },
    {
        path: 'main/customer/profile',
        title: 'mainMenu.BusinessProfile',
        type: 'dropDown',
        iconType: 'people',
        children: [{
                path: 'main/customer/profile',
                title: 'mainMenu.InvestorProfile',
                type: 'link',
                iconType: 'account_circle',
            }, {
                path: '/main/customer/manager-list',
                title: 'mainMenu.associate',
                type: 'link',
                iconType: 'people',
            },
            {
                path: '/main/customer/manager-list',
                title: 'mainMenu.Services',
                type: 'link',
                iconType: 'view_list',
            }]
    }, {
        path: '/about',
        title: 'mainMenu.About',
        type: 'link',
        iconType: 'info'
    }
];


/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app_container\" [class.is-mobile]=\"mobileQuery.matches\" class=\"nav-container\">\n\n  <mat-toolbar ngPreserveWhitespaces color=\"primary\" class=\"app-toolbar mat-elevation-z8\">\n    <button mat-icon-button (click)=\"mainNav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <!-- <h1 class=\"app-name\"><a routerLink=\"/\" class=\"appTitle\">{{appTitle}}</a></h1> -->\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <a routerLink=\"/\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"logo\" ngClass.xs=\"mobile\">\n        <img src=\".././../assets/logo/logo.png\" alt=\"logo\">\n      </a>\n    </div>\n    <span class=\"app-toolbar-spacer\"></span>\n    <app-lang-switcher></app-lang-switcher>\n    <button *ngIf=\"isUserLoggedIn\" class=\"side-button\" mat-button [matMenuTriggerFor]=\"accountMenu\"\n            matTooltip=\"{{'mainMenu.UserAccount' | translate}}\">\n      <mat-icon class=\"menu-button\">account_circle</mat-icon>\n      <span fxHide.lt-sm>{{'mainMenu.Account' | translate}}</span>\n    </button>\n    <mat-menu #accountMenu=\"matMenu\">\n      <button mat-menu-item (click)=\"router.navigateByUrl('/settings')\">\n        <mat-icon>person</mat-icon>\n        <span>{{'mainMenu.Profile' | translate}}</span>\n      </button>\n      <button mat-menu-item (click)=\"router.navigateByUrl('/settings#preferences')\">\n        <mat-icon>settings</mat-icon>\n        <span>{{'mainMenu.Settings' | translate}}</span>\n      </button>\n      <button mat-menu-item (click)=\"logout()\">\n        <mat-icon>lock</mat-icon>\n        <span>{{'mainMenu.Logout' | translate}}</span>\n      </button>\n    </mat-menu>\n\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"app-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #mainNav class=\"app-sidenav-nav mat-elevation-z6\" [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\" [opened]=\"!mobileQuery.matches\">\n\n      <mat-nav-list *ngFor=\"let menuItem of menuItems \">\n        <a *ngIf=\"menuItem.type==='link'\" mat-list-item routerLinkActive=\"active\"\n           [routerLinkActiveOptions]=\"{ exact: true }\" [routerLink]=\"[menuItem.path]\">\n          <mat-icon>{{menuItem.iconType}}</mat-icon>\n          {{menuItem.title | translate}}</a>\n        <mat-expansion-panel *ngIf=\"menuItem.type==='dropDown'\">\n          <mat-expansion-panel-header style=\"font-size: 16px;\">\n            <mat-panel-title>\n              <mat-icon>{{menuItem.iconType}}</mat-icon>\n              {{ menuItem.title | translate }}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n\n          <mat-list dense class=\"mat-expansion-panel-body\">\n            <a *ngFor=\"let subMenu of menuItem.children\" mat-list-item routerLinkActive=\"active\" [routerLink]=\"subMenu.path\">\n              <mat-icon color=\"primary\" class=\"mat-18\">{{subMenu.iconType}}</mat-icon>\n              {{ subMenu.title | translate }}\n            </a>\n\n          </mat-list>\n        </mat-expansion-panel>\n\n      </mat-nav-list>\n\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <div fxLayout=\"column\" fxFill>\n        <div id=\"mainContent\" fxFlex>\n          <router-outlet></router-outlet>\n        </div>\n        <!-- <app-footer></app-footer> -->\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.is-mobile .app-toolbar {\n  position: fixed;\n  z-index: 2; }\n\n.app-toolbar-spacer {\n  flex: 1 1 auto; }\n\nh1.app-name {\n  margin-left: 8px; }\n\nh1.app-name > a {\n  color: inherit;\n  cursor: default;\n  text-decoration: inherit; }\n\n.app-sidenav-nav {\n  min-width: 200px; }\n\n.app-sidenav-nav .mat-nav-list {\n    padding-top: 0; }\n\n.app-sidenav-nav .mat-icon {\n    margin-left: 8px;\n    margin-right: 16px; }\n\n.app-sidenav-nav .mat-expansion-panel-header {\n    padding-left: 16px; }\n\n.app-sidenav-nav .mat-expansion-panel-header-title {\n    line-height: 24px; }\n\n.app-sidenav-nav .mat-expansion-panel-body {\n    padding: 0; }\n\n.app-sidenav-nav .mat-expansion-panel-body .mat-list-item .mat-list-item-content {\n      padding-left: 32px; }\n\n.app-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n\n.is-mobile .app-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto; }\n\n.logo {\n  font-weight: 700;\n  text-decoration: none;\n  min-width: 160px;\n  color: #fff; }\n\n.logo img {\n    width: 160px; }\n\n.logo.mobile {\n    min-width: 160px; }\n\n.logo.mobile span {\n      display: none; }\n\n.landing-toolbar {\n  position: fixed;\n  top: 0;\n  height: 56px !important;\n  z-index: 2; }\n\n.landing-toolbar button {\n    text-transform: capitalize;\n    font-weight: 400; }\n\n.landing-toolbar .logo {\n    min-width: 160px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUlaO0VBQ0ksZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUlRLGNBQWMsRUFBQTs7QUFKdEI7SUFRUSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7O0FBVDFCO0lBYVEsa0JBQWtCLEVBQUE7O0FBYjFCO0lBaUJRLGlCQUFpQixFQUFBOztBQWpCekI7SUFxQlEsVUFBVSxFQUFBOztBQXJCbEI7TUF3Qlksa0JBQWtCLEVBQUE7O0FBSzlCO0VBQ0k7MEZDbEJzRjtFRG9CdEYsT0FBTyxFQUFBOztBQUdYO0VBQ0k7K0RDbkIyRDtFRHFCM0QsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFKZjtJQU1RLFlBQVksRUFBQTs7QUFOcEI7SUFTUSxnQkFBZ0IsRUFBQTs7QUFUeEI7TUFXWSxhQUFhLEVBQUE7O0FBSXpCO0VBQ0ksZUFBZTtFQUNmLE1BQU07RUFDTix1QkFBdUI7RUFDdkIsVUFBVSxFQUFBOztBQUpkO0lBTVEsMEJBQTBCO0lBQzFCLGdCQUFnQixFQUFBOztBQVB4QjtJQVVRLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcblxyXG4uaXMtbW9iaWxlIC5hcHAtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYXBwLXRvb2xiYXItc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5oMS5hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG5oMS5hcHAtbmFtZSA+IGEge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5hcHAtc2lkZW5hdi1uYXYge1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuXHJcbiAgICAubWF0LW5hdi1saXN0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHAtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uaXMtbW9iaWxlIC5hcHAtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuLmxvZ297XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgICBcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjsgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4OyAgXHJcbiAgICB9XHJcbiAgICAmLm1vYmlsZXtcclxuICAgICAgICBtaW4td2lkdGg6IDE2MHB4OyBcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH0gXHJcbiAgICB9ICAgICBcclxufVxyXG4ubGFuZGluZy10b29sYmFye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAubG9nb3tcclxuICAgICAgICBtaW4td2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIubmF2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwOyB9XG5cbi5pcy1tb2JpbGUgLmFwcC10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyOyB9XG5cbi5hcHAtdG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuXG5oMS5hcHAtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7IH1cblxuaDEuYXBwLW5hbWUgPiBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyB9XG5cbi5hcHAtc2lkZW5hdi1uYXYge1xuICBtaW4td2lkdGg6IDIwMHB4OyB9XG4gIC5hcHAtc2lkZW5hdi1uYXYgLm1hdC1uYXYtbGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDA7IH1cbiAgLmFwcC1zaWRlbmF2LW5hdiAubWF0LWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4OyB9XG4gIC5hcHAtc2lkZW5hdi1uYXYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7IH1cbiAgLmFwcC1zaWRlbmF2LW5hdiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4OyB9XG4gIC5hcHAtc2lkZW5hdi1uYXYgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIC5hcHAtc2lkZW5hdi1uYXYgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMzJweDsgfVxuXG4uYXBwLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gIGZsZXg6IDE7IH1cblxuLmlzLW1vYmlsZSAuYXBwLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xuICBmbGV4OiAxIDAgYXV0bzsgfVxuXG4ubG9nbyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7IH1cbiAgLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMTYwcHg7IH1cbiAgLmxvZ28ubW9iaWxlIHtcbiAgICBtaW4td2lkdGg6IDE2MHB4OyB9XG4gICAgLmxvZ28ubW9iaWxlIHNwYW4ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuXG4ubGFuZGluZy10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNTZweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAyOyB9XG4gIC5sYW5kaW5nLXRvb2xiYXIgYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXdlaWdodDogNDAwOyB9XG4gIC5sYW5kaW5nLXRvb2xiYXIgLmxvZ28ge1xuICAgIG1pbi13aWR0aDogMTYwcHggIWltcG9ydGFudDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _custor_models_permission_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/models/permission.model */ "./src/@custor/models/permission.model.ts");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _common_navigation_sidebar_customer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/navigation/sidebar-customer */ "./src/app/common/navigation/sidebar-customer.ts");











var MainComponent = /** @class */ (function () {
    function MainComponent(translationService, accountService, authService, configService, router, changeDetectorRef, media) {
        this.translationService = translationService;
        this.accountService = accountService;
        this.authService = authService;
        this.configService = configService;
        this.router = router;
        this.isAdminExpanded = false;
        this.newNotificationCount = 0;
        this.appTitle = 'OTRLS';
        this.appLogo = '';
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
        // this.translationService.addLanguages(['en', 'et']);
        // this.configService.language = 'et';
        this.translationService.changeLanguage(this.configService.language);
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserLoggedIn = true; // this.authService.isLoggedIn;
        //if user is customer
        this.menuItems = _common_navigation_sidebar_customer__WEBPACK_IMPORTED_MODULE_10__["CUSTOMER_ROUTES"];
        // this.customerExpander.open();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                var url = event.url;
                if (url !== url.toLowerCase()) {
                    _this.router.navigateByUrl(event.url.toLowerCase());
                }
                // if (this.adminExpander && url.indexOf('admin') > 0) {
                //     this.adminExpander.open();
                // }
            }
        });
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    MainComponent.prototype.logout = function () {
        this.authService.logout();
        this.authService.redirectLogoutUser();
    };
    Object.defineProperty(MainComponent.prototype, "userName", {
        get: function () {
            return this.authService.currentUser ? this.authService.currentUser.UserName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "fullName", {
        get: function () {
            return this.authService.currentUser ? this.authService.currentUser.FullName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "canViewCustomers", {
        get: function () {
            return this.accountService.userHasPermission(_custor_models_permission_model__WEBPACK_IMPORTED_MODULE_8__["Permission"].viewUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "canViewProducts", {
        get: function () {
            return this.accountService.userHasPermission(_custor_models_permission_model__WEBPACK_IMPORTED_MODULE_8__["Permission"].viewUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "canViewOrders", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "canViewUsers", {
        get: function () {
            return this.accountService.userHasPermission(_custor_models_permission_model__WEBPACK_IMPORTED_MODULE_8__["Permission"].viewUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(_custor_models_permission_model__WEBPACK_IMPORTED_MODULE_8__["Permission"].viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('customer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"])
    ], MainComponent.prototype, "customerExpander", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_custor_services_translation_service__WEBPACK_IMPORTED_MODULE_9__["AppTranslationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: routes, MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/security/endpoint-factory.service */ "./src/@custor/services/security/endpoint-factory.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _custor_services_security_account_endpoint_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custor/services/security/account-endpoint.service */ "./src/@custor/services/security/account-endpoint.service.ts");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var _custor_components_lang_switcher_lang_switcher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/components/lang-switcher/lang-switcher.component */ "./src/@custor/components/lang-switcher/lang-switcher.component.ts");









// import {ConfigurationService} from '@custor/services/configuration.service';



// import { LocalStoreManager } from '@custor/services/storeManager.service';


var routes = [
    {
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' }
        ]
    }
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // GroupByPipe,
                _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _custor_components_lang_switcher_lang_switcher_component__WEBPACK_IMPORTED_MODULE_13__["LangSwitcherModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useClass: _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslateLanguageLoader"]
                    }
                }),
            ],
            providers: [
                _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__["AppTranslationService"],
                // ConfigurationService,
                _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"],
                _custor_services_security_account_endpoint_service__WEBPACK_IMPORTED_MODULE_11__["AccountEndpoint"],
                _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_9__["EndpointFactory"],
                // LocalStoreManager, 
                _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
            ],
        })
    ], MainModule);
    return MainModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map