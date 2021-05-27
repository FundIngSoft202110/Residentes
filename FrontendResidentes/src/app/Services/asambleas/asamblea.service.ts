import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';


export class Asamblea {
	IdAsamblea: number;
	ConjuntoIdConjunto:number;
	Fecha: string;
	Tema: string;
	Estado: string;
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
			IdAsamblea: 1,
			ConjuntoIdConjunto: 1,
			Fecha: "2021/05/01",
			Tema: "Junta anual",
			Estado: "Activa"
		},
		{
			IdAsamblea: 2,
			ConjuntoIdConjunto: 1,
			Fecha: "2021/02/21",
			Tema: "Junta extraordinaria",
			Estado: "Finalizada"
		},
		{
			IdAsamblea: 3,
			ConjuntoIdConjunto: 1,
			Fecha: "2021/06/21",
			Tema: "Junta extraordinaria",
			Estado: "Programada"
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
		return this.asambleas.find(asamblea => { return asamblea.IdAsamblea == id });
	}

	getNopciones() {
		return Nopciones;
	}
}
