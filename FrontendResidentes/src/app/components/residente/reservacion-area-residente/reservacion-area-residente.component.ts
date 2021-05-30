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
  providers:[],
  styleUrls: ['./reservacion-area-residente.component.scss'],
})
export class ReservacionAreaResidenteComponent implements OnInit {
  tasks: DataSource;
  selectAllModeVlaue: string = "page";
  selectionModeValue: string = "all";
  listaMisReservas: any;

  constructor(private service: ReservacionAreaResidenteService, private navCtrl: NavController) {
      this.tasks = new DataSource({
          store: new ArrayStore({
              key: "id",
              data: service.getTasks()
          })
      });
  }

  /*
  mandarModificar() {
    this.navCtrl.navigateForward("/mis-reservas");
  }
  mandarEliminar() {
    this.navCtrl.navigateForward("/mis-reservas");
  }

  goToRegister() {
   this.navCtrl.navigateForward("/registro");
  }
  */

  ngOnInit() {}

  getMisReservas(){
    this.service.getMisReservas(IPRESIDENTESA + "/misReservas/conjunto" + IdConjunto +"/apartamento/" + IdApartamento).subscribe(listaMisReservas =>{
      this.listaMisReservas = listaMisReservas})
  }
}
