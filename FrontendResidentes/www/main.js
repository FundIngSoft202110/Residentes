(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XSt":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/quejas-admin-component/quejas-admin-component.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: QuejasAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejasAdminComponent", function() { return QuejasAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_quejas_admin_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./quejas-admin-component.component.html */ "hxzB");
/* harmony import */ var _quejas_admin_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quejas-admin-component.component.scss */ "Di8j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_quejas_admins_quejas_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/quejas-admins/quejas-admin.service */ "2F54");






let QuejasAdminComponent = class QuejasAdminComponent {
    constructor(conjServ, quejServ) {
        this.conjServ = conjServ;
        this.quejServ = quejServ;
        this.quejas = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.idAConj = this.conjServ.getConjuntoActivo();
            console.log("Conjunto Quejas: ", this.idAConj);
            this.quejServ.getQuejas(this.idAConj);
            yield this.waitBD();
            this.quejas = this.quejServ.getQujeasList();
            console.log("Quejas: ", this.quejas);
        });
    }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 500));
        });
    }
};
QuejasAdminComponent.ctorParameters = () => [
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__["ConjuntosService"] },
    { type: src_app_Services_quejas_admins_quejas_admin_service__WEBPACK_IMPORTED_MODULE_5__["QuejasAdminService"] }
];
QuejasAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-quejas-admin-component',
        template: _raw_loader_quejas_admin_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_quejas_admin_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QuejasAdminComponent);



/***/ }),

/***/ "+m8f":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/residente/quejas-residente-component/quejas-residente-component.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 20px;\n}\n\n::ng-deep .second-group {\n  background-color: rgba(191, 191, 191, 0.15);\n}\n\n#Hacermargen {\n  margin: 20px;\n  margin-bottom: 450px;\n}\n\n#colorverde {\n  background-color: aquamarine;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1ZWphcy1yZXNpZGVudGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDJDQUFBO0FBQ0o7O0FBRUE7RUFDQyxZQUFBO0VBQ0Esb0JBQUE7QUFDRDs7QUFHQTtFQUVJLDRCQUFBO0FBREoiLCJmaWxlIjoicXVlamFzLXJlc2lkZW50ZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmZpcnN0LWdyb3VwLFxuOjpuZy1kZWVwIC5zZWNvbmQtZ3JvdXAge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAuc2Vjb25kLWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MSwgMTkxLCAxOTEsIDAuMTUpO1xufVxuXG4jSGFjZXJtYXJnZW57XG4gbWFyZ2luOiAyMHB4O1xuIG1hcmdpbi1ib3R0b206IDQ1MHB4O1xuICAgIH1cblxuXG4jY29sb3J2ZXJkZXtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "+udL":
/*!******************************************************!*\
  !*** ./src/app/Services/paquetes/paquetePK.model.ts ***!
  \******************************************************/
/*! exports provided: PaquetePK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaquetePK", function() { return PaquetePK; });
class PaquetePK {
}


/***/ }),

/***/ "/jPa":
/*!********************************************************************************!*\
  !*** ./src/app/components/empleado/nuevo-paquete/nuevo-paquete.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  box-shadow: none !important;\n}\n\nion-select {\n  width: 120%;\n  border: solid 1px var(--ion-color-residente-txt);\n}\n\nion-label {\n  font-size: 20px;\n}\n\n#centrado {\n  text-align: center;\n}\n\n.content-div {\n  height: 70%;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\nion-select::part(icon) {\n  color: var(--ion-color-residente-txt);\n}\n\n#rounded {\n  width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\nion-input {\n  width: 10%;\n  border: solid 1px var(--ion-color-residente-txt);\n}\n\n/* .msjVeri{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: red;\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL251ZXZvLXBhcXVldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdEQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnREFBQTtBQUNKOztBQUVBOzs7OztLQUFBIiwiZmlsZSI6Im51ZXZvLXBhcXVldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3R7XG4gICAgd2lkdGg6IDEyMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZS10eHQpO1xufVxuXG5pb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jY2VudHJhZG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1kaXZ7XG4gICAgaGVpZ2h0OiA3MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlLXR4dCk7ICBcbn1cblxuI3JvdW5kZWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxufVxuXG5pb24taW5wdXR7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlLXR4dCk7XG59XG5cbi8qIC5tc2pWZXJpe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmVkO1xuICB9ICovXG5cbiJdfQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alejandrodiaz/Desktop/Residentes/FrontendResidentes/src/main.ts */"zUnb");


/***/ }),

/***/ "0ac8":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/components/admin/lista-asambleas-admin/lista-asasamblea-admin/lista-asasamblea-admin.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ListaAsasambleaAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAsasambleaAdminComponent", function() { return ListaAsasambleaAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_asasamblea_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista-asasamblea-admin.component.html */ "8JLN");
/* harmony import */ var _lista_asasamblea_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-asasamblea-admin.component.scss */ "ldzN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/asambleas/asamblea.service */ "jORC");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");







let ListaAsasambleaAdminComponent = class ListaAsasambleaAdminComponent {
    constructor(asambleaService, navCtrl, conjuntosService, alertController) {
        this.asambleaService = asambleaService;
        this.navCtrl = navCtrl;
        this.conjuntosService = conjuntosService;
        this.alertController = alertController;
        this.asambleas = [];
    }
    ngOnInit() {
    } // end ngOnInit
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 600));
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.idConjunto = this.conjuntosService.getConjuntoActivo();
            this.asambleaService.cargarAsambleas(this.idConjunto);
            yield this.waitBD();
            this.asambleas = this.asambleaService.getAsambleas();
            console.log("Asambleas: ", this.asambleas);
        });
    } // end ionViewWillEnter
    goRoute(asamblea) {
        console.log("Asamblea = ", asamblea.asambleaPK.idAsamblea, " Estado = ", asamblea.estado);
        this.asambleaService.setAsambleaAbierta(asamblea.asambleaPK.idAsamblea);
        this.asambleaService.setAsambleaEstado(asamblea.estado);
        this.navCtrl.navigateForward("/asamblea-admin");
    }
    presentAlertConfirmAsamblea() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Información',
                message: 'No es posible acceder a asambleas programadas',
                buttons: [
                    {
                        text: 'Aceptar',
                        cssClass: 'aceptar',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    } // end presentAlertConfirm
    getAsambleaFecha(asamblea) {
        return this.conjuntosService.convertDate(asamblea.fecha);
    } // end getAsambleaFecha
    getAsambleaHora(asamblea) {
        return this.conjuntosService.convertHour(asamblea.hora);
    } // end getAsambleaFecha
    getAsambleaEstado(asamblea) {
        if (asamblea.estado == 'F')
            return "Finalizada";
        else if (asamblea.estado == 'P')
            return "Programada";
        else if (asamblea.estado == 'A')
            return "Activa";
    } // end getAsambleaEstado
    botonNuevoPaquete() {
    }
};
ListaAsasambleaAdminComponent.ctorParameters = () => [
    { type: src_app_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__["AsambleaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__["ConjuntosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ListaAsasambleaAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lista-asasamblea-admin',
        template: _raw_loader_lista_asasamblea_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_asasamblea_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListaAsasambleaAdminComponent);



/***/ }),

/***/ "0bnJ":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/general/acerca-nosotros-component/acerca-nosotros-component.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2VyY2Etbm9zb3Ryb3MtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "1+9e":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/menu-admin/menu-admin.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "1nk4":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/residente/paquetes-residente-component/paquetes-residente-component.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PaquetesResidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaquetesResidenteComponent", function() { return PaquetesResidenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paquetes_residente_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paquetes-residente-component.component.html */ "3HAE");
/* harmony import */ var _paquetes_residente_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paquetes-residente-component.component.scss */ "SLOb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/ingreAptoServ/serv-ing-apto.service */ "CaST");
/* harmony import */ var src_app_Services_paquetes_paquetes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/paquetes/paquetes.service */ "BdLC");







let PaquetesResidenteComponent = class PaquetesResidenteComponent {
    constructor(paquetesService, conjuntosService, servIngAptoService) {
        this.paquetesService = paquetesService;
        this.conjuntosService = conjuntosService;
        this.servIngAptoService = servIngAptoService;
        this.paquetes = [];
        this.paqueteView = [];
        this.length = -1;
    }
    ngOnInit() {
        this.length = -1;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.length = -1;
            this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
            this.aptoActivo = this.servIngAptoService.getIdApto();
            this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoActivo);
            yield this.waitBD();
            this.paquetesSer = this.paquetesService.getPaquetes();
            console.log("PAQUETESSSSSS : ", this.paquetesSer);
            var conteo = 0;
            for (let paquete of this.paquetesSer) {
                var paqueteAux = { num: conteo + 1, paquete: this.paquetesSer[conteo] };
                conteo += 1;
                this.paquetes.push(paqueteAux);
            }
            for (let paquete of this.paquetes)
                this.paqueteView.push('oculto');
            this.length = this.paquetes.length;
        });
    } // end ionViewWillEnter
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1000));
        });
    } // end waitBD
    listOpen(paquete) {
        if (this.paqueteView[paquete.num - 1] == 'mostrar') {
            this.paqueteView[paquete.num - 1] = 'oculto';
        }
        else {
            this.paqueteView[paquete.num - 1] = 'mostrar';
        }
    }
    getLength() {
        return this.length;
    }
    getPaqueteView(paquete) {
        return this.paqueteView[paquete.num - 1];
    }
    convertHour(hour) {
        return this.conjuntosService.convertHour(hour);
    } // end convertHour
    convertDate(date) {
        return this.conjuntosService.convertDate(date);
    } // end convertDate
}; // end PaquetesResidenteComponent
PaquetesResidenteComponent.ctorParameters = () => [
    { type: src_app_Services_paquetes_paquetes_service__WEBPACK_IMPORTED_MODULE_6__["PaquetesService"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__["ConjuntosService"] },
    { type: src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_5__["ServIngAptoService"] }
];
PaquetesResidenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paquetes-residente-component',
        template: _raw_loader_paquetes_residente_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paquetes_residente_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaquetesResidenteComponent);



/***/ }),

/***/ "1vwr":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/admin/agregar-conjunto-component/agregar-conjunto-component.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AgregarConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarConjuntoComponent", function() { return AgregarConjuntoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agregar_conjunto_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agregar-conjunto-component.component.html */ "OH9x");
/* harmony import */ var _agregar_conjunto_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregar-conjunto-component.component.scss */ "7uJe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Services_agregar_conjunto_agregar_conjunto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/agregar-conjunto/agregar-conjunto.service */ "z89l");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "hYZE");








const sendRequest = function (value) {
    const validNombe = "Manzanares";
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(value != validNombe);
        }, 1000);
    });
};
const sendRequestDirect = function (value) {
    const validDire = "Carrera 7 #2";
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(value != validDire);
        }, 1000);
    });
};
let AgregarConjuntoComponent = class AgregarConjuntoComponent {
    constructor(router, service) {
        this.router = router;
        this.posi = "top";
        this.buttonOptions = {
            text: "Agregar",
            type: "success",
            useSubmitBehavior: true
        };
        this.onFormSubmit = function (e) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5___default()({
                message: "Conjunto agregado",
                position: {
                    my: "center top",
                    at: "center top"
                }
            }, "success", 3000);
            e.preventDefault();
            this.router.navigateByUrl("/netflix");
        };
        this.conjunto = service.getConjunto();
    }
    checkComparison() {
        return true;
    }
    asyncValidation(params) {
        return sendRequest(params.value);
    }
    asyncValidationDirec(params) {
        return sendRequestDirect(params.value);
    }
    ngOnInit() {
    }
    finish() {
        // this.storage.set('isIntroShowed',true );
        console.log();
        this.router.navigateByUrl("/seleccion-conjunto");
    }
};
AgregarConjuntoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_agregar_conjunto_agregar_conjunto_service__WEBPACK_IMPORTED_MODULE_6__["AgregarConjuntoService"] }
];
AgregarConjuntoComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormComponent"], { static: false },] }]
};
AgregarConjuntoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agregar-conjunto-component',
        template: _raw_loader_agregar_conjunto_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agregar_conjunto_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /*
    class  ConjuntoDTO{
        nombre : string ;
        linkPago: string ;
        direccion: string ;
        precioAdmin : number;
         numTorres: number;
         numPisos: number;
        numAptos: number;
    }*/
], AgregarConjuntoComponent);



/***/ }),

/***/ "2F54":
/*!****************************************************************!*\
  !*** ./src/app/Services/quejas-admins/quejas-admin.service.ts ***!
  \****************************************************************/
/*! exports provided: QuejasAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejasAdminService", function() { return QuejasAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let QuejasAdminService = class QuejasAdminService {
    constructor(http) {
        this.http = http;
        this.quejas2 = [
            {
                Nombre: "Quintana",
                Contenido: "Mucho ruido"
            },
            {
                Nombre: "Quintana",
                Contenido: "Cansado del de al lado"
            },
            {
                Nombre: "Anonimo",
                Contenido: "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300."
            },
            {
                Nombre: "Quintana",
                Contenido: "No más vida"
            },
            {
                Nombre: "Quintana",
                Contenido: "Mucho ruido"
            },
            {
                Nombre: "Quintana",
                Contenido: "Cansado del de al lado"
            },
            {
                Nombre: "Anonimo",
                Contenido: "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300."
            },
            {
                Nombre: "Quintana",
                Contenido: "No más vida"
            }
        ];
    }
    obtener(url) {
        console.log("MUeree obtener");
        this.getQuejasAdmin(url)
            .subscribe(respuesta => {
            console.log("subscirbe ", respuesta);
            this.quejas = respuesta;
        });
    }
    getQuejas(idConjunto) {
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/quejas/quejasConjunto/" + idConjunto.toString());
    }
    getQuejasAdmin(url) {
        return this.http.get(url);
    }
    getQujeasList() {
        return this.quejas;
    }
};
QuejasAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
QuejasAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], QuejasAdminService);



/***/ }),

/***/ "2jy4":
/*!***************************************************************************************!*\
  !*** ./src/app/components/general/ingreso-component/ingreso-component.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep form {\n  font-size: 31px;\n  padding-top: 10px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2luZ3Jlc28tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUFKIiwiZmlsZSI6ImluZ3Jlc28tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46Om5nLWRlZXAgZm9ybSB7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "2rKi":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/noticias/noticias.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"NOTICIAS\" menu=\"{{getUser()}}\"></app-header>\n\n<ion-content>\n    <div>\n        <ion-card>\n            <ion-textarea [(ngModel)]=\"descripcion\" placeholder=\"Comparte con tu comunidad\" (click)=\"click()\">\n            </ion-textarea>\n            <div id=\"derecha\" *ngIf=\"getMostrar() == 1\">\n                <input type=\"file\" #fileInput (change)=\"uploadFile($event)\" hidden=\"true\" accept=\"image/*\" />\n                <ion-button color=\"residente\" id=\"botonImagen\" (click)=\"selectImageSource()\">\n                    <ion-icon name=\"image-outline\"></ion-icon>\n                </ion-button>\n            </div>\n        </ion-card>\n        <ion-row>\n            <ion-col>\n                <div id=\"izquierda\">\n                    <ion-button color=\"residente\" id=\"botonPublicar\" (click)=\"cancelarNoticia()\">\n                        <ion-label>Cancelar</ion-label>\n                    </ion-button>\n                </div>\n            </ion-col>\n            <ion-col>\n                <div id=\"derecha\">\n                    <ion-button color=\"residente\" id=\"botonPublicar\" (click)=\"publicarNoticia()\">\n                        <ion-label>Publicar</ion-label>\n                    </ion-button>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n    <div style=\"overflow:scroll\" id=\"content-div\">\n        <div *ngFor=\"let noticia of noticias\">\n            <ion-card id=\"rounded\">\n                <ion-card-content>\n                    <ion-item lines=\"none\">\n                        <ion-avatar item-start>\n                            <ion-img src=\"/../../../../assets/icon/IconConjuntos/avatar.jpg\"></ion-img>\n                        </ion-avatar>\n                        <p>&nbsp;&nbsp;{{noticia.titulo}}</p>\n                        <ion-buttons *ngIf=\"getEli(noticia)\" slot=\"end\" (click)=\"eliminarNoticia(noticia)\">\n                            <ion-icon slot=\"icon-only\" color=\"residente\" name=\"trash-outline\"></ion-icon>\n                        </ion-buttons>\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <p>{{convertDate(noticia.fecha)}}</p>\n                    </ion-item>\n                    <ion-item *ngIf=\"noticia.imagen != null\" lines=\"none\">\n                        <!--<ion-img src=\" alt=\"Conjunto\"></ion-img>-->\n                    </ion-item>\n                    <ion-item lines=\"none\">\n                        <p>{{noticia.descripcion}}</p>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "3HAE":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/paquetes-residente-component/paquetes-residente-component.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"PAQUETES\" menu=RESIDENTE></app-header>\n\n<ion-content>\n    <ion-card>\n        <div *ngFor=\"let paquete of paquetes\">\n            <ion-item>\n                <ion-label><strong> Paquete {{paquete.num}} </strong></ion-label>\n                <ion-buttons slot=\"end\" (click)=\"listOpen(paquete)\">\n                    <ion-icon slot=\"icon-only\" color=\"residente\" name=\"add-circle-outline\"></ion-icon>\n                </ion-buttons>\n            </ion-item>\n            <ion-list *ngIf=\"getPaqueteView(paquete)=='mostrar'\">\n                <ion-item>\n                    <ion-label color=\"medium\"> Tamaño: {{paquete.paquete.tamano}}</ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label color=\"medium\"> Fecha: {{convertDate(paquete.paquete.fecha)}}</ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label color=\"medium\"> Hora: {{convertHour(paquete.paquete.hora)}}</ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label color=\"medium\"> Remitente: {{paquete.paquete.remitente}}</ion-label>\n                </ion-item>\n            </ion-list>\n        </div>\n        <div *ngIf=\"getLength()==0\">\n            <ion-img src=\"/../../../../assets/icon/IconConjuntos/paquete.JPG\" alt=\"Paquete\"></ion-img>\n        </div>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "3a+L":
/*!***************************************************************************************!*\
  !*** ./src/app/components/general/registro-component/registro-component.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro-component.component.html */ "bfR7");
/* harmony import */ var _registro_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-component.component.scss */ "h0Sj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "hYZE");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Services_registro_servicio_registro_servicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/registro-servicio/registro-servicio.service */ "tHbj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");










let RegistroComponent = class RegistroComponent {
    constructor(navCtrl, RegistroServicioService, personasService) {
        this.navCtrl = navCtrl;
        this.RegistroServicioService = RegistroServicioService;
        this.personasService = personasService;
        this.labelL = "top";
        this.usuario = new _Services_registro_servicio_registro_servicio_service__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
        this.password = "";
        this.passwordOptions = {
            mode: "password",
            value: this.password
        };
        this.maxDate = new Date();
        this.namePattern = /^[^0-9]+$/;
        this.phoneRules = {
            X: /[1-9]/
        };
        this.link = "/ingreso";
        this.linkGuardado = "/noticias";
        this.passwordComparison = () => {
            return this.form.instance.option("formData").Contrasena;
        };
        // asyncValidation(params) {
        //     return sendRequest(params.value);
        // }
        this.onFormSubmit = function (e) {
            console.log("aca esta", this.usuario);
            this.post();
        };
        this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
        this.roles = [
            "Residente",
            "Empleado",
            "Administrador"
        ];
        //this.getUsarios();
    }
    ngOnInit() {
        // this.getUsarios();
        //this.personasService.difTiempo(new Date().getTime() );
        console.log("holiii", this.usuariosbase);
    }
    getUsarios(usu) {
        console.log("usu", usu);
        this.RegistroServicioService.getUsario(src_app_constants__WEBPACK_IMPORTED_MODULE_8__["IPRESIDENTESA"] + "/consultas/personas/usuario/" + usu)
            .subscribe(respuesta => {
            this.usuariosbase = respuesta;
            console.log("usu base", this.usuariosbase);
        });
    }
    postNuevo() {
        this.RegistroServicioService.postUsuarioNuevo(src_app_constants__WEBPACK_IMPORTED_MODULE_8__["IPRESIDENTESA"] + "/consultas/personas/NuevoUsuario", this.usuario)
            .subscribe(respuesta => {
            this.respuestapost = respuesta;
            this.noti = this.respuestapost.respuesta;
            console.log("este el post", this.respuestapost);
        });
    }
    checkComparison() {
        return true;
    }
    post() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postNuevo();
            console.log("posteado");
            yield this.waitBD();
            console.log("este", this.usuario.usuario);
            this.getUsarios(this.usuario.usuario);
            console.log("pide usuariio");
            yield this.waitBD();
            console.log("holiii22", this.usuariosbase);
            console.log("respuesta post", this.respuestapost);
            //cambiar por el alert de sebas
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5___default()(this.noti, 'sucess');
            console.log("ID", this.usuariosbase.idPersona);
            this.personasService.setPersonaActiva2(this.usuariosbase.idPersona, this.usuariosbase.rolConjunto);
            this.navCtrl.navigateForward("/netflix");
        });
    }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1100));
        });
    } // end waitBD
    goIngreso() {
        this.navCtrl.navigateForward("/ingreso");
    }
};
RegistroComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _Services_registro_servicio_registro_servicio_service__WEBPACK_IMPORTED_MODULE_6__["RegistroServicioService"] },
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_9__["PersonasService"] }
];
RegistroComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxFormComponent"], { static: false },] }]
};
RegistroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registro-component',
        template: _raw_loader_registro_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistroComponent);



/***/ }),

/***/ "3bdi":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/seleccion-conjunto-component/seleccion-conjunto-component.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-start titulo=\"Selecciona tu conjunto\"></app-header-start>\n<ion-content>\n    <br>\n<div class=\"list-container\">\n    <dx-list \n        #list\n        [dataSource]=\"conjuntos\"\n        [height]=\"400\"\n        [searchEnabled]=\"true\"\n        searchExpr=\"nombre\"\n        searchMode=\"contains\">\n            <div *dxTemplate=\"let data of 'item'\" (click)=\"click( data.id)\">\n                <div>{{data.Name}}</div>\n            </div>\n    </dx-list>\n</div>\n<!-------------\n    <ion-card routerLink=\"/netflix\" color= \"residente\">\n    <ion-card-header>\n        <ion-card-subtitle> Agregar </ion-card-subtitle>   \n    </ion-card-header>\n  </ion-card>\n  <ion-card routerLink=\"/nuevo-conjunto\" color= \"residente\">\n    <ion-card-header>\n        <ion-card-subtitle> Nuevo Conjunto </ion-card-subtitle>   \n    </ion-card-header>\n  </ion-card> -->\n</ion-content>\n\n");

/***/ }),

/***/ "3pVO":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/residente/modificar-reserva-area/modificar-reserva-area.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ModificarReservaAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarReservaAreaComponent", function() { return ModificarReservaAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modificar_reserva_area_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modificar-reserva-area.component.html */ "JTQN");
/* harmony import */ var _modificar_reserva_area_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modificar-reserva-area.component.scss */ "Bzye");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_modificarReservaArea_modificar_reserva_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/modificarReservaArea/modificar-reserva-area.service */ "75Pq");





let ModificarReservaAreaComponent = class ModificarReservaAreaComponent {
    constructor(service) {
        this.reserva = service.getReserva();
        this.horasDisponibles = service.getHorasDisponibles();
        this.hora_i = service.getHora_i();
        this.hora_f = service.getHora_f();
        this.cantidad_p = service.getCantidad_p();
    }
    ngOnInit() { }
};
ModificarReservaAreaComponent.ctorParameters = () => [
    { type: src_app_Services_modificarReservaArea_modificar_reserva_area_service__WEBPACK_IMPORTED_MODULE_4__["ModificarReservaAreaService"] }
];
ModificarReservaAreaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modificar-reserva-area',
        providers: [src_app_Services_modificarReservaArea_modificar_reserva_area_service__WEBPACK_IMPORTED_MODULE_4__["ModificarReservaAreaService"]],
        template: _raw_loader_modificar_reserva_area_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modificar_reserva_area_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModificarReservaAreaComponent);



/***/ }),

/***/ "3xD8":
/*!*******************************************************!*\
  !*** ./src/app/Services/personas/personas.service.ts ***!
  \*******************************************************/
/*! exports provided: PersonasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonasService", function() { return PersonasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _servIngre_authenticate_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servIngre/authenticate-service.service */ "9LO7");



let PersonasService = class PersonasService {
    constructor(authenticateServiceService) {
        this.authenticateServiceService = authenticateServiceService;
        this.personas = [
            {
                id: 1,
                nombre: "Maria",
                apellido: "Rodriguez",
                usuario: "ma.nino",
                correo: "ma.nino@javeriana.edu.co",
                clave: "Hola1234",
                numCelular: 3108291923,
                rolConjunto: "Administrador",
                oficio: null,
                foto: null
            },
            {
                id: 2,
                nombre: "Santiago",
                apellido: "Quintana",
                usuario: "s.qintana",
                correo: "s.qintana@javeriana.edu.co",
                clave: "Chao1234",
                numCelular: 3143231923,
                rolConjunto: "Residente",
                oficio: null,
                foto: null
            },
            {
                id: 3,
                nombre: "Juan",
                apellido: "Barreto",
                usuario: "juan_barreto",
                correo: "juan_barreto@javeriana.edu.co",
                clave: "Hola1234",
                numCelular: 3138290923,
                rolConjunto: "Residente",
                oficio: null,
                foto: null
            },
            {
                id: 4,
                nombre: "Zlatan",
                apellido: "Muñoz",
                usuario: "zlatan.m",
                correo: "m@hotmail.com",
                clave: "12345678",
                numCelular: 3143231643,
                rolConjunto: "Administrador",
                oficio: null,
                foto: null
            },
            {
                id: 5,
                nombre: "Jesus",
                apellido: "Palacios",
                usuario: "j.palacios",
                correo: "j@gmail.com",
                clave: "000111",
                numCelular: 3143231876,
                rolConjunto: "Empleado",
                oficio: null,
                foto: null
            }
        ];
    }
    ngInit() { }
    calTiempPantalla1(t1) {
        window.localStorage['tiempot1'] = t1.toString();
    }
    difTiempo(t2) {
        this.tiempo1 = Number(window.localStorage['tiempot1'] || -1);
        if (this.personaActiva == -1)
            return null;
        else {
            console.log("Tiempo entre pantallas: ", t2 - this.tiempo1, " ms");
            return this.personaActiva;
        }
    }
    setPersonaActiva(idPersona) {
        window.localStorage['personaActiva'] = idPersona.toString();
        this.aux = this.getRolP(idPersona);
        console.log("Jjdjd: ", this.aux);
        this.setRolPersonaActiva(this.aux);
    } // end setPersonaActiva
    setPersonaActiva2(idPersona, rol) {
        window.localStorage['personaActiva'] = idPersona.toString();
        this.setRolPersonaActiva(rol);
    } // end setPersonaActiva
    getRolP(idPersona) {
        for (let pers of this.authenticateServiceService.getP()) {
            if (idPersona == pers.idPersona)
                return pers.rolConjunto;
        }
    } // end getROlP
    setRolPersonaActiva(rolP) {
        console.log("rolP in Persona: ", rolP);
        if (rolP == "Empleado") {
            console.log("ENTREEE EMPLEADO");
            window.localStorage['rolPersonaActiva'] = "EMPLEADO";
        }
        if (rolP == "Administrador") {
            console.log("ENTREEE ADMIN");
            window.localStorage['rolPersonaActiva'] = "ADMIN";
        }
        if (rolP == "Residente" || rolP == "RESIDENTE") {
            console.log("ENTREEE RESIDENTE");
            window.localStorage['rolPersonaActiva'] = "RESIDENTE";
        }
    }
    getIdPersona(corr) {
        let cont = 0;
        for (let p of this.authenticateServiceService.getP()) {
            if (p.correo == corr) {
                return p.idPersona;
            }
            cont++;
        }
    }
    getPersonaActivaAux() {
        this.personaActiva = Number(window.localStorage['personaActiva'] || -1);
        if (this.personaActiva == -1)
            return null;
        else {
            return this.personaActiva;
        }
    }
    getPersonaActiva() {
        this.rolAux = (window.localStorage['rolPersonaActiva'] || (-1).toString());
        if (this.rolAux == -1)
            return null;
        else
            return this.rolAux;
    } // getPersonaActiva
    getPersonaID() {
        this.personaActiva = Number(window.localStorage['personaActiva'] || -1);
        if (this.personaActiva == -1)
            return null;
        else
            return this.personaActiva;
    }
    getUserActivo() {
        return this.getPersonaActiva();
    }
    getPersonas() {
        return this.personas;
    } // end getPersonas
    getPersona(personaId) {
        return this.personas.find(persona => { return persona.id == personaId; });
    } // end getPersona
    addPersona(nombre, apellido, usuario, correo, clave, numCelular, rolConjunto) {
        this.personas.push({
            id: this.personas.length + 1,
            nombre,
            apellido,
            usuario,
            correo,
            clave,
            numCelular,
            rolConjunto,
            oficio: null,
            foto: null
        });
    } // end addPersona
    deletePersona(personaId) {
        this.personas.splice(personaId, 1);
    } // end deletePersona
};
PersonasService.ctorParameters = () => [
    { type: _servIngre_authenticate_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateServiceService"] }
];
PersonasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PersonasService);



/***/ }),

/***/ "3xyo":
/*!******************************************************************************!*\
  !*** ./src/app/components/empleado/menu-empleado/menu-empleado.component.ts ***!
  \******************************************************************************/
/*! exports provided: MenuEmpleadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEmpleadoComponent", function() { return MenuEmpleadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_empleado_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-empleado.component.html */ "Yv7I");
/* harmony import */ var _menu_empleado_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-empleado.component.scss */ "9VKV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");





let MenuEmpleadoComponent = class MenuEmpleadoComponent {
    constructor(conjuntoService) {
        this.conjuntoService = conjuntoService;
    }
    ngOnInit() { }
};
MenuEmpleadoComponent.ctorParameters = () => [
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__["ConjuntosService"] }
];
MenuEmpleadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-empleado',
        template: _raw_loader_menu_empleado_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_empleado_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuEmpleadoComponent);



/***/ }),

/***/ "4Jso":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empleado/nuevo-paquete/nuevo-paquete.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"PAQUETES\" menu=NO routeBack=\"/paquetes-empleado\"></app-header>\n\n<ion-content>\n  <div class=\"content-div\">\n    <ion-card> <br> <br> \n      <ion-label color=\"dark\">&nbsp;&nbsp;&nbsp;&nbsp;Tamaño</ion-label>\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-select [(ngModel)]=\"tamanoSeleccionado\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"&nbsp;&nbsp;Seleccione\"\n            id=\"rounded\">\n            <div>\n              <ion-select-option value=\"grande\">&nbsp;&nbsp;grande</ion-select-option>\n              <ion-select-option value=\"mediano\">&nbsp;&nbsp;mediano</ion-select-option>\n              <ion-select-option value=\"pequeño\">&nbsp;&nbsp;pequeño</ion-select-option>\n            </div>\n          </ion-select>\n        </ion-item>\n      </ion-list> \n    </ion-card> \n    <ion-card>\n      <ion-label color=\"dark\">&nbsp;&nbsp;&nbsp;&nbsp;Fecha</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input disabled id=\"labelborde\" id=\"rounded\">&nbsp;&nbsp;{{getFecha()}}</ion-input>\n      </ion-item>\n    </ion-card> \n\n    <ion-card>\n      <ion-label color=\"dark\">&nbsp;&nbsp;&nbsp;&nbsp;Hora</ion-label>\n      <ion-item lines=\"none\">\n          <ion-input disabled id=\"labelborde\" id=\"rounded\">&nbsp;&nbsp;{{getHora()}}</ion-input>\n      </ion-item>\n    </ion-card> \n\n    <ion-card>\n      <ion-label color=\"dark\">&nbsp;&nbsp;&nbsp;&nbsp;Remitente</ion-label>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"remi\" id=\"rounded\">&nbsp;&nbsp;</ion-input>\n      </ion-item>\n    </ion-card>\n  </div>\n\n  <div id=\"centrado\">\n    <br> <br>\n    <ion-button color=\"{{getColorReportar()}}\" (click)=\"botonReportar()\">\n      <ion-label> Reportar </ion-label>\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "4KHd":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/quejas-residente-component/quejas-residente-component.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"colorverde\">\n<app-header-start titulo=\"MANIFIESTA TU QUEJA\"></app-header-start>\n</div>\n\n\n<dx-form id=\"Hacermargen\"\n    [formData]=\"queja\">\n    <dxi-item itemType=\"group\" cssClass=\"first-group\" [colCount]=\"4\">\n\n        <dxi-item itemType=\"group\" [colSpan]=\"3\">\n                <dxi-item dataField=\"ID\" [editorOptions]=\"{ disabled:true}\"></dxi-item>\n            <dxi-item dataField=\"Torre\" [editorOptions]=\"{ disabled:true}\"></dxi-item>\n            <dxi-item dataField=\"Apartamento\" [editorOptions]=\"{ disabled:true}\"></dxi-item>\n        </dxi-item>\n    </dxi-item>\n    <dxi-item itemType=\"group\" cssClass=\"second-group\" [colCount]=\"2\">\n        <dxi-item dataField=\"Notes\" [colSpan]=\"2\" editorType=\"dxTextArea\" [editorOptions]=\"{ height: 140 }\"></dxi-item>\n    </dxi-item>\n</dx-form>");

/***/ }),

/***/ "4OOy":
/*!*********************************************************************!*\
  !*** ./src/app/components/general/empleados/empleados.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmpleadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosComponent", function() { return EmpleadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_empleados_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./empleados.component.html */ "faCD");
/* harmony import */ var _empleados_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleados.component.scss */ "wW1x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_lstChatServ_lst_chat_servicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/lstChatServ/lst-chat-servicio.service */ "aTLU");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");








let EmpleadosComponent = class EmpleadosComponent {
    //@Input() routeBack: string
    constructor(conjServ, serChats, personasService, navCtrl) {
        this.conjServ = conjServ;
        this.serChats = serChats;
        this.personasService = personasService;
        this.navCtrl = navCtrl;
        this.length = -1;
        this.user = "RESIDENTE";
        //private personasService:PersonasService;
        this.rol = 'A';
        this.chats = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.length = -1;
            this.idAConj = this.conjServ.getConjuntoActivo();
            console.log("entreee");
            this.rol = this.personasService.getUserActivo();
            if (this.rol == "EMPLEADO") {
                console.log("entreee Emp");
                this.serChats.getlstMsjAptoAdmin(this.idAConj);
                console.log(this.chats);
            }
            if (this.rol == "ADMIN") {
                console.log("entreee admun");
                this.serChats.getlstMsjAptoEmp(this.idAConj);
            }
            if (this.rol == "RESIDENTE") {
                console.log("entreee res");
                this.serChats.getlstMsjsEmpAdmin(this.idAConj);
            }
            yield this.waitBD();
            this.chats = this.serChats.getChat();
            console.log("WAIT: ", this.chats);
            this.chatBuscado = this.chats;
            this.length = this.chatBuscado.length();
        });
    }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 250));
        });
    }
    getUser() {
        return this.personasService.getUserActivo();
    }
    getChatBuscado() {
        return this.chatBuscado;
    }
    buscarChat(event) {
        const text = event.target.value;
        this.chatBuscado = this.chats;
        if (text && text.trim() != '') {
            this.chatBuscado = this.chatBuscado.filter((chat) => {
                return ((chat.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1) || (chat.oficio.toLowerCase().indexOf(text.toLowerCase()) > -1));
            });
        }
    }
    elegirChat(chat) {
        this.serChats.setChatActivo(chat.nombre, chat.rol, chat.idc);
        console.log(chat.nombre);
        console.log(chat.rol);
        console.log(chat.idc);
    }
    goToAdd() {
        console.log("Quintana ");
        this.navCtrl.navigateForward("/agregar-empleado");
    }
    getLength() {
        return this.length;
    }
};
EmpleadosComponent.ctorParameters = () => [
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_5__["ConjuntosService"] },
    { type: src_app_Services_lstChatServ_lst_chat_servicio_service__WEBPACK_IMPORTED_MODULE_6__["LstChatServicioService"] },
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_7__["PersonasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
EmpleadosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-empleados',
        template: _raw_loader_empleados_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_empleados_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmpleadosComponent);



/***/ }),

/***/ "4Tm1":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/agregar-area-admin/agregar-area-admin.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"AGREGAR ÁREA COMÚN\" menu=NO routeBack=\"/area-comun-admin\"></app-header>\n<div class=\"borde\">\n<dx-form id=\"form\"\n\t[formData]=\"nuevaArea\"\n\t[labelLocation]=\"label\">\n\t<dxi-item itemType=\"group\" cssClass=\"first-group\" [colCount]=\"4\">\n\t\t\n\t\t\t\t<dxi-item dataField=\"nombre\"></dxi-item>\n            \t<dxi-item dataField=\"tipo\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: tipo, value: '' }\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"capacidad\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"horaApertura\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: horaDeApertura, value: '' }\"></dxi-item>\n            \t<dxi-item dataField=\"horaCierre\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: horaDeCierre, value: '' }\"></dxi-item>\n            \t<dxi-item dataField=\"nombreDia\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: diasDisponibles, value: '' }\"></dxi-item>\n                <dxi-item dataField=\"descripcion\" [colSpan]=\"2\" editorType=\"dxTextArea\" [editorOptions]=\"{ height: 140  }\"></dxi-item>\n\t</dxi-item>\n\n</dx-form>\n\n</div>\n\n<ion-button class=\"botIng\"\n      (click)=\"mandarArea()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n\t \n      >Agregar</ion-button\n    >\n\n\n");

/***/ }),

/***/ "5L9K":
/*!*****************************************************************************!*\
  !*** ./src/app/components/general/header-start/header-start.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#vt {\n  margin-top: 15%;\n}\n\n.tam {\n  font-size: 180%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci1zdGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXItc3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdnR7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG4udGFte1xuICAgIGZvbnQtc2l6ZTogMTgwJTtcbn0iXX0= */");

/***/ }),

