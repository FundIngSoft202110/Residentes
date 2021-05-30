import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule, DxListModule } from 'devextreme-angular';
import{Task,ReservacionAreaResidenteService} from '../../../Services/ReservacionAreaResidente/reservacion-area-residente.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import { NavController } from '@ionic/angular';
import { IPRESIDENTESA } from 'src/app/constants';

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
  linkvolver="/areas-residente";
  linkModificar="/modificar-reserva-area";
  

  constructor(private service: ReservacionAreaResidenteService, private navCtrl: NavController) {
      this.tasks = new DataSource({
          store: new ArrayStore({
              key: "id",
              data: service.getTasks()
          })
      });
  }

  
  mandarModificar() {
    this.navCtrl.navigateForward(this.linkModificar);
  }
  mandarEliminar() {
   
  }

  goToRegister() {
   this.navCtrl.navigateForward(this.linkvolver);
  }
  

  ngOnInit() {}

  /*getMisReservas(){
    this.service.getMisReservas(IPRESIDENTESA + "/misReservas/conjunto" + IdConjunto +"/apartamento/" + IdApartamento).subscribe(listaMisReservas =>{
      this.listaMisReservas = listaMisReservas})
  }*/
}
