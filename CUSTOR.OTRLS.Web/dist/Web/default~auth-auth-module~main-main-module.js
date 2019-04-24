(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-auth-module~main-main-module"],{

/***/ "./src/@custor/models/permission.model.ts":
/*!************************************************!*\
  !*** ./src/@custor/models/permission.model.ts ***!
  \************************************************/
/*! exports provided: Permission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permission", function() { return Permission; });
var Permission = /** @class */ (function () {
    function Permission(name, value, groupName, description) {
        this.Name = name;
        this.Value = value;
        this.GroupName = groupName;
        this.Description = description;
    }
    Permission.viewInvestorsPermission = 'investors.view';
    Permission.manageInvestorsPermission = 'investors.manage';
    Permission.viewProjectsPermission = 'projects.view';
    Permission.manageProjectsPermission = 'projects.manage';
    Permission.viewServiceList = 'task.view';
    Permission.manageTasks = 'task.manage';
    Permission.viewServiceApplication = 'serviceApplication.view';
    Permission.manageServiceApplication = 'serviceApplication.manage';
    Permission.viewUsersPermission = 'users.view';
    Permission.manageUsersPermission = 'users.manage';
    Permission.viewRolesPermission = 'roles.view';
    Permission.manageRolesPermission = 'roles.manage';
    Permission.assignRolesPermission = 'roles.assign';
    Permission.manageSiteAdministratorsPermission = 'superadmin.manageAdmins';
    Permission.manageLookupsPermission = 'superadmin.manageLookups';
    Permission.manageSettingsPermission = 'superadmin.manageSettings';
    // Registration and Licensing Permissions
    Permission.ManageAssignedServicesPermission = 'services.manage';
    Permission.ManageCustomerProfilesPermission = 'customerProfile.manage';
    Permission.ManageProjectProfilesPermission = 'projectProfile.manage';
    Permission.DispatchLicensingServicesPermission = 'licensingServices.manage';
    // Incentive Management Permission
    Permission.ManageIncentiveAssignedServicesPermission = 'incentiveServices.manage';
    Permission.ApproveIncentiveUploadedItemsPermission = 'uploadedItems.manage';
    Permission.DispatchIncentivesServicesPermission = 'incentivesServices.manage';
    // Manage Aftercare Data
    Permission.ManageAftercareDataPermission = 'aftercareData.manage';
    // Management Services Permission
    Permission.ViewReadOnlyDataPermission = 'data.View';
    return Permission;
}());



/***/ }),

/***/ "./src/@custor/services/security/account-endpoint.service.ts":
/*!*******************************************************************!*\
  !*** ./src/@custor/services/security/account-endpoint.service.ts ***!
  \*******************************************************************/
/*! exports provided: AccountEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEndpoint", function() { return AccountEndpoint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _endpoint_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint-factory.service */ "./src/@custor/services/security/endpoint-factory.service.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configuration.service */ "./src/@custor/services/configuration.service.ts");







