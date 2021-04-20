import { Component, OnInit } from '@angular/core';

import { AsambleaSubirPropuestaService, Asamblea,  Opciones} from '../../../Services/asamblea-subir-propuesta/asamblea-subir-propuesta.service';
@Component({
  selector: 'app-asamblea-admin-component',
  providers:[AsambleaSubirPropuestaService],
  templateUrl: './asamblea-admin-component.component.html',
  styleUrls: ['./asamblea-admin-component.component.scss'],
})
export class AsambleaAdminComponent implements OnInit {

  asamblea: Asamblea;
	propuestas: Opciones[];
	Nopciones: number[];

	constructor(service: AsambleaSubirPropuestaService) {
		this.asamblea = service.getAsamblea();
		this.propuestas = service.getOpciones();
		this.Nopciones = service.getNopciones();
	}

  ngOnInit() {}

}
