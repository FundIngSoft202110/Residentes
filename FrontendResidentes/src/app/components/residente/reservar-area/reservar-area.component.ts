import { Component, OnInit } from '@angular/core';
import {Reserva, ReservarAreaResidenteService, ReservaPK} from '../../../Services/reservarAreaResidente/reservar-area-residente.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
	DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    DxAutocompleteModule,
    DxFormComponent
} from 'devextreme-angular';
import { NavController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { IPRESIDENTES, IPRESIDENTESA } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { AptosService } from 'src/app/Services/aptos/aptos.service';
import notify from 'devextreme/ui/notify';
import { ModificarReservaAreaService } from 'src/app/Services/modificarReservaArea/modificar-reserva-area.service';


@Component({
  selector: 'app-reservar-area',
  providers: [ReservarAreaResidenteService],
  templateUrl: './reservar-area.component.html',
  styleUrls: ['./reservar-area.component.scss'],
})

export class ReservarAreaComponent {
  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
	reserva: Reserva = new Reserva();
  reservaPK:ReservaPK= new ReservaPK();
  horasDisponibles: string[];
	hora_i: any;
	hora_f: any;
	cantidad_p: any;
  pos:"top";
  respu: any;
  idArea: any;
 
  
	constructor( private servicess:ModificarReservaAreaService,private aprt:AptosService,private service: ReservarAreaResidenteService, private navCtrl: NavController, private conjunto:ConjuntosService) {
        
        this.reserva.fecha=this.conjunto.convertDate(this.service.getfecha());
        
        this.reservaPK.apartamentoConjuntoIdConjunto=conjunto.getConjuntoActivo();
        this.reservaPK.areaComunConjuntoIdConjunto=conjunto.getConjuntoActivo();
        this.reservaPK.apartamentoIdApartamento=aprt.getAptoActivo();
        
       this.traerId();
       this.reserva.reservaPK=this.reservaPK;
         this.reserva.Area=this.service.getarea();
        this.horasDisponibles = service.getHorasDisponibles();
        this.hora_i = service.getHora_i();
        this.hora_f = service.getHora_f();
        this.cantidad_p = service.getCantidad_p();
	}
  
  ngOnInit() {

 
  }
  traerId(){
    this.servicess.getId(IPRESIDENTESA+"/consultas/AreasComunes/idarea/"+this.reserva.Area)
    .subscribe(respuesta=>{
      console.log("r",respuesta);
   
      this.idArea=respuesta;
      console.log(this.idArea.id);
      this.reservaPK.areaComunIdArea=this.idArea.id;
    })
  }

  mandarNueva(){
    console.log("reserva", this.reserva);
    this.reserva.fecha=this.service.getfecha();
    this.service.postnueva(IPRESIDENTESA+"/consultas/reservas/NuevaReserva",this.reserva)
    .subscribe(respuesta=>{this.respu=respuesta
    notify(this.respu.respuesta,"sucess")})
    this.navCtrl.navigateForward("/areas-residente");
  }

  
    
}