import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credential){
    //return fetch("IRL_DEL_SUPERSERVIDOR")

    return new Promise((accept, reject) => {
      if (
        credential.email == "quintanita@hotmail.com" &&
        credential.password == "12345"
      ) {
        accept("Login correcto");
      } else {
        reject("Login incorrecto");
      }
    });
  }

}
