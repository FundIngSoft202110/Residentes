import { Injectable } from '@angular/core';


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

let hora_i: string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

let hora_f: string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

let cantidad_p: string[] = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

@Injectable({
	providedIn: 'root'
  })
export class ReservarAreaResidenteService {
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