/***/ "6qKn":
/*!*************************************************************************************!*\
  !*** ./src/app/components/general/ingreso-component/ingreso-component.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IngresoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoComponent", function() { return IngresoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingreso_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingreso-component.component.html */ "Y6s5");
/* harmony import */ var _ingreso_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingreso-component.component.scss */ "2jy4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Services_IngresoServ_ingreso_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/IngresoServ/ingreso.service */ "UDMH");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "hYZE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");










let admin = 0;
const sendRequest = function (value) {
    const validEmail = "m@hotmail.com";
    const validEmail2 = "j@gmail.com";
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(value == validEmail || value == validEmail2);
        }, 1000);
        if (value === validEmail2) {
            admin = 1;
        }
    });
};
const sendRequestContra = function (value) {
    const validContra = "12345678";
    const validContra2 = "000111";
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(value == validContra || value == validContra2);
        }, 1000);
        if (value === validContra2) {
            admin = 1;
        }
    });
};
let IngresoComponent = class IngresoComponent {
    constructor(personasService, navCtrl, router, service) {
        this.personasService = personasService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.password = "";
        this.passwordOptions = {
            mode: "password",
            value: this.password
        };
        this.buttonOptions = {
            text: "Ingresar",
            type: "success",
            useSubmitBehavior: true
        };
        this.passwordComparison = () => {
            return this.form.instance.option("formData").Password;
        };
        this.onFormSubmit = function (e) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5___default()({
                message: "Usted ha ingresado a Residentes",
                position: {
                    my: "center top",
                    at: "center top"
                }
            }, "success", 3000);
            e.preventDefault();
            if (admin == 0) {
                this.personasService.setPersonaActiva(2);
            }
            else {
                this.personasService.setPersonaActiva(1);
            }
            this.navCtrl.navigateForward("/netflix");
        };
        this.usuario = service.getUsuario();
    }
    checkComparison() {
        return true;
    }
    asyncValidation(params) {
        return sendRequest(params.value);
    }
    asyncValidationContra(params) {
        return sendRequestContra(params.value);
    }
    goToRegister() {
        this.navCtrl.navigateForward("/registro");
    }
    ngOnInit() { }
};
IngresoComponent.ctorParameters = () => [
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_9__["PersonasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _Services_IngresoServ_ingreso_service__WEBPACK_IMPORTED_MODULE_6__["IngresoService"] }
];
IngresoComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormComponent"], { static: false },] }]
};
IngresoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ingreso-component',
        template: _raw_loader_ingreso_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ingreso_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IngresoComponent);



/***/ }),

/***/ "71FV":
/*!***************************************************************!*\
  !*** ./src/app/components/general/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "ARhC");
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.scss */ "yTjD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let HeaderComponent = class HeaderComponent {
    constructor(menuCtrl, navCtrl) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    toggleMenu() {
        this.menuCtrl.toggle();
    }
    goBack() {
        this.navCtrl.navigateBack(this.routeBack);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
HeaderComponent.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    routeBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "75Pq":
/*!*********************************************************************************!*\
  !*** ./src/app/Services/modificarReservaArea/modificar-reserva-area.service.ts ***!
  \*********************************************************************************/
/*! exports provided: Reserva, ModificarReservaAreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reserva", function() { return Reserva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarReservaAreaService", function() { return ModificarReservaAreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let Reserva = class Reserva {
};
Reserva = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Reserva);

let reserva = {
    "Fecha": " 21 de Marzo del 2021",
    "Area": "Cancha de futbol",
    "Descripcion": "Voy con mis 4 hijos y mi papa",
    "HorasDisponibles": "08:00",
    "HoraInicial": "05:00",
    "HoraFinal": "06:00",
    "CantidadDePersonas": "06",
};
let horasDisponibles = [
    "08:00",
    "13:00",
    "16:00",
];
let hora_i = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
let hora_f = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
let cantidad_p = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
let ModificarReservaAreaService = class ModificarReservaAreaService {
    getReserva() {
        return reserva;
    }
    getHorasDisponibles() {
        return horasDisponibles;
    }
    getHora_i() {
        return hora_i;
    }
    getHora_f() {
        return hora_f;
    }
    getCantidad_p() {
        return cantidad_p;
    }
};
ModificarReservaAreaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ModificarReservaAreaService);



/***/ }),

/***/ "7Ky/":
/*!**********************************************!*\
  !*** ./src/app/Services/chatserv/mensaje.ts ***!
  \**********************************************/
/*! exports provided: mensaje */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mensaje", function() { return mensaje; });
class mensaje {
}


/***/ }),

/***/ "7uJe":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/admin/agregar-conjunto-component/agregar-conjunto-component.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep form {\n  padding-bottom: 18rem;\n  margin: 20px;\n}\n\n::ng-deep nombreC {\n  font-size: 22px;\n}\n\nion-icon {\n  font-size: 40px;\n}\n\n.dx-field-value {\n  margin-right: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FncmVnYXItY29uanVudG8tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKIiwiZmlsZSI6ImFncmVnYXItY29uanVudG8tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIGZvcm0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHJlbTtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbjo6bmctZGVlcCBub21icmVDIHtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG5cbmlvbi1pY29uIHsgXG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuLmR4LWZpZWxkLXZhbHVle1xuICAgIG1hcmdpbi1yaWdodDogMTMwcHg7XG59Il19 */");

/***/ }),

/***/ "8JLN":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/lista-asambleas-admin/lista-asasamblea-admin/lista-asasamblea-admin.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"ASAMBLEA\" menu=ADMIN></app-header>\n\n<ion-content padding class=\"vertical-center\">\n  <ion-card class=\"ion-text-left\" (click)=\"goRoute(asamblea)\" *ngFor=\"let asamblea of asambleas\">\n    <ion-card-header>\n      <ion-card-subtitle> {{getAsambleaFecha(asamblea)}} {{getAsambleaHora(asamblea)}} </ion-card-subtitle>\n      <ion-card-title> {{asamblea.tema}} </ion-card-title>\n    </ion-card-header>\n      <ion-card-content> {{getAsambleaEstado(asamblea)}} </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<div id=\"centrado\">\n  <br> <br>\n  <ion-button color=\"residente\" (click)=\"botonNuevoPaquete()\">\n      <ion-label> Nueva Asamblea </ion-label>\n  </ion-button>\n</div>\n");

/***/ }),

/***/ "8LM1":
/*!***********************************************************************************!*\
  !*** ./src/app/components/residente/menu-residente/menu-residente.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LXJlc2lkZW50ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "8fVV":
/*!*********************************************************************!*\
  !*** ./src/app/Services/AreaComunAdmin/area-comun-admin.service.ts ***!
  \*********************************************************************/
/*! exports provided: Area, listaAreas, AreaComunAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listaAreas", function() { return listaAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComunAdminService", function() { return AreaComunAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class Area {
}
class listaAreas {
}
;
let tipo = [
    "Deportiva",
    "Relajante",
    "Social"
];
let listaDeAreasComunes = [
    "Cancha de futbol",
    "Salon Comunal",
    "Piscina"
];
let AreaComunAdminService = class AreaComunAdminService {
    constructor(http) {
        this.http = http;
    }
    getArea() {
    }
    getTipo() {
        return tipo;
    }
    getListaDeAreasComunes() {
        return listaDeAreasComunes;
    }
    getAreasBack(url) {
        return this.http.get(url);
    }
    deleteArea(url) {
        return this.http.delete(url);
    }
    setareaComun(nombre) {
        window.localStorage['nombreAreaComun'] = nombre;
    } // setareaComun
    getareaComun() {
        return String(window.localStorage['nombreAreaComun'] || -1);
    } // getConjuntoActivo
    getstate(url) {
        return this.http.get(url);
    }
    putestador(url, body) {
        return this.http.put(url, body);
    }
};
AreaComunAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AreaComunAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AreaComunAdminService);



/***/ }),

/***/ "97xz":
/*!*****************************************************************************!*\
  !*** ./src/app/Services/AreaComunResidente/area-comun-residente.service.ts ***!
  \*****************************************************************************/
/*! exports provided: Area, AreaComunResidenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComunResidenteService", function() { return AreaComunResidenteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class Area {
}
let area = {
    "Tipo": "Deportivo",
    "ListaDeAreasComunes": "Cancha de futbol",
    "HorasDisponibles": "08:00",
};
let tipo = [
    "Deportivo",
    "Relajante",
    "Social",
];
let listaDeAreasComunes = [
    "Cancha de futbol",
    "Salon Comunal",
    "Piscina"
];
let horasDisponibles = [
    8,
    13,
    16
];
let AreaComunResidenteService = class AreaComunResidenteService {
    constructor(http) {
        this.http = http;
    }
    getArea() {
        return area;
    }
    getTipo() {
        return tipo;
    }
    getListaDeAreasComunes() {
        return listaDeAreasComunes;
    }
    getHorasDisponibles() {
        return horasDisponibles;
    }
    getAreasTipo(url) {
        return this.http.get(url);
    }
};
AreaComunResidenteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AreaComunResidenteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AreaComunResidenteService);



/***/ }),

/***/ "9LO7":
/*!********************************************************************!*\
  !*** ./src/app/Services/servIngre/authenticate-service.service.ts ***!
  \********************************************************************/
/*! exports provided: AuthenticateServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateServiceService", function() { return AuthenticateServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let AuthenticateServiceService = class AuthenticateServiceService {
    constructor(http) {
        this.http = http;
        this.personas = [];
        // this.personas = pServ.getPersonas(); 
        this.obtener();
    }
    getP() {
        return this.p;
    }
    obtener() {
        this.getUsuarios(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/personas")
            .subscribe(respuesta => {
            console.log("subscirbe ", respuesta);
            this.p = respuesta;
            console.log("esta es la p", this.p);
        });
    }
    getUsuarios(url) {
        return this.http.get(url);
    }
    loginUser(credential) {
        this.obtener();
        return new Promise((accept, reject) => {
            let van = 0;
            let cont = 0;
            for (let ind of this.p) {
                if ((credential.email === this.p[cont].correo) && (credential.password === this.p[cont].contrasena)) {
                    accept("Login correcto");
                    van = 1;
                    break;
                }
                cont++;
            } // end for
            if (van == 0) {
                reject("login incorrecto");
            } // end if
        });
    } // end loginUser
}; // end AuthenticateServiceService
AuthenticateServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticateServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticateServiceService);



/***/ }),

/***/ "9VKV":
/*!********************************************************************************!*\
  !*** ./src/app/components/empleado/menu-empleado/menu-empleado.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWVtcGxlYWRvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "9j2C":
/*!*********************************************************************************!*\
  !*** ./src/app/Services/AgregarAreaAdmin/agregar-area-admin-service.service.ts ***!
  \*********************************************************************************/
/*! exports provided: NuevaArea, AreaComunPK, AgregarAreaAdminServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaArea", function() { return NuevaArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComunPK", function() { return AreaComunPK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarAreaAdminServiceService", function() { return AgregarAreaAdminServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NuevaArea {
}
class AreaComunPK {
}
let tipo = [
    "Deportiva",
    "Social",
    "Relajante"
];
let horaDeApertura = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
let horaDeCierre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
let diasDisponibles = ["Lunes-Viernes", "Lunes-Domingo", "Viernes-Domingo"];
let AgregarAreaAdminServiceService = class AgregarAreaAdminServiceService {
    constructor(http) {
        this.http = http;
    }
    getTipo() {
        return tipo;
    }
    getAreasComunes(url) {
        return this.http.get(url);
    }
    // AGREGAR AREA COMUN
    postAreaNueva(url, body) {
        return this.http.post(url, body);
    }
    getHoraDeApertura() {
        return horaDeApertura;
    }
    getHoraDeCierre() {
        return horaDeCierre;
    }
    getDiasDisponibles() {
        return diasDisponibles;
    }
    // TREAER AREA COMUN
    getAreaEspecifica(url) {
        return this.http.get(url);
    }
};
AgregarAreaAdminServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AgregarAreaAdminServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AgregarAreaAdminServiceService);



/***/ }),

/***/ "ARhC":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/header/header.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"residente\">\n  </ion-toolbar >\n  <ion-toolbar>\n    <div *ngIf=\"menu == 'NO'; then thenBlock else elseBlock\"></div>\n    <ng-template #thenBlock>\n      <ion-buttons slot=\"start\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" color=\"residente-txt\"></ion-icon><ion-label slot=\"start\" color=\"residente-txt\"><strong>&nbsp;&nbsp;{{titulo}}</strong></ion-label>\n      </ion-buttons>\n    </ng-template>\n    <ng-template #elseBlock>\n      <ion-buttons slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon slot=\"icon-only\" name=\"menu\" color=\"residente-txt\"></ion-icon><ion-label slot=\"start\" color=\"residente-txt\"><strong>&nbsp;&nbsp;{{titulo}}</strong></ion-label>\n      </ion-buttons>\n    </ng-template>\n  </ion-toolbar>\n</ion-header>\n\n<div *ngIf=\"menu == 'ADMIN'\">\n  <app-menu-admin></app-menu-admin>\n</div>\n\n<div *ngIf=\"menu == 'RESIDENTE'\">\n  <app-menu-residente></app-menu-residente>\n</div>\n\n<div *ngIf=\"menu == 'EMPLEADO'\">\n  <app-menu-empleado></app-menu-empleado>\n</div>");

/***/ }),

/***/ "AWPZ":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/empleado/asistencia-empleado-component/asistencia-empleado-component.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lzdGVuY2lhLWVtcGxlYWRvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "AdbY":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/claves-component/claves-component.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"CLAVES\" menu=ADMIN></app-header>\n<ion-content>\n    <div class=\"form-demo\">\n        <div class=\"widget-container\">\n            <div class=\"rol\">Rol:</div>\n            <dx-select-box class=\"rolo\" #rol displayExpr=\"Nombre\" [(dataSource)]=\"roles\"></dx-select-box>\n            <div class=\"nombre\">Nombre:</div>\n            <dx-select-box class=\"nombree\" #usuario displayExpr=\"Usuario\" [(dataSource)]=\"usuarios\"></dx-select-box>\n            <dx-form class=\"form\" [(formData)]=\"usuario.value\" [readOnly]=\"readOnly\" [showColonAfterLabel]=\"showColon\"\n                [labelLocation]=\"labelLocation\" [minColWidth]=\"minColWidth\" [width]=\"width\"></dx-form>\n        </div>\n    </div>\n\n    <ion-card color=\"residente\">\n        <ion-card-header>\n            <ion-card-subtitle> Cambiar contraseña</ion-card-subtitle>\n        </ion-card-header>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "Ar4w":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/empleado/paquetes-empleado-component/paquetes-empleado-component.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  width: 95%;\n  height: 50%;\n}\n\nion-card {\n  box-shadow: none !important;\n}\n\nion-select {\n  width: 120%;\n  border: solid 1px var(--ion-color-residente-txt);\n}\n\nion-label {\n  font-size: 20px;\n}\n\n#centrado {\n  text-align: center;\n}\n\n.content-div {\n  height: 60%;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\nion-select::part(icon) {\n  color: var(--ion-color-residente-txt);\n}\n\n#rounded {\n  width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhcXVldGVzLWVtcGxlYWRvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdEQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJwYXF1ZXRlcy1lbXBsZWFkby1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogNTAlO1xufVxuXG5pb24tY2FyZHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3R7XG4gICAgd2lkdGg6IDEyMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZS10eHQpO1xufVxuXG5pb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jY2VudHJhZG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1kaXZ7XG4gICAgaGVpZ2h0OiA2MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlLXR4dCk7ICBcbn1cblxuI3JvdW5kZWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxufSJdfQ== */");

/***/ }),

/***/ "ArAk":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/residente/reservacion-area-residente/reservacion-area-residente.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ReservacionAreaResidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservacionAreaResidenteComponent", function() { return ReservacionAreaResidenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reservacion_area_residente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reservacion-area-residente.component.html */ "UYln");
/* harmony import */ var _reservacion_area_residente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservacion-area-residente.component.scss */ "oClf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_ReservacionAreaResidente_reservacion_area_residente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/ReservacionAreaResidente/reservacion-area-residente.service */ "c1hH");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/data/data_source */ "UJeT");
/* harmony import */ var devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/data/array_store */ "V2fm");
/* harmony import */ var devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ReservacionAreaResidenteComponent = class ReservacionAreaResidenteComponent {
    constructor(service, navCtrl) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.selectAllModeVlaue = "page";
        this.selectionModeValue = "all";
        this.tasks = new devextreme_data_data_source__WEBPACK_IMPORTED_MODULE_5___default.a({
            store: new devextreme_data_array_store__WEBPACK_IMPORTED_MODULE_6___default.a({
                key: "id",
                data: service.getTasks()
            })
        });
    }
    mandarModificar() {
        this.navCtrl.navigateForward("/mis-reservas");
    }
    mandarEliminar() {
        this.navCtrl.navigateForward("/mis-reservas");
    }
    goToRegister() {
        this.navCtrl.navigateForward("/registro");
    }
    ngOnInit() { }
};
ReservacionAreaResidenteComponent.ctorParameters = () => [
    { type: _Services_ReservacionAreaResidente_reservacion_area_residente_service__WEBPACK_IMPORTED_MODULE_4__["ReservacionAreaResidenteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
ReservacionAreaResidenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reservacion-area-residente',
        template: _raw_loader_reservacion_area_residente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [],
        styles: [_reservacion_area_residente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReservacionAreaResidenteComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BdLC":
/*!*******************************************************!*\
  !*** ./src/app/Services/paquetes/paquetes.service.ts ***!
  \*******************************************************/
/*! exports provided: PaquetesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaquetesService", function() { return PaquetesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let PaquetesService = class PaquetesService {
    constructor(http) {
        this.http = http;
    }
    getPaquetesUrl(url) {
        return this.http.get(url);
    } // end getPaquetesUrl
    postPaquetesUrl(url, body) {
        return this.http.post(url, body);
    } // end postPaquetesUrl
    deletePaquetesUrl(url) {
        return this.http.delete(url);
    } // end deletePaquetesUrl
    nuevoPaquete(paquete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postPaquetesUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/paquetes/nuevoPaquete", paquete)
                .subscribe(respuesta => {
                console.log("Respuesta: ", respuesta);
            });
        });
    }
    cargarPaquetes(numConjunto, numApto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getPaquetesUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/paquetes/" + numConjunto.toString() + "/" + numApto.toString())
                .subscribe(respuesta => {
                this.paquetes = respuesta;
            });
        });
    } // end cargarPaquetes
    elimnarPaquete(numConjunto, numApto, numPaquete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.deletePaquetesUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/paquetes/eliminarPaquete/" + numConjunto.toString() + "/" + numApto.toString() + "/" + numPaquete.toString())
                .subscribe(respuesta => {
                console.log("Respuesta: ", respuesta);
                this.respuesta = respuesta;
            });
        });
    } // end cargarPaquetes
    getRespuesta() {
        return this.respuesta;
    } // end getRespuesta
    getPaquetes() {
        return this.paquetes;
    } // end getPaquetes
}; // end PaquetesService
PaquetesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PaquetesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PaquetesService);



/***/ }),

/***/ "BqlD":
/*!*********************************************************************************!*\
  !*** ./src/app/components/residente/reservar-area/reservar-area.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 20px;\n}\n\n.borde {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.boton {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jlc2VydmFyLWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksYUFBQTtBQUNKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6InJlc2VydmFyLWFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmZpcnN0LWdyb3VwLFxuOjpuZy1kZWVwIC5zZWNvbmQtZ3JvdXAge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cblxuLmJvcmRle1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmJvdG9ue1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "Bzye":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/residente/modificar-reserva-area/modificar-reserva-area.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 20px;\n}\n\n::ng-deep #button {\n  margin: 0 auto;\n  display: block;\n}\n\n::ng-deep #calendar-container {\n  margin: 0 auto;\n  display: block;\n}\n\n#form {\n  margin-bottom: 150px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.boton {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGlmaWNhci1yZXNlcnZhLWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJtb2RpZmljYXItcmVzZXJ2YS1hcmVhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5maXJzdC1ncm91cCxcbjo6bmctZGVlcCAuc2Vjb25kLWdyb3VwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG46Om5nLWRlZXAgI2J1dHRvbiB7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuXG46Om5nLWRlZXAgI2NhbGVuZGFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuXG4jZm9ybXtcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5ib3RvbntcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "CM64":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/admin/asamblea-Subir-Votos/asamblea-subir-votos/asamblea-subir-votos.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AsambleaSubirVotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsambleaSubirVotosComponent", function() { return AsambleaSubirVotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_asamblea_subir_votos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./asamblea-subir-votos.component.html */ "dI6Q");
/* harmony import */ var _asamblea_subir_votos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asamblea-subir-votos.component.scss */ "RvhJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_Ganador_ganador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Services/Ganador/ganador.service */ "u7Ej");





let AsambleaSubirVotosComponent = class AsambleaSubirVotosComponent {
    constructor(service) {
        this.buttonOptions = {
            text: "Publicar",
            type: "success",
            useSubmitBehavior: true
        };
        this.buttonOptions2 = {
            text: "Limpiar Votacion",
            type: "danger",
            useSubmitBehavior: true
        };
        this.ganador = service.getGanador(1); // toca mandarle el ide de la propuesta para que saque el ganador
    }
    ngOnInit() {
        throw new Error('Method not implemented.');
    }
};
AsambleaSubirVotosComponent.ctorParameters = () => [
    { type: _Services_Ganador_ganador_service__WEBPACK_IMPORTED_MODULE_4__["GanadorService"] }
];
AsambleaSubirVotosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-asamblea-subir-votos',
        providers: [_Services_Ganador_ganador_service__WEBPACK_IMPORTED_MODULE_4__["GanadorService"]],
        template: _raw_loader_asamblea_subir_votos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_asamblea_subir_votos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AsambleaSubirVotosComponent);



/***/ }),

/***/ "CRn2":
/*!***********************************************************************************!*\
  !*** ./src/app/components/general/manual-component/manual-component.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualComponent", function() { return ManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manual_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manual-component.component.html */ "HMBZ");
/* harmony import */ var _manual_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manual-component.component.scss */ "P1qy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");








let ManualComponent = class ManualComponent {
    constructor(personasService, http, inAppBrowser) {
        this.personasService = personasService;
        this.http = http;
        this.inAppBrowser = inAppBrowser;
        this.url = src_app_constants__WEBPACK_IMPORTED_MODULE_6__["IPRESIDENTESA"] + "/consultas/Conjuntos/vermanual/2/manual/manual2.pdf";
    }
    ngOnInit() { }
    getUser() {
        return this.personasService.getUserActivo();
    }
    vermanual() {
        this.inAppBrowser.create(this.url);
    }
};
ManualComponent.ctorParameters = () => [
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_7__["PersonasService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
ManualComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-manual-component',
        template: _raw_loader_manual_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manual_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManualComponent);



/***/ }),

/***/ "CaST":
/*!*****************************************************************!*\
  !*** ./src/app/Services/ingreAptoServ/serv-ing-apto.service.ts ***!
  \*****************************************************************/
/*! exports provided: ServIngAptoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServIngAptoService", function() { return ServIngAptoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let ServIngAptoService = class ServIngAptoService {
    constructor(http) {
        this.http = http;
        this.apartamentos1 = [
            {
                IdApartamento: 1,
                Torre: 1,
                Numero: 1,
                Contrasena: 'abcd132',
                Piso: 1
            },
            {
                IdApartamento: 2,
                Torre: 1,
                Numero: 2,
                Contrasena: 'sdfa234',
                Piso: 1
            },
            {
                IdApartamento: 3,
                Torre: 1,
                Numero: 1,
                Contrasena: '12345678',
                Piso: 2
            },
            {
                IdApartamento: 4,
                Torre: 1,
                Numero: 2,
                Contrasena: 'i7tyur456',
                Piso: 2
            },
            {
                IdApartamento: 5,
                Torre: 2,
                Numero: 1,
                Contrasena: 'contraaa',
                Piso: 1
            },
            {
                IdApartamento: 6,
                Torre: 2,
                Numero: 2,
                Contrasena: 'senaaa24',
                Piso: 1
            },
            {
                IdApartamento: 7,
                Torre: 2,
                Numero: 1,
                Contrasena: 'poiuytred',
                Piso: 2
            },
            {
                IdApartamento: 8,
                Torre: 2,
                Numero: 2,
                Contrasena: 'tgrgwr5325',
                Piso: 2
            }
        ];
    }
    getAptos(num) {
        this.url = src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/apartamentos/apartamentosc/" + num.toString();
        this.getAptosU(this.url)
            .subscribe(respuesta => {
            this.apartamentos = respuesta;
        });
    }
    getApartamentos() {
        return this.apartamentos;
    }
    getAptosU(url) {
        return this.http.get(url);
    }
    setIdApto(idApto) {
        window.localStorage['idApto'] = idApto.toString();
    }
    getIdApto() {
        this.idActualApto = Number(window.localStorage['idApto'] || -1);
        if (this.idActualApto == -1)
            return null;
        else
            return this.idActualApto;
    }
    loginUser(credential, num) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((accept, reject) => {
                let van = 0;
                let cont = 0;
                for (let ind of this.apartamentos) {
                    if ((credential.torre == this.apartamentos[cont].torre) && (credential.piso == this.apartamentos[cont].piso) && (credential.numero == this.apartamentos[cont].numero) && (credential.password == this.apartamentos[cont].contrasena)) {
                        this.setIdApto(this.apartamentos[cont].apartamentoPK.idApartamento);
                        accept("Login correcto");
                        van = 1;
                    }
                    cont++;
                }
                if (van == 0) {
                    reject("Login incorrecto");
                }
            });
        });
    }
    loginUserP(credential) {
        return new Promise((accept, reject) => {
            let van = 0;
            let cont = 0;
            for (let ind of this.apartamentos1) {
                if ((credential.torre == this.apartamentos1[cont].Torre) && (credential.piso == this.apartamentos1[cont].Piso) && (credential.numero == this.apartamentos1[cont].Numero) && (credential.password == this.apartamentos1[cont].Contrasena)) {
                    this.setIdApto(this.apartamentos1[cont].IdApartamento);
                    accept("Login correcto");
                    van = 1;
                }
                cont++;
            }
            if (van == 0) {
                reject("Login incorrecto");
            }
        });
    }
};
ServIngAptoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ServIngAptoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ServIngAptoService);



/***/ }),

/***/ "CqP2":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/admin/asamblea-admin-component/asamblea-admin-component.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AsambleaAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsambleaAdminComponent", function() { return AsambleaAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_asamblea_admin_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./asamblea-admin-component.component.html */ "UuQP");
/* harmony import */ var _asamblea_admin_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asamblea-admin-component.component.scss */ "jnva");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_opciones_opciones_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/opciones/opciones.service */ "ujE3");
/* harmony import */ var _Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/asambleas/asamblea.service */ "jORC");
/* harmony import */ var src_app_Services_propuestas_propuestas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/propuestas/propuestas.service */ "w8Zv");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "hYZE");








let AsambleaAdminComponent = class AsambleaAdminComponent {
    constructor(service, opcionesServices, propuestaServices) {
        this.service = service;
        this.step = 1;
        this.asambleas = [];
        this.labelL = "top";
        //this.asamblea = service.getAsamblea(1);
        this.propuesta = propuestaServices.getPropuestas();
        this.opciones = opcionesServices.getOpciones(1);
        this.Nopciones = service.getNopciones();
        this.backButtonOptions = {
            type: 'prueba',
            icon: 'add',
            onClick: () => {
                return this.step = 2;
            }
        };
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { });
    }
    ngOnInit() {
        this.asambleas = this.service.getAsambleas();
    }
    nuevaAsamblea() {
    }
};
AsambleaAdminComponent.ctorParameters = () => [
    { type: _Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__["AsambleaService"] },
    { type: src_app_Services_opciones_opciones_service__WEBPACK_IMPORTED_MODULE_4__["OpcionesService"] },
    { type: src_app_Services_propuestas_propuestas_service__WEBPACK_IMPORTED_MODULE_6__["PropuestasService"] }
];
AsambleaAdminComponent.propDecorators = {
    drawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxDrawerComponent"], { static: false },] }]
};
AsambleaAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-asamblea-admin-component',
        providers: [_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__["AsambleaService"]],
        template: _raw_loader_asamblea_admin_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_asamblea_admin_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AsambleaAdminComponent);



/***/ }),

/***/ "CvwO":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/residente/areas-residente-component/areas-residente-component.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AreasResidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasResidenteComponent", function() { return AreasResidenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_areas_residente_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./areas-residente-component.component.html */ "r3WO");
/* harmony import */ var _areas_residente_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./areas-residente-component.component.scss */ "LSVT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_AreaComunResidente_area_comun_residente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/AreaComunResidente/area-comun-residente.service */ "97xz");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







const sendRequest = function (value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(value === validEmail);
        }, 1000);
    });
};
let AreasResidenteComponent = class AreasResidenteComponent {
    constructor(service, navCtrl) {
        this.navCtrl = navCtrl;
        this.linkMisReservas = "/mis-reservas";
        this.linnkNuevaReserva = "/reservar-area";
        this.pos = "top";
        this.now = new Date();
        this.firstDay = 0;
        this.minDateValue = null;
        this.maxDateValue = null;
        this.disabledDates = null;
        this.zoomLevels = [
            "month", "year", "decade", "century"
        ];
        this.cellTemplate = "cell";
        this.holydays = [[1, 0], [4, 6], [25, 11]];
        this.area = service.getArea();
        this.tipo = service.getTipo();
        this.tipo = [
            "Deportiva",
            "Relajante",
            "Social"
        ];
        this.listaDeAreasComunes = service.getListaDeAreasComunes();
        this.horasDisponibles = service.getHorasDisponibles();
    }
    mandarNueva() {
        this.navCtrl.navigateForward(this.linnkNuevaReserva);
    }
    mandarMisReservas() {
        this.navCtrl.navigateForward(this.linkMisReservas);
    }
    isWeekend(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
    setMinDate(e) {
        if (e.value) {
            this.minDateValue = new Date(this.now.getTime() - 1000 * 60 * 60 * 24 * 3);
        }
        else {
            this.minDateValue = null;
        }
    }
    setMaxDate(e) {
        if (e.value) {
            this.maxDateValue = new Date(this.now.getTime() + 1000 * 60 * 60 * 24 * 3);
        }
        else {
            this.maxDateValue = null;
        }
    }
    disableWeekend(e) {
        if (e.value) {
            var that = this;
            that.disabledDates = function (data) {
                return data.view === "month" && that.isWeekend(data.date);
            };
        }
        else {
            this.disabledDates = null;
        }
    }
    setFirstDay(e) {
        if (e.value) {
            this.firstDay = 1;
        }
        else {
            this.firstDay = 0;
        }
    }
    useCellTemplate(e) {
        if (e.value) {
            this.cellTemplate = "custom";
        }
        else {
            this.cellTemplate = "cell";
        }
    }
    getCellCssClass(date) {
        var cssClass = "";
        if (this.isWeekend(date))
            cssClass = "weekend";
        this.holydays.forEach(function (item) {
            if (date.getDate() === item[0] && date.getMonth() === item[1]) {
                cssClass = "holyday";
                return false;
            }
        });
        return cssClass;
    }
    ngOnInit() { }
    traerAreastipo() {
    }
};
AreasResidenteComponent.ctorParameters = () => [
    { type: _Services_AreaComunResidente_area_comun_residente_service__WEBPACK_IMPORTED_MODULE_4__["AreaComunResidenteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
AreasResidenteComponent.propDecorators = {
    eventRadioGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["eventRadioGroup",] }]
};
AreasResidenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-areas-residente-component',
        providers: [_Services_AreaComunResidente_area_comun_residente_service__WEBPACK_IMPORTED_MODULE_4__["AreaComunResidenteService"]],
        template: _raw_loader_areas_residente_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_areas_residente_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AreasResidenteComponent);



/***/ }),

/***/ "DQZR":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/header-start/header-start.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"light\">\n    <ion-title class=\"ion-text-center\" class=\"tam\" color=\"residente-txt\"> RESIDENTES </ion-title>\n    <ion-title id=\"vt\" class=\"ion-text-center\" size=\"small\" color=\"residente-txt\"> {{titulo}} </ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ }),

/***/ "Di8j":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/admin/quejas-admin-component/quejas-admin-component.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 120%;\n  vertical-align: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3F1ZWphcy1hZG1pbi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJxdWVqYXMtYWRtaW4tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb257XG4gICAgZm9udC1zaXplOjEyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IDElO1xufSJdfQ== */");

/***/ }),

/***/ "DjIb":
/*!*************************************************************************************!*\
  !*** ./src/app/components/residente/pagos-component/pagos-component.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#paypal {\n  left: 40%;\n  width: 12%;\n  height: 8%;\n  box-shadow: none !important;\n}\n#paypal #paypal-img {\n  width: 100%;\n  height: 100%;\n}\n#pse {\n  left: 25%;\n  width: 37%;\n  height: 9%;\n  box-shadow: none !important;\n}\n#pse #pse-img {\n  width: 100%;\n  height: 100%;\n}\n#cards {\n  left: 35%;\n  width: 20%;\n  height: 9%;\n  box-shadow: none !important;\n}\n#cards #cards-img {\n  width: 100%;\n  height: 100%;\n}\n#centrado {\n  text-align: center;\n}\nion-label {\n  font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhZ29zLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVI7QUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVI7QUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRVI7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoicGFnb3MtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BheXBhbHtcbiAgICBsZWZ0OiA0MCU7XG4gICAgd2lkdGg6IDEyJTtcbiAgICBoZWlnaHQ6IDglO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAjcGF5cGFsLWltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbiNwc2V7XG4gICAgbGVmdDogMjUlO1xuICAgIHdpZHRoOiAzNyU7XG4gICAgaGVpZ2h0OiA5JTtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgI3BzZS1pbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4jY2FyZHN7XG4gICAgbGVmdDogMzUlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiA5JTtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgI2NhcmRzLWltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbiNjZW50cmFkb3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn0iXX0= */");

/***/ }),

/***/ "E609":
/*!***********************************************************************************!*\
  !*** ./src/app/components/general/ingreso-perfiles/ingreso-perfiles.component.ts ***!
  \***********************************************************************************/
/*! exports provided: IngresoPerfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoPerfilesComponent", function() { return IngresoPerfilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ingreso_perfiles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ingreso-perfiles.component.html */ "yYXb");
/* harmony import */ var _ingreso_perfiles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingreso-perfiles.component.scss */ "Ra64");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




//import { IngrPerfilServService } from 'src/app/Services/ingrePerServ/ingr-perfil-serv.service';
let IngresoPerfilesComponent = class IngresoPerfilesComponent {
    constructor() {
        this.conjunto = "Maria";
    }
    ngOnInit() { }
    /*
      loginUser(credentials) {
        this.authService.loginUser(credentials).then(res => {
          this.errorMessage = "";
         // this.navCtrl.navigateForward("/home");
         console.log('vamo a casa');
        });
      }*/
    getConjunto() {
        return this.conjunto;
    }
};
IngresoPerfilesComponent.ctorParameters = () => [];
IngresoPerfilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ingreso-perfiles',
        template: _raw_loader_ingreso_perfiles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ingreso_perfiles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IngresoPerfilesComponent);



/***/ }),

/***/ "Enwz":
/*!************************************************************************************!*\
  !*** ./src/app/components/empleado/calendar-paquete/calendar-paquete.component.ts ***!
  \************************************************************************************/
/*! exports provided: CalendarPaqueteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPaqueteComponent", function() { return CalendarPaqueteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calendar_paquete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calendar-paquete.component.html */ "ZD1b");
/* harmony import */ var _calendar_paquete_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-paquete.component.scss */ "Tnv5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");





let CalendarPaqueteComponent = class CalendarPaqueteComponent {
    constructor() {
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            events: false
        };
        this.onTimeSelected = (ev) => {
            this.num = ev.selectedTime.getMonth() + 1;
            console.log('Selected time: ' + ev.selectedTime.getDate() + " " + this.num + " " + ev.selectedTime.getFullYear());
        };
    }
    ngOnInit() { }
    next() {
        this.myCal.slideNext();
    }
    back() {
        this.myCal.slidePrev();
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
};
CalendarPaqueteComponent.ctorParameters = () => [];
CalendarPaqueteComponent.propDecorators = {
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"],] }]
};
CalendarPaqueteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calendar-paquete',
        template: _raw_loader_calendar_paquete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendar_paquete_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalendarPaqueteComponent);



/***/ }),

/***/ "FJ7D":
/*!******************************************************!*\
  !*** ./src/app/Services/noticias/noticiaPK.model.ts ***!
  \******************************************************/
/*! exports provided: NoticiaPK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaPK", function() { return NoticiaPK; });
class NoticiaPK {
} // end NoticiaPK


/***/ }),

/***/ "FoRS":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/area-comun-admin/area-comun-admin.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AreaComunAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComunAdminComponent", function() { return AreaComunAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_area_comun_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./area-comun-admin.component.html */ "GADP");
/* harmony import */ var _area_comun_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area-comun-admin.component.scss */ "eup4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_AreaComunAdmin_area_comun_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/AreaComunAdmin/area-comun-admin.service */ "8fVV");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constants */ "l207");








