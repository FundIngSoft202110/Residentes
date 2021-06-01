(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-general-chatp-chatp-module"],{

/***/ "41D5":
/*!**********************************************************!*\
  !*** ./src/app/components/general/chatp/chatp.module.ts ***!
  \**********************************************************/
/*! exports provided: ChatpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatpPageModule", function() { return ChatpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chatp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatp-routing.module */ "n++s");
/* harmony import */ var _chatp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatp.page */ "PgjL");







let ChatpPageModule = class ChatpPageModule {
};
ChatpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chatp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatpPageRoutingModule"]
        ],
        declarations: [_chatp_page__WEBPACK_IMPORTED_MODULE_6__["ChatpPage"]]
    })
], ChatpPageModule);



/***/ }),

/***/ "HtoF":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/general/chatp/chatp.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"residente\">\n  </ion-toolbar >\n  <ion-toolbar color=\"light\">\n      <ion-buttons slot=\"start\" (click)=\"goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" color=\"residente-txt\"></ion-icon>\n      </ion-buttons>\n    <ion-title slot=\"start\" color=\"residente-txt\">{{chatid}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row *ngFor= \"let mensaje of mensajes\">\n            \n            <ion-col size=\"9\" *ngIf=\" ((usuario !== 'EMPLEADO') && (mensaje.rolempleado === 'remitente')) || ((usuario === 'EMPLEADO') && (mensaje.rolempleado === 'destinatario')) \" class= \"mensaje otro-mensaje\">\n                \n                <span>\n                    {{mensaje.contenido}}\n                </span>\n                <div class=\"time\" text-right><br>\n                    {{mensaje.fecha_hora | date:'short'}}\n                </div>\n            </ion-col>\n\n            <ion-col offset=\"3\" size=\"9\"  *ngIf=\" ((usuario !== 'EMPLEADO') && (mensaje.rolempleado === 'destinatario')) || ((usuario === 'EMPLEADO') && (mensaje.rolempleado === 'remitente'))  \" class= \"mensaje mi-mensaje\">\n                \n                <span>\n                    {{mensaje.contenido}}\n                </span>\n                <div class=\"time\" text-right><br>\n                    {{mensaje.fecha_hora | date:'short'}}\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n    <ion-toolbar light=\"light\">\n        <ion-row align-items-center no-padding>\n            <ion-col size=\"10\"> \n                <textarea autosize maxRows=\"2\" maxlength = \"240\" [(ngModel)]=\"newMsg\" class=\"mensaje-entrada\"></textarea>\n            </ion-col>\n            <ion-col size=\"2\"> \n                <ion-card  class=\"msg-btn\" \n                (click)=\"enviarMensaje()\" [disabled]=\"newMsg === ''\">\n                <ion-icon  name=\"send-outline\" style=\"zoom:2.0;\"></ion-icon>\n                </ion-card> \n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "LOiH":
/*!**********************************************************!*\
  !*** ./src/app/components/general/chatp/chatp.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mensaje {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.otro-mensaje {\n  background: #e5e5ea;\n  color: #000000;\n}\n\n.mi-mensaje {\n  background: var(--ion-color-residente);\n  color: #000000;\n}\n\n.time {\n  color: #7E7A79;\n  float: right;\n  font-size: small;\n}\n\n.mensaje-entrada {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.msg-btn {\n  --padding-start: 0.2em;\n  --padding-end: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NoYXRwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksc0NBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJjaGF0cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVuc2FqZXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi5vdHJvLW1lbnNhamV7XG4gICAgYmFja2dyb3VuZDogI2U1ZTVlYTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1pLW1lbnNhamV7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXJlc2lkZW50ZSk7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50aW1le1xuICAgIGNvbG9yOiAjN0U3QTc5O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IHNtYWxsOztcbn1cblxuLm1lbnNhamUtZW50cmFkYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG5cbn1cblxuLm1zZy1idG57XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjJlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxZW07XG59Il19 */");

/***/ }),

/***/ "PgjL":
/*!********************************************************!*\
  !*** ./src/app/components/general/chatp/chatp.page.ts ***!
  \********************************************************/
/*! exports provided: ChatpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatpPage", function() { return ChatpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chatp_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chatp.page.html */ "HtoF");
/* harmony import */ var _chatp_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatp.page.scss */ "LOiH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_Services_chatserv_chat_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/chatserv/chat-servicio.service */ "fZqx");
/* harmony import */ var src_app_Services_lstChatServ_lst_chat_servicio_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/lstChatServ/lst-chat-servicio.service */ "aTLU");
/* harmony import */ var src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/personas/personas.service */ "3xD8");








let ChatpPage = class ChatpPage {
    constructor(serChats, chatServ, personasService, navCtrl) {
        this.serChats = serChats;
        this.chatServ = chatServ;
        this.personasService = personasService;
        this.navCtrl = navCtrl;
        this.mensajes = [];
        this.usuActual = '';
        this.usuDesti = '';
        this.newMsg = '';
        this.user = "RESIDENTE";
    }
    ngOnInit() {
        console.log("foasdjfidsajf");
        this.chatn = this.serChats.getChatN();
        this.chatid = this.serChats.getChatId();
        console.log(this.chatn + "qaui");
        console.log(this.chatid + "id");
        this.usuario = this.personasService.getUserActivo();
        this.usuDesti = 'María';
        this.usuActual = 'David';
        this.mensajes = this.chatServ.getMsjs();
    }
    enviarMensaje() {
        if (this.usuario == "RESIDENTE") {
            this.chatServ.addChats(this.newMsg, new Date().getTime(), "destinatario", "X");
        }
        else {
            this.chatServ.addChats(this.newMsg, new Date().getTime(), "remitente", "X");
        }
        this.mensajes = this.chatServ.getMsjs();
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(200);
        });
    }
    getUser() {
        return this.user;
        //return this.personasService.getPersonaActiva().rolConjunto;
    }
    goBack() {
        this.navCtrl.navigateForward("/empleados");
    }
};
ChatpPage.ctorParameters = () => [
    { type: src_app_Services_lstChatServ_lst_chat_servicio_service__WEBPACK_IMPORTED_MODULE_6__["LstChatServicioService"] },
    { type: src_app_Services_chatserv_chat_servicio_service__WEBPACK_IMPORTED_MODULE_5__["ChatServicioService"] },
    { type: src_app_Services_personas_personas_service__WEBPACK_IMPORTED_MODULE_7__["PersonasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ChatpPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }],
    routeBack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChatpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chatp',
        template: _raw_loader_chatp_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chatp_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatpPage);



/***/ }),

/***/ "n++s":
/*!******************************************************************!*\
  !*** ./src/app/components/general/chatp/chatp-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ChatpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatpPageRoutingModule", function() { return ChatpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chatp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatp.page */ "PgjL");




const routes = [
    {
        path: '',
        component: _chatp_page__WEBPACK_IMPORTED_MODULE_3__["ChatpPage"]
    }
];
let ChatpPageRoutingModule = class ChatpPageRoutingModule {
};
ChatpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatpPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=components-general-chatp-chatp-module.js.map