import {Component, OnInit, Output } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {AgregarAreaAdminServiceService, NuevaArea, AreaComunPK} from '../../../Services/AgregarAreaAdmin/agregar-area-admin-service.service';
import{ConjuntosService} from '../../../Services/conjuntos/conjuntos.service'
import { NgModule, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxAutocompleteModule,
         DxFormComponent
       } from 'devextreme-angular';
import { NavController } from '@ionic/angular';


const sendRequest = function(value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(value === validEmail);
        }, 1000);
    });    
}

@Component({
  selector: 'app-agregar-area-admin',
  providers: [AgregarAreaAdminServiceService],
  templateUrl: './agregar-area-admin.component.html',
  styleUrls: ['./agregar-area-admin.component.scss'],
})

export class AgregarAreaAdminComponent implements OnInit{
    
    @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  
    nuevaArea: NuevaArea = new NuevaArea();
    areacomunPK: AreaComunPK = new AreaComunPK();
	tipo: string[];
    label ="top";
    linkAgregarHora="agregar-fecha";
    respuesta : any;
    
    
     
    constructor(private service: AgregarAreaAdminServiceService, private navCtrl: NavController, conjunto:ConjuntosService) {
		this.tipo = service.getTipo();
        this.areacomunPK.conjuntoIdConjunto=conjunto.getConjuntoActivo();
        this.nuevaArea.areacomunPK=this.areacomunPK;
        this.nuevaArea.estado="H";
    }
   
    onFormSubmit = function(e) {
        notify({
            message: "Se ha agregado el área común",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
    }
    ngOnInit() {}

    goToRegister() {
        
      }
      public mandarArea(){
      
        console.log("holiii",this.nuevaArea);
         this.service.postAreaNueva("http://192.168.76.71:8080/BackendResidentes/consultas/AreasComunes/NuevaArea",this.nuevaArea)
       .subscribe(respuesta=> {
        console.log("lo agrego ???",respuesta);    
        this.respuesta = respuesta;
        console.log("respuesta:",this.respuesta);   
        // si la agrega pero no me muestra la respuesta
    })

      this.navCtrl.navigateForward(this.linkAgregarHora);
      }
}