import { Injectable } from '@angular/core';

export class Ganador {
  idPropuesta: number;
  idOpcion: number;
}

@Injectable()
export class GanadorService {

  ganadores: Ganador[] = [
    {
      idPropuesta: 1,
      idOpcion: 1
    },
    {
      idPropuesta: 2,
      idOpcion: 2
    }
  ]

  getGanadores() {
		return this.ganadores;
	}

  getGanador(idPropuesta:number){
    return this.ganadores.find(ganador => {return ganador.idPropuesta == idPropuesta});
  }
}
