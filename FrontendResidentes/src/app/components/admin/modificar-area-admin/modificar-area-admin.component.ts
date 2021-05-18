import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {ModificarAreaAdminService, NuevaArea } from '../../../Services/modificarAreaAdmin/modificar-area-admin.service';
import { NgModule, ViewChild, enableProdMode } from '@angular/core';
import {ConjuntosService} from '../../../Services/conjuntos/conjuntos.service'
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
@Component({
  selector: 'app-modificar-area-admin',
  providers: [ModificarAreaAdminService],
  templateUrl: './modificar-area-admin.component.html',
  styleUrls: ['./modificar-area-admin.component.scss'],
})
export class ModificarAreaAdminComponent implements OnInit {
    @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  
    estado: any;
    nuevaArea: NuevaArea;
	tipo: string[];
<<<<<<< HEAD
=======
    respueta: any;
    disponibles : any;
    conjuntoA: any;
   
    buttonOptions1: any = {
        text: "Modificar Horario",
        type: "success",
        useSubmitBehavior: true
    }

    buttonOptions2: any = {
        text: "Guardar/Modificar",
        type: "success",
        useSubmitBehavior: true
    }
   
>>>>>>> dbb5a794c21bcaaf2b1aa85f57f3eeea1e25bb29
    
   
    constructor(private service: ModificarAreaAdminService, conjunto: ConjuntosService) {
        this.nuevaArea = service.getNuevaArea();
		this.tipo = service.getTipo();
        this.conjuntoA= conjunto.getConjuntoActivo().id;
        
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
// modificar el path para que mande el area comun id
  public modificarArea(){
      this.service.putAreaComun("http://192.168.76.71:8080/BackendResidentes/consultas/AreasComunes/modificarAreaEspecifica/conjunto/${this.conjuntoA}/area/${}",this.nuevaArea)
      .subscribe(respueta=>{this.respueta= respueta });
  }

  // metodo get de el area comun con la pantalla area comun admin
  public traerDatos(){
      this.service.getAreaComun("http://192.168.76.71:8080/BackendResidentes/consultas/AreasComunes/modificarAreaEspecifica/conjunto/${this.conjuntoA}/area/${}") //arreglar el path
      .subscribe(respuesta=>{
          this.respueta = respuesta
      })
  }
}
