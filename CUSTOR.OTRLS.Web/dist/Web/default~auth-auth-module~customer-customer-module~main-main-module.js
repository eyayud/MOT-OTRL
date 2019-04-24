(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-auth-module~customer-customer-module~main-main-module"],{

/***/ "./src/@custor/models/user.model.ts":
/*!******************************************!*\
  !*** ./src/@custor/models/user.model.ts ***!
  \******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, userName, fullName, email, tin, phoneNumber, roles, siteCode) {
        this.Id = id;
        this.UserName = userName;
        this.FullName = fullName;
        this.Email = email;
        this.Tin = tin;
        this.PhoneNumber = phoneNumber;
        this.Roles = roles;
        this.SiteCode = siteCode;
    }
    Object.defineProperty(User.prototype, "FriendlyName", {
        get: function () {
            var name = this.FullName || this.UserName;
            if (this.Tin) {
                name = this.Tin + ' ' + name;
            }
            return name;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());



/***/ }),

/***/ "./src/@custor/modules/shared.module.ts":
/*!**********************************************!*\
  !*** ./src/@custor/modules/shared.module.ts ***!
  \**********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custor_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/components/content-header/content-header.module */ "./src/@custor/components/content-header/content-header.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


// import { ContentHeaderComponent } from '../components/content-header/content-header.component';






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _custor_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_6__["ContentHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                // ContentHeaderComponent,
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _custor_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_6__["ContentHeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"]
            ],
            declarations: [
            // ContentHeaderComponent,
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/@custor/services/security/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/@custor/services/security/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _storeManager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storeManager.service */ "./src/@custor/services/storeManager.service.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/settingKeys */ "./src/@custor/helpers/settingKeys.ts");
/* harmony import */ var _jwt_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jwt-helper */ "./src/@custor/services/security/jwt-helper.ts");
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/user.model */ "./src/@custor/models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






// import {EndpointFactory} from './endpoint-factory.service';






