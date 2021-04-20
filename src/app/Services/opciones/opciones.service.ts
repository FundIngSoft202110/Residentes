import { Injectable } from '@angular/core';
import { Opcion } from './opcion.model';

@Injectable({
  providedIn: 'root'
})
export class OpcionesService {

  private opciones:Opcion[] = [ 
    {
      id: 1,
      idPropuesta: 1,
      nombre: "Sí",
      cantidadVotos: 2
    },
    {
      id: 2,
      idPropuesta: 1,
      nombre: "No",
      cantidadVotos: 1
    },
    {
      id: 1,
      idPropuesta: 2,
      nombre: "Yes",
      cantidadVotos: 1
    },
    {
      id: 2,
      idPropuesta: 2,
      nombre: "Nou",
      cantidadVotos: 2
    }
  ]

  constructor() { }

  getOpciones(idPropuesta:number) {
    return this.opciones.filter(opcion => {return opcion.idPropuesta == idPropuesta});
  } // end getOpciones

  getOpcion(opcionId:number) { 
    return this.opciones.find(opcion => { return opcion.id == opcionId });
  }// end getOpcion

  addOpcion(idPropuesta:number,nombre:string,cantidadVotos:number){ 
    this.opciones.push({
      id: this.opciones.length + 1,
      idPropuesta,
      nombre,
      cantidadVotos
    });
  } // end addOpcion
  
  deleteOpcion(opcionId:number) {
    this.opciones.splice(opcionId,1);
  } // end deleteOpcion
}
