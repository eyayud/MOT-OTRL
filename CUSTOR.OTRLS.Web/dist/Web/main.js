(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"default~auth-auth-module~customer-customer-module~dashboard-dashboard-module~landing-landing-module~~f267f8dc",
		"default~auth-auth-module~customer-customer-module~main-main-module",
		"default~auth-auth-module~main-main-module",
		"auth-auth-module"
	],
	"./customer/customer.module": [
		"./src/app/main/customer/customer.module.ts",
		"default~auth-auth-module~customer-customer-module~dashboard-dashboard-module~landing-landing-module~~f267f8dc",
		"default~auth-auth-module~customer-customer-module~main-main-module",
		"customer-customer-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/main/dashboard/dashboard.module.ts",
		"default~auth-auth-module~customer-customer-module~dashboard-dashboard-module~landing-landing-module~~f267f8dc",
		"dashboard-dashboard-module"
	],
	"./landing/landing.module": [
		"./src/app/landing/landing.module.ts",
		"default~auth-auth-module~customer-customer-module~dashboard-dashboard-module~landing-landing-module~~f267f8dc",
		"landing-landing-module"
	],
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"default~auth-auth-module~customer-customer-module~dashboard-dashboard-module~landing-landing-module~~f267f8dc",
		"default~auth-auth-module~customer-customer-module~main-main-module",
		"default~auth-auth-module~main-main-module",
		"main-main-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/@custor/helpers/settingKeys.ts":
/*!********************************************!*\
  !*** ./src/@custor/helpers/settingKeys.ts ***!
  \********************************************/
/*! exports provided: settingKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingKeys", function() { return settingKeys; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var settingKeys = /** @class */ (function () {
    // tslint:disable-next-line:class-name
    function settingKeys() {
    }
    settingKeys.CURRENT_USER = 'current_user';
    settingKeys.ONLINE_SITE_CODE = 'OnlineSite';
    settingKeys.ONLINE_ROLE = 'Online Users';
    settingKeys.USER_PERMISSIONS = 'user_permissions';
    settingKeys.ACCESS_TOKEN = 'access_token';
    settingKeys.REFRESH_TOKEN = 'refresh_token';
    settingKeys.TOKEN_EXPIRES_IN = 'expires_in';
    settingKeys.REMEMBER_ME = 'remember_me';
    settingKeys.LANGUAGE = 'language';
    settingKeys.HOME_URL = 'home_url';
    settingKeys.THEME_ID = 'themeId';
    settingKeys = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
        // tslint:disable-next-line:class-name
    ], settingKeys);
    return settingKeys;
}());



/***/ }),

