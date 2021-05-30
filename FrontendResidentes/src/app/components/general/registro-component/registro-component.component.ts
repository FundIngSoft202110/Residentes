
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule, DxFormComponent } from 'devextreme-angular';
import { AppComponent } from 'src/app/app.component';
import notify from 'devextreme/ui/notify';
import { Usuario,RegistroServicioService } from '../../../Services/registro-servicio/registro-servicio.service';
import { NavController } from '@ionic/angular';
import { HostListener } from '@angular/core';
import { IPRESIDENTES, IPRESIDENTESA } from 'src/app/constants';




@Component({
    selector: 'app-registro-component',
    templateUrl: './registro-component.component.html',
    styleUrls: ['./registro-component.component.scss'],
})

export class RegistroComponent implements OnInit {
    labelL ="top";
    noti:any;
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
        //this.getUsarios();

    }

    ngOnInit() {
      // this.getUsarios();
       console.log("holiii",this.usuariosbase)
    }

    // public getUsarios() {
        
    //     this.RegistroServicioService.getUsario(IPRESIDENTESA+"/consultas/personas/usuario/"+this.usuariosbase.usuario)
    //         .subscribe(respuesta => {
    //             this.usuariosbase=respuesta;
    //             console.log(this.usuariosbase);
                
    //     })
    // }

    public postNuevo() {
        
        this.RegistroServicioService.postUsuarioNuevo(IPRESIDENTESA+"/consultas/personas/NuevoUsuario",this.usuario)
            .subscribe(respuesta => {
                console.log(respuesta);
              //  this.getUsarios();
                console.log("holiii22",this.usuariosbase)
                this.respuestapost=respuesta;
               this.noti=this.respuestapost.respuesta;

                 
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
        //cambiar por el alert de sebas
        alert(this.noti);

      
        
        
        
       
    } 
    

    goIngreso() {
        this.navCtrl.navigateForward("/ingreso");
    }
    // async eliminarPaquete(paquete:any){
    //     this.presentAlertConfirm(paquete);
    //   }
    
    //   async presentAlertConfirm(paquete:any) {
    //     const alert = await this.alertController.create({
    //       cssClass: 'my-custom-class',
    //       header: 'Confirmación',
    //       message: '¿Está seguro que desea eliminar el paquete ' + paquete.num + '?',
    //       buttons: [
    //         {
    //           text: 'Cancelar',
    //           role: 'cancel',
    //           cssClass: 'secondary',
    //           handler: (blah) => {
    //           }
    //         }, {
    //           text: 'Aceptar',
    //           handler: () => {
    //             this.paquetesService.elimnarPaquete(this.conjuntoActivo, this.servIngAptoService.getIdApto(), paquete.paquete.paquetePK.idPaqueete);
    //             this.paquetes = [];
    //             this.paquetesSer = [];
    //             this.cargarAptos(1);
    //           }
    //         }
    //       ]
    //     });
  

}