const sendRequest = function (value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(value === validEmail);
        }, 1000);
    });
};
let AreaComunAdminComponent = class AreaComunAdminComponent {
    constructor(service, navCtrl, conjunto) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.conjunto = conjunto;
        this.area = new _Services_AreaComunAdmin_area_comun_admin_service__WEBPACK_IMPORTED_MODULE_4__["Area"]();
        this.top = "top";
        this.linkNuevaArea = "/agregar-area";
        this.linkModificarArea = "/modificar-area";
        this.listaRespuestas = [];
        this.valorEstado = false;
        this.tipo = service.getTipo();
        this.tipo = [
            "Deportiva",
            "Relajante",
            "Social"
        ];
        this.conjuntoA = conjunto.getConjuntoActivo();
        this.setAreas();
        this.traerAreas();
        console.log("valorS", this.area);
    }
    ngOnInit() {
        this.traerAreas();
    }
    setAreas() {
        let y = [];
        this.listaRespuestas.pop();
        for (var x in this.listaDeAreasComunesR)
            y[x] = this.listaDeAreasComunesR[x].respuesta;
        this.listaRespuestas = y;
        console.log("resp2", y, this.listaRespuestas);
        console.log("valorS1", this.area);
        return this.listaRespuestas;
    }
    mandarAreaNueva() {
        this.navCtrl.navigateForward(this.linkNuevaArea);
    }
    modificarArea() {
        this.select = this.area.Seleccionada;
        this.service.setareaComun(this.select);
        this.navCtrl.navigateForward(this.linkModificarArea);
    }
    BorrarArea() {
        this.select = this.area.Seleccionada;
        console.log("s", this.select);
        console.log("valorS2", this.area);
        this.service.deleteArea(src_app_constants__WEBPACK_IMPORTED_MODULE_7__["IPRESIDENTESA"] + "/consultas/AreasComunes/EliminarArea/conjunto/" + this.conjuntoA + "/nomArea/" + this.select)
            .subscribe(data => {
            this.respuestaEliminada = data;
            console.log("eliminar", data);
        });
    }
    traerAreas() {
        this.service.getAreasBack(src_app_constants__WEBPACK_IMPORTED_MODULE_7__["IPRESIDENTESA"] + "/consultas/AreasComunes/areasComunesTipo/conjunto/" + this.conjuntoA + "/nomTipoArea/" + this.tiposelect)
            .subscribe(respuesta => {
            this.listaDeAreasComunesR = respuesta;
            this.setAreas();
        });
    }
    getEstado() {
        this.select = this.area.Seleccionada;
        this.service.getstate(src_app_constants__WEBPACK_IMPORTED_MODULE_7__["IPRESIDENTESA"] + "/consultas/AreasComunes/areaComunEstado/conjunto/" + this.conjuntoA + "/nomTipoArea/" + this.select)
            .subscribe(respuesta => {
            this.estado = respuesta;
            console.log("estado", respuesta);
            this.valorEstado = this.estado.respuesta;
        });
    }
    cambiarestado() {
        this.select = this.area.Seleccionada;
        if (this.valorEstado == false) {
            this.estadoN = "D";
        }
        else {
            this.estadoN = "H";
        }
        this.service.putestador(src_app_constants__WEBPACK_IMPORTED_MODULE_7__["IPRESIDENTESA"] + "/consultas/AreasComunes/modificarAreaEstado/conjunto/" + this.conjuntoA + "/nombreA/" + this.select + "/estadoA/" + this.estadoN, null)
            .subscribe(respuesta => {
            this.actualizado = respuesta;
            console.log("actualizado", respuesta);
            this.respuestaA = this.actualizado.respuesta;
        });
    }
};
AreaComunAdminComponent.ctorParameters = () => [
    { type: _Services_AreaComunAdmin_area_comun_admin_service__WEBPACK_IMPORTED_MODULE_4__["AreaComunAdminService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__["ConjuntosService"] }
];
AreaComunAdminComponent.propDecorators = {
    eventRadioGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["eventRadioGroup",] }]
};
AreaComunAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-area-comun-admin',
        providers: [_Services_AreaComunAdmin_area_comun_admin_service__WEBPACK_IMPORTED_MODULE_4__["AreaComunAdminService"]],
        template: _raw_loader_area_comun_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_area_comun_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AreaComunAdminComponent);



/***/ }),

/***/ "Ft2i":
/*!*************************************************************************************!*\
  !*** ./src/app/components/general/netflix-component/netflix-component.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NetflixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetflixComponent", function() { return NetflixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_netflix_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./netflix-component.component.html */ "vgNI");
/* harmony import */ var _netflix_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./netflix-component.component.scss */ "zq5V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/ingreAptoServ/serv-ing-apto.service */ "CaST");








let NetflixComponent = class NetflixComponent {
    constructor(personasService, conjuntoService, servIngAptoService, navCtrl) {
        this.personasService = personasService;
        this.conjuntoService = conjuntoService;
        this.servIngAptoService = servIngAptoService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1000));
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.usuario = this.personasService.getPersonaActiva();
            this.idUsuario = this.personasService.getPersonaActivaAux();
            //console.log(this.usuario, "  Id usuario: ", this.idUsuario);
            this.conjuntoService.getConjuntosPersona(this.idUsuario);
            yield this.waitBD();
            this.conjuntos = this.conjuntoService.getConjuntos();
        });
    } // end ngOnInit
    getConjuntos() {
        return this.conjuntos;
    }
    getUser() {
        return this.usuario;
    } // end getUser
    goAgregar() {
        this.conjuntos = [];
        if (this.usuario == "ADMIN") {
            this.navCtrl.navigateForward("/nuevo-conjunto");
        }
        else {
            //this.personasService.calTiempPantalla1(new Date().getTime()); 
            this.navCtrl.navigateForward("/seleccion-conjunto");
        }
    }
    goConjunto(conjunto) {
        this.conjuntoService.setConjuntoActivo(conjunto.id);
        if (this.usuario == "ADMIN") {
            this.conjuntos = [];
            this.navCtrl.navigateForward("/noticias");
        }
        else if (this.usuario == "EMPLEADO") {
            this.conjuntos = [];
            this.navCtrl.navigateForward("/empleados");
        }
        else if (this.usuario == "RESIDENTE" || this.usuario == "Residente") {
            this.conjuntos = [];
            this.navCtrl.navigateForward("/ingre-apto");
        } // end if
    } // end getRouteConjunto
}; // end NetflixComponent
NetflixComponent.ctorParameters = () => [
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_5__["PersonasService"] },
    { type: _Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__["ConjuntosService"] },
    { type: src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_7__["ServIngAptoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
NetflixComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-netflix-component',
        template: _raw_loader_netflix_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_netflix_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NetflixComponent);



/***/ }),

/***/ "GADP":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/area-comun-admin/area-comun-admin.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"ÁREAS COMUNES\" menu=ADMIN></app-header>\n<div class=\"forma\">\n<div class=\"form\">\n    <div class=\"dx-fieldset\">\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Tipo: </div>\n            <div class=\"dx-field-value\">\n                <dx-radio-group\n                    [items]=\"tipo\"\n                    [(value)]=\"tiposelect\"\n                    layout=\"horizontal\"\n                     (onOptionChanged)=\"traerAreas()\">\n                </dx-radio-group>\n            </div>\n        </div>\n        </div>\n    </div>\n<dx-form id=\"form\"\n\t[formData]=\"area\" \n\t[labelLocation]=\"top\">     \n\t<dxi-item itemType=\"group\" cssClass=\"first-group\" [colCount]=\"4\">\n\t\n            \t<dxi-item dataField=\"Seleccionada\"    editorType=\"dxSelectBox\" \n                [editorOptions]=\"{ items: listaRespuestas}\"\n                ></dxi-item>\n\t\t\n\t</dxi-item>\n\n</dx-form>\n\n<p class=\"derecho\">Habilitar/Deshabiliatar</p>\n<ion-toggle class= \"derechoT\" [(ngModel)]=\"valorEstado\" (ngModelChange)=\"cambiarestado()\" color=\"residente\" ></ion-toggle>\n\n<ion-button class=\"botIng2\"\n      (click)=\"BorrarArea()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n\t \n      >\n\t  <ion-icon name=\"trash\"></ion-icon>\n\t  Eliminar</ion-button\n    >\n\t<ion-button class=\"botIng3\"\n      (click)=\"modificarArea()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n\t \n      >\n      \n\t  <ion-icon name=\"pencil\"></ion-icon>\n\t  Modificar</ion-button\n    >\n\t<ion-button class=\"botIng4\"\n      (click)=\"mandarAreaNueva()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n\t  \n\n      >\n\t  <ion-icon name=\"add-circle\"></ion-icon>\n\t  Nueva Area</ion-button\n    >\n</div>");

/***/ }),

/***/ "Ggqx":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/lista-asambleas-residentes/lista-asambleas-residentes.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"ASAMBLEA\" menu=RESIDENTE></app-header>\n\n<ion-content padding class=\"vertical-center\">\n  <ion-card class=\"ion-text-left\" (click)=\"goRoute(asamblea)\" *ngFor=\"let asamblea of asambleas\">\n    <ion-card-header>\n      <ion-card-subtitle> {{getAsambleaFecha(asamblea)}} {{getAsambleaHora(asamblea)}} </ion-card-subtitle>\n      <ion-card-title> {{asamblea.tema}} </ion-card-title>\n    </ion-card-header>\n      <ion-card-content> {{getAsambleaEstado(asamblea)}} </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "GlUB":
/*!*************************************************!*\
  !*** ./src/app/Services/votos/votos.service.ts ***!
  \*************************************************/
/*! exports provided: VotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotosService", function() { return VotosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let VotosService = class VotosService {
    constructor() {
        this.votos = [
            {
                id: 1,
                idOpcion: 1,
                idPropuesta: 1
            },
            {
                id: 2,
                idOpcion: 1,
                idPropuesta: 1
            },
            {
                id: 3,
                idOpcion: 2,
                idPropuesta: 1
            },
            {
                id: 4,
                idOpcion: 1,
                idPropuesta: 2
            },
            {
                id: 5,
                idOpcion: 2,
                idPropuesta: 2
            },
            {
                id: 6,
                idOpcion: 2,
                idPropuesta: 2
            }
        ];
    }
    getVotos() {
        return this.votos;
    } // end getVotos
    getVoto(votoId) {
        return this.votos.find(voto => { return voto.id == votoId; });
    } // end getVoto
    addVoto(idOpcion, idPropuesta) {
        this.votos.push({
            id: this.votos.length + 1,
            idOpcion,
            idPropuesta
        });
    } // end addOpcion
    deleteVoto(votoId) {
        this.votos.splice(votoId, 1);
    } // end deleteOpcion
};
VotosService.ctorParameters = () => [];
VotosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VotosService);



/***/ }),

/***/ "H3GS":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/residente/quejas-residente-component/quejas-residente-component.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: QuejasResidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejasResidenteComponent", function() { return QuejasResidenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_quejas_residente_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./quejas-residente-component.component.html */ "4KHd");
/* harmony import */ var _quejas_residente_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quejas-residente-component.component.scss */ "+m8f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_quejasA_service_queja_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/quejasA-service/queja.service */ "do8N");





let QuejasResidenteComponent = class QuejasResidenteComponent {
    constructor(service) {
        this.queja = service.getQueja();
    }
    ngOnInit() { }
};
QuejasResidenteComponent.ctorParameters = () => [
    { type: _Services_quejasA_service_queja_service__WEBPACK_IMPORTED_MODULE_4__["QuejaService"] }
];
QuejasResidenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-quejas-residente-component',
        providers: [_Services_quejasA_service_queja_service__WEBPACK_IMPORTED_MODULE_4__["QuejaService"]],
        template: _raw_loader_quejas_residente_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_quejas_residente_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QuejasResidenteComponent);



/***/ }),

/***/ "HMBZ":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/manual-component/manual-component.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header titulo=\"MANUAL CONVIVENCIA\" menu=RESIDENTE></app-header>\n\n\n    \n    <div class=\"Foto\"> \n        <ion-img  \n          src= \"/../../../../../assets/icon/IconConjuntos/pdf.png \">\n        </ion-img>\n      </div>\n \n    <ion-button class=\"botIng3\"\n    (click)=\"vermanual()\"\n    expand=\"full\"\n    shape=\"round\"\n    color=\"residente\"\n    type=\"submit\"\n    \n\n    > \n    Ver Manual</ion-button>\n    \n   \n\n\n");

/***/ }),

/***/ "HO1N":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/menu-residente/menu-residente.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"menu-residente\" contentId=\"main-residente\">\n  <ion-header>\n    <ion-toolbar color=\"residente\">\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item routerLink=\"/noticias\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"newspaper-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Noticias\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/pagos\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"cash-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Pagos\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/lista-asambleas-residentes\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"people-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Asamblea\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/areas-residente\"detail=\"false\">\n        <ion-icon slot=\"start\" name= \"calendar-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Areas Comunes\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/paquetes-residente\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"cube-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Paquetes\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/empleados\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"id-card-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Empleados\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/manual\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"document-text-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Manual de Convivencia\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/quejas-residente\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"sad-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Quejas\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/netflix\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"sync-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Cambiar Conjuntos\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/acerca-nosotros\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"information-circle-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Sobre Residentes\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/ingreso\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"log-out-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Cerrar Sesion\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"main-residente\"></ion-router-outlet>");

/***/ }),

/***/ "Hgf1":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/admin/manual-admin-component/manual-admin-component.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #form {\n  max-width: 600px;\n  margin: auto;\n}\n\n::ng-deep #button {\n  margin-top: 50px;\n  margin-right: 20px;\n  float: right;\n}\n\n::ng-deep #fileuploader-container {\n  border: 1px solid #d3d3d3;\n  margin: 20px 20px 0 20px;\n}\n\n::ng-deep #form h3 {\n  margin-left: 20px;\n  font-weight: normal;\n  font-size: 22px;\n}\n\n.esti {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.botIng4 {\n  margin-left: 80px;\n  margin-top: 50px;\n  width: 200px;\n}\n\n.botIng3 {\n  margin-top: 30px;\n  margin-left: 80px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21hbnVhbC1hZG1pbi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0FBR0o7O0FBREE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUlBOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBS0oiLCJmaWxlIjoibWFudWFsLWFkbWluLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAjZm9ybSB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG46Om5nLWRlZXAgI2J1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuOjpuZy1kZWVwICNmaWxldXBsb2FkZXItY29udGFpbmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xufVxuOjpuZy1kZWVwICNmb3JtIGgzIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmVzdGl7XG5tYXJnaW4tbGVmdDogMjBweDtcbm1hcmdpbi1yaWdodDogMjBweDtcblxufVxuLmJvdEluZzR7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG4uYm90SW5nM3tcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "IcYJ":
/*!*******************************************************!*\
  !*** ./src/app/Services/noticias/noticias.service.ts ***!
  \*******************************************************/
/*! exports provided: NoticiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasService", function() { return NoticiasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let NoticiasService = class NoticiasService {
    constructor(http) {
        this.http = http;
    }
    getNoticiasUrl(url) {
        return this.http.get(url);
    } // end getPaquetesUrl
    postNoticiasUrl(url, body) {
        return this.http.post(url, body);
    } // end postPaquetesUrl
    deleteNoticiasUrl(url) {
        return this.http.delete(url);
    } // end deletePaquetesUrl
    nuevaNoticia(noticia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.postNoticiasUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/noticias/nuevaNoticia", noticia)
                .subscribe(respuesta => {
                console.log("Respuesta: ", respuesta);
                this.respuesta = respuesta;
            });
        });
    } // end nuevaNoticia
    cargarNoticias(numConjunto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getNoticiasUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/noticias/" + numConjunto.toString())
                .subscribe(respuesta => {
                console.log("CARGUE NOTICIAS");
                this.noticias = respuesta;
            });
        });
    } // end cargarNoticias
    elimnarNoticia(numConjunto, idNoticia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.deleteNoticiasUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/noticias/eliminarNoticia/" + numConjunto.toString() + "/" + idNoticia.toString())
                .subscribe(respuesta => {
                console.log("Respuesta: ", respuesta);
                this.respuesta = respuesta;
            });
        });
    } // end elimnarNoticia
    cargarAptoNoticia(numConjunto, numApto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getNoticiasUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/apartamentos/aptoNoticia/" + numConjunto.toString() + "/" + numApto.toString())
                .subscribe(respuesta => {
                this.aptoNoti = respuesta;
            });
        });
    } // end cargarAptoNoticia
    getAptoNoti() {
        return this.aptoNoti.respuesta;
    } // end getAptoNoti
    getNoticias() {
        return this.noticias;
    } // end getNoticias
    getRespuesta() {
        return this.respuesta;
    } // end getRespuesta
}; // end NoticiasService
NoticiasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NoticiasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], NoticiasService);



/***/ }),

/***/ "JTQN":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/modificar-reserva-area/modificar-reserva-area.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"MODIFICAR RESERVACION\" menu=RESIDENTE></app-header>\n<dx-form id=\"form\" [formData]=\"reserva\">\n\t<dxi-item itemType=\"group\" cssClass=\"first-group\" [colCount]=\"4\">\n\t\t<dxi-item itemType=\"group\" [colSpan]=\"3\">\n\t\t\t\t<dxi-item dataField=\"Fecha\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"Area\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"HorasDisponibles\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: horasDisponibles, value: '' }\"></dxi-item>\n                <dxi-item dataField=\"HoraInicial\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: hora_i}\"></dxi-item>\n        \t\t<dxi-item dataField=\"HoraFinal\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: hora_f}\"></dxi-item>\n        \t\t<dxi-item dataField=\"CantidadDePersonas\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: cantidad_p}\"></dxi-item>\n\t\t</dxi-item>\n\t</dxi-item>\n\t<dxi-item itemType=\"group\" cssClass=\"second-group\" [colCount]=\"2\">\n\t\t<dxi-item dataField=\"Descripcion\" [colSpan]=\"2\" editorType=\"dxTextArea\" [editorOptions]=\"{ height: 140 }\"></dxi-item>\n\t</dxi-item>\n</dx-form>\n\n<ion-button class=\"boton\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n      >Agregar reserva</ion-button\n >");

/***/ }),

/***/ "JTWM":
/*!*****************************************************************************!*\
  !*** ./src/app/Services/modificarAreaAdmin/modificar-area-admin.service.ts ***!
  \*****************************************************************************/
/*! exports provided: NuevaArea, AreaPK, ModificarAreaAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaArea", function() { return NuevaArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaPK", function() { return AreaPK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarAreaAdminService", function() { return ModificarAreaAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NuevaArea {
}
class AreaPK {
}
let tipo = [
    "Deportiva",
    "Social",
    "Relajante"
];
let horaDeApertura = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
let horaDeCierre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
let diasDisponibles = ["Lunes-Viernes", "Lunes-Domingo", "Viernes-Domingo"];
let ModificarAreaAdminService = class ModificarAreaAdminService {
    constructor(http) {
        this.http = http;
    }
    getNuevaArea() {
    }
    getTipo() {
        return tipo;
    }
    putAreaComun(url, body) {
        return this.http.put(url, body);
    }
    getAreaComun(url) {
        return this.http.get(url);
    }
    getHoraDeApertura() {
        return horaDeApertura;
    }
    getHoraDeCierre() {
        return horaDeCierre;
    }
    getDiasDisponibles() {
        return diasDisponibles;
    }
    traerArea(url) {
        return this.http.get(url);
    }
};
ModificarAreaAdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ModificarAreaAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModificarAreaAdminService);



/***/ }),

/***/ "KmZu":
/*!*************************************************************!*\
  !*** ./src/app/components/general/chat/chat.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mensaje {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.otro-mensaje {\n  background: #e5e5ea;\n  color: #000000;\n}\n\n.mi-mensaje {\n  background: var(--ion-color-residente);\n  color: #000000;\n}\n\n.time {\n  color: #7E7A79;\n  float: right;\n  font-size: small;\n}\n\n.mensaje-entrada {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.msg-btn {\n  --padding-start: 0.2em;\n  --padding-end: 1em;\n}\n\n.basura {\n  color: var(--ion-color-residente);\n  margin-left: 90%;\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLHNDQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVuc2FqZXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5vdHJvLW1lbnNhamV7XG4gICAgYmFja2dyb3VuZDogI2U1ZTVlYTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1pLW1lbnNhamV7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZSk7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50aW1le1xuICAgIGNvbG9yOiAjN0U3QTc5O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IHNtYWxsOztcbn1cblxuLm1lbnNhamUtZW50cmFkYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG5cbn1cblxuLm1zZy1idG57XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjJlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxZW07XG59XG5cbi5iYXN1cmF7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yZXNpZGVudGUpO1xuICAgIG1hcmdpbi1sZWZ0OiA5MCU7XG4gICAgZm9udC1zaXplIDogMjNweDtcbn0iXX0= */");

/***/ }),

/***/ "KtR7":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/pagos-component/pagos-component.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"PAGOS\" menu=RESIDENTE></app-header>\n\n<ion-content>\n    <section class=\"ion-text-center\">\n        <ion-label color=\"residente-txt\"> <br> <br> Tu administración <br>  </ion-label>\n        <h1>  <strong> $ {{getPrecio()}} COP <br> <br> </strong> </h1>\n        <ion-label color=\"residente-txt\"> Medios de pago <br>  </ion-label>\n    </section>\n    <ion-card id=\"paypal\" class=\"ion-text-center\" color=\"ligth\">\n        <ion-img id=\"paypal-img\" src=\"./../../../../assets/icon/paypal.svg\"></ion-img>\n    </ion-card>\n    <ion-card id=\"pse\" class=\"ion-text-center\" color=\"ligth\">\n        <ion-img id=\"pse-img\" src=\"./../../../../assets/icon/pse.svg\"></ion-img>\n    </ion-card>\n    <ion-card id=\"cards\" class=\"ion-text-center\" color=\"ligth\">\n        <ion-img id=\"cards-img\" src=\"./../../../../assets/icon/MasterCard.svg\"></ion-img>\n    </ion-card>\n    <ion-card id=\"cards\" class=\"ion-text-center\" color=\"ligth\">\n        <ion-img id=\"cards-img\" src=\"./../../../../assets/icon/Visa.svg\"></ion-img>\n    </ion-card>\n    <div id=\"centrado\">\n        <ion-button color=\"residente\" (click)=\"openUrl()\">\n            <ion-label> Paga Aquí</ion-label>\n        </ion-button>\n    </div>\n</ion-content>");

/***/ }),

/***/ "LSVT":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/residente/areas-residente-component/areas-residente-component.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 20px;\n}\n\n::ng-deep #button {\n  margin: 0 auto;\n  display: block;\n}\n\n::ng-deep #calendar-container {\n  margin: 0 auto;\n  display: block;\n}\n\n#form {\n  margin-left: 50px;\n  margin-right: 50px;\n}\n\n#form1 {\n  margin-left: 40px;\n  margin-right: 20px;\n}\n\n.boton1 {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 50px;\n  margin-left: 20px;\n}\n\n.boton2 {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 100px;\n  margin-left: 20px;\n}\n\n.mover {\n  overflow: scroll;\n}\n\n.calendarEstilo {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FyZWFzLXJlc2lkZW50ZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7QUFHSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJhcmVhcy1yZXNpZGVudGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5maXJzdC1ncm91cCxcbjo6bmctZGVlcCAuc2Vjb25kLWdyb3VwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG46Om5nLWRlZXAgI2J1dHRvbiB7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuXG46Om5nLWRlZXAgI2NhbGVuZGFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuXG4jZm9ybXtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbiNmb3JtMXtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5ib3RvbjF7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5ib3RvbjJ7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubW92ZXJ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBcbn1cblxuLmNhbGVuZGFyRXN0aWxve1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "LeQa":
/*!*******************************************************************************!*\
  !*** ./src/app/Services/SeleccionConjuntoServ/seleccion-conj-serv.service.ts ***!
  \*******************************************************************************/
/*! exports provided: selConjService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selConjService", function() { return selConjService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let conjuntos = [{
        id: 1,
        Name: "Mazuren 22"
    }, {
        id: 2,
        Name: "Mazuren 13"
    }, {
        id: 3,
        Name: "Scala 23"
    }, {
        id: 4,
        Name: "Scala 25"
    }, {
        id: 5,
        Name: "Persepolis"
    }, {
        id: 6,
        Name: "Hércules"
    }, {
        id: 7,
        Name: "Almeida",
    }, {
        id: 8,
        Name: "Quintas de la villa",
    }, {
        id: 9,
        Name: "Valencia",
    }, {
        id: 10,
        Name: "Valeriana",
    }, {
        id: 11,
        Name: "Junior",
    }, {
        id: 12,
        Name: "Batimóvil",
    }];
let selConjService = class selConjService {
    constructor(http) {
        this.http = http;
    }
    getConjuntos() {
        return conjuntos;
    }
    getConjuntosServ(id) {
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/Conjuntos/misnoconjuntos/" + id.toString());
    }
    obtener(url) {
        this.getConju(url)
            .subscribe(respuesta => {
            console.log("subscirbe ", respuesta);
            this.conjunto = respuesta;
        });
    }
    getConju(url) {
        return this.http.get(url);
    }
    getConjuntosS() {
        return this.conjunto;
    }
    vinResCon(id, idPerActiva) {
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/Conjuntos/residenteConjunto/" + id.toString() + "/" + idPerActiva.toString());
    }
};
selConjService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
selConjService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], selConjService);



/***/ }),

/***/ "Luky":
/*!**********************************************************!*\
  !*** ./src/app/Services/apiImagen/api-imagen.service.ts ***!
  \**********************************************************/
/*! exports provided: ApiImagenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiImagenService", function() { return ApiImagenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let ApiImagenService = class ApiImagenService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    getImages() {
        return this.http.get(`${this.url}/image`);
    }
    uploadImageFile(file) {
        const ext = file.name.split('.').pop();
        const formData = new FormData();
        formData.append('file', file, `myimage.${ext}`);
        formData.append('name', file.name);
        return this.http.post(`${this.url}/image`, formData);
    }
    deleteImage(id) {
        return this.http.delete(`${this.url}/image/${id}`);
    }
};
ApiImagenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiImagenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiImagenService);



/***/ }),

/***/ "MDux":
/*!*********************************************************************!*\
  !*** ./src/app/components/general/noticias/noticias.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#rounded {\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n#derecha {\n  width: 94%;\n  text-align: right;\n}\n\n#izquierda {\n  width: 94%;\n  padding-left: 5%;\n  text-align: left;\n}\n\nion-textarea {\n  width: 98%;\n  height: 50px;\n  padding-left: 6% !important;\n}\n\nion-item {\n  width: 100%;\n  padding-left: 0%;\n}\n\n#botonPublicar {\n  width: 92%;\n  height: 30px;\n}\n\n#botonImagen {\n  width: 20%;\n  height: 30px;\n}\n\nion-card {\n  width: 92%;\n  border: solid 1px var(--ion-color-residente-txt);\n  box-shadow: none !important;\n}\n\nion-card ion-card-content {\n  padding-left: 0%;\n  padding-right: 0%;\n  padding-top: 0%;\n  padding-bottom: 0%;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\n#content-div {\n  height: 90%;\n}\n\nion-card-title {\n  font-size: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vdGljaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksbUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnREFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6Im5vdGljaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JvdW5kZWQge1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgXG59XG5cbiNkZXJlY2hhe1xuICAgIHdpZHRoOiA5NCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNpenF1aWVyZGF7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlvbi10ZXh0YXJlYXtcbiAgICB3aWR0aDogOTglO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVte1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMCU7XG59XG5cbiNib3RvblB1YmxpY2Fye1xuICAgIHdpZHRoOiA5MiU7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jYm90b25JbWFnZW57XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbmlvbi1jYXJke1xuICAgIHdpZHRoOiA5MiU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZS10eHQpO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCU7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jY29udGVudC1kaXZ7XG4gICAgaGVpZ2h0OiA5MCU7XG59XG5cbmlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "O0TE":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/modificar-area-admin/modificar-area-admin.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"MODIFICAR ÁREA COMUN\" menu=NO routeBack=\"/area-comun-admin\"></app-header>\n<div class=\"formabella\">\n<dx-form id=\"form\"\n\t[formData]=\"nuevaArea\"\n      [labelLocation]=\"top\">\n\t<dxi-item itemType=\"group\" cssClass=\"first-group\" [colCount]=\"4\">\n\t\t<dxi-item itemType=\"group\" [colSpan]=\"3\">\n                  <dxi-item dataField=\"nombre\"></dxi-item>\n            \t<dxi-item dataField=\"tipo\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: tipo, value: '' }\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"capacidad\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"horaApertura\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: horaDeApertura, value: '' }\"></dxi-item>\n            \t<dxi-item dataField=\"horaCierre\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: horaDeCierre, value: '' }\"></dxi-item>\n            \t<dxi-item dataField=\"nombreDia\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: diasDisponibles, value: '' }\"></dxi-item>\n                <dxi-item dataField=\"descripcion\" [colSpan]=\"2\" editorType=\"dxTextArea\" [editorOptions]=\"{ height: 140  }\"></dxi-item>\n        \t\t</dxi-item>\n\t</dxi-item>\n</dx-form>\n\n</div>\n\n\t  <ion-button class=\"boton\"\n      (click)=\"modificarArea()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n      >Modificar Area</ion-button> ");

/***/ }),

/***/ "O2Zf":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/claves-component/claves-component.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClavesComponent", function() { return ClavesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_claves_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./claves-component.component.html */ "AdbY");
/* harmony import */ var _claves_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./claves-component.component.scss */ "anrV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_ClavServ_clave_contra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/ClavServ/clave-contra.service */ "obuL");





let ClavesComponent = class ClavesComponent {
    constructor(service) {
        this.labelLocation = "top";
        this.readOnly = false;
        this.showColon = true;
        this.minColWidth = 300;
        this.usuarios = service.getUsuarios();
        this.roles = service.getRoles();
    }
};
ClavesComponent.ctorParameters = () => [
    { type: _Services_ClavServ_clave_contra_service__WEBPACK_IMPORTED_MODULE_4__["ClaveContraService"] }
];
ClavesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-claves-component',
        template: _raw_loader_claves_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_claves_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClavesComponent);



/***/ }),

/***/ "OH9x":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/agregar-conjunto-component/agregar-conjunto-component.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"AGREGAR CONJUNTO\" menu=NO routeBack=\"/netflix\"></app-header>\n\n\n<form action=\"your-action\"  (submit)=\"onFormSubmit($event)\">\n    <dx-form id=\"form\" \n    [formData]=\"nuevoConjunto\"\n    [labelLocation]=\"posi\"\n        [showColonAfterLabel]=\"true\"\n        [showValidationSummary]=\"true\"\n        validationGroup=\"customerData\">\n        <dxi-item id=\"nombreC\" itemType=\"group\" caption=\"\">\n            <dxi-item dataField=\"nombre\">\n                <dxi-validation-rule \n                    type=\"required\"\n                    message=\"El nombre es obligatorio\">\n                </dxi-validation-rule>\n            \n                <dxi-validation-rule \n                    type=\"async\"\n                    message=\"Nombre ya esta registrado\" \n                    [validationCallback]=\"asyncValidation\">\n                </dxi-validation-rule>\n            </dxi-item>\n            <dxi-item dataField=\"dirección\">\n                <dxi-validation-rule \n                    type=\"required\"\n                    message=\"La dirección es obligatoria\">\n                </dxi-validation-rule>\n                <dxi-validation-rule \n                    type=\"async\"\n                    message=\"Dirección ya esta registrado\" \n                    [validationCallback]=\"asyncValidationDirec\">\n                </dxi-validation-rule>\n            </dxi-item>\n            \n            <dxi-item dataField=\"precioAdmin\" [label]=\"{text: 'Precio de administración ($)'}\"  helpText=\"Poner en pesos Colombianos\">\n                <dx-number-box\n                format=\"$ #,##0.##\"\n               \n            \t></dx-number-box>\n                <dxi-validation-rule \n                    type=\"required\"\n                    message=\"El precio es obligatoria\">\n                </dxi-validation-rule>\n                \n            </dxi-item>\n            \n            \n           <dxi-item dataField=\"Link de pago\">\n            \n                <dxi-validation-rule \n                    type=\"pattern\"\n                    [pattern]=\"lnikPattern\"\n                    message=\"Link invalido\">\n                </dxi-validation-rule>\n            </dxi-item>\n\n            <dxi-item dataField=\"Cantidad de torres\">\n                \n                <div class=\"dx-field-value\">\n                    <dx-number-box #numberBox\n                        class=box\n                        type=\"required\"\n                        [max]=\"100\"\n                        [min]=\"1\"\n                        [showSpinButtons]=\"true\"\n                        (onKeyDown)=\"keyDown($event)\"\n                        [value]=\"1\"\n                    ></dx-number-box>\n                </div>\n            </dxi-item>\n\n            <dxi-item dataField=\"Cantidad de pisos\">\n                \n                <div class=\"dx-field-value\">\n                    <dx-number-box #numberBox\n                        type=\"required\"\n                        [max]=\"100\"\n                        [min]=\"1\"\n                        [showSpinButtons]=\"true\"\n                        (onKeyDown)=\"keyDown($event)\"\n                        [value]=\"1\"\n                    ></dx-number-box>\n                </div>\n            </dxi-item>\n\n            <dxi-item dataField=\"Cantidad de aptosxpiso\">\n                \n                <div class=\"dx-field-value\">\n                    <dx-number-box #numberBox\n                        type=\"required\"\n                        [max]=\"100\"\n                        [min]=\"1\"\n                        [showSpinButtons]=\"true\"\n                        (onKeyDown)=\"keyDown($event)\"\n                        [value]=\"1\"\n                    ></dx-number-box>\n                </div>\n            </dxi-item>\n            \n        </dxi-item>\n        \n        <dxi-item \n            itemType=\"button\"\n            horizontalAlignment=\"right\"\n            [buttonOptions]=\"buttonOptions\">\n        </dxi-item>\n    </dx-form>\n</form>\n<ion-content>\n  <ion-icon name=\"play-circle-outline\" color = \"residente\" (click)=\"finish()\" ></ion-icon>\n</ion-content>");

/***/ }),

/***/ "OJYG":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/resultados-residente/resultados-residente.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"residente\">\n  </ion-toolbar >\n  <ion-toolbar color=\"light\"> \n    <ion-button (click)=\"backAs()\" fill=\"clear\" slot=\"start\">\n      <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" color=\"residente\"></ion-icon>\n    </ion-button>\n    <strong><ion-title class=\"\" color=\"residente-txt\">RESULTADOS<br>ASAMBLEA</ion-title> </strong>\n  </ion-toolbar>\n</ion-header>\n\n");

/***/ }),

/***/ "P1qy":
/*!*************************************************************************************!*\
  !*** ./src/app/components/general/manual-component/manual-component.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".botIng3 {\n  margin-top: 30px;\n  margin-left: 70px;\n  width: 250px;\n  margin-bottom: 200px;\n}\n\n.Foto {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21hbnVhbC1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoibWFudWFsLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RJbmcze1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuXG59XG4uRm90b3tcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "Q/zP":
/*!***********************************************************************************!*\
  !*** ./src/app/Services/reservarAreaResidente/reservar-area-residente.service.ts ***!
  \***********************************************************************************/
/*! exports provided: Reserva, ReservarAreaResidenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reserva", function() { return Reserva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarAreaResidenteService", function() { return ReservarAreaResidenteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Reserva {
}
let reserva = {
    "Fecha": " 21 de Marzo del 2021",
    "Area": "Cancha de futbol",
    "Descripcion": "Voy con mis 4 hijos y mi papa",
    "HorasDisponibles": "08:00",
    "HoraInicial": "05:00",
    "HoraFinal": "06:00",
    "CantidadDePersonas": "06",
};
let horasDisponibles = [
    "08:00",
    "13:00",
    "16:00",
];
let hora_i = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
let hora_f = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
let cantidad_p = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
let ReservarAreaResidenteService = class ReservarAreaResidenteService {
    getReserva() {
        return reserva;
    }
    getHorasDisponibles() {
        return horasDisponibles;
    }
    getHora_i() {
        return hora_i;
    }
    getHora_f() {
        return hora_f;
    }
    getCantidad_p() {
        return cantidad_p;
    }
};
ReservarAreaResidenteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ReservarAreaResidenteService);



/***/ }),

/***/ "R1kg":
/*!*************************************************************************************!*\
  !*** ./src/app/components/admin/agregar-area-admin/agregar-area-admin.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AgregarAreaAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarAreaAdminComponent", function() { return AgregarAreaAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_agregar_area_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./agregar-area-admin.component.html */ "4Tm1");
/* harmony import */ var _agregar_area_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregar-area-admin.component.scss */ "RHrC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Services_AgregarAreaAdmin_agregar_area_admin_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/AgregarAreaAdmin/agregar-area-admin-service.service */ "9j2C");
/* harmony import */ var _Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ "hYZE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/constants */ "l207");











const sendRequest = function (value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(value === validEmail);
        }, 1000);
    });
};
let AgregarAreaAdminComponent = class AgregarAreaAdminComponent {
    constructor(service, navCtrl, conjunto) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.conjunto = conjunto;
        this.nuevaArea = new _Services_AgregarAreaAdmin_agregar_area_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["NuevaArea"]();
        this.areacomunPK = new _Services_AgregarAreaAdmin_agregar_area_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AreaComunPK"]();
        this.label = "top";
        this.linkAgregarHora = "agregar-fecha";
        this.onFormSubmit = function (e) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4___default()({
                message: "Se ha agregado el área común",
                position: {
                    my: "center top",
                    at: "center top"
                }
            }, "success", 3000);
            e.preventDefault();
        };
        this.tipo = service.getTipo();
        this.areacomunPK.conjuntoIdConjunto = conjunto.getConjuntoActivo();
        this.nuevaArea.areacomunPK = this.areacomunPK;
        this.nuevaArea.estado = "H";
        this.horaDeApertura = service.getHoraDeApertura();
        this.horaDeCierre = service.getHoraDeCierre();
        this.diasDisponibles = service.getDiasDisponibles();
    }
    ngOnInit() {
    }
    goToRegister() {
    }
    mandarArea() {
        console.log("holiii", this.nuevaArea);
        this.service.postAreaNueva(src_app_constants__WEBPACK_IMPORTED_MODULE_9__["IPRESIDENTESA"] + "/consultas/AreasComunes/NuevaArea", this.nuevaArea)
            .subscribe(respuesta => {
            this.respuesta = respuesta;
            console.log(this.respuesta);
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4___default()(this.respuesta.respuesta, 'success');
        });
        this.navCtrl.navigateForward(this.linkAgregarHora);
    }
    traerArea() {
        this.service.getAreaEspecifica(src_app_constants__WEBPACK_IMPORTED_MODULE_9__["IPRESIDENTESA"] + "/consultas//consultas/AreasComunes/areaEspecifica/conjunto/" + this.conjunto.getConjuntoActivo() + "/nomArea/" + this.nuevaArea.nombre)
            .subscribe(respuesta => {
            this.respuestaArea = respuesta;
        });
        console.log("areaActual:", this.respuestaArea);
    }
};
AgregarAreaAdminComponent.ctorParameters = () => [
    { type: _Services_AgregarAreaAdmin_agregar_area_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AgregarAreaAdminServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__["ConjuntosService"] }
];
AgregarAreaAdminComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_7__["DxFormComponent"], { static: false },] }]
};
AgregarAreaAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-agregar-area-admin',
        providers: [_Services_AgregarAreaAdmin_agregar_area_admin_service_service__WEBPACK_IMPORTED_MODULE_5__["AgregarAreaAdminServiceService"]],
        template: _raw_loader_agregar_area_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_agregar_area_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AgregarAreaAdminComponent);



