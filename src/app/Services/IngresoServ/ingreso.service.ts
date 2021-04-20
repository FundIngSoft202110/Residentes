import { Injectable } from '@angular/core';

export class Usuario {
  Email: string;
  Password: string;
}

let usuario : Usuario = {
  "Email": "",
  "Password": "",
};


@Injectable({
  providedIn: 'root'
})

export class IngresoService {

  getUsuario() : Usuario {
    return usuario;
  }
}
