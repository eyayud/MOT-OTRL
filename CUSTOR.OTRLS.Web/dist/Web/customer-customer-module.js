(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/@custor/components/breadcrumb/breadcrumb.component.html":
/*!*********************************************************************!*\
  !*** ./src/@custor/components/breadcrumb/breadcrumb.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"breadcrumb p-2 mat-elevation-z2\" style=\"background-color: #e0e0e0\">\r\n    <a routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <mat-icon>home</mat-icon>\r\n        <span class=\"breadcrumb-title\">Home</span>\r\n    </a>\r\n    <div class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n         <span>{{title}}</span>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/@custor/components/breadcrumb/breadcrumb.component.scss":
/*!*********************************************************************!*\
  !*** ./src/@custor/components/breadcrumb/breadcrumb.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  font-size: 13px; }\n  .breadcrumb a {\n    text-decoration: none; }\n  .breadcrumb .mat-icon {\n    font-size: 20px;\n    height: 20px;\n    width: 20px;\n    padding: 0 6px; }\n  .breadcrumb .breadcrumb-title.active {\n    text-transform: uppercase;\n    font-weight: 500; }\n  .breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n    display: inline-block;\n    padding-right: .5rem;\n    padding-left: .5rem;\n    content: \"/\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvQGN1c3Rvci9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTtFQURuQjtJQUdRLHFCQUFxQixFQUFBO0VBSDdCO0lBTVEsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYyxFQUFBO0VBVHRCO0lBWVEseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFBO0VBYnhCO0lBZ0JRLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvQGN1c3Rvci9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1ie1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubWF0LWljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgIH1cclxuICAgIC5icmVhZGNydW1iLXRpdGxlLmFjdGl2ZXtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW06YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/@custor/components/breadcrumb/breadcrumb.component.ts":
/*!*******************************************************************!*\
  !*** ./src/@custor/components/breadcrumb/breadcrumb.component.ts ***!
  \*******************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BreadcrumbComponent.prototype, "title", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/@custor/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/@custor/components/breadcrumb/breadcrumb.component.scss")]
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/@custor/components/confirm-dialog/confirm-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/@custor/components/confirm-dialog/confirm-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"35\" style=\"margin: -25px; width:370px\">\n\n<!-- <div> -->\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row >\n    <span>Confirm</span> \n  </mat-toolbar-row>\n</mat-toolbar>\n<!-- <div style=\"width: 350px\"> -->\n\n  <!-- <h1 matDialogTitle style=\"color: steelblue;\">Confirm</h1> -->\n  <!-- <mat-divider style=\"margin-top:-20px\">\n  </mat-divider>\n  <br> -->\n  <div mat-dialog-content style=\"font-size: 14px;margin: 20px;\">{{confirmMessage}}</div>\n   \n  <div mat-dialog-actions style=\"margin-left: 70px\">\n    <button mat-raised-button class=\"mat-primary mr-16\" (click)=\"dialogRef.close(true)\">Yes</button>\n    <button mat-raised-button (click)=\"dialogRef.close(false)\">Cancel</button>\n  </div>\n<!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./src/@custor/components/confirm-dialog/confirm-dialog.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/@custor/components/confirm-dialog/confirm-dialog.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvQGN1c3Rvci9jb21wb25lbnRzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/@custor/components/confirm-dialog/confirm-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: AngConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngConfirmDialogComponent", function() { return AngConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AngConfirmDialogComponent = /** @class */ (function () {
    function AngConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AngConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], AngConfirmDialogComponent);
    return AngConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/@custor/components/confirm-dialog/confirm-dialog.module.ts":
/*!************************************************************************!*\
  !*** ./src/@custor/components/confirm-dialog/confirm-dialog.module.ts ***!
  \************************************************************************/
/*! exports provided: AngConfirmDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngConfirmDialogModule", function() { return AngConfirmDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");




var AngConfirmDialogModule = /** @class */ (function () {
    function AngConfirmDialogModule() {
    }
    AngConfirmDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AngConfirmDialogComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                // MatDividerModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]
            ],
            entryComponents: [
                _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AngConfirmDialogComponent"]
            ],
        })
    ], AngConfirmDialogModule);
    return AngConfirmDialogModule;
}());



/***/ }),

/***/ "./src/@custor/helpers/compare.ts":
/*!****************************************!*\
  !*** ./src/@custor/helpers/compare.ts ***!
  \****************************************/
/*! exports provided: determineId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineId", function() { return determineId; });
function determineId(id) {
    if (id.constructor.name === 'array' && id.length > 0) {
        return '' + id[0];
    }
    return '' + id;
}


/***/ }),

/***/ "./src/app/common/constants/consts.ts":
/*!********************************************!*\
  !*** ./src/app/common/constants/consts.ts ***!
  \********************************************/
/*! exports provided: MARITAL_STATUSES, GENDERS, TITLES, LEGAL_STATUSES, STATUS, SOLE_PROPRIETERSHIP_CODE, ETHIOPIA_CODE, ALPHABET_WITHSPACE_REGEX, ALPHABET_REGEX, NUMERIC_WITHPERIOD_REGEX, NUMERIC_REGEX, ET_ALPHABET_WITHSPACE_REGEX, ET_ALPHABET_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARITAL_STATUSES", function() { return MARITAL_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENDERS", function() { return GENDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLES", function() { return TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEGAL_STATUSES", function() { return LEGAL_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLE_PROPRIETERSHIP_CODE", function() { return SOLE_PROPRIETERSHIP_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETHIOPIA_CODE", function() { return ETHIOPIA_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHABET_WITHSPACE_REGEX", function() { return ALPHABET_WITHSPACE_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHABET_REGEX", function() { return ALPHABET_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_WITHPERIOD_REGEX", function() { return NUMERIC_WITHPERIOD_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMERIC_REGEX", function() { return NUMERIC_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ET_ALPHABET_WITHSPACE_REGEX", function() { return ET_ALPHABET_WITHSPACE_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ET_ALPHABET_REGEX", function() { return ET_ALPHABET_REGEX; });
var MARITAL_STATUSES = [
    { Id: '1', Description: 'ያላገባ', DescriptionEnglish: 'Single' },
    { Id: '2', Description: 'ያገባ', DescriptionEnglish: 'Married' },
    { Id: '3', Description: 'የፈታ', DescriptionEnglish: 'Divorced' }
];
var GENDERS = [
    { Id: '1', Description: 'ወንድ', DescriptionEnglish: 'Male' },
    { Id: '2', Description: 'ሴት', DescriptionEnglish: 'Female' }
];
var TITLES = [
    { Id: '1', Description: 'አቶ', DescriptionEnglish: 'Mr' },
    { Id: '2', Description: 'ወ/ሮ', DescriptionEnglish: 'Mrs' },
    { Id: '3', Description: 'ወ/ሪት', DescriptionEnglish: 'Miss' },
    { Id: '4', Description: 'ዶ/ር', DescriptionEnglish: 'Dr' }
];
var LEGAL_STATUSES = [
    { Id: '1', Description: 'ግለሰብ', DescriptionEnglish: 'Sole Proprietorship' },
    { Id: '2', Description: 'ኃላፊነቱ የተወሰነ የግል ኩባንያ', DescriptionEnglish: 'Private Limited Company' },
    { Id: '3', Description: 'የአክስዮን ማህበር', DescriptionEnglish: 'Share Company' },
    { Id: '4', Description: 'የመንግስት ተቋም', DescriptionEnglish: 'Public Enterprise' },
    { Id: '5', Description: 'የስራ ማህበራት', DescriptionEnglish: 'Cooperative Society' }
];
var STATUS = [
    { Id: '0', Description: 'በስራ ላይ', DescriptionEnglish: 'Active' },
    { Id: '1', Description: 'የተዘጋ', DescriptionEnglish: 'Closed' }
];
var SOLE_PROPRIETERSHIP_CODE = '1';
var ETHIOPIA_CODE = 1;
var ALPHABET_WITHSPACE_REGEX = new RegExp(/^[a-zA-Z ]+$/);
var ALPHABET_REGEX = new RegExp(/^[a-zA-Z]+$/);
var NUMERIC_WITHPERIOD_REGEX = new RegExp(/^[0-9.]+$/);
var NUMERIC_REGEX = new RegExp(/^[0-9]+$/);
var ET_ALPHABET_WITHSPACE_REGEX = new RegExp(/^([ \u1200-\u137F])+$/);
var ET_ALPHABET_REGEX = new RegExp(/^([ \u1200-\u137F \u0008])+$/);



/***/ }),

/***/ "./src/app/common/models/lookup.model.ts":
/*!***********************************************!*\
  !*** ./src/app/common/models/lookup.model.ts ***!
  \***********************************************/
/*! exports provided: Lookup, LookupType, MaritalStatus, Gender, LegalStatus, Quantity, TariffMode, BusinessType, SectorType, CurrencyType, ProjectStatusModel, ProjectStageModel, ApplicationStatusModel, QuarterModel, UnitType, RegistrationStatus, Decisions, Services, ServiceType, CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lookup", function() { return Lookup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupType", function() { return LookupType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaritalStatus", function() { return MaritalStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalStatus", function() { return LegalStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return Quantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TariffMode", function() { return TariffMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessType", function() { return BusinessType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectorType", function() { return SectorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyType", function() { return CurrencyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStatusModel", function() { return ProjectStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStageModel", function() { return ProjectStageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationStatusModel", function() { return ApplicationStatusModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuarterModel", function() { return QuarterModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitType", function() { return UnitType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationStatus", function() { return RegistrationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decisions", function() { return Decisions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Lookup = /** @class */ (function () {
    function Lookup() {
    }
    Lookup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Lookup);
    return Lookup;
}());

var LookupType = /** @class */ (function () {
    function LookupType() {
    }
    LookupType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LookupType);
    return LookupType;
}());

var MaritalStatus = /** @class */ (function () {
    function MaritalStatus() {
    }
    MaritalStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MaritalStatus);
    return MaritalStatus;
}());

var Gender = /** @class */ (function () {
    function Gender() {
    }
    Gender = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Gender);
    return Gender;
}());

