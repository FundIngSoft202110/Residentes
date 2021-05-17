
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule, DxFormComponent } from 'devextreme-angular';
import { AppComponent } from 'src/app/app.component';
import notify from 'devextreme/ui/notify';
import { Usuario,RegistroServicioService } from '../../../Services/registro-servicio/registro-servicio.service';
import { NavController } from '@ionic/angular';
import { HostListener } from '@angular/core';



@Component({
    selector: 'app-registro-component',
    templateUrl: './registro-component.component.html',
    styleUrls: ['./registro-component.component.scss'],
})

export class RegistroComponent implements OnInit {
    labelL ="top";
    respuestapost:any;
    usuariosbase:any;
    usuario: Usuario = new Usuario();
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
    linkGuardado ="/noticias";
    constructor(private navCtrl: NavController, private RegistroServicioService: RegistroServicioService) {
        this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
        this.roles=[
            "Residente",
            "Empleado",
            "Administrador"
        ]
        

    }

    ngOnInit() {
       this.getUsarios();
    }

    public getUsarios() {
        
        this.RegistroServicioService.getUsario("http://192.168.76.71:8080/BackendResidentes/consultas/personas/usuario/$:{usario.us}")
            .subscribe(respuesta => {
                this.usuariosbase=respuesta;
                
        })
    }

    public postNuevo() {
        
        this.RegistroServicioService.postUsuarioNuevo("http://192.168.76.71:8080/BackendResidentes/consultas/NuevoUsuario",this.usuario)
            .subscribe(respuesta => {
                console.log(respuesta);
                this.respuestapost=respuesta;
                 
        })
    }

    passwordComparison = () => {
       
        return this.form.instance.option("formData").Contrasena;
    };

    checkComparison() {
        return true;
    }

    // asyncValidation(params) {
    //     return sendRequest(params.value);
    // }

    onFormSubmit = function (e) {
        console.log("aca esta",this.usuario);
        this.postNuevo();
        console.log("respuesta post",this.respuestapost);
        notify({
            message: "Se ha registrado con exito",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);

        e.preventDefault();
        
        
        
       
    }

    goIngreso() {
        this.navCtrl.navigateForward("/ingreso");
    }
  

}



