
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
import { PersonasService } from 'src/app/Services/personas/personas.service';




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
    
    usario: any;
    constructor(private navCtrl: NavController, private RegistroServicioService: RegistroServicioService,private personasService:PersonasService) {
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

    public getUsarios(usu:string) {
        console.log("usu", usu);
        this.RegistroServicioService.getUsario(IPRESIDENTESA+"/consultas/personas/usuario/"+usu)
            .subscribe(respuesta => {
                this.usuariosbase=respuesta;
                console.log("usu base",this.usuariosbase);
                
        })
    }

    public postNuevo() {
        
        this.RegistroServicioService.postUsuarioNuevo(IPRESIDENTESA+"/consultas/personas/NuevoUsuario",this.usuario)
            .subscribe(respuesta => {
               
               
                this.respuestapost=respuesta;
                this.noti=this.respuestapost.respuesta;
                 console.log("este el post",this.respuestapost);

                 
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
       
        this.post();
         
        
      
        
        
        
       
    } 
   
   async post(){
        this.postNuevo();
        console.log("posteado");
        await this.waitBD();
        console.log("este", this.usuario.usuario);
        this.getUsarios(this.usuario.usuario);
        console.log("pide usuariio");
        await this.waitBD();
        console.log("holiii22",this.usuariosbase);
        console.log("respuesta post",this.respuestapost);
        //cambiar por el alert de sebas
        notify(this.noti,'sucess');
    
       console.log("ID",this.usuariosbase.idPersona);
        this.personasService.setPersonaActiva2(this.usuariosbase.idPersona,this.usuariosbase.rolConjunto);
        this.navCtrl.navigateForward("/netflix");
    }

    async waitBD(){
        await new Promise(resolve => setTimeout(resolve, 1100));
      } // end waitBD

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




