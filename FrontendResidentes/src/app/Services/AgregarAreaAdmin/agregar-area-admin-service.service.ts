import { Injectable } from '@angular/core';

export class NuevaArea {
    NombreDelArea: string;
	Tipo: string;
	CapacidadMaxima: number;
	Descripcion: string; 
}

let nuevaArea: NuevaArea = {

    "NombreDelArea": "Piscina",
    "Tipo":"Deportiva",
    "CapacidadMaxima": 10,
    "Descripcion":"Espacio en el cual podra disfritar con su familia",
};

let tipo: string[] = [
    "Deportiva",
    "Social",
    "Relajante"
];






@Injectable()
export class AgregarAreaAdminServiceService {
    getNuevaArea() {
		return nuevaArea;
	}

	getTipo() {
		return tipo;
	}
    
}
