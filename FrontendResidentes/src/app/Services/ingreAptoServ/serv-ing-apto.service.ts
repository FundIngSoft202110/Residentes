import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ServIngAptoService {

  private  apartamentos= [
    {
      IdApartamento: 1,
      Torre: 1,
      Numero: 1,
      Contrasena: 'abcd132',
      Piso: 1 
    },
    {
      IdApartamento: 1,
      Torre: 1,
      Numero: 2,
      Contrasena: 'sdfa234',
      Piso: 1 
    },
    {
      IdApartamento: 1,
      Torre: 1,
      Numero: 1,
      Contrasena: '12345678',
      Piso: 2 
    },
    {
      IdApartamento: 1,
      Torre: 1,
      Numero: 2,
      Contrasena: 'i7tyur456',
      Piso: 2 
    },

    {
      IdApartamento: 1,
      Torre: 2,
      Numero: 1,
      Contrasena: 'contraaa',
      Piso: 1 
    },
    {
      IdApartamento: 1,
      Torre: 2,
      Numero: 2,
      Contrasena: 'senaaa24',
      Piso: 1 
    },
    {
      IdApartamento: 1,
      Torre: 2,
      Numero: 1,
      Contrasena: 'poiuytred',
      Piso: 2 
    },
    {
      IdApartamento: 1,
      Torre: 2,
      Numero: 2,
      Contrasena: 'tgrgwr5325',
      Piso: 2 
    }
  ];

  constructor() {

  }
  
  loginUser(credential){
    //return fetch("IRL_DEL_SUPERSERVIDOR")

    return new Promise((accept, reject) => {
      let van =0;
      let cont=0;
      for(let ind of  this.apartamentos){
        if( ( credential.torre == this.apartamentos[cont].Torre) && ( credential.piso == this.apartamentos[cont].Piso) && ( credential.numero == this.apartamentos[cont].Numero) && ( credential.password == this.apartamentos[cont].Contrasena) ){
          accept("Login correcto");
          van =1;
        }
        cont++;
      }
      if(van == 0){
        reject("Login incorrecto");
      }
    });
  }
}
