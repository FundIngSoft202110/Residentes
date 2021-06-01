import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule, DxListModule } from 'devextreme-angular';
import{Task,ReservacionAreaResidenteService} from '../../../Services/ReservacionAreaResidente/reservacion-area-residente.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { NavController } from '@ionic/angular';
import { IPRESIDENTESA } from 'src/app/constants';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { AptosService } from 'src/app/Services/aptos/aptos.service';
import notify from 'devextreme/ui/notify';
import { ReservarAreaResidenteService } from 'src/app/Services/reservarAreaResidente/reservar-area-residente.service';

@Component({
  selector: 'app-reservacion-area-residente',
  templateUrl: './reservacion-area-residente.component.html',
  providers:[ReservacionAreaResidenteService],
  styleUrls: ['./reservacion-area-residente.component.scss'],
})
export class ReservacionAreaResidenteComponent implements OnInit {
  tasks: DataSource;
  selectAllModeVlaue: string = "page";
  selectionModeValue: string = "all";
  listaMisReservas: any;
  lsitaR: any;
  conjuntoA :any =1;
  aptoA:any=1;
  nombre : any;
  data:any;
  respu: any;
  datos:any;

  constructor(private reMo:ReservarAreaResidenteService ,private service: ReservacionAreaResidenteService,apto:AptosService,conjunto: ConjuntosService, private navCtrl: NavController) {
      this.listaMisReservas = this.listarMisReservas();
      this.conjuntoA= conjunto.getConjuntoActivo;
      this.aptoA=apto.getAptoActivo();
  }

  listarMisReservas(){
    console.log(this.conjuntoA,this.aptoA);
    this.service.getMisReservas(IPRESIDENTESA+"/consultas/reservas/misReservas/conjunto/"+this.conjuntoA
    +"/apartamento/"+this.aptoA).subscribe(respuesta=>{
      this.listaMisReservas=respuesta;
      this.lsitaR=this.listaMisReservas;
    console.log(this.lsitaR.nombreArea)
    this.nombre=this.lsitaR.nombreArea;
      console.log(this.lsitaR);
    })
  }
  mandarModificar() {
    this.navCtrl.navigateForward("/modificar-reserva-area");
  }
  mandarEliminar() {
    this.service.deletereserva(IPRESIDENTESA+"/consultas/reservas/BorrarReserva/"+this.datos.nombreArea+"/"+this.datos.horaInicio+"/"+this.datos.horaFinal).subscribe(respuesta=> 
      {this.respu=respuesta
        notify(this.respu.respuesta,"sucess")
      this.ngOnInit();
    })
  }

  goToRegister() {
   this.navCtrl.navigateForward("/areas-residente");
  }
  

  ngOnInit() {}

  /*getMisReservas(){
    this.service.getMisReservas(IPRESIDENTESA + "/misReservas/conjunto" + IdConjunto +"/apartamento/" + IdApartamento).subscribe(listaMisReservas =>{
      this.listaMisReservas = listaMisReservas})
  }*/
  select(data:any){
    
    this.datos = data;
    this.reMo.setfechaM(this.datos.fecha);
    this.reMo.setHoraF(this.datos.horaFinal);
    this.reMo.setHoraIn(this.datos.horaInicio);
    console.log("aca",this.datos.nombreArea);
    this.reMo.setareaM(this.datos.nombreArea);

    console.log("data",data);
  }
}
