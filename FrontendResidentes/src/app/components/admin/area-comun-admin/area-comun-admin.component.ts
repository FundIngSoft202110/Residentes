import { Component, OnInit, ViewChild } from '@angular/core';
import{Area, AreaComunAdminService, listaAreas } from '../../../Services/AreaComunAdmin/area-comun-admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule,
	DxTextAreaModule,
    DxButtonModule,
	DxDateBoxModule,
	DxFormModule,
    DxRadioGroupModule, 
    DxRadioGroupComponent, 
    DxTemplateModule,
    DxSwitchModule,
    DxActionSheetModule,
    DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { NavController } from '@ionic/angular';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';


const sendRequest = function(value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(value === validEmail);
        }, 1000);
    });    
}

@Component({
  selector: 'app-area-comun-admin',
  providers: [AreaComunAdminService],
  templateUrl: './area-comun-admin.component.html',
  styleUrls: ['./area-comun-admin.component.scss'],
})

export class AreaComunAdminComponent {
    @ViewChild("eventRadioGroup") eventRadioGroup: DxRadioGroupComponent;
    area: Area = new Area();
	tipo: string[];
	listaDeAreasComunesR: any;
    listaDeAreasComunes: listaAreas[];
    top="top"
    linkNuevaArea="/agregar-area"
    linkModificarArea="/modificar-area"
    conjuntoA : any;
    tiposelect: any;
    listaRespuestas:string[]=[];
   
    
    


	constructor(private service: AreaComunAdminService,  private navCtrl: NavController , private conjunto:ConjuntosService) {
		
		this.tipo = service.getTipo();
        this.tipo=[
    		"Deportiva",
    		"Relajante",
    		"Social"
        ]
		
        this.conjuntoA= conjunto.getConjuntoActivo();
        this.setAreas();
        this.traerAreas();
        
        
      
        
	}
    ngOnInit() {
        this.traerAreas();
    }

    setAreas(){
        let y =[] ;
        this.listaRespuestas.pop();
        for(  var x in this.listaDeAreasComunesR  )
        y[x] = this.listaDeAreasComunesR[x].respuesta;
        this.listaRespuestas= y;
        console.log("resp2",y,this.listaRespuestas);
        return this.listaRespuestas;
        
    }
    mandarAreaNueva(){
        this.navCtrl.navigateForward(this.linkNuevaArea);
    }

    verArea(){
        console.log("area",this.area);
    }
    modificarArea(){
        this.navCtrl.navigateForward(this.linkModificarArea);
    }

    BorrarArea(){
        this.traerAreas();
    }

    public traerAreas(){
         this.service.getAreasBack("http://192.168.76.71:8080/BackendResidentes/consultas/AreasComunes/areasComunesTipo/conjunto/"+this.conjuntoA+"/nomTipoArea/"+this.tiposelect)
         .subscribe(respuesta => {
             this.listaDeAreasComunesR= respuesta;
            this.setAreas();
             console.log("este es la lista",this.listaDeAreasComunesR);
             console.log("este es la lista",this.listaDeAreasComunesR[0].respuesta);
             console.log("resp1",this.listaRespuestas);
         })
    }

    
}