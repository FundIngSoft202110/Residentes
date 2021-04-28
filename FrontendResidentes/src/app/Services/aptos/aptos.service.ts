import { Injectable } from '@angular/core';
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

  constructor() { }

  getAptos() {
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
}