var LegalStatus = /** @class */ (function () {
    function LegalStatus() {
    }
    LegalStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LegalStatus);
    return LegalStatus;
}());

var Quantity = /** @class */ (function () {
    function Quantity() {
    }
    Quantity = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Quantity);
    return Quantity;
}());

var TariffMode = /** @class */ (function () {
    function TariffMode() {
    }
    TariffMode = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TariffMode);
    return TariffMode;
}());

var BusinessType = /** @class */ (function () {
    function BusinessType() {
    }
    BusinessType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BusinessType);
    return BusinessType;
}());

var SectorType = /** @class */ (function () {
    function SectorType() {
    }
    SectorType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SectorType);
    return SectorType;
}());

var CurrencyType = /** @class */ (function () {
    function CurrencyType() {
    }
    CurrencyType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CurrencyType);
    return CurrencyType;
}());

var ProjectStatusModel = /** @class */ (function () {
    function ProjectStatusModel() {
    }
    ProjectStatusModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectStatusModel);
    return ProjectStatusModel;
}());

var ProjectStageModel = /** @class */ (function () {
    function ProjectStageModel() {
    }
    ProjectStageModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectStageModel);
    return ProjectStageModel;
}());

var ApplicationStatusModel = /** @class */ (function () {
    function ApplicationStatusModel() {
    }
    ApplicationStatusModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApplicationStatusModel);
    return ApplicationStatusModel;
}());

var QuarterModel = /** @class */ (function () {
    function QuarterModel() {
    }
    QuarterModel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], QuarterModel);
    return QuarterModel;
}());

var UnitType = /** @class */ (function () {
    function UnitType() {
    }
    UnitType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UnitType);
    return UnitType;
}());

var RegistrationStatus = /** @class */ (function () {
    function RegistrationStatus() {
    }
    RegistrationStatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RegistrationStatus);
    return RegistrationStatus;
}());

var Decisions = /** @class */ (function () {
    function Decisions() {
    }
    Decisions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Decisions);
    return Decisions;
}());

var Services = /** @class */ (function () {
    function Services() {
    }
    Services = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Services);
    return Services;
}());

var ServiceType = /** @class */ (function () {
    function ServiceType() {
    }
    ServiceType = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ServiceType);
    return ServiceType;
}());

var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/common/models/static-data.model.ts":
/*!****************************************************!*\
  !*** ./src/app/common/models/static-data.model.ts ***!
  \****************************************************/
/*! exports provided: StaticData, StaticData2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticData", function() { return StaticData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticData2", function() { return StaticData2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StaticData = /** @class */ (function () {
    function StaticData() {
    }
    StaticData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StaticData);
    return StaticData;
}());

// For lookups that have ParentId and string Key
var StaticData2 = /** @class */ (function () {
    function StaticData2() {
    }
    StaticData2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StaticData2);
    return StaticData2;
}());



/***/ }),

/***/ "./src/app/common/services/address.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/services/address.service.ts ***!
  \****************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/services/security/endpoint-factory.service */ "./src/@custor/services/security/endpoint-factory.service.ts");







var AddressService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddressService, _super);
    function AddressService(httpClient, config, injector) {
        var _this = _super.call(this, httpClient, config, injector) || this;
        _this.httpClient = httpClient;
        _this.config = config;
        // private readonly _lookupsUrl: string = 'api/Lookups';
        _this._regionsUrl = 'api/Region';
        _this._zonesUrl = 'api/Zone';
        _this._woredasUrl = 'api/Woreda';
        _this._kebelesUrl = 'api/Kebele';
        return _this;
    }
    AddressService.prototype.ngOnInit = function () {
        // this.lang = 'et';
        this.lang = this.config.language;
    };
    AddressService.prototype.getRegionsByLang = function (lang) {
        var _this = this;
        var endpointUrl = this.regionsUrl + "/" + lang;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (regionList) { return _this.regList = regionList; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err || 'Server error'); }));
    };
    AddressService.prototype.getAllZonesByLang = function (lang) {
        var _this = this;
        var endpointUrl = this.zonesUrl + "/" + lang;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (zoneList) { return _this.allZoneList = zoneList; }));
    };
    AddressService.prototype.getZones = function (id) {
        var _this = this;
        var endpointUrl = this.zonesUrl + "/" + this.lang + "/" + id;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (zoneList) { return _this.zoneList = zoneList; }));
    };
    AddressService.prototype.getWoredas = function (id) {
        var _this = this;
        var endpointUrl = this.woredasUrl + "/" + this.lang + "/" + id;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (woredaList) { return _this.woredaList = woredaList; }));
    };
    AddressService.prototype.getAllWoredasByLang = function (lang) {
        var _this = this;
        var endpointUrl = this.woredasUrl + "/" + lang;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (woredaList) { return _this.allWoredaList = woredaList; }));
    };
    AddressService.prototype.getKebeles = function (id) {
        var _this = this;
        var endpointUrl = this.kebelesUrl + "/" + id;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (kebeleList) { return _this.kebeleList = kebeleList; }));
    };
    AddressService.prototype.getAllKebelesByLang = function (lang) {
        var _this = this;
        var endpointUrl = this.kebelesUrl + "/" + lang;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (kebeleList) { return _this.kebeleList = kebeleList; }));
    };
    AddressService.prototype.getKebelesByWoreda = function (lang, id) {
        var _this = this;
        var endpointUrl = this.kebelesUrl + "/" + lang + "/" + id;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (kebeleList) { return _this.kebeleList = kebeleList; }));
    };
    AddressService.prototype.getAllKebeles = function () {
        var _this = this;
        var endpointUrl = this.kebelesUrl + "/" + this.lang;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (kebeleList) { return _this.allKebeleList = kebeleList; }));
    };
    Object.defineProperty(AddressService.prototype, "regionsUrl", {
        // URLS
        get: function () { return this.config.baseUrl + this._regionsUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressService.prototype, "zonesUrl", {
        get: function () { return this.config.baseUrl + this._zonesUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressService.prototype, "woredasUrl", {
        get: function () { return this.config.baseUrl + this._woredasUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressService.prototype, "kebelesUrl", {
        get: function () { return this.config.baseUrl + this._kebelesUrl; },
        enumerable: true,
        configurable: true
    });
    AddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
    ], AddressService);
    return AddressService;
}(_custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_6__["EndpointFactory"]));



/***/ }),

/***/ "./src/app/common/services/look-up.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/services/look-up.service.ts ***!
  \****************************************************/
/*! exports provided: LookUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookUpService", function() { return LookUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/security/endpoint-factory.service */ "./src/@custor/services/security/endpoint-factory.service.ts");






var LookUpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LookUpService, _super);
    function LookUpService(httpClient, config, injector) {
        var _this = _super.call(this, httpClient, config, injector) || this;
        _this.httpClient = httpClient;
        _this.config = config;
        _this._lookupByParentUrl = 'api/Lookup';
        return _this;
    }
    Object.defineProperty(LookUpService.prototype, "lookupByParentUrl", {
        get: function () { return this.config.baseUrl + this._lookupByParentUrl; },
        enumerable: true,
        configurable: true
    });
    LookUpService.prototype.getLookupByParentId = function (lang, id) {
        var endpointUrl = this.lookupByParentUrl + "/" + lang + "/" + id;
        console.log(endpointUrl);
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result;
        }));
    };
    LookUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], LookUpService);
    return LookUpService;
}(_custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_5__["EndpointFactory"]));



/***/ }),

/***/ "./src/app/main/customer/customer.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/customer/customer.module.ts ***!
  \**************************************************/
/*! exports provided: routes, CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@custor/modules/shared.module */ "./src/@custor/modules/shared.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/main/customer/manager/manager.component.ts");
/* harmony import */ var _manager_list_manager_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manager-list/manager-list.component */ "./src/app/main/customer/manager-list/manager-list.component.ts");
/* harmony import */ var _common_services_look_up_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/services/look-up.service */ "./src/app/common/services/look-up.service.ts");
/* harmony import */ var _common_services_address_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/services/address.service */ "./src/app/common/services/address.service.ts");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/manager.service */ "./src/app/main/customer/services/manager.service.ts");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.module */ "./src/@custor/components/confirm-dialog/confirm-dialog.module.ts");
/* harmony import */ var _custor_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @custor/components/breadcrumb/breadcrumb.component */ "./src/@custor/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/main/customer/profile/profile.component.ts");











// import {BusinessComponent} from './business/business.component';
// import {BusinessListComponent} from './business-list/Business-list.component';






