import { Injectable } from '@angular/core';
import { PersonasService } from '../personas/personas.service';
import { Apto } from './apto.model';

@Injectable({
  providedIn: 'root'
})
export class AptosService {

  private aptos:Apto[] = [ 
    {
      id: 1,
      idConjunto: 1,
      torre: 3,
      numero: 402,
      clave: "Hola1234"
    },
    {
      id: 2,
      idConjunto: 2,
      torre: 2,
      numero: 202,
      clave: "Hola1234"
    },
    {
      id: 3,
      idConjunto: 1,
      torre: 5,
      numero: 401,
      clave: "Hola1234"
    }
  ]

  constructor(private personasService:PersonasService) { }

  getAptos() {
    /// pide a la base los apartamentos que son de esa persona this.personasService.getUserActivo();
    return this.aptos;
  } // end getAptos

  getApto(aptoId:number) { 
    return this.aptos.find(apto => {return apto.id == aptoId});
  }// end getApto

  addApto(idConjunto:number, torre:number, numero:number, clave:string){ 
    this.aptos.push({
      id: this.aptos.length + 1,
      idConjunto,
      torre,
      numero,
      clave
    });
  } // end addApto
  
  deleteApto(aptoId:number) {
    this.aptos.splice(aptoId,1);
  } // end deleteApto

  private aptoActivo: number;

	setAptoActivo(aptoId: number) {
		window.localStorage['aptoActivo'] = aptoId.toString();
	}// setAptoActivo

	clearAptoActivo(){
		window.localStorage.clear();
	}

	getAptoActivo(){
		this.aptoActivo = Number(window.localStorage['aptoActivo'] || -1);
		if(this.aptoActivo == -1)
			return null;
		else
			return this.getApto(this.aptoActivo);
	}// getAptoActivo

}
