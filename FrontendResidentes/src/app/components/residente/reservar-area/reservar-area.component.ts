import { Component, OnInit } from '@angular/core';
import {Reserva, ReservarAreaResidenteService} from '../../../Services/reservarAreaResidente/reservar-area-residente.service';
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

@Component({
  selector: 'app-reservar-area',
  providers: [ReservarAreaResidenteService],
  templateUrl: './reservar-area.component.html',
  styleUrls: ['./reservar-area.component.scss'],
})

export class ReservarAreaComponent {
	reserva: Reserva;
  horasDisponibles: string[];
	hora_i: any;
	hora_f: any;
	cantidad_p: any;
  pos:"top";
 
  
	constructor(service: ReservarAreaResidenteService, private navCtrl: NavController) {
		this.reserva = service.getReserva();
        this.horasDisponibles = service.getHorasDisponibles();
        this.hora_i = service.getHora_i();
        this.hora_f = service.getHora_f();
        this.cantidad_p = service.getCantidad_p();
	}
  
  ngOnInit() {}
}