/***/ }),

/***/ "R2Yd":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/home-component/home-component.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"SOBRE RESIDENTES\" menu=ADMIN></app-header>");

/***/ }),

/***/ "RHrC":
/*!***************************************************************************************!*\
  !*** ./src/app/components/admin/agregar-area-admin/agregar-area-admin.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 20px;\n}\n\n::ng-deep #button {\n  margin: 0 auto;\n  display: block;\n}\n\n.botIng {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 100px;\n}\n\n.borde {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FncmVnYXItYXJlYS1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6ImFncmVnYXItYXJlYS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuZmlyc3QtZ3JvdXAsXG46Om5nLWRlZXAgLnNlY29uZC1ncm91cCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuOjpuZy1kZWVwICNidXR0b24ge1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgZGlzcGxheTpibG9jaztcbn1cblxuLmJvdEluZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgIFxufVxuXG5cblxuLmJvcmRle1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "Ra64":
/*!*************************************************************************************!*\
  !*** ./src/app/components/general/ingreso-perfiles/ingreso-perfiles.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-button {\n  font-size: 17px;\n  color: var(--ion-color-residente);\n}\n\nion-content .bot {\n  background-color: var(--ion-color-residente);\n}\n\nion-content #header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nion-content #header h1 {\n  font-weight: 700;\n  font-size: 26px;\n  color: #010100;\n  margin-bottom: 15%;\n}\n\nion-content #form {\n  --background: #44C112;\n  margin-top: 15%;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\nion-content #form ion-card {\n  margin-top: 35px;\n  height: 48px;\n  font-size: 18px;\n  text-transform: initial;\n  border-radius: 50px;\n  box-shadow: 1px 8px 8px 0px rgba(0, 0, 0, 0.05);\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2luZ3Jlc28tcGVyZmlsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFFRSxlQUFBO0VBQ0EsaUNBQUE7QUFGTjs7QUFPSTtFQUNJLDRDQUFBO0FBSlI7O0FBUUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQU5OOztBQVFNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTlI7O0FBV0k7RUFHRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBWE47O0FBYU07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7QUFYUiIsImZpbGUiOiJpbmdyZXNvLXBlcmZpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIFxuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IHtcbiAgICAuYm90e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlKTtcbiAgICB9XG4gICAgXG4gIFxuICAgICNoZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBjb2xvcjogIzAxMDEwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUlO1xuICAgICAgfVxuICBcbiAgICB9XG4gIFxuICAgICNmb3JtIHtcbiAgICAgICAgXG5cbiAgICAgIC0tYmFja2dyb3VuZDogIzQ0QzExMjtcbiAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIFxuICAgICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCA4cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbi5lbnRyYWRhe1xuICAgICAgICBcbiAgICAgXG59XG4gIFxuIl19 */");

/***/ }),

/***/ "RvhJ":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/admin/asamblea-Subir-Votos/asamblea-subir-votos/asamblea-subir-votos.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 80px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n::ng-deep .second-group {\n  background-color: rgba(191, 191, 191, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2FzYW1ibGVhLXN1YmlyLXZvdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQ0FBQTtBQUNKIiwiZmlsZSI6ImFzYW1ibGVhLXN1YmlyLXZvdG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5maXJzdC1ncm91cCxcbjo6bmctZGVlcCAuc2Vjb25kLWdyb3VwIHtcbiAgICBwYWRkaW5nOiA4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuOjpuZy1kZWVwIC5zZWNvbmQtZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4xNSk7XG59Il19 */");

/***/ }),

/***/ "SLOb":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/residente/paquetes-residente-component/paquetes-residente-component.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  width: 95%;\n  height: 50%;\n}\n\nion-card {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhcXVldGVzLXJlc2lkZW50ZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJwYXF1ZXRlcy1yZXNpZGVudGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuaW9uLWNhcmR7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Tnv5":
/*!**************************************************************************************!*\
  !*** ./src/app/components/empleado/calendar-paquete/calendar-paquete.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-residente) !important;\n  color: black !important;\n}\n\n.calendarEstilo {\n  height: 93%;\n  width: 100%;\n  margin-left: 4% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhbGVuZGFyLXBhcXVldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1REFBQTtFQUNBLHVCQUFBO0FBQVI7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLDBCQUFBO0FBTEYiLCJmaWxlIjoiY2FsZW5kYXItcGFxdWV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcHtcbiAgICAubW9udGh2aWV3LXNlbGVjdGVke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmlvbi1jb250ZW50e1xuIFxufVxuLmNhbGVuZGFyRXN0aWxve1xuICBoZWlnaHQ6IDkzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICBtYXJnaW4tbGVmdDogNCUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "UDMH":
/*!*********************************************************!*\
  !*** ./src/app/Services/IngresoServ/ingreso.service.ts ***!
  \*********************************************************/
/*! exports provided: Usuario, IngresoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoService", function() { return IngresoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Usuario {
}
let usuario = {
    "Email": "",
    "Password": "",
};
let IngresoService = class IngresoService {
    getUsuario() {
        return usuario;
    }
};
IngresoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IngresoService);



/***/ }),

/***/ "UJS5":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/chat/chat.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"residente\">\n    </ion-toolbar >\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" (click)=\"goBack()\">\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" color=\"residente-txt\"></ion-icon>\n        </ion-buttons>\n        <ion-text slot=\"start\" color=\"residente-txt\">\n            <h3>{{chatn}}</h3>\n        </ion-text>\n        <ion-icon *ngIf=\"usuario==='ADMIN' && chatrol==='empleado'\"  class=\"basura\" name=\"trash-outline\" (click)=\"deleteEmp()\"></ion-icon>\n    </ion-toolbar>\n  </ion-header>\n<!---<app-header titulo=\"HOLA\" menu=\"NO\" routeBack=\"/empleados\">\n    <ion-icon *ngIf=\"usuario==='ADMIN'\" class=\"basura\" name=\"trash-outline\"></ion-icon>\n    (click)=\"goBack()\"\n</app-header>--->\n\n<ion-content>\n    <ion-grid>\n        <ion-row *ngFor= \"let mensaje of mensajes\">\n            \n            <ion-col size=\"9\" *ngIf=\" ((( (usuario !== 'EMPLEADO') && ( (chatrol === 'empleado')   )) && (mensaje.rolEmpleado === 'remitente')) || ((usuario === 'EMPLEADO') && (mensaje.rolEmpleado === 'destinatario'))) ||  ( ( (usuario !== 'EMPLEADO') &&  (chatrol !== 'empleado') ) &&  ( (usuario === 'ADMIN' && (mensaje.rolAdmin === 'destinatario')) || (usuario === 'RESIDENTE' && (mensaje.rolAdmin === 'remitente')) ) ) \" class= \"mensaje otro-mensaje\">\n                \n                <span>\n                    {{mensaje.contenido}}\n                </span>\n                <div class=\"time\" text-right><br>\n                    {{mensaje.fechaHora | date:'short'}}\n                </div>\n            </ion-col>\n\n            <ion-col offset=\"3\" size=\"9\"  *ngIf=\" ((( (usuario !== 'EMPLEADO') && ( (chatrol === 'empleado')   )) && (mensaje.rolEmpleado === 'destinatario')) || ((usuario === 'EMPLEADO') && (mensaje.rolEmpleado === 'remitente'))) ||  ( ( (usuario !== 'EMPLEADO') &&  (chatrol !== 'empleado') ) &&  ( (usuario === 'ADMIN' && (mensaje.rolAdmin === 'remitente')) || (usuario === 'RESIDENTE' && (mensaje.rolAdmin === 'destinatario')) ) ) \" class= \"mensaje mi-mensaje\">\n                \n                <span>\n                    {{mensaje.contenido}}\n                </span>\n                <div class=\"time\" text-right><br>\n                    {{mensaje.fechaHora | date:'short'}}\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n    <ion-toolbar light=\"light\">\n        <ion-row align-items-center no-padding>\n            <ion-col size=\"10\"> \n                <textarea autosize maxRows=\"2\" maxlength = \"240\" [(ngModel)]=\"newMsg\" class=\"mensaje-entrada\"></textarea>\n            </ion-col>\n            <ion-col size=\"2\"> \n                <ion-card  class=\"msg-btn\" \n                (click)=\"enviarMensaje()\" [disabled]=\"newMsg === ''\">\n                <ion-icon  name=\"send-outline\" style=\"zoom:2.0;\"></ion-icon>\n                </ion-card> \n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "UYln":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/reservacion-area-residente/reservacion-area-residente.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Mis Reservas\" menu=RESIDENTE></app-header>\n    <div class=\"widget-container\">\n        <dx-list #list\n            [dataSource]=\"tasks\"\n            [height]=\"400\"\n            [selectionMode]=\"selectionModeValue\"\n            [selectAllMode]=\"selectAllModeVlaue\"\n            [showSelectionControls]=\"true\"\n            [selectedItemKeys]=\"[]\"></dx-list>\n    </div>\n<ion-button class=\"boton\"\n      (click)=\"mandarEliminar()\"\n      expand=\"full\"\n      shape=\"round\" \n      color=\"danger\"\n      type=\"submit\"\n      >Eliminar</ion-button>\n<ion-button class=\"boton\"\n      (click)=\"mandarModificar()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n      >Modificar</ion-button>\n<ion-button class=\"boton\"\n      (click)=\"goToRegister()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n      >Volver</ion-button>");

/***/ }),

/***/ "UuQP":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/asamblea-admin-component/asamblea-admin-component.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"ASAMBLEA\" menu=NO routeBack=\"/lista-asamblea-admin\" ></app-header>\n\n\n<div *ngIf=\"step==1\"  class=\"estetica\">\n    <dx-form id=\"form\" [formData]=\"asambleas\" [labelLocation]=\"labelL\">\n\n        <dxi-item itemType=\"group\" cssClass=\"first-group\" [colCount]=\"4\">\n\n            <dxi-item itemType=\"group\" [colSpan]=\"3\">\n\n                <dxi-item dataField=\"FechaAsamblea\" editorType=\"dxDateBox\" [editorOptions]=\"{ width: '100%'}\">\n                </dxi-item>\n                <dxi-item dataField=\"Tema\"></dxi-item>\n                <dxi-item dataField=\"NumeroPropuestas\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: Nopciones }\">\n                </dxi-item>\n            </dxi-item>\n        </dxi-item>\n\n        \n\n    </dx-form>\n\n\t<dx-button\n\t  \n\t  class=\"lado\"\n\t  stylingMode=\"contained\"\n\t  icon=\"upload\"\n\t  [width]=\"250\"\n\t  [height]=\"50\"\n\t  text=\"Modificar Asamblea\"\n\t  (onClick)=\"this.step=3\"\n\t  \n\t  >    \n\t  \n\t  </dx-button>\n\n\t<dx-button\n\t  \n\t  class=\"lado-cancelar\"\n\t  stylingMode=\"contained\"\n\t  icon=\"close\"\n\t  [width]=\"250\"\n\t  [height]=\"50\"\n\t  text=\"Cancelar\"\n\t  (onClick)=\"this.step=1\"\n\t  \n\t  >    \n\t  \n\t  </dx-button>\n\n\t  \n\n</div>\n\n<div *ngIf=\"step==3\">\n<dxi-item itemType=\"group\" cssClass=\"second-group\" [colCount]=\"2\">\n\n\t<dxi-item itemType=\"group\">\n\n\t\t<dxi-item dataField=\"Nombre\"></dxi-item>\n\n\t</dxi-item>\n</dxi-item>\n</div>");

/***/ }),

/***/ "Vt8s":
/*!****************************************************!*\
  !*** ./src/app/Services/paquetes/paquete.model.ts ***!
  \****************************************************/
/*! exports provided: Paquete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paquete", function() { return Paquete; });
class Paquete {
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "WcdF":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/general/seleccion-conjunto-component/seleccion-conjunto-component.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SeleccionConjuntoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionConjuntoComponent", function() { return SeleccionConjuntoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seleccion_conjunto_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seleccion-conjunto-component.component.html */ "3bdi");
/* harmony import */ var _seleccion_conjunto_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seleccion-conjunto-component.component.scss */ "inGp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");
/* harmony import */ var _Services_SeleccionConjuntoServ_seleccion_conj_serv_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Services/SeleccionConjuntoServ/seleccion-conj-serv.service */ "LeQa");







if (!/localhost/.test(document.location.host)) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["enableProdMode"])();
}
let SeleccionConjuntoComponent = class SeleccionConjuntoComponent {
    constructor(service, personasService, router) {
        this.service = service;
        this.personasService = personasService;
        this.router = router;
    }
    click(id) {
        //console.log("hola " , id , " - ", this.idPerActiva);
        this.service.vinResCon(id, this.idPerActiva);
        this.router.navigateByUrl("/netflix");
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.personasService.difTiempo(new Date().getTime() );
            this.idPerActiva = this.personasService.getPersonaID();
            this.service.getConjuntosServ(this.idPerActiva);
            yield this.waitBD();
            this.conjuntos = this.service.getConjuntosS();
        });
    }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 250));
        });
    }
};
SeleccionConjuntoComponent.ctorParameters = () => [
    { type: _Services_SeleccionConjuntoServ_seleccion_conj_serv_service__WEBPACK_IMPORTED_MODULE_6__["selConjService"] },
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_5__["PersonasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SeleccionConjuntoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seleccion-conjunto-component',
        template: _raw_loader_seleccion_conjunto_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seleccion_conjunto_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SeleccionConjuntoComponent);



/***/ }),

/***/ "Xqdh":
/*!******************************************************************************!*\
  !*** ./src/app/components/empleado/nuevo-paquete/nuevo-paquete.component.ts ***!
  \******************************************************************************/
/*! exports provided: NuevoPaqueteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoPaqueteComponent", function() { return NuevoPaqueteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nuevo_paquete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nuevo-paquete.component.html */ "4Jso");
/* harmony import */ var _nuevo_paquete_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuevo-paquete.component.scss */ "/jPa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/ingreAptoServ/serv-ing-apto.service */ "CaST");
/* harmony import */ var src_app_Services_paquetes_paquete_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/paquetes/paquete.model */ "Vt8s");
/* harmony import */ var src_app_Services_paquetes_paquetePK_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/paquetes/paquetePK.model */ "+udL");
/* harmony import */ var src_app_Services_paquetes_paquetes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/paquetes/paquetes.service */ "BdLC");











let NuevoPaqueteComponent = class NuevoPaqueteComponent {
    constructor(navCtrl, paquetesService, servIngAptoService, conjuntosService) {
        this.navCtrl = navCtrl;
        this.paquetesService = paquetesService;
        this.servIngAptoService = servIngAptoService;
        this.conjuntosService = conjuntosService;
        this.tamanoSeleccionado = "";
        this.remi = "";
        this.mes = 0;
        this.anio = 0;
        this.dia = 0;
        this.hora = 0;
        this.horaAux = 0;
        this.minuto = 0;
        this.horaCompleta = "";
        this.paqueteNuevo = new src_app_Services_paquetes_paquete_model__WEBPACK_IMPORTED_MODULE_8__["Paquete"]();
    }
    ngOnInit() { }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 600));
        });
    } // end waitBD
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.conjuntosService.cargarFechaActual();
            yield this.waitBD();
            this.fecha = this.conjuntosService.getFechaActual();
            this.mes = this.fecha.mes;
            this.dia = this.fecha.dia;
            this.anio = this.fecha.anio;
            this.hora = this.fecha.hora;
            this.minuto = this.fecha.minutos;
            if (this.hora > 11) {
                this.horaAux = this.hora;
                this.horaAux -= 12;
                if (this.minuto > 9)
                    this.horaCompleta = this.horaAux.toString() + ":" + this.minuto.toString() + " pm";
                else
                    this.horaCompleta = this.horaAux.toString() + ":0" + this.minuto.toString() + " pm";
            }
            else {
                if (this.minuto > 9)
                    this.horaCompleta = this.hora.toString() + ":" + this.minuto.toString() + " am";
                else
                    this.horaCompleta = this.hora.toString() + ":0" + this.minuto.toString() + " am";
            } // end if
        });
    } // end ionViewWillEnter
    getFecha() {
        return src_app_constants__WEBPACK_IMPORTED_MODULE_5__["MONTHS"][this.mes - 1] + " " + this.dia.toString() + " " + this.anio.toString();
    }
    getHora() {
        return this.horaCompleta;
    } // end getHora
    getColorReportar() {
        if ((this.tamanoSeleccionado == "") || (this.remi == "")) {
            return "deshabilitado";
        }
        else {
            return "residente";
        }
    } // end getColorReportar
    botonReportar() {
        if ((this.tamanoSeleccionado != "") && (this.remi != "")) {
            this.paqueteNuevo.paquetePK = new src_app_Services_paquetes_paquetePK_model__WEBPACK_IMPORTED_MODULE_9__["PaquetePK"]();
            this.paqueteNuevo.paquetePK.apartamentoConjuntoIdConjunto = this.conjuntosService.getConjuntoActivo();
            this.paqueteNuevo.paquetePK.apartamentoIdApartamento = this.servIngAptoService.getIdApto();
            this.paqueteNuevo.tamano = this.tamanoSeleccionado;
            this.paqueteNuevo.fecha = this.dia * 1000000 + this.mes * 10000 + this.anio;
            this.paqueteNuevo.hora = this.hora * 100 + this.minuto;
            this.paqueteNuevo.remitente = this.remi;
            this.paquetesService.nuevoPaquete(this.paqueteNuevo);
            this.tamanoSeleccionado = "";
            this.remi = "";
            this.navCtrl.navigateForward("/paquetes-empleado");
        } // end if
    } // end botonReportar
}; // end NuevoPaqueteComponent
NuevoPaqueteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_Services_paquetes_paquetes_service__WEBPACK_IMPORTED_MODULE_10__["PaquetesService"] },
    { type: src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_7__["ServIngAptoService"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__["ConjuntosService"] }
];
NuevoPaqueteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuevo-paquete',
        template: _raw_loader_nuevo_paquete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuevo_paquete_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NuevoPaqueteComponent);



/***/ }),

/***/ "Y6s5":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/ingreso-component/ingreso-component.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-start titulo=\"Ingresa a tu cuenta\"></app-header-start>\n<form action=\"your-action\" (submit)=\"onFormSubmit($event)\">\n    <dx-form id=\"form\" [readOnly]=\"false\" [showColonAfterLabel]=\"true\" [showValidationSummary]=\"true\">\n        <dxi-item id=\"correo\" dataField=\"Email\">\n            <dxi-validation-rule type=\"required\" message=\"Email is required\">\n            </dxi-validation-rule>\n            <dxi-validation-rule type=\"email\" message=\"Correo es invalido\">\n            </dxi-validation-rule>\n            <dxi-validation-rule type=\"async\" message=\"Correo no se encuentra registrado\"\n                [validationCallback]=\"asyncValidation\">\n            </dxi-validation-rule>\n        </dxi-item>\n\n        <dxi-item id=\"contra\" dataField=\"Password\" [editorOptions]=\"{ mode: 'password' }\">\n            <dxi-validation-rule type=\"required\" message=\"La contraseña es obligatoria\">\n            </dxi-validation-rule>\n            <dxi-validation-rule type=\"async\" message=\"La contraseña o el correno no coinciden\"\n                [validationCallback]=\"asyncValidationContra\">\n            </dxi-validation-rule>\n        </dxi-item>\n\n\n        <dxi-item id=\"botIngre\" itemType=\"button\" horizontalAlignment=\"center\" [buttonOptions]=\"buttonOptions\">\n        </dxi-item>\n    </dx-form>\n</form>\n\n<ion-button (click)=\"goToRegister()\" expand=\"block\" size=\"small\" color=\"residente\">Registrarse</ion-button>");

/***/ }),

/***/ "YY3W":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/reservar-area/reservar-area.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"RESERVAR AREA\" menu=RESIDENTE></app-header>\n<div class=\"borde\" >\n<dx-form id=\"form\" [formData]=\"reserva\"  >\n\t<dxi-item itemType=\"group\" cssClass=\"first-group\" >\n\t\t\n\t\t\t\t<dxi-item dataField=\"Fecha\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"Area\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"HorasDisponibles\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: horasDisponibles, value: '' }\"></dxi-item>\n                <dxi-item dataField=\"HoraInicial\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: hora_i}\"></dxi-item>\n        \t\t<dxi-item dataField=\"HoraFinal\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: hora_f}\"></dxi-item>\n        \t\t<dxi-item dataField=\"CantidadDePersonas\" editorType=\"dxSelectBox\" [editorOptions]=\"{ items: cantidad_p}\"></dxi-item>\n\t\t\t\t<dxi-item dataField=\"Descripcion\"  editorType=\"dxTextArea\" [editorOptions]=\"{ height: 140 }\"></dxi-item>\n\t\t\n\t</dxi-item>\n\n</dx-form>\n</div>\n\n<ion-button class=\"boton\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n      >Agregar reserva</ion-button\n >");

/***/ }),

/***/ "Ykq/":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empleado/paquetes-empleado-component/paquetes-empleado-component.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"PAQUETES\" menu=EMPLEADO></app-header>\n\n<ion-content>\n    <div>\n        <ion-card>\n            <ion-label color=\"dark\">&nbsp;&nbsp;&nbsp;&nbsp;Apartamentos</ion-label>\n            <ion-list>\n                <ion-item lines=\"none\">\n                    <ion-select [(ngModel)]=\"aptoSeleccionado\" (ionChange)=\"optionsApto();\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"&nbsp;&nbsp;Seleccione\" id=\"rounded\" >\n                        <div *ngFor=\"let apto of aptos\">\n                            <ion-select-option value=\"{{apto.apartamentoPK.idApartamento}}\">&nbsp;&nbsp;{{apto.torre}}-{{apto.piso}}{{apto.numero}}\n                            </ion-select-option>\n                        </div>\n                    </ion-select>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n    </div>\n\n    <div style=\"overflow:scroll\" class=\"content-div\">\n        <ion-card>\n            <div *ngFor=\"let paquete of paquetes\">\n                <ion-item>\n                    <ion-label>Paquete {{paquete.num}}</ion-label>\n                    <ion-buttons slot=\"end\" (click)=\"listOpen(paquete)\"> \n                        <ion-icon slot=\"icon-only\" color=\"residente\" name=\"add-circle-outline\"></ion-icon>\n                    </ion-buttons>\n                    <ion-buttons slot=\"end\" (click)=\"eliminarPaquete(paquete)\">\n                        <ion-icon slot=\"icon-only\" color=\"residente\" name=\"trash-outline\"></ion-icon>\n                    </ion-buttons>\n                </ion-item>\n                <ion-list *ngIf=\"getPaqueteView(paquete)=='mostrar'\">\n                    <ion-item>\n                        <ion-label color=\"medium\"> Tamaño: {{paquete.paquete.tamano}}</ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label color=\"medium\"> Fecha: {{convertDate(paquete.paquete.fecha)}}</ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label color=\"medium\"> Hora: {{convertHour(paquete.paquete.hora)}}</ion-label>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label color=\"medium\"> Remitente: {{paquete.paquete.remitente}}</ion-label>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <div *ngIf=\"getLength()==0\">\n                <ion-img src=\"/../../../../assets/icon/IconConjuntos/paquete.JPG\" alt=\"Paquete\"></ion-img>\n            </div>\n        </ion-card>\n    </div>\n\n    <div id=\"centrado\">\n        <br> <br>\n        <ion-button color=\"residente\" (click)=\"botonNuevoPaquete()\">\n            <ion-label> Nuevo Paquete </ion-label>\n        </ion-button>\n    </div>\n\n</ion-content>");

/***/ }),

/***/ "Ynzg":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/empleado/paquetes-empleado-component/paquetes-empleado-component.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PaquetesEmpleadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaquetesEmpleadoComponent", function() { return PaquetesEmpleadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_paquetes_empleado_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./paquetes-empleado-component.component.html */ "Ykq/");
/* harmony import */ var _paquetes_empleado_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paquetes-empleado-component.component.scss */ "Ar4w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_paquetes_paquetes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/paquetes/paquetes.service */ "BdLC");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/ingreAptoServ/serv-ing-apto.service */ "CaST");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_8__);









let PaquetesEmpleadoComponent = class PaquetesEmpleadoComponent {
    constructor(navCtrl, paquetesService, conjuntosService, servIngAptoService, alertController) {
        this.navCtrl = navCtrl;
        this.paquetesService = paquetesService;
        this.conjuntosService = conjuntosService;
        this.servIngAptoService = servIngAptoService;
        this.alertController = alertController;
        this.aptoSeleccionado = 0;
        this.length = -1;
        this.paqueteView = [];
    }
    ngOnInit() {
        this.length = -1;
    }
    waitBD(time) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, time));
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.length = -1;
            this.aptoSeleccionado = 0;
            this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
            this.servIngAptoService.getAptos(this.conjuntoActivo);
            yield this.waitBD(800);
            this.aptos = this.servIngAptoService.getApartamentos();
        });
    } // end ionViewWillEnter
    listOpen(paquete) {
        if (this.paqueteView[paquete.num - 1] == 'mostrar') {
            this.paqueteView[paquete.num - 1] = 'oculto';
        }
        else {
            this.paqueteView[paquete.num - 1] = 'mostrar';
        }
    }
    getPaqueteView(paquete) {
        return this.paqueteView[paquete.num - 1];
    }
    getLength() {
        return this.length;
    }
    cargarAptos(selector) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (selector == 1) {
                yield this.waitBD(1200);
                this.respuesta = this.paquetesService.getRespuesta();
                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_8___default()(this.respuesta.respuesta, 'sucess');
            } // end if
            this.paquetesService.cargarPaquetes(this.conjuntoActivo, this.aptoSeleccionado);
            yield this.waitBD(800);
            this.paquetesSer = this.paquetesService.getPaquetes();
            var conteo = 0;
            for (let paquete of this.paquetesSer) {
                var paqueteAux = { num: conteo + 1, paquete: this.paquetesSer[conteo] };
                conteo += 1;
                this.paquetes.push(paqueteAux);
            }
            for (let paquete of this.paquetes)
                this.paqueteView.push('oculto');
            this.length = this.paquetes.length;
        });
    }
    optionsApto() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.paquetes = [];
            this.paquetesSer = [];
            this.servIngAptoService.setIdApto(this.aptoSeleccionado);
            if (this.aptoSeleccionado != 0)
                this.cargarAptos(0);
        });
    }
    botonNuevoPaquete() {
        this.aptoSeleccionado = 0;
        this.length = -1;
        this.navCtrl.navigateForward("/nuevo-paquete");
    }
    convertHour(hour) {
        return this.conjuntosService.convertHour(hour);
    } // end convertHour
    convertDate(date) {
        return this.conjuntosService.convertDate(date);
    } // end convertDay
    eliminarPaquete(paquete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentAlertConfirm(paquete);
        });
    }
    presentAlertConfirm(paquete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmación',
                message: '¿Está seguro que desea eliminar el paquete ' + paquete.num + '?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.paquetesService.elimnarPaquete(this.conjuntoActivo, this.servIngAptoService.getIdApto(), paquete.paquete.paquetePK.idPaqueete);
                            this.paquetes = [];
                            this.paquetesSer = [];
                            this.cargarAptos(1);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    } // end presentAlertConfirm
};
PaquetesEmpleadoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_Services_paquetes_paquetes_service__WEBPACK_IMPORTED_MODULE_4__["PaquetesService"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__["ConjuntosService"] },
    { type: src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_7__["ServIngAptoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
PaquetesEmpleadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-paquetes-empleado-component',
        template: _raw_loader_paquetes_empleado_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_paquetes_empleado_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaquetesEmpleadoComponent);



/***/ }),

/***/ "Yv7I":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empleado/menu-empleado/menu-empleado.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"menu-empleado\" contentId=\"main-empleado\">\n  <ion-header>\n    <ion-toolbar color=\"residente\">\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item routerLink=\"/empleados\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"chatbubbles-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Asistencia\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/paquetes-empleado\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"cube-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Paquetes\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/manual\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"document-text-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Manual de Convivencia\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/netflix\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"sync-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Cambiar Conjuntos\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/acerca-nosotros\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"information-circle-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Sobre Residentes\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/ingreso\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"log-out-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Cerrar Sesion\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"main-empleado\"></ion-router-outlet>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "mjGT");












Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_11__["defineCustomElements"])(window);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ],
        providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"], { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZD1b":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empleado/calendar-paquete/calendar-paquete.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"calendarEstilo\">\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" color=\"residente\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"8\" class=\"ion-text-center\">\n      <h2> {{ viewTitle }} </h2>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" color=\"residente\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <calendar \n  [calendarMode]=\"calendar.mode\"\n  [currentDate]=\"calendar.currentDate\"\n  [showEventDetail]=false\n  (onTitleChanged)=\"onViewTitleChanged($event)\"\n  (onTimeSelected)=\"onTimeSelected($event)\">\n  </calendar>\n</ion-content>");

/***/ }),

/***/ "ZWMl":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/menu-admin/menu-admin.component.ts ***!
  \*********************************************************************/
/*! exports provided: MenuAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminComponent", function() { return MenuAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-admin.component.html */ "zhGR");
/* harmony import */ var _menu_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-admin.component.scss */ "1+9e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MenuAdminComponent = class MenuAdminComponent {
    constructor() { }
    ngOnInit() { }
};
MenuAdminComponent.ctorParameters = () => [];
MenuAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-admin',
        template: _raw_loader_menu_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuAdminComponent);



/***/ }),

/***/ "aTLU":
/*!*******************************************************************!*\
  !*** ./src/app/Services/lstChatServ/lst-chat-servicio.service.ts ***!
  \*******************************************************************/
