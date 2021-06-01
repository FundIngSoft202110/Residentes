(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-general-ingre-apto-ingre-apto-module"],{

/***/ "3x8W":
/*!****************************************************************************!*\
  !*** ./src/app/components/general/ingre-apto/ingre-apto-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: IngreAptoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngreAptoPageRoutingModule", function() { return IngreAptoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ingre_apto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingre-apto.page */ "NCAi");




const routes = [
    {
        path: '',
        component: _ingre_apto_page__WEBPACK_IMPORTED_MODULE_3__["IngreAptoPage"]
    }
];
let IngreAptoPageRoutingModule = class IngreAptoPageRoutingModule {
};
IngreAptoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IngreAptoPageRoutingModule);



/***/ }),

/***/ "EsvC":
/*!********************************************************************!*\
  !*** ./src/app/components/general/ingre-apto/ingre-apto.module.ts ***!
  \********************************************************************/
/*! exports provided: IngreAptoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngreAptoPageModule", function() { return IngreAptoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ingre_apto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingre-apto-routing.module */ "3x8W");
/* harmony import */ var _ingre_apto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingre-apto.page */ "NCAi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    {
        path: "",
        component: _ingre_apto_page__WEBPACK_IMPORTED_MODULE_6__["IngreAptoPage"]
    }
];
let IngreAptoPageModule = class IngreAptoPageModule {
};
IngreAptoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ingre_apto_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngreAptoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        declarations: [_ingre_apto_page__WEBPACK_IMPORTED_MODULE_6__["IngreAptoPage"]]
    })
], IngreAptoPageModule);



/***/ })

}]);
//# sourceMappingURL=app-components-general-ingre-apto-ingre-apto-module.js.map