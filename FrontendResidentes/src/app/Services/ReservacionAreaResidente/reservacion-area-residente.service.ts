import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task {
  
  HoraInicio:any;
     HoraFinal:any;
     nombreArea:any;
}



@Injectable()
export class ReservacionAreaResidenteService {
  constructor(private http: HttpClient){

  }

  getTasks(){
  
}
  getMisReservas(url: string){
    return this.http.get(url);

  }
  deletereserva(url: string){
     return this.http.delete(url);
  }
}