/*! exports provided: LstChatServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LstChatServicioService", function() { return LstChatServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let LstChatServicioService = class LstChatServicioService {
    constructor(http) {
        this.http = http;
        this.chatsList3 = [
            {
                idc: 12,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'María',
                foto: 'https://cepcervantes.com/wp-content/uploads/2019/03/CEP-Cervantes-Mujer-Vigilante-Seguridad.jpg',
            },
            {
                idc: 13,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'Juanito',
                foto: 'https://i.ytimg.com/vi/VYnFoDk3MzE/maxresdefault.jpg'
            },
            {
                idc: 14,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Federica',
                foto: 'https://m.media-amazon.com/images/M/MV5BMjA5NTg1MjAyMV5BMl5BanBnXkFtZTgwNDQ0MzY1ODE@._V1_.jpg'
            },
            {
                idc: 15,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Roberto',
                foto: 'https://elclosetlgbt.com/wp-content/uploads/2019/03/hugh-jackman-gay-lgbt-homosexual.jpg'
            },
            {
                idc: 16,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'Marley',
                foto: 'https://www.soyaire.com/__export/1615335739795/sites/debate/img/2021/03/09/jennifer-aniston_1_crop1615335315391.jpg_346753400.jpg'
            },
            {
                idc: 17,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'Raul',
                foto: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2019/10/hipertextual-caidos-cielo-actores-actrices-menos-problematicos-hollywood-2019277810.jpg?fit=1200%2C686&ssl=1'
            },
            {
                idc: 18,
                rol: 'empleado',
                oficio: 'Administrador',
                nombre: 'Jaimito',
                foto: 'https://www.latercera.com/resizer/j7i4nLxOo0qzXj9xiExhE-aVeEo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/BT5KMODEZ5FAPNDOJPE5UBQQHE.png'
            },
            {
                idc: 19,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Antonio',
                foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaHBoYHBgaGhoYGBwcGBwZHBoZGhwcIS4lHB4rIRwYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQ0AuwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACBAEDBQYAB//EADsQAAIBAwMCAwYEBQQBBQEAAAECEQADIQQSMUFRBSJhE3GBkaHwBjKxwUKC0eHxBxQjUmIVM0NykiT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQACAgICAgMBAQEAAAAAAAAAAQIRITESQQNRImFxE4Ey/9oADAMBAAIRAxEAPwD52SBQqk5NGidTUO/akd7+yHboKhEqUSrQKBJXlkAUDtUu9eRKB7wiESrYooobjxS2UkkQxikdRfnAr1+/PFRYszk1ajWWYyk5OkDYsk5NPKsVCjtRog7Um7Emo6PKKC48UyLY6iiSyDSBzZjGXNN2bQArQfSjtQNpj0puRMeKeRZjQBZpk6V4kqYqp2gUja0wWhRVMFjRAFqtC09E7BVKMCKkCgdqRWiHeqNpq4JRRTuhVZ53ryJXkSrQKRVXs8BVbvXnecCiRKB70Rbt1eBXqpu3QKWWPEUTccCs+9eJ4qLt0sassWOpq0uOzCUnJ0iLFnqabRKhaa06dalsnWECqRUhKNhRotS2Uokonypi3aFAlMW6nkPiSUolt8VaoFWoo6U+RLiLXPpWbqvDp8ye+P6f0rca3NLFNp9DTUiacdGABFTTfiNna0jr+tKAU7Nou1YLVAWrCKrJplUQTUTXnaKok00rJbodGKrZ5qCZq5LdTorYNu3V0xUExSuo1EUJNlNqKCv3orPdyxrxJY01Ysxk1okonO25v6BsWOppg1BNGlRdlS+KpHraSa0GWBHaq9JbzVmoNJkIqtijQRQos1YqVmzQuTNXoKrsrTKJSGGi0wKBEq8JQAFBctSIp23pz2Iqx9PimkyJNGBq7W+2Z5WsY4rrnsTuEcg/SuS1KQxFWsh45U2ilmmoYxUtiqomqRowAs1b7OiiKHcaZOhhEipZoqHcCs+/qO1Sk2XKSiiy/qKVUFjUohY06iBRWmImOZO3oG1aAozmvTNV3LoFTsu0kXIKuVaX0pkTTSt3+lJmbdjmkGKq1JqbbwPpVFxqkEXWauBqqyMVeiieahmhbZp+yfSlLKVoaYUhh209KatIOP3oHEKO8/rVmntknmPhTQjUsqIqL9gRx8KK0pjn6VbOK26MHszFQAMewNcN4kIdvvkV3zjD/Efp/euH8aT/AJCI+/uaRXjfyMuJo4ii4oOaDoBiaPZRhamlYUZt68TUWrJNHZsd6ZJjitG6wjFRbzI8oC1E0JNUXLvQUkipSSCu3u1Bbtljmis2CcmnLaZA9wobrRKi5ZZfbswAB2k/GvOma0EtyCx4J+gpM5bAgVnZUlgmIFV7ZNWnNFbSDNJsEsEoe+Kn2c/lOa8yTED791MLpSQIP1ihCZFq464IrQ02oBIg460rdtsIn+sek9ap0+THqaTQ4s6A3dwQ92+kGmrLr1jvVS6aLYnpkEViahmPBP7f3pIbaOuW6v8A2HzFQbnUEMK5TSlsCZBMRnMRwepzxXQaeztCsplWGP8AFWmZNWWOfL64/Q/1rjPG7h9oR2x9K61xJrlPxAB7TmcfDk00EP8AoyeaMLUgV5jTOlI8TQb6F3oJpJCbPM/QVU7RVb3IqnLGtEjFyJdyaYsWOporNiMmrp7UnL0OMe2e9BVtsQQfWhVa8zRUmpsMRsQdNtJPz8asR96r2/TvVV9InMgxUkMmcim7ApGn9OalgiTbzPSmbRj+Ij0r24V7YDkDFSDQN6/QaFZeap1T5gcCn/BrO5x2pgkdO9o+yU7ZGR7yIxWAUBJkGDzkxX05NAr6YKBkAlff3+NcTrdGUJZRjr6VTRmnbKfDtBabDMYPUQSOuMc1rr4fslRJEkgmevJjgE1Hg6qTkR7q6Z9MAhc9ue+OaexSw6RwlxdqsxOFkn4VxWtuh3LAk11/4huRZu9JYAfzMP71xJprRrCNZIJqp2rzNUKtMsgLNHtowIod9A6ozUtlqdt2wKlVAr3NU3ZmopE80arFeGKquXYqdj1sN3ilXuE8UMljTNqzFVhCzIu0DlJng/SmL7g9fdSrvS9ppcntipq8ik6waSfMxTa8Upa4phTCms2CLbLSa0CQBSWmWMmnS2J+VSUZV0yxP0rofwwoLru/LuE+6c1z2qsnduHyrZ8JuMoWFOfSqA+xam8Ess6wQiFh6hQT+xrkg6uxKHytkDtPQ01qPGna2LSgQUKu3UlhBA9AOtc54U7I+w/wnH7VV0ZxhhnSJ4WyecDHb16GntXqZtx6f5NaWoebY9QPnWB43fWzp3c9FMdPN0HvJgVLeaQllWz55+LNcpYWlyQdzx3iFX6k/EVy7mjvXSzFmMkkkn1OTQqtaaNksUCqVYcV5jFL3LlGytE3LlL+0qMmrfYVWEQ23osVaImKB3ilnuE8UkrE5JFty9VaIW5o7NjqaYwKd1oSi3lnktgV53oGegdoHrSSG5JIrvXSMAZoNK0NnrQEdTUD5HoelaqOKOOU23Zv2xAFMoMikNDd3LnmtFMRXPNUzeErVjN1AAPr/Sp3DrVrpIz+9VLYU8gfKoNSwbSelaejSGUdh/es+zoUI4j4kVraLwpnYKrlQfUYp16YUbGnG446xQ3dONwf3jHcfrRf+lai2pYOrDOCBnpz05B+NHon3qEIyOeuYx+1J2hJ+jrLbbraj0X7/SuK/wBTr5XT20H8Ty3uUGM+8j5V2ulTy/AD9a+U/wCofiJuakpjZbwDESeGMzkSCOkEEURy7ElmjkgteZ4oXeqHetUrNLol7lUgE0SITTKJFU3QkrIt24o94oHaa97Oo/S/wTALUzbsgUSqBQs9XdmaSjsJnoJmoiiApaFbZ5Vpe68mOnFW33gR1NLAxxVxXZh5p9ILbipRZEUTDHOaBBmtDBDGkubG5MHH9DXR6bI9e/30rlnUintH4gVABrOUbyXGVYOsSCsUCp8qT0OqDDBmY+/p9KfRyQRP6VjKJvGRbpkMwM9O3NdH4LpYafv1x8awNM0Rn1niup8HBHJOR8c4B+Y+lZtGt4NY3hsK98Dp78UGg8O2ncRg8ek5g/fetTTeHwdx7Ed/j76d1OxVLMYUZJ93Wqq0ZOaRieN+IjTaZ7jEbgp2g9WJAA+ZFfDNXqmdi7mWOScnnPUmuh/Gf4o/3bwmLaHy5mSJG7jGCccYBxmeRd60jGkXFpqzzvUIk0du1PNMDFU3Wi1G9kKsUJJNEATVgUCos1oFEivbxVd27S2+hJslySDJmpAqoMTx9/OgMnv2iteLOJ+aIwzgVS90n0oWt9hUqvUcVSikRLzN/RDioIzVpX7/AL0GeJqjKywkVWeZiominEUBZfvDCD8KVI2kg96b06jrmvX7QNAFdnUMhkVsaXxgfxDHYc8nH6fWsL2eYPwNQfKf3qZRTKjJo7Xw3WC4xUTMDHP1r6V+HtI2GKRxz6D7+lfJfwr4jDbIXc2UZhIDDgNGdp4+M1s6r8W6vb7IsLbL5WK4aQZx0Hw6H1rL+bbpGj8tLJ9c1fiNuyIZxuOYkfP0r5t+PfxaHt+ytuDvPn2mVCrnbPWTH1rh9VeDEs7M7EkksSckyeeM1mFt7AfGtP5qKtmfNydIatWCfMBn3gD5UbaE7PaBTsJCzIMNEwYOJEmpsIcKnJ6jp8/8Uw10Ij2lM7mUuRlfJMBe/MzUOTo38S+WP9E5qUSiVK87xWZ2niwFLXb1Ddu1Rk1cY+zOUukeZpqfYmr7Vmr9tDl6EoXliRI5GPqKJTPun7mKMp+ueKhVI93f/FbnmEqADjjtz8vT0ojB93yoIHeKIbog1QEBYkTj61BUe70qPaSYmD9/OrNx/i6H76UqAqgxBqFiSPp2q3nMj9qJIME8+tFBZQq/YogI7n30boeQZ9KsZPn76KsLopXOCPrUFD2++lXbIHf0qxIPPX50UPkIiQZg1tajUl7CuTL2zteeSjEBGHcKx2/zrSqWR+XcIzn0pxLa24h8Hysp8wKNggrMkfvGazcsl8cGLqL8wBWt4N4ZvDMSQqiSQJI4zHUCTPaktRplS6yqfLI2E/8AVhuWfWCtdn4XpfbacpZlHR0S4CRBD4crknaVIYnggYzRKVijGjlDdMQuAYnuY9e05ihAimdZpGtmDjkR1HNIXHMTB+81i02z0YSgo4De5Sly5Qs81Zbs96tJIG3LRUiE03btgUarFTUuVlRikTUxUExVXtKVFN0e2CD0qJgCa8wKnbI4oTcE5PpntXWeOG9rcMfPtVt9dsde/eqkSJ/SjW5mOKNAG+kVoM+tV6lSCDGPTt6UakgQPrXt3Rh9+lDEgUsqYcTHXHfiapcwcjHf9v0pl4jGCMDiPlVemksQ0Y4MYHEdffSvoddkqsT26d59KHeJg/Cf1p2zpXcEgrtESzflz1EGflVh0iH/AOQSD2MT+tJzSwCg9iSCAZPXFSyqeBn7+VXanQuo3LDqOoP3FVf7YsgcD0IP5sdfUetNST0Di0X6NAT5jn+kZ/T50zdRIncMgwccHt74Py9KynDdZieOg+H3zUo2RA3YgVPG2VypFmvRWQMk+TavQyDJDCOgaVn/AMlruv8ATjbcdWnz21ZBHLKx3bG7r+aAeu70rg9OSrMrCJBEejfuDB+ArS/B+ta1eIBhjIWc+flJ/nAHxqJLFFRfZsfi3RBWZNhV7ZK44dZkNnqVYfLpWWvhxe2ziDtgmQB5W9YgiZHp8q7Xxu62vt2Ws2h7S+F3h8bQkqxDducxEZ9KQ0GlRNKWUQXba9t3/K6M9tup2ztT5H0oukPs4XU6DYe4M/COZ7VXMV1Gotq9oja29SUE/nhDG1wcFgCBImQFrHGiLIHgRJXeBAMdSOQR1FS1Z0Q83HDM8V5nii1KFCVP9iDwRS4zUUdXJdEMxNH7OrFSjmiwS9lc7pMcZ9YNVvb3D9+003bAXrillgE8xyPX0rqo8hMPUqQAV+/jUWRKgkHnHTgx8KM3ARt/xRGNsARTQmUXA3I+XNeV+sZiM4olYgxyD8x76l4bB/pRfYAkdevajdiIGBMfXrUW7LCZ4AkHrQsA3HPak9DWzfN7i1uCooDH1PQmlL9sEHtPPB7+7nvVGoRnQXF5AhgOkd/6U/4IyOYdtoXJB7g8T8ua5pfHKOiOcMR0qOjSjSvUH9qPxXRlGUxtVwSFOIaWV1j3g47Gug07I5B3ALHkD7QOCDudRKOSJBnAj30H4stf8dlT5XHtDsdQH2PtKPuXyuhhhODIb4PxybkTOKUTlrZiQZIMROSOZzz2qWyZDT2xDY/Wrb20KAEbcBlpnd/fntVJTeoj59cYkev9K6K9GF+yi4xwTyOvf0q4dLimGWCYx5ZADehUwP8AFFfjcTEA+tTZOxwSoK87TwVOHX3EE/OlJdjizrfFfHb123pdiqW2NBXy3JEKyowgqQRMDBmOKDV3Xt27YvNuZ0DMtwFWBZQSH3cNmD/5A4HFK/hzTK1w2GafZ3Ld622ZIVlJH86FR726xT/it72l1kQqXEna6yH/APCe2IwcSJ7HM0KQ4FsqwBbA8w8ygcIzAnfCn83UMDml7bkI+3aBO9kJhwQRGf4ogQ2cY6Ux4leX2KIhZECqUNzLKM+WYGBO3+Ue+kdPowbDOSQZZl2kMjzEMkZUHIKnqJHNACWpvrd3eRpWMxI45xjpP3jO2QJroPCtM0s6AEABdy4ZG/PtcTkMJjGCsRNOeD+GpcZ0ZtvkZ9rjyxI86HsDAI9R2pSSaNPH5HFnIs1einfEfD2tmY8p+mSP1B+lJzWdHdGSkrRcLZKg0F6wVXcYyePQ0w99Ugcenz/pUakEgcwQfrFdVHkiCJMHpOf1qy+czODVKNA+OKtsXJMH4ffxpDJS5ABOD9fjQsAff0ParWAPvFRbs5J4EcdzTuydHvaAAck0JRWgiR7q8rQYPz9KhlgHOSelPYF2n1T22LLnGRyCOzKea0Lfilsjc2myeqXGRT6RBispGPXIqXQGAMfrUuEZZGptYNO14jEvbREVCpa0WZvaLuA/iMMQTMRiCa6LxHV29TathCqIzHZvnyOR57Qb/oYDARg9q4m0pyMR3NWAAg/f0qf51lFc7wx3UaZ7b7Li7ZMAyChzg7uKueFTYV8g3NON25gIz8PlRaXVNG1lVlj8kkmR/EpztPXtkVXqbbiWQl15KRDdsqOuIBGDQpNYYOK2hVBuHMEH45/aqNSYUQZC9TzgQZHMR+lP+MeHeycru3eXEZGeRjk4pfSxuB29j1qpSpfpMY2/wZ8N1ey7ZuzwwttJ6fwk/wApb/8AFdXoNE2o1D+0Vkay63A6cMkvCAnIDAQRPX0rlvFbYl9qbA/nViRygLQoBgA5+ddr4b42x0xNq1bNy4kBm5LoMbuAwUMREjPoazeDRKxHxm0HcIl5BdEH2cEglvMFYAZwSe8fSy74dbt2kYh7Qch3TaJtb1SZEYAfORjNF4doDq2t6oqLfs7q78NINsj2iEDkkbBJgwSc8VPinie53t2XR2WQ1tl3B1KiVk8H8ykiRkyDQAm+pZEYFCt0H2dx1V0S4EJ9k4BwZUmT8OgA1fw4iLp7jkgooKqWyUZzF1Cf+h222/m9Kw9ZdGwIzuLcKyswkhDJUwQIUTx0Fbn+4CaYTs85AaJ2OpG23cnrKKgJ6Ecc0MDE14thNjKJU4k52/8ARiDnG2D2ArnLvgt2TtQuvRsiR6joeh9Qa2fEdQdgUidrDkQyxwpM5G0rntFT/wCk3H8yC5tPEfXr3mhouM2tHP6nTGcdfXjpTcgQJzED1gc0C3gxgZI5H7il1U+1HeTz/wBf6RWujAW1KiWmqdM0Hd8Ke8StT5hzMe/tWWh2yPvvQxrQySd3vI+Rq5nAOaGxdDL69ak+YY5/pRYqCFsGM45oLoYExVlq3CE9ZPwFSrB1MjI+5FPoVFQyAaDZj1+fWmFtb0xA29KGypC57/PAz+tPYtAlo/eiSJBGM/5kUJIJqtkgYoasENl1LeXvGYOcc+prQsAhtxOxBJXJJXM7QeQBMf5NZaoNp69xxz2pm3qcGUkc9P3591RJWUnQ7ef2xCJG5ZztOSYkGBI7g/SlATb/ADo3YYESO5GIPcU/4daCP7RDyCAI5M4yTggyOMTVevBuNt3BjmVGM89R3AOOM1KRTZRqvEQXRtnlH5VbglSYn3/1+Oh+EL6y1t8hPMk52wZ3gQdzROPcf4YrO8R0lxEUMMAkJJG84BDEAkCePhS3h+q9net3BxuAMdj2+BaPcKJRtBGTs+leN3zpraDzFbkuvsyFDsQu5mcnA27ePT1NYXhio7pqSdhtsyMoUbiFBlDn/wA1MxwvGMN+KX3a17FVDlW3ogIDEFSGVCcOp35Pee9LgiwrK1ol7jSxYyQSoGTPAOcR1mklgpvJ7xC8HdXVlJSJsjO9TO4EREkE9IkDpVWvCJbUIWCeZVRxlBIKo4gQBuK+5c0voEF8gkKl206kkyP4huBBI3BgrAA9j8Xtaqb3RNrsJJtkQWE8CcTj6jvQFmd4g7LbVHBkbcmCwK4KkjleAD2C9q6DwfRTZWbd0GW/9tjs/M2R7+T6k1ka+/vtIFIIAGxnyW3ABVZoE9ImfjW/4Joz7C37O41pSJ9mVPkJJLAZ43THpFAHzlNKwccY64k4Iph7nlz2M9eOlSt7cpKHMEcZBGeKV01uVftOD6kZ/atK9GX6UtdLggiOo+n9qznbIPwrUVAiknmPsCsq90ikUhlECA5mp0zQ0dOfdQNcgCpVxgigBxb6zHfFG1rbJ6/f9qTt2y0xxjPSnNc8KAOvzimmJoX09wgwOGMH3jgimLmfL1/arVtKFUjmJB65pfVKZDD4RTuhVZX7EgzHQ/2qrdn75p7VXABUDTAqpn1HY/Zo1oP0C20GZzEZE0xpIJ2nrx0xB3fT9aSucwPfWlpFG2U5I56g9R8/0FDrSBX2aF0m1a2ooO0kyQZk9WYR6cVNjwv26peRtsHzAAlwZ8y4/ign0ivaG6dyW7iLFwbA053D+FunmlOP+y+tbniRTSoFVHNsgtCtJLvtkFm49/aB0qGWjD19xHcaYHzMAquxEbgRC7hweR8fnzb2yN6GZX9siO/BE116eD274t6kOAisHcbTuZLbjdxw8grwOh6Z5zxV/wDnJ27QSYXrtY7kHyNPol7O2/DNj/cpp3kTbBkkkYAKlVHUndBnsTPUp+Lu9xnW28FGhgBI3gAsCCJjnIGRSP4M8QKLcUbiUIYbTJ2tiFHoCzev69B4DoYf/eIyezdPOgw28YQRELtYXJggyIzis1g02I6BSttXCbRcVXbAVj1UFuYktBP/AG9aq0gV33qDae2yPP5jtPY4kMCR6GMYpn8Qi7cV3XBtMWILFsoDIMem7EVqafTIgW6UO9rYG1iSQHhyCo/iHU446VQhHxVd+GCG2QVuDrsaZcDmRIPrGOlbul8LZURWYMyqqluNxUAbuesTWP4VaN50vopVkcJdVSANpABBB5ABDARM/EV0HsiMAT8f7VLY0fINKjKWPuxjpOat1Op29JOfd6n1r2s/J7zn1waWAm2vcDmttYRks7K9RlVP3ms12hoP3NaOpMLjoP3issmSfnUjReW6H4VW+BE158/feiQSQOkUDG9LdITOKbj2hAnA5I5/zSnT4irvDBBb3jFAF2puFRA/+o9w+/rRaW/uEnkYPY+tCjblkj4e6aq4BjHNAibq7uPX5HtUIxVPUSY7elVaW6QdvI5+fSrLgkxxR9jD0aKyknngjiKsRyD5TEdZ4qlbe0czMHtWv+BtOt7VBXGNrvHIlTgEHkZoulkVW8HXeCaO3ctWL5ChxJAYkAOrFWIAwfyiJ7A4ijRP91fv6W4pXyh0MCYTbuGJBMsrD3kYpn8U67/agG2iwCiBSPKFMkgDgdfnWhd06KtrUKpFxkC7txwrqrERwTChd0TFZtmlHP8Aielt+H6U23YuXZhhQjPuZCzgSSFUD4n31wniVjy71ggQZGMD9QQIrrf9QHLG2CTAG4SZI88MAexgH0rL8P8AB1uIxLER0iQRxFaR1+kPd+hD8OXQupUE4uLsPrOPlgGfT419GFtNLZQsT/y3wvI2q11wZAH8KQJjua+cnTCzfsFST5z6YVwI/X513ni3/Np105xN9Dv5I3FpgdD5jmazlhlx0e8C8KuafV6ldreyBQy07XcMGXZOD5WuBiODANK/iHxl0O+zsdJcsOS4WDAYiANoJ/xW5+KdUzAqpKE7xuWJE9cisv8A0/0aumpsXFW4iXFgMJEXFbcpHESk/wAxp9Wxd0b+ns27CtdUwrQzswnyiSMcjDDv9KytZ4Bqndns6hxbY71C21KgNnBxIkmtcaktq10pA2NYdyYE7ldVB90HitH8LWP/AOW2JONyj0CuwUfAAD4VI0f/2Q=='
            },
            {
                idc: 20,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Rodolfa',
                foto: 'https://confidencialcolombia.com/wp-content/uploads/2019/12/Marbelle-1024x683.jpg'
            },
            {
                idc: 21,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Harry',
                foto: 'https://i.chzbgr.com/full/5522305280/h6EA5F11A/cosplay-win-harry-potter-in-his-younger-days'
            },
            {
                idc: 22,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Severus',
                foto: 'https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/senalradionica/articulo-noticia/galeriaimagen/severus-snape_1.jpg?itok=snQK-ZDi'
            },
            {
                idc: 23,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'Marinela',
                foto: 'https://us.hola.com/images/0261-1053d967dd0e-1c71df7aec0c-1000/square-480/belinda.jpg'
            },
            {
                idc: 24,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'McGonagall ',
                foto: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/harry_potter_mujeres.jpg'
            },
            {
                idc: 25,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Cristina',
                foto: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Cristinakirchnermensaje2010.jpg'
            },
            {
                idc: 26,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Maia',
                foto: 'https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/imagen_720x720/public/senalradio/articulo-noticia/galeriaimagen/colp_ext_046897.jpg?itok=xPwtsYkE&timestamp=1608315643'
            },
            {
                idc: 27,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Raya',
                foto: 'https://spoiler.bolavip.com/__export/1614705680316/sites/bolavip/img/2021/03/02/raya_up_close_0_crop1614702536236.jpeg_1814870244.jpeg'
            },
            {
                idc: 28,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'María Paulina',
                foto: 'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/164299.jpg'
            },
            {
                idc: 29,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Doña María',
                foto: 'https://ep01.epimg.net/elpais/imagenes/2019/09/06/icon/1567763443_595274_1567772784_sumario_normal.jpg'
            },
            {
                idc: 30,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Walid',
                foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bad_Bunny_2019_by_Glenn_Francis.jpg/1200px-Bad_Bunny_2019_by_Glenn_Francis.jpg'
            },
            {
                idc: 12,
                rol: 'apartamento',
                oficio: 'Apto',
                nombre: '1-1-1',
                foto: '',
            },
            {
                idc: 13,
                rol: 'apartamento',
                oficio: 'Apto',
                nombre: '1-1-2',
                foto: '',
            },
            {
                idc: 14,
                rol: 'apartamento',
                oficio: 'Apto',
                nombre: '1-2-1',
                foto: '',
            },
            {
                idc: 15,
                rol: 'apartamento',
                oficio: 'Apto',
                nombre: '1-2-2',
                foto: '',
            }
        ];
        this.chatsList2 = [
            {
                idc: 12,
                rol: 'apartamento',
                oficio: 'Apto',
                nombre: '1-1-1',
                foto: '',
            },
            {
                idc: 13,
                rol: 'apartamento',
                oficio: 'Apto',
                nombre: '1-1-2',
                foto: '',
            },
            {
                idc: 14,
                rol: 'apartamento',
                oficio: 'Apto',
                nombre: '1-2-1',
                foto: '',
            },
            {
                idc: 15,
                rol: 'apartamento',
                oficio: 'Apto',
                nombre: '1-2-2',
                foto: '',
            },
            {
                idc: 13,
                rol: 'administrador',
                oficio: 'Admin',
                nombre: 'Jorge',
                foto: ''
            }
        ];
        this.chatsList = [
            {
                idc: 12,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'María',
                foto: 'https://cepcervantes.com/wp-content/uploads/2019/03/CEP-Cervantes-Mujer-Vigilante-Seguridad.jpg',
            },
            {
                idc: 13,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'Juanito',
                foto: 'https://i.ytimg.com/vi/VYnFoDk3MzE/maxresdefault.jpg'
            },
            {
                idc: 14,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Federica',
                foto: 'https://m.media-amazon.com/images/M/MV5BMjA5NTg1MjAyMV5BMl5BanBnXkFtZTgwNDQ0MzY1ODE@._V1_.jpg'
            },
            {
                idc: 15,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Roberto',
                foto: 'https://elclosetlgbt.com/wp-content/uploads/2019/03/hugh-jackman-gay-lgbt-homosexual.jpg'
            },
            {
                idc: 16,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'Marley',
                foto: 'https://www.soyaire.com/__export/1615335739795/sites/debate/img/2021/03/09/jennifer-aniston_1_crop1615335315391.jpg_346753400.jpg'
            },
            {
                idc: 17,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'Raul',
                foto: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2019/10/hipertextual-caidos-cielo-actores-actrices-menos-problematicos-hollywood-2019277810.jpg?fit=1200%2C686&ssl=1'
            },
            {
                idc: 18,
                rol: 'administrador',
                oficio: 'Administrador',
                nombre: 'Jaimito',
                foto: 'https://www.latercera.com/resizer/j7i4nLxOo0qzXj9xiExhE-aVeEo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/BT5KMODEZ5FAPNDOJPE5UBQQHE.png'
            },
            {
                idc: 19,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Antonio',
                foto: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgaHBoYHBgaGhoYGBwcGBwZHBoZGhwcIS4lHB4rIRwYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJSQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQ0AuwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACBAEDBQYAB//EADsQAAIBAwMCAwYEBQQBBQEAAAECEQADIQQSMUFRBSJhE3GBkaHwBjKxwUKC0eHxBxQjUmIVM0NykiT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQACAgICAgMBAQEAAAAAAAAAAQIRITESQQNRImFxE4Ey/9oADAMBAAIRAxEAPwD52SBQqk5NGidTUO/akd7+yHboKhEqUSrQKBJXlkAUDtUu9eRKB7wiESrYooobjxS2UkkQxikdRfnAr1+/PFRYszk1ajWWYyk5OkDYsk5NPKsVCjtRog7Um7Emo6PKKC48UyLY6iiSyDSBzZjGXNN2bQArQfSjtQNpj0puRMeKeRZjQBZpk6V4kqYqp2gUja0wWhRVMFjRAFqtC09E7BVKMCKkCgdqRWiHeqNpq4JRRTuhVZ53ryJXkSrQKRVXs8BVbvXnecCiRKB70Rbt1eBXqpu3QKWWPEUTccCs+9eJ4qLt0sassWOpq0uOzCUnJ0iLFnqabRKhaa06dalsnWECqRUhKNhRotS2Uokonypi3aFAlMW6nkPiSUolt8VaoFWoo6U+RLiLXPpWbqvDp8ye+P6f0rca3NLFNp9DTUiacdGABFTTfiNna0jr+tKAU7Nou1YLVAWrCKrJplUQTUTXnaKok00rJbodGKrZ5qCZq5LdTorYNu3V0xUExSuo1EUJNlNqKCv3orPdyxrxJY01Ysxk1okonO25v6BsWOppg1BNGlRdlS+KpHraSa0GWBHaq9JbzVmoNJkIqtijQRQos1YqVmzQuTNXoKrsrTKJSGGi0wKBEq8JQAFBctSIp23pz2Iqx9PimkyJNGBq7W+2Z5WsY4rrnsTuEcg/SuS1KQxFWsh45U2ilmmoYxUtiqomqRowAs1b7OiiKHcaZOhhEipZoqHcCs+/qO1Sk2XKSiiy/qKVUFjUohY06iBRWmImOZO3oG1aAozmvTNV3LoFTsu0kXIKuVaX0pkTTSt3+lJmbdjmkGKq1JqbbwPpVFxqkEXWauBqqyMVeiieahmhbZp+yfSlLKVoaYUhh209KatIOP3oHEKO8/rVmntknmPhTQjUsqIqL9gRx8KK0pjn6VbOK26MHszFQAMewNcN4kIdvvkV3zjD/Efp/euH8aT/AJCI+/uaRXjfyMuJo4ii4oOaDoBiaPZRhamlYUZt68TUWrJNHZsd6ZJjitG6wjFRbzI8oC1E0JNUXLvQUkipSSCu3u1Bbtljmis2CcmnLaZA9wobrRKi5ZZfbswAB2k/GvOma0EtyCx4J+gpM5bAgVnZUlgmIFV7ZNWnNFbSDNJsEsEoe+Kn2c/lOa8yTED791MLpSQIP1ihCZFq464IrQ02oBIg460rdtsIn+sek9ap0+THqaTQ4s6A3dwQ92+kGmrLr1jvVS6aLYnpkEViahmPBP7f3pIbaOuW6v8A2HzFQbnUEMK5TSlsCZBMRnMRwepzxXQaeztCsplWGP8AFWmZNWWOfL64/Q/1rjPG7h9oR2x9K61xJrlPxAB7TmcfDk00EP8AoyeaMLUgV5jTOlI8TQb6F3oJpJCbPM/QVU7RVb3IqnLGtEjFyJdyaYsWOporNiMmrp7UnL0OMe2e9BVtsQQfWhVa8zRUmpsMRsQdNtJPz8asR96r2/TvVV9InMgxUkMmcim7ApGn9OalgiTbzPSmbRj+Ij0r24V7YDkDFSDQN6/QaFZeap1T5gcCn/BrO5x2pgkdO9o+yU7ZGR7yIxWAUBJkGDzkxX05NAr6YKBkAlff3+NcTrdGUJZRjr6VTRmnbKfDtBabDMYPUQSOuMc1rr4fslRJEkgmevJjgE1Hg6qTkR7q6Z9MAhc9ue+OaexSw6RwlxdqsxOFkn4VxWtuh3LAk11/4huRZu9JYAfzMP71xJprRrCNZIJqp2rzNUKtMsgLNHtowIod9A6ozUtlqdt2wKlVAr3NU3ZmopE80arFeGKquXYqdj1sN3ilXuE8UMljTNqzFVhCzIu0DlJng/SmL7g9fdSrvS9ppcntipq8ik6waSfMxTa8Upa4phTCms2CLbLSa0CQBSWmWMmnS2J+VSUZV0yxP0rofwwoLru/LuE+6c1z2qsnduHyrZ8JuMoWFOfSqA+xam8Ess6wQiFh6hQT+xrkg6uxKHytkDtPQ01qPGna2LSgQUKu3UlhBA9AOtc54U7I+w/wnH7VV0ZxhhnSJ4WyecDHb16GntXqZtx6f5NaWoebY9QPnWB43fWzp3c9FMdPN0HvJgVLeaQllWz55+LNcpYWlyQdzx3iFX6k/EVy7mjvXSzFmMkkkn1OTQqtaaNksUCqVYcV5jFL3LlGytE3LlL+0qMmrfYVWEQ23osVaImKB3ilnuE8UkrE5JFty9VaIW5o7NjqaYwKd1oSi3lnktgV53oGegdoHrSSG5JIrvXSMAZoNK0NnrQEdTUD5HoelaqOKOOU23Zv2xAFMoMikNDd3LnmtFMRXPNUzeErVjN1AAPr/Sp3DrVrpIz+9VLYU8gfKoNSwbSelaejSGUdh/es+zoUI4j4kVraLwpnYKrlQfUYp16YUbGnG446xQ3dONwf3jHcfrRf+lai2pYOrDOCBnpz05B+NHon3qEIyOeuYx+1J2hJ+jrLbbraj0X7/SuK/wBTr5XT20H8Ty3uUGM+8j5V2ulTy/AD9a+U/wCofiJuakpjZbwDESeGMzkSCOkEEURy7ElmjkgteZ4oXeqHetUrNLol7lUgE0SITTKJFU3QkrIt24o94oHaa97Oo/S/wTALUzbsgUSqBQs9XdmaSjsJnoJmoiiApaFbZ5Vpe68mOnFW33gR1NLAxxVxXZh5p9ILbipRZEUTDHOaBBmtDBDGkubG5MHH9DXR6bI9e/30rlnUintH4gVABrOUbyXGVYOsSCsUCp8qT0OqDDBmY+/p9KfRyQRP6VjKJvGRbpkMwM9O3NdH4LpYafv1x8awNM0Rn1niup8HBHJOR8c4B+Y+lZtGt4NY3hsK98Dp78UGg8O2ncRg8ek5g/fetTTeHwdx7Ed/j76d1OxVLMYUZJ93Wqq0ZOaRieN+IjTaZ7jEbgp2g9WJAA+ZFfDNXqmdi7mWOScnnPUmuh/Gf4o/3bwmLaHy5mSJG7jGCccYBxmeRd60jGkXFpqzzvUIk0du1PNMDFU3Wi1G9kKsUJJNEATVgUCos1oFEivbxVd27S2+hJslySDJmpAqoMTx9/OgMnv2iteLOJ+aIwzgVS90n0oWt9hUqvUcVSikRLzN/RDioIzVpX7/AL0GeJqjKywkVWeZiominEUBZfvDCD8KVI2kg96b06jrmvX7QNAFdnUMhkVsaXxgfxDHYc8nH6fWsL2eYPwNQfKf3qZRTKjJo7Xw3WC4xUTMDHP1r6V+HtI2GKRxz6D7+lfJfwr4jDbIXc2UZhIDDgNGdp4+M1s6r8W6vb7IsLbL5WK4aQZx0Hw6H1rL+bbpGj8tLJ9c1fiNuyIZxuOYkfP0r5t+PfxaHt+ytuDvPn2mVCrnbPWTH1rh9VeDEs7M7EkksSckyeeM1mFt7AfGtP5qKtmfNydIatWCfMBn3gD5UbaE7PaBTsJCzIMNEwYOJEmpsIcKnJ6jp8/8Uw10Ij2lM7mUuRlfJMBe/MzUOTo38S+WP9E5qUSiVK87xWZ2niwFLXb1Ddu1Rk1cY+zOUukeZpqfYmr7Vmr9tDl6EoXliRI5GPqKJTPun7mKMp+ueKhVI93f/FbnmEqADjjtz8vT0ojB93yoIHeKIbog1QEBYkTj61BUe70qPaSYmD9/OrNx/i6H76UqAqgxBqFiSPp2q3nMj9qJIME8+tFBZQq/YogI7n30boeQZ9KsZPn76KsLopXOCPrUFD2++lXbIHf0qxIPPX50UPkIiQZg1tajUl7CuTL2zteeSjEBGHcKx2/zrSqWR+XcIzn0pxLa24h8Hysp8wKNggrMkfvGazcsl8cGLqL8wBWt4N4ZvDMSQqiSQJI4zHUCTPaktRplS6yqfLI2E/8AVhuWfWCtdn4XpfbacpZlHR0S4CRBD4crknaVIYnggYzRKVijGjlDdMQuAYnuY9e05ihAimdZpGtmDjkR1HNIXHMTB+81i02z0YSgo4De5Sly5Qs81Zbs96tJIG3LRUiE03btgUarFTUuVlRikTUxUExVXtKVFN0e2CD0qJgCa8wKnbI4oTcE5PpntXWeOG9rcMfPtVt9dsde/eqkSJ/SjW5mOKNAG+kVoM+tV6lSCDGPTt6UakgQPrXt3Rh9+lDEgUsqYcTHXHfiapcwcjHf9v0pl4jGCMDiPlVemksQ0Y4MYHEdffSvoddkqsT26d59KHeJg/Cf1p2zpXcEgrtESzflz1EGflVh0iH/AOQSD2MT+tJzSwCg9iSCAZPXFSyqeBn7+VXanQuo3LDqOoP3FVf7YsgcD0IP5sdfUetNST0Di0X6NAT5jn+kZ/T50zdRIncMgwccHt74Py9KynDdZieOg+H3zUo2RA3YgVPG2VypFmvRWQMk+TavQyDJDCOgaVn/AMlruv8ATjbcdWnz21ZBHLKx3bG7r+aAeu70rg9OSrMrCJBEejfuDB+ArS/B+ta1eIBhjIWc+flJ/nAHxqJLFFRfZsfi3RBWZNhV7ZK44dZkNnqVYfLpWWvhxe2ziDtgmQB5W9YgiZHp8q7Xxu62vt2Ws2h7S+F3h8bQkqxDducxEZ9KQ0GlRNKWUQXba9t3/K6M9tup2ztT5H0oukPs4XU6DYe4M/COZ7VXMV1Gotq9oja29SUE/nhDG1wcFgCBImQFrHGiLIHgRJXeBAMdSOQR1FS1Z0Q83HDM8V5nii1KFCVP9iDwRS4zUUdXJdEMxNH7OrFSjmiwS9lc7pMcZ9YNVvb3D9+003bAXrillgE8xyPX0rqo8hMPUqQAV+/jUWRKgkHnHTgx8KM3ARt/xRGNsARTQmUXA3I+XNeV+sZiM4olYgxyD8x76l4bB/pRfYAkdevajdiIGBMfXrUW7LCZ4AkHrQsA3HPak9DWzfN7i1uCooDH1PQmlL9sEHtPPB7+7nvVGoRnQXF5AhgOkd/6U/4IyOYdtoXJB7g8T8ua5pfHKOiOcMR0qOjSjSvUH9qPxXRlGUxtVwSFOIaWV1j3g47Gug07I5B3ALHkD7QOCDudRKOSJBnAj30H4stf8dlT5XHtDsdQH2PtKPuXyuhhhODIb4PxybkTOKUTlrZiQZIMROSOZzz2qWyZDT2xDY/Wrb20KAEbcBlpnd/fntVJTeoj59cYkev9K6K9GF+yi4xwTyOvf0q4dLimGWCYx5ZADehUwP8AFFfjcTEA+tTZOxwSoK87TwVOHX3EE/OlJdjizrfFfHb123pdiqW2NBXy3JEKyowgqQRMDBmOKDV3Xt27YvNuZ0DMtwFWBZQSH3cNmD/5A4HFK/hzTK1w2GafZ3Ld622ZIVlJH86FR726xT/it72l1kQqXEna6yH/APCe2IwcSJ7HM0KQ4FsqwBbA8w8ygcIzAnfCn83UMDml7bkI+3aBO9kJhwQRGf4ogQ2cY6Ux4leX2KIhZECqUNzLKM+WYGBO3+Ue+kdPowbDOSQZZl2kMjzEMkZUHIKnqJHNACWpvrd3eRpWMxI45xjpP3jO2QJroPCtM0s6AEABdy4ZG/PtcTkMJjGCsRNOeD+GpcZ0ZtvkZ9rjyxI86HsDAI9R2pSSaNPH5HFnIs1einfEfD2tmY8p+mSP1B+lJzWdHdGSkrRcLZKg0F6wVXcYyePQ0w99Ugcenz/pUakEgcwQfrFdVHkiCJMHpOf1qy+czODVKNA+OKtsXJMH4ffxpDJS5ABOD9fjQsAff0ParWAPvFRbs5J4EcdzTuydHvaAAck0JRWgiR7q8rQYPz9KhlgHOSelPYF2n1T22LLnGRyCOzKea0Lfilsjc2myeqXGRT6RBispGPXIqXQGAMfrUuEZZGptYNO14jEvbREVCpa0WZvaLuA/iMMQTMRiCa6LxHV29TathCqIzHZvnyOR57Qb/oYDARg9q4m0pyMR3NWAAg/f0qf51lFc7wx3UaZ7b7Li7ZMAyChzg7uKueFTYV8g3NON25gIz8PlRaXVNG1lVlj8kkmR/EpztPXtkVXqbbiWQl15KRDdsqOuIBGDQpNYYOK2hVBuHMEH45/aqNSYUQZC9TzgQZHMR+lP+MeHeycru3eXEZGeRjk4pfSxuB29j1qpSpfpMY2/wZ8N1ey7ZuzwwttJ6fwk/wApb/8AFdXoNE2o1D+0Vkay63A6cMkvCAnIDAQRPX0rlvFbYl9qbA/nViRygLQoBgA5+ddr4b42x0xNq1bNy4kBm5LoMbuAwUMREjPoazeDRKxHxm0HcIl5BdEH2cEglvMFYAZwSe8fSy74dbt2kYh7Qch3TaJtb1SZEYAfORjNF4doDq2t6oqLfs7q78NINsj2iEDkkbBJgwSc8VPinie53t2XR2WQ1tl3B1KiVk8H8ykiRkyDQAm+pZEYFCt0H2dx1V0S4EJ9k4BwZUmT8OgA1fw4iLp7jkgooKqWyUZzF1Cf+h222/m9Kw9ZdGwIzuLcKyswkhDJUwQIUTx0Fbn+4CaYTs85AaJ2OpG23cnrKKgJ6Ecc0MDE14thNjKJU4k52/8ARiDnG2D2ArnLvgt2TtQuvRsiR6joeh9Qa2fEdQdgUidrDkQyxwpM5G0rntFT/wCk3H8yC5tPEfXr3mhouM2tHP6nTGcdfXjpTcgQJzED1gc0C3gxgZI5H7il1U+1HeTz/wBf6RWujAW1KiWmqdM0Hd8Ke8StT5hzMe/tWWh2yPvvQxrQySd3vI+Rq5nAOaGxdDL69ak+YY5/pRYqCFsGM45oLoYExVlq3CE9ZPwFSrB1MjI+5FPoVFQyAaDZj1+fWmFtb0xA29KGypC57/PAz+tPYtAlo/eiSJBGM/5kUJIJqtkgYoasENl1LeXvGYOcc+prQsAhtxOxBJXJJXM7QeQBMf5NZaoNp69xxz2pm3qcGUkc9P3591RJWUnQ7ef2xCJG5ZztOSYkGBI7g/SlATb/ADo3YYESO5GIPcU/4daCP7RDyCAI5M4yTggyOMTVevBuNt3BjmVGM89R3AOOM1KRTZRqvEQXRtnlH5VbglSYn3/1+Oh+EL6y1t8hPMk52wZ3gQdzROPcf4YrO8R0lxEUMMAkJJG84BDEAkCePhS3h+q9net3BxuAMdj2+BaPcKJRtBGTs+leN3zpraDzFbkuvsyFDsQu5mcnA27ePT1NYXhio7pqSdhtsyMoUbiFBlDn/wA1MxwvGMN+KX3a17FVDlW3ogIDEFSGVCcOp35Pee9LgiwrK1ol7jSxYyQSoGTPAOcR1mklgpvJ7xC8HdXVlJSJsjO9TO4EREkE9IkDpVWvCJbUIWCeZVRxlBIKo4gQBuK+5c0voEF8gkKl206kkyP4huBBI3BgrAA9j8Xtaqb3RNrsJJtkQWE8CcTj6jvQFmd4g7LbVHBkbcmCwK4KkjleAD2C9q6DwfRTZWbd0GW/9tjs/M2R7+T6k1ka+/vtIFIIAGxnyW3ABVZoE9ImfjW/4Joz7C37O41pSJ9mVPkJJLAZ43THpFAHzlNKwccY64k4Iph7nlz2M9eOlSt7cpKHMEcZBGeKV01uVftOD6kZ/atK9GX6UtdLggiOo+n9qznbIPwrUVAiknmPsCsq90ikUhlECA5mp0zQ0dOfdQNcgCpVxgigBxb6zHfFG1rbJ6/f9qTt2y0xxjPSnNc8KAOvzimmJoX09wgwOGMH3jgimLmfL1/arVtKFUjmJB65pfVKZDD4RTuhVZX7EgzHQ/2qrdn75p7VXABUDTAqpn1HY/Zo1oP0C20GZzEZE0xpIJ2nrx0xB3fT9aSucwPfWlpFG2U5I56g9R8/0FDrSBX2aF0m1a2ooO0kyQZk9WYR6cVNjwv26peRtsHzAAlwZ8y4/ign0ivaG6dyW7iLFwbA053D+FunmlOP+y+tbniRTSoFVHNsgtCtJLvtkFm49/aB0qGWjD19xHcaYHzMAquxEbgRC7hweR8fnzb2yN6GZX9siO/BE116eD274t6kOAisHcbTuZLbjdxw8grwOh6Z5zxV/wDnJ27QSYXrtY7kHyNPol7O2/DNj/cpp3kTbBkkkYAKlVHUndBnsTPUp+Lu9xnW28FGhgBI3gAsCCJjnIGRSP4M8QKLcUbiUIYbTJ2tiFHoCzev69B4DoYf/eIyezdPOgw28YQRELtYXJggyIzis1g02I6BSttXCbRcVXbAVj1UFuYktBP/AG9aq0gV33qDae2yPP5jtPY4kMCR6GMYpn8Qi7cV3XBtMWILFsoDIMem7EVqafTIgW6UO9rYG1iSQHhyCo/iHU446VQhHxVd+GCG2QVuDrsaZcDmRIPrGOlbul8LZURWYMyqqluNxUAbuesTWP4VaN50vopVkcJdVSANpABBB5ABDARM/EV0HsiMAT8f7VLY0fINKjKWPuxjpOat1Op29JOfd6n1r2s/J7zn1waWAm2vcDmttYRks7K9RlVP3ms12hoP3NaOpMLjoP3issmSfnUjReW6H4VW+BE158/feiQSQOkUDG9LdITOKbj2hAnA5I5/zSnT4irvDBBb3jFAF2puFRA/+o9w+/rRaW/uEnkYPY+tCjblkj4e6aq4BjHNAibq7uPX5HtUIxVPUSY7elVaW6QdvI5+fSrLgkxxR9jD0aKyknngjiKsRyD5TEdZ4qlbe0czMHtWv+BtOt7VBXGNrvHIlTgEHkZoulkVW8HXeCaO3ctWL5ChxJAYkAOrFWIAwfyiJ7A4ijRP91fv6W4pXyh0MCYTbuGJBMsrD3kYpn8U67/agG2iwCiBSPKFMkgDgdfnWhd06KtrUKpFxkC7txwrqrERwTChd0TFZtmlHP8Aielt+H6U23YuXZhhQjPuZCzgSSFUD4n31wniVjy71ggQZGMD9QQIrrf9QHLG2CTAG4SZI88MAexgH0rL8P8AB1uIxLER0iQRxFaR1+kPd+hD8OXQupUE4uLsPrOPlgGfT419GFtNLZQsT/y3wvI2q11wZAH8KQJjua+cnTCzfsFST5z6YVwI/X513ni3/Np105xN9Dv5I3FpgdD5jmazlhlx0e8C8KuafV6ldreyBQy07XcMGXZOD5WuBiODANK/iHxl0O+zsdJcsOS4WDAYiANoJ/xW5+KdUzAqpKE7xuWJE9cisv8A0/0aumpsXFW4iXFgMJEXFbcpHESk/wAxp9Wxd0b+ns27CtdUwrQzswnyiSMcjDDv9KytZ4Bqndns6hxbY71C21KgNnBxIkmtcaktq10pA2NYdyYE7ldVB90HitH8LWP/AOW2JONyj0CuwUfAAD4VI0f/2Q=='
            },
            {
                idc: 20,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Rodolfa',
                foto: 'https://confidencialcolombia.com/wp-content/uploads/2019/12/Marbelle-1024x683.jpg'
            },
            {
                idc: 21,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Harry',
                foto: 'https://i.chzbgr.com/full/5522305280/h6EA5F11A/cosplay-win-harry-potter-in-his-younger-days'
            },
            {
                idc: 22,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Severus',
                foto: 'https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x424/public/senalradionica/articulo-noticia/galeriaimagen/severus-snape_1.jpg?itok=snQK-ZDi'
            },
            {
                idc: 23,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'Marinela',
                foto: 'https://us.hola.com/images/0261-1053d967dd0e-1c71df7aec0c-1000/square-480/belinda.jpg'
            },
            {
                idc: 24,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'McGonagall ',
                foto: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/harry_potter_mujeres.jpg'
            },
            {
                idc: 25,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Cristina',
                foto: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Cristinakirchnermensaje2010.jpg'
            },
            {
                idc: 26,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Maia',
                foto: 'https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/styles/imagen_720x720/public/senalradio/articulo-noticia/galeriaimagen/colp_ext_046897.jpg?itok=xPwtsYkE&timestamp=1608315643'
            },
            {
                idc: 27,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Raya',
                foto: 'https://spoiler.bolavip.com/__export/1614705680316/sites/bolavip/img/2021/03/02/raya_up_close_0_crop1614702536236.jpeg_1814870244.jpeg'
            },
            {
                idc: 28,
                rol: 'empleado',
                oficio: 'Celador',
                nombre: 'María Paulina',
                foto: 'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/164299.jpg'
            },
            {
                idc: 29,
                rol: 'empleado',
                oficio: 'Todero',
                nombre: 'Doña María',
                foto: 'https://ep01.epimg.net/elpais/imagenes/2019/09/06/icon/1567763443_595274_1567772784_sumario_normal.jpg'
            },
            {
                idc: 30,
                rol: 'empleado',
                oficio: 'Aseador',
                nombre: 'Walid',
                foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bad_Bunny_2019_by_Glenn_Francis.jpg/1200px-Bad_Bunny_2019_by_Glenn_Francis.jpg'
            },
            {
                idc: 13,
                rol: 'administrador',
                oficio: 'Admin',
                nombre: 'Jorge',
                foto: ''
            }
        ];
    }
    obtener(url) {
        console.log("MUeree obtener");
        this.getChatss(url)
            .subscribe(respuesta => {
            console.log("subscirbe ", respuesta);
            this.chat = respuesta;
        });
    }
    getlstMsjsEmpAdmin(id) {
        console.log("Holaaaa mundo");
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/mensajes/residente/" + id.toString());
        console.log("Muereee despues de obtener");
    } // end getConjuntos
    getlstMsjAptoAdmin(id) {
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/mensajes/empleado/" + id.toString());
    }
    getlstMsjAptoEmp(id) {
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/mensajes/admin/" + id.toString());
    }
    getChat() {
        return this.chat;
    } //BARRETO
    getChatss(url) {
        return this.http.get(url);
    }
    setChatActivo(nombre, rol, id) {
        window.localStorage['chatnombre'] = nombre;
        window.localStorage['chatrol'] = rol;
        window.localStorage['chatid'] = id;
    }
    getChat1() {
        return this.chatsList;
    }
    getChat2() {
        return this.chatsList2;
    }
    getChat3() {
        return this.chatsList3;
    }
    getChatN() {
        this.nombre = (window.localStorage['chatnombre'] || (-1).toString);
        if (this.nombre == '-1')
            return null;
        else
            return (this.nombre);
    }
    getRol() {
        this.rol = (window.localStorage['chatrol'] || (-1).toString);
        if (this.rol == '-1')
            return null;
        else
            return (this.rol);
    }
    getChatId() {
        this.id = Number(window.localStorage['chatid'] || -1);
        if (this.id == -1)
            return null;
        else
            return (this.id);
    }
};
LstChatServicioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LstChatServicioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LstChatServicioService);



/***/ }),

