import { Injectable } from '@angular/core';



export class Usuario {
  Usuario: string;
  Constrasena: string;

}

let usuarios: Usuario[] = [{
  Usuario: "1-601",
  Constrasena: "gato34"
}, {
  Usuario: "1-602",
  Constrasena: "messi10"
}, {
  Usuario: "1-603",
  Constrasena: "1234abcd"
},
 {
  Usuario: "1-604",
  Constrasena: "soloMillos"
}];

export class Rol {
    Nombre: string;
}

let roles: Rol[] = [{

    Nombre: "Empleado"

}, {
    Nombre: "Residente"
}];


@Injectable({
  providedIn: 'root'
})

export class ClaveContraService {
    getUsuarios() : Usuario[] {
        return usuarios;
    }
    getRoles() : Rol[] {
        return roles;
    }
}