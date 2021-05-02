
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule, DxFormComponent } from 'devextreme-angular';
import { AppComponent } from 'src/app/app.component';
import notify from 'devextreme/ui/notify';
import { RegistroServicioService } from '../../../Services/registro-servicio/registro-servicio.service';
import { NavController } from '@ionic/angular';
import { HostListener } from '@angular/core';

// const sendRequest = function (value) {
//     const validEmail = "m@hotmail.com";
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             resolve(value === validEmail);
//         }, 1000);
//     });
// }

@Component({
    selector: 'app-registro-component',
    templateUrl: './registro-component.component.html',
    styleUrls: ['./registro-component.component.scss'],
})

export class RegistroComponent implements OnInit {
    labelL ="top";
    usuario: any = [];
    @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent
    password = "";
    passwordOptions: any = {
        mode: "password",
        value: this.password
    };

    maxDate: Date = new Date();
    namePattern: any = /^[^0-9]+$/;
    
    
    phonePattern: any;
    phoneRules: any = {
        X: /[1-9]/
    }
   

    
    roles : string[];
    link ="/ingreso";
    linkGuardado ="/netflix";
    constructor(private navCtrl: NavController, private RegistroServicioService: RegistroServicioService) {
        this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
        this.roles=[
            "Residente",
            "Empleado",
            "Administrador"
        ]

    }

    ngOnInit() {

    }

    public getUsarios() {
        
        // this.RegistroServicioService.getUsario("http://10.211.55.4:8080/BackendResidentes/consultas/personas/rol/residente")
        //     .subscribe(respuesta => {
        //         this.usuario = respuesta;
        // })
    }

    passwordComparison = () => {
       
        return this.form.instance.option("formData").Contraseña;
    };

    checkComparison() {
        return true;
    }

    // asyncValidation(params) {
    //     return sendRequest(params.value);
    // }

    onFormSubmit = function (e) {
        notify({
            message: "Se ha registrado con exito",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);

        e.preventDefault();
        // aca se debe enviar todo al back
    }

    goIngreso() {
        this.navCtrl.navigateForward("/ingreso");
    }


}



