import { Injectable } from '@angular/core';

export class Area {
    Tipo: string;
	ListaDeAreasComunes: string;
    HorasDisponibles: string;
}

let area: Area = {
    "Tipo": "Deportivo",
    "ListaDeAreasComunes": "Cancha de futbol",
    "HorasDisponibles" : "08:00",
    
};

let tipo: string[] = [
    "Deportivo",
    "Relajante",
    "Social",
];

let listaDeAreasComunes: string[] = [
    "Cancha de futbol",
    "Salon Comunal",
    "Piscina"
];
let horasDisponibles: string[] = [
	"08:00",
    "13:00",
    "16:00",
];


@Injectable()
export class AreaComunResidenteService {
    getArea() {
		return area;
	}

	getTipo() {
		return tipo;
	}
	getListaDeAreasComunes() {
		return listaDeAreasComunes;
	}
    getHorasDisponibles() {
		return horasDisponibles;
	}
}
