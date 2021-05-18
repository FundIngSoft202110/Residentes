import { Injectable } from '@angular/core';

export class Area {
    Tipo: string;
	ListaDeAreasComunes: string;
}

let area: Area = {
    "Tipo": "Deportivo",
    "ListaDeAreasComunes": "Cancha de futbol"
};

let tipo: string[] = [
    "Deportivo",
    "Relajante",
    "Social"
];

let listaDeAreasComunes: string[] = [
    "Cancha de futbol",
    "Salon Comunal",
    "Piscina"
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
}