/***/ "./src/@custor/helpers/utilities.ts":
/*!******************************************!*\
  !*** ./src/@custor/helpers/utilities.ts ***!
  \******************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    Utilities_1 = Utilities;
    Utilities.getHttpResponseMessage = function (data) {
        var responses = [];
        if (data instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponseBase"]) {
            if (this.checkNoNetwork(data)) {
                responses.push("" + this.noNetworkMessageCaption + this.captionAndMessageSeparator + " " + this.noNetworkMessageDetail);
            }
            else {
                var responseObject = this.getResponseBody(data);
                if (responseObject && (typeof responseObject === 'object' || responseObject instanceof Object)) {
                    for (var key in responseObject) {
                        if (key) {
                            responses.push("" + key + this.captionAndMessageSeparator + " " + responseObject[key]);
                        }
                        else if (responseObject[key]) {
                            responses.push(responseObject[key].toString());
                        }
                    }
                }
            }
            if (!responses.length && this.getResponseBody(data)) {
                responses.push(data.statusText + ": " + this.getResponseBody(data).toString());
            }
        }
        if (!responses.length) {
            responses.push(data.toString());
        }
        if (this.checkAccessDenied(data)) {
            responses.splice(0, 0, "" + this.accessDeniedMessageCaption + this.captionAndMessageSeparator + " " + this.accessDeniedMessageDetail);
        }
        return responses;
    };
    // tslint:disable-next-line:max-line-length
    Utilities.findHttpResponseMessage = function (messageToFind, data, seachInCaptionOnly, includeCaptionInResult) {
        if (seachInCaptionOnly === void 0) { seachInCaptionOnly = true; }
        if (includeCaptionInResult === void 0) { includeCaptionInResult = false; }
        var searchString = messageToFind.toLowerCase();
        var httpMessages = this.getHttpResponseMessage(data);
        for (var _i = 0, httpMessages_1 = httpMessages; _i < httpMessages_1.length; _i++) {
            var message = httpMessages_1[_i];
            var fullMessage = Utilities_1.splitInTwo(message, this.captionAndMessageSeparator);
            if (fullMessage.firstPart && fullMessage.firstPart.toLowerCase().indexOf(searchString) !== -1) {
                return includeCaptionInResult ? message : fullMessage.secondPart || fullMessage.firstPart;
            }
        }
        if (!seachInCaptionOnly) {
            for (var _a = 0, httpMessages_2 = httpMessages; _a < httpMessages_2.length; _a++) {
                var message = httpMessages_2[_a];
                if (message.toLowerCase().indexOf(searchString) !== -1) {
                    if (includeCaptionInResult) {
                        return message;
                    }
                    else {
                        var fullMessage = Utilities_1.splitInTwo(message, this.captionAndMessageSeparator);
                        return fullMessage.secondPart || fullMessage.firstPart;
                    }
                }
            }
        }
        return null;
    };
    Utilities.getResponseBody = function (response) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
            return response.body;
        }
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            return response.error || response.message || response.statusText;
        }
    };
    Utilities.checkNoNetwork = function (response) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponseBase"]) {
            return response.status === 0;
        }
        return false;
    };
    Utilities.checkAccessDenied = function (response) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponseBase"]) {
            return response.status === 403;
        }
        return false;
    };
    Utilities.checkNotFound = function (response) {
        if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponseBase"]) {
            return response.status === 404;
        }
        return false;
    };
    Utilities.checkIsLocalHost = function (url, base) {
        if (url) {
            var location_1 = new URL(url, base);
            return location_1.hostname === 'localhost' || location_1.hostname === '127.0.0.1';
        }
        return false;
    };
    Utilities.getQueryParamsFromString = function (paramString) {
        if (!paramString) {
            return null;
        }
        var params = {};
        for (var _i = 0, _a = paramString.split('&'); _i < _a.length; _i++) {
            var param = _a[_i];
            var keyValue = Utilities_1.splitInTwo(param, '=');
            params[keyValue.firstPart] = keyValue.secondPart;
        }
        return params;
    };
    Utilities.splitInTwo = function (text, separator) {
        var separatorIndex = text.indexOf(separator);
        if (separatorIndex === -1) {
            return { firstPart: text, secondPart: null };
        }
        var part1 = text.substr(0, separatorIndex).trim();
        var part2 = text.substr(separatorIndex + 1).trim();
        return { firstPart: part1, secondPart: part2 };
    };
    Utilities.safeStringify = function (object) {
        var result;
        try {
            result = JSON.stringify(object);
            return result;
        }
        catch (error) {
        }
        var simpleObject = {};
        for (var prop in object) {
            if (!object.hasOwnProperty(prop)) {
                continue;
            }
            if (typeof (object[prop]) === 'object') {
                continue;
            }
            if (typeof (object[prop]) === 'function') {
                continue;
            }
            simpleObject[prop] = object[prop];
        }
        result = '[***Sanitized Object***]: ' + JSON.stringify(simpleObject);
        return result;
    };
    Utilities.JsonTryParse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            if (value === 'undefined') {
                return void 0;
            }
            return value;
        }
    };
    Utilities.TestIsObjectEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
    Utilities.TestIsUndefined = function (value) {
        return typeof value === 'undefined';
        // return value === undefined;
    };
    Utilities.TestIsString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    Utilities.capitalizeFirstLetter = function (text) {
        if (text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
        else {
            return text;
        }
    };
    Utilities.toTitleCase = function (text) {
        return text.replace(/\w\S*/g, function (subString) {
            return subString.charAt(0).toUpperCase() + subString.substr(1).toLowerCase();
        });
    };
    Utilities.toLowerCase = function (items) {
        if (items instanceof Array) {
            var loweredRoles = [];
            for (var i = 0; i < items.length; i++) {
                loweredRoles[i] = items[i].toLowerCase();
            }
            return loweredRoles;
        }
        else if (typeof items === 'string' || items instanceof String) {
            return items.toLowerCase();
        }
    };
    Utilities.uniqueId = function () {
        return this.randomNumber(1000000, 9000000).toString();
    };
    Utilities.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Utilities.baseUrl = function () {
        var base = '';
        if (window.location.origin) {
            base = window.location.origin;
        }
        else {
            base = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        return base.replace(/\/$/, '');
    };
    Utilities.printDateOnly = function (date) {
        date = new Date(date);
        var dayNames = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        var dayOfWeek = date.getDay();
        var dayOfMonth = date.getDate();
        var sup = '';
        var month = date.getMonth();
        var year = date.getFullYear();
        if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
            sup = 'st';
        }
        else if (dayOfMonth === 2 || dayOfMonth === 22) {
            sup = 'nd';
        }
        else if (dayOfMonth === 3 || dayOfMonth === 23) {
            sup = 'rd';
        }
        else {
            sup = 'th';
        }
        var dateString = dayNames[dayOfWeek] + ', ' + dayOfMonth + sup + ' ' + monthNames[month] + ' ' + year;
        return dateString;
    };
    Utilities.printTimeOnly = function (date) {
        date = new Date(date);
        var period = '';
        var minute = date.getMinutes().toString();
        var hour = date.getHours();
        period = hour < 12 ? 'AM' : 'PM';
        if (hour === 0) {
            hour = 12;
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (minute.length === 1) {
            minute = '0' + minute;
        }
        var timeString = hour + ':' + minute + ' ' + period;
        return timeString;
    };
    Utilities.printDate = function (date, separator) {
        if (separator === void 0) { separator = 'at'; }
        return Utilities_1.printDateOnly(date) + " " + separator + " " + Utilities_1.printTimeOnly(date);
    };
    Utilities.printFriendlyDate = function (date, separator) {
        if (separator === void 0) { separator = '-'; }
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        var test = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        if (test.toDateString() === today.toDateString()) {
            return "Today " + separator + " " + Utilities_1.printTimeOnly(date);
        }
        if (test.toDateString() === yesterday.toDateString()) {
            return "Yesterday " + separator + " " + Utilities_1.printTimeOnly(date);
        }
        else {
            return Utilities_1.printDate(date, separator);
        }
    };
    Utilities.printShortDate = function (date, separator, dateTimeSeparator) {
        if (separator === void 0) { separator = '/'; }
        if (dateTimeSeparator === void 0) { dateTimeSeparator = '-'; }
        var day = date.getDate().toString();
        var month = (date.getMonth() + 1).toString();
        var year = date.getFullYear();
        if (day.length === 1) {
            day = '0' + day;
        }
        if (month.length === 1) {
            month = '0' + month;
        }
        return "" + month + separator + day + separator + year + " " + dateTimeSeparator + " " + Utilities_1.printTimeOnly(date);
    };
    Utilities.parseDate = function (date) {
        if (date) {
            if (date instanceof Date) {
                return date;
            }
            if (typeof date === 'string' || date instanceof String) {
                if (date.search(/[a-su-z+]/i) === -1) {
                    date = date + 'Z';
                }
                return new Date(date);
            }
            if (typeof date === 'number' || date instanceof Number) {
                return new Date(date);
            }
        }
    };
    Utilities.printDuration = function (start, end) {
        start = new Date(start);
        end = new Date(end);
        // get total seconds between the times
        var delta = Math.abs(start.valueOf() - end.valueOf()) / 1000;
        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        // what's left is seconds
        var seconds = delta % 60; // in theory the modulus is not required
        var printedDays = '';
        if (days) {
            printedDays = days + " days";
        }
        if (hours) {
            printedDays += printedDays ? ", " + hours + " hours" : hours + " hours";
        }
        if (minutes) {
            printedDays += printedDays ? ", " + minutes + " minutes" : minutes + " minutes";
        }
        if (seconds) {
            printedDays += printedDays ? " and " + seconds + " seconds" : seconds + " seconds";
        }
        if (!printedDays) {
            printedDays = '0';
        }
        return printedDays;
    };
    Utilities.getAge = function (birthDate, otherDate) {
        birthDate = new Date(birthDate);
        otherDate = new Date(otherDate);
        var years = (otherDate.getFullYear() - birthDate.getFullYear());
        if (otherDate.getMonth() < birthDate.getMonth() ||
            otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
            years--;
        }
        return years;
    };
    Utilities.searchArray = function (searchTerm, caseSensitive) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        if (!searchTerm) {
            return true;
        }
        var filter = searchTerm.trim();
        var data = values.join();
        if (!caseSensitive) {
            filter = filter.toLowerCase();
            data = data.toLowerCase();
        }
        return data.indexOf(filter) !== -1;
    };
    Utilities.moveArrayItem = function (array, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += this.length;
        }
        while (newIndex < 0) {
            newIndex += this.length;
        }
        if (newIndex >= this.length) {
            var k = newIndex - this.length;
            while ((k--) + 1) {
                array.push(undefined);
            }
        }
        array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    };
    Utilities.expandCamelCase = function (text) {
        if (!text) {
            return text;
        }
        return text.replace(/([A-Z][a-z]+)/g, ' $1')
            .replace(/([A-Z][A-Z]+)/g, ' $1')
            .replace(/([^A-Za-z ]+)/g, ' $1');
    };
    Utilities.testIsAbsoluteUrl = function (url) {
        var r = new RegExp('^(?:[a-z]+:)?//', 'i');
        return r.test(url);
    };
    Utilities.convertToAbsoluteUrl = function (url) {
        return Utilities_1.testIsAbsoluteUrl(url) ? url : '//' + url;
    };
    Utilities.removeNulls = function (obj) {
        var isArray = obj instanceof Array;
        for (var k in obj) {
            if (obj[k] === null) {
                isArray ? obj.splice(k, 1) : delete obj[k];
            }
            else if (typeof obj[k] === 'object') {
                Utilities_1.removeNulls(obj[k]);
            }
            if (isArray && obj.length === k) {
                Utilities_1.removeNulls(obj);
            }
        }
        return obj;
    };
    Utilities.debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this;
            var args_ = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args_);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args_);
            }
        };
    };
    var Utilities_1;
    Utilities.captionAndMessageSeparator = ':';
    Utilities.noNetworkMessageCaption = 'No Network';
    Utilities.noNetworkMessageDetail = 'The server cannot be reached';
    Utilities.accessDeniedMessageCaption = 'Access Denied!';
    Utilities.accessDeniedMessageDetail = '';
    Utilities.cookies = {
        getItem: function (sKey) {
            // tslint:disable-next-line:max-line-length
            return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
        },
        setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false;
            }
            var sExpires = '';
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                        break;
                    case String:
                        sExpires = '; expires=' + vEnd;
                        break;
                    case Date:
                        sExpires = '; expires=' + vEnd.toUTCString();
                        break;
                }
            }
            // tslint:disable-next-line:max-line-length
            document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
            return true;
        },
        removeItem: function (sKey, sPath, sDomain) {
            if (!sKey) {
                return false;
            }
            // tslint:disable-next-line:max-line-length
            document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
            return true;
        },
        hasItem: function (sKey) {
            return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
        },
        keys: function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
                aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
            }
            return aKeys;
        }
    };
    Utilities = Utilities_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Utilities);
    return Utilities;
}());



/***/ }),

/***/ "./src/@custor/pipes/group-by.pipe.ts":
/*!********************************************!*\
  !*** ./src/@custor/pipes/group-by.pipe.ts ***!
  \********************************************/
/*! exports provided: GroupByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (value, field) {
        if (!value) {
            return value;
        }
        var groupedObj = value.reduce(function (prev, cur) {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(function (key) { return ({ key: key, value: groupedObj[key] }); });
    };
    GroupByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'groupBy' })
    ], GroupByPipe);
    return GroupByPipe;
}());



/***/ }),

/***/ "./src/@custor/services/configuration.service.ts":
/*!*******************************************************!*\
  !*** ./src/@custor/services/configuration.service.ts ***!
  \*******************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _storeManager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storeManager.service */ "./src/@custor/services/storeManager.service.ts");
/* harmony import */ var _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/settingKeys */ "./src/@custor/helpers/settingKeys.ts");
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");








