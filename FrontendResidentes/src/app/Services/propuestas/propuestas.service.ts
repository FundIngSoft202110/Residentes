import { Injectable } from '@angular/core';
import { Propuesta } from './propuesta.model';

@Injectable({
  providedIn: 'root'
})
export class PropuestasService {

  private propuestaActiva: Propuesta
  private propuestas: Propuesta[] = [
    {
      id: 1,
      idAsamblea: 1,
      idConjunto: 1,
      descripcion: "Aprobar el uso del presupuesto para arreglar los tejados",
      votosTotales: 3,
      habilitar: true,
      parar: false,
      subir: true
    },
    {
      id: 2,
      idAsamblea: 1,
      idConjunto: 1,
      descripcion: "Cambiar la empresa de seguridad",
      votosTotales: 3,
      habilitar: false,
      parar: false,
      subir: true
    }
  ]

  constructor() { }

  getPropuestas() {
    return this.propuestas;
  } // end getPropuestas

  getPropuesta(propuestaId: number) {
    return this.propuestas.find(propuesta => { return propuesta.id == propuestaId });
  }// end getPropuesta

  getPropuestaActiva(): Propuesta {
    return this.propuestaActiva;
  }

  setPrpuestaActiva(id: number) {
    this.propuestaActiva = this.propuestas[id];
  }

  addPropuesta(idAsamblea: number, idConjunto: number, descripcion: string, votosTotales: number, habilitar: boolean, parar: boolean, subir: boolean) {
    this.propuestas.push({
      id: this.propuestas.length + 1,
      idAsamblea,
      idConjunto,
      descripcion,
      votosTotales,
      habilitar,
      parar,
      subir
    });
  } // end addPropuesta

  deletePropuesta(propuestaId: number) {
    this.propuestas.splice(propuestaId, 1);
  } // end deletePropuesta
}
