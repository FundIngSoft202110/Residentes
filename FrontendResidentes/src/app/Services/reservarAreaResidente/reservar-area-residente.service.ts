import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class Reserva {
	fecha: any;
	Area: string;
	descripcion: string;
	horaInicio: string;
	horaFinal: string;
	cantidadPersonas: string;
	reservaPK : ReservaPK;
}

export class  ReservaPK{
	apartamentoConjuntoIdConjunto: any;
	apartamentoIdApartamento: any;
	areaComunConjuntoIdConjunto: any;
	areaComunIdArea: any;

}



let horasDisponibles: string[] = [
	"08:00",
    "13:00",
    "16:00",
];

let hora_i: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let hora_f: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let cantidad_p: number[] = [0,1,2,3,4,5,6,7,8,9,10];

@Injectable()@Injectable({
	providedIn: 'root'
  })
  export class ReservarAreaResidenteService {
	constructor(private http:HttpClient){

	}
	getReserva() {
		
	}
	getHorasDisponibles() {
		return horasDisponibles;
	}
	
	getHora_i() {
		return hora_i;
	}
	getHora_f() {
		return hora_f;
	}
    
	getCantidad_p() {
		return cantidad_p;
	}   

	postnueva(url:string, body:any){
		return this.http.post(url,body);


	}

	setfecha( fecha:number) {
		window.localStorage['fechareserva'] = fecha.toString();
	}// setareaComun

	getfecha(){
		return Number(window.localStorage['fechareserva'] || -1);
	}// getConjuntoActivo

	setarea( area:any) {
		window.localStorage['areareserva'] = area;
	}// setareaComun

	getarea(){
		return String(window.localStorage['areareserva'] || -1);
	}// getConjuntoActivo
}