var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(localStorage, translationService) {
        this.localStorage = localStorage;
        this.translationService = translationService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl;
        this.tokenUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].tokenUrl;
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].loginUrl;
        this.fallbackBaseUrl = 'http://custor.net';
        this._language = null;
        this._homeUrl = null;
        this._themeId = null;
        this.onConfigurationImported = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.configurationImported$ = this.onConfigurationImported.asObservable();
        this.loadLocalChanges();
    }
    ConfigurationService_1 = ConfigurationService;
    Object.defineProperty(ConfigurationService.prototype, "language", {
        get: function () {
            return this._language || ConfigurationService_1.defaultLanguage;
        },
        set: function (value) {
            this._language = value;
            this.saveToLocalStore(value, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].LANGUAGE);
            this.translationService.changeLanguage(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "homeUrl", {
        get: function () {
            return this._homeUrl || ConfigurationService_1.defaultHomeUrl;
        },
        set: function (value) {
            this._homeUrl = value;
            this.saveToLocalStore(value, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].HOME_URL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "themeId", {
        get: function () {
            return this._themeId || ConfigurationService_1.defaultThemeId;
        },
        set: function (value) {
            this._themeId = value;
            this.saveToLocalStore(value, _helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].THEME_ID);
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.prototype.loadLocalChanges = function () {
        if (this.localStorage.exists(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].LANGUAGE)) {
            this._language = this.localStorage.getDataObject(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].LANGUAGE);
            this.translationService.changeLanguage(this._language);
        }
        else {
            this.resetLanguage();
        }
        if (this.localStorage.exists(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].HOME_URL)) {
            this._homeUrl = this.localStorage.getDataObject(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].HOME_URL);
        }
        if (this.localStorage.exists(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].THEME_ID)) {
            this._themeId = this.localStorage.getDataObject(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].THEME_ID);
        }
    };
    ConfigurationService.prototype.saveToLocalStore = function (data, key) {
        var _this = this;
        setTimeout(function () { return _this.localStorage.savePermanentData(data, key); });
    };
    ConfigurationService.prototype.import = function (jsonValue) {
        this.clearLocalChanges();
        if (jsonValue) {
            var importValue = _helpers_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].JsonTryParse(jsonValue);
            if (importValue.language != null) {
                this.language = importValue.language;
            }
            if (importValue.homeUrl != null) {
                this.homeUrl = importValue.homeUrl;
            }
            if (importValue.themeId != null) {
                this.themeId = importValue.themeId;
            }
        }
        this.onConfigurationImported.next();
    };
    ConfigurationService.prototype.export = function (changesOnly) {
        if (changesOnly === void 0) { changesOnly = true; }
        var exportValue = {
            language: changesOnly ? this._language : this.language,
            homeUrl: changesOnly ? this._homeUrl : this.homeUrl,
            themeId: changesOnly ? this._themeId : this.themeId
        };
        return JSON.stringify(exportValue);
    };
    ConfigurationService.prototype.clearLocalChanges = function () {
        this._language = null;
        this._homeUrl = null;
        this._themeId = null;
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].LANGUAGE);
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].HOME_URL);
        this.localStorage.deleteData(_helpers_settingKeys__WEBPACK_IMPORTED_MODULE_5__["settingKeys"].THEME_ID);
        this.resetLanguage();
    };
    ConfigurationService.prototype.resetLanguage = function () {
        var language = this.translationService.useBrowserLanguage();
        if (language) {
            this._language = language;
        }
        else {
            this._language = this.translationService.changeLanguage();
        }
    };
    var ConfigurationService_1;
    ConfigurationService.appVersion = '1.0';
    ConfigurationService.defaultLanguage = 'en';
    ConfigurationService.defaultHomeUrl = '/';
    ConfigurationService.defaultThemeId = 1;
    ConfigurationService = ConfigurationService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storeManager_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreManager"],
            _translation_service__WEBPACK_IMPORTED_MODULE_3__["AppTranslationService"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/@custor/services/storeManager.service.ts":
/*!******************************************************!*\
  !*** ./src/@custor/services/storeManager.service.ts ***!
  \******************************************************/
/*! exports provided: LocalStoreManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStoreManager", function() { return LocalStoreManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/utilities */ "./src/@custor/helpers/utilities.ts");




