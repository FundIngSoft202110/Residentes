import { Injectable } from '@angular/core';
import { PersonasService } from '../personas/personas.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService {
  personas=[];

  constructor(pServ : PersonasService) {
    this.personas = pServ.getPersonas(); 
  }
  
  loginUser(credential){
    //return fetch("IRL_DEL_SUPERSERVIDOR")

    return new Promise((accept, reject) => {
       accept("Login correcto");
      let van =0;
      let cont=0;
      for(let ind of  this.personas){
        if( ( credential.email == this.personas[cont].correo) && ( credential.password == this.personas[cont].clave) ){
          accept("Login correcto");
          van =1;
        }
        cont++;
      }
      if(van == 0){
        reject("login incorrecto");
      }
    });
  }
}
