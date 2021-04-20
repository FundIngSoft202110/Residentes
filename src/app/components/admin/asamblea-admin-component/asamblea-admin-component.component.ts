import { Component, OnInit } from '@angular/core';
import { OpcionesService } from 'src/app/Services/opciones/opciones.service';
import { Opcion } from 'src/app/Services/opciones/opcion.model';

import { AsambleaService, Asamblea} from '../../../Services/asambleas/asamblea.service';
import { Propuesta } from 'src/app/Services/propuestas/propuesta.model';
import { PropuestasService } from 'src/app/Services/propuestas/propuestas.service';
@Component({
  selector: 'app-asamblea-admin-component',
  providers:[AsambleaService],
  templateUrl: './asamblea-admin-component.component.html',
  styleUrls: ['./asamblea-admin-component.component.scss'],
})
export class AsambleaAdminComponent implements OnInit {

  asamblea: Asamblea;
  opciones: Opcion[];
  propuesta: Propuesta[];
	Nopciones: number[];

	constructor(service: AsambleaService, opcionesServices:OpcionesService, propuestaServices:PropuestasService) {
		this.asamblea = service.getAsamblea(1);
    this.propuesta=propuestaServices.getPropuestas();
    this.opciones = opcionesServices.getOpciones(1);
		this.Nopciones = service.getNopciones();
	}

  ngOnInit() {}

}
