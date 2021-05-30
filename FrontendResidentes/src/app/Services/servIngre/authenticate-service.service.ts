import { Injectable } from '@angular/core';
import { PersonasService } from '../personas/personas.service';
import { HttpClient } from '@angular/common/http';
import { IPRESIDENTES } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {
  personas = [];
  p: any;

  constructor(private http: HttpClient) {
    // this.personas = pServ.getPersonas(); 
    this.obtener();
  }

  public getP(){
    return this.p;
  }

  public obtener() {
    this.getUsuarios(IPRESIDENTES + "consultas/personas")
      .subscribe(respuesta => {
        console.log("subscirbe ", respuesta);
        this.p = respuesta;
        console.log("esta es la p", this.p);
      })
  }
  public getUsuarios(url: string) {
    return this.http.get(url);
  }

  loginUser(credential) {
    this.obtener();
    return new Promise((accept, reject) => {
      let van = 0;
      let cont = 0;
      for (let ind of this.p) {
        if ((credential.email === this.p[cont].correo) && (credential.password === this.p[cont].contrasena)) {
          accept("Login correcto");
          van = 1;
          break;
        }
        cont++;
      } // end for
      if (van == 0) {
        reject("login incorrecto");
      } // end if
    });
  } // end loginUser
} // end AuthenticateServiceService
