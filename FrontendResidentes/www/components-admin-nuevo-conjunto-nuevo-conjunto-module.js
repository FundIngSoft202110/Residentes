(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin-nuevo-conjunto-nuevo-conjunto-module"],{

/***/ "3+as":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/nuevo-conjunto/nuevo-conjunto.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"residente\">\n  </ion-toolbar >\n  <ion-toolbar>\n      <ion-buttons slot=\"start\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" color=\"residente-txt\"></ion-icon><ion-label slot=\"start\" color=\"residente-txt\"><strong>&nbsp;&nbsp;Agregar Conjunto</strong></ion-label>\n      </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <form class=\"for\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n    <ion-item>\n      <ion-label class=\"req\" >Nombre conjunto</ion-label>\n      <ion-input formControlName=\"nombre\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.nombre\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('nombre').hasError(validation.type) &&\n            (loginForm.get('nombre').dirty || loginForm.get('nombre').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label class=\"req\" >Dirección</ion-label>\n      <ion-input formControlName=\"direccion\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.direccion\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('direccion').hasError(validation.type) &&\n            (loginForm.get('direccion').dirty || loginForm.get('direccion').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label class=\"req\" >Precio admin</ion-label>\n      <ion-input formControlName=\"precioAdmin\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.precioAdmin\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('precioAdmin').hasError(validation.type) &&\n            (loginForm.get('precioAdmin').dirty || loginForm.get('precioAdmin').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n\n    <ion-item>\n      <ion-label class=\"req\" >Link de pago</ion-label>\n      <ion-input formControlName=\"linkPago\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.linkPago\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('linkPago').hasError(validation.type) &&\n            (loginForm.get('linkPago').dirty || loginForm.get('linkPago').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n\n    <ion-item>\n      <ion-label class=\"req\" ># de torres</ion-label>\n      <ion-input formControlName=\"numTorres\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.numTorres\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('numTorres').hasError(validation.type) &&\n            (loginForm.get('numTorres').dirty || loginForm.get('numTorres').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label class=\"req\" ># de pisos</ion-label>\n      <ion-input formControlName=\"numPisos\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.numPisos\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('numPisos').hasError(validation.type) &&\n            (loginForm.get('numPisos').dirty || loginForm.get('numPisos').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label class=\"req\" ># aptos por piso</ion-label>\n      <ion-input formControlName=\"numAptos\"></ion-input>\n    </ion-item>\n    <div class=\"validation-error\">\n      <ng-container *ngFor=\"let validation of validation_messages.numAptos\">\n        <div class=\"msjVeri\"\n          *ngIf=\"\n            loginForm.get('numAptos').hasError(validation.type) &&\n            (loginForm.get('numAptos').dirty || loginForm.get('numAptos').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <br>\n    <br>\n    <br>\n    <div class=\"msjErr\">{{errorMessage}}</div>\n    <ion-button class=\"botIng\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      [disabled]=\"!loginForm.valid\"\n      type=\"submit\"\n      >Agregar</ion-button\n    >\n  </form>\n</ion-content>\n\n<ion-footer>\n  \n</ion-footer>");

/***/ }),

/***/ "8cPq":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin/nuevo-conjunto/nuevo-conjunto.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-button {\n  text-transform: initial;\n  font-size: 17px;\n}\n\n.msjVeri {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: red;\n}\n\n.for {\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n  color: var(--ion-color-residente-txt);\n}\n\n.req {\n  font-weight: bold;\n  color: var(--ion-color-residente-txt);\n}\n\n.bFin {\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.botIng {\n  padding-left: 60px;\n  padding-right: 60px;\n}\n\n.msjErr {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--ion-color-residente);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL251ZXZvLWNvbmp1bnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQUROOztBQUlFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLHFDQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUlJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQUROIiwiZmlsZSI6Im51ZXZvLWNvbmp1bnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cbiAgfVxuICAubXNqVmVyaXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5mb3J7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlLXR4dCk7XG4gIH1cbiAgLnJlcXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZS10eHQpO1xuICB9XG4uYkZpbntcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDo2MHB4O1xufVxuLmJvdEluZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDo2MHB4O1xufVxuLm1zakVycntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuICBpb24tY29udGVudCB7XG4gICAgXG4gIFxuICAgICNoZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZXNpZGVudGUpO1xuICAgICBcbiAgXG4gICAgICBcbiAgICB9XG4gIFxuICAgIFxuICB9Il19 */");

/***/ }),

/***/ "R3ni":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin/nuevo-conjunto/nuevo-conjunto.module.ts ***!
  \**************************************************************************/
/*! exports provided: NuevoConjuntoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoConjuntoPageModule", function() { return NuevoConjuntoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _nuevo_conjunto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuevo-conjunto-routing.module */ "er8Z");
/* harmony import */ var _nuevo_conjunto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuevo-conjunto.page */ "wcUT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const routes = [
    {
        path: "",
        component: _nuevo_conjunto_page__WEBPACK_IMPORTED_MODULE_6__["NuevoConjuntoPage"]
    }
];
let NuevoConjuntoPageModule = class NuevoConjuntoPageModule {
};
NuevoConjuntoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _nuevo_conjunto_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuevoConjuntoPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)
        ],
        declarations: [_nuevo_conjunto_page__WEBPACK_IMPORTED_MODULE_6__["NuevoConjuntoPage"]]
    })
], NuevoConjuntoPageModule);



/***/ }),

/***/ "er8Z":
/*!**********************************************************************************!*\
  !*** ./src/app/components/admin/nuevo-conjunto/nuevo-conjunto-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: NuevoConjuntoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoConjuntoPageRoutingModule", function() { return NuevoConjuntoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nuevo_conjunto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuevo-conjunto.page */ "wcUT");




