import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

import { GanadorService, Ganador } from '../../../../Services/Ganador/ganador.service';

@Component({
  selector: 'app-asamblea-subir-votos',
  providers: [GanadorService],
  templateUrl: './asamblea-subir-votos.component.html',
  styleUrls: ['./asamblea-subir-votos.component.scss'],
})
export class AsambleaSubirVotosComponent implements OnInit {
	ganador: Ganador;
	constructor(service: GanadorService) {
		this.ganador = service.getGanador(1); // toca mandarle el ide de la propuesta para que saque el ganador
	}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

    click = e => {
        const buttonText = e.component.option("text");
        notify("The " + this.capitalize(buttonText) + " button was clicked");
    }


}