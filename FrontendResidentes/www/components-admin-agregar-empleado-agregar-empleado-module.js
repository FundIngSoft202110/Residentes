(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin-agregar-empleado-agregar-empleado-module"],{

/***/ "J65l":
/*!****************************************************************************!*\
  !*** ./src/app/components/admin/agregar-empleado/agregar-empleado.page.ts ***!
  \****************************************************************************/
/*! exports provided: AgregarEmpleadoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarEmpleadoPage", function() { return AgregarEmpleadoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agregar_empleado_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agregar-empleado.page.html */ "yaR8");
/* harmony import */ var _agregar_empleado_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregar-empleado.page.scss */ "Nq/B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var src_app_Services_agregar_empld_agregar_empld_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/agregar-empld/agregar-empld.service */ "mr/a");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");










let AgregarEmpleadoPage = class AgregarEmpleadoPage {
    constructor(navCtrl, formBuilder, agEmpSer, conjServ, alertController) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.agEmpSer = agEmpSer;
        this.conjServ = conjServ;
        this.alertController = alertController;
        this.errorMessage = "";
        this.validation_messages = {
            usuario: [
                { type: "required", message: " El usuario es requerido" }
            ],
            oficio: [
                { type: "required", message: " El oficio es requerido" },
                { type: "pattern", message: "Solo letras son válidas" }
            ],
            imagen: [
                { type: "required", message: " La imagen es requerida" }
            ]
        };
    }
    /*ngOnInit(){
    } */
    ngOnInit() {
        this.idAConj = this.conjServ.getConjuntoActivo();
        this.loginForm = this.formBuilder.group({
            usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            oficio: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z]*$")
            ])),
            imagen: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]))
        });
    }
    goBack() {
        this.navCtrl.navigateForward("/empleados");
    }
    loginUser(credentials) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Credenciales: ", credentials);
            this.agEmpSer.postNuevoEmpld(src_app_constants__WEBPACK_IMPORTED_MODULE_7__["IPRESIDENTES"] + "consultas/Conjuntos/agregarEmpleadoConjunto/" + this.idAConj, credentials)
                .subscribe(rest => {
                console.log(rest);
                this.rta = rest;
                if (this.rta.respuesta = "Empleado asociado correctamente") {
                    devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()(this.rta.respuesta, 'sucess');
                    this.navCtrl.navigateForward("/empleados");
                }
                else {
                    this.errorMessage = this.rta.respuesta;
                    this.presentAlertConfirm(this.errorMessage);
                }
            });
        });
    }
    presentAlertConfirm(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Infromación',
                message: mensaje,
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: (blah) => {
                            console.log('Confirm Aceptar: blah');
                        }
                    }
                ]
            });
        });
    }
};
AgregarEmpleadoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_Services_agregar_empld_agregar_empld_service__WEBPACK_IMPORTED_MODULE_8__["AgregarEmpldService"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_9__["ConjuntosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
AgregarEmpleadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agregar-empleado',
        template: _raw_loader_agregar_empleado_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agregar_empleado_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgregarEmpleadoPage);



/***/ }),

/***/ "Nq/B":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/agregar-empleado/agregar-empleado.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\n\n.msjVeri {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n}\n\n.for {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n  color: var(--ion-color-residente-txt);\n}\n\n.req {\n  font-weight: bold;\n  color: var(--ion-color-residente-txt);\n}\n\n.bFin {\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.botIng {\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.msjErr {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--ion-color-residente);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FncmVnYXItZW1wbGVhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FBRE47O0FBSUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EscUNBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FBRE4iLCJmaWxlIjoiYWdyZWdhci1lbXBsZWFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG4gIH1cbiAgLm1zalZlcml7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAuZm9ye1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZS10eHQpO1xuICB9XG4gIC5yZXF7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZXNpZGVudGUtdHh0KTtcbiAgfVxuLmJGaW57XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6NjBweDtcbn1cbi5ib3RJbmd7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6NjBweDtcbn1cbi5tc2pFcnJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbiAgaW9uLWNvbnRlbnQge1xuICAgIFxuICBcbiAgICAjaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlKTtcbiAgICAgXG4gIFxuICAgICAgXG4gICAgfVxuICBcbiAgICBcbiAgfSJdfQ== */");

/***/ }),

/***/ "fr1Z":
/*!******************************************************************************!*\
  !*** ./src/app/components/admin/agregar-empleado/agregar-empleado.module.ts ***!
  \******************************************************************************/
/*! exports provided: AgregarEmpleadoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarEmpleadoPageModule", function() { return AgregarEmpleadoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _agregar_empleado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agregar-empleado-routing.module */ "gkq1");
/* harmony import */ var _agregar_empleado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agregar-empleado.page */ "J65l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    {
        path: "",
        component: _agregar_empleado_page__WEBPACK_IMPORTED_MODULE_6__["AgregarEmpleadoPage"]
    }
];
let AgregarEmpleadoPageModule = class AgregarEmpleadoPageModule {
};
AgregarEmpleadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _agregar_empleado_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarEmpleadoPageRoutingModule"]
        ],
        declarations: [_agregar_empleado_page__WEBPACK_IMPORTED_MODULE_6__["AgregarEmpleadoPage"]]
    })
], AgregarEmpleadoPageModule);



/***/ }),

/***/ "gkq1":
/*!**************************************************************************************!*\
  !*** ./src/app/components/admin/agregar-empleado/agregar-empleado-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AgregarEmpleadoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarEmpleadoPageRoutingModule", function() { return AgregarEmpleadoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _agregar_empleado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar-empleado.page */ "J65l");




const routes = [
    {
        path: '',
        component: _agregar_empleado_page__WEBPACK_IMPORTED_MODULE_3__["AgregarEmpleadoPage"]
    }
];
let AgregarEmpleadoPageRoutingModule = class AgregarEmpleadoPageRoutingModule {
};
AgregarEmpleadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgregarEmpleadoPageRoutingModule);



/***/ }),

/***/ "yaR8":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/agregar-empleado/agregar-empleado.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"residente\">\n  </ion-toolbar >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\n      <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" color=\"residente-txt\"></ion-icon>\n    </ion-buttons>\n    <ion-title slot=\"start\" color=\"residente-txt\">Agregar Empleado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"for\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n    <br>\n    <ion-item>\n      <ion-label class=\"req\" >Usuario</ion-label>\n      <ion-input formControlName=\"usuario\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.usuario\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('usuario').hasError(validation.type) &&\n            (loginForm.get('usuario').dirty || loginForm.get('usuario').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <ion-item>\n      <ion-label class=\"req\" >Oficio</ion-label>\n      <ion-input formControlName=\"oficio\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.oficio\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('oficio').hasError(validation.type) &&\n            (loginForm.get('oficio').dirty || loginForm.get('oficio').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <ion-item>\n      <ion-label class=\"req\" >Imagen</ion-label>\n      <ion-input formControlName=\"imagen\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.imagen\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('imagen').hasError(validation.type) &&\n            (loginForm.get('imagen').dirty || loginForm.get('imagen').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n\n\n    <br>\n    <br>\n    \n    <br>\n    <br>\n    <br>\n    <br>\n    <div class=\"msjErr\">{{errorMessage}}</div>\n    <ion-button class=\"botIng\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      [disabled]=\"!loginForm.valid\"\n      type=\"submit\"\n      >Agregar Empleado</ion-button\n    >\n  </form>\n</ion-content>\n\n<ion-footer>\n  \n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=components-admin-agregar-empleado-agregar-empleado-module.js.map