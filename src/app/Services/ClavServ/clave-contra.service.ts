import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class Usuario {
    Nombre: string;
    Usuario: string;
    Constrasena: string;

}

let usuarios: Usuario[] = [{
    Nombre: "Sebastian",
    Usuario: "sebasPUJ",
    Constrasena: ""
}, {
     Nombre: "María",
    Usuario: "majo99",
    Constrasena: ""
}, {
     Nombre: "Janet",
    Usuario: "janetcita",
    Constrasena: ""
}];

export class Rol {
    Nombre: string;
}

let roles: Rol[] = [{

    Nombre: "Empleado"

}, {
    Nombre: "Residente"
}];


@Injectable()
export class ClaveContraService {
    getUsuarios() : Usuario[] {
        return usuarios;
    }
    getRoles() : Rol[] {
        return roles;
    }
}