const routes = [
    {
        path: '',
        component: _nuevo_conjunto_page__WEBPACK_IMPORTED_MODULE_3__["NuevoConjuntoPage"]
    }
];
let NuevoConjuntoPageRoutingModule = class NuevoConjuntoPageRoutingModule {
};
NuevoConjuntoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NuevoConjuntoPageRoutingModule);



/***/ }),

/***/ "kJjy":
/*!*****************************************************************!*\
  !*** ./src/app/Services/nuevConjServ/nuevoconjuserv.service.ts ***!
  \*****************************************************************/
/*! exports provided: NuevoconjuservService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoconjuservService", function() { return NuevoconjuservService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let NuevoconjuservService = class NuevoconjuservService {
    constructor(http) {
        this.http = http;
        this.nomConj = [
            {
                nombre: "arces",
                direccion: "carrera 113"
            },
            {
                nombre: "manzanares",
                direccion: "carrera 45"
            },
            {
                nombre: "chocolate",
                direccion: "carrera 66"
            }
        ];
    }
    getConjuntos() {
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/Conjuntos/nombredir/");
    }
    obtener(url) {
        this.conjuntosLec = [];
        this.getConjj(url)
            .subscribe(respuesta => {
            this.conjuntosLec = respuesta;
        });
    }
    getConjj(url) {
        return this.http.get(url);
    }
    obtenerConjuntos() {
        return this.nomConj;
    }
    obtenerConjLec() {
        return this.conjuntosLec;
    }
    postConjuntoS(url, body) {
        return this.http.post(url, body);
    }
    enviarConj(body, id) {
        this.postConjuntoS(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/Conjuntos/NuevoConjunto/" + id.toString(), body)
            .subscribe(respuesta => {
            this.respuesta = respuesta;
        });
    }
    getRespuesta() {
        return this.respuesta;
    }
};
NuevoconjuservService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NuevoconjuservService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], NuevoconjuservService);



/***/ }),

/***/ "wcUT":
/*!************************************************************************!*\
  !*** ./src/app/components/admin/nuevo-conjunto/nuevo-conjunto.page.ts ***!
  \************************************************************************/
/*! exports provided: NuevoConjuntoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoConjuntoPage", function() { return NuevoConjuntoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nuevo_conjunto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nuevo-conjunto.page.html */ "3+as");
/* harmony import */ var _nuevo_conjunto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuevo-conjunto.page.scss */ "8cPq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_Services_nuevConjServ_nuevoconjuserv_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/nuevConjServ/nuevoconjuserv.service */ "kJjy");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");









let NuevoConjuntoPage = class NuevoConjuntoPage {
    constructor(formBuilder, navCtrl, serCon, personasService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.serCon = serCon;
        this.personasService = personasService;
        this.validation_messages = {
            nombre: [
                { type: "required", message: " El nombre es requerido" }
            ],
            direccion: [
                { type: "required", message: " El piso es requerido" }
            ],
            precioAdmin: [
                { type: "required", message: " El precio es requerido" },
                { type: "pattern", message: "Solo números son validos" }
            ],
            linkPago: [
                { type: "required", message: " El link es requerido" },
            ],
            numTorres: [
                { type: "required", message: " El numero de torres es requerido" },
                { type: "pattern", message: "Solo números son validos" }
            ],
            numPisos: [
                { type: "required", message: " El numero de pisos es requerido" },
                { type: "pattern", message: "Solo números son validos" }
            ],
            numAptos: [
                { type: "required", message: " El numero de apartamentos es requerida" },
                { type: "minlength", message: "Solo números son validos" }
            ]
        };
        this.loginForm = this.formBuilder.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            precioAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")
            ])),
            linkPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            numTorres: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")
            ])),
            numPisos: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")
            ])),
            numAptos: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$")
            ]))
        });
    }
    ngOnInit() {
        this.usuario = this.personasService.getPersonaActiva();
        this.user = this.personasService.getPersonaID();
        this.serCon.getConjuntos();
        //this.nombreDir = this.serCon.obtenerConjuntos();
    }
    loginUser(credentials) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.nombreDir = this.serCon.obtenerConjLec();
            this.num = 0;
            for (let entry of this.nombreDir) {
                if (entry.nombre == credentials.nombre) {
                    this.num = 1;
                }
                if (entry.direccion == credentials.direccion) {
                    this.num = 2;
                }
            }
            if (this.num == 0) {
                this.serCon.enviarConj(credentials, this.user);
                yield this.waitBD();
                this.errorMessage = this.serCon.getRespuesta();
                console.log("ERROOR MENSAJE: ", this.errorMessage);
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()(this.errorMessage.respuesta, 'sucess');
                this.navCtrl.navigateForward("/netflix");
            }
            if (this.num == 1) {
                this.errorMessage = "Nombre ya inscrito";
            }
            if (this.num == 2) {
                this.errorMessage = "Dirección ya inscrita";
            }
        });
    }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 2000));
        });
    }
    goBack() {
        this.navCtrl.navigateForward("/netflix");
    }
};
NuevoConjuntoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_Services_nuevConjServ_nuevoconjuserv_service__WEBPACK_IMPORTED_MODULE_7__["NuevoconjuservService"] },
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_8__["PersonasService"] }
];
NuevoConjuntoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuevo-conjunto',
        template: _raw_loader_nuevo_conjunto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuevo_conjunto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NuevoConjuntoPage);



/***/ })

}]);
//# sourceMappingURL=components-admin-nuevo-conjunto-nuevo-conjunto-module.js.map