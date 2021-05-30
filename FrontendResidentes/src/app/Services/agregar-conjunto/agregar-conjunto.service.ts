import { Injectable } from '@angular/core';

export class Conjunto {
  nombre: string;
  direccion: string;
}



@Injectable({
providedIn: 'root'
})

export class AgregarConjuntoService {

  conjunto : Conjunto[] =[ {
    "nombre": "Manzanares",
    "direccion": "Carrera 7 #2"
  },
  {
    "nombre": "Arces",
    "direccion": "Carrera 113"
  }
  ];

  getConjunto(){
    return this.conjunto;
  }
}

