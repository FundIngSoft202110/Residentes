import { Injectable } from '@angular/core';
import { Voto } from './votos.model';

@Injectable({
  providedIn: 'root'
})
export class VotosService {

  private votos:Voto[] = [ 
    {
      id: 1,
      idOpcion: 1,
      idPropuesta: 1
    },
    {
      id: 2,
      idOpcion: 1,
      idPropuesta: 1
    },
    {
      id: 3,
      idOpcion: 2,
      idPropuesta: 1
    },
    {
      id: 4,
      idOpcion: 1,
      idPropuesta: 2
    },
    {
      id: 5,
      idOpcion: 2,
      idPropuesta: 2
    },
    {
      id: 6,
      idOpcion: 2,
      idPropuesta: 2
    }
  ]

  constructor() { }

  getVotos() {
    return this.votos;
  } // end getVotos

  getVoto(votoId:number) { 
    return this.votos.find(voto => { return voto.id == votoId });
  }// end getVoto

  addVoto(idOpcion:number,idPropuesta:number){ 
    this.votos.push({
      id: this.votos.length + 1,
      idOpcion,
      idPropuesta
    });
  } // end addOpcion
  
  deleteVoto(votoId:number) {
    this.votos.splice(votoId,1);
  } // end deleteOpcion
}
