import { Injectable } from '@angular/core';
import { Propuesta } from './propuesta.model';

@Injectable({
  providedIn: 'root'
})
export class PropuestasService {

  private propuestasAsam: Propuesta[];
  private propuestas: Propuesta[] = [
    {
      id: 1,
      idAsamblea: 1,
      idConjunto: 1,
      descripcion: "Aprobar el uso del presupuesto para arreglar los tejados",
      votosTotales: 3,
      habilitar: true,
      parar: true,
      subir: true
    },
    {
      id: 2,
      idAsamblea: 1,
      idConjunto: 1,
      descripcion: "Cambiar la empresa de seguridad",
      votosTotales: 3,
      habilitar: true,
      parar: true,
      subir: true
    },
    {
      id: 3,
      idAsamblea: 2,
      idConjunto: 1,
      descripcion: "Aprobar el uso del presupuesto para pintar las paredes",
      votosTotales: 3,
      habilitar: true,
      parar: false,
      subir: true
    },
    {
      id: 4,
      idAsamblea: 2,
      idConjunto: 1,
      descripcion: "Eliga la empresa de seguridad",
      votosTotales: 3,
      habilitar: false,
      parar: false,
      subir: true
    }
  ]

  constructor() { }

  private propuestaAbierta: number;

	setPropuestaAbierta(IdPropuesta: number) {
		window.localStorage['propuestaAbierta'] = IdPropuesta.toString();
	}// setPropuestaAbierta

	getPropuestaAbierta(){
		this.propuestaAbierta = Number(window.localStorage['propuestaAbierta'] || -1);
		if(this.propuestaAbierta == -1)
			return null;
		else
			return this.getPropuesta(this.propuestaAbierta);
	}// getPropuestaAbierta

  getPropuestas(idAsamblea:number) {
    this.propuestasAsam = [];
    for(let prop of this.propuestas)
      if(prop.idAsamblea == idAsamblea)
        this.propuestasAsam.push(prop);
    return this.propuestasAsam;
  } // end getPropuestas

  getPropuesta(propuestaId: number) {
    return this.propuestas.find(propuesta => { return propuesta.id == propuestaId });
  }// end getPropuesta
}
