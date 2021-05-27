import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';


export class Asamblea {
	id: number;
	fecha: string;
	tema: string;
	NumeroPropuestas: number;
	estado: string;
}

export class Opciones {
	IdPropuesta: number;
	Nombre: string;
}

let Nopciones: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


@Injectable({
	providedIn: 'root'
})
export class AsambleaService {

	private asambleas: Asamblea[] = [
		{
			id: 1,
			fecha: "2021/05/01",
			tema: "Junta anual",
			NumeroPropuestas: 0,
			estado: "Activa"
		},
		{
			id: 2,
			fecha: "2021/02/21",
			tema: "Junta extraordinaria",
			NumeroPropuestas: 0,
			estado: "Finalizada"
		},
		{
			id: 3,
			fecha: "2021/06/21",
			tema: "Junta extraordinaria",
			NumeroPropuestas: 0,
			estado: "Programada"
		}
	]

	private asambleaAbierta: number;

	setAsambleaAbierta(id: number) {
		window.localStorage['asambleaAbierta'] = id.toString();
	}// setAsambleaAbierta

	clearAsambleaAbierta(){
		window.localStorage.clear();
	}

	getAsambleaAbierta(){
		this.asambleaAbierta = Number(window.localStorage['asambleaAbierta'] || -1);
		if(this.asambleaAbierta == -1)
			return null;
		else
			return this.getAsamblea(this.asambleaAbierta);
	}// getAsambleaAbierta

	getAsambleas() {
		return this.asambleas;
	}

	getAsamblea(id: number) {
		return this.asambleas.find(asamblea => { return asamblea.id == id });
	}


	getNopciones() {
		return Nopciones;
	}
}