// import { access } from 'fs';
// import * as fs from 'fs';
var AuthService = /** @class */ (function () {
    function AuthService(router, configurations, localStorage, http) {
        this.router = router;
        this.configurations = configurations;
        this.localStorage = localStorage;
        this.http = http;
        this.previousIsLoggedInCheck = false;
        this._loginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.initializeLoginStatus();
    }
    Object.defineProperty(AuthService.prototype, "loginUrl", {
        get: function () {
            return this.configurations.loginUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "homeUrl", {
        get: function () {
            return this.configurations.homeUrl;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.initializeLoginStatus = function () {
        var _this = this;
        this.localStorage.getInitEvent().subscribe(function () {
            _this.reevaluateLoginStatus();
        });
    };
    AuthService.prototype.gotoPage = function (page, preserveParams) {
        if (preserveParams === void 0) { preserveParams = true; }
        var navigationExtras = {
            queryParamsHandling: preserveParams ? 'merge' : '', preserveFragment: preserveParams
        };
        this.router.navigate([page], navigationExtras);
    };
    AuthService.prototype.redirectLoginUser = function () {
        var redirect = this.loginRedirectUrl && this.loginRedirectUrl !== '/' && this.loginRedirectUrl
            !== _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"].defaultHomeUrl ? this.loginRedirectUrl : this.homeUrl;
        this.loginRedirectUrl = null;
        var urlParamsAndFragment = _helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].splitInTwo(redirect, '#');
        var urlAndParams = _helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].splitInTwo(urlParamsAndFragment.firstPart, '?');
        var navigationExtras = {
            fragment: urlParamsAndFragment.secondPart,
            queryParams: _helpers_utilities__WEBPACK_IMPORTED_MODULE_9__["Utilities"].getQueryParamsFromString(urlAndParams.secondPart),
            queryParamsHandling: 'merge'
        };
        this.router.navigate([urlAndParams.firstPart], navigationExtras);
    };
    AuthService.prototype.redirectLogoutUser = function () {
        var redirect = this.logoutRedirectUrl ? this.logoutRedirectUrl : this.loginUrl;
        this.logoutRedirectUrl = null;
        this.router.navigate([redirect]);
    };
    AuthService.prototype.redirectForLogin = function () {
        this.loginRedirectUrl = this.router.url;
        this.router.navigate([this.loginUrl]);
    };
    AuthService.prototype.reLogin = function () {
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].TOKEN_EXPIRES_IN);
        if (this.reLoginDelegate) {
            this.reLoginDelegate();
        }
        else {
            this.redirectForLogin();
        }
    };
    AuthService.prototype.refreshLogin = function () {
        var _this = this;
        return this.getRefreshLoginEndpoint().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return _this.processLoginResponse(response, _this.rememberMe); }));
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        if (this.isLoggedIn) {
            this.logout();
        }
        return this.getLoginEndpoint(user.userName, user.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) { return _this.processLoginResponse(response, user.rememberMe); }));
    };
    AuthService.prototype.getLoginEndpoint = function (userName, password) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpParams"]()
            .append('username', userName)
            .append('password', password)
            .append('client_id', 'einvest_spa')
            .append('grant_type', 'password')
            .append('scope', 'openid email phone profile offline_access roles einvest_api');
        return this.http.post(this.loginUrl, params, { headers: header });
    };
    AuthService.prototype.getRefreshLoginEndpoint = function () {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpParams"]()
            .append('refresh_token', this.refreshToken)
            .append('client_id', 'einvest_spa')
            .append('grant_type', 'refresh_token');
        return this.http.post(this.loginUrl, params, { headers: header });
    };
    AuthService.prototype.processLoginResponse = function (response, rememberMe) {
        var accessToken = response.access_token;
        if (accessToken == null) {
            throw new Error('Received accessToken was empty');
        }
        localStorage.setItem('loggIn', 'true');
        var refreshToken = response.refresh_token || this.refreshToken;
        var expiresIn = response.expires_in;
        var tokenExpiryDate = new Date();
        tokenExpiryDate.setSeconds(tokenExpiryDate.getSeconds() + expiresIn);
        var accessTokenExpiry = tokenExpiryDate;
        var jwtHelper = new _jwt_helper__WEBPACK_IMPORTED_MODULE_8__["JwtHelper"]();
        var decodedAccessToken = jwtHelper.decodeToken(response.access_token);
        var permissions = Array.isArray(decodedAccessToken.permission) ?
            decodedAccessToken.permission : [decodedAccessToken.permission];
        if (!this.isLoggedIn) {
            this.configurations.import(decodedAccessToken.configuration);
        }
        var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_10__["User"](decodedAccessToken.sub, decodedAccessToken.name, decodedAccessToken.fullname, decodedAccessToken.email, decodedAccessToken.tin, decodedAccessToken.phone_number, Array.isArray(decodedAccessToken.role) ? decodedAccessToken.role : [decodedAccessToken.role], decodedAccessToken.sitecode);
        user.IsEnabled = true;
        this.saveUserDetails(user, permissions, accessToken, refreshToken, accessTokenExpiry, rememberMe);
        this.reevaluateLoginStatus(user);
        return user;
    };
    AuthService.prototype.saveUserDetails = function (user, permissions, accessToken, refreshToken, expiresIn, rememberMe) {
        if (rememberMe) {
            this.localStorage.savePermanentData(accessToken, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].ACCESS_TOKEN);
            this.localStorage.savePermanentData(refreshToken, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].REFRESH_TOKEN);
            this.localStorage.savePermanentData(expiresIn, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].TOKEN_EXPIRES_IN);
            this.localStorage.savePermanentData(permissions, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].USER_PERMISSIONS);
            this.localStorage.savePermanentData(user, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].CURRENT_USER);
        }
        else {
            this.localStorage.saveSyncedSessionData(accessToken, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].ACCESS_TOKEN);
            this.localStorage.saveSyncedSessionData(refreshToken, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].REFRESH_TOKEN);
            this.localStorage.saveSyncedSessionData(expiresIn, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].TOKEN_EXPIRES_IN);
            this.localStorage.saveSyncedSessionData(permissions, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].USER_PERMISSIONS);
            this.localStorage.saveSyncedSessionData(user, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].CURRENT_USER);
        }
        this.localStorage.savePermanentData(rememberMe, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].REMEMBER_ME);
    };
    AuthService.prototype.logout = function () {
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].ACCESS_TOKEN);
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].REFRESH_TOKEN);
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].TOKEN_EXPIRES_IN);
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].USER_PERMISSIONS);
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].CURRENT_USER);
        this.configurations.clearLocalChanges();
        this.reevaluateLoginStatus();
    };
    AuthService.prototype.reevaluateLoginStatus = function (currentUser) {
        var _this = this;
        var user = currentUser || this.localStorage.getDataObject(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].CURRENT_USER);
        var isLoggedIn = user != null;
        if (this.previousIsLoggedInCheck !== isLoggedIn) {
            setTimeout(function () {
                _this._loginStatus.next(isLoggedIn);
            });
        }
        this.previousIsLoggedInCheck = isLoggedIn;
    };
    AuthService.prototype.getLoginStatusEvent = function () {
        return this._loginStatus.asObservable();
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var user = this.localStorage.getDataObject(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].CURRENT_USER);
            this.reevaluateLoginStatus(user);
            return user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "userPermissions", {
        get: function () {
            return this.localStorage.getDataObject(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].USER_PERMISSIONS) || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].ACCESS_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "accessTokenExpiryDate", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getDataObject(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].TOKEN_EXPIRES_IN, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isSessionExpired", {
        get: function () {
            if (this.accessTokenExpiryDate == null) {
                return true;
            }
            return this.accessTokenExpiryDate.valueOf() <= new Date().valueOf();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "refreshToken", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].REFRESH_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.currentUser != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "rememberMe", {
        get: function () {
            return this.localStorage.getDataObject(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_7__["settingKeys"].REMEMBER_ME) === true;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"],
            _storeManager_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreManager"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/@custor/services/security/endpoint-factory.service.ts":
/*!*******************************************************************!*\
  !*** ./src/@custor/services/security/endpoint-factory.service.ts ***!
  \*******************************************************************/
/*! exports provided: EndpointFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointFactory", function() { return EndpointFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/@custor/services/security/auth.service.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configuration.service */ "./src/@custor/services/configuration.service.ts");







var EndpointFactory = /** @class */ (function () {
    function EndpointFactory(http, configurations, injector) {
        this.http = http;
        this.configurations = configurations;
        this.injector = injector;
        this._loginUrl = '/connect/token';
    }
    EndpointFactory_1 = EndpointFactory;
    Object.defineProperty(EndpointFactory.prototype, "loginUrl", {
        get: function () { return this.configurations.tokenUrl + this._loginUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EndpointFactory.prototype, "authService", {
        get: function () {
            if (!this._authService) {
                this._authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]);
            }
            return this._authService;
        },
        enumerable: true,
        configurable: true
    });
    EndpointFactory.prototype.getLoginEndpoint = function (userName, password) {
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .append('username', userName)
            .append('password', password)
            .append('client_id', 'einvest_spa')
            .append('grant_type', 'password')
            .append('scope', 'openid email phone profile offline_access roles einvest_api');
        return this.http.post(this.loginUrl, params, { headers: header });
    };
    EndpointFactory.prototype.getRefreshLoginEndpoint = function () {
        var _this = this;
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .append('refresh_token', this.authService.refreshToken)
            .append('client_id', 'einvest_spa')
            .append('grant_type', 'refresh_token');
        return this.http.post(this.loginUrl, params, { headers: header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this.handleError(error, function () { return _this.getRefreshLoginEndpoint(); });
        }));
    };
    EndpointFactory.prototype.getRequestHeaders = function () {
        //    alert (this.authService.accessToken);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.authService.accessToken,
            'Content-Type': 'application/json',
            'Accept': "application/vnd.iman.v" + EndpointFactory_1.apiVersion + "+json, application/json, text/plain, */*",
            'App-Version': _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"].appVersion
        });
        // console.log('Headers ' + headers);
        return { headers: headers };
    };
    EndpointFactory.prototype.handleError = function (error, continuation) {
        var _this = this;
        if (error.status === 401) {
            if (this.isRefreshingLogin) {
                return this.pauseTask(continuation);
            }
            this.isRefreshingLogin = true;
            return this.authService.refreshLogin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (data) {
                _this.isRefreshingLogin = false;
                _this.resumeTasks(true);
                return continuation();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (refreshLoginError) {
                _this.isRefreshingLogin = false;
                _this.resumeTasks(false);
                // tslint:disable-next-line:max-line-length
                if (refreshLoginError.status === 401 || (refreshLoginError.url && refreshLoginError.url.toLowerCase().includes(_this.loginUrl.toLowerCase()))) {
                    _this.authService.reLogin();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('session expired');
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(refreshLoginError || 'server error');
                }
            }));
        }
        if (error.url && error.url.toLowerCase().includes(this.loginUrl.toLowerCase())) {
            this.authService.reLogin();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])((error.error && error.error.error_description) ? "session expired (" + error.error.error_description + ")" : 'session expired');
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }
    };
    EndpointFactory.prototype.pauseTask = function (continuation) {
        if (!this.taskPauser) {
            this.taskPauser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        return this.taskPauser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (continueOp) {
            return continueOp ? continuation() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('session expired');
        }));
    };
    EndpointFactory.prototype.resumeTasks = function (continueOp) {
        var _this = this;
        setTimeout(function () {
            if (_this.taskPauser) {
                _this.taskPauser.next(continueOp);
                _this.taskPauser.complete();
                _this.taskPauser = null;
            }
        });
    };
    var EndpointFactory_1;
    EndpointFactory.apiVersion = '1';
    EndpointFactory = EndpointFactory_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]])
    ], EndpointFactory);
    return EndpointFactory;
}());



/***/ }),

/***/ "./src/@custor/services/security/jwt-helper.ts":
/*!*****************************************************!*\
  !*** ./src/@custor/services/security/jwt-helper.ts ***!
  \*****************************************************/
/*! exports provided: JwtHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtHelper", function() { return JwtHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Helper class to decode and find JWT expiration.
 */

var JwtHelper = /** @class */ (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw new Error('Illegal base64url string!');
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    JwtHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtHelper);
    return JwtHelper;
}());



/***/ })

}]);
//# sourceMappingURL=default~auth-auth-module~customer-customer-module~main-main-module.js.map