var AccountEndpoint = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountEndpoint, _super);
    function AccountEndpoint(http, configurations, injector) {
        var _this = _super.call(this, http, configurations, injector) || this;
        _this._usersUrl = 'api/account/users';
        // Todo
        // private readonly _usersAddUrl: string = '/api/account/users/add';
        _this._usersAddUrl = 'api/account/users';
        _this._selfRegisterUsersAddUrl = 'api/account/users';
        _this._userByUserNameUrl = 'api/account/users/username';
        _this._currentUserUrl = 'api/account/users/me';
        _this._currentUserPreferencesUrl = 'api/account/users/me/preferences';
        _this._unblockUserUrl = 'api/account/users/unblock';
        _this._rolesUrl = 'api/account/roles';
        _this._roleByRoleNameUrl = 'api/account/roles/name';
        _this._permissionsUrl = 'api/account/permissions';
        _this._resetUrl = 'api/account/ChangeOrResetPassword';
        return _this;
    }
    Object.defineProperty(AccountEndpoint.prototype, "usersUrl", {
        get: function () {
            return this.configurations.baseUrl + this._usersUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "usersAddUrl", {
        get: function () {
            return this.configurations.baseUrl + this._usersAddUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "selfRegisterUsersAddUrl", {
        get: function () {
            return this.configurations.baseUrl + this._selfRegisterUsersAddUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "userByUserNameUrl", {
        get: function () {
            return this.configurations.baseUrl + this._userByUserNameUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "currentUserUrl", {
        get: function () {
            return this.configurations.baseUrl + this._currentUserUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "currentUserPreferencesUrl", {
        get: function () {
            return this.configurations.baseUrl + this._currentUserPreferencesUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "unblockUserUrl", {
        get: function () {
            return this.configurations.baseUrl + this._unblockUserUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "rolesUrl", {
        get: function () {
            return this.configurations.baseUrl + this._rolesUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "roleByRoleNameUrl", {
        get: function () {
            return this.configurations.baseUrl + this._roleByRoleNameUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "permissionsUrl", {
        get: function () {
            return this.configurations.baseUrl + this._permissionsUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "resetUrl", {
        get: function () {
            return this.configurations.baseUrl + this._resetUrl;
        },
        enumerable: true,
        configurable: true
    });
    AccountEndpoint.prototype.getUserEndpoint = function (userId) {
        var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
        return this.http.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getUserByUserNameEndpoint = function (userName) {
        var endpointUrl = this.userByUserNameUrl + "/" + userName;
        return this.http.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getUsersEndpoint = function (page, pageSize) {
        var endpointUrl = page && pageSize ? this.usersUrl + "/" + page + "/" + pageSize : this.usersUrl;
        return this.http.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getNewUserEndpoint = function (userObject) {
        // console.log(this.usersAddUrl);
        return this.http.post(this.usersUrl, JSON.stringify(userObject), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getAddNewUserEndpoint = function (userObject) {
        // console.log(this.usersAddUrl);
        // console.log(JSON.stringify(userObject));
        return this.http.post(this.usersAddUrl, JSON.stringify(userObject), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getSelfRegisterAddNewUserEndpoint = function (userObject) {
        // console.log(this.selfRegisterUsersAddUrl);
        // console.log(JSON.stringify(userObject));
        return this.http.post(this.selfRegisterUsersAddUrl, JSON.stringify(userObject), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getUpdateUserEndpoint = function (userObject, userId) {
        var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
        return this.http.put(endpointUrl, JSON.stringify(userObject), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getPatchUpdateUserEndpoint = function (valueOrPatch, opOrUserId, path, from, userId) {
        var endpointUrl;
        var patchDocument;
        if (path) {
            endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
            patchDocument = from ?
                [{ 'value': valueOrPatch, 'path': path, 'op': opOrUserId, 'from': from }] :
                [{ 'value': valueOrPatch, 'path': path, 'op': opOrUserId }];
        }
        else {
            endpointUrl = opOrUserId ? this.usersUrl + "/" + opOrUserId : this.currentUserUrl;
            patchDocument = valueOrPatch;
        }
        return this.http.patch(endpointUrl, JSON.stringify(patchDocument), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getUserPreferencesEndpoint = function () {
        return this.http.get(this.currentUserPreferencesUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getUpdateUserPreferencesEndpoint = function (configuration) {
        return this.http.put(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getUnblockUserEndpoint = function (userId) {
        var endpointUrl = this.unblockUserUrl + "/" + userId;
        return this.http.put(endpointUrl, null, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getDeleteUserEndpoint = function (userId) {
        var endpointUrl = this.usersUrl + "/" + userId;
        return this.http.delete(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getRoleEndpoint = function (roleId) {
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getRoleByRoleNameEndpoint = function (roleName) {
        var endpointUrl = this.roleByRoleNameUrl + "/" + roleName;
        return this.http.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getRolesEndpoint = function (page, pageSize) {
        var endpointUrl = page && pageSize ? this.rolesUrl + "/" + page + "/" + pageSize : this.rolesUrl;
        return this.http.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getNewRoleEndpoint = function (roleObject) {
        return this.http.post(this.rolesUrl, JSON.stringify(roleObject), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getUpdateRoleEndpoint = function (roleObject, roleId) {
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.put(endpointUrl, JSON.stringify(roleObject), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getDeleteRoleEndpoint = function (roleId) {
        var _this = this;
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.delete(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this.handleError(error, function () { return _this.getDeleteRoleEndpoint(roleId); });
        }));
    };
    AccountEndpoint.prototype.getPermissionsEndpoint = function () {
        return this.http.get(this.permissionsUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint.prototype.getResetPasswordEndpoint = function (userObject) {
        return this.http.post(this.resetUrl, JSON.stringify(userObject), this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err || 'Server error'); }));
    };
    AccountEndpoint = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]])
    ], AccountEndpoint);
    return AccountEndpoint;
}(_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_5__["EndpointFactory"]));



/***/ }),

/***/ "./src/@custor/services/security/account.service.ts":
/*!**********************************************************!*\
  !*** ./src/@custor/services/security/account.service.ts ***!
  \**********************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _account_endpoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-endpoint.service */ "./src/@custor/services/security/account-endpoint.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/@custor/services/security/auth.service.ts");








var AccountService = /** @class */ (function () {
    function AccountService(router, http, authService, accountEndpoint) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.accountEndpoint = accountEndpoint;
        this._rolesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userType = 'OnlineSite';
    }
    AccountService_1 = AccountService;
    AccountService.prototype.getUser = function (userId) {
        return this.accountEndpoint.getUserEndpoint(userId);
    };
    AccountService.prototype.getUserAndRoles = function (userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.accountEndpoint.getUserEndpoint(userId), this.accountEndpoint.getRolesEndpoint());
    };
    AccountService.prototype.getUsers = function (page, pageSize) {
        return this.accountEndpoint.getUsersEndpoint(page, pageSize);
    };
    AccountService.prototype.getUsersAndRoles = function (page, pageSize) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.accountEndpoint.getUsersEndpoint(page, pageSize), this.accountEndpoint.getRolesEndpoint());
    };
    AccountService.prototype.updateUser = function (user) {
        var _this = this;
        if (user.Id) {
            return this.accountEndpoint.getUpdateUserEndpoint(user, user.Id);
        }
        else {
            return this.accountEndpoint.getUserByUserNameEndpoint(user.UserName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (foundUser) {
                user.Id = foundUser.Id;
                return _this.accountEndpoint.getUpdateUserEndpoint(user, user.Id);
            }));
        }
    };
    AccountService.prototype.newUser = function (user) {
        // console.debug(user);
        // return this.accountEndpoint.getNewUserEndpoint<User>(user);
        return this.accountEndpoint.getAddNewUserEndpoint(user);
    };
    // Todo check for authorized and unauthorized
    AccountService.prototype.selfRegisterNewUser = function (user) {
        // console.debug(user);
        // return this.accountEndpoint.getNewUserEndpoint<User>(user);
        return this.accountEndpoint.getSelfRegisterAddNewUserEndpoint(user);
    };
    AccountService.prototype.getUserPreferences = function () {
        return this.accountEndpoint.getUserPreferencesEndpoint();
    };
    AccountService.prototype.updateUserPreferences = function (configuration) {
        return this.accountEndpoint.getUpdateUserPreferencesEndpoint(configuration);
    };
    AccountService.prototype.deleteUser = function (userOrUserId) {
        var _this = this;
        if (typeof userOrUserId === 'string' || userOrUserId instanceof String) {
            return this.accountEndpoint.getDeleteUserEndpoint(userOrUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.onRolesUserCountChanged(data.Roles); }));
        }
        else {
            if (userOrUserId.Id) {
                return this.deleteUser(userOrUserId.Id);
            }
            else {
                return this.accountEndpoint.getUserByUserNameEndpoint(userOrUserId.UserName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (user) { return _this.deleteUser(user.Id); }));
            }
        }
    };
    AccountService.prototype.unblockUser = function (userId) {
        return this.accountEndpoint.getUnblockUserEndpoint(userId);
    };
    AccountService.prototype.userHasPermission = function (permissionValue) {
        return this.permissions.some(function (p) { return p === permissionValue; });
    };
    AccountService.prototype.refreshLoggedInUser = function () {
        return this.authService.refreshLogin();
    };
    AccountService.prototype.getRoles = function (page, pageSize) {
        return this.accountEndpoint.getRolesEndpoint(page, pageSize);
    };
    AccountService.prototype.getRolesAndPermissions = function (page, pageSize) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(this.accountEndpoint.getRolesEndpoint(page, pageSize), this.accountEndpoint.getPermissionsEndpoint());
    };
    AccountService.prototype.updateRole = function (role) {
        var _this = this;
        if (role.id) {
            return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.onRolesChanged([role], AccountService_1.roleModifiedOperation); }));
        }
        else {
            return this.accountEndpoint.getRoleByRoleNameEndpoint(role.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (foundRole) {
                role.id = foundRole.id;
                return _this.accountEndpoint.getUpdateRoleEndpoint(role, role.id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.onRolesChanged([role], AccountService_1.roleModifiedOperation); }));
        }
    };
    AccountService.prototype.newRole = function (role) {
        var _this = this;
        return this.accountEndpoint.getNewRoleEndpoint(role).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.onRolesChanged([role], AccountService_1.roleAddedOperation); }));
    };
    AccountService.prototype.deleteRole = function (roleOrRoleId) {
        var _this = this;
        if (typeof roleOrRoleId === 'string' || roleOrRoleId instanceof String) {
            return this.accountEndpoint.getDeleteRoleEndpoint(roleOrRoleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return _this.onRolesChanged([data], AccountService_1.roleDeletedOperation); }));
        }
        else {
            if (roleOrRoleId.id) {
                return this.deleteRole(roleOrRoleId.id);
            }
            else {
                return this.accountEndpoint.getRoleByRoleNameEndpoint(roleOrRoleId.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (role) { return _this.deleteRole(role.id); }));
            }
        }
    };
    AccountService.prototype.getPermissions = function () {
        return this.accountEndpoint.getPermissionsEndpoint();
    };
    AccountService.prototype.onRolesChanged = function (roles, op) {
        this._rolesChanged.next({ roles: roles, operation: op });
    };
    AccountService.prototype.onRolesUserCountChanged = function (roles) {
        return this.onRolesChanged(roles, AccountService_1.roleModifiedOperation);
    };
    AccountService.prototype.getRolesChangedEvent = function () {
        return this._rolesChanged.asObservable();
    };
    Object.defineProperty(AccountService.prototype, "permissions", {
        get: function () {
            return this.authService.userPermissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "currentUser", {
        get: function () {
            return this.authService.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    // isInvestor() {
    //   return true;
    // }
    AccountService.prototype.getUserType = function () {
        if (this.authService.isLoggedIn) {
            if (this.currentUser.SiteCode === this.userType) {
                return true;
            }
        }
    };
    AccountService.prototype.resetAccount = function (user) {
        return this.accountEndpoint.getResetPasswordEndpoint(user);
    };
    var AccountService_1;
    AccountService.roleAddedOperation = 'add';
    AccountService.roleDeletedOperation = 'delete';
    AccountService.roleModifiedOperation = 'modify';
    AccountService = AccountService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _account_endpoint_service__WEBPACK_IMPORTED_MODULE_6__["AccountEndpoint"]])
    ], AccountService);
    return AccountService;
}());



/***/ })

}]);
//# sourceMappingURL=default~auth-auth-module~main-main-module.js.map