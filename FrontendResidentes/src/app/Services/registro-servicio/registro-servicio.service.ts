import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


// export class Customer {
//     Email: string;
//     Password: string;
//     Name: string;
//     Date: Date;
//     Country: string;
//     City: string;
//     Address: string;
//     Phone: string;
//     Accepted: boolean;
// }

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
 
}
