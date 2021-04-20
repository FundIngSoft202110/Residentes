import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { GanadorService, Votos } from '../../../../Services/Ganador/resultados-votaciones.service';

@Component({
  selector: 'app-asamblea-subir-votos',
  providers: [GanadorService],
  templateUrl: './asamblea-subir-votos.component.html',
  styleUrls: ['./asamblea-subir-votos.component.scss'],
})
export class AsambleaSubirVotosComponent implements OnInit {
	votos: Votos;
	constructor(service: GanadorService) {
		this.votos = service.getVotos();
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