/***/ "anrV":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/claves-component/claves-component.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .widget-container {\n  margin-right: 70px;\n  margin-left: 20px;\n  margin-bottom: 5px;\n}\n\n::ng-deep .rol {\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n::ng-deep .rolo {\n  margin-left: 26px;\n  margin-top: 20px;\n}\n\n::ng-deep .nombre {\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n::ng-deep .nombree {\n  margin-left: 26px;\n  margin-top: 20px;\n}\n\n::ng-deep .form {\n  margin-left: 50px;\n  margin-top: 20px;\n  margin-bottom: 100px;\n}\n\n::ng-deep .form-demo {\n  margin-right: 70px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsYXZlcy1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoiY2xhdmVzLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAud2lkZ2V0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBcbn1cblxuOjpuZy1kZWVwIC5yb2x7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbjo6bmctZGVlcCAucm9sb3tcbiAgICBtYXJnaW4tbGVmdDogMjZweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLm5vbWJyZXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLm5vbWJyZWV7XG4gICAgbWFyZ2luLWxlZnQ6IDI2cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbjo6bmctZGVlcCAuZm9ybXtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG46Om5nLWRlZXAgLmZvcm0tZGVtb3tcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "apFF":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/residente/lista-asambleas-residentes/lista-asambleas-residentes.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ListaAsambleasResidentesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAsambleasResidentesComponent", function() { return ListaAsambleasResidentesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_asambleas_residentes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista-asambleas-residentes.component.html */ "Ggqx");
/* harmony import */ var _lista_asambleas_residentes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-asambleas-residentes.component.scss */ "bkXC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/asambleas/asamblea.service */ "jORC");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");







let ListaAsambleasResidentesComponent = class ListaAsambleasResidentesComponent {
    constructor(asambleaService, navCtrl, conjuntosService, alertController) {
        this.asambleaService = asambleaService;
        this.navCtrl = navCtrl;
        this.conjuntosService = conjuntosService;
        this.alertController = alertController;
        this.asambleas = [];
    }
    ngOnInit() {
    } // end ngOnInit
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 600));
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.idConjunto = this.conjuntosService.getConjuntoActivo();
            this.asambleaService.cargarAsambleas(this.idConjunto);
            yield this.waitBD();
            this.asambleas = this.asambleaService.getAsambleas();
            console.log("Asambleas: ", this.asambleas);
        });
    } // end ionViewWillEnter
    goRoute(asamblea) {
        if (asamblea.estado != 'P') {
            console.log("Asamblea = ", asamblea.asambleaPK.idAsamblea, " Estado = ", asamblea.estado);
            this.asambleaService.setAsambleaAbierta(asamblea.asambleaPK.idAsamblea);
            this.asambleaService.setAsambleaEstado(asamblea.estado);
            this.navCtrl.navigateForward("/asamblea-residente");
        }
        else {
            this.presentAlertConfirmAsamblea();
        }
    }
    presentAlertConfirmAsamblea() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Información',
                message: 'No es posible acceder a asambleas programadas',
                buttons: [
                    {
                        text: 'Aceptar',
                        cssClass: 'aceptar',
                        handler: () => {
                        }
                    }
                ]
            });
            yield alert.present();
        });
    } // end presentAlertConfirm
    getAsambleaFecha(asamblea) {
        return this.conjuntosService.convertDate(asamblea.fecha);
    } // end getAsambleaFecha
    getAsambleaHora(asamblea) {
        return this.conjuntosService.convertHour(asamblea.hora);
    } // end getAsambleaFecha
    getAsambleaEstado(asamblea) {
        if (asamblea.estado == 'F')
            return "Finalizada";
        else if (asamblea.estado == 'P')
            return "Programada";
        else if (asamblea.estado == 'A')
            return "Activa";
    } // end getAsambleaEstado
};
ListaAsambleasResidentesComponent.ctorParameters = () => [
    { type: src_app_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__["AsambleaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_6__["ConjuntosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ListaAsambleasResidentesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lista-asambleas-residentes',
        template: _raw_loader_lista_asambleas_residentes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_asambleas_residentes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListaAsambleasResidentesComponent);



/***/ }),

/***/ "b2u3":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/residente/resultados-residente/resultados-residente.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResultadosResidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosResidenteComponent", function() { return ResultadosResidenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_resultados_residente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./resultados-residente.component.html */ "OJYG");
/* harmony import */ var _resultados_residente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resultados-residente.component.scss */ "kvEE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/asambleas/asamblea.service */ "jORC");
/* harmony import */ var src_app_Services_Ganador_ganador_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/Ganador/ganador.service */ "u7Ej");
/* harmony import */ var src_app_Services_opciones_opciones_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/opciones/opciones.service */ "ujE3");
/* harmony import */ var src_app_Services_propuestas_propuestas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/propuestas/propuestas.service */ "w8Zv");









let ResultadosResidenteComponent = class ResultadosResidenteComponent {
    constructor(navCtrl, propuestasService, asambleaService, ganadorService, opcionesService) {
        this.navCtrl = navCtrl;
        this.propuestasService = propuestasService;
        this.asambleaService = asambleaService;
        this.ganadorService = ganadorService;
        this.opcionesService = opcionesService;
    }
    ngOnInit() {
        this.propuesta = this.propuestasService.getPropuestaAbierta();
    }
    getAsamblea() {
        return /*this.asambleaService.getAsamblea(this.propuesta.idAsamblea).Tema*/ "Abejas";
    }
    getPropuesta() {
        return /*this.propuesta.descripcion*/ "?JWDJEW?";
    }
    getTotalVotaciones() {
        return /*this.propuesta.votosTotales*/ 0;
    }
    getGanador() {
        return /*this.opcionesService.getOpciones(this.propuesta.id)[this.ganadorService.getGanador(this.propuesta.id).idOpcion-1].nombre*/ "SI";
    }
    backAs() {
        this.navCtrl.navigateForward("/asamblea-residente");
    }
};
ResultadosResidenteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_Services_propuestas_propuestas_service__WEBPACK_IMPORTED_MODULE_8__["PropuestasService"] },
    { type: src_app_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_5__["AsambleaService"] },
    { type: src_app_Services_Ganador_ganador_service__WEBPACK_IMPORTED_MODULE_6__["GanadorService"] },
    { type: src_app_Services_opciones_opciones_service__WEBPACK_IMPORTED_MODULE_7__["OpcionesService"] }
];
ResultadosResidenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-resultados-residente',
        template: _raw_loader_resultados_residente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_resultados_residente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResultadosResidenteComponent);



/***/ }),

/***/ "bLIy":
/*!*********************************************************!*\
  !*** ./src/app/Services/conjuntos/conjuntos.service.ts ***!
  \*********************************************************/
/*! exports provided: ConjuntosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConjuntosService", function() { return ConjuntosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let ConjuntosService = class ConjuntosService {
    constructor(http) {
        this.http = http;
    }
    getConjuntos() {
        return this.conjuntoxPersona;
    } // end getConjuntos
    setConjuntoActivo(id) {
        window.localStorage['conjuntoActivo'] = id.toString();
    } // setConjuntoActivo
    getConjuntoActivo() {
        return Number(window.localStorage['conjuntoActivo'] || -1);
    } // getConjuntoActivo
    getConjuntoUrl(url) {
        return this.http.get(url);
    } // end getConjuntoUrl
    putConjuntoUrl(url) {
        return this.http.put(url, this.conjuntoPago);
    }
    getPagoAdmin(numConjunto, numApto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getConjuntoUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/Conjuntos/cuotaAdmin/" + numConjunto.toString() + "/" + numApto.toString())
                .subscribe(respuesta => {
                this.conjuntoPago = respuesta;
            });
        });
    }
    getConjuntosPersona(idPersona) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getConjuntoUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/Conjuntos/netflix/" + idPersona)
                .subscribe(respuesta => {
                this.conjuntoxPersona = respuesta;
            });
        });
    }
    pagarAdmin(numConjunto, numApto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.putConjuntoUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/Conjuntos/pagarAdmin/" + numConjunto.toString() + "/" + numApto.toString())
                .subscribe(respuesta => {
                this.varRes = respuesta;
                console.log("Respuesta = ", this.varRes);
            });
        });
    }
    cargarFechaActual() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getConjuntoUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/Conjuntos/fechaActual")
                .subscribe(respuesta => {
                this.fechaActual = respuesta;
            });
        });
    } // end cargarFechaActual
    getConjuntoPago() {
        return this.conjuntoPago;
    }
    getFechaActual() {
        return this.fechaActual;
    } // end getFechaActual
    convertHour(hour) {
        var minutes;
        var hours;
        minutes = Math.trunc(hour % 100);
        hours = Math.trunc((hour / 100) % 100);
        if (hours > 11) {
            hours -= 12;
            if (minutes > 9)
                return hours.toString() + ":" + minutes.toString() + " pm";
            else
                return hours.toString() + ":0" + minutes.toString() + " pm";
        }
        else {
            if (minutes > 9)
                return hours.toString() + ":" + minutes.toString() + " am";
            else
                return hours.toString() + ":0" + minutes.toString() + " am";
        } // end if
    } // end convertHour
    convertDate(date) {
        var year;
        var month;
        var day;
        year = Math.trunc(date % 10000);
        month = Math.trunc((date / 10000) % 100);
        day = Math.trunc((date / 1000000) % 100);
        return src_app_constants__WEBPACK_IMPORTED_MODULE_3__["MONTHS"][Math.trunc(month) - 1] + " " + day.toString() + " " + year.toString();
    } // end convertDate
}; // end ConjuntosService
ConjuntosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConjuntosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConjuntosService);



/***/ }),

/***/ "bfR7":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/registro-component/registro-component.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header  menu=NO routeBack=\"/ingreso\"></app-header>\n    <app-header-start titulo=\"Registrate\" ></app-header-start>\n  \n    <div class=\"content-block responsive-paddings\" style=\"overflow:scroll\" >\n    <form action=\"your-action\" (submit)=\"onFormSubmit($event)\">\n \n        <dx-form id=\"form\" [formData]=\"usuario\" [showColonAfterLabel]=\"false\"\n            [showValidationSummary]=\"false\" validationGroup=\"customerData\" [labelLocation]=\"labelL\">\n            <dxi-item itemType=\"group\">\n                <dxi-item dataField=\"rolConjunto\" layout=\"horizontal\" [label]=\"{text: 'Rol'}\" editorType=\"dxRadioGroup\" [editorOptions]=\"{ items: roles}\">\n                    <dxi-validation-rule type=\"required\" message=\"Rol es requerido\">    \n                    </dxi-validation-rule>\n                </dxi-item>\n                <dxi-item dataField=\"nombre\">\n                    <dxi-validation-rule type=\"required\" message=\"Nombre es requerido\">\n                    </dxi-validation-rule>\n                    <dxi-validation-rule type=\"pattern\" [pattern]=\"namePattern\" message=\" no use numeros en su nombre\">\n                    </dxi-validation-rule>\n                </dxi-item>\n                <dxi-item dataField=\"apellido\">\n                    <dxi-validation-rule type=\"required\" message=\"Apellido es requerido\">\n                    </dxi-validation-rule>\n                    <dxi-validation-rule type=\"pattern\" [pattern]=\"namePattern\" message=\"no use numeros en su Apellido\">\n                    </dxi-validation-rule>\n                </dxi-item>\n                <dxi-item dataField=\"usuario\">\n                    <dxi-validation-rule type=\"required\" message=\"Usuario es requerido\">\n                    </dxi-validation-rule>\n                    \n                </dxi-item>\n                <dxi-item dataField=\"correo\">\n                    <dxi-validation-rule type=\"required\" message=\"Correo requerido\">\n                    </dxi-validation-rule>\n                    <dxi-validation-rule type=\"email\" message=\"Correo Invalido\">\n                    </dxi-validation-rule>\n                    <!-- <dxi-validation-rule type=\"async\" message=\"Correo ya registrado\"\n                     [validationCallback]=\"asyncValidation\">\n                    </dxi-validation-rule> -->\n                </dxi-item>\n                <dxi-item dataField=\"contrasena\" [label]=\"{text: 'Contraseña'}\"  [editorOptions]=\"{ mode: 'password' }\">\n                    <dxi-validation-rule type=\"required\" message=\"Contraseña es obligatoria\">\n                    </dxi-validation-rule>\n                </dxi-item>\n                <dxi-item editorType=\"dxTextBox\" [editorOptions]=\"{ mode: 'password' }\">\n                    <dxo-label text=\"Contraseña confirmada\">\n                    </dxo-label>\n                    <dxi-validation-rule type=\"required\" message=\"contraseña requerida\">\n                    </dxi-validation-rule>\n                    <dxi-validation-rule type=\"compare\" [comparisonTarget]=\"passwordComparison\"\n                        message=\"contraseña incorrecta\">\n                    </dxi-validation-rule>\n                </dxi-item>\n           </dxi-item>\n        </dx-form>\n\n    </form>\n</div>\n <div>\n\n    <ion-button class=\"botonGuardar\"\n      (click)=\"onFormSubmit($event)\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n     \n      >Guardar</ion-button\n    >\n\n </div>\n\n\n");

/***/ }),

/***/ "bkXC":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/residente/lista-asambleas-residentes/lista-asambleas-residentes.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-subtitle {\n  font-size: 1.2rem;\n  text-transform: none;\n}\n\nion-card {\n  background-color: #F2F3F4;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpc3RhLWFzYW1ibGVhcy1yZXNpZGVudGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6Imxpc3RhLWFzYW1ibGVhcy1yZXNpZGVudGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi1jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "c1hH":
/*!*****************************************************************************************!*\
  !*** ./src/app/Services/ReservacionAreaResidente/reservacion-area-residente.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: Task, ReservacionAreaResidenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservacionAreaResidenteService", function() { return ReservacionAreaResidenteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let Task = class Task {
};
Task = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], Task);

let tasks = [
    { id: 1, text: "Prepare 2016 Financial" },
    { id: 2, text: "Prepare 2016 Marketing Plan" },
    { id: 3, text: "Update Personnel Files" },
    { id: 4, text: "Review Health Insurance Options Under the Affordable Care Act" },
    { id: 5, text: "New Brochures" },
];
let ReservacionAreaResidenteService = class ReservacionAreaResidenteService {
    constructor(http) {
        this.http = http;
    }
    getTasks() {
        return tasks;
    }
    getMisReservas(url) {
        return this.http.get(url);
    }
};
ReservacionAreaResidenteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ReservacionAreaResidenteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ReservacionAreaResidenteService);



/***/ }),

/***/ "dI6Q":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/asamblea-Subir-Votos/asamblea-subir-votos/asamblea-subir-votos.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dx-form id=\"form\"\n\t[formData]=\"votos\">\n\t<dxi-item itemType=\"group\" cssClass=\"first-group\" caption = \"Publicar Votaciones\" [colCount]=\"3\">\n\t\t<dxi-item itemType=\"group\" [colSpan]=\"2\">\n\t\t\t\t<dxi-item dataField=\"Asamblea\" [editorOptions]=\"{ disabled:true}\" ></dxi-item>\n\t\t\t\t<dxi-item dataField=\"totalVotaciones\" [editorOptions]=\"{ disabled:true}\" ></dxi-item>\n            \t<dxi-item dataField=\"Ganador\" [editorOptions]=\"{ disabled:true}\" ></dxi-item>\n\t\t</dxi-item>\n     <dxi-item \n      itemType=\"button\"\n      horizontalAlignment=\"center\"\n      [buttonOptions]=\"buttonOptions2\">\n     </dxi-item>\n     <dxi-item \n        itemType=\"button\"\n        horizontalAlignment=\"center\"\n        [buttonOptions]=\"buttonOptions\">\n     </dxi-item>\n    </dxi-item>\n</dx-form>");

/***/ }),

/***/ "do8N":
/*!***********************************************************!*\
  !*** ./src/app/Services/quejasA-service/queja.service.ts ***!
  \***********************************************************/
/*! exports provided: Queja, QuejaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queja", function() { return Queja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejaService", function() { return QuejaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Queja {
}
let queja = {
    "ID": 1,
    "Torre": 1,
    "Apartamento": "400a",
    "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
};
let QuejaService = class QuejaService {
    getQueja() {
        return queja;
    }
};
QuejaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], QuejaService);



/***/ }),

/***/ "eup4":
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/area-comun-admin/area-comun-admin.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 20px;\n}\n\n::ng-deep #button {\n  margin: 0 auto;\n  display: block;\n}\n\n.forma {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 440px;\n}\n\n.botIng2 {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 50px;\n  margin-top: 50px;\n}\n\n.botIng3 {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 100px;\n}\n\n.botIng4 {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 100px;\n}\n\n.derecho {\n  margin-left: 86px;\n  font-size: 15px;\n}\n\n.derechoT {\n  margin-left: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FyZWEtY29tdW4tYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksYUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSUo7O0FBREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSUo7O0FBREE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0oiLCJmaWxlIjoiYXJlYS1jb211bi1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuZmlyc3QtZ3JvdXAsXG46Om5nLWRlZXAgLnNlY29uZC1ncm91cCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbjo6bmctZGVlcCAjYnV0dG9uIHtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGRpc3BsYXk6YmxvY2s7XG59XG4uZm9ybWEge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0NDBweDtcbn1cbi5ib3RJbmcye1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmJvdEluZzN7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5ib3RJbmc0e1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uZGVyZWNob3tcbiAgICBtYXJnaW4tbGVmdDogODZweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uZGVyZWNob1R7XG4gICAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "fZqx":
/*!************************************************************!*\
  !*** ./src/app/Services/chatserv/chat-servicio.service.ts ***!
  \************************************************************/
/*! exports provided: ChatServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatServicioService", function() { return ChatServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let ChatServicioService = class ChatServicioService {
    constructor(http) {
        this.http = http;
        this.mensajesAd = [
            {
                contenido: 'Hola me dormi en la reu',
                fechaHora: 1554090856000,
                rolEmpleado: 'X',
                rolAdmin: 'destinatario'
            },
            {
                contenido: 'No pasa nada',
                fechaHora: 1554090856000,
                rolEmpleado: 'X',
                rolAdmin: 'remitente'
            },
            {
                contenido: 'Luego te cuentoooooo',
                fechaHora: 1554090856000,
                rolEmpleado: 'X',
                rolAdmin: 'remitente'
            },
            {
                contenido: 'Gracias',
                fechaHora: 1554090856000,
                rolEmpleado: 'X',
                rolAdmin: 'destinatario'
            },
            {
                contenido: 'A que horas es el te',
                fechaHora: 1554090856000,
                rolEmpleado: 'X',
                rolAdmin: 'destinatario'
            },
            {
                contenido: 'A las 8pm',
                fechaHora: 1554090856000,
                rolEmpleado: 'X',
                rolAdmin: 'remitente'
            }
        ];
        this.mensajes = [
            {
                contenido: 'Buenaaaaaas',
                fechaHora: 1554090856000,
                rolEmpleado: 'destinatario',
                rolAdmin: 'X'
            },
            {
                contenido: 'Como se encuentra ud el dia de hoy',
                fechaHora: 1554090956000,
                rolEmpleado: 'remitente',
                rolAdmin: 'X'
            },
            {
                contenido: 'Sr Daviiiiiiiiiiiiid',
                fechaHora: 1554091056000,
                rolEmpleado: 'remitente',
                rolAdmin: 'X'
            },
            {
                contenido: 'Bien gracias, un fa, me puedes llamar cuando inicie la novela?',
                fechaHora: 1554091156000,
                rolEmpleado: 'destinatario',
                rolAdmin: 'X'
            },
            {
                contenido: 'R',
                fechaHora: 1554091256000,
                rolEmpleado: 'remitente',
                rolAdmin: 'X'
            }
        ];
    }
    getMensajes() {
        return this.chat;
    }
    getMsjs() {
        return this.mensajes;
    } // end getConjuntos
    getMsjsAdmin() {
        return this.mensajesAd;
    }
    obtener(url) {
        this.chat = [];
        this.getChatss(url)
            .subscribe(respuesta => {
            console.log("subscirbe ", respuesta);
            this.chat = respuesta;
        });
    }
    getMsjsEmpApto(idConjunto, idApto, idEmp) {
        console.log("consulta EMPLE APTO");
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/mensajes/chatEmpleApto/" + idConjunto.toString() + "/" + idApto.toString() + "/" + idEmp.toString());
    }
    getMsjsEmpAdm(idConjunto, idAdmin, idEmp) {
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/mensajes/chatEmpleAdmin/" + idConjunto.toString() + "/" + idAdmin.toString() + "/" + idEmp.toString());
        console.log("entre pez", idConjunto, idAdmin, idEmp);
    }
    getMsjsAdminApto(idConjunto, idAdmin, idApto) {
        console.log("consulta ADMIN APTO");
        this.obtener(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/mensajes/chatAdminApto/" + idConjunto.toString() + "/" + idAdmin.toString() + "/" + idApto.toString());
    }
    getChatss(url) {
        return this.http.get(url);
    }
    addChats(contenido, fechaHora, rolEmpleado, rolAdmin) {
        this.mensajes.push({
            contenido,
            fechaHora,
            rolEmpleado,
            rolAdmin
        });
    } // end addConjunto
    addChatsAd(contenido, fechaHora, rolEmpleado, rolAdmin) {
        this.chat.push({
            contenido,
            fechaHora,
            rolEmpleado,
            rolAdmin
        });
    } // end addConjunto
    postNuevoMsj(url, body) {
        console.log("hello");
        return this.http.post(url, body);
    }
};
ChatServicioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ChatServicioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ChatServicioService);



/***/ }),

/***/ "faCD":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/empleados/empleados.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header *ngIf=\"rol !=='EMPLEADO'\" titulo=\"CHAT\" menu=\"{{getUser()}}\">\n</app-header>\n\n<app-header *ngIf=\"rol ==='EMPLEADO'\" titulo=\"ASISTENCIA\" menu=\"{{getUser()}}\">\n</app-header>\n\n<ion-content>\n    <ion-toolbar>\n        <ion-searchbar placeholder=\"Buscar\" animated (ionChange)=\"buscarChat($event)\"></ion-searchbar>\n    </ion-toolbar>\n    <ion-list>\n        \n        <ion-item *ngFor=\"let chat of getChatBuscado()\" [routerLink]=\"['/chat']\" (click)=\"elegirChat(chat)\">\n            <ion-avatar *ngIf=\"chat.rol === 'empleado'\" slot=\"start\">\n                <ion-img [src]=\"chat.foto\">\n                </ion-img>\n            </ion-avatar>\n            <ion-avatar *ngIf=\"chat.rol !== 'empleado'\" slot=\"start\">\n                <ion-img src=\"/../../../../assets/icon/fotoChat.png\"></ion-img>\n            </ion-avatar>\n            <ion-label>\n                {{chat.nombre}}\n                <ion-label class=\"color1\">\n                    {{chat.oficio}}\n                </ion-label>\n            </ion-label>\n        </ion-item>\n        <div *ngIf=\"getLength()==0\">\n            <div>No hay chats disponibles</div>\n        </div>\n    </ion-list>\n\n</ion-content>\n\n<ion-footer *ngIf=\"rol==='ADMIN'\">\n    <ion-card color=\"residente\" class=\"ion-text-center\">\n        <ion-card-header>\n            <ion-card-subtitle (click)=\"goToAdd()\">Agregar empleado</ion-card-subtitle>\n        </ion-card-header>\n    </ion-card>\n</ion-footer>");

/***/ }),

/***/ "gO5+":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/residente/asamblea-residente-component/asamblea-residente-component.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AsambleaResidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsambleaResidenteComponent", function() { return AsambleaResidenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_asamblea_residente_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./asamblea-residente-component.component.html */ "xIPN");
/* harmony import */ var _asamblea_residente_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asamblea-residente-component.component.scss */ "kwLW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_propuestas_propuestas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/propuestas/propuestas.service */ "w8Zv");
/* harmony import */ var src_app_Services_opciones_opciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/opciones/opciones.service */ "ujE3");
/* harmony import */ var src_app_Services_votos_votos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/votos/votos.service */ "GlUB");
/* harmony import */ var src_app_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/asambleas/asamblea.service */ "jORC");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/ingreAptoServ/serv-ing-apto.service */ "CaST");











let AsambleaResidenteComponent = class AsambleaResidenteComponent {
    constructor(navCtrl, propuestasService, opcionesService, votosServices, asambleaService, conjuntosService, servIngAptoService) {
        this.navCtrl = navCtrl;
        this.propuestasService = propuestasService;
        this.opcionesService = opcionesService;
        this.votosServices = votosServices;
        this.asambleaService = asambleaService;
        this.conjuntosService = conjuntosService;
        this.servIngAptoService = servIngAptoService;
        this.opcionesPropuesta = [];
    }
    ngOnInit() {
    } // end ngOnInit
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1000));
        });
    } // end waitBD
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.propuestas = [];
            this.idAsamblea = this.asambleaService.getAsambleaAbierta();
            this.asamblea = this.asambleaService.getAsamblea(this.idAsamblea);
            this.idConjunto = this.conjuntosService.getConjuntoActivo();
            this.idApto = this.servIngAptoService.getIdApto();
            this.propuestasService.cargarPropuestas(this.idConjunto, this.idApto, this.idAsamblea);
            yield this.waitBD();
            if (this.asambleaService.getAsambleaEstado() == "A")
                this.propuestas = this.propuestasService.getPropuestas();
            /* this.votosUsuario = [];
            this.colorCards = [];
            this.opcionesPropuesta = [];
            for(let prop of this.propuestas){
              if(prop.subir){
                prop.votosTotales = 0; // SOLO PRUEBA
                this.votosUsuario.push(0);
                this.colorCards.push("residente");
                //console.log("if activa == ", this.asamblea.Activo, " asaam = ", this.asamblea.IdAsamblea);
                if(this.asamblea.estado == 'Activa'){
                  this.opcion = this.opcionesService.getOpciones(prop.id);
                  for(let opc of this.opcion)
                    opc.cantidadVotos = 0; // SOLO PRUEBA
                  this.opcionesPropuesta.push([...this.opcion]);
                }// end if
              }// end if
            }// end for*/
        });
    } // end ionViewWillEnter
    getPropuestas() {
        return this.propuestas;
    } // end getPropuestas
    votar(opcion, propuesta) {
        if (!this.votosUsuario[propuesta.id - 1]) {
            if (!propuesta.parar) {
                this.votosServices.addVoto(opcion.id, propuesta.id);
                this.propuestas[propuesta.id - 1].votosTotales += 1;
                this.opcionesPropuesta[propuesta.id - 1][opcion.id - 1].cantidadVotos += 1;
                this.colorCards[propuesta.id - 1] = "red";
                this.votosUsuario[propuesta.id - 1] = 1;
                console.log("Voto en ", propuesta.descripcion, " por ", opcion.nombre);
                console.log("VotosTotales = ", this.propuestas[propuesta.id - 1].votosTotales);
                console.log("CantidadVotos Opcion 1 = ", this.opcionesPropuesta[propuesta.id - 1][0].cantidadVotos);
                console.log("CantidadVotos Opcion 2 = ", this.opcionesPropuesta[propuesta.id - 1][1].cantidadVotos);
            }
            else {
                this.colorCards[propuesta.id - 1] = "red";
            }
        }
    } // votar
    getAsamblea() {
        return this.asamblea;
    }
    getColorCards(propuesta) {
        return this.colorCards[propuesta.id - 1];
    }
    getOpcSlideInfo(propuesta) {
        return propuesta.opciones;
    }
    getNombreOpcion(opcion, propuesta) {
        return this.getOpcSlideInfo(propuesta)[opcion.id - 1].nombre;
    }
    next(slides) {
        console.log(slides);
        slides.slideNext();
    }
    prev(slides) {
        console.log(slides);
        slides.slidePrev();
    }
};
AsambleaResidenteComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_Services_propuestas_propuestas_service__WEBPACK_IMPORTED_MODULE_5__["PropuestasService"] },
    { type: src_app_Services_opciones_opciones_service__WEBPACK_IMPORTED_MODULE_6__["OpcionesService"] },
    { type: src_app_Services_votos_votos_service__WEBPACK_IMPORTED_MODULE_7__["VotosService"] },
    { type: src_app_Services_asambleas_asamblea_service__WEBPACK_IMPORTED_MODULE_8__["AsambleaService"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_9__["ConjuntosService"] },
    { type: src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_10__["ServIngAptoService"] }
];
AsambleaResidenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-asamblea-residente-component',
        template: _raw_loader_asamblea_residente_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_asamblea_residente_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AsambleaResidenteComponent);



/***/ }),

/***/ "gkjk":
/*!***********************************************************!*\
  !*** ./src/app/components/general/chat/chat.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.component.html */ "UJS5");
/* harmony import */ var _chat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component.scss */ "KmZu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var src_app_Services_agregar_empld_agregar_empld_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/agregar-empld/agregar-empld.service */ "mr/a");
/* harmony import */ var src_app_Services_chatserv_chat_servicio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/chatserv/chat-servicio.service */ "fZqx");
/* harmony import */ var src_app_Services_chatserv_mensaje__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/chatserv/mensaje */ "7Ky/");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/ingreAptoServ/serv-ing-apto.service */ "CaST");
/* harmony import */ var src_app_Services_lstChatServ_lst_chat_servicio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Services/lstChatServ/lst-chat-servicio.service */ "aTLU");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13__);














