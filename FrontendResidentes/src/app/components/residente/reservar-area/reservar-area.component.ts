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

@Component({
  selector: 'app-reservar-area',
  providers: [ReservarAreaResidenteService],
  templateUrl: './reservar-area.component.html',
  styleUrls: ['./reservar-area.component.scss'],
})

export class ReservarAreaComponent {
	reserva: Reserva;
	hora_i: any;
	hora_f: any;
	cantidad_p: any;
 
    buttonOptions1: any = {
        text: "Agregar",
        type: "success",
        useSubmitBehavior: true
    }
    
    buttonOptions2: any = {
        text: "Modificar",
        type: "success",
        useSubmitBehavior: true
    }

    
    buttonOptions3: any = {
        text: "Eliminar",
        type: "danger",
        useSubmitBehavior: true
    }
  
	constructor(service: ReservarAreaResidenteService) {
		this.reserva = service.getReserva();
        this.hora_i = service.getHora_i();
        this.hora_f = service.getHora_f();
        this.cantidad_p = service.getCantidad_p();
	}
}