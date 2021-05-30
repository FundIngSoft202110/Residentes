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
import { IPRESIDENTESA } from 'src/app/constants';


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
    valorEstado:boolean = false;
    estado:any;
    respuestaEliminada:any;
    select:any;
    es:any; 
    estadoN:any;
    actualizado:any;
    respuestaA:any;

    

    


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
        console.log("valorS",this.area);
        
        
      
        
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
        console.log("valorS1",this.area);
       
        
   
        
        return this.listaRespuestas;
        
    }
    mandarAreaNueva(){
        this.navCtrl.navigateForward(this.linkNuevaArea);
    }

   
    modificarArea(){
        this.select= this.area.Seleccionada;
        this.service.setareaComun(this.select);
       
        this.navCtrl.navigateForward(this.linkModificarArea);

    }

    BorrarArea(){
        this.select= this.area.Seleccionada;
        console.log("s",this.select)
        console.log("valorS2",this.area);
        
         this.service.deleteArea(IPRESIDENTESA+"/consultas/AreasComunes/EliminarArea/conjunto/"+this.conjuntoA+"/nomArea/"+this.select)
         .subscribe(data => {
             this.respuestaEliminada= data;
             console.log("eliminar",data);
             
         })
    }

    public traerAreas(){
         this.service.getAreasBack(IPRESIDENTESA+"/consultas/AreasComunes/areasComunesTipo/conjunto/"+this.conjuntoA+"/nomTipoArea/"+this.tiposelect)
         .subscribe(respuesta => {
             this.listaDeAreasComunesR= respuesta;
             this.setAreas();
             
            
    
         })
    }
    
    public getEstado(){
        this.select= this.area.Seleccionada;
      this.service.getstate(IPRESIDENTESA+"/consultas/AreasComunes/areaComunEstado/conjunto/"+this.conjuntoA+"/nomTipoArea/"+this.select)
      .subscribe(respuesta =>{
          this.estado= respuesta;
          console.log("estado",respuesta);
          this.valorEstado=this.estado.respuesta
      })

    }

    public cambiarestado(){
        this.select= this.area.Seleccionada;
        if(this.valorEstado==false){
          this.estadoN="D";
        }else{
            this.estadoN="H";
        }
        this.service.putestador(IPRESIDENTESA+"/consultas/AreasComunes/modificarAreaEstado/conjunto/"+this.conjuntoA+"/nombreA/"+this.select+"/estadoA/"+this.estadoN,null)
        .subscribe(respuesta =>{
            this.actualizado= respuesta;
            console.log("actualizado",respuesta);
            this.respuestaA=this.actualizado.respuesta
        })
    }
    
}