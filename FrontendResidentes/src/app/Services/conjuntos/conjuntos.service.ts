import { Injectable } from '@angular/core';
import { PersonasService } from '../personas/personas.service';
import { Conjunto } from './conjunto.model';

@Injectable({
  providedIn: 'root'
})
export class ConjuntosService {

  private conjuntos:Conjunto[] = [ 
    {
      id: 1,
      nombre: 'Mari1',
      linkDePago: 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=446&searchedCategoryId=&searchedAgreementName=CON%20UNIDAD%20RESID%20%20EL%20QUIRINAL',
      direccion: 'Carrera 68 # 26 - 48',
      precioAdmin: 545000,
      manual: 'ManualMaria.pdf'
    },
    {
      id: 2,
      nombre: 'Conjuntos Quirinal',
      linkDePago: 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=446&searchedCategoryId=&searchedAgreementName=CON%20UNIDAD%20RESID%20%20EL%20QUIRINAL',
      direccion: 'Carrera 68 # 26 - 48',
      precioAdmin: 545000,
      manual: 'ManualMaria.pdf'
    },
    {
      id: 3,
      nombre: 'El Trebol',
      linkDePago: 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=446&searchedCategoryId=&searchedAgreementName=CON%20UNIDAD%20RESID%20%20EL%20QUIRINAL',
      direccion: 'Carrera 68 # 26 - 48',
      precioAdmin: 545000,
      manual: 'ManualMaria.pdf'
    }
  ]

  constructor(private personasService:PersonasService) { 
    this.setConjuntoActivo(1);
  }

  getConjuntos() {
    /// pide a la base los conjutnos que son de esa persona this.personasService.getUserActivo();
    return this.conjuntos;
  } // end getConjuntos

  getConjunto(conjuntoId:number) { 
    return this.conjuntos.find(conjunto => { return conjunto.id == conjuntoId });
  }// end getConjunto

  private conjuntoActivo: number;

	setConjuntoActivo(id: number) {
		window.localStorage['conjuntoActivo'] = id.toString();
	}// setConjuntoActivo

	clearConjuntoActivo(){
		window.localStorage.clear();
	}

	getConjuntoActivo(){
		this.conjuntoActivo = Number(window.localStorage['conjuntoActivo'] || -1);
		if(this.conjuntoActivo == -1)
			return null;
		else
			return this.getConjunto(this.conjuntoActivo);
	}// getConjuntoActivo

}
