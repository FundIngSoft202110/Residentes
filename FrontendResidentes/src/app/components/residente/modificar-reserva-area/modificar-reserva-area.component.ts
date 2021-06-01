import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import notify from 'devextreme/ui/notify';
import { IPRESIDENTESA } from 'src/app/constants';
import { AptosService } from 'src/app/Services/aptos/aptos.service';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ReservaPK,Reserva, ModificarReservaAreaService } from 'src/app/Services/modificarReservaArea/modificar-reserva-area.service';
import {  ReservarAreaResidenteService } from 'src/app/Services/reservarAreaResidente/reservar-area-residente.service';

@Component({
  selector: 'app-modificar-reserva-area',
  providers:[ModificarReservaAreaService,ReservarAreaResidenteService,
  ConjuntosService,AptosService,NavController],
  templateUrl: './modificar-reserva-area.component.html',
  styleUrls: ['./modificar-reserva-area.component.scss'],
})
export class ModificarReservaAreaComponent implements OnInit {

  reserva: Reserva= new Reserva();
  reservaPK: ReservaPK = new ReservaPK();
  horasDisponibles: string[];
	hora_i: any;
	hora_f: any;
	cantidad_p: any;
  pos:"top";
  idArea: any;
  conjuntoA:any;
  aptoA:any;
  capa: any;
  res: any;
  

  constructor( private navCtrl: NavController,
    private service: ModificarReservaAreaService,
     private reM: ReservarAreaResidenteService,
      private conjunto:ConjuntosService, 
      private apto:AptosService) { 
        
         this.reservaPK.apartamentoConjuntoIdConjunto=conjunto.getConjuntoActivo();
         this.reservaPK.areaComunConjuntoIdConjunto=conjunto.getConjuntoActivo();
         this.reservaPK.apartamentoIdApartamento=apto.getAptoActivo();
       
        
       this.reserva.reservaPK=this.reservaPK;
        this.horasDisponibles = service.getHorasDisponibles();
        this.hora_i = service.getHora_i();
        this.hora_f = service.getHora_f();
        this.cantidad_p = service.getCantidad_p();
        this.reserva.fecha=reM.getfechaM();
        console.log("ca",reM.getareaM());
        this.reserva.Area=reM.getareaM();
        this.reserva.horaFinal=reM.getHoraF();
        this.reserva.horaInicio=reM.getHoraIn();
        
        this.conjuntoA=conjunto.getConjuntoActivo();
        this.aptoA=apto.getAptoActivo();
        this.traerId();
        this.traercap();

  }

  ngOnInit() {}

  traerId(){
    this.service.getId(IPRESIDENTESA+"/consultas/AreasComunes/idarea/"+this.reserva.Area)
    .subscribe(respuesta=>{
      console.log("r",respuesta);
   
      this.idArea=respuesta;
      console.log(this.idArea.id);
      this.reservaPK.areaComunIdArea=this.idArea.id;
    })
  }

  traercap(){
  this.service.gecap(IPRESIDENTESA+"/consultas/reservas/misReservas/conjunto/"
  +this.conjuntoA+"/apartamento/"+this.aptoA+"/fecha/"+this.reserva.fecha+"/horai/"+this.reserva.horaInicio
  +"/horaF/"+this.reserva.horaFinal).subscribe(
    respuesta=>{this.capa=respuesta;
      console.log(respuesta);
         this.reserva.cantidadPersonas=this.capa.capacidad;
         this.reservaPK.IdReserva=this.capa.idReserva;
    }
    
  )

  }

  modificarreserva(){
    console.log("la reserva",this.reserva);
    this.service.putreserva(IPRESIDENTESA+"/consultas/reservas/CambiarReserva/"+this.reservaPK.IdReserva,this.reserva).subscribe
    (repuesta=>{this.res = repuesta
    notify(this.res.respuesta,"sucess");
    this.navCtrl.navigateForward("/mis-reservas");})

}
}
