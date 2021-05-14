import { Injectable } from '@angular/core';

export class NuevaArea {
    NombreDelArea: string;
	Tipo: string;
	CapacidadMaxima: number;
	Descripcion: string;
	HoraDeApertura: string;
	HoraDeCierre: string;
	DiasDisponibles: string; 
}

let nuevaArea: NuevaArea = {

    "NombreDelArea": "Piscina",
    "Tipo":"Deportiva",
    "CapacidadMaxima": 10,
    "Descripcion":"Espacio en el cual podra disfritar con su familia",
    "HoraDeApertura": "06:00",
    "HoraDeCierre": "17:00",
    "DiasDisponibles": "Lunes-Viernes",
};

let tipo: string[] = [
    "Deportiva",
    "Social",
    "Relajante"
];

let horaDeApertura: string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

let horaDeCierre: string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

let diasDisponibles: string[] = ["Lunes-Viernes", "Lunes-Domingo", "Viernes-Domingo"];





@Injectable()
export class ModificarAreaAdminService {
    getNuevaArea() {
		return nuevaArea;
	}

	getTipo() {
		return tipo;
	}
    
	getHoraDeApertura() {
		return horaDeApertura;
	}
    
    getHoraDeCierre() {
		return horaDeCierre;
	}
    
    getDiasDisponibles() {
		return diasDisponibles;
	}
}
