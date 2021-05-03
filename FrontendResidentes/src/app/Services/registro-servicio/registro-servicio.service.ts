import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


 export class Usuario {
  Nombres: any;
  Apellidos: any;
  Usuario: any;
  Correo: any;
  Contrasena: any;
  NumCelular: any;
  RolConjunto:any;
}

// let customer : Customer = {
//     "Email": "",
//     "Password": "",
//     "Name": "Alejo",
//     "Date": null,
//     "Country": "",
//     "City": "",
//     "Address": "",
//     "Phone": "",
//     "Accepted": false
// };

@Injectable({
  providedIn: 'root'
})
export class RegistroServicioService {
  constructor(private http: HttpClient){

  }
  public getUsario(url:string){
     return this.http.get(url);
  }

   public postUsuarioNuevo(url:string,body){
      return this.http.post(url,body);

   }
   
  
 
}
