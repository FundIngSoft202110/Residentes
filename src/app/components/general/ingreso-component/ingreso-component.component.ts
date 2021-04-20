
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { Usuario, IngresoService } from '../../../Services/IngresoServ/ingreso.service';
import {
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    DxAutocompleteModule,
    DxFormComponent
} from 'devextreme-angular';
import { NavController } from '@ionic/angular';

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
}

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
}


@Component({
    selector: 'app-ingreso-component',
    templateUrl: './ingreso-component.component.html',
    styleUrls: ['./ingreso-component.component.scss'],
})
export class IngresoComponent implements OnInit {

    @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent
    password = "";
    passwordOptions: any = {
        mode: "password",
        value: this.password
    };

    usuario: Usuario;


    buttonOptions: any = {
        text: "Ingresar",
        type: "success",
        useSubmitBehavior: true
    }

    passwordComparison = () => {
        return this.form.instance.option("formData").Password;
    };

    checkComparison() {
        return true;
    }

    constructor(private navCtrl: NavController, private router: Router, service: IngresoService) {
        this.usuario = service.getUsuario();
    }

    asyncValidation(params) {
        return sendRequest(params.value);
    }

    asyncValidationContra(params) {
        return sendRequestContra(params.value);
    }



    onFormSubmit = function (e) {
        notify({
            message: "Usted ha ingresado a Residentes",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);

        e.preventDefault();
        if (admin == 1) {
            this.navCtrl.navigateForward("/netflix");
        } else {
            this.navCtrl.navigateForward("/home");
        }

    }


    finish() {

        this.navCtrl.navigateForward("/netflix");
    }

    goToRegister() {
        this.navCtrl.navigateForward("/registro");
    }
    ngOnInit() { }

}
