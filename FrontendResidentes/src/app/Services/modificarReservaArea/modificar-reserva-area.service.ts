import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Reserva {
	Fecha: string;
	Area: string;
	Descripcion: string;
	HorasDisponibles: string;
	HoraInicial: string;
	HoraFinal: string;
	CantidadDePersonas: string;
}

let reserva: Reserva = {
	"Fecha": " 21 de Marzo del 2021",
    "Area": "Cancha de futbol",
	"Descripcion": "Voy con mis 4 hijos y mi papa",
	"HorasDisponibles" : "08:00",
    "HoraInicial": "05:00",
    "HoraFinal": "06:00",
    "CantidadDePersonas": "06",
    
};

let horasDisponibles: string[] = [
	"08:00",
    "13:00",
    "16:00",
];

let hora_i: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let hora_f: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let cantidad_p:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];


@Injectable()
export class ModificarReservaAreaService {
  
	getReserva() {
		return reserva;
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
}
