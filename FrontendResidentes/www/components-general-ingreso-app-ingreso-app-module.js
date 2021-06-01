(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-general-ingreso-app-ingreso-app-module"],{

/***/ "Xgic":
/*!********************************************************************!*\
  !*** ./src/app/components/general/ingreso-app/ingreso-app.page.ts ***!
  \********************************************************************/
/*! exports provided: IngresoAppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoAppPage", function() { return IngresoAppPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingreso_app_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingreso-app.page.html */ "uOTU");
/* harmony import */ var _ingreso_app_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingreso-app.page.scss */ "rKD7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_servIngre_authenticate_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/servIngre/authenticate-service.service */ "9LO7");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");








let IngresoAppPage = class IngresoAppPage {
    constructor(personasService, formBuilder, authService, navCtrl) {
        this.personasService = personasService;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.admin = 0;
        this.validation_messages = {
            email: [
                { type: "required", message: " El email es requerido" },
                { type: "pattern", message: "Correo no válido" }
            ],
            password: [
                { type: "required", message: " El password es requerido" },
                { type: "minlength", message: "Minimo 3 letras para el password" }
            ]
        };
        this.errorMessage = "";
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]))
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]))
        });
    }
    loginUser(credentials) {
        this.authService.loginUser(credentials).then(res => {
            this.errorMessage = "";
            let cor;
            cor = this.personasService.getIdPersona(credentials.email);
            this.personasService.setPersonaActiva(cor);
            this.loginForm.clearValidators();
            this.navCtrl.navigateForward("/netflix");
        }).catch(err => {
            this.errorMessage = err;
        });
    }
    goToRegister() {
        //this.personasService.calTiempPantalla1(new Date().getTime()); 
        this.navCtrl.navigateForward("/registro");
    }
};
IngresoAppPage.ctorParameters = () => [
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_7__["PersonasService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_Services_servIngre_authenticate_service_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticateServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
IngresoAppPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ingreso-app',
        template: _raw_loader_ingreso_app_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ingreso_app_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IngresoAppPage);



/***/ }),

/***/ "hRRC":
/*!******************************************************************************!*\
  !*** ./src/app/components/general/ingreso-app/ingreso-app-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: IngresoAppPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoAppPageRoutingModule", function() { return IngresoAppPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ingreso_app_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingreso-app.page */ "Xgic");




const routes = [
    {
        path: '',
        component: _ingreso_app_page__WEBPACK_IMPORTED_MODULE_3__["IngresoAppPage"]
    }
];
let IngresoAppPageRoutingModule = class IngresoAppPageRoutingModule {
};
IngresoAppPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IngresoAppPageRoutingModule);



/***/ }),

/***/ "rKD7":
/*!**********************************************************************!*\
  !*** ./src/app/components/general/ingreso-app/ingreso-app.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\n\n.Foto {\n  max-width: 500px;\n  max-height: 500px;\n  padding-left: 125px;\n  padding-right: 125px;\n}\n\n.msjVeri {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n}\n\n.for {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n  color: var(--ion-color-residente-txt);\n}\n\n.req {\n  font-weight: bold;\n  color: var(--ion-color-residente-txt);\n}\n\n.bFin {\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.botIng {\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.msjErr {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--ion-color-residente);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2luZ3Jlc28tYXBwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQUROOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFNRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtBQUhKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxxQ0FBQTtBQUZKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFNSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUFITiIsImZpbGUiOiJpbmdyZXNvLWFwcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB9XG4gIH1cbiAgLkZvdG8ge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjEyNXB4O1xuICAgIFxuICB9XG5cblxuICAubXNqVmVyaXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5mb3J7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlLXR4dCk7XG4gIH1cbiAgLnJlcXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZS10eHQpO1xuICB9XG4uYkZpbntcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDo2MHB4O1xufVxuLmJvdEluZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDo2MHB4O1xufVxuLm1zakVycntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuICBpb24tY29udGVudCB7XG4gICAgXG4gIFxuICAgICNoZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZXNpZGVudGUpO1xuICAgICBcbiAgXG4gICAgICBcbiAgICB9XG4gIFxuICAgIFxuICB9Il19 */");

/***/ }),

/***/ "uOTU":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/ingreso-app/ingreso-app.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div color= \"residente\" id=\"header\">\n    <h1 >Login</h1>\n    \n  </div>\n <br> \n<div class=\"Foto\"> \n  <ion-img  \n    src= \"/../../../../../assets/icon/IconConjuntos/logo app majo sin fondo.png \">\n  </ion-img>\n</div>\n\n  <form class=\"for\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n    <ion-item>\n      <ion-label class=\"req\" >Email</ion-label>\n      <ion-input formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('email').hasError(validation.type) &&\n            (loginForm.get('email').dirty || loginForm.get('email').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <br>\n    <br>\n    <ion-item>\n      <ion-label class=\"req\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('password').hasError(validation.type) &&\n            (loginForm.get('password').dirty ||\n              loginForm.get('password').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <br>\n    <br>\n    <br>\n    <div class=\"msjErr\">{{errorMessage}}</div>\n    <ion-button class=\"botIng\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      [disabled]=\"!loginForm.valid\"\n      type=\"submit\"\n      >Ingresar</ion-button\n    >\n    <br>\n    <ion-button class=\"botIng\"\n      (click)=\"goToRegister()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n      >Registrarse</ion-button\n    >\n  </form>\n</ion-content>\n\n<ion-footer>\n  \n</ion-footer>");

/***/ }),

/***/ "y6Xf":
/*!**********************************************************************!*\
  !*** ./src/app/components/general/ingreso-app/ingreso-app.module.ts ***!
  \**********************************************************************/
/*! exports provided: IngresoAppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoAppPageModule", function() { return IngresoAppPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ingreso_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingreso-app-routing.module */ "hRRC");
/* harmony import */ var _ingreso_app_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingreso-app.page */ "Xgic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ingre_apto_ingre_apto_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ingre-apto/ingre-apto.page */ "NCAi");









const routes = [
    {
        path: "",
        component: _ingre_apto_ingre_apto_page__WEBPACK_IMPORTED_MODULE_8__["IngreAptoPage"]
    }
];
let IngresoAppPageModule = class IngresoAppPageModule {
};
IngresoAppPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ingreso_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngresoAppPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        declarations: [_ingreso_app_page__WEBPACK_IMPORTED_MODULE_6__["IngresoAppPage"]]
    })
], IngresoAppPageModule);



/***/ })

}]);
//# sourceMappingURL=components-general-ingreso-app-ingreso-app-module.js.map