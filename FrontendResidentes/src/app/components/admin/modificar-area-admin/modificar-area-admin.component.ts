import { Component, OnInit , Input} from '@angular/core';
import notify from 'devextreme/ui/notify';
import {ModificarAreaAdminService, NuevaArea } from '../../../Services/modificarAreaAdmin/modificar-area-admin.service';
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
import { ThisReceiver } from '@angular/compiler';
import { IPRESIDENTESA } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AreaComunAdminService } from 'src/app/Services/AreaComunAdmin/area-comun-admin.service';
@Component({
  selector: 'app-modificar-area-admin',
  providers: [ModificarAreaAdminService],
  templateUrl: './modificar-area-admin.component.html',
  styleUrls: ['./modificar-area-admin.component.scss'],
})
export class ModificarAreaAdminComponent implements OnInit {
    
     nombreArea :any;
    nuevaArea : any;
    nuevaAreas: NuevaArea = new NuevaArea();
    estado: any;
    
	tipo: string[];
  top="top"
  conjuntoA : any;
  respuesta: any;
  horaDeApertura: number[];
  horaDeCierre: number[];
  diasDisponibles: string[];
  aux: any;
  editEstado: string[] = [
    "Disponible",
    "Cerrada"
];
   
    constructor(private service: ModificarAreaAdminService, private navCtrl: NavController, private conjunto:ConjuntosService,private areaA: AreaComunAdminService) {
        
		this.tipo = service.getTipo();
    this.horaDeApertura = service.getHoraDeApertura();
        this.horaDeCierre = service.getHoraDeCierre();
        this.diasDisponibles = service.getDiasDisponibles();
        this.conjuntoA= conjunto.getConjuntoActivo();
        this.nombreArea=areaA.getareaComun();
        this.nuevaArea=this.traerAreaEspecifica();
        console.log("holaaaa",this.nuevaArea);
        
    }


    
    mandarAreaComun(){
        this.navCtrl.navigateForward("/area-comun-admin"); 
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
  ngOnInit() {
    this.traerAreaEspecifica();
  }
  
 modificarArea(){
   console.log("id", this.nuevaArea.areacomunPK.idArea);
    this.service.putAreaComun(IPRESIDENTESA+"/consultas/AreasComunes/modificarAreaEspecifica/conjunto/"+this.conjuntoA+"/area/"+this.nuevaArea.areacomunPK.idArea,this.nuevaArea)
    .subscribe(respuesta=>{
      this.respuesta=respuesta
    console.log(this.respuesta);
  })
  }

  traerAreaEspecifica(){
    this.service.traerArea(IPRESIDENTESA+"/consultas/AreasComunes/areaEspecifica/conjunto/"+this.conjuntoA+"/nomArea/"+this.nombreArea)
    .subscribe(respuesta=> {
       this.nuevaArea=respuesta;
       console.log( "Älejo cangrejo ",respuesta);
    })
        
  }
  

}