var LocalStoreManager = /** @class */ (function () {
    function LocalStoreManager() {
        var _this = this;
        this.syncKeys = [];
        this.initEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.reservedKeys = [
            'sync_keys',
            'addToSyncKeys',
            'removeFromSyncKeys',
            'getSessionStorage',
            'setSessionStorage',
            'addToSessionStorage',
            'removeFromSessionStorage',
            'clearAllSessionsStorage'
        ];
        this.sessionStorageTransferHandler = function (event) {
            if (!event.newValue) {
                return;
            }
            if (event.key === 'getSessionStorage') {
                if (sessionStorage.length) {
                    _this.localStorageSetItem('setSessionStorage', sessionStorage);
                    localStorage.removeItem('setSessionStorage');
                }
            }
            else if (event.key === 'setSessionStorage') {
                if (!_this.syncKeys.length) {
                    _this.loadSyncKeys();
                }
                var data = JSON.parse(event.newValue);
                // console.info("Set => Key: Transfer setSessionStorage" + ",  data: " + JSON.stringify(data));
                for (var key in data) {
                    if (_this.syncKeysContains(key)) {
                        _this.sessionStorageSetItem(key, JSON.parse(data[key]));
                    }
                }
                _this.onInit();
            }
            else if (event.key === 'addToSessionStorage') {
                var data = JSON.parse(event.newValue);
                // console.warn("Set => Key: Transfer addToSessionStorage" + ",  data: " + JSON.stringify(data));
                _this.addToSessionStorageHelper(data.data, data.key);
            }
            else if (event.key === 'removeFromSessionStorage') {
                _this.removeFromSessionStorageHelper(event.newValue);
            }
            else if (event.key === 'clearAllSessionsStorage' && sessionStorage.length) {
                _this.clearInstanceSessionStorage();
            }
            else if (event.key === 'addToSyncKeys') {
                _this.addToSyncKeysHelper(event.newValue);
            }
            else if (event.key === 'removeFromSyncKeys') {
                _this.removeFromSyncKeysHelper(event.newValue);
            }
        };
    }
    LocalStoreManager_1 = LocalStoreManager;
    LocalStoreManager.prototype.initialiseStorageSyncListener = function () {
        if (LocalStoreManager_1.syncListenerInitialised === true) {
            return;
        }
        LocalStoreManager_1.syncListenerInitialised = true;
        window.addEventListener('storage', this.sessionStorageTransferHandler, false);
        this.syncSessionStorage();
    };
    LocalStoreManager.prototype.deinitialiseStorageSyncListener = function () {
        window.removeEventListener('storage', this.sessionStorageTransferHandler, false);
        LocalStoreManager_1.syncListenerInitialised = false;
    };
    LocalStoreManager.prototype.clearAllStorage = function () {
        this.clearAllSessionsStorage();
        this.clearLocalStorage();
    };
    LocalStoreManager.prototype.clearAllSessionsStorage = function () {
        this.clearInstanceSessionStorage();
        localStorage.removeItem(LocalStoreManager_1.DBKEY_SYNC_KEYS);
        localStorage.setItem('clearAllSessionsStorage', '_dummy');
        localStorage.removeItem('clearAllSessionsStorage');
    };
    LocalStoreManager.prototype.clearInstanceSessionStorage = function () {
        sessionStorage.clear();
        this.syncKeys = [];
    };
    LocalStoreManager.prototype.clearLocalStorage = function () {
        localStorage.clear();
    };
    LocalStoreManager.prototype.saveSessionData = function (data, key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        this.removeFromSyncKeys(key);
        localStorage.removeItem(key);
        this.sessionStorageSetItem(key, data);
    };
    LocalStoreManager.prototype.saveSyncedSessionData = function (data, key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        localStorage.removeItem(key);
        this.addToSessionStorage(data, key);
    };
    LocalStoreManager.prototype.savePermanentData = function (data, key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        this.removeFromSessionStorage(key);
        this.localStorageSetItem(key, data);
    };
    LocalStoreManager.prototype.moveDataToSessionStorage = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        var data = this.getData(key);
        if (data == null) {
            return;
        }
        this.saveSessionData(data, key);
    };
    LocalStoreManager.prototype.moveDataToSyncedSessionStorage = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        var data = this.getData(key);
        if (data == null) {
            return;
        }
        this.saveSyncedSessionData(data, key);
    };
    LocalStoreManager.prototype.moveDataToPermanentStorage = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        var data = this.getData(key);
        if (data == null) {
            return;
        }
        this.savePermanentData(data, key);
    };
    LocalStoreManager.prototype.exists = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        var data = sessionStorage.getItem(key);
        if (data == null) {
            data = localStorage.getItem(key);
        }
        return data != null;
    };
    LocalStoreManager.prototype.getData = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        var data = this.sessionStorageGetItem(key);
        if (data == null) {
            data = this.localStorageGetItem(key);
        }
        return data;
    };
    LocalStoreManager.prototype.getDataObject = function (key, isDateType) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        if (isDateType === void 0) { isDateType = false; }
        var data = this.getData(key);
        if (data != null) {
            if (isDateType) {
                data = new Date(data);
            }
            return data;
        }
        else {
            return null;
        }
    };
    LocalStoreManager.prototype.deleteData = function (key) {
        if (key === void 0) { key = LocalStoreManager_1.DBKEY_USER_DATA; }
        this.testForInvalidKeys(key);
        this.removeFromSessionStorage(key);
        localStorage.removeItem(key);
    };
    LocalStoreManager.prototype.getInitEvent = function () {
        return this.initEvent.asObservable();
    };
    LocalStoreManager.prototype.syncSessionStorage = function () {
        localStorage.setItem('getSessionStorage', '_dummy');
        localStorage.removeItem('getSessionStorage');
    };
    LocalStoreManager.prototype.addToSessionStorage = function (data, key) {
        this.addToSessionStorageHelper(data, key);
        this.addToSyncKeysBackup(key);
        this.localStorageSetItem('addToSessionStorage', { key: key, data: data });
        localStorage.removeItem('addToSessionStorage');
    };
    LocalStoreManager.prototype.addToSessionStorageHelper = function (data, key) {
        this.addToSyncKeysHelper(key);
        this.sessionStorageSetItem(key, data);
    };
    LocalStoreManager.prototype.removeFromSessionStorage = function (keyToRemove) {
        this.removeFromSessionStorageHelper(keyToRemove);
        this.removeFromSyncKeysBackup(keyToRemove);
        localStorage.setItem('removeFromSessionStorage', keyToRemove);
        localStorage.removeItem('removeFromSessionStorage');
    };
    LocalStoreManager.prototype.removeFromSessionStorageHelper = function (keyToRemove) {
        sessionStorage.removeItem(keyToRemove);
        this.removeFromSyncKeysHelper(keyToRemove);
    };
    LocalStoreManager.prototype.testForInvalidKeys = function (key) {
        if (!key) {
            throw new Error('key cannot be empty');
        }
        if (this.reservedKeys.some(function (x) { return x === key; })) {
            throw new Error("The storage key \"" + key + "\" is reserved and cannot be used. Please use a different key");
        }
    };
    LocalStoreManager.prototype.syncKeysContains = function (key) {
        return this.syncKeys.some(function (x) { return x === key; });
    };
    LocalStoreManager.prototype.loadSyncKeys = function () {
        if (this.syncKeys.length) {
            return;
        }
        this.syncKeys = this.getSyncKeysFromStorage();
    };
    LocalStoreManager.prototype.getSyncKeysFromStorage = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = []; }
        var data = this.localStorageGetItem(LocalStoreManager_1.DBKEY_SYNC_KEYS);
        if (data == null) {
            return defaultValue;
        }
        else {
            return data;
        }
    };
    LocalStoreManager.prototype.addToSyncKeys = function (key) {
        this.addToSyncKeysHelper(key);
        this.addToSyncKeysBackup(key);
        localStorage.setItem('addToSyncKeys', key);
        localStorage.removeItem('addToSyncKeys');
    };
    LocalStoreManager.prototype.addToSyncKeysBackup = function (key) {
        var storedSyncKeys = this.getSyncKeysFromStorage();
        if (!storedSyncKeys.some(function (x) { return x === key; })) {
            storedSyncKeys.push(key);
            this.localStorageSetItem(LocalStoreManager_1.DBKEY_SYNC_KEYS, storedSyncKeys);
        }
    };
    LocalStoreManager.prototype.removeFromSyncKeysBackup = function (key) {
        var storedSyncKeys = this.getSyncKeysFromStorage();
        var index = storedSyncKeys.indexOf(key);
        if (index > -1) {
            storedSyncKeys.splice(index, 1);
            this.localStorageSetItem(LocalStoreManager_1.DBKEY_SYNC_KEYS, storedSyncKeys);
        }
    };
    LocalStoreManager.prototype.addToSyncKeysHelper = function (key) {
        if (!this.syncKeysContains(key)) {
            this.syncKeys.push(key);
        }
    };
    LocalStoreManager.prototype.removeFromSyncKeys = function (key) {
        this.removeFromSyncKeysHelper(key);
        this.removeFromSyncKeysBackup(key);
        localStorage.setItem('removeFromSyncKeys', key);
        localStorage.removeItem('removeFromSyncKeys');
    };
    LocalStoreManager.prototype.removeFromSyncKeysHelper = function (key) {
        var index = this.syncKeys.indexOf(key);
        if (index > -1) {
            this.syncKeys.splice(index, 1);
        }
    };
    LocalStoreManager.prototype.localStorageSetItem = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };
    LocalStoreManager.prototype.sessionStorageSetItem = function (key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    };
    LocalStoreManager.prototype.localStorageGetItem = function (key) {
        return _helpers_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].JsonTryParse(localStorage.getItem(key));
    };
    LocalStoreManager.prototype.sessionStorageGetItem = function (key) {
        return _helpers_utilities__WEBPACK_IMPORTED_MODULE_3__["Utilities"].JsonTryParse(sessionStorage.getItem(key));
    };
    LocalStoreManager.prototype.onInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.initEvent.next();
            _this.initEvent.complete();
        });
    };
    var LocalStoreManager_1;
    LocalStoreManager.syncListenerInitialised = false;
    LocalStoreManager.DBKEY_USER_DATA = 'user_data';
    LocalStoreManager.DBKEY_SYNC_KEYS = 'sync_keys';
    LocalStoreManager = LocalStoreManager_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LocalStoreManager);
    return LocalStoreManager;
}());



/***/ }),

/***/ "./src/@custor/services/translation.service.ts":
/*!*****************************************************!*\
  !*** ./src/@custor/services/translation.service.ts ***!
  \*****************************************************/
/*! exports provided: AppTranslationService, TranslateLanguageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTranslationService", function() { return AppTranslationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateLanguageLoader", function() { return TranslateLanguageLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppTranslationService = /** @class */ (function () {
    function AppTranslationService(translate) {
        this.translate = translate;
        this.defaultLanguage = 'en';
        this.onLanguageChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.languageChanged$ = this.onLanguageChanged.asObservable();
        this.setDefaultLanguage(this.defaultLanguage);
    }
    AppTranslationService.prototype.addLanguages = function (lang) {
        this.translate.addLangs(lang);
    };
    AppTranslationService.prototype.setDefaultLanguage = function (lang) {
        this.translate.setDefaultLang(lang);
    };
    AppTranslationService.prototype.getDefaultLanguage = function () {
        return this.translate.defaultLang;
    };
    AppTranslationService.prototype.getBrowserLanguage = function () {
        return this.translate.getBrowserLang();
    };
    AppTranslationService.prototype.useBrowserLanguage = function () {
        var browserLang = this.getBrowserLanguage();
        if (browserLang.match(/en|et/)) {
            this.changeLanguage(browserLang);
            return browserLang;
        }
    };
    AppTranslationService.prototype.changeLanguage = function (language) {
        var _this = this;
        if (language === void 0) { language = 'en'; }
        if (!language) {
            language = this.translate.defaultLang;
        }
        if (language !== this.translate.currentLang) {
            setTimeout(function () {
                _this.translate.use(language);
                _this.onLanguageChanged.next(language);
            });
        }
        return language;
    };
    AppTranslationService.prototype.getTranslation = function (key, interpolateParams) {
        return this.translate.instant(key, interpolateParams);
    };
    AppTranslationService.prototype.getTranslationAsync = function (key, interpolateParams) {
        return this.translate.get(key, interpolateParams);
    };
    AppTranslationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], AppTranslationService);
    return AppTranslationService;
}());

