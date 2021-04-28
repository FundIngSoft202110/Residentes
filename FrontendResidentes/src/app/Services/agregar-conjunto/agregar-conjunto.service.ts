import { Injectable } from '@angular/core';

export class Conjunto {
  Nombre: string;
  Direccion: string;
  PrecioAdmin: string;
  Link: string;
}

let conjunto : Conjunto = {
  "Nombre": "Manzanares",
  "Direccion": "Carrera 7 #2",
  "PrecioAdmin": "500030",
  "Link": "www.pagosBanco/Manzanares"
};

@Injectable({
providedIn: 'root'
})

export class AgregarConjuntoService {
  getConjunto() : Conjunto {
    return conjunto;
  }
}