let ChatComponent = class ChatComponent {
    constructor(servApto, serChats, chatServ, personasService, conjuntoService, navCtrl, alertController, agEmpSer) {
        this.servApto = servApto;
        this.serChats = serChats;
        this.chatServ = chatServ;
        this.personasService = personasService;
        this.conjuntoService = conjuntoService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.agEmpSer = agEmpSer;
        this.msj = new src_app_Services_chatserv_mensaje__WEBPACK_IMPORTED_MODULE_8__["mensaje"]();
        this.mensajes = [];
        this.usuActual = '';
        this.usuDesti = '';
        this.newMsg = '';
        this.user = "RESIDENTE";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.idPerActiva = this.personasService.getPersonaID();
            this.idConjunto = this.conjuntoService.getConjuntoActivo();
            this.idApto = this.servApto.getIdApto(); //SETEAR DE APTO INGRESO EL CONJUNTO
            this.chatn = this.serChats.getChatN();
            this.chatid = this.serChats.getChatId();
            this.chatrol = this.serChats.getRol();
            console.log(this.chatn + "qaui");
            console.log(this.chatid + "id");
            console.log(this.chatrol + "id");
            this.usuario = this.personasService.getUserActivo();
            this.usuDesti = 'María';
            this.usuActual = 'David';
            if ((this.usuario === 'ADMIN' && this.chatrol === 'apartamento')) {
                console.log("ADMIN A APTO como admin");
                this.chatServ.getMsjsAdminApto(this.idConjunto, this.idPerActiva, this.chatid);
                yield this.waitBD();
            }
            if ((this.usuario === 'RESIDENTE' && this.chatrol === 'administrador')) {
                console.log("ADMIN A APTO como res");
                this.chatServ.getMsjsAdminApto(this.idConjunto, this.chatid, this.idPerActiva);
                yield this.waitBD();
            }
            if ((this.usuario === 'RESIDENTE' && this.chatrol === 'empleado')) {
                console.log("EMPLEADO A APTO como res", this.idConjunto, this.idPerActiva, this.chatid);
                this.chatServ.getMsjsEmpApto(this.idConjunto, this.idApto, this.chatid);
                yield this.waitBD();
            }
            if ((this.usuario === 'EMPLEADO' && this.chatrol === 'apartamento')) {
                console.log("EMPLEADO A APTO como empl");
                this.chatServ.getMsjsEmpApto(this.idConjunto, this.chatid, this.idPerActiva);
                yield this.waitBD();
            }
            if ((this.usuario === 'ADMIN' && this.chatrol === 'empleado')) {
                console.log("ADMIN A EMPLE Y FALLO", this.idConjunto, this.chatid, this.idPerActiva);
                this.chatServ.getMsjsEmpAdm(this.idConjunto, this.idPerActiva, this.chatid);
                yield this.waitBD();
            }
            if ((this.usuario === 'EMPLEADO' && this.chatrol === 'administrador')) {
                console.log("ADMIN A EMPLE ");
                this.chatServ.getMsjsEmpAdm(this.idConjunto, this.chatid, this.idPerActiva);
                yield this.waitBD();
            }
            this.mensajes = [];
            this.mensajes = this.chatServ.getMensajes();
            console.log("hello aqui ta ", this.mensajes);
        });
    }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 500));
        });
    }
    enviarMensaje() {
        this.bandera = 0;
        this.msj.fecha_hora = new Date().getTime();
        this.msj.contenido = this.newMsg;
        this.msj.visto = 1;
        this.msj.idConjunto = this.idConjunto;
        console.log(new Date().getTime());
        if (this.usuario == "RESIDENTE" && this.chatrol == "empleado") {
            this.msj.idEmpleado = this.chatid;
            this.msj.idApto = this.idApto;
            this.msj.idAdmin = 0;
            this.msj.rolEmpleado = "destinatario";
            this.msj.rolAdmin = "X";
            console.log("Siendo residente a Empleado");
            this.chatServ.addChatsAd(this.newMsg, new Date().getTime(), "destinatario", "X");
        }
        if (this.usuario == "RESIDENTE" && this.chatrol == "administrador") {
            this.msj.idEmpleado = 0;
            this.msj.idApto = this.idApto;
            this.msj.idAdmin = this.chatid;
            this.msj.rolEmpleado = "X";
            this.msj.rolAdmin = "destinatario";
            console.log("Siendo residente a administrador");
            this.chatServ.addChatsAd(this.newMsg, new Date().getTime(), "X", "destinatario");
            this.bandera = 1;
        }
        if (this.usuario == "ADMIN" && this.chatrol == "empleado") {
            this.msj.idEmpleado = this.chatid;
            this.msj.idApto = 0;
            this.msj.idAdmin = this.idPerActiva;
            this.msj.rolEmpleado = "destinatario";
            this.msj.rolAdmin = "X";
            console.log("Siendo admin a empleado");
            this.chatServ.addChatsAd(this.newMsg, new Date().getTime(), "destinatario", "X");
        }
        if (this.usuario == "ADMIN" && this.chatrol == "apartamento") {
            this.msj.idEmpleado = 0;
            this.msj.idApto = this.idApto;
            this.msj.idAdmin = this.idPerActiva;
            this.msj.rolEmpleado = "X";
            this.msj.rolAdmin = "remitente";
            console.log("Siendo admin a apartamento");
            this.chatServ.addChatsAd(this.newMsg, new Date().getTime(), "X", "remitente");
            this.bandera = 1;
        }
        if (this.usuario == "EMPLEADO" && this.chatrol == "administrador") {
            this.msj.idEmpleado = this.idPerActiva;
            this.msj.idApto = 0;
            this.msj.idAdmin = this.chatid;
            this.msj.rolEmpleado = "remitente";
            this.msj.rolAdmin = "X";
            console.log("Siendo empleado a administrador");
            this.chatServ.addChatsAd(this.newMsg, new Date().getTime(), "remitente", "X");
        }
        if (this.usuario == "EMPLEADO" && this.chatrol == "apartamento") {
            this.msj.idEmpleado = this.idPerActiva;
            this.msj.idApto = this.idApto;
            this.msj.idAdmin = 0;
            this.msj.rolEmpleado = "remitente";
            this.msj.rolAdmin = "X";
            console.log("Siendo empleado a apto");
            this.chatServ.addChatsAd(this.newMsg, new Date().getTime(), "remitente", "X");
        }
        /*
        if(this.bandera==1){
          this.mensajes = this.chatServ.getMsjsAdmin();
        }else{
          this.mensajes = this.chatServ.getMsjs();
        }*/
        this.mensajes = this.chatServ.getMensajes();
        console.log("mensaje enviado; ", this.msj);
        this.postNuevoMsj(); //ENVIAR MENSAJE
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(200);
        });
    }
    getUser() {
        return this.user;
        //return this.personasService.getPersonaActiva().rolConjunto;
    }
    postNuevoMsj() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("POSTTTTT: ", this.msj);
            this.chatServ.postNuevoMsj(src_app_constants__WEBPACK_IMPORTED_MODULE_5__["IPRESIDENTES"] + "consultas/mensajes/NuevoMensaje", this.msj)
                .subscribe(respuesta => {
                console.log(respuesta);
            });
        });
    }
    goBack() {
        console.log("Quintana ");
        this.navCtrl.navigateForward("/empleados");
    }
    deleteEmp() {
        //console.log("Quintana ");
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmación',
                message: '¿Está seguro que desea eliminar el empleado ' + this.chatn + '?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.agEmpSer.deleteEmpleado(src_app_constants__WEBPACK_IMPORTED_MODULE_5__["IPRESIDENTES"] + "consultas/Conjuntos/eliminarEmpleado/" + this.idConjunto + "/" + this.chatid)
                                .subscribe(respuesta => {
                                devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_13___default()(respuesta, 'sucess');
                                console.log(respuesta);
                                this.goBack();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ChatComponent.ctorParameters = () => [
    { type: src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_10__["ServIngAptoService"] },
    { type: src_app_Services_lstChatServ_lst_chat_servicio_service__WEBPACK_IMPORTED_MODULE_11__["LstChatServicioService"] },
    { type: src_app_Services_chatserv_chat_servicio_service__WEBPACK_IMPORTED_MODULE_7__["ChatServicioService"] },
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_12__["PersonasService"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_9__["ConjuntosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_Services_agregar_empld_agregar_empld_service__WEBPACK_IMPORTED_MODULE_6__["AgregarEmpldService"] }
];
ChatComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }],
    routeBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatComponent);



/***/ }),

/***/ "h0Sj":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/general/registro-component/registro-component.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep form {\n  margin: 30px;\n  margin-bottom: 100px;\n}\n\n.lado {\n  margin-left: 80px;\n  border-radius: 20px;\n  background-color: #c9e265;\n}\n\n.ladoVolver {\n  margin-left: 45px;\n  border-radius: 40px;\n  background-color: #c9e265;\n  color: white;\n}\n\n::ng-deep border {\n  color: aquamarine;\n}\n\n.content-block {\n  margin-right: 20px;\n  height: 90%;\n  width: 100%;\n}\n\n.toolbar-content {\n  background-color: #c9e265;\n}\n\n.botonGuardar {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-left: 20px;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZ2lzdHJvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdBO0VBRUksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDRyxpQkFBQTtBQURIOztBQUlBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBQ0kseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZKIiwiZmlsZSI6InJlZ2lzdHJvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBmb3JtIHtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICBcbn1cblxuLmxhZG8ge1xuICAgXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzllMjY1O1xufVxuLmxhZG9Wb2x2ZXJ7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzllMjY1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgXG59XG5cbjo6bmctZGVlcCBib3JkZXIge1xuICAgY29sb3I6IGFxdWFtYXJpbmU7XG59XG5cbi5jb250ZW50LWJsb2NrIHtcbiAgICBcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG59XG4udG9vbGJhci1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzllMjY1O1xufVxuXG4uYm90b25HdWFyZGFye1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "hxzB":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/quejas-admin-component/quejas-admin-component.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"QUEJAS\" menu=ADMIN></app-header>\n\n<ion-content>\n    <ion-card *ngFor=\"let queja of quejas\">\n        <ion-card-header> \n            <ion-card-title *ngIf=\"queja.anonimo == 1\" style=\"font-size:25px; font-weight: bold\"  text-wrap>\n                <ion-icon name=\"person-circle-outline\" color=\"residente-txt\"></ion-icon>\n                &nbsp;&nbsp;Anónimo\n            </ion-card-title> \n            <ion-card-title *ngIf=\"queja.anonimo==0\" style=\"font-size:25px; font-weight: bold\"  text-wrap>\n                <ion-icon name=\"person-circle-outline\" color=\"residente-txt\"></ion-icon>\n                &nbsp;&nbsp;{{queja.remitente}}\n            </ion-card-title> \n        </ion-card-header>\n        <ion-card-content style=\"font-size:20px\">\n            {{queja.asunto}}\n        </ion-card-content>\n      <br>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "inGp":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/general/seleccion-conjunto-component/seleccion-conjunto-component.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .dx-list-item-content > div {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlbGVjY2lvbi1jb25qdW50by1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoic2VsZWNjaW9uLWNvbmp1bnRvLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuZHgtbGlzdC1pdGVtLWNvbnRlbnQgPiBkaXYge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "jORC":
/*!********************************************************!*\
  !*** ./src/app/Services/asambleas/asamblea.service.ts ***!
  \********************************************************/
/*! exports provided: AsambleaPK, Asamblea, Opciones, AsambleaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsambleaPK", function() { return AsambleaPK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asamblea", function() { return Asamblea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opciones", function() { return Opciones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsambleaService", function() { return AsambleaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




class AsambleaPK {
}
class Asamblea {
}
class Opciones {
}
let Nopciones = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let AsambleaService = class AsambleaService {
    constructor(http) {
        this.http = http;
    }
    setAsambleaAbierta(id) {
        window.localStorage['asambleaAbierta'] = id.toString();
    } // setAsambleaAbierta
    getAsambleaAbierta() {
        this.asambleaAbierta = Number(window.localStorage['asambleaAbierta'] || -1);
        if (this.asambleaAbierta == -1)
            return null;
        else
            return this.asambleaAbierta;
    } // getAsambleaAbierta
    getAsambleaEstado() {
        this.asambleaEstado = window.localStorage['asambleaEstado'];
        return this.asambleaEstado;
    } // getAsambleaAbierta
    setAsambleaEstado(estado) {
        window.localStorage['asambleaEstado'] = estado;
    } // setAsambleaAbierta
    getAsambleaUrl(url) {
        return this.http.get(url);
    } // end getConjuntoUrl
    cargarAsambleas(numConjunto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getAsambleaUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTESA"] + "/consultas/asambleas/" + numConjunto.toString())
                .subscribe(respuesta => {
                this.asambleas = respuesta;
            });
        });
    } // end cargarAsambleas
    getAsamblea(idAsamblea) {
        for (let asam of this.asambleas)
            if (asam.asambleaPK.idAsamblea == idAsamblea)
                return asam;
        return null;
    } // end getAsamblea
    getAsambleas() {
        return this.asambleas;
    } // end getAsambleas
    getNopciones() {
        return Nopciones;
    } // end getNopciones
};
AsambleaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AsambleaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AsambleaService);



/***/ }),

/***/ "jnva":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/admin/asamblea-admin-component/asamblea-admin-component.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 20px;\n}\n\n::ng-deep .second-group {\n  background-color: rgba(191, 191, 191, 0.15);\n}\n\n::ng-deep .derrecha {\n  margin-left: 50px;\n}\n\n::ng-deep .tabpanel-item {\n  height: 200px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  padding-left: 25px;\n  padding-top: 55px;\n}\n\n::ng-deep .mobile .tabpanel-item {\n  padding-top: 10px;\n}\n\n::ng-deep .tabpanel-item > div {\n  float: left;\n  padding: 0 85px 10px 10px;\n}\n\n::ng-deep .tabpanel-item p {\n  font-size: 16px;\n  margin: 0;\n}\n\n::ng-deep .item-box {\n  font-size: 16px;\n  margin: 15px 0 45px 10px;\n}\n\n::ng-deep .options {\n  padding: 20px;\n  background-color: rgba(191, 191, 191, 0.15);\n  margin-top: 20px;\n}\n\n::ng-deep .caption {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n::ng-deep .option {\n  margin-top: 10px;\n}\n\nion-card-subtitle {\n  font-size: 1.2rem;\n}\n\nion-card {\n  background-color: #F2F3F4;\n  border-radius: 10px;\n}\n\n.lado {\n  margin-bottom: 50px;\n  margin-left: 60px;\n  border-radius: 20px;\n  background-color: #c9e265;\n}\n\n.lado-cancelar {\n  margin-bottom: 50px;\n  margin-left: 60px;\n  border-radius: 20px;\n  background-color: #e27c65;\n}\n\n.estetica {\n  margin-bottom: 200px;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FzYW1ibGVhLWFkbWluLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0csaUJBQUE7QUFDSDs7QUFFQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxnQkFBQTtBQVFKOztBQUxBO0VBQ0ksaUJBQUE7QUFRSjs7QUFMQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFKQTtFQUNHLG1CQUFBO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBT0o7O0FBSkE7RUFDSSxtQkFBQTtFQUNDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQU9MOztBQUpDO0VBRUUsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTUgiLCJmaWxlIjoiYXNhbWJsZWEtYWRtaW4tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5maXJzdC1ncm91cCxcbjo6bmctZGVlcCAuc2Vjb25kLWdyb3VwIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnNlY29uZC1ncm91cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTEsIDE5MSwgMTkxLCAwLjE1KTtcbn1cblxuOjpuZy1kZWVwIC5kZXJyZWNoYSB7XG4gICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuOjpuZy1kZWVwIC50YWJwYW5lbC1pdGVtIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy10b3A6IDU1cHg7XG59XG46Om5nLWRlZXAgLm1vYmlsZSAudGFicGFuZWwtaXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG46Om5nLWRlZXAgLnRhYnBhbmVsLWl0ZW0gID4gZGl2IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwIDg1cHggMTBweCAxMHB4XG59XG46Om5nLWRlZXAgLnRhYnBhbmVsLWl0ZW0gIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDA7ICAgIFxufVxuOjpuZy1kZWVwIC5pdGVtLWJveCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMTVweCAwIDQ1cHggMTBweDtcbn1cbjo6bmctZGVlcCAub3B0aW9ucyB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MSwgMTkxLCAxOTEsIDAuMTUpO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG46Om5nLWRlZXAgLmNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuOjpuZy1kZWVwIC5vcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5pb24tY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y0O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIFxufVxuXG4ubGFkbyB7XG4gICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZTI2NTtcbn1cblxuLmxhZG8tY2FuY2VsYXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNlMjdjNjU7XG4gfVxuXG4gLmVzdGV0aWNhe1xuICBcbiAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gfVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kvEE":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/residente/resultados-residente/resultados-residente.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  height: 50%;\n  width: 90%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jlc3VsdGFkb3MtcmVzaWRlbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InJlc3VsdGFkb3MtcmVzaWRlbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "kwLW":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/residente/asamblea-residente-component/asamblea-residente-component.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --bullet-background: #c9e265;\n  --bullet-background-active: #c9e265;\n  height: 100%;\n  width: 100%;\n}\n\nion-card {\n  left: 10%;\n  width: 70%;\n}\n\nion-slide {\n  display: block;\n}\n\nion-textarea {\n  left: 20%;\n  width: 60%;\n}\n\n.content-div {\n  height: 85%;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\n#derecha {\n  width: 94%;\n  text-align: right;\n}\n\n#izquierda {\n  width: 94%;\n  padding-left: 5%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FzYW1ibGVhLXJlc2lkZW50ZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJhc2FtYmxlYS1yZXNpZGVudGUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogI2M5ZTI2NTtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2M5ZTI2NTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJke1xuICAgIGxlZnQ6IDEwJTtcbiAgICB3aWR0aDogNzAlO1xufVxuaW9uLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXRleHRhcmVhe1xuICAgIGxlZnQ6IDIwJTtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uY29udGVudC1kaXZ7XG4gICAgaGVpZ2h0OiA4NSU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNkZXJlY2hhe1xuICAgIHdpZHRoOiA5NCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiNpenF1aWVyZGF7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: IPRESIDENTES, IPRESIDENTESA, MONTHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPRESIDENTES", function() { return IPRESIDENTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPRESIDENTESA", function() { return IPRESIDENTESA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS", function() { return MONTHS; });
const IPRESIDENTES = "http://190.156.243.87:8080/BackendResidentes/";
const IPRESIDENTESA = "http://190.156.243.87:8080/BackendResidentes";
const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


/***/ }),

/***/ "ldzN":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/admin/lista-asambleas-admin/lista-asasamblea-admin/lista-asasamblea-admin.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#centrado {\n  text-align: center;\n}\n\nion-card-subtitle {\n  font-size: 1.2rem;\n  text-transform: none;\n}\n\nion-card {\n  background-color: #F2F3F4;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpc3RhLWFzYXNhbWJsZWEtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNSOztBQUVJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUNSIiwiZmlsZSI6Imxpc3RhLWFzYXNhbWJsZWEtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2VudHJhZG97XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIGlvbi1jYXJke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH0iXX0= */");

/***/ }),

/***/ "mRsq":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/acerca-nosotros-component/acerca-nosotros-component.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"SOBRE RESIDENTES\" menu={{getUser()}}></app-header>");

/***/ }),

/***/ "mmnP":
/*!***************************************************************************!*\
  !*** ./src/app/components/general/header-start/header-start.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStartComponent", function() { return HeaderStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_start_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header-start.component.html */ "DQZR");
/* harmony import */ var _header_start_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-start.component.scss */ "5L9K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderStartComponent = class HeaderStartComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderStartComponent.ctorParameters = () => [];
HeaderStartComponent.propDecorators = {
    titulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
HeaderStartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header-start',
        template: _raw_loader_header_start_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_start_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderStartComponent);



/***/ }),

/***/ "mr/a":
/*!*****************************************************************!*\
  !*** ./src/app/Services/agregar-empld/agregar-empld.service.ts ***!
  \*****************************************************************/
/*! exports provided: AgregarEmpldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarEmpldService", function() { return AgregarEmpldService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AgregarEmpldService = class AgregarEmpldService {
    constructor(http) {
        this.http = http;
    }
    loginUser(credential) {
        console.log(credential);
        return 0;
    }
    postNuevoEmpld(url, body) {
        console.log("hello");
        return this.http.post(url, body);
    }
    deleteEmpleado(url) {
        return this.http.delete(url);
    }
};
AgregarEmpldService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AgregarEmpldService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AgregarEmpldService);



/***/ }),

/***/ "msiT":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/admin/modificar-area-admin/modificar-area-admin.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModificarAreaAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarAreaAdminComponent", function() { return ModificarAreaAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modificar_area_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modificar-area-admin.component.html */ "O0TE");
/* harmony import */ var _modificar_area_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modificar-area-admin.component.scss */ "qpNM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Services_modificarAreaAdmin_modificar_area_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/modificarAreaAdmin/modificar-area-admin.service */ "JTWM");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_AreaComunAdmin_area_comun_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/AreaComunAdmin/area-comun-admin.service */ "8fVV");










let ModificarAreaAdminComponent = class ModificarAreaAdminComponent {
    constructor(service, navCtrl, conjunto, areaA) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.conjunto = conjunto;
        this.areaA = areaA;
        this.nuevaAreas = new _Services_modificarAreaAdmin_modificar_area_admin_service__WEBPACK_IMPORTED_MODULE_5__["NuevaArea"]();
        this.top = "top";
        this.editEstado = [
            "Disponible",
            "Cerrada"
        ];
        this.onFormSubmit = function (e) {
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_4___default()({
                message: "Se ha agregado el área común",
                position: {
                    my: "center top",
                    at: "center top"
                }
            }, "success", 3000);
            e.preventDefault();
        };
        this.tipo = service.getTipo();
        this.horaDeApertura = service.getHoraDeApertura();
        this.horaDeCierre = service.getHoraDeCierre();
        this.diasDisponibles = service.getDiasDisponibles();
        this.conjuntoA = conjunto.getConjuntoActivo();
        this.nombreArea = areaA.getareaComun();
        this.nuevaArea = this.traerAreaEspecifica();
        console.log("holaaaa", this.nuevaArea);
    }
    mandarAreaComun() {
        this.navCtrl.navigateForward("/area-comun-admin");
    }
    ngOnInit() {
        this.traerAreaEspecifica();
    }
    modificarArea() {
        console.log("id", this.nuevaArea.areacomunPK.idArea);
        this.service.putAreaComun(src_app_constants__WEBPACK_IMPORTED_MODULE_7__["IPRESIDENTESA"] + "/consultas/AreasComunes/modificarAreaEspecifica/conjunto/" + this.conjuntoA + "/area/" + this.nuevaArea.areacomunPK.idArea, this.nuevaArea)
            .subscribe(respuesta => {
            this.respuesta = respuesta;
            console.log(this.respuesta);
        });
    }
    traerAreaEspecifica() {
        this.service.traerArea(src_app_constants__WEBPACK_IMPORTED_MODULE_7__["IPRESIDENTESA"] + "/consultas/AreasComunes/areaEspecifica/conjunto/" + this.conjuntoA + "/nomArea/" + this.nombreArea)
            .subscribe(respuesta => {
            this.nuevaArea = respuesta;
            console.log("Älejo cangrejo ", respuesta);
        });
    }
};
ModificarAreaAdminComponent.ctorParameters = () => [
    { type: _Services_modificarAreaAdmin_modificar_area_admin_service__WEBPACK_IMPORTED_MODULE_5__["ModificarAreaAdminService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_8__["ConjuntosService"] },
    { type: src_app_Services_AreaComunAdmin_area_comun_admin_service__WEBPACK_IMPORTED_MODULE_9__["AreaComunAdminService"] }
];
ModificarAreaAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modificar-area-admin',
        providers: [_Services_modificarAreaAdmin_modificar_area_admin_service__WEBPACK_IMPORTED_MODULE_5__["ModificarAreaAdminService"]],
        template: _raw_loader_modificar_area_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modificar_area_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModificarAreaAdminComponent);



/***/ }),

/***/ "nCiP":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empleado/asistencia-empleado-component/asistencia-empleado-component.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"ASISTENCIA\" menu=EMPLEADO></app-header>\n");

/***/ }),

/***/ "ndJC":
/*!***********************************************************************************!*\
  !*** ./src/app/components/residente/pagos-component/pagos-component.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PagosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagosComponent", function() { return PagosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pagos_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pagos-component.component.html */ "KtR7");
/* harmony import */ var _pagos_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagos-component.component.scss */ "DjIb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/ingreAptoServ/serv-ing-apto.service */ "CaST");







let PagosComponent = class PagosComponent {
    constructor(conjuntosService, inAppBrowser, servIngAptoService) {
        this.conjuntosService = conjuntosService;
        this.inAppBrowser = inAppBrowser;
        this.servIngAptoService = servIngAptoService;
        this.urlPago = "";
        this.precioAdmin = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.conjuntoActivo = this.conjuntosService.getConjuntoActivo();
            this.aptoActivo = this.servIngAptoService.getIdApto();
            this.cargarDatosAdmin();
        });
    }
    cargarDatosAdmin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.conjuntosService.getPagoAdmin(this.conjuntoActivo, this.aptoActivo);
            yield this.waitBD();
            this.conjuntoPago = this.conjuntosService.getConjuntoPago();
            console.log("CONJUNTO PAGO: ", this.conjuntoPago);
            console.log("CONJUNTO PAGO LIN: ", this.conjuntoPago.linkDePago);
            this.urlPago = "http://" + this.conjuntoPago.linkDePago;
            this.precioAdmin = this.conjuntoPago.precioAdmin;
        });
    }
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 250));
        });
    }
    openUrl() {
        this.inAppBrowser.create(this.urlPago);
        console.log("COnjunto = ", this.conjuntoActivo, " Apto = ", this.aptoActivo);
        this.conjuntosService.pagarAdmin(this.conjuntoActivo, this.aptoActivo);
    }
    getPrecio() {
        return this.precioAdmin;
    }
};
PagosComponent.ctorParameters = () => [
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_4__["ConjuntosService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] },
    { type: src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_6__["ServIngAptoService"] }
];
PagosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagos-component',
        template: _raw_loader_pagos_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pagos_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PagosComponent);



/***/ }),

/***/ "nfPL":
/*!**************************************************************************************************************************************************!*\
  !*** ../node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"OLzK",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"ke6l",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"a1pG",
		45
	],
	"./pwa-camera.entry.js": [
		"ySFx",
		46
	],
	"./pwa-toast.entry.js": [
		"VTpk",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "nfPL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "oClf":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/residente/reservacion-area-residente/reservacion-area-residente.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .selected-data,\n::ng-deep .options {\n  margin-top: 20px;\n  padding: 20px;\n  background-color: rgba(191, 191, 191, 0.15);\n}\n\n::ng-deep .selected-data .caption {\n  font-weight: bold;\n  font-size: 115%;\n}\n\n.boton {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jlc2VydmFjaW9uLWFyZWEtcmVzaWRlbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFFSiIsImZpbGUiOiJyZXNlcnZhY2lvbi1hcmVhLXJlc2lkZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuc2VsZWN0ZWQtZGF0YSxcbjo6bmctZGVlcCAub3B0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4xNSk7XG59XG46Om5nLWRlZXAgLnNlbGVjdGVkLWRhdGEgLmNhcHRpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTE1JTtcbn1cblxuLmJvdG9ue1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "obuL":
/*!***********************************************************!*\
  !*** ./src/app/Services/ClavServ/clave-contra.service.ts ***!
  \***********************************************************/
/*! exports provided: Usuario, Rol, ClaveContraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rol", function() { return Rol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaveContraService", function() { return ClaveContraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Usuario {
}
let usuarios = [{
        Usuario: "1-601",
        Constrasena: "gato34"
    }, {
        Usuario: "1-602",
        Constrasena: "messi10"
    }, {
        Usuario: "1-603",
        Constrasena: "1234abcd"
    },
    {
        Usuario: "1-604",
        Constrasena: "soloMillos"
    }];
class Rol {
}
let roles = [{
        Nombre: "Empleado"
    }, {
        Nombre: "Residente"
    }];
let ClaveContraService = class ClaveContraService {
    getUsuarios() {
        return usuarios;
    }
    getRoles() {
        return roles;
    }
};
ClaveContraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClaveContraService);



/***/ }),

/***/ "pzLh":
/*!*******************************************************************************!*\
  !*** ./src/app/components/residente/reservar-area/reservar-area.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReservarAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarAreaComponent", function() { return ReservarAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reservar_area_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reservar-area.component.html */ "YY3W");
/* harmony import */ var _reservar_area_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservar-area.component.scss */ "BqlD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_reservarAreaResidente_reservar_area_residente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/reservarAreaResidente/reservar-area-residente.service */ "Q/zP");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "hYZE");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let ReservarAreaComponent = class ReservarAreaComponent {
    constructor(service, navCtrl) {
        this.navCtrl = navCtrl;
        this.reserva = service.getReserva();
        this.horasDisponibles = service.getHorasDisponibles();
        this.hora_i = service.getHora_i();
        this.hora_f = service.getHora_f();
        this.cantidad_p = service.getCantidad_p();
    }
    ngOnInit() { }
};
ReservarAreaComponent.ctorParameters = () => [
    { type: _Services_reservarAreaResidente_reservar_area_residente_service__WEBPACK_IMPORTED_MODULE_4__["ReservarAreaResidenteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
ReservarAreaComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DxFormComponent"], { static: false },] }]
};
ReservarAreaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reservar-area',
        providers: [_Services_reservarAreaResidente_reservar_area_residente_service__WEBPACK_IMPORTED_MODULE_4__["ReservarAreaResidenteService"]],
        template: _raw_loader_reservar_area_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reservar_area_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReservarAreaComponent);



/***/ }),

/***/ "pzxa":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/manual-admin-component/manual-admin-component.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"MANUAL CONVIVENCIA\" menu=ADMIN></app-header>\n<form id=\"form\" #form method=\"post\" action=\"\" enctype=\"multipart/form-data\">\n    <div *ngIf=\"step==0\">\n    <div class=\"Foto\"> \n        <ion-img  \n          src= \"/../../../../../assets/icon/IconConjuntos/pdf.png \">\n        </ion-img>\n      </div>\n \n    <ion-button class=\"botIng3\"\n    (click)=\"vermanual()\"\n    expand=\"full\"\n    shape=\"round\"\n    color=\"residente\"\n    type=\"submit\"\n    \n\n    > \n    Ver Manual</ion-button>\n    <ion-button class=\"botIng4\"\n    (click)=\"actualizarmanual()\"\n    expand=\"full\"\n    shape=\"round\"\n    color=\"residente\"\n    type=\"submit\"\n    \n\n    > \n    Actualizar Manual</ion-button>\n    </div>\n<div *ngIf=\"step == 1\" class=\"esti\">\n    <h3>Seleccione el archivo para el manual</h3>\n    <div id=\"fileuploader-container\">\n        <dx-file-uploader\n            selectButtonText=\"Seleccionar\"\n            labelText=\"\"\n            accept=\".pdf\"\n            uploadMode=\"useForm\">\n        </dx-file-uploader>\n    </div>\n    <ion-button class=\"botIng4\"\n    (click)=\"guardarmanual()\"\n    expand=\"full\"\n    shape=\"round\"\n    color=\"residente\"\n    type=\"submit\"\n    >\n    <ion-icon name=\"save\"></ion-icon>\n    Guardar Manual</ion-button>\n</div>\n</form>\n");

/***/ }),

/***/ "qpNM":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin/modificar-area-admin/modificar-area-admin.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .first-group,\n::ng-deep .second-group {\n  padding: 20px;\n}\n\n::ng-deep .second-group {\n  background-color: rgba(191, 191, 191, 0.15);\n}\n\n.boton {\n  padding-left: 40px;\n  padding-right: 20px;\n  width: 300px;\n  margin-bottom: 100px;\n  margin-left: 20px;\n}\n\n.formabella {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21vZGlmaWNhci1hcmVhLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLDJDQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUVJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJtb2RpZmljYXItYXJlYS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuZmlyc3QtZ3JvdXAsXG46Om5nLWRlZXAgLnNlY29uZC1ncm91cCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuOjpuZy1kZWVwIC5zZWNvbmQtZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkxLCAxOTEsIDE5MSwgMC4xNSk7XG59XG5cbi5ib3RvbntcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5mb3JtYWJlbGxhe1xuXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "r3WO":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/areas-residente-component/areas-residente-component.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"ÁREAS COMUNES\" menu=RESIDENTE></app-header>\n<div class = \"mover\">\n<div id=\"form1\">\n    <div class=\"dx-fieldset\">\n        <div class=\"dx-field\">\n            <div class=\"dx-field-label\">Tipo: </div>\n            <div class=\"dx-field-value\">\n                <dx-radio-group [items]=\"tipo\" \n                                 layout=\"horizontal\"\n                                 (onOptionChanged)=\"traerAreastipo()\">\n                </dx-radio-group>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"margen2\">Lista Areas Comunes</div>\n<dx-select-box class=\"margen1\" [items]=\"listaDeAreasComunes\"></dx-select-box>\n\n\n<app-calendar-paquete></app-calendar-paquete>\n\n\n<div class=\"margen3\">Horas Disponibles</div>\n<dx-select-box class=\"margen1\" [items]=\"horasDisponibles\"></dx-select-box>\n\n\n\n<ion-button class=\"boton1\"\n      (click)=\"mandarMisReservas()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n      >Mis Reservas</ion-button>\n<ion-button class=\"boton2\"\n      (click)=\"mandarNueva()\"\n      expand=\"full\"\n      shape=\"round\"\n      color=\"residente\"\n      type=\"submit\"\n      >Nueva Reserva</ion-button>\n\n    </div>\n      \n");

/***/ }),

/***/ "sCKP":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/general/acerca-nosotros-component/acerca-nosotros-component.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AcercaNosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaNosotrosComponent", function() { return AcercaNosotrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_acerca_nosotros_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./acerca-nosotros-component.component.html */ "mRsq");
/* harmony import */ var _acerca_nosotros_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acerca-nosotros-component.component.scss */ "0bnJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");





let AcercaNosotrosComponent = class AcercaNosotrosComponent {
    constructor(personasService) {
        this.personasService = personasService;
    }
    ngOnInit() { }
    getUser() {
        return this.personasService.getUserActivo();
    }
};
AcercaNosotrosComponent.ctorParameters = () => [
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_4__["PersonasService"] }
];
AcercaNosotrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-acerca-nosotros-component',
        template: _raw_loader_acerca_nosotros_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_acerca_nosotros_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AcercaNosotrosComponent);



/***/ }),

/***/ "tHbj":
/*!*************************************************************************!*\
  !*** ./src/app/Services/registro-servicio/registro-servicio.service.ts ***!
  \*************************************************************************/
/*! exports provided: Usuario, RegistroServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroServicioService", function() { return RegistroServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class Usuario {
}
// let customer : Customer = {
//     "Email": "",
//     "Password": "",
//     "Name": "Alejo",
//     "Date": null,
//     "Country": "",
//     "City": "",
//     "Address": "",
//     "Phone": "",
//     "Accepted": false
// };
let RegistroServicioService = class RegistroServicioService {
    constructor(http) {
        this.http = http;
    }
    getUsario(url) {
        return this.http.get(url);
    }
    postUsuarioNuevo(url, body) {
        return this.http.post(url, body);
    }
};
RegistroServicioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegistroServicioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RegistroServicioService);



/***/ }),

/***/ "u7Ej":
/*!*****************************************************!*\
  !*** ./src/app/Services/Ganador/ganador.service.ts ***!
  \*****************************************************/
/*! exports provided: Ganador, GanadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ganador", function() { return Ganador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GanadorService", function() { return GanadorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Ganador {
}
let GanadorService = class GanadorService {
    constructor() {
        this.ganadores = [
            {
                idPropuesta: 1,
                idOpcion: 1
            },
            {
                idPropuesta: 2,
                idOpcion: 2
            }
        ];
    }
    getGanadores() {
        return this.ganadores;
    }
    getGanador(idPropuesta) {
        return this.ganadores.find(ganador => { return ganador.idPropuesta == idPropuesta; });
    }
};
GanadorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GanadorService);



/***/ }),

/***/ "ujE3":
/*!*******************************************************!*\
  !*** ./src/app/Services/opciones/opciones.service.ts ***!
  \*******************************************************/
/*! exports provided: OpcionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcionesService", function() { return OpcionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let OpcionesService = class OpcionesService {
    constructor() {
        this.opciones = [
            {
                id: 1,
                idPropuesta: 1,
                nombre: "Sí",
                cantidadVotos: 2
            },
            {
                id: 2,
                idPropuesta: 1,
                nombre: "No",
                cantidadVotos: 1
            },
            {
                id: 1,
                idPropuesta: 2,
                nombre: "Sí",
                cantidadVotos: 1
            },
            {
                id: 2,
                idPropuesta: 2,
                nombre: "No",
                cantidadVotos: 2
            },
            {
                id: 1,
                idPropuesta: 3,
                nombre: "Sí",
                cantidadVotos: 0
            },
            {
                id: 2,
                idPropuesta: 3,
                nombre: "No",
                cantidadVotos: 0
            },
            {
                id: 1,
                idPropuesta: 4,
                nombre: "Santanfe",
                cantidadVotos: 0
            },
            {
                id: 2,
                idPropuesta: 4,
                nombre: "Superior",
                cantidadVotos: 0
            },
            {
                id: 3,
                idPropuesta: 4,
                nombre: "Asypro",
                cantidadVotos: 0
            }
        ];
    }
    getOpciones(idPropuesta) {
        return this.opciones.filter(opcion => { return opcion.idPropuesta == idPropuesta; });
    } // end getOpciones
    getOpcion(opcionId) {
        return this.opciones.find(opcion => { return opcion.id == opcionId; });
    } // end getOpcion
    addOpcion(idPropuesta, nombre, cantidadVotos) {
        this.opciones.push({
            id: this.opciones.length + 1,
            idPropuesta,
            nombre,
            cantidadVotos
        });
    } // end addOpcion
    deleteOpcion(opcionId) {
        this.opciones.splice(opcionId, 1);
    } // end deleteOpcion
};
OpcionesService.ctorParameters = () => [];
OpcionesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OpcionesService);



/***/ }),

/***/ "v6uD":
/*!****************************************************!*\
  !*** ./src/app/Services/noticias/noticia.model.ts ***!
  \****************************************************/
/*! exports provided: Noticia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Noticia", function() { return Noticia; });
class Noticia {
} // end Noticia


/***/ }),

/***/ "v7mF":
/*!*******************************************************************!*\
  !*** ./src/app/components/general/noticias/noticias.component.ts ***!
  \*******************************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_noticias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./noticias.component.html */ "2rKi");
/* harmony import */ var _noticias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticias.component.scss */ "MDux");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var src_app_Services_apiImagen_api_imagen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/apiImagen/api-imagen.service */ "Luky");
/* harmony import */ var src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/conjuntos/conjuntos.service */ "bLIy");
/* harmony import */ var src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Services/ingreAptoServ/serv-ing-apto.service */ "CaST");
/* harmony import */ var src_app_Services_noticias_noticia_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Services/noticias/noticia.model */ "v6uD");
/* harmony import */ var src_app_Services_noticias_noticiaPK_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Services/noticias/noticiaPK.model */ "FJ7D");
/* harmony import */ var src_app_Services_noticias_noticias_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/Services/noticias/noticias.service */ "IcYJ");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");














