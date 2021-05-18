import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { HttpClient} from '@angular/common/http';
import {NuevaArea,AgregarAreaAdminServiceService} from '../../../Services/AgregarAreaAdmin/agregar-area-admin-service.service';
import {ConjuntosService} from '../../../Services/conjuntos/conjuntos.service'
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
    areaComun: any;
    Respuesta:any;
    nuevaArea: NuevaArea;
	tipo: string[];
    status = ["Deshabilitado","Habilitado"];
    conjuntoA : any;

    buttonOptions1: any = {
        text: "Agregar Horario",
        type: "success",
        useSubmitBehavior: true
    }
    buttonOptions2: any = {
        text: "Aceptar",
        type: "success",
        useSubmitBehavior: true
    }
    
    
   
    constructor(private AgregarAreaAdminService: AgregarAreaAdminServiceService, conjunto: ConjuntosService) {
        
		this.tipo = AgregarAreaAdminService.getTipo();
        this.conjuntoA= conjunto.getConjuntoActivo().id;
        
    }
    ngOnInit() {
      
    } 

    public postAreaComun(){
        this.AgregarAreaAdminService.postAreaNueva("http://192.168.76.71:8080/BackendResidentes/consultas/AreasComunes/NuevaArea",NuevaArea)
        .subscribe(respuesta => {
            console.log(respuesta);
            this.Respuesta =respuesta;
            })
    }

    public GetAreasComunes(){
        this.AgregarAreaAdminService.getAreasComunes("http://192.168.76.71:8080/BackendResidentes/consultas/AreasComunes/areaEspecifica/conjunto/${this.conjuntoA}/nomArea/${nuevaArea.NombreDelArea}")
        .subscribe(
            respuesta=>{
                this.areaComun = respuesta;
            }
        )
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
   
 
}