var routes = [
    { path: '', redirectTo: 'manager-list', pathMatch: 'full' },
    { path: 'manager-list', component: _manager_list_manager_list_component__WEBPACK_IMPORTED_MODULE_10__["ManagerListComponent"] },
    { path: 'manager/:id', component: _manager_manager_component__WEBPACK_IMPORTED_MODULE_9__["ManagerComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"] },
];
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _manager_manager_component__WEBPACK_IMPORTED_MODULE_9__["ManagerComponent"],
                _manager_list_manager_list_component__WEBPACK_IMPORTED_MODULE_10__["ManagerListComponent"],
                _custor_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"]
                // BusinessComponent,
                // BusinessListComponent
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _custor_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useClass: _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__["TranslateLanguageLoader"]
                    }
                }),
                _custor_components_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_14__["AngConfirmDialogModule"]
            ],
            providers: [_custor_services_translation_service__WEBPACK_IMPORTED_MODULE_8__["AppTranslationService"], _common_services_look_up_service__WEBPACK_IMPORTED_MODULE_11__["LookUpService"], _common_services_address_service__WEBPACK_IMPORTED_MODULE_12__["AddressService"], _services_manager_service__WEBPACK_IMPORTED_MODULE_13__["ManagerService"]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "./src/app/main/customer/manager-list/manager-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/customer/manager-list/manager-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [title]=\"'Manager List'\"></app-breadcrumb>\n<div class=\"mat-elevation-z8\"  style=\"margin: 20px; width: 60%\">\n <mat-card >\n\n  <mat-card-content>\n\n    <!-- <mat-progress-bar *ngIf=\"loadingIndicator\" mode=\"query\"></mat-progress-bar> -->\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loadingIndicator\"></mat-progress-bar>\n    <mat-table #table [dataSource]=\"dataSource\" >\n\n      <ng-container matColumnDef=\"FullNameEng\">\n        <mat-header-cell *matHeaderCellDef>Full Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let managers\">\n          {{managers?.FullNameEng}}\n        </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"FullName\">\n        <mat-header-cell *matHeaderCellDef>ሙሉ ስም</mat-header-cell>\n        <mat-cell *matCellDef=\"let managers\">\n          {{managers?.FullName}}\n        </mat-cell>\n      </ng-container>\n \n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef fxFlex=\"25%\">\n          <button mat-button color=\"primary\" (click)=\"editManager()\">\n            <mat-icon style=\"margin-top: -5px\" class=\"mat-8\">add</mat-icon>\n           {{'common.commands.Add' | translate}}  \n          </button>\n        </mat-header-cell>\n        <mat-header-cell *matHeaderCellDef fxFlex=\"28%\">\n        </mat-header-cell>\n        <mat-cell mat-dialog-actions *matCellDef=\"let manager\" fxFlex=\"38%\">\n          <button mat-icon-button matTooltip = \"Edit\"  (click)=\"editManager(manager)\">\n            <mat-icon class=\"mat-12\" color=\"primary\">edit</mat-icon>\n            <span >Edit</span>\n          </button>\n          <span style=\"width: 20px\"></span>\n          <button mat-icon-button matTooltip=\"Delete\" (click)=\"confirmDelete(manager)\">\n            <mat-icon class=\"mat-12\" color=\"warn\">delete</mat-icon>\n            <span>Delete</span>\n          </button>\n          \n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\">\n      </mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n  </mat-card-content>\n</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/main/customer/manager-list/manager-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/customer/manager-list/manager-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: block;\n  position: relative;\n  padding: 0px !important;\n  border-radius: 2px; }\n\nspan {\n  font-size: 12px;\n  color: steelblue;\n  background-color: transparent;\n  display: inline-block;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL21haW4vY3VzdG9tZXIvbWFuYWdlci1saXN0L21hbmFnZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlEQUF1RDtFQUN2RCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jdXN0b21lci9tYW5hZ2VyLWxpc3QvbWFuYWdlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1hdC1jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcclxuICB9XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/main/customer/manager-list/manager-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/customer/manager-list/manager-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManagerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerListComponent", function() { return ManagerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @custor/components/confirm-dialog/confirm-dialog.component */ "./src/@custor/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/main/customer/services/manager.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");










var ManagerListComponent = /** @class */ (function () {
    function ManagerListComponent(managerService, toastr, translationService, dialog, router, configService, route) {
        this.managerService = managerService;
        this.toastr = toastr;
        this.translationService = translationService;
        this.dialog = dialog;
        this.router = router;
        this.configService = configService;
        this.route = route;
        this.displayedColumns = ['FullName', 'FullNameEng', 'actions'];
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.translationService.changeLanguage(this.configService.language);
    }
    ManagerListComponent.prototype.ngOnInit = function () {
        this.getManagersByCustomerId();
    };
    ManagerListComponent.prototype.getManagersByCustomerId = function () {
        var _this = this;
        var customerId = 1; // hard-coded for now
        this.loadingIndicator = true;
        this.managerService.getManagers(customerId)
            .subscribe(function (result) {
            console.log(result);
            _this.managers = result;
            if (!_this.managers) {
                _this.toastr.error('No records were found to list', 'Error', {
                    closeButton: true,
                });
            }
            else {
                _this.dataSource.data = _this.managers;
            }
        }, function (error) {
            _this.toastr.error("Error: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error) + "\"");
        });
        this.loadingIndicator = false;
    };
    ManagerListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ManagerListComponent.prototype.editManager = function (manager) {
        if (manager) {
            this.router.navigate(['/main/customer/manager/', manager.ManagerId], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['/main/customer/manager', 0]);
        }
    };
    ManagerListComponent.prototype.confirmDelete = function (manager) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_custor_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AngConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            _this.loadingIndicator = true;
            if (result) {
                _this.managerService.deleteManager(manager.ManagerId)
                    .subscribe(function (results) {
                    _this.loadingIndicator = false;
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== manager; });
                }, function (error) {
                    // tslint:disable-next-line:max-line-length
                    _this.toastr.error("An error occured whilst deleting the manager.\r\nError: \"" + _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getHttpResponseMessage(error) + "\"", 'Delete Error');
                });
            }
            _this.loadingIndicator = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ManagerListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ManagerListComponent.prototype, "sort", void 0);
    ManagerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager-list',
            template: __webpack_require__(/*! ./manager-list.component.html */ "./src/app/main/customer/manager-list/manager-list.component.html"),
            styles: [__webpack_require__(/*! ./manager-list.component.scss */ "./src/app/main/customer/manager-list/manager-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manager_service__WEBPACK_IMPORTED_MODULE_8__["ManagerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_5__["AppTranslationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_9__["ConfigurationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ManagerListComponent);
    return ManagerListComponent;
}());



/***/ }),