let NoticiasComponent = class NoticiasComponent {
    constructor(personasService, noticiasService, conjuntosService, servIngAptoService, alertController, api, plt, actionSheetCtrl) {
        this.personasService = personasService;
        this.noticiasService = noticiasService;
        this.conjuntosService = conjuntosService;
        this.servIngAptoService = servIngAptoService;
        this.alertController = alertController;
        this.api = api;
        this.plt = plt;
        this.actionSheetCtrl = actionSheetCtrl;
        this.mostrar = 0;
        this.hoja = document.createElement('style');
        this.descripcion = "";
        this.noticiaNueva = new src_app_Services_noticias_noticia_model__WEBPACK_IMPORTED_MODULE_10__["Noticia"]();
        this.mes = 0;
        this.anio = 0;
        this.dia = 0;
        this.images = [];
    }
    //////////////////////// TTTEEESSSTTTT ////////////////////////
    selectImageSource() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fileInput.nativeElement.click();
        });
    }
    // Used for browser direct file upload
    uploadFile(event) {
        this.fileInput.nativeElement.click();
        const eventObj = event;
        const target = eventObj.target;
        const file = target.files[0];
        console.log("File: ", file);
        this.fileP = file;
        /*this.api.uploadImageFile(file).subscribe((newImage: ApiImage) => {
          this.images.push(newImage);
        });*/
    }
    deleteImage(image, index) {
        this.api.deleteImage(image._id).subscribe(res => {
            this.images.splice(index, 1);
        });
    }
    //////////////////////// TTTEEESSSTTTT ////////////////////////
    ngOnInit() {
    } // end ngOnInit
    waitBD() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, 1000));
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.personasService.getUserActivo();
            console.log("USUARIOOOOO: ", this.user);
            this.conjuntosService.cargarFechaActual();
            yield this.waitBD();
            this.fecha = this.conjuntosService.getFechaActual();
            this.mes = this.fecha.mes;
            this.dia = this.fecha.dia;
            this.anio = this.fecha.anio;
            this.hoja.innerHTML = "#content-div {height: 80%;}";
            document.body.appendChild(this.hoja);
            this.idConjutno = this.conjuntosService.getConjuntoActivo();
            this.noticiasService.cargarNoticias(this.idConjutno);
            if (this.user == "RESIDENTE") {
                this.idApto = this.servIngAptoService.getIdApto();
                this.noticiasService.cargarAptoNoticia(this.idConjutno, this.idApto);
            } // end if
            yield this.waitBD();
            this.noticias = this.noticiasService.getNoticias();
            console.log("Noticiass: ", this.noticias);
        });
    } // end ionViewWillEnter
    getUser() {
        return this.user;
    } // end getUser
    getFecha() {
        return src_app_constants__WEBPACK_IMPORTED_MODULE_6__["MONTHS"][this.mes - 1] + " " + this.dia.toString() + " " + this.anio.toString();
    }
    convertDate(date) {
        var year;
        var month;
        var day;
        year = Math.trunc(date % 10000);
        month = Math.trunc((date / 10000) % 100);
        day = Math.trunc((date / 1000000) % 100);
        return src_app_constants__WEBPACK_IMPORTED_MODULE_6__["MONTHS"][Math.trunc(month) - 1] + " " + day.toString() + " " + year.toString();
    } // end convertDate
    click() {
        this.mostrar = 1;
        this.hoja.innerHTML = "#content-div {height: 70%;}";
        document.body.appendChild(this.hoja);
        console.log("MUereeee");
    }
    getMostrar() {
        return this.mostrar;
    }
    cancelarNoticia() {
        this.mostrar = 0;
        this.hoja.innerHTML = "#content-div {height:80%;}";
        document.body.appendChild(this.hoja);
        this.descripcion = "";
    }
    eliminarNoticia(noticia) {
        this.presentAlertConfirm(noticia);
    } // end
    cargarNoti() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.waitBD();
            this.noticiasService.cargarNoticias(this.idConjutno);
            yield this.waitBD();
            this.noticias = this.noticiasService.getNoticias();
            this.respuesta = this.noticiasService.getRespuesta();
            devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_5___default()(this.respuesta.respuesta, 'sucess');
        });
    } // end cargarNoti
    presentAlertConfirm(noticia) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmación',
                message: '¿Está seguro que desea eliminar la noticia ' + noticia.titulo + '?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.noticiasService.elimnarNoticia(this.idConjutno, noticia.noticiaPK.idNoticia);
                            this.cargarNoti();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    } // end presentAlertConfirm
    publicarNoticia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.mostrar = 0;
            this.hoja.innerHTML = "#content-div {height: 80%;}";
            document.body.appendChild(this.hoja);
            if ((this.descripcion != "")) {
                this.noticiaNueva.noticiaPK = new src_app_Services_noticias_noticiaPK_model__WEBPACK_IMPORTED_MODULE_11__["NoticiaPK"]();
                this.noticiaNueva.noticiaPK.conjuntoIdConjunto = this.conjuntosService.getConjuntoActivo();
                if (this.user == "RESIDENTE")
                    this.noticiaNueva.titulo = this.noticiasService.getAptoNoti();
                else
                    this.noticiaNueva.titulo = "Administrador";
                this.noticiaNueva.fecha = this.dia * 1000000 + this.mes * 10000 + this.anio;
                this.noticiaNueva.descripcion = this.descripcion;
                //this.noticiaNueva.imagen;
                this.noticiasService.nuevaNoticia(this.noticiaNueva);
                this.descripcion = "";
                this.cargarNoti();
            } //end if
        });
    } // end publicarNoticia
    getEli(noticia) {
        if (this.user == "ADMIN")
            return 1;
        else if (noticia.titulo == this.noticiasService.getAptoNoti())
            return 1;
        else
            return 0;
    } // end getEli
}; // end NoticiasComponent
NoticiasComponent.ctorParameters = () => [
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_13__["PersonasService"] },
    { type: src_app_Services_noticias_noticias_service__WEBPACK_IMPORTED_MODULE_12__["NoticiasService"] },
    { type: src_app_Services_conjuntos_conjuntos_service__WEBPACK_IMPORTED_MODULE_8__["ConjuntosService"] },
    { type: src_app_Services_ingreAptoServ_serv_ing_apto_service__WEBPACK_IMPORTED_MODULE_9__["ServIngAptoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_Services_apiImagen_api_imagen_service__WEBPACK_IMPORTED_MODULE_7__["ApiImagenService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
NoticiasComponent.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fileInput', { static: false },] }]
};
NoticiasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-noticias',
        template: _raw_loader_noticias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_noticias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NoticiasComponent);



/***/ }),

/***/ "v7xY":
/*!*********************************************************************************!*\
  !*** ./src/app/components/residente/menu-residente/menu-residente.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MenuResidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuResidenteComponent", function() { return MenuResidenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_residente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-residente.component.html */ "HO1N");
/* harmony import */ var _menu_residente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-residente.component.scss */ "8LM1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MenuResidenteComponent = class MenuResidenteComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuResidenteComponent.ctorParameters = () => [];
MenuResidenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-residente',
        template: _raw_loader_menu_residente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_residente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuResidenteComponent);



/***/ }),

/***/ "vP+S":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/manual-admin-component/manual-admin-component.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ManualAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualAdminComponent", function() { return ManualAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manual_admin_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manual-admin-component.component.html */ "pzxa");
/* harmony import */ var _manual_admin_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manual-admin-component.component.scss */ "Hgf1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme/ui/notify */ "pxlC");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/constants */ "l207");









let ManualAdminComponent = class ManualAdminComponent {
    constructor(http, inAppBrowser) {
        this.http = http;
        this.inAppBrowser = inAppBrowser;
        this.url = src_app_constants__WEBPACK_IMPORTED_MODULE_8__["IPRESIDENTESA"] + "/consultas/Conjuntos/vermanual/2/manual/manual2.pdf";
        this.step = 0;
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["pdfDefaultOptions"].assetsFolder = 'bleeding-edge';
    }
    updateClick() {
        devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()('El manual a sido actualizado');
    }
    ngOnInit() { }
    vermanual() {
        this.inAppBrowser.create(this.url);
    }
    actualizarmanual() {
        return this.step = 1;
    }
    guardarmanual() {
        devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_6___default()("El manual fue actualizado correctamente", 'sucess');
        return this.step = 0;
    }
};
ManualAdminComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
ManualAdminComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['form',] }]
};
ManualAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-manual-admin-component',
        template: _raw_loader_manual_admin_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manual_admin_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManualAdminComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_admin_agregar_conjunto_component_agregar_conjunto_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/agregar-conjunto-component/agregar-conjunto-component.component */ "1vwr");
/* harmony import */ var _components_admin_asamblea_admin_component_asamblea_admin_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/asamblea-admin-component/asamblea-admin-component.component */ "CqP2");
/* harmony import */ var _components_admin_claves_component_claves_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/claves-component/claves-component.component */ "O2Zf");
/* harmony import */ var _components_admin_manual_admin_component_manual_admin_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/manual-admin-component/manual-admin-component.component */ "vP+S");
/* harmony import */ var _components_admin_quejas_admin_component_quejas_admin_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/quejas-admin-component/quejas-admin-component.component */ "+XSt");
/* harmony import */ var _components_empleado_asistencia_empleado_component_asistencia_empleado_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/empleado/asistencia-empleado-component/asistencia-empleado-component.component */ "xjW2");
/* harmony import */ var _components_empleado_paquetes_empleado_component_paquetes_empleado_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/empleado/paquetes-empleado-component/paquetes-empleado-component.component */ "Ynzg");
/* harmony import */ var _components_general_acerca_nosotros_component_acerca_nosotros_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/general/acerca-nosotros-component/acerca-nosotros-component.component */ "sCKP");
/* harmony import */ var _components_general_home_component_home_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/general/home-component/home-component.component */ "vy5i");
/* harmony import */ var _components_general_ingreso_component_ingreso_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/general/ingreso-component/ingreso-component.component */ "6qKn");
/* harmony import */ var _components_general_manual_component_manual_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/general/manual-component/manual-component.component */ "CRn2");
/* harmony import */ var _components_general_netflix_component_netflix_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/general/netflix-component/netflix-component.component */ "Ft2i");
/* harmony import */ var _components_general_registro_component_registro_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/general/registro-component/registro-component.component */ "3a+L");
/* harmony import */ var _components_general_header_start_header_start_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/general/header-start/header-start.component */ "mmnP");
/* harmony import */ var _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/general/header/header.component */ "71FV");
/* harmony import */ var _components_admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/menu-admin/menu-admin.component */ "ZWMl");
/* harmony import */ var _components_empleado_menu_empleado_menu_empleado_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/empleado/menu-empleado/menu-empleado.component */ "3xyo");
/* harmony import */ var _components_residente_menu_residente_menu_residente_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/residente/menu-residente/menu-residente.component */ "v7xY");
/* harmony import */ var _components_residente_areas_residente_component_areas_residente_component_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/residente/areas-residente-component/areas-residente-component.component */ "CvwO");
/* harmony import */ var _components_residente_asamblea_residente_component_asamblea_residente_component_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/residente/asamblea-residente-component/asamblea-residente-component.component */ "gO5+");
/* harmony import */ var _components_residente_pagos_component_pagos_component_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/residente/pagos-component/pagos-component.component */ "ndJC");
/* harmony import */ var _components_residente_paquetes_residente_component_paquetes_residente_component_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/residente/paquetes-residente-component/paquetes-residente-component.component */ "1nk4");
/* harmony import */ var _components_residente_quejas_residente_component_quejas_residente_component_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/residente/quejas-residente-component/quejas-residente-component.component */ "H3GS");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! devextreme-angular */ "hYZE");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_general_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/general/noticias/noticias.component */ "v7mF");
/* harmony import */ var _components_general_empleados_empleados_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/general/empleados/empleados.component */ "4OOy");
/* harmony import */ var _components_admin_asamblea_Subir_Votos_asamblea_subir_votos_asamblea_subir_votos_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/admin/asamblea-Subir-Votos/asamblea-subir-votos/asamblea-subir-votos.component */ "CM64");
/* harmony import */ var _components_general_seleccion_conjunto_component_seleccion_conjunto_component_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/general/seleccion-conjunto-component/seleccion-conjunto-component.component */ "WcdF");
/* harmony import */ var _components_residente_resultados_residente_resultados_residente_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/residente/resultados-residente/resultados-residente.component */ "b2u3");
/* harmony import */ var _components_general_ingreso_perfiles_ingreso_perfiles_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/general/ingreso-perfiles/ingreso-perfiles.component */ "E609");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var _components_residente_lista_asambleas_residentes_lista_asambleas_residentes_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/residente/lista-asambleas-residentes/lista-asambleas-residentes.component */ "apFF");
/* harmony import */ var _components_general_chat_chat_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/general/chat/chat.component */ "gkjk");
/* harmony import */ var _components_residente_reservar_area_reservar_area_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/residente/reservar-area/reservar-area.component */ "pzLh");
/* harmony import */ var _components_admin_area_comun_admin_area_comun_admin_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/admin/area-comun-admin/area-comun-admin.component */ "FoRS");
/* harmony import */ var _components_admin_agregar_area_admin_agregar_area_admin_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/admin/agregar-area-admin/agregar-area-admin.component */ "R1kg");
/* harmony import */ var _components_admin_modificar_area_admin_modificar_area_admin_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/admin/modificar-area-admin/modificar-area-admin.component */ "msiT");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common/locales/es-CO */ "AQDP");
/* harmony import */ var _angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _components_empleado_nuevo_paquete_nuevo_paquete_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/empleado/nuevo-paquete/nuevo-paquete.component */ "Xqdh");
/* harmony import */ var _components_residente_reservacion_area_residente_reservacion_area_residente_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/residente/reservacion-area-residente/reservacion-area-residente.component */ "ArAk");
/* harmony import */ var _components_residente_modificar_reserva_area_modificar_reserva_area_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/residente/modificar-reserva-area/modificar-reserva-area.component */ "3pVO");
/* harmony import */ var _components_admin_lista_asambleas_admin_lista_asasamblea_admin_lista_asasamblea_admin_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/admin/lista-asambleas-admin/lista-asasamblea-admin/lista-asasamblea-admin.component */ "0ac8");
/* harmony import */ var _components_empleado_calendar_paquete_calendar_paquete_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/empleado/calendar-paquete/calendar-paquete.component */ "Enwz");














































Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es_CO__WEBPACK_IMPORTED_MODULE_45___default.a);





//ngx-extended-pdf-viwer
const routes = [
    {
        path: 'home',
        component: _components_general_home_component_home_component_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
    },
    {
        path: 'nuevo-conjunto',
        component: _components_admin_agregar_conjunto_component_agregar_conjunto_component_component__WEBPACK_IMPORTED_MODULE_5__["AgregarConjuntoComponent"]
    },
    {
        path: 'asamblea-admin',
        component: _components_admin_asamblea_admin_component_asamblea_admin_component_component__WEBPACK_IMPORTED_MODULE_6__["AsambleaAdminComponent"]
    },
    {
        path: 'claves',
        component: _components_admin_claves_component_claves_component_component__WEBPACK_IMPORTED_MODULE_7__["ClavesComponent"]
    },
    {
        path: 'manual-admin',
        component: _components_admin_manual_admin_component_manual_admin_component_component__WEBPACK_IMPORTED_MODULE_8__["ManualAdminComponent"]
    },
    {
        path: 'quejas-admin',
        component: _components_admin_quejas_admin_component_quejas_admin_component_component__WEBPACK_IMPORTED_MODULE_9__["QuejasAdminComponent"]
    },
    {
        path: 'asistencia-empleado',
        component: _components_empleado_asistencia_empleado_component_asistencia_empleado_component_component__WEBPACK_IMPORTED_MODULE_10__["AsistenciaEmpleadoComponent"]
    },
    {
        path: 'chat',
        component: _components_general_chat_chat_component__WEBPACK_IMPORTED_MODULE_39__["ChatComponent"]
    },
    {
        path: 'paquetes-empleado',
        component: _components_empleado_paquetes_empleado_component_paquetes_empleado_component_component__WEBPACK_IMPORTED_MODULE_11__["PaquetesEmpleadoComponent"]
    },
    {
        path: 'nuevo-paquete',
        component: _components_empleado_nuevo_paquete_nuevo_paquete_component__WEBPACK_IMPORTED_MODULE_46__["NuevoPaqueteComponent"]
    },
    {
        path: 'acerca-nosotros',
        component: _components_general_acerca_nosotros_component_acerca_nosotros_component_component__WEBPACK_IMPORTED_MODULE_12__["AcercaNosotrosComponent"]
    },
    {
        path: 'ingresob',
        component: _components_general_ingreso_component_ingreso_component_component__WEBPACK_IMPORTED_MODULE_14__["IngresoComponent"]
    },
    {
        path: 'manual',
        component: _components_general_manual_component_manual_component_component__WEBPACK_IMPORTED_MODULE_15__["ManualComponent"]
    },
    {
        path: 'netflix',
        component: _components_general_netflix_component_netflix_component_component__WEBPACK_IMPORTED_MODULE_16__["NetflixComponent"]
    },
    {
        path: 'registro',
        component: _components_general_registro_component_registro_component_component__WEBPACK_IMPORTED_MODULE_17__["RegistroComponent"]
    },
    {
        path: 'seleccion-conjunto',
        component: _components_general_seleccion_conjunto_component_seleccion_conjunto_component_component__WEBPACK_IMPORTED_MODULE_33__["SeleccionConjuntoComponent"]
    },
    {
        path: 'areas-residente',
        component: _components_residente_areas_residente_component_areas_residente_component_component__WEBPACK_IMPORTED_MODULE_23__["AreasResidenteComponent"]
    },
    {
        path: 'lista-asambleas-residentes',
        component: _components_residente_lista_asambleas_residentes_lista_asambleas_residentes_component__WEBPACK_IMPORTED_MODULE_38__["ListaAsambleasResidentesComponent"]
    },
    {
        path: 'asamblea-residente',
        component: _components_residente_asamblea_residente_component_asamblea_residente_component_component__WEBPACK_IMPORTED_MODULE_24__["AsambleaResidenteComponent"]
    },
    {
        path: 'ingreso-perfiles',
        component: _components_general_ingreso_perfiles_ingreso_perfiles_component__WEBPACK_IMPORTED_MODULE_35__["IngresoPerfilesComponent"]
    },
    {
        path: 'pagos',
        component: _components_residente_pagos_component_pagos_component_component__WEBPACK_IMPORTED_MODULE_25__["PagosComponent"]
    },
    {
        path: 'paquetes-residente',
        component: _components_residente_paquetes_residente_component_paquetes_residente_component_component__WEBPACK_IMPORTED_MODULE_26__["PaquetesResidenteComponent"]
    },
    {
        path: 'quejas-residente',
        component: _components_residente_quejas_residente_component_quejas_residente_component_component__WEBPACK_IMPORTED_MODULE_27__["QuejasResidenteComponent"]
    },
    {
        path: 'noticias',
        component: _components_general_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_30__["NoticiasComponent"]
    },
    {
        path: 'empleados',
        component: _components_general_empleados_empleados_component__WEBPACK_IMPORTED_MODULE_31__["EmpleadosComponent"]
    },
    {
        path: 'subir-votos-admin',
        component: _components_admin_asamblea_Subir_Votos_asamblea_subir_votos_asamblea_subir_votos_component__WEBPACK_IMPORTED_MODULE_32__["AsambleaSubirVotosComponent"]
    },
    {
        path: 'resultados-residente',
        component: _components_residente_resultados_residente_resultados_residente_component__WEBPACK_IMPORTED_MODULE_34__["ResultadosResidenteComponent"]
    },
    {
        path: 'reservar-area',
        component: _components_residente_reservar_area_reservar_area_component__WEBPACK_IMPORTED_MODULE_40__["ReservarAreaComponent"]
    },
    {
        path: 'area-comun-admin',
        component: _components_admin_area_comun_admin_area_comun_admin_component__WEBPACK_IMPORTED_MODULE_41__["AreaComunAdminComponent"]
    },
    {
        path: 'agregar-area',
        component: _components_admin_agregar_area_admin_agregar_area_admin_component__WEBPACK_IMPORTED_MODULE_42__["AgregarAreaAdminComponent"]
    },
    {
        path: '',
        redirectTo: 'ingreso',
        pathMatch: 'full'
    },
    {
        path: 'modificar-area',
        component: _components_admin_modificar_area_admin_modificar_area_admin_component__WEBPACK_IMPORTED_MODULE_43__["ModificarAreaAdminComponent"]
    },
    {
        path: 'mis-reservas',
        component: _components_residente_reservacion_area_residente_reservacion_area_residente_component__WEBPACK_IMPORTED_MODULE_47__["ReservacionAreaResidenteComponent"]
    },
    {
        path: 'modificar-reserva-area',
        component: _components_residente_modificar_reserva_area_modificar_reserva_area_component__WEBPACK_IMPORTED_MODULE_48__["ModificarReservaAreaComponent"]
    },
    {
        path: 'lista-asamblea-admin',
        component: _components_admin_lista_asambleas_admin_lista_asasamblea_admin_lista_asasamblea_admin_component__WEBPACK_IMPORTED_MODULE_49__["ListaAsasambleaAdminComponent"]
    },
    {
        path: 'ingre-apto',
        loadChildren: () => Promise.all(/*! import() | app-components-general-ingre-apto-ingre-apto-module */[__webpack_require__.e("common"), __webpack_require__.e("app-components-general-ingre-apto-ingre-apto-module")]).then(__webpack_require__.bind(null, /*! ../app/components/general/ingre-apto/ingre-apto.module */ "EsvC")).then(m => m.IngreAptoPageModule)
    },
    {
        path: 'ingreso',
        loadChildren: () => Promise.all(/*! import() | components-general-ingreso-app-ingreso-app-module */[__webpack_require__.e("common"), __webpack_require__.e("components-general-ingreso-app-ingreso-app-module")]).then(__webpack_require__.bind(null, /*! ./components/general/ingreso-app/ingreso-app.module */ "y6Xf")).then(m => m.IngresoAppPageModule)
    },
    {
        path: 'chatB',
        loadChildren: () => __webpack_require__.e(/*! import() | components-general-chatp-chatp-module */ "components-general-chatp-chatp-module").then(__webpack_require__.bind(null, /*! ./components/general/chatp/chatp.module */ "41D5")).then(m => m.ChatpPageModule)
    },
    {
        path: 'agregar-empleado',
        loadChildren: () => __webpack_require__.e(/*! import() | components-admin-agregar-empleado-agregar-empleado-module */ "components-admin-agregar-empleado-agregar-empleado-module").then(__webpack_require__.bind(null, /*! ./components/admin/agregar-empleado/agregar-empleado.module */ "fr1Z")).then(m => m.AgregarEmpleadoPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"] }),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxDataGridModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__["BrowserModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxCheckBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxNumberBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxButtonModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxAutocompleteModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxFormModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxTextAreaModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__["BrowserModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxSelectBoxModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxListModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxTemplateModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxFileUploaderModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxTextBoxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__["FormsModule"],
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_37__["NgxExtendedPdfViewerModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxRadioGroupModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxTabPanelModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__["BrowserModule"],
            devextreme_angular__WEBPACK_IMPORTED_MODULE_28__["DxCalendarModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_44__["NgCalendarModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [
            _components_residente_menu_residente_menu_residente_component__WEBPACK_IMPORTED_MODULE_22__["MenuResidenteComponent"],
            _components_admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_20__["MenuAdminComponent"],
            _components_empleado_menu_empleado_menu_empleado_component__WEBPACK_IMPORTED_MODULE_21__["MenuEmpleadoComponent"],
            _components_general_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
            _components_general_header_start_header_start_component__WEBPACK_IMPORTED_MODULE_18__["HeaderStartComponent"],
            _components_admin_agregar_conjunto_component_agregar_conjunto_component_component__WEBPACK_IMPORTED_MODULE_5__["AgregarConjuntoComponent"],
            _components_admin_asamblea_admin_component_asamblea_admin_component_component__WEBPACK_IMPORTED_MODULE_6__["AsambleaAdminComponent"],
            _components_admin_claves_component_claves_component_component__WEBPACK_IMPORTED_MODULE_7__["ClavesComponent"],
            _components_admin_manual_admin_component_manual_admin_component_component__WEBPACK_IMPORTED_MODULE_8__["ManualAdminComponent"],
            _components_admin_quejas_admin_component_quejas_admin_component_component__WEBPACK_IMPORTED_MODULE_9__["QuejasAdminComponent"],
            _components_empleado_asistencia_empleado_component_asistencia_empleado_component_component__WEBPACK_IMPORTED_MODULE_10__["AsistenciaEmpleadoComponent"],
            _components_empleado_paquetes_empleado_component_paquetes_empleado_component_component__WEBPACK_IMPORTED_MODULE_11__["PaquetesEmpleadoComponent"],
            _components_empleado_nuevo_paquete_nuevo_paquete_component__WEBPACK_IMPORTED_MODULE_46__["NuevoPaqueteComponent"],
            _components_general_acerca_nosotros_component_acerca_nosotros_component_component__WEBPACK_IMPORTED_MODULE_12__["AcercaNosotrosComponent"],
            _components_general_home_component_home_component_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _components_general_ingreso_component_ingreso_component_component__WEBPACK_IMPORTED_MODULE_14__["IngresoComponent"],
            _components_general_manual_component_manual_component_component__WEBPACK_IMPORTED_MODULE_15__["ManualComponent"],
            _components_general_netflix_component_netflix_component_component__WEBPACK_IMPORTED_MODULE_16__["NetflixComponent"],
            _components_general_registro_component_registro_component_component__WEBPACK_IMPORTED_MODULE_17__["RegistroComponent"],
            _components_residente_areas_residente_component_areas_residente_component_component__WEBPACK_IMPORTED_MODULE_23__["AreasResidenteComponent"],
            _components_residente_asamblea_residente_component_asamblea_residente_component_component__WEBPACK_IMPORTED_MODULE_24__["AsambleaResidenteComponent"],
            _components_residente_pagos_component_pagos_component_component__WEBPACK_IMPORTED_MODULE_25__["PagosComponent"],
            _components_residente_paquetes_residente_component_paquetes_residente_component_component__WEBPACK_IMPORTED_MODULE_26__["PaquetesResidenteComponent"],
            _components_residente_quejas_residente_component_quejas_residente_component_component__WEBPACK_IMPORTED_MODULE_27__["QuejasResidenteComponent"],
            _components_general_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_30__["NoticiasComponent"],
            _components_general_empleados_empleados_component__WEBPACK_IMPORTED_MODULE_31__["EmpleadosComponent"],
            _components_admin_asamblea_Subir_Votos_asamblea_subir_votos_asamblea_subir_votos_component__WEBPACK_IMPORTED_MODULE_32__["AsambleaSubirVotosComponent"],
            _components_general_seleccion_conjunto_component_seleccion_conjunto_component_component__WEBPACK_IMPORTED_MODULE_33__["SeleccionConjuntoComponent"],
            _components_residente_lista_asambleas_residentes_lista_asambleas_residentes_component__WEBPACK_IMPORTED_MODULE_38__["ListaAsambleasResidentesComponent"],
            _components_general_chat_chat_component__WEBPACK_IMPORTED_MODULE_39__["ChatComponent"],
            _components_residente_reservar_area_reservar_area_component__WEBPACK_IMPORTED_MODULE_40__["ReservarAreaComponent"],
            _components_admin_area_comun_admin_area_comun_admin_component__WEBPACK_IMPORTED_MODULE_41__["AreaComunAdminComponent"],
            _components_admin_agregar_area_admin_agregar_area_admin_component__WEBPACK_IMPORTED_MODULE_42__["AgregarAreaAdminComponent"],
            _components_admin_modificar_area_admin_modificar_area_admin_component__WEBPACK_IMPORTED_MODULE_43__["ModificarAreaAdminComponent"],
            _components_residente_reservacion_area_residente_reservacion_area_residente_component__WEBPACK_IMPORTED_MODULE_47__["ReservacionAreaResidenteComponent"],
            _components_residente_modificar_reserva_area_modificar_reserva_area_component__WEBPACK_IMPORTED_MODULE_48__["ModificarReservaAreaComponent"],
            _components_admin_lista_asambleas_admin_lista_asasamblea_admin_lista_asasamblea_admin_component__WEBPACK_IMPORTED_MODULE_49__["ListaAsasambleaAdminComponent"],
            _components_residente_reservacion_area_residente_reservacion_area_residente_component__WEBPACK_IMPORTED_MODULE_47__["ReservacionAreaResidenteComponent"],
            _components_empleado_calendar_paquete_calendar_paquete_component__WEBPACK_IMPORTED_MODULE_50__["CalendarPaqueteComponent"] // ojo
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'es-Co' }
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "vgNI":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/netflix-component/netflix-component.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-start titulo=\"Tus conjuntos\"></app-header-start>\n\n<ion-content padding class=\"vertical-center\">\n  <section class=\"ion-text-center\">\n    <ion-label color=\"medium\"> <i>Selecciona un conjunto</i> <br> <br> </ion-label>\n  </section>\n\n  <ion-card class=\"ion-text-center\" (click)=\"goConjunto(conjunto)\" *ngFor=\"let conjunto of getConjuntos()\">\n      <ion-card-title> {{conjunto.nombre}} </ion-card-title>\n      <ion-img src=\"/../../../../assets/icon/IconConjuntos/Edi.png\" alt=\"Conjunto\"></ion-img>\n    <br>\n  </ion-card>\n\n  <ion-card class=\"ion-text-center\" (click)=\"goAgregar()\">\n    <ion-img src=\"./../../../../assets/icon/IconConjuntos/add.png\" alt=\"Agregar\"></ion-img>\n  </ion-card>\n\n\n</ion-content>");

/***/ }),

/***/ "vy5i":
/*!*******************************************************************************!*\
  !*** ./src/app/components/general/home-component/home-component.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home-component.component.html */ "R2Yd");
/* harmony import */ var _home_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-component.component.scss */ "wQ6E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home-component',
        template: _raw_loader_home_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "w8Zv":
/*!***********************************************************!*\
  !*** ./src/app/Services/propuestas/propuestas.service.ts ***!
  \***********************************************************/
/*! exports provided: PropuestasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropuestasService", function() { return PropuestasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");




let PropuestasService = class PropuestasService {
    constructor(http) {
        this.http = http;
    }
    setPropuestaAbierta(IdPropuesta) {
        window.localStorage['propuestaAbierta'] = IdPropuesta.toString();
    } // setPropuestaAbierta
    getPropuestaAbierta() {
        this.propuestaAbierta = Number(window.localStorage['propuestaAbierta'] || -1);
        if (this.propuestaAbierta == -1)
            return null;
        else
            return this.propuestaAbierta;
    } // getPropuestaAbierta
    getPropuestaUrl(url) {
        return this.http.get(url);
    } // end getPropuestaUrl
    cargarPropuestas(numConjunto, numApto, numAsamblea) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getPropuestaUrl(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["IPRESIDENTES"] + "consultas/asambleas/mostrarPropuestas/" + numConjunto.toString() + "/" + numApto.toString() + "/" + numAsamblea.toString())
                .subscribe(respuesta => {
                this.propuestas = respuesta;
            });
        });
    } // end cargarPropuestas
    getPropuestas() {
        return this.propuestas;
    } // end getPropuestas
}; // end PropuestasService
PropuestasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PropuestasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PropuestasService);



/***/ }),

/***/ "wQ6E":
/*!*********************************************************************************!*\
  !*** ./src/app/components/general/home-component/home-component.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wW1x":
/*!***********************************************************************!*\
  !*** ./src/app/components/general/empleados/empleados.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color1 {\n  color: var(--ion-color-residente-txt);\n}\n\n.basura {\n  color: var(--ion-color-residente);\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VtcGxlYWRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiZW1wbGVhZG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yMXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZS10eHQpO1xufVxuXG4uYmFzdXJhe1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcmVzaWRlbnRlKTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcblxufSJdfQ== */");

/***/ }),

/***/ "xIPN":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/residente/asamblea-residente-component/asamblea-residente-component.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{getAsamblea().tema}}\" menu=NO routeBack=\"/lista-asambleas-residentes\"></app-header>\n\n<ion-content>\n    <ion-slides pager=\"true\" #theSlides>\n        <ion-slide *ngFor=\"let propuesta of getPropuestas()\">\n            <div style=\"overflow:scroll\" class=\"content-div\">\n                <ion-textarea> <br> <i>{{propuesta.descripcion}}</i> </ion-textarea>\n                <div *ngFor=\"let opcion of propuesta.opciones\">\n                    <!--<ion-card color=\"{{getColorCards(propuesta)}}\" (click)=\"votar(opcion,propuesta)\">-->\n                    <ion-card color=\"residente\">\n                        <ion-card-content>\n                            {{opcion.nombre}}\n                        </ion-card-content>\n                    </ion-card>\n                </div>\n            </div>\n            <!--<div>\n                <ion-row>\n                <ion-col>\n                <ion-button id=\"izquierda\" color=\"residente\" (click)=\"prev(theSlides)\">\n                    <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" color=\"residente-txt\"></ion-icon>\n                </ion-button>\n                </ion-col>\n                <ion-col>\n                <ion-button id=\"derecha\" color=\"residente\" (click)=\"next(theSlides)\">\n                    <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\" color=\"residente-txt\"></ion-icon>\n                </ion-button>\n                </ion-col>\n            </ion-row>\n            </div>-->\n        </ion-slide>\n        <ion-slide>\n            <br><ion-label><strong>Resultados</strong></ion-label>\n            <!--<ion-card *ngFor=\"let propuesta of getPropuestas()\">\n                <h4> Propuesta: {{getPropuesta()}} </h4>\n                <h5> Cantidad de Votos: {{getTotalVotaciones()}}</h5>\n                <h5> Ganador:  </h5>\n            </ion-card>-->\n        </ion-slide>\n    </ion-slides>\n</ion-content>");

/***/ }),

/***/ "xjW2":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/empleado/asistencia-empleado-component/asistencia-empleado-component.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AsistenciaEmpleadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaEmpleadoComponent", function() { return AsistenciaEmpleadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_asistencia_empleado_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./asistencia-empleado-component.component.html */ "nCiP");
/* harmony import */ var _asistencia_empleado_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asistencia-empleado-component.component.scss */ "AWPZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AsistenciaEmpleadoComponent = class AsistenciaEmpleadoComponent {
    constructor() { }
    ngOnInit() { }
};
AsistenciaEmpleadoComponent.ctorParameters = () => [];
AsistenciaEmpleadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-asistencia-empleado-component',
        template: _raw_loader_asistencia_empleado_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_asistencia_empleado_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AsistenciaEmpleadoComponent);



/***/ }),

/***/ "yTjD":
/*!*****************************************************************!*\
  !*** ./src/app/components/general/header/header.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-size: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "yYXb":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/ingreso-perfiles/ingreso-perfiles.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"success\"  routeBack=\"/netflix\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div id=\"header\">\n    <h1 color =\"residente\">RESIDENTES</h1>\n    <label>Ingresa tu apartamento</label>\n  </div>\n\n  <form id=\"form\">\n    <ion-input class=\"entrada\" placeholder=\"Usuario - Apartamento\"></ion-input><br><br>\n    <ion-input class=\"entrada\" type=\"password\" placeholder=\"Contraseña\"></ion-input>\n    <br><br><br><br>\n    <ion-card routerLink=\"/noticias\" color= \"residente\" class=\"ion-text-center\">\n      <ion-card-header>\n          <ion-card-subtitle>ACEPTAR </ion-card-subtitle>   \n      </ion-card-header>\n    </ion-card>  \n  </form>\n</ion-content>");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "z89l":
/*!***********************************************************************!*\
  !*** ./src/app/Services/agregar-conjunto/agregar-conjunto.service.ts ***!
  \***********************************************************************/
/*! exports provided: Conjunto, AgregarConjuntoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Conjunto", function() { return Conjunto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarConjuntoService", function() { return AgregarConjuntoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Conjunto {
}
let AgregarConjuntoService = class AgregarConjuntoService {
    constructor() {
        this.conjunto = [{
                "nombre": "Manzanares",
                "direccion": "Carrera 7 #2"
            },
            {
                "nombre": "Arces",
                "direccion": "Carrera 113"
            }
        ];
    }
    getConjunto() {
        return this.conjunto;
    }
};
AgregarConjuntoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgregarConjuntoService);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zhGR":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/menu-admin/menu-admin.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"menu-admin\" contentId=\"main-admin\">\n  <ion-header>\n    <ion-toolbar color=\"residente\">\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item routerLink=\"/noticias\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"newspaper-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Noticias\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/claves\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"key-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Admin de Claves\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/asamblea-admin\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"people-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Asamblea\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/area-comun-admin\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"business-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Áreas Comunes\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/empleados\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"chatbubbles-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Mensajería\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/manual-admin\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"document-text-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Manual de Convivencia\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/quejas-admin\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"sad-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Quejas\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/netflix\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"sync-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Cambiar Conjuntos\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/acerca-nosotros\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"information-circle-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Sobre Residentes\n        </ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/ingreso\" detail=\"false\">\n        <ion-icon slot=\"start\" name= \"log-out-outline\" color=\"residente-txt\"> </ion-icon>\n        <ion-label>\n          Cerrar Sesión\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"main-admin\"></ion-router-outlet>");

/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zq5V":
/*!***************************************************************************************!*\
  !*** ./src/app/components/general/netflix-component/netflix-component.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  left: 32%;\n  width: 27%;\n  box-shadow: none !important;\n}\n\nion-img {\n  width: 100%;\n  height: 50%;\n}\n\nion-card-title {\n  font-size: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25ldGZsaXgtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSiIsImZpbGUiOiJuZXRmbGl4LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIGxlZnQ6IDMyJTtcbiAgICB3aWR0aDogMjclO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IDEwMCU7XG59XG5cbiJdfQ== */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map