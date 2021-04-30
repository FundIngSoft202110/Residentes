import { Injectable } from '@angular/core';
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
      nombre: 'Mari2',
      linkDePago: 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=446&searchedCategoryId=&searchedAgreementName=CON%20UNIDAD%20RESID%20%20EL%20QUIRINAL',
      direccion: 'Carrera 68 # 26 - 48',
      precioAdmin: 545000,
      manual: 'ManualMaria.pdf'
    },
    {
      id: 3,
      nombre: 'Mari3',
      linkDePago: 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=446&searchedCategoryId=&searchedAgreementName=CON%20UNIDAD%20RESID%20%20EL%20QUIRINAL',
      direccion: 'Carrera 68 # 26 - 48',
      precioAdmin: 545000,
      manual: 'ManualMaria.pdf'
    }
  ]

  constructor() { }

  getConjuntos() {
    return this.conjuntos;
  } // end getConjuntos

  getConjunto(conjuntoId:number) { 
    return this.conjuntos.find(conjunto => { return conjunto.id == conjuntoId });
  }// end getConjunto

  addConjunto(nombre:string,linkDePago:string,direccion:string,precioAdmin:number,manual:string){ 
    this.conjuntos.push({
      id: this.conjuntos.length + 1,
      nombre,
      linkDePago,
      direccion,
      precioAdmin,
      manual
    });
  } // end addConjunto
  
  deleteConjunto(conjuntoId:number) {
    this.conjuntos.splice(conjuntoId,1);
  } // end deleteConjunto
}