var TranslateLanguageLoader = /** @class */ (function () {
    function TranslateLanguageLoader() {
    }
    TranslateLanguageLoader.prototype.getTranslation = function (lang) {
        switch (lang) {
            case 'en':
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(__webpack_require__(/*! ../../assets/lang/en.json */ "./src/assets/lang/en.json"));
            case 'et':
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(__webpack_require__(/*! ../../assets/lang/et.json */ "./src/assets/lang/et.json"));
            default:
        }
    };
    return TranslateLanguageLoader;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <span>Hello</span> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(translationService, configService) {
        this.translationService = translationService;
        this.configService = configService;
        this.title = 'otrls';
        this.translationService.addLanguages(['en', 'et']);
        this.configService.language = 'en';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_custor_services_translation_service__WEBPACK_IMPORTED_MODULE_2__["AppTranslationService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _custor_services_storeManager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/services/storeManager.service */ "./src/@custor/services/storeManager.service.ts");
/* harmony import */ var _custor_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @custor/pipes/group-by.pipe */ "./src/@custor/pipes/group-by.pipe.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _custor_pipes_group_by_pipe__WEBPACK_IMPORTED_MODULE_11__["GroupByPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useClass: _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslateLanguageLoader"]
                    }
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"],
            ],
            providers: [
                _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__["AppTranslationService"],
                _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationService"],
                _custor_services_storeManager_service__WEBPACK_IMPORTED_MODULE_10__["LocalStoreManager"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// import { MainComponent } from './main/main.component';
var routes = [
    {
        path: '',
        loadChildren: './landing/landing.module#LandingModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthenticationModule'
    },
    {
        path: 'main',
        loadChildren: './main/main.module#MainModule'
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
// preloadingStrategy: PreloadAllModules,
// useHash: true
});


/***/ }),

/***/ "./src/assets/lang/en.json":
/*!*********************************!*\
  !*** ./src/assets/lang/en.json ***!
  \*********************************/
/*! exports provided: common, mainMenu, pageHeader, investors, form, notFound, accessDenied, settings, users, roles, commands, incentiverequest, incentiverequestitem, taxexemption, billofmaterrial, balance, region, zone, woreda, kebele, registration, registrationAddress, payment, sector, subsector, activity, invActivity, lookupTypes, lookup, site, service, servicePrerequsite, servicestepper, servicesTariff, tariff, letterTemplate, default */
/***/ (function(module) {

module.exports = {"common":{"commands":{"Search":"Search","Add":"Add","New":"New","Edit":"Edit","Save":"Save","Delete":"Delete","Remove":"Remove","Show":"Show","Next":"Next","Back":"Back","Refresh":"Refresh","Cancel":"Cancel","Start":"Start","Close":"Close","End":"End","Stop":"Stop","Approve":"Approve","Select":"Select","Unselect":"Unselect","Send":"Send","Exit":"Exit"},"validation":{"IsRequired":"{{fieldName}} is required","Required":"This field is required","MinLengthChar":"Must be at least {{min}} characters long","MaxLengthChar":"Can not exceed {{max}} charcters","MinLengthNum":"Must be at least {{min}} digits","MaxLengthNum":"Can not exceed {{max}} digits","UseEthiopicOnly":"Use Ethiopic characters only","UseLatinOnly":"Use Latin characters only","InvalidDate":"Enter correct date","FutureDate":"This date can not be greater than Today","InvalidEmail":"Enter a valid email address ","NumberOnly":"Enter number only!"},"messages":{"Saved":"Data was saved successfully","Deleted":"Data was deleted successfully","Confirm":"Are you sure?","Error":"Error has occurred"}},"mainMenu":{"Home":"Home","Customers":"Customers","officer":"Officer Task","Services":"Services","ServiceLookups":"Service Maintainace","Service":"Service","Tariff":"Tariff","Serviceprerequisite":"Service Prerequisite","Servicetariff":"Service Tariff","Servicestepper":"Service Stepper","Order":"Order","Serviceappilcation":"Serviceappilcation","Site":"Site","setting":"Settings","address":"Address","site":"site","Category":"Category","Sector":"Sector","SubSector":"SubSector","Activity":"Activity","InvActivity":"InvActivity","Regions":"Regions","Region":"Region","Zone":"Zone","Woreda":"Sub City/Woreda","Kebele":"Kebele","Followup":"Service Followup","About":"About","Logout":"Logout","Login":"Login","Register":"Register","Account":"Account","UserAccount":"User Account","Profile":"Profile","Settings":"Settings","Admin":"Admin","Users":"Users","Roles":"Roles","Sites":"Sites","Lookups":"Lookups","Addresses":"Addresses","AuditTrail":"Audit Trail","Aftercare":"After Care","lookup":"Look Up","InvestorProfile":"My Profile","BusinessProfile":"Business Profile","associate":"Manager","capitalRegistration":"Capital Registration","customerRegistration":"Customer Registration","changePassword":"Change Password","lettertemplate":"Letter Tempalte"},"pageHeader":{"Dashboard":"Dashboard","Customers":"Customers","Customer":"Customer","NotFound":"Not Found","AccessDenied":"Access Denied","About":"About","Settings":"Settings","Users":"User Management","Roles":"Role Management","Investors":"Investors List","customer-profile":"Your Profile Detail","Mangers":"List of manager","manager":"Manager form","appointment":"All Notification","draftedApplication":"Drafted Application","archiveApplication":"Archive Application","dashboard":"My DashBoard","New IP":"New IP","IP Expansion":"IP Expansion","aftercare":"After Care","projectrenewal":"Project Renewal","projectsubstitute":"Project Substitute","projectCancellation":"Project Cancellation","search":"Search","new":"Investment Permit Form","ProjectDetail":"Project Detail","Investor":"Investor","Confirm":"Registration Message","projectlist":"Project List","incentiveServiceList":"Incentive Service List","Service":"Services","TaxExemption":"Tax Exemption","IncentiveRequest":"Incentive Request","address":"Address","RequestedItemsList":"Requested Items List","capitalRegistration":"Capital Registration","billOfMaterial":"bill Of Material","projectDetail":"Project Detail","customerRegistration":"Customer Registration","applicationList":"All Application List","businessLicense":"Business License Registration"},"investors":{"management":{"InvestorName":"Investor Name"},"editor":{"LegalStatus":"Legal Status","FirstName":"First Name (Amharic)","FatherName":"Father (Amharic)","GrandName":"Grand Father (Amharic)","FirstNameEng":"First Name (English)","Title":"Title","FatherNameEng":"Father (English)","GrandNameEng":"Grand Father (English)","Nationality":"Nationality","BranchCountry":"Country of Incorporation","CompanyName":"Company Name (Amharic)","CompanyNameEng":"Company Name (English)","Gender":"Gender","IsDiaspora":"Diaspora?","IsEthiopianOrigin":"Ethiopian Origin?","Tin":"TIN","OtherAddress":"Other Address","RegNumber":"Registration Number","RegDate":"Registration Date","TradeNameEng":"Trade Name (English)","TradeName":"Trade Name (Amharic)","Region":"Region","Zone":"Zone","Woreda":"Wereda","Kebele":"Kebele","HouseNo":"House Number","PhoneDirect":"Telephine (Direct)","PhoneMobile":"Telephine (Mobile)","Fax":"Fax","Pobox":"P.O.Box","Email":"Email","InvestorProfileCaption":"Owner/Business Data","AddressCaption":"Address in Ethiopia","BusinessDataCaption":"Commercial Registration Data","Responsibility ":"Responsibility","MangerProfile":"Manager Profile","Photo":"Photo","MangerAddress":"Manager Address","PaidCapital":"Paid Capital","SighnedCapital":"Signed Capital","FormOfOwnership":"Form Of Ownership"}},"form":{"ErrorCaption":"Error in Form","ErrorMessage":"Please correct any errors and try again."},"notFound":{"404":"404","pageNotFound":"The page you are looking for does not exist","backToHome":"Back to home"},"accessDenied":{"403":"403","accessIsDenied":"You don't have permission to access this resource","backToHome":"Back to home"},"settings":{"tab":{"Profile":"Profile","Preferences":"Preferences","Users":"Users","Roles":"Roles"},"description":{"UserProfile":"Edit your profile","UserPreferences":"Edit your preferences","UserDepartments":"User Departments","UsersManagement":"Manage all users","RolesManagement":"Manage user roles"}},"users":{"management":{"Search":"Search for user","NewUser":"New User","Edit":"Edit User","Delete":"Delete User","EditUser":"Edit User \"{{name}}\"","TIN":"TIN","UserName":"User Name","FullName":"Full Name","Email":"Email","Roles":"Roles","PhoneNumber":"Phone Number"},"editor":{"TIN":"TIN","TINRequired":"TIN is required (10 digits)","UserName":"User Name","UserNameRequired":"User name is required (minimum of 2 and maximum of 200 characters)","Password":"Password","PasswordHint":"Your password is required when changing user name","CurrentPasswordRequired":"Current password is required","Email":"Email","EmailRequired":"Email address is required (maximum of 200 characters)","InvalidEmail":"Specified email is not valid","ChangePassword":"Change Password","CurrentPassword":"Current Password","NewPassword":"New Password","NewPasswordRequired":"New password is required","NewPasswordRules":"The new password must contain at least: one uppercase letter, one lowercase letter, one digit, and any special character","ConfirmPassword":"Confirm Password","ConfirmationPasswordRequired":"Confirmation password is required","PasswordMismatch":"New password and confirmation password do not match","Roles":"Roles","FullName":" Full Name","RoleRequired":" Role is required","PhoneNumber":"Phone Number","Enabled":"Enabled","Unblock":"Unblock","Close":"Close","Edit":"Edit","Cancel":"Cancel","Save":"Save","Saving":"Saving...","ExistingCustomer":"I am existing customer of EIC","SiteName":"Site Name"}},"roles":{"management":{"Search":"Search for role...","NewRole":"New Role","Edit":"Edit","Details":"Details","Delete":"Delete","RoleDetails":"Role Details \"{{name}}\"","EditRole":"Edit Role \"{{name}}\"","Name":"Name","Description":"Description","Users":"Users"},"editor":{"Name":"Name:","Description":"Description:","RoleNameRequired":"Role name is required (minimum of 2 and maximum of 200 characters)","SelectAll":"Select all","SelectNone":"Select none","Close":"Close","Cancel":"Cancel","Save":"Save","Saving":"Saving..."}},"commands":{"Edit":"Edit","Save":"Save","Cancel":"Cancel","Reset":"Reset","Reload":"Reload"},"incentiverequest":{"CustomsBranch":"Customs Branch","IncentiveCategory":"Incentive Category","Quantity":"Quantity","CurrencyType":"Currency Type","Amount":"Amount","InvoiceNo":"InvoiceNo","Phase":"Batch"},"incentiverequestitem":{"IncentiveItem":"Incentive Item","Description":"Description","MeasurementUnit":"Unit","Quantity":"Quantity","ApprovedQty":"ApprovedQty","CurrencyType":"Currency Type","Amount":"Amount"},"taxexemption":{"RevenueBranch":"Revenue Branch","ExemptionYear":"Exemption Year"},"billofmaterrial":{"Phase":"Batch","RejectionReason":"Rejection Reason","MesurmentUnit":"Unit","Quantity":"Quantity","HsCode":"HsCode","Description":"Description"},"balance":{"Phase":"Batch","MesurmentUnit":"Unit","Quantity":"Quantity","HsCode":"HsCode","Description":"Description"},"region":{"Code":"Code","Description":"Description","DescriptionEnglish":"Description English","Header":"Region Editor"},"zone":{"Region":"Region","Code":"Code","Description":"Description","DescriptionEnglish":"Description English","Header":"Zone Editor"},"woreda":{"Region":"Region","Zone":"Zone","Code":"Code","Description":"Description","DescriptionEnglish":"Description English","Header":"Woreda Editor"},"kebele":{"Region":"Region","Zone":"Zone","Woreda":"Woreda","KebeleCode":"Kebele Code","Description":"Description","DescriptionEnglish":"Description English","Header":"Kebele Editor"},"registration":{"management":{"RegistrationName":"Trade Information"},"editor":{"LegalStatus":"Legal Status","CompanyNameAmharic":"Company Name (Amharic)","CompanyNameEnglish":"Company Name (English)","CompanyNameRegional":"Company Name (Regional)","IsWithForighner":"With Forighner?","EthiopiansShare":"Ethiopian's Share","BudgetCatagory":"Budget Catagory","RegistrationStatus":"Status","Tin":"Tin","RegNumber":"Registration Number","RegDate":"Registration Date","PaidCapital":"Paid Up Capital","SighnedCapital":"Sighned Capital","SingleShareValue":"Single Share Value","RepresentativeNameAmharic":"Grantor Company Name(Amharic)","RepresentativeNameEnglish":"Grantor Company Name(English)","RepresentativeNameRegional":"Grantor Company Name(Regional)","RepresentativeManagerNameAmharic":"Grantor Company Manager Name(Amharic)","RepresentativeManagerNameEnglish":"Grantor Company Manager Name(English)","RepresentativeManagerNameRegional":"Grantor Company Manager Name(Regional)","MainOfficeAddressAmharic":"Main Office Country(Amharic)","MainOfficeAddressEnglish":"Main Office Country(English)","MainOfficeAddressRegional":"Main Office Country(Regional)","MainOfficeCountryNameAmharic":"Country (Amharic)","MainOfficeCountryNameEnglish":"Country(English)","MainOfficeCountryNameRegional":"Country(Regional)","CreatedDate":""}},"registrationAddress":{"management":{"RegistrationAddressName":"Address"},"editor":{"Region":"Region","Zone":"Zone","Town":"Town","Woreda":"Wereda","Kebele":"Kebele","HouseNo":"House Number","PhoneDirect":"Telephine (Direct)","PhoneMobile":"Telephine (Mobile)","Fax":"Fax","Pobox":"P.O.Box","Email":"Email","SpecificAreaName":"Specific Area Name","IsMainOffice":"Is Main Office"}},"payment":{"investorName":"Investor Name","paymentDate":"Payment Date","no":"No","paymentReason":"Payment Reason","receiptNo":"Receipt No","amount":"Amount","checkNo":"Check No","totalAmount":"Total Amount","totalAmountdescription":"Amount Description","cashierName":"Cashier Name"},"sector":{"header":"Sector Editor","Description":"Description","DescriptionAlias":"Description Alias","DescriptionEnglish":"Description English","DescriptionEnglishAlias":"Description English Alias","EconomicSectorCode":"Economic Sector Code"},"subsector":{"Sector":"Sector","header":"SubSector Editor","Description":"Description","DescriptionAlias":"Description Alias","DescriptionEnglish":"Description English","DescriptionEnglishAlias":"Description English Alias"},"activity":{"Sector":"Sector","subSector":"SubSector","header":"Activity Editor","Description":"Description","DescriptionAlias":"Description Alias","DescriptionEnglish":"Description English","DescriptionEnglishAlias":"Description English Alias"},"invActivity":{"Sector":"Sector","subSector":"SubSector","activity":"Activity","header":"Activity Editor","Description":"Description","DescriptionAlias":"Description Alias","DescriptionEnglish":"Description English","DescriptionEnglishAlias":"Description English Alias","InAddisOromiaAreas":"In Addis Oromia Areas","InOtherAreas":"In Other Areas"},"lookupTypes":{"Header":"Lookup Types Editor","LookupType":"LookupType","Description":"Description","DescriptionEnglish":"Description English"},"lookup":{"Header":"Lookup Editor","LookupId":"Lookup Id","LookupType":"LookupType","Amharic":"Description","English":"Description English"},"site":{"Header":"Site Editor","Amharic":"Amharic","NameEnglish":"English Name"},"service":{"Header":"Service Editor","Name":"Name","ServiceType":"Service Type","DisplayName":"Display Name","NameEnglish":"Name English","DisplayNameEnglish":"Display Name English"},"servicePrerequsite":{"Header":"Service Prerequsite Editor","ServiceType":"Service Type","Description":"Description","DescriptionEnglish":"Description English"},"servicestepper":{"Header":"Service stepper Editor","ServiceType":"Service Type","NameAmharic":"Amharic Name","NameEnglish":"English Name"},"servicesTariff":{"Header":"Service Fee Editor","ServiceType":"Service Type","TariffType":"Fee Type"},"tariff":{"Header":"Fee Editor","AccountCode":"Account Code","TariffNameEnglish":"Fee Name English","Fee":"Fee","IncrementalFee":"Incremental Fee","Quantity":"Quantity","TariffMode":"Tariff Mode","TariffName":"Fee Name"},"letterTemplate":{"Header":"Letter Template Editor","LetterType":"Letter Type"}};

/***/ }),

/***/ "./src/assets/lang/et.json":
/*!*********************************!*\
  !*** ./src/assets/lang/et.json ***!
  \*********************************/
/*! exports provided: common, mainMenu, pageHeader, investors, form, notFound, accessDenied, settings, users, roles, commands, incentiverequest, incentiverequestitem, taxexemption, billofmaterrial, balalnce, region, zone, woreda, kebele, registration, registrationAddress, payment, sector, subbsector, invActivity, activity, lookupTypes, lookup, site, service, servicePrerequsite, servicestepper, servicesTariff, tariff, letterTemplate, default */
/***/ (function(module) {

module.exports = {"common":{"commands":{"Search":"ፈልግ","Add":"ጨምር","New":"አዲስ","Edit":"አርም","Save":"አስቀምጥ","Delete":"ሰርዝ","Remove":"አጥፋ","Show":"አሳይ","Next":"ቀጥል","Back":"ተመለስ","Refresh":"አድስ","Cancel":"ተው","Start":"ጀምር","Close":"ዝጋ","End":"ጨርስ","Stop":"አቁም","Approve":"አረጋግጥ","Select":"ምረጥ","Unselect":"አይመረጥ","Send":"ላክ","Exit":"ውጣ"},"validation":{"IsRequired":"{{fieldName}} ባዶ መሆን አይችልም","Required":"ይህ መረጃ ባዶ መሆን አይችልም! ","MinLengthChar":"ቢያንስ {{min}} ፊደላትን ያስገቡ","MaxLengthChar":"ከ {{max}} መብለጥ የለበትም","MinLengthNum":"ቢያንስ {{min}} አሃዞችን ያስገቡ","MaxLengthNum":"Can not exceed {{max}} digits","UseEthiopicOnly":"ኢትዮፒክ ፊደላትን ብቻ ይጠቀሙ","UseLatinOnly":"እንግሊዘኛ ፊደላትን ብቻ ይጠቀሙ","InvalidDate":"ትክክለኛ ቀን ያስገቡ","FutureDate":"ይህ ቀን ከዛሬ መብለጥ የለበትም","InvalidEmail":"ትክክለኛ ኢሜል ያስገቡ! ","NumberOnly":"ቁጥር ብቻ ያስገቡ!"},"messages":{"Saved":"መረጃው በትክክል ተቀምጧል","Deleted":"መረጃው በትክክል ተሰርዟል","Confirm":"እርግጠኛ ነዎት?","Error":"ችግር አጋጥሟል"}},"mainMenu":{"Home":"መግቢያ","Customers":"ደምበኞች","officer":"አፊሰር ","Services":"አገልግሎቶቼ","ServiceLookups":"አገልግሎት","Service":"አገልግሎቶቼ","Tariff":"ታሪፍ","Serviceprerequisite":"አገልግሎት መስፈርት","Servicetariff":"አገልግሎት ታሪፍ","Servicestepper":"አገልግሎት ደረጃ","Serviceappilcation":"አገልግሎት ማስጀመሪያ","Site":"ጣቢያ","Order":"ክፍያ ማዘዣ","setting":"ማስታካክያ","address":"አድራሻ","Category":"ዘርፍ","Other":"ሌላ","Sector":"ዋና ዘርፍ","SubSector":"ዘርፍ","Activity":"የስራ መስክ","InvActivity":"ፈቃድ መስጫ","Regions":"ክልል","Region":"ክልል","Zone":"ዞን","Woreda":"ክፍለ ከተማ/ወረዳ","Kebele":"ቀበሌ","Followup":"የአገልግሎት መከታተያ","About":"ስለ","Logout":"Logout","Login":"Login","Register":"Register","Account":"Account","UserAccount":"User Account","Profile":"Profile","Settings":"Settings","Admin":"Admin","Users":"Users","Roles":"Roles","Sites":"Sites","Lookups":"Lookups","Addresses":"Addresses","AuditTrail":"Audit Trail","Aftercare":"After Care","lookup":"","InvestorProfile":"My Profile","capitalRegistration":"Capital Registration","customerRegistration":"Customer Registration","changePassword":"Change Password","lettertemplate":"Letter Tempalte","commericalRegistration":"Commercial Registration"},"pageHeader":{"Dashboard":"Dashboard","Customers":"ደምበኞች","Customer":"ደምበኛ","NotFound":"Not Found","AccessDenied":"የተነፈገ ገፅ","About":"About","Settings":"Settings","Users":"User Management","Roles":"Role Management","Investors":"የኢንቨስተሮች ዝርዝር","Investor":"ኢንቨስተር","Confirm":"የምዝገባ ማስታወሻ","capitalRegistration":"Capital Registration","billOfMaterial":"bill Of Material","projectDetail":"Project Detail","customerRegistration":"Customer Registration","applicationList":"All Application List","businessLicense":"Business License Registration"},"investors":{"management":{"InvestorName":"የኢንቨስተሩ ስም"},"editor":{"LegalStatus":"ህጋዊ አቋም","FirstName":"ስም (በአማርኛ)","FatherName":"የአባት ስም (በአማርኛ)","GrandName":"የአያት ስም (በአማርኛ)","FirstNameEng":"ስም (በእንግሊዝኛ)","FatherNameEng":"የአባት ስም (በእንግሊዝኛ)","GrandNameEng":"የአያት ስም (በእንግሊዝኛ)","Nationality":"ዜግነት","BranchCountry":"የተቋቋመበት አገር","CompanyName":"የድርጅት ስም (በአማርኛ)","CompanyNameEng":"የድርጅት ስም (በእንግሊዝኛ)","Gender":"ፆታ","IsDiaspora":"ዳያስፖራ?","IsEthiopianOrigin":"ትውልደ ኢትዮጵያ?","Tin":"የግብር ከፋይ መለያ","OtherAddress":"ሌላ አድራሻ","RegNumber":"የምዝገባ ቁጥር","RegDate":"የምዝገባ ቀን","TradeNameEng":"የንግድ ስም (በእንግሊዝኛ)","TradeName":"የንግድ ስም (በአማርኛ)","Region":"ክልል","Zone":"ዞን/ከተማ","Woreda":"ወረዳ/ክፍለ ከተማ","Kebele":"ቀበሌ/ወረዳ","HouseNo":"የቤት ቁጥር","PhoneDirect":"ቴሌፎን (ቀጥታ)","PhoneMobile":"ቴሌፎን (ሞባይል)","Fax":"ፋክስ","Pobox":"ፓስታ ሳጥን ቁ","Email":"ኢሜል","InvestorProfileCaption":"የግል/የድርጅት መረጃ","AddressCaption":"አድራሻ","BusinessDataCaption":"የንግድ ምዝገባ መረጃ","PaidCapital":"የተከፈለ ካፒታል","SighnedCapital":"የተፈረመ ካፒታል","FormOfOwnership":"Form Of Ownership"}},"form":{"ErrorCaption":"Error in Form","ErrorMessage":"Please correct any errors and try again."},"notFound":{"404":"404","pageNotFound":"ይቅርታ፤ የጠየቁትን ገፅ ማግኘት አልተቻለም!","backToHome":"ወደ መነሻ ገፅ"},"accessDenied":{"403":"403","accessIsDenied":"ይቅርታ፤ ይህንን ገፅ የመጠቀም መብት አልተሰጠዎትም!","backToHome":"ወደ መነሻ ገፅ"},"settings":{"tab":{"Profile":"Profile","Preferences":"Preferences","Users":"Users","Roles":"Roles"},"description":{"UserProfile":"Edit your profile","UserPreferences":"Edit your preferences","UserDepartments":"User Departments","UsersManagement":"Manage all users","RolesManagement":"Manage user roles"}},"users":{"management":{"Search":"Search for user","NewUser":"New User","Edit":"Edit User","Delete":"Delete User","EditUser":"Edit User \"{{name}}\"","TIN":"ቲን","UserName":"User Name","FullName":"Full Name","Email":"Email","Roles":"Roles","PhoneNumber":"Phone Number"},"editor":{"TIN":"ቲን","TINRequired":"ቲን ባዶ መሆን አይችልም (10 አሃዝ)","UserName":"User Name","UserNameRequired":"User name is required (minimum of 2 and maximum of 200 characters)","Password":"Password","PasswordHint":"Your password is required when changing user name","CurrentPasswordRequired":"Current password is required","Email":"Email","EmailRequired":"Email address is required (maximum of 200 characters)","InvalidEmail":"Specified email is not valid","ChangePassword":"Change Password","CurrentPassword":"Current Password","NewPassword":"New Password","NewPasswordRequired":"New password is required","NewPasswordRules":"The new password must contain at least: one uppercase letter, one lowercase letter, one digit, and any special character","ConfirmPassword":"Confirm Password","ConfirmationPasswordRequired":"Confirmation password is required","PasswordMismatch":"New password and confirmation password do not match","Roles":"Roles","FullName":" Full Name","RoleRequired":" Role is required","PhoneNumber":"Phone Number","Enabled":"Enabled","Unblock":"Unblock","Close":"Close","Edit":"Edit","Cancel":"Cancel","Save":"Save","Saving":"Saving...","ExistingCustomer":"የኮሚሽኑ ነባር ደምበኛ ነኝ","SiteName":"Site Name"}},"roles":{"management":{"Search":"Search for role...","NewRole":"New Role","Edit":"Edit","Details":"Details","Delete":"Delete","RoleDetails":"Role Details \"{{name}}\"","EditRole":"Edit Role \"{{name}}\"","Name":"Name","Description":"Description","Users":"Users"},"editor":{"Name":"Name:","Description":"Description:","RoleNameRequired":"Role name is required (minimum of 2 and maximum of 200 characters)","SelectAll":"Select all","SelectNone":"Select none","Close":"Close","Cancel":"Cancel","Save":"Save","Saving":"Saving..."}},"commands":{"Edit":"Edit","Save":"Save","Cancel":"Cancel","Reset":"Reset","Reload":"Reload"},"incentiverequest":{"CustomsBranch":"ጉምሩክ ጣቢያ","IncentiveCategory":"የማበረታቻ አይነት","Quantity":"ብዛት","CurrencyType":"ገንዘብ አይነት","Amount":"መጠን","InvoiceNo":"ኢንቮይስ ቁጥር","Phase":"ዙር"},"incentiverequestitem":{"IncentiveItem":"የማበራታቻ እቃ አይነት","Description":"መግለጫ","MeasurementUnit":"መለኪያ","Quantity":"ብዛት","ApprovedQty":"የጸደቀ ብዛት","CurrencyType":"ገንዘብ አይነት","Amount":"መጠን"},"taxexemption":{"RevenueBranch":"የገቢዎች ቅርንጫፍ","ExemptionYear":"የእፎይታ ጊዜ"},"billofmaterrial":{"Phase":"ዙር","RejectionReason":"ውድቅ የተደረገበት ምክንያት","MesurmentUnit":"መለኪያ","Quantity":"ብዛት","HsCode":"ኤች ኤስ ኮድ","Description":"መግለጫ"},"balalnce":{"Phase":"ዙር","MesurmentUnit":"መለኪያ","Quantity":"ብዛት","HsCode":"ኤች ኤስ ኮድ","Description":"መግለጫ"},"region":{"Code":"ኮድ","Description":"መግለጫ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ","Header":"ክልል"},"zone":{"Region":"ክልል","Code":"ኮድ","Description":"መግለጫ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ","Header":"ዞን"},"woreda":{"Region":"ክልል","Zone":"ዞን","Code":"ኮድ","Description":"መግለጫ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ","Header":"ወረዳ"},"kebele":{"Region":"ክልል","Zone":"ዞን","Woreda":"ወረዳ","KebeleCode":"ቀበሌ ኮድ","Description":"መግለጫ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ","Header":"ቀበሌ"},"registration":{"management":{"RegistrationName":"የ ነጋዴው መረጃ"},"editor":{"LegalStatus":"ህጋዊ አቋም","CompanyNameAmharic":"የድርጅት ስም(በአማርኛ)","CompanyNameEnglish":"የድርጅት ስም(በእንግሊዝኛ)","CompanyNameRegional":"የድርጅት ስም(በክልል ቋንቋ)","IsWithForighner":"ከውጭ አገር ዜጋ ጋር?","EthiopiansShare":"የኢትዮጲያዊው ድርሻ","BudgetCatagory":"የበጀት ምድብ","RegistrationStatus":"ያለበት ሁኔታ","Tin":"የግብር ከፋይ መለያ","RegNumber":"የምዝገባ ቁጥር","RegDate":"የምዝገባ ቀን","PaidCapital":"የግብር ከፋይ መለያ","SighnedCapital":"የምዝገባ ቁጥር","SingleShareValue":"የምዝገባ ቀን","RepresentativeNameAmharic":"የወካይ ድርጅት ስም(በአማርኛ)","RepresentativeNameEnglish":"የወካይ ድርጅት ስም(በእንግሊዝኛ)","RepresentativeNameRegional":"የወካይ ድርጅት ስም(በክልል ቋንቋ)","RepresentativeManagerNameAmharic":"የድርጅቱ ሥራ አሥኪያጅ ሥም(በአማርኛ)","RepresentativeManagerNameEnglish":"የድርጅቱ ሥራ አሥኪያጅ ሥም(በእንግሊዝኛ)","RepresentativeManagerNameRegional":"የድርጅቱ ሥራ አሥኪያጅ ሥም(በክልል ቋንቋ)","MainOfficeAddressAmharic":"የውና መ/ቤት አድራሻ ከኢትዮጲያ ውጪ","MainOfficeAddressEnglish":"የውና መ/ቤት አድራሻ ከኢትዮጲያ ውጪ(በእንግሊዝኛ)","MainOfficeAddressRegional":"የውና መ/ቤት አድራሻ ከኢትዮጲያ ውጪ(በክልል ቋንቋ)","MainOfficeCountryNameAmharic":"የተቋቋመበት አገር","MainOfficeCountryNameEnglish":"የተቋቋመበት አገር(በእንግሊዝኛ)","MainOfficeCountryNameRegional":"የተቋቋመበት አገር(በክልል ቋንቋ)","CreatedDate":"የምዝገባ ቀን"}},"registrationAddress":{"management":{"RegistrationAddressName":"Address"},"editor":{"Region":"ክልል","Zone":"ዞን/ከተማ","Town":"ከተማ","Woreda":"ወረዳ/ክፍለ ከተማ","Kebele":"ቀበሌ/ወረዳ","HouseNo":"የቤት ቁጥር","PhoneDirect":"ቴሌፎን (ቀጥታ)","PhoneMobile":"ቴሌፎን (ሞባይል)","Fax":"ፋክስ","Pobox":"ፓስታ ሳጥን ቁ","Email":"ኢሜል","SpecificAreaName":"የአካባቢው ልዩ ","IsMainOffice":"ዋና መስሪያ ቤት"}},"payment":{"investorName":"ስም","paymentDate":"የክፍያ ቀን","no":"ተ.ቁ","paymentReason":"የክፍያ ምክንያት","receiptNo":"ደረሰኝ ቁጥር","amount":"የገንዘቡ መጠን","checkNo":"የቼክ ቁጥር","totalAmount":"ድምር","totalAmountdescription":"የገንዘቡ ልክ በፊደል","cashierName":"የገንዘብ ተቀባይ ስምና ፊርማ"},"sector":{"header":"ዘረፍ","Description":"መግለጫ","DescriptionAlias":"መግለጫ በአጭሩ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ","DescriptionEnglishAlias":"መግለጫ በእንግሊዘኛ በአጭሩ","EconomicSectorCode":"ኢኮኖሚክ ሴክተር ኮድ"},"subbsector":{"sector":"ዘረፍ","header":"ዋና ዘረፍ","Description":"መግለጫ","DescriptionAlias":"መግለጫ በአጭሩ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ","DescriptionEnglishAlias":"መግለጫ በእንግሊዘኛ በአጭሩ"},"invActivity":{"sector":"ዘረፍ","subsector":"ዋና ዘረፍ","activity":"መስክ","header":"ፍቃድ መስጫ መደብ","Description":"መግለጫ","DescriptionAlias":"መግለጫ በአጭሩ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ","DescriptionEnglishAlias":"መግለጫ በእንግሊዘኛ በአጭሩ","InAddisOromiaAreas":"አዲስ አበባና ኦሮሚያ ልዩ ዞን","InOtherAreas":"በሌሎች  አከባቢ"},"activity":{"sector":"ዘረፍ","subsector":"ዋና ዘረፍ","header":"መስክ","Description":"መግለጫ","DescriptionAlias":"መግለጫ በአጭሩ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ","DescriptionEnglishAlias":"መግለጫ በእንግሊዘኛ በአጭሩ"},"lookupTypes":{"Header":"ሉክአፕ አይነት","LookupType":"LookupType","Description":"መግለጫ","DescriptionEnglish":"መግለጫ በእንግሊዘኛ"},"lookup":{"Header":"ሉክአፕ","LookupType":"LookupType","LookupId":"Lookup Id","Amharic":"መግለጫ","English":"መግለጫ በእንግሊዘኛ"},"site":{"Header":"ጣቢያ","Amharic":"ስም","NameEnglish":"ስምበእንግሊዘኛ"},"service":{"Header":"አገልግሎት","Name":"ስም","ServiceType":"አገልግሎት አይነት","DisplayName":"ስም /ባጭሩ/","NameEnglish":"ስም በእንግሊዘኛ","DisplayNameEnglish":"ስምበእንግሊዘኛ/ማሳያ/"},"servicePrerequsite":{"Header":"መስፈርት","ServiceType":"አገልግሎት አይነት","Description":"ስም","DescriptionEnglish":"ስምበእንግሊዘኛ/ማሳያ/"},"servicestepper":{"Header":"የአገልግሎት ደረጃ","ServiceType":"አገልግሎት አይነት","NameAmharic":"ስም","NameEnglish":"ስምበእንግሊዘኛ/ማሳያ/"},"servicesTariff":{"Header":"የአገክግሎት ክፍያ","ServiceType":"አገልግሎት አይነት","TariffType":"የክፍያ አይነት"},"tariff":{"Header":"ክፍያ","AccountCode":"አካውንት ኮድ","TariffNameEnglish":"ስም በእንግሊዘኛ","Fee":"ክፍያ","IncrementalFee":"ተጨማሪ ክፍያ","Quantity":"ብዛት","TariffMode":"የክፍያ አይነት","TariffName":"ስም"},"letterTemplate":{"Header":"Letter Template","LetterType":"Letter Type"}};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'http://localhost:60330/',
    tokenUrl: 'http://localhost:60330/',
    loginUrl: 'http://localhost:60330/Login'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/yo/Desktop/Custor/OTRL/CUSTOR.OTRLS.Web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map