/***/ "./src/app/main/customer/manager/manager.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/customer/manager/manager.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [title]=\"'Manager'\" ></app-breadcrumb>\n<div class=\"page-content mat-elevation-z8\">\n  <div class=\"error-bar\" style=\"width:100%; \" *ngIf=\"errors.length > 0\">\n    <ul>\n      <li *ngFor=\"let error of errors\">\n        {{ error }}\n      </li>\n    </ul>\n  </div>\n  <form #form=\"ngForm\" [formGroup]=\"managerForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" autocomplete=\"off\">\n    <div style=\"margin: 10px\">\n      <table style=\"border: 0px; width: 650px;\">\n        <tr style=\"margin-left: 20px\">\n          <td>\n            <h4 class=\"primary-color\">{{'investors.editor.MangerProfile' | translate}}</h4>\n            <mat-divider></mat-divider>\n            <div id=\"divSole\">\n\n              <div>\n                <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\n                  <mat-form-field fxFlex>\n                    <mat-label>{{'investors.editor.FirstNameEng' | translate}}</mat-label>\n                    <input matInput formControlName=\"cFirstNameEng\" required/>\n                    <mat-error *ngIf=\"firstNameEng.hasError('required')\">\n                      {{'common.validation.Required' | translate}}\n                    </mat-error>\n                    <mat-error *ngIf=\"firstNameEng.hasError('minlength')\">\n                      {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n                    </mat-error>\n                    <mat-error *ngIf=\"!firstNameEng.hasError('required') && !firstNameEng.hasError('minlength')\n                                                  && firstNameEng.hasError('pattern')\">\n                      {{'common.validation.UseLatinOnly' | translate}}\n                    </mat-error>\n                  </mat-form-field>\n                  <mat-form-field fxFlex>\n                    <mat-label>{{'investors.editor.FatherNameEng' | translate}}</mat-label>\n                    <input matInput formControlName=\"cFatherNameEng\" required/>\n                    <mat-error *ngIf=\"fatherNameEng.hasError('required')\">\n                      {{'common.validation.Required' | translate}}\n                    </mat-error>\n                    <mat-error *ngIf=\"!fatherNameEng.hasError('required') && fatherNameEng.hasError('minlength')\">\n                      {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n                    </mat-error>\n                    <mat-error *ngIf=\"!fatherNameEng.hasError('required') && !fatherNameEng.hasError('minlength')\n                                                      && firstNameEng.hasError('pattern')\">\n                      {{'common.validation.UseLatinOnly' | translate}}\n                    </mat-error>\n                  </mat-form-field>\n                  <mat-form-field fxFlex>\n                    <mat-label>{{'investors.editor.GrandNameEng' | translate}}</mat-label>\n                    <input matInput formControlName=\"cGrandNameEng\" required/>\n                    <mat-error *ngIf=\"grandNameEng.hasError('required')\"> \n                    {{'common.validation.Required' | translate}}\n                    </mat-error>\n                    <mat-error *ngIf=\"grandNameEng.hasError('minlength')\">\n                      {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n                    </mat-error>\n                  </mat-form-field>\n                  <mat-error *ngIf=\"grandNameEng.hasError('pattern')\">\n                    {{'common.validation.UseLatinOnly' | translate}}\n                  </mat-error>\n                </div>\n              </div>\n              <div>\n                <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\n                  <mat-form-field fxFlex>\n                    <mat-label>{{'investors.editor.FirstName' | translate}}</mat-label>\n                    <input matInput formControlName=\"cFirstName\" required/>\n                    <mat-error *ngIf=\"firstName.hasError('required')\">\n                    {{'common.validation.Required' | translate}}\n                    </mat-error>\n                    <mat-error *ngIf=\"!firstName.hasError('required') && firstName.hasError('minlength')\">\n                      {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n                    </mat-error>\n                    <mat-error *ngIf=\"!firstName.hasError('required') && !firstName.hasError('minlength')\n                                                && firstName.hasError('pattern')\">\n                      {{'common.validation.UseEthiopicOnly' | translate}}\n                    </mat-error>\n                  </mat-form-field>\n\n                  <mat-form-field fxFlex>\n                    <mat-label>{{'investors.editor.FatherName' | translate}}</mat-label>\n                    <input matInput formControlName=\"cFatherName\" required/>\n                    <mat-error *ngIf=\"fatherName.hasError('required')\">\n                    {{'common.validation.Required' | translate}}\n                    </mat-error>\n                    <mat-error *ngIf=\"!fatherName.hasError('required') && fatherName.hasError('minlength')\">\n                      {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n                    </mat-error>\n                    <mat-error *ngIf=\"!fatherName.hasError('required') && !fatherName.hasError('minlength')\n                                                    && fatherName.hasError('pattern')\">\n                          {{'common.validation.UseEthiopicOnly' | translate}}\n                    </mat-error>\n                  </mat-form-field>\n\n                  <mat-form-field fxFlex>\n                    <mat-label>{{'investors.editor.GrandName' | translate}}</mat-label>\n                    <input matInput formControlName=\"cGrandName\" required/>\n                    <mat-error *ngIf=\"!grandName.hasError('required') && grandName.hasError('minlength')\">\n                      {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n                    </mat-error>\n                    <mat-error *ngIf=\"!grandName.hasError('required') && !grandName.hasError('minlength')\n                                                    && grandName.hasError('pattern')\">\n                          {{'common.validation.UseEthiopicOnly' | translate}}\n                    </mat-error>\n                  </mat-form-field>\n\n                </div>\n              </div>\n\n              <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\n                <mat-form-field fxLayoutGap=\"4em\" class=\"col4\">\n                  <mat-label>{{'investors.editor.Title' | translate}}</mat-label>\n                  <mat-select formControlName=\"Title\" [compareWith]=\"compareIds\">\n                    <mat-option *ngFor=\"let title of titleList\" [value]=\"title.Id\">\n                      {{title.Description}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n\n                <mat-form-field fxLayoutGap=\"4em\" class=\"col4\">\n                  <mat-label>{{'investors.editor.Gender' | translate}}</mat-label>\n                  <mat-select formControlName=\"cGender\" required>\n\n                    <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.Id\">\n                      {{gender.Description}}\n                    </mat-option>\n                  </mat-select>\n                  <!-- <mat-error *ngIf=\"gender.hasError('required')\">\n                    {{'common.validation.Required' | translate}}\n                  </mat-error> -->\n                </mat-form-field>\n                <mat-form-field fxLayoutGap=\"4em\">\n                  <mat-label>{{'investors.editor.Nationality' | translate}}</mat-label>\n                  <mat-select formControlName=\"cNationality\" [compareWith]=\"compareIds\">\n                    <mat-option *ngFor=\"let country of countryList\" [value]=\"country.Id\">\n                      <span>{{country.Description}}</span>\n                    </mat-option>\n                  </mat-select>\n                  <!-- <mat-error *ngIf=\"nationality.hasError('required')\">\n                    {{'common.validation.Required' | translate}}\n                  </mat-error> -->\n                </mat-form-field>\n              </div>\n            </div>\n          </td>\n          <td>\n            <div id=\"divPhoto\" style=\"width: 150px; height: 150px; border:1px dotted gray; margin-top: 20px\">\n              <img [attr.src]='imgPhoto' alt=\"\"/>\n              <!-- <input type=\"file\" accept=\"image/*\"  class=\"inputfile\"  required (change)=\"fileChange(input)\" #input /> -->\n              <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"fileChange(input)\" #input/>\n\n            </div>\n            <label class=\"pickerLabel\" for=\"file\">Pick a Photo</label>\n          </td>\n        </tr>\n      </table>\n\n      <h4 class=\"primary-color\">{{'investors.editor.MangerAddress' | translate}}</h4>\n      <mat-divider></mat-divider>\n      <div formGroupName=\"address\">\n        <div id=\"divAddress\">\n          <div id=\"divAddress1\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.Region' | translate}}</mat-label>\n              <mat-select formControlName=\"RegionId\" (selectionChange)=\"filterRegion($event.value)\"\n                          required>\n                <mat-option *ngFor=\"let reg of regions\" [value]=\"reg.Id\">\n                  <span>{{reg.Description}}</span>\n                </mat-option>\n              </mat-select>\n              <!-- <mat-error *ngIf=\"region.hasError('required')\">\n                  {{'common.validation.Required' | translate}}\n              </mat-error> -->\n            </mat-form-field>\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.Zone' | translate}}</mat-label>\n              <mat-select formControlName=\"ZoneId\" (selectionChange)=\"filterZone($event.value)\">\n                <!-- <option value=\"0\">--</option> -->\n                <!-- <mat-option value=\"0\">--</mat-option> -->\n                <mat-option *ngFor=\"let zone of filteredZones\" [value]=\"zone.Id\">\n                  <span>{{zone.Description}}</span>\n                </mat-option>\n              </mat-select>\n\n              <!-- <mat-error *ngIf=\"zone.hasError('required')\">\n              {{'common.validation.Required' | translate}}\n              </mat-error> -->\n            </mat-form-field>\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.Woreda' | translate}}</mat-label>\n              <mat-select formControlName=\"WoredaId\" (selectionChange)=\"filterWoreda($event.value)\">\n                <!-- <option value=\"0\">--</option> -->\n                <mat-option *ngFor=\"let w of filteredWoredas\" [value]=\"w.Id\">\n                  <span>{{w.Description}}</span>\n                </mat-option>\n              </mat-select>\n\n              <!-- <mat-error *ngIf=\"woreda.hasError('required')\">\n              {{'common.validation.Required' | translate}} \n              </mat-error> -->\n            </mat-form-field>\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.Kebele' | translate}}</mat-label>\n              <mat-select formControlName=\"KebeleId\">\n                <!-- <mat-option value=\"0\">--</mat-option> -->\n                <mat-option *ngFor=\"let keb of filteredKebeles\" [value]=\"keb.Id\">\n                  <span>{{keb.Description}}</span>\n                </mat-option>\n              </mat-select>\n\n              <!--<mat-error *ngIf=\"kebele.hasError('required')\">-->\n              <!--{{'common.validation.Required' | translate}}-->\n              <!--</mat-error>-->\n            </mat-form-field>\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.HouseNo' | translate}}</mat-label>\n              <input matInput formControlName=\"HouseNo\"/>\n\n              <!--<mat-error *ngIf=\"houseNo.hasError('required')\">-->\n              <!--{{'common.validation.Required' | translate}}-->\n              <!--</mat-error>-->\n            </mat-form-field>\n          </div>\n          <div id=\"divAddress2\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.Email' | translate}}</mat-label>\n              <input matInput formControlName=\"Email\"/>\n              <!--<mat-error *ngIf=\"email.hasError('required')\">-->\n              <!--{{'common.validation.Required' | translate}}-->\n              <!--</mat-error>-->\n              <!-- <mat-error *ngIf=\"!email.hasError('required') && email.hasError('email')\">\n              {{'common.validation.InvalidEmail' | translate}}\n              </mat-error> -->\n            </mat-form-field>\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.PhoneDirect' | translate}}</mat-label>\n              <input matInput formControlName=\"TeleNo\"/>\n            </mat-form-field>\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.PhoneMobile' | translate}}</mat-label>\n              <input matInput formControlName=\"CellPhoneNo\"/>\n            </mat-form-field>\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.Fax' | translate}}</mat-label>\n              <input matInput formControlName=\"Fax\"/>\n            </mat-form-field>\n            <mat-form-field fxLayoutGap=\"4em\">\n              <mat-label>{{'investors.editor.Pobox' | translate}}</mat-label>\n              <input matInput formControlName=\"Pobox\"/>\n            </mat-form-field>\n            <div></div>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"2em\" class=\"row\">\n          <mat-form-field [fxFlex]=\"128\">\n            <mat-label>{{'investors.editor.OtherAddress' | translate}}</mat-label>\n            <input matInput formControlName=\"OtherAddress\" width=\"800px\"/>\n          </mat-form-field>\n        </div>\n\n      </div>\n      <!-- <mat-divider></mat-divider> -->\n\n      <div mat-dialog-actions style=\"margin: auto; text-align: center\">\n        <button mat-raised-button type=\"submit\" color=\"primary\" style=\"margin-right: 10px\">\n          {{'common.commands.Save' | translate}}\n        </button>\n        <button mat-raised-button (click)=\"onBack()\" color=\"warn\" type=\"button\">\n          {{'common.commands.Cancel' | translate}}\n        </button>\n      </div>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/customer/manager/manager.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/customer/manager/manager.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content {\n  width: 900px;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  margin-top: 20px;\n  background-color: white; }\n\nmat-card {\n  max-width: 100%;\n  margin: 10px auto;\n  text-align: center; }\n\nmat-checkbox {\n  max-width: 500px;\n  text-align: left;\n  margin-top: -40px;\n  font-size: small;\n  vertical-align: bottom; }\n\nmat-label {\n  font-size: smaller; }\n\nmat-form-field {\n  max-width: 130px;\n  margin-right: 10px;\n  font-size: small; }\n\nh4 {\n  margin-bottom: 0px;\n  font-size: medium;\n  margin-top: 10px; }\n\n.row {\n  text-align: left;\n  margin-bottom: 15px; }\n\n.customer-radio-group {\n  display: inherit;\n  flex-direction: row; }\n\n.customer-radio-button {\n  margin: 5px; }\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.inputfile + label {\n  font-size: 12px;\n  color: steelblue;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer; }\n\n.inputfile:focus + label,\n.inputfile + label:hover {\n  color: goldenrod; }\n\n.pickerLabel {\n  font-size: 12px;\n  color: steelblue;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL21haW4vY3VzdG9tZXIvbWFuYWdlci9tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFFbEIsZ0JBQWdCO0VBRWhCLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCO0VBRWhCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGtCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFnQjtFQUVoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHakI7O0VBR0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vY3VzdG9tZXIvbWFuYWdlci9tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OjQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBtYXQtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgbWF0LWNoZWNrYm94IHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAvLyBtYXJnaW46IDJlbSBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgfVxyXG4gIG1hdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6c21hbGxlcjtcclxuICB9XHJcbiAgbWF0LWZvcm0tZmllbGQgIHtcclxuICAgIG1heC13aWR0aDogMTMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuICBcclxuICBoNCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6bWVkaXVtO1xyXG4gICAgLy8gY29sb3I6ICMwMGJjZDQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAucm93XHJcbiAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b21lci1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbWVyLXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0ZmlsZSB7XHJcbiAgICAgIHdpZHRoOiAwLjFweDtcclxuICAgICAgaGVpZ2h0OiAwLjFweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0ZmlsZSArIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dGZpbGU6Zm9jdXMgKyBsYWJlbCxcclxuICAuaW5wdXRmaWxlICsgbGFiZWw6aG92ZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpzdGVlbGJsdWU7XHJcbiAgICBjb2xvcjogZ29sZGVucm9kO1xyXG4gIH1cclxuICAucGlja2VyTGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/main/customer/manager/manager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/customer/manager/manager.component.ts ***!
  \************************************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_constants_consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/constants/consts */ "./src/app/common/constants/consts.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _common_services_look_up_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/services/look-up.service */ "./src/app/common/services/look-up.service.ts");
/* harmony import */ var _common_services_address_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/services/address.service */ "./src/app/common/services/address.service.ts");
/* harmony import */ var _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @custor/helpers/utilities */ "./src/@custor/helpers/utilities.ts");
/* harmony import */ var _services_manager_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/manager.service */ "./src/app/main/customer/services/manager.service.ts");
/* harmony import */ var _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @custor/services/translation.service */ "./src/@custor/services/translation.service.ts");
/* harmony import */ var _custor_helpers_compare__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @custor/helpers/compare */ "./src/@custor/helpers/compare.ts");
/* harmony import */ var app_common_models_static_data_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/common/models/static-data.model */ "./src/app/common/models/static-data.model.ts");








// import {Gender, LegalStatus, Lookup} from '../../../common/models/lookup.model';






// import { Region, Zone, Woreda, Kebele } from 'app/common/models/address.model';

var ManagerComponent = /** @class */ (function () {
    function ManagerComponent(activatedRoute, router, lookUpService, addressService, managerService, configService, translationService, toastr, fb) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.lookUpService = lookUpService;
        this.addressService = addressService;
        this.managerService = managerService;
        this.configService = configService;
        this.translationService = translationService;
        this.toastr = toastr;
        this.fb = fb;
        this.isNewManager = false;
        this.regions = [];
        this.zones = [];
        this.filteredZones = [];
        this.woredas = [];
        this.filteredWoredas = [];
        this.kebeles = [];
        this.filteredKebeles = [];
        this.genders = [];
        this.legalStatuses = [];
        this.currentLang = '';
        this.imgPhoto = '';
        this.imgBase64 = '';
        this.AllowCascading = true;
        this.errors = [];
        this.currentLang = this.configService.language;
        this.translationService.changeLanguage(this.configService.language);
        // create an empty object from the manager model
        this.manager = {};
        // initialize the form
        this.initForm();
    }
    ManagerComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params.id;
        this.initStaticData(this.currentLang);
        this.fillAddressLookups();
        this.imgBase64 = '';
        if (id < 1) {
            this.isNewManager = true;
            this.managerId = 0;
            this.title = 'Create a new manager';
            this.imgPhoto = '';
            return;
        }
        if (id) {
            this.isNewManager = false;
            this.getManager(id);
        }
    };
    ManagerComponent.prototype.getManager = function (id) {
        var _this = this;
        this.loadingIndicator = true;
        this.managerSub = this.managerService
            .getManager(id)
            .subscribe(function (result) {
            _this.manager = result;
            if (result == null) {
                _this.isNewManager = true;
            }
            else {
                _this.isNewManager = false;
                _this.updateForm();
                _this.managerId = id;
                _this.imgPhoto = _this.configService.baseUrl + 'photo/Mgr' + _this.manager.ManagerId + '.jpg'; // to-do put the path in config
            }
        }, function (error) { return _this.toastr.error(error); });
        this.loadingIndicator = false;
    };
    ManagerComponent.prototype.fillAddressLookups = function () {
        var countryLookupType = 8;
        var titleLookupType = 89;
        // to-do
        // bring all in one go
        // caching
        this.getRegions();
        this.getAllZones();
        this.getAllWoredas();
        this.getTitles(titleLookupType);
        this.getCountries(countryLookupType);
    };
    ManagerComponent.prototype.getCountries = function (id) {
        var _this = this;
        this.lookUpService.getLookupByParentId(this.currentLang, id).subscribe(function (result) {
            console.log(result);
            _this.countryList = result;
        });
    };
    ManagerComponent.prototype.getTitles = function (id) {
        var _this = this;
        this.lookUpService.getLookupByParentId(this.currentLang, id).subscribe(function (result) {
            console.log('====Titles===');
            console.log(result);
            _this.titleList = result;
        });
    };
    ManagerComponent.prototype.getRegions = function () {
        var _this = this;
        this.addressService.getRegionsByLang(this.currentLang)
            .subscribe(function (result) {
            console.log(result);
            _this.regions = result;
        }, function (error) {
            return _this.toastr.error(error);
        });
    };
    ManagerComponent.prototype.getAllZones = function () {
        var _this = this;
        this.addressService.getAllZonesByLang(this.currentLang)
            .subscribe(function (z) {
            _this.zones = z;
            if (_this.zones) {
                _this.filterRegion(_this.manager.RegionId);
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    ManagerComponent.prototype.getAllWoredas = function () {
        var _this = this;
        this.addressService.getAllWoredasByLang(this.currentLang)
            .subscribe(function (result) {
            _this.woredas = result;
            // alert (result.length);
            if (_this.woredas) {
                _this.filterZone(_this.manager.ZoneId);
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    // very expensive!
    ManagerComponent.prototype.getAllKebeles = function () {
        var _this = this;
        this.addressService.getAllKebelesByLang(this.currentLang)
            .subscribe(function (result) {
            _this.kebeles = result;
            if (_this.kebeles) {
                _this.filterWoreda(_this.manager.WoredaId);
            }
        }, function (error) { return _this.toastr.error(error); });
    };
    ManagerComponent.prototype.initForm = function () {
        this.managerForm = this.fb.group({
            cFirstNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_common_constants_consts__WEBPACK_IMPORTED_MODULE_4__["ALPHABET_WITHSPACE_REGEX"])])]],
            cFatherNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_common_constants_consts__WEBPACK_IMPORTED_MODULE_4__["ALPHABET_WITHSPACE_REGEX"])])]],
            cGrandNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_common_constants_consts__WEBPACK_IMPORTED_MODULE_4__["ALPHABET_WITHSPACE_REGEX"])])]],
            cFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_common_constants_consts__WEBPACK_IMPORTED_MODULE_4__["ET_ALPHABET_WITHSPACE_REGEX"])])]],
            cFatherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_common_constants_consts__WEBPACK_IMPORTED_MODULE_4__["ET_ALPHABET_WITHSPACE_REGEX"])])]],
            cGrandName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(_common_constants_consts__WEBPACK_IMPORTED_MODULE_4__["ET_ALPHABET_WITHSPACE_REGEX"])])]],
            cNationality: ['1'],
            cGender: ['1'],
            Title: [''],
            Origin: [false],
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                ParentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                RegionId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                ZoneId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                WoredaId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                KebeleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                OtherAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                CellPhoneNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                // SpecificAreaName: new FormControl(),
                HouseNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                TeleNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                Fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                Pobox: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
                Remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
            })
        });
    };
    ManagerComponent.prototype.updateForm = function () {
        var _this = this;
        this.managerForm.patchValue({
            cFirstName: this.manager.FirstName || '',
            cFatherName: this.manager.FatherName || '',
            cGrandName: this.manager.GrandName || '',
            cFirstNameEng: this.manager.FirstNameEng || '',
            cFatherNameEng: this.manager.FatherNameEng || '',
            cGrandNameEng: this.manager.GrandNameEng || '',
            cNationality: this.manager.Nationality == null ? '' : this.manager.Nationality.toString(),
            cGender: this.manager.Gender == null ? '' : this.manager.Gender.toString(),
            cTin: this.manager.Tin || '',
            cIsEthiopianOrigin: this.manager.Origin,
            Title: this.manager.Title || '',
        });
        this.AllowCascading = false;
        // Set dropdown values
        setTimeout(function () {
            if (_this.manager.ZoneId != null) {
                _this.filteredWoredas = _this.woredas.filter(function (item) { return item.ParentId === _this.manager.ZoneId; });
            }
        }, 100);
        setTimeout(function () {
            if (_this.manager.RegionId != null) {
                _this.filteredZones = _this.zones.filter(function (item) { return item.ParentId === _this.manager.RegionId; });
            }
        }, 100);
        setTimeout(function () {
            if (_this.manager.WoredaId != null) {
                _this.getKebeleByWoredaId(_this.manager.WoredaId);
            }
        }, 100);
        this.managerForm.get('address').patchValue({
            RegionId: this.manager.RegionId == null ? '' : this.manager.RegionId.toString(),
            ZoneId: this.manager.ZoneId == null ? '' : this.manager.ZoneId.toString(),
            WoredaId: this.manager.WoredaId == null ? '' : this.manager.WoredaId.toString(),
            KebeleId: this.manager.KebeleId == null ? '' : this.manager.KebeleId.toString(),
            HouseNo: this.manager.HouseNo || '',
            TeleNo: this.manager.TeleNo || '',
            Pobox: this.manager.Pobox || '',
            Fax: this.manager.Fax || '',
            CellPhoneNo: this.manager.CellPhoneNo || '',
            Email: this.manager.Email || '',
            OtherAddress: this.manager.OtherAddress || ''
        });
        this.isNewManager = false;
        this.imgBase64 = ''; // image file should not be recreated if not file is picked
        this.AllowCascading = true;
    };
    ManagerComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.managerForm.valid) {
            // // console.log('error!!');
            return;
        }
        // console.log(this.imgBase64);
        if (this.imgBase64 === '' && this.managerId === 0) {
            this.toastr.error('Please add photograph of the Manager');
            return;
        }
        this.loadingIndicator = true;
        console.log(this.getEditedManager());
        return this.managerService.saveManager(this.getEditedManager())
            .subscribe(function (manager) {
            _this.saveCompleted(manager);
        }, function (err) { return _this.handleError(err); });
    };
    ManagerComponent.prototype.saveCompleted = function (manager) {
        if (manager) {
            this.manager = manager;
        }
        this.isNewManager = false;
        this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        this.router.navigate(['/main/customer/manager-list']);
    };
    ManagerComponent.prototype.handleError = function (error) {
        this.loadingIndicator = false;
        var errList = _custor_helpers_utilities__WEBPACK_IMPORTED_MODULE_10__["Utilities"].getHttpResponseMessage(error);
        if (error.status === 400) { // bad request (validation)
            this.errors = errList;
            this.toastr.error('Please fix the listed errors', 'Error');
        }
        else {
            this.errors = [];
            this.toastr.error(error.status + ':' + errList[0].toString(), 'Error');
        }
    };
    ManagerComponent.prototype.getEditedManager = function () {
        var formModel = this.managerForm.value;
        var add = this.managerForm.get('address').value;
        this.customerId = 1; // hard coded for now
        return {
            ManagerId: this.isNewManager ? 0 : this.manager.ManagerId,
            CustomerId: this.customerId,
            FirstName: formModel.cFirstName,
            FatherName: formModel.cFatherName,
            GrandName: formModel.cGrandName,
            FirstNameEng: formModel.cFirstNameEng,
            FatherNameEng: formModel.cFatherNameEng,
            GrandNameEng: formModel.cGrandNameEng,
            Nationality: formModel.cNationality,
            Gender: formModel.cGender,
            Origin: formModel.cIsEthiopianOrigin,
            IsActive: true,
            IsDeleted: false,
            Title: formModel.Title,
            PhotoData: this.imgBase64,
            RegionId: add.RegionId,
            ZoneId: add.ZoneId,
            WoredaId: add.WoredaId,
            KebeleId: add.KebeleId,
            HouseNo: add.HouseNo,
            TeleNo: add.TeleNo,
            Pobox: add.Pobox,
            Fax: add.Fax,
            CellPhoneNo: add.CellPhoneNo,
            Email: add.Email,
            OtherAddress: add.OtherAddress,
            AddressId: this.isNewManager ? 0 : this.manager.AddressId,
            UserName: 'Abebe'
        };
    };
    ManagerComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var gender = new app_common_models_static_data_model__WEBPACK_IMPORTED_MODULE_14__["StaticData"]();
        _common_constants_consts__WEBPACK_IMPORTED_MODULE_4__["GENDERS"].forEach(function (pair) {
            gender = { Id: pair.Id.toString(), Description: (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
            _this.genders.push(gender);
        });
        // let legalS: StaticData = new StaticData();
        // LEGAL_STATUSES.forEach(pair => {
        //   legalS = {Id: pair.Id.toString(), Description: (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish)};
        //   this.legalStatuses.push(legalS);
        // });
        console.log(this.genders);
        console.log(this.legalStatuses);
    };
    ManagerComponent.prototype.getKebeleByWoredaId = function (woredaId) {
        var _this = this;
        this.addressService.getKebelesByWoreda(this.configService.language, woredaId)
            .subscribe(function (result) {
            // this.kebeles = result;
            _this.filteredKebeles = result;
        });
    };
    ManagerComponent.prototype.filterRegion = function (regionCode) {
        if (!regionCode || !this.AllowCascading) {
            return;
        }
        this.filteredKebeles = null;
        this.filteredWoredas = null;
        if (!this.zones) {
            return;
        }
        this.filteredZones = this.zones.filter(function (item) {
            return item.ParentId === regionCode;
        });
    };
    ManagerComponent.prototype.filterZone = function (zoneCode) {
        if (!zoneCode || !this.AllowCascading) {
            return;
        }
        this.filteredKebeles = null;
        this.filteredWoredas = this.woredas.filter(function (item) {
            return item.ParentId === zoneCode;
        });
    };
    ManagerComponent.prototype.filterWoreda = function (woredaCode) {
        if (!woredaCode || !this.AllowCascading) {
            return;
        }
        this.getKebeleByWoredaId(woredaCode);
    };
    ManagerComponent.prototype.compareIds = function (id1, id2) {
        var a1 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_13__["determineId"])(id1);
        var a2 = Object(_custor_helpers_compare__WEBPACK_IMPORTED_MODULE_13__["determineId"])(id2);
        return a1 === a2;
    };
    ManagerComponent.prototype.onBack = function () {
        this.router.navigate(['manager/list']);
    };
    Object.defineProperty(ManagerComponent.prototype, "firstName", {
        get: function () {
            return this.managerForm.get('cFirstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "fatherName", {
        get: function () {
            return this.managerForm.get('cFatherName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "Title", {
        get: function () {
            return this.managerForm.get('Title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "grandName", {
        get: function () {
            return this.managerForm.get('cGrandName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "firstNameEng", {
        get: function () {
            return this.managerForm.get('cFirstNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "fatherNameEng", {
        get: function () {
            return this.managerForm.get('cFatherNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "grandNameEng", {
        get: function () {
            return this.managerForm.get('cGrandNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "nationality", {
        get: function () {
            return this.managerForm.get('cNationality');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "gender", {
        get: function () {
            return this.managerForm.get('cGender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "Origin", {
        // get isDiaspora() {
        //   return this.managerForm.get('cIsDiaspora');
        // }
        get: function () {
            return this.managerForm.get('cIsEthiopianOrigin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "region", {
        get: function () {
            return this.managerForm.get('RegionId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "zone", {
        get: function () {
            return this.managerForm.get('ZoneId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "woreda", {
        get: function () {
            return this.managerForm.get('WoredaId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "kebele", {
        get: function () {
            return this.managerForm.get('KebeleId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "houseNumber", {
        get: function () {
            return this.managerForm.get('HouseNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "phoneDirect", {
        get: function () {
            return this.managerForm.get('PhoneDirect');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "CellPhoneNo", {
        get: function () {
            return this.managerForm.get('CellPhoneNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "fax", {
        get: function () {
            return this.managerForm.get('Fax');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "pobox", {
        get: function () {
            return this.managerForm.get('POBox');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "legalStatus", {
        get: function () {
            return this.managerForm.get('cLegalStatus');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "tradeName", {
        get: function () {
            return this.managerForm.get('cTradeName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "tradeNameEng", {
        get: function () {
            return this.managerForm.get('cTradeNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "regDate", {
        get: function () {
            return this.managerForm.get('cRegDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "regNumber", {
        get: function () {
            return this.managerForm.get('cRegNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "tin", {
        get: function () {
            return this.managerForm.get('cTin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "otherAddress", {
        get: function () {
            return this.managerForm.get('OtherAddress');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "companyName", {
        get: function () {
            return this.managerForm.get('cCompanyName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "companyNameEng", {
        get: function () {
            return this.managerForm.get('cCompanyNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "nationalityCompany", {
        get: function () {
            return this.managerForm.get('cNationalityCompany');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "email", {
        get: function () {
            return this.managerForm.get('Email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "houseNo", {
        get: function () {
            return this.managerForm.get('HouseNo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "ct", {
        // another getter for easy access to form fields
        get: function () {
            return this.managerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerComponent.prototype, "floatLabels", {
        // use it as 'ct.controlName.errors.required'
        get: function () {
            return 'auto';
        },
        enumerable: true,
        configurable: true
    });
    // Photo Management
    ManagerComponent.prototype.ngAfterViewInit = function () {
        // this.fillAddressLookups();
    };
    ManagerComponent.prototype.fileChange = function (input) {
        var _this = this;
        var pattern = /image-*/;
        if (!input.files[0].type.match(pattern)) {
            this.toastr.error('The selected file is not valid image file');
            return;
        }
        var reader = new FileReader();
        this.readFile(input.files[0], reader, function (result) {
            // Create an img element and add the image file data to it
            var img = document.createElement('img');
            img.src = result;
            _this.resizeImage(img, 150, 150, function (resizedImage) {
                _this.imgPhoto = resizedImage;
            });
        });
    };
    ManagerComponent.prototype.readFile = function (file, reader, callback) {
        reader.onload = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(file);
    };
    ManagerComponent.prototype.resizeImage = function (img, maxWidth, maxHeight, callback) {
        var _this = this;
        return img.onload = function () {
            var width = img.width;
            var height = img.height;
            // Maintain aspect ratio
            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            }
            else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }
            // create a canvas object
            var canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            var dataUrl = canvas.toDataURL('image/jpeg');
            // // console.log(dataUrl);
            _this.imgBase64 = dataUrl.split(',')[1];
            callback(dataUrl, img.src.length, dataUrl.length);
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"])
    ], ManagerComponent.prototype, "managerSub", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ManagerComponent.prototype, "errors", void 0);
    ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager',
            template: __webpack_require__(/*! ./manager.component.html */ "./src/app/main/customer/manager/manager.component.html"),
            styles: [__webpack_require__(/*! ./manager.component.scss */ "./src/app/main/customer/manager/manager.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _common_services_look_up_service__WEBPACK_IMPORTED_MODULE_8__["LookUpService"],
            _common_services_address_service__WEBPACK_IMPORTED_MODULE_9__["AddressService"],
            _services_manager_service__WEBPACK_IMPORTED_MODULE_11__["ManagerService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"],
            _custor_services_translation_service__WEBPACK_IMPORTED_MODULE_12__["AppTranslationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "./src/app/main/customer/models/manager.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/customer/models/manager.model.ts ***!
  \*******************************************************/
/*! exports provided: ManagerDTO, ManagerModel, ManagerListDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDTO", function() { return ManagerDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModel", function() { return ManagerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerListDTO", function() { return ManagerListDTO; });
var ManagerDTO = /** @class */ (function () {
    function ManagerDTO() {
        this.RegionId = null;
        this.ZoneId = null;
        this.WoredaId = null;
        this.KebeleId = null;
        this.HouseNo = null;
        this.TeleNo = null;
        this.Pobox = null;
        this.Fax = null;
        this.CellPhoneNo = null;
        this.Email = null;
        this.OtherAddress = null;
        this.AddressId = 0;
        this.UserName = null;
    }
    return ManagerDTO;
}());

var ManagerModel = /** @class */ (function () {
    function ManagerModel() {
        this.AddressId = 0;
        this.RegionId = null;
        this.ZoneId = null;
        this.WoredaId = null;
        this.KebeleId = null;
        this.HouseNo = null;
        this.TeleNo = null;
        this.Pobox = null;
        this.Fax = null;
        this.CellPhoneNo = null;
        this.Email = null;
        this.OtherAddress = null;
        this.UserName = null;
    }
    return ManagerModel;
}());

var ManagerListDTO = /** @class */ (function () {
    function ManagerListDTO() {
        this.FullName = null;
        this.FullNameEng = null;
    }
    return ManagerListDTO;
}());



/***/ }),

/***/ "./src/app/main/customer/models/user.model.ts":
/*!****************************************************!*\
  !*** ./src/app/main/customer/models/user.model.ts ***!
  \****************************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
var UserProfile = /** @class */ (function () {
    function UserProfile() {
    }
    return UserProfile;
}());



/***/ }),

/***/ "./src/app/main/customer/profile/profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/customer/profile/profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-card class=\"mat-elevation-z8\">\n   <mat-card-header>\n     <mat-card-title>User Profile</mat-card-title>\n   </mat-card-header>\n   <mat-card-content>\n     <form [formGroup]=\"ProfileForm\" novalidate (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" autocomplete=\"off\">\n       <div fxLayout=\"row wrap\" fxLayoutAlign=\"\" fxLayoutGap=\"2em\" class=\"service-registration\">\n         <mat-form-field>\n           <!-- <mat-label>{{'registration.editor.Tin' | translate}}</mat-label> -->\n           <mat-label>Tin</mat-label>\n           <input matInput id=\"Tin\" formControlName=\"Tin\" required placeholder=\"Tin Number\" />\n           <mat-error *ngIf=\"Tin.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n           <mat-error *ngIf=\"!Tin.hasError('required') && Tin.hasError('minlength')\">\n             {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n           </mat-error>\n           <mat-error *ngIf=\"!Tin.hasError('required') && Tin.hasError('maxLength')\">\n             {{'common.validation.MaxLengthChar' | translate: {'min':'2'} }}\n           </mat-error>\n         </mat-form-field>\n       </div>\n       <!--- Name In Amharic Form Section-->\n       <div fxLayout=\"row wrap\" fxLayoutAlign=\"\" fxLayoutGap=\"2em\" class=\"profile-registration\">\n         <mat-form-field>\n           <!-- <mat-label>{{'investors.editor.Name' | translate}}</mat-label> -->\n           <mat-label>{{'investors.editor.FirstNameEng' | translate}}</mat-label>\n           <input matInput id=\"FirstName\" formControlName=\"FirstName\" required placeholder=\"Name\" />\n           <mat-error *ngIf=\"FirstName.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n           <mat-error *ngIf=\"!FirstName.hasError('required') && !FirstName.hasError('minlength')\n                                                && FirstName.hasError('pattern')\">\n             {{'common.validation.UseEthiopicOnly' | translate}}\n           </mat-error>\n\n         </mat-form-field>\n\n         <mat-form-field>\n           <!-- <mat-label>{{'investors.editor.FatherName' | translate}}</mat-label> -->\n           <input matInput id=\"FatherName\" formControlName=\"FatherName\" required placeholder=\"Father's Name\" />\n           <mat-error *ngIf=\"FatherName.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n           <mat-error *ngIf=\"!FatherName.hasError('required') && FatherName.hasError('minlength')\">\n             {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n           </mat-error>\n           <mat-error *ngIf=\"!FatherName.hasError('required') && !FatherName.hasError('minlength')\n                                                && FatherName.hasError('pattern')\">\n             {{'common.validation.UseEthiopicOnly' | translate}}\n           </mat-error>\n         </mat-form-field>\n         <mat-form-field>\n           <!-- <mat-label>{{'investors.editor.GrandName' | translate}}</mat-label> -->\n           <input matInput id=\"GrandName\" formControlName=\"GrandName\" required placeholder=\"Grand Father's Name\" />\n           <mat-error *ngIf=\"GrandName.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n           <mat-error *ngIf=\"!GrandName.hasError('required') && GrandName.hasError('minlength')\">\n             {{'common.validation.MinLengthChar' | translate: {'min':'2'} }}\n           </mat-error>\n           <mat-error *ngIf=\"!GrandName.hasError('required') && !GrandName.hasError('minlength')\n                                                && GrandName.hasError('pattern')\">\n             {{'common.validation.UseEthiopicOnly' | translate}}\n           </mat-error>\n         </mat-form-field>\n         <mat-form-field>\n           <!-- <mat-label>{{'investors.editor.MotherName' | translate}}</mat-label> -->\n           <input matInput id=\"MotherName\" formControlName=\"MotherName\" required placeholder=\"Mother's Name\" />\n         </mat-form-field>\n       </div>\n       <!---END OF Name In Amharic Form Section-->\n       <!--- NAME In ENGLISH SECTION-->\n       <div fxLayout=\"row wrap\" fxLayoutAlign=\"\" fxLayoutGap=\"2em\" class=\"profile-registration\">\n         <mat-form-field>\n           <!-- <mat-label>{{'investors.editor.FirstNameEng' | translate }}(English)</mat-label> -->\n           <input matInput id=\"FirstNameEng\" formControlName=\"FirstNameEng\" required placeholder=\"Name\" />\n           <mat-error *ngIf=\"FirstNameEng.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n         </mat-form-field>\n         <mat-form-field>\n           <!-- <mat-label> {{'investors.editor.FatherNameEng' | translate }}(English) </mat-label> -->\n           <input matInput id=\"FatherNameEng\" formControlName=\"FatherNameEng\" required placeholder=\"Father's Name\" />\n           <mat-error *ngIf=\"FatherNameEng.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n         </mat-form-field>\n         <mat-form-field>\n           <!-- <mat-label> {{'investors.editor.GrandNameEng' | translate }}(English) </mat-label> -->\n           <input matInput id=\"GrandNameEng\" formControlName=\"GrandNameEng\" required\n             placeholder=\"Grand Father's Name\" />\n           <mat-error *ngIf=\"GrandNameEng.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n         </mat-form-field>\n         <mat-form-field>\n           <!-- <mat-label>{{'investors.editor.MotherNameEng' | translate}} (English) </mat-label> -->\n           <input matInput id=\"MotherNameEng\" formControlName=\"MotherNameEng\" required placeholder=\"Mother's Name\" />\n         </mat-form-field>\n       </div>\n       <!---END OF Name In NAME In ENGLISH SECTION-->\n       <!--- NAME In ENGLISH SECTION-->\n       <div fxLayout=\"row wrap\" fxLayoutAlign=\"\" fxLayoutGap=\"2em\" class=\"profile-registration\">\n         <mat-form-field fxLayoutGap=\"4em\" class=\"col4\">\n           <!-- <mat-label>{{'investors.editor.Title' | translate}}</mat-label> -->\n           <mat-label>Title</mat-label>\n           <mat-select formControlName=\"Title\">\n             <mat-option *ngFor=\"let title of titleList\" [value]=\"title.Id\">\n               {{title.Description}}\n             </mat-option>\n           </mat-select>\n         </mat-form-field>\n         <mat-form-field fxLayoutGap=\"4em\" class=\"col4\">\n           <!-- <mat-label>{{'investors.editor.Gender' | translate}}</mat-label> -->\n           <mat-label>Gender</mat-label>\n           <mat-select formControlName=\"Gender\" required>\n             <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.Id\">\n               {{gender.Desc}}\n             </mat-option>\n           </mat-select>\n           <mat-error *ngIf=\"Gender.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n         </mat-form-field>\n         <mat-form-field fxLayoutGap=\"4em\">\n           <mat-label>Nationality</mat-label>\n           <!-- <mat-label>{{'investors.editor.Nationality' | translate}}</mat-label> -->\n           <mat-select formControlName=\"Nationality\" required>\n             <mat-option *ngFor=\"let country of countryList\" [value]=\"country.Id\">\n               <span>{{country.Description}}</span>\n             </mat-option>\n           </mat-select>\n           <mat-error *ngIf=\"Nationality.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error>\n         </mat-form-field>\n         <mat-form-field>\n           <mat-label> Birth Date</mat-label>\n           <input matInput id=\"BirthDate\" \n           [matDatepicker]=\"BirthDate\" \n           formControlName=\"BirthDate\" required\n             placeholder=\"Birth Name\" />\n           <mat-datepicker-toggle matSuffix [for]=\"BirthDate\"></mat-datepicker-toggle>\n           <mat-datepicker #BirthDate></mat-datepicker>\n           <!-- <mat-error *ngIf=\"BirthDate.hasError('required')\">\n             {{'common.validation.Required' | translate}}\n           </mat-error> -->\n         </mat-form-field>\n       </div>\n       <!---END OF Name In NAME In ENGLISH SECTION-->\n     \n     <mat-card-actions fxLayoutAlign=\"center end\">\n       <button mat-raised-button color=\"primary\" (click)=\"updateProfile()\">Save</button>\n       <button mat-raised-button color=\"warn\" (cancel)=\"cancel()\">Cancel</button>\n     </mat-card-actions>\n     </form>\n   </mat-card-content>\n </mat-card>\n"

/***/ }),

/***/ "./src/app/main/customer/profile/profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/customer/profile/profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z8 {\n  margin: 20px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvL0Rlc2t0b3AvQ3VzdG9yL09UUkwvQ1VTVE9SLk9UUkxTLldlYi9zcmMvYXBwL21haW4vY3VzdG9tZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL2N1c3RvbWVyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZWxldmF0aW9uLXo4e1xuICAgIG1hcmdpbjoyMHB4IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/main/customer/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/customer/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_services_look_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/look-up.service */ "./src/app/common/services/look-up.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/main/customer/services/user.service.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _common_models_lookup_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/models/lookup.model */ "./src/app/common/models/lookup.model.ts");
/* harmony import */ var _common_constants_consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/constants/consts */ "./src/app/common/constants/consts.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");









var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, lookUpService, configService, userService, toastr) {
        var _this = this;
        this.fb = fb;
        this.lookUpService = lookUpService;
        this.configService = configService;
        this.userService = userService;
        this.toastr = toastr;
        this.currentLang = 'en';
        this.countryList = [];
        this.titleList = [];
        this.genders = [];
        this.errors = [];
        this.userProfile = "";
        // Initializing data
        var countryLookupType = 8;
        var titleLookupType = 89;
        this.currentLang = this.configService.language;
        this.getTitles(titleLookupType);
        this.getCountries(countryLookupType);
        // Initializing data
        this.userService.getUserProfile(2).subscribe(function (result) {
            _this.user = result;
            console.log(_this.user);
            if (result == null) {
                _this.isNewUser = true;
            }
            else {
                _this.isNewUser = false;
                _this.updateForm();
                // this.managerId = id;
                // this.imgPhoto = this.configService.baseUrl + 'photo/Mgr' + this.manager.ManagerId + '.jpg'; // to-do put the path in config
            }
        });
    }
    ProfileComponent.prototype.getCountries = function (id) {
        var _this = this;
        this.lookUpService.getLookupByParentId(this.currentLang, id).subscribe(function (result) {
            _this.countryList = result;
        });
    };
    ProfileComponent.prototype.getTitles = function (id) {
        var _this = this;
        this.lookUpService.getLookupByParentId(this.currentLang, id).subscribe(function (result) {
            _this.titleList = result;
            // this.titleList = result;
        });
    };
    ProfileComponent.prototype.initStaticData = function (currentLang) {
        var _this = this;
        var gender = new _common_models_lookup_model__WEBPACK_IMPORTED_MODULE_6__["Gender"]();
        _common_constants_consts__WEBPACK_IMPORTED_MODULE_7__["GENDERS"].forEach(function (pair) {
            gender = { Id: pair.Id.toString(), Desc: (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
            _this.genders.push(gender);
        });
    };
    // hasError(name:string){
    //   return name;
    // }
    ProfileComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.initStaticData(this.currentLang);
    };
    ProfileComponent.prototype.createForm = function () {
        this.ProfileForm = this.fb.group({
            Tin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]],
            FirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_common_constants_consts__WEBPACK_IMPORTED_MODULE_7__["ALPHABET_WITHSPACE_REGEX"])])]],
            Title: [''],
            FirstNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_common_constants_consts__WEBPACK_IMPORTED_MODULE_7__["ALPHABET_WITHSPACE_REGEX"])])]],
            FatherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            FatherNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            GrandName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            GrandNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            MotherName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            MotherNameEng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Nationality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            CreatedDate: [''],
            BirthDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    ProfileComponent.prototype.updateForm = function () {
        this.ProfileForm.patchValue({
            Tin: this.user.Tin || '',
            FirstName: this.user.FirstName || '',
            FatherName: this.user.FatherName || '',
            GrandName: this.user.GrandName || '',
            FirstNameEng: this.user.FirstNameEng || '',
            FatherNameEng: this.user.FatherNameEng || '',
            GrandNameEng: this.user.GrandNameEng || '',
            MotherName: this.user.MotherName || '',
            MotherNameEng: this.user.MotherNameEng || '',
            BirthDate: this.user.BirthDate || '',
            Nationality: this.user.Nationality == null ? '' : this.user.Nationality.toString(),
            Gender: this.user.Gender == null ? '' : this.user.Gender.toString(),
            Title: this.user.Title || '',
        });
    };
    ProfileComponent.prototype.getUserProfileData = function () {
        var formModel = this.ProfileForm.value;
        return {
            Id: 2,
            FirstName: formModel.FirstName,
            FatherName: formModel.FatherName,
            GrandName: formModel.GrandName,
            FirstNameEng: formModel.FirstNameEng,
            FatherNameEng: formModel.FatherNameEng,
            GrandNameEng: formModel.GrandNameEng,
            MotherName: formModel.MotherName,
            MotherNameEng: formModel.MotherNameEng,
            Nationality: formModel.Nationality,
            Gender: formModel.Gender,
            Tin: formModel.Tin,
            Title: formModel.Title,
            BirthDate: formModel.BirthDate,
        };
    };
    ProfileComponent.prototype.updateProfile = function () {
        console.log(this.getUserProfileData());
        // return this.userService.saveProfile(getUserProfileData()).subscribe((User :UserDTO)=>{
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("on submit");
        console.log("on submit");
        // if (!this.ProfileForm.valid) {
        //   // // console.log('error!!');
        //   return;
        // }
        // console.log(this.imgBase64);
        return this.userService.saveProfile(this.getUserProfileData())
            .subscribe(function (user) {
            _this.saveCompleted(user);
        }, function (err) { return _this.handleError(err); });
    };
    ProfileComponent.prototype.saveCompleted = function (user) {
        if (user) {
            this.user = user;
        }
        console.log(this.user);
        // this.isNewManager = false;
        // this.loadingIndicator = false;
        this.toastr.success('Record saved successfully!');
        // this.router.navigate(['/main/customer/manager-list']);
    };
    ProfileComponent.prototype.handleError = function (error) {
        this.loadingIndicator = false;
        // const errList = Utilities.getHttpResponseMessage(error);
        if (error.status === 400) { // bad request (validation)
            // this.errors = errList;
            this.toastr.error('Please fix the listed errors', 'Error');
        }
        else {
            this.errors = [];
            // this.toastr.error(error.status + ':' + errList[0].toString(), 'Error');
        }
    };
    Object.defineProperty(ProfileComponent.prototype, "Tin", {
        get: function () {
            return this.ProfileForm.get("Tin");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "FirstName", {
        get: function () {
            return this.ProfileForm.get('FirstName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "FatherName", {
        get: function () {
            return this.ProfileForm.get('FatherName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "GrandName", {
        get: function () {
            return this.ProfileForm.get("GrandName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "FirstNameEng", {
        get: function () {
            return this.ProfileForm.get('FirstNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "FatherNameEng", {
        get: function () {
            return this.ProfileForm.get('FatherNameEng');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "GrandNameEng", {
        get: function () {
            return this.ProfileForm.get("GrandNameEng");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "Gender", {
        get: function () {
            return this.ProfileForm.get("Gender");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "Nationality", {
        get: function () {
            return this.ProfileForm.get("Nationality");
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProfileComponent.prototype, "errors", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/main/customer/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/main/customer/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _common_services_look_up_service__WEBPACK_IMPORTED_MODULE_3__["LookUpService"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/customer/services/manager.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/customer/services/manager.service.ts ***!
  \***********************************************************/
/*! exports provided: ManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerService", function() { return ManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_manager_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/manager.model */ "./src/app/main/customer/models/manager.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @custor/services/security/endpoint-factory.service */ "./src/@custor/services/security/endpoint-factory.service.ts");

// import {catchError, map} from 'rxjs/operators';






var ManagerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManagerService, _super);
    function ManagerService(httpClient, config, injector) {
        var _this = _super.call(this, httpClient, config, injector) || this;
        _this.httpClient = httpClient;
        _this.config = config;
        _this._managersUrl = 'api/manager/GetManagerByCustomerId';
        _this._managerUrl = 'api/manager';
        // Declarations
        _this.managerList = [];
        _this.manager = new _models_manager_model__WEBPACK_IMPORTED_MODULE_2__["ManagerDTO"]();
        return _this;
    }
    Object.defineProperty(ManagerService.prototype, "managersUrl", {
        get: function () { return this.config.baseUrl + this._managersUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ManagerService.prototype, "managerUrl", {
        get: function () { return this.config.baseUrl + this._managerUrl; },
        enumerable: true,
        configurable: true
    });
    ManagerService.prototype.getManagers = function (customerId) {
        var _this = this;
        var endpointUrl = this.managersUrl + "/" + customerId;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (managerList) { return _this.managerList = managerList; }));
    };
    ManagerService.prototype.getManager = function (id) {
        var _this = this;
        console.log(this.managerUrl);
        var endpointUrl = this.managerUrl + "/" + id;
        return this.httpClient.get(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (cust) {
            _this.manager = cust;
            return _this.manager;
        }));
    };
    ManagerService.prototype.saveManager = function (manager) {
        var _this = this;
        return this.httpClient.post(this.managerUrl, manager, this.getRequestHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (mgr) {
            _this.manager = mgr;
            return _this.manager;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return _this.handleError(error, function () { return _this.saveManager(manager); });
        }));
    };
    ManagerService.prototype.deleteManager = function (id) {
        var _this = this;
        var endpointUrl = this.managerUrl + "/" + id;
        return this.httpClient.delete(endpointUrl, this.getRequestHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return _this.handleError(error, function () { return _this.deleteManager(id); });
        }));
    };
    ManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], ManagerService);
    return ManagerService;
}(_custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_6__["EndpointFactory"]));



/***/ }),

/***/ "./src/app/main/customer/services/user.service.ts":
/*!********************************************************!*\
  !*** ./src/app/main/customer/services/user.service.ts ***!
  \********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/main/customer/models/user.model.ts");
/* harmony import */ var _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@custor/services/configuration.service */ "./src/@custor/services/configuration.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@custor/services/security/endpoint-factory.service */ "./src/@custor/services/security/endpoint-factory.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    // constructor(private configService: ConfigurationService, private httpClient: HttpClient) {
    //     this.lang = this.configService.language;
    // }
    function UserService(httpClient, config, injector) {
        var _this = _super.call(this, httpClient, config, injector) || this;
        _this.httpClient = httpClient;
        _this.config = config;
        _this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserProfile"]();
        _this._userProfileUrl = '/api/customerProfile/';
        return _this;
    }
    Object.defineProperty(UserService.prototype, "userProfileUrl", {
        get: function () { return this.config.baseUrl + this._userProfileUrl; },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUserProfile = function (userId) {
        var _this = this;
        //  const endpointUrl = `${this.userProfileUrl}${userId}`;
        var endpointUrl = "http://localhost:60330/api/customerProfile/2";
        console.log(endpointUrl);
        return this.httpClient.get(endpointUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (usr) {
            _this.user = usr;
            console.log(_this.user);
            return _this.user;
        }));
    };
    UserService.prototype.saveProfile = function (user) {
        var _this = this;
        console.log(user);
        console.log(this.userProfileUrl);
        var endpointUrl = "http://localhost:60330/api/customerProfile";
        // return;
        return this.httpClient.put(endpointUrl, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (usr) {
            _this.user = usr;
            return _this.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            return _this.handleError(error, function () { return _this.saveProfile(user); });
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _custor_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], UserService);
    return UserService;
}(_custor_services_security_endpoint_factory_service__WEBPACK_IMPORTED_MODULE_5__["EndpointFactory"]));



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map