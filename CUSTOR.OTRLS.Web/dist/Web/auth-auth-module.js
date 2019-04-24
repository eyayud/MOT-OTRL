(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/@custor/models/user-login.model.ts":
/*!************************************************!*\
  !*** ./src/@custor/models/user-login.model.ts ***!
  \************************************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
var UserLogin = /** @class */ (function () {
    function UserLogin(userName, password, rememberMe) {
        this.userName = userName;
        this.password = password;
        this.rememberMe = rememberMe;
    }
    return UserLogin;
}());



/***/ }),

/***/ "./src/@custor/services/animations.ts":
/*!********************************************!*\
  !*** ./src/@custor/services/animations.ts ***!
  \********************************************/
/*! exports provided: fadeInOut, flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])
]);
function flyInOut(duration) {
    if (duration === void 0) { duration = 0.2; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration + "s ease-in")]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration + "s 10ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)' }))])
    ]);
}


/***/ }),

/***/ "./src/@custor/validators/equal.validator.ts":
/*!***************************************************!*\
  !*** ./src/@custor/validators/equal.validator.ts ***!
  \***************************************************/
/*! exports provided: EqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidator", function() { return EqualValidator; });
function EqualValidator(controlName) {
    return function (control) {
        var compareControl = control.parent ? control.parent.get(controlName) : null;
        var areEqual = compareControl && control.value === compareControl.value;
        return areEqual ? null : { notEqual: true };
    };
}


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: routes, AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _manage_password_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-password/manage.component */ "./src/app/auth/manage-password/manage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _login_login_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login-control.component */ "./src/app/auth/login/login-control.component.ts");
/* harmony import */ var _register_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/confirm.component */ "./src/app/auth/register/confirm.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/services/security/endpoint-factory.service */ "./src/@custor/services/security/endpoint-factory.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var _custor_services_security_account_endpoint_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @custor/services/security/account-endpoint.service */ "./src/@custor/services/security/account-endpoint.service.ts");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");













// import {ConfigurationService} from '@custor/services/configuration.service';



// import {LocalStoreManager} from '@custor/services/storeManager.service';

var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'manage/:id', component: _manage_password_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManagePasswordComponent"] }
];
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useClass: _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_12__["TranslateLanguageLoader"]
                    }
                }),
            ],
            declarations: [
                _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _manage_password_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManagePasswordComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _login_login_control_component__WEBPACK_IMPORTED_MODULE_7__["LoginControlComponent"],
                _register_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"]
            ],
            providers: [
                _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_12__["AppTranslationService"],
                // ConfigurationService,
                _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_14__["AccountService"],
                _custor_services_security_account_endpoint_service__WEBPACK_IMPORTED_MODULE_15__["AccountEndpoint"],
                _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_13__["EndpointFactory"],
                // LocalStoreManager,
                _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login-control.component.html":
/*!*********************************************************!*\
  !*** ./src/app/auth/login/login-control.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" novalidate class=\"app-login-form\">\r\n  <mat-form-field class=\"app-validate\" appearance=\"outline\">\r\n    <mat-label>User name</mat-label>\r\n    <input matInput formControlName=\"userName\" required>\r\n    <mat-error *ngIf=\"userName.hasError('required')\">\r\n      User name is <strong>required</strong>\r\n    </mat-error>\r\n    <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-24\">person</mat-icon>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"app-validate\" appearance=\"outline\">\r\n    <mat-label>Password</mat-label>\r\n\r\n    <input matInput formControlName=\"password\" type=\"password\" required>\r\n    <mat-error *ngIf=\"password.hasError('required')\">\r\n      Password is <strong>required</strong>\r\n    </mat-error>\r\n    <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-24\">lock</mat-icon>\r\n\r\n  </mat-form-field>\r\n\r\n  <mat-checkbox formControlName=\"rememberMe\">Remember me!</mat-checkbox>\r\n  <div>&nbsp;</div>\r\n\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/login/login-control.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/auth/login/login-control.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-login-form .mat-form-field {\n  width: 100%;\n  margin-bottom: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4tY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4tY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbG9naW4tZm9ybSAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login-control.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/login/login-control.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginControlComponent", function() { return LoginControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@custor/services/security/auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _custor_models_user_login_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/models/user-login.model */ "./src/@custor/models/user-login.model.ts");







var LoginControlComponent = /** @class */ (function () {
    function LoginControlComponent(toastr, authService, formBuilder) {
        this.toastr = toastr;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.formResetToggle = true;
        this.enterKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buildForm();
    }
    LoginControlComponent.prototype.ngOnInit = function () {
        this.loginForm.setValue({
            userName: '',
            password: '',
            rememberMe: this.authService.rememberMe
        });
    };
    LoginControlComponent.prototype.ngOnDestroy = function () {
        if (this.loginStatusSubscription) {
            this.loginStatusSubscription.unsubscribe();
        }
    };
    LoginControlComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rememberMe: ''
        });
    };
    Object.defineProperty(LoginControlComponent.prototype, "userName", {
        get: function () {
            return this.loginForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginControlComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginControlComponent.prototype.getUserLogin = function () {
        var formModel = this.loginForm.value;
        return new _custor_models_user_login_model__WEBPACK_IMPORTED_MODULE_6__["UserLogin"](formModel.userName, formModel.password, formModel.rememberMe);
    };
    LoginControlComponent.prototype.login = function () {
        var _this = this;
        if (!this.form.submitted) {
            this.form.onSubmit(null);
            return;
        }
        this.isLoading = true;
        this.authService.login(this.getUserLogin())
            .subscribe(function (user) {
            setTimeout(function () {
                _this.isLoading = false;
                _this.reset();
            }, 500);
        }, function (error) {
            if (_custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].checkNoNetwork(error)) {
                _this.toastr.error(_custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].noNetworkMessageCaption);
            }
            else {
                // tslint:disable-next-line:max-line-length
                var errorMessage = _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].findHttpResponseMessage('error_description', error) || _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].findHttpResponseMessage('error', error);
                if (errorMessage) {
                    _this.toastr.error(_custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].noNetworkMessageCaption, 'Unable to login');
                }
                else {
                    _this.toastr.error(_custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_5__["Utilities"].getResponseBody(error), 'Unable to login');
                }
            }
            setTimeout(function () {
                _this.isLoading = false;
            }, 500);
        });
    };
    LoginControlComponent.prototype.reset = function () {
        var _this = this;
        this.formResetToggle = false;
        setTimeout(function () {
            _this.formResetToggle = true;
        });
    };
    LoginControlComponent.prototype.enterKeyDown = function () {
        this.enterKeyPress.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginControlComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginControlComponent.prototype, "enterKeyPress", void 0);
    LoginControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-control',
            template: __webpack_require__(/*! ./login-control.component.html */ "./src/app/auth/login/login-control.component.html"),
            styles: [__webpack_require__(/*! ./login-control.component.scss */ "./src/app/auth/login/login-control.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _custor_services_security_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginControlComponent);
    return LoginControlComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"35\" style=\"margin: 20px auto;\">\r\n  <div>\r\n  \r\n    <app-content-header \r\n      [icon]=\"'exit_to_app'\" \r\n      [title]=\"'Login'\" \r\n      [hasBgImage]=\"true\" \r\n      [class]=\"'py-4'\">\r\n    </app-content-header>\r\n    <mat-card class=\"mat-elevation-z6\">\r\n      <mat-card-header>\r\n        <!-- <mat-card-title>{{'mainMenu.Login' | translate}}</mat-card-title> -->\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <app-login-control ></app-login-control>\r\n      </mat-card-content>\r\n      <div>\r\n        <div style=\"text-align: center\">\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"loginControl.isLoading\"\r\n                  (click)=\"loginControl.login()\">\r\n                  \r\n            <mat-spinner *ngIf=\"loginControl.isLoading\" [diameter]=\"24\"></mat-spinner>\r\n            Login\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <mat-card-actions style=\"margin: 10px;font-size: 13px\">\r\n        <div style=\"text-align: center\" class=\"m-t-10 row txt-c\"><p><span translate=\"\">Did you forget your </span>\r\n          <a ui-sref=\"confirmEmail\" translate=\"\" routerLink=\"/manage-password/0\">password</a>?\r\n        </p>\r\n          <span>Not created your account yet? <a routerLink=\"/register\">Register</a></span>\r\n        </div>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 768px) {\n  .login-container {\n    width: 700px; } }\n\n@media (min-width: 1200px) {\n  .login-container {\n    width: 730px; } }\n\nmat-spinner {\n  display: inline-block;\n  margin-right: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLFlBQVksRUFBQSxFQUNmOztBQUdMO0VBQ0k7SUFDSSxZQUFZLEVBQUEsRUFDZjs7QUFHTDtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDczMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-control.component */ "./src/app/auth/login/login-control.component.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_login_control_component__WEBPACK_IMPORTED_MODULE_2__["LoginControlComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _login_control_component__WEBPACK_IMPORTED_MODULE_2__["LoginControlComponent"])
    ], LoginComponent.prototype, "loginControl", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/manage-password/manage.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/manage-password/manage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" style=\" margin:auto;width:500px;padding-top: 20px\">\n  <div style=\"margin: 30px;\">\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <span style=\"margin-top:9px; margin-right: 5px\"><mat-icon>lock</mat-icon></span>\n        <span>{{dialogTitle}}</span>\n        <span class=\"toolbar-spacer\"></span>\n        <div class=\"header-actions\">\n          <!-- <button mat-icon-button><mat-icon>more_vertical</mat-icon></button> -->\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <mat-card>\n      <mat-card-header>\n        <!-- <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Title1</mat-card-title>\n        <mat-card-subtitle>Title 2</mat-card-subtitle> -->\n      </mat-card-header>\n\n      <mat-card-content>\n        <form #form=\"ngForm\" [formGroup]=\"userProfileForm\" novalidate (ngSubmit)=\"save()\" fxLayout=\"column\"\n              fxLayoutGap=\"1em\" autocomplete=\"off\">\n\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n            <mat-form-field fxFlex>\n              <mat-label>{{'users.editor.Email' | translate}}</mat-label>\n              <input matInput formControlName=\"email\" required/>\n              <mat-error *ngIf=\"email.hasError('required')\">\n                {{'users.editor.EmailRequired' | translate}}\n              </mat-error>\n              <mat-error *ngIf=\"!email.hasError('required') && email.hasError('email')\">\n                {{'users.editor.InvalidEmail' | translate}}\n              </mat-error>             \n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n            <mat-form-field fxFlex>\n              <mat-label>{{'users.editor.UserName' | translate}}</mat-label>\n              <input matInput formControlName=\"userName\" autocomplete=\"off\" required/>\n              <mat-error *ngIf=\"userName.hasError('required')\">\n                {{'users.editor.UserNameRequired' | translate}}\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\"> \n            <mat-form-field fxFlex *ngIf=\"showOldPassword\">\n              <mat-label>{{oldPasswordCaption}}</mat-label>\n              <input matInput type=\"password\" formControlName=\"oldPassword\" autocomplete=\"off\" />\n              <mat-error *ngIf=\"oldPassword.hasError('required')\">\n                Old Password is Required\n              </mat-error>\n            </mat-form-field>\n          </div> \n          <div formGroupName=\"password\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n              <mat-form-field>\n                <mat-label>{{'users.editor.NewPassword' | translate}}</mat-label>\n                <input matInput type=\"password\" formControlName=\"newPassword\" autocomplete=\"off\" required/>\n                <mat-error *ngIf=\"newPassword.hasError('required')\">\n                  {{'users.editor.NewPasswordRequired' | translate}}\n                </mat-error>\n                <mat-error *ngIf=\"!newPassword.hasError('required') && newPassword.hasError('pattern')\">\n                  {{'users.editor.NewPasswordRules' | translate}}\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n\n              <mat-form-field fxFlex>\n                <mat-label>{{'users.editor.ConfirmPassword' | translate}}</mat-label>\n                <input matInput type=\"password\" formControlName=\"confirmPassword\" required/>\n                <mat-error *ngIf=\"confirmPassword.hasError('required')\">\n                  {{'users.editor.ConfirmationPasswordRequired' | translate}}\n                </mat-error>\n                <mat-error *ngIf=\"!confirmPassword.hasError('required') && confirmPassword.hasError('notEqual')\">\n                  Test\n                  {{'users.editor.PasswordMismatch' | translate}}\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div>&nbsp;</div>\n        </form>\n      </mat-card-content>\n      <div style=\"text-align: center\">\n        <button mat-raised-button color=\"primary\" (click)=\"save()\">{{actionCaption}}\n        </button>\n      </div>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/manage-password/manage.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/manage-password/manage.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbWFuYWdlLXBhc3N3b3JkL21hbmFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/manage-password/manage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/manage-password/manage.component.ts ***!
  \**********************************************************/
/*! exports provided: ManagePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePasswordComponent", function() { return ManagePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@custor/models/user.model */ "./src/@custor/models/user.model.ts");
/* harmony import */ var _custor_validators_equal_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@custor/validators/equal.validator */ "./src/@custor/validators/equal.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var ManagePasswordComponent = /** @class */ (function () {
    function ManagePasswordComponent(alertService, translationService, accountService, formBuilder, router, activatedRoute) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isNewUser = true;
        this.showOldPassword = false;
        this.isChangePassword = false;
        this.onUserSaved = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.user = new _custor_models_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
        this.roles = [];
        this.isEditMode = false;
        this.userSaved$ = this.onUserSaved.asObservable();
        this.buildForm();
    }
    ManagePasswordComponent.prototype.ngOnDestroy = function () {
        this.passwordWatcher.unsubscribe();
    };
    ManagePasswordComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        // console.debug(id);
        if (id === '1') { // 0=reset, 1=change
            this.isChangePassword = true;
            this.dialogTitle = 'Change Password';
            this.actionCaption = 'Change Password';
            this.oldPasswordCaption = 'Old Password';
            this.showOldPassword = true;
            // this.oldPassword.setValidators([Validators.required, Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]);
        }
        else {
            this.isChangePassword = false;
            this.dialogTitle = 'Reset Password';
            this.actionCaption = 'Reset Password';
            this.oldPasswordCaption = 'Old Password - Not Required';
            this.showOldPassword = false;
        }
        if (!this.isChangePassword) {
            var cOldPassword = this.userProfileForm.get('oldPassword');
            cOldPassword.clearValidators();
        }
    };
    ManagePasswordComponent.prototype.formControlValueChanged = function () {
        if (this.isChangePassword) {
            this.addOldPasswordValidator();
        }
    };
    ManagePasswordComponent.prototype.buildForm = function () {
        var _this = this;
        this.userProfileForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]],
            password: this.formBuilder.group({
                newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]],
                confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_custor_validators_equal_validator__WEBPACK_IMPORTED_MODULE_8__["EqualValidator"])('newPassword')]],
            })
        });
        this.passwordWatcher = this.newPassword.valueChanges.subscribe(function () {
            return _this.confirmPassword.updateValueAndValidity();
        });
        // this.formControlValueChanged();
    };
    ManagePasswordComponent.prototype.beginEdit = function () {
        this.isEditMode = true;
        this.isChangePassword = false;
    };
    ManagePasswordComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.submitted) {
            // Causes validation to update.
            this.form.onSubmit(null);
            return;
        }
        if (!this.userProfileForm.valid) {
            this.alertService.error(this.translationService.getTranslation('form.ErrorMessage'), this.translationService.getTranslation('form.ErrorCaption'));
            return;
        }
        var editedUser = this.getEditedUser();
        // console.log(editedUser);
        this.accountService.resetAccount(editedUser).subscribe(function (response) { return _this.saveCompleted(); }, function (error) { return _this.saveFailed(error); });
    };
    ManagePasswordComponent.prototype.getEditedUser = function () {
        var formModel = this.userProfileForm.value;
        var tempRole = ['DummyRole']; // not required here
        return {
            Id: '0',
            Tin: '',
            UserName: formModel.userName,
            FullName: '',
            FriendlyName: '',
            Email: formModel.email,
            PhoneNumber: '',
            Roles: tempRole,
            CurrentPassword: this.isChangePassword ? formModel.oldPassword : 'resetme',
            NewPassword: formModel.password.newPassword,
            ConfirmPassword: formModel.password.confirmPassword,
            IsEnabled: true,
            IsLockedOut: false,
            SiteCode: '' // not required
        };
    };
    ManagePasswordComponent.prototype.saveCompleted = function (user) {
        if (user) {
            this.user = user;
        }
        this.alertService.success('Your account has been registered successfully.', 'Success');
        this.onUserSaved.next(this.user);
        this.router.navigate(['/confirm']);
    };
    ManagePasswordComponent.prototype.saveFailed = function (error) {
        this.alertService.error('One or more errors occured whilst saving your changes:', 'Save Error');
        this.alertService.error(null, error);
    };
    ManagePasswordComponent.prototype.validateMinMax = function (min, max) {
        return ['', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(min),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(max),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+') //  digits only
            ]];
    };
    ManagePasswordComponent.prototype.addOldPasswordValidator = function () {
        this.oldPassword.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]);
    };
    Object.defineProperty(ManagePasswordComponent.prototype, "userName", {
        get: function () {
            return this.userProfileForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "email", {
        get: function () {
            return this.userProfileForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "password", {
        get: function () {
            return this.userProfileForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "oldPassword", {
        get: function () {
            return this.userProfileForm.get('oldPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "newPassword", {
        get: function () {
            return this.password.get('newPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "confirmPassword", {
        get: function () {
            return this.password.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "assignedRoles", {
        get: function () {
            return this.userProfileForm.get('roles');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagePasswordComponent.prototype, "floatLabels", {
        get: function () {
            return this.isEditMode ? 'auto' : 'always';
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ManagePasswordComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ManagePasswordComponent.prototype, "dialogTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ManagePasswordComponent.prototype, "oldPasswordCaption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ManagePasswordComponent.prototype, "actionCaption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _custor_models_user_model__WEBPACK_IMPORTED_MODULE_7__["User"])
    ], ManagePasswordComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ManagePasswordComponent.prototype, "roles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManagePasswordComponent.prototype, "isEditMode", void 0);
    ManagePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-password',
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/auth/manage-password/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.scss */ "./src/app/auth/manage-password/manage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_4__["AppTranslationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], ManagePasswordComponent);
    return ManagePasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/confirm.component.html":
/*!******************************************************!*\
  !*** ./src/app/auth/register/confirm.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-page-header title=\"Confirm\" icon=\"error\"></app-page-header> -->\n<div [@fadeInOut] class=\"page-content mat-elevation-z8\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"content\">\n        <div class=\"info-nag\">\n            <div class=\"info-split info-info\"><i></i></div>\n          <div class=\"info-text\">Dear customer; Thank you for registering. <br>\n            An email has been sent for confirmtion. Please click on the confirmation link to activate your account.\n            </div>\n            <br>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/register/confirm.component.scss":
/*!******************************************************!*\
  !*** ./src/app/auth/register/confirm.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content {\n  margin-top: 70px;\n  margin-left: 30%;\n  margin-right: 30%;\n  height: 160px; }\n\n.info-nag {\n  display: inline-block;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);\n  margin: auto;\n  margin-top: 10px; }\n\n.info-nag:hover {\n  cursor: pointer;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3); }\n\n.info-nag > .info-split {\n  background: #337ab7;\n  width: 10px;\n  float: left;\n  color: #fff !important;\n  height: 100%;\n  text-align: center; }\n\n.info-nag > .info-split.info-info {\n  background: #5bc0de !important; }\n\n.info-nag > .info-text {\n  line-height: 19px;\n  padding-top: 11px;\n  padding-left: 45px;\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL2F1dGgvcmVnaXN0ZXIvY29uZmlybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBcUI7RUFJckIsMENBQXNDO0VBQ3RDLFlBQVk7RUFFWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDSSxlQUFlO0VBRWpCLDBDQUFzQyxFQUFBOztBQUV4QztFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsOEJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL2NvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250ZW50IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gICAgaGVpZ2h0OiAxNjBweDtcbn1cbi8vICAgIEluZm8gQmFyXG4uaW5mby1uYWd7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcbiAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgLy8gaGVpZ2h0OiA3MHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMik7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMSk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC8vIHdpZHRoOiAxMDAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC5pbmZvLW5hZzpob3ZlcntcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuNCk7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMyk7XG4gIH1cbiAgLmluZm8tbmFnID4gLmluZm8tc3BsaXR7XG4gICAgYmFja2dyb3VuZDogIzMzN2FiNztcbiAgICB3aWR0aDogMTBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW5mby1uYWcgPiAuaW5mby1zcGxpdC5pbmZvLWluZm97XG4gICAgYmFja2dyb3VuZDogIzViYzBkZSFpbXBvcnRhbnQ7XG4gIH1cbiAgLmluZm8tbmFnID4gLmluZm8tdGV4dHtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/register/confirm.component.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/register/confirm.component.ts ***!
  \****************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@custor/services/animations */ "./src/@custor/services/animations.ts");



var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent() {
    }
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/auth/register/confirm.component.html"),
            animations: [_custor_services_animations__WEBPACK_IMPORTED_MODULE_2__["fadeInOut"]],
            styles: [__webpack_require__(/*! ./confirm.component.scss */ "./src/app/auth/register/confirm.component.scss")]
        })
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" style=\" margin:auto;width:500px;\">\n  <div class=\"mat-elevation-z8\" style=\"margin: 30px;\">\n    <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar>\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <span style=\"margin-top:9px; margin-right: 5px\"><mat-icon>person</mat-icon></span>\n        <span>Register</span>\n        <span class=\"toolbar-spacer\"></span>\n        <div class=\"header-actions\">\n          <!-- <button mat-icon-button><mat-icon>more_vertical</mat-icon></button> -->\n        </div>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <mat-card>\n      <div class=\"error-bar\" style=\"width:100%; \" *ngIf=\"errors.length > 0\">\n        <ul>\n          <li *ngFor=\"let error of errors\">\n            {{ error }}\n          </li>\n        </ul>\n      </div>\n      <mat-card-content>\n        <form #form=\"ngForm\" [formGroup]=\"userProfileForm\" novalidate (ngSubmit)=\"save()\" fxLayout=\"column\"\n              fxLayoutGap=\"1em\" autocomplete=\"off\">\n\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n            <mat-form-field fxFlex appearance=\"outline\">\n              <mat-label>{{'users.editor.FullName' | translate}}</mat-label>\n              <input matInput formControlName=\"fullName\" required/>\n              <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-24\">person</mat-icon>\n            </mat-form-field>\n          </div>\n\n \n\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n            <mat-form-field fxFlex *ngIf=\"isExisting\" appearance=\"outline\">\n              <mat-label name=\"lblTIN\">{{'users.editor.TIN' | translate}}</mat-label>\n              <input matInput formControlName=\"tin\" NaturalNumberOnlyDir/>\n              <mat-error\n                *ngIf=\"(tin.hasError('required') || tin.hasError('minLength') || tin.hasError('maxLength'))\n                 && tin.touched \">\n                {{'users.editor.TINRequired' | translate}}\n                <!--<small class=\"error\" *ngIf=\"!tin.hasError('isTinUnique')\">-->\n\n                <!--</small>-->\n\n              </mat-error>\n              <mat-error class=\"error\"\n                         *ngIf=\"!tin.hasError('required') && tin.hasError('isTinUnique')\">\n                This Tin not registered\n              </mat-error>\n              <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-24\">key</mat-icon>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n            <mat-form-field fxFlex appearance=\"outline\">\n              <mat-label>{{'users.editor.Email' | translate}}</mat-label>\n              <input matInput formControlName=\"email\" required/>\n              <mat-error *ngIf=\"email.hasError('required')\">\n                {{'users.editor.EmailRequired' | translate}}\n              </mat-error>\n              <mat-error *ngIf=\"!email.hasError('required') && email.hasError('email')\">\n                {{'users.editor.InvalidEmail' | translate}}\n              </mat-error>\n              <mat-error class=\"error\"\n                         *ngIf=\"!email.hasError('required') && email.hasError('isEmailUnique')\">\n                This email has been registered already\n              </mat-error>\n              <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-24\">email</mat-icon>\n            </mat-form-field>\n          </div>\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n            <mat-form-field fxFlex appearance=\"outline\">\n              <mat-label>{{'users.editor.PhoneNumber' | translate}}</mat-label>\n              <input matInput NaturalNumberOnlyDir formControlName=\"phoneNumber\" required autocomplete=\"off\"/>\n              <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-48\">phone</mat-icon>\n            </mat-form-field>\n          </div>\n\n          <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n            <mat-form-field appearance=\"outline\">\n              <mat-label>{{'users.editor.UserName' | translate}}</mat-label>\n              <input matInput formControlName=\"userName\" autocomplete=\"off\" required/>\n              <mat-error *ngIf=\"userName.hasError('required')\">\n                {{'users.editor.UserNameRequired' | translate}}\n              </mat-error>\n              <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-24\">person_add</mat-icon>\n            </mat-form-field>\n          </div>\n\n          <div formGroupName=\"password\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n              <mat-form-field fxFlex=\"80\" appearance=\"outline\">\n                <mat-label>{{'users.editor.NewPassword' | translate}}</mat-label>\n                <input matInput type=\"password\" formControlName=\"newPassword\" autocomplete=\"off\" required/>\n                <mat-error *ngIf=\"newPassword.hasError('required')\">\n                  {{'users.editor.NewPasswordRequired' | translate}}\n                </mat-error>\n                <mat-error *ngIf=\"!newPassword.hasError('required') && newPassword.hasError('pattern')\">\n                  {{'users.editor.NewPasswordRules' | translate}}\n                </mat-error>\n                <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-24\">lock_open</mat-icon>\n              </mat-form-field>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"1em\">\n\n              <mat-form-field fxFlex=\"80\" appearance=\"outline\">\n                <mat-label>{{'users.editor.ConfirmPassword' | translate}}</mat-label>\n                <input matInput type=\"password\" formControlName=\"confirmPassword\" required/>\n                <mat-error *ngIf=\"confirmPassword.hasError('required')\">\n                  {{'users.editor.ConfirmationPasswordRequired' | translate}}\n                </mat-error>\n                <mat-error *ngIf=\"!confirmPassword.hasError('required') && confirmPassword.hasError('notEqual')\">\n                  {{'users.editor.PasswordMismatch' | translate}}\n                </mat-error>\n                <mat-icon matSuffix=\"\" color=\"primary\" class=\"mat-24\">lock_open</mat-icon>\n\n              </mat-form-field>\n            </div>\n          </div>\n     \n          <!-- https://github.com/angular/material2/issues/8798 -->\n          <div>&nbsp;</div>\n        </form>\n      </mat-card-content>\n \n\n      <div style=\"text-align: center\">\n        <button mat-raised-button color=\"primary\" (click)=\"save()\" [disabled]=\"userProfileForm.invalid\">Register\n        </button>\n      </div>\n   \n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _custor_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/models/user.model */ "./src/@custor/models/user.model.ts");
/* harmony import */ var _custor_models_permission_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/models/permission.model */ "./src/@custor/models/permission.model.ts");
/* harmony import */ var _custor_validators_equal_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/validators/equal.validator */ "./src/@custor/validators/equal.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/security/account.service */ "./src/@custor/services/security/account.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");












var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(alertService, translationService, accountService, formBuilder, router) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isExisting = false;
        this.isNewUser = true;
        this.isChangePassword = false;
        this.isSaving = false;
        this.onUserSaved = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.user = new _custor_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.roles = [];
        this.isEditMode = false;
        this.errors = [];
        this.userSaved$ = this.onUserSaved.asObservable();
        this.buildForm();
    }
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.passwordWatcher.unsubscribe();
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.formControlValueChanged();
    };
    RegisterComponent.prototype.formControlValueChanged = function () {
        var cTin = this.userProfileForm.get('tin');
        this.existingCustomer.valueChanges.subscribe(function (checkStatus) {
            if (checkStatus === true) {
                cTin.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]);
                // cTin.setAsyncValidators(this.isTinUnique.bind(this));
            }
            else {
                cTin.clearValidators();
            }
            cTin.updateValueAndValidity();
        });
    };
    RegisterComponent.prototype.buildForm = function () {
        var _this = this;
        this.userProfileForm = this.formBuilder.group({
            tin: '',
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: this.formBuilder.group({
                newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]],
                confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_custor_validators_equal_validator__WEBPACK_IMPORTED_MODULE_6__["EqualValidator"])('newPassword')]],
            }),
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isExistingCustomer: false,
        });
        this.passwordWatcher = this.newPassword.valueChanges.subscribe(function () {
            return _this.confirmPassword.updateValueAndValidity();
        });
    };
    RegisterComponent.prototype.resetForm = function (stopEditing) {
        if (stopEditing === void 0) { stopEditing = false; }
        if (stopEditing) {
            this.isEditMode = false;
        }
        if (!this.user) {
            this.isNewUser = true;
            this.user = new _custor_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        }
        if (this.isNewUser) {
            this.isChangePassword = true;
            this.addNewPasswordValidators();
        }
        else {
            this.isChangePassword = false;
            this.newPassword.clearValidators();
            this.confirmPassword.clearValidators();
        }
        this.userProfileForm.reset({
            tin: this.user.Tin || '',
            userName: this.user.UserName || '',
            email: this.user.Email || '',
            password: {
                newPassword: '',
                confirmPassword: ''
            },
            fullName: this.user.FullName || '',
            phoneNumber: this.user.PhoneNumber || '',
            isExistingCustomer: false
        });
    };
    RegisterComponent.prototype.beginEdit = function () {
        this.isEditMode = true;
        this.isChangePassword = false;
    };
    RegisterComponent.prototype.save = function () {
        var _this = this;
        this.loadingIndicator = true;
        if (!this.form.submitted) {
            // Causes validation to update.
            this.form.onSubmit(null);
            return;
        }
        if (!this.userProfileForm.valid) {
            this.alertService.error(this.translationService.getTranslation('form.ErrorMessage'), this.translationService.getTranslation('form.ErrorCaption'));
            return;
        }
        this.isSaving = true;
        var editedUser = this.getEditedUser();
        if (this.isNewUser) {
            // this.accountService.newUser(editedUser).subscribe(
            //   user => this.saveCompleted(user),
            //   error => this.saveFailed(error));
            this.accountService.selfRegisterNewUser(editedUser).subscribe(function (user) { return _this.saveCompleted(user); }, function (error) { return _this.saveFailed(error); });
        }
        else {
            this.accountService.updateUser(editedUser).subscribe(function (response) { return _this.saveCompleted(editedUser); }, function (error) { return _this.saveFailed(error); });
        }
        this.loadingIndicator = false;
    };
    RegisterComponent.prototype.cancel = function () {
        this.resetForm();
        this.isEditMode = false;
    };
    RegisterComponent.prototype.getEditedUser = function () {
        var formModel = this.userProfileForm.value;
        var tempRole = ['Online Users'];
        var onlineSitecode = 'OnlineSite';
        return {
            Id: this.user.Id,
            Tin: formModel.tin,
            UserName: formModel.userName,
            FullName: formModel.fullName,
            FriendlyName: formModel.friendlyName,
            Email: formModel.email,
            PhoneNumber: formModel.phoneNumber,
            Roles: tempRole,
            CurrentPassword: '',
            NewPassword: formModel.password.newPassword,
            ConfirmPassword: formModel.password.confirmPassword,
            IsEnabled: true,
            IsLockedOut: false,
            SiteCode: onlineSitecode
        };
    };
    RegisterComponent.prototype.saveCompleted = function (user) {
        if (user) {
            this.user = user;
        }
        this.isSaving = false;
        this.resetForm(true);
        this.alertService.success('Your account has been registered successfully.', 'Success');
        this.onUserSaved.next(this.user);
        this.router.navigate(['/confirm']);
    };
    RegisterComponent.prototype.saveFailed = function (error) {
        this.isSaving = false;
        // this.alertService.error('One or more errors occured whilst saving your changes:',
        //   'Save Error');
        // this.alertService.error(null, error);
        var errList = _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_8__["Utilities"].getHttpResponseMessage(error);
        if (error.status === 400) { // bad request (validation)
            this.errors = errList;
            this.alertService.error('Please fix the listed errors', 'Error');
        }
        else {
            this.errors = [];
            this.alertService.error(error.status + ':' + errList[0].toString(), 'Error');
        }
    };
    RegisterComponent.prototype.addNewPasswordValidators = function () {
        this.newPassword.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/)]);
        this.confirmPassword.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_custor_validators_equal_validator__WEBPACK_IMPORTED_MODULE_6__["EqualValidator"])('newPassword')]);
    };
    RegisterComponent.prototype.ExistingCustomerChecked = function (event) {
        this.isExisting = (this.isExisting === true) ? false : true;
    };
    RegisterComponent.prototype.unlockUser = function () {
        var _this = this;
        this.isSaving = true;
        this.accountService.unblockUser(this.user.Id)
            .subscribe(function (response) {
            _this.isSaving = false;
            _this.user.IsLockedOut = false;
            _this.userProfileForm.patchValue({
                isLockedOut: _this.user.IsLockedOut
            });
            _this.alertService.success('User has been successfully unlocked', 'Success');
        }, function (error) {
            _this.isSaving = false;
            _this.alertService.error('The below errors occured whilst unlocking the user:', 'Unblock Error');
            _this.alertService.error(null, error);
        });
    };
    RegisterComponent.prototype.validateMinMax = function (min, max) {
        return ['', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(min),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(max),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+') //  digits only
            ]];
    };
    Object.defineProperty(RegisterComponent.prototype, "tin", {
        get: function () {
            return this.userProfileForm.get('tin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "existingCustomer", {
        get: function () {
            return this.userProfileForm.get('isExistingCustomer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "userName", {
        get: function () {
            return this.userProfileForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.userProfileForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.userProfileForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "newPassword", {
        get: function () {
            return this.password.get('newPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirmPassword", {
        get: function () {
            return this.password.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "assignedRoles", {
        get: function () {
            return this.userProfileForm.get('roles');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(_custor_models_permission_model__WEBPACK_IMPORTED_MODULE_5__["Permission"].viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "canAssignRoles", {
        get: function () {
            return this.accountService.userHasPermission(_custor_models_permission_model__WEBPACK_IMPORTED_MODULE_5__["Permission"].assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "isEditingSelf", {
        get: function () {
            return this.accountService.currentUser ? this.user.Id === this.accountService.currentUser.Id : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "floatLabels", {
        get: function () {
            return this.isEditMode ? 'auto' : 'always';
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _custor_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"])
    ], RegisterComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RegisterComponent.prototype, "roles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "isEditMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RegisterComponent.prototype, "errors", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"],
            _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_9__["AppTranslationService"],
            _custor_services_security_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map