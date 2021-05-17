import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';


export class Asamblea {
	IdAsamblea: number;
	FechaAsamblea: string;
	Tema: string;
	NumeroPropuestas: number;
	Activo: string;
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
			FechaAsamblea: "2021/05/01",
			Tema: "Junta anual",
			NumeroPropuestas: 0,
			Activo: "Activa"
		},
		{
			IdAsamblea: 2,
			FechaAsamblea: "2021/02/21",
			Tema: "Junta extraordinaria",
			NumeroPropuestas: 0,
			Activo: "Finalizada"
		},
		{
			IdAsamblea: 3,
			FechaAsamblea: "2021/06/21",
			Tema: "Junta extraordinaria",
			NumeroPropuestas: 0,
			Activo: "Programada"
		}
	]

	private asambleaAbierta: number;

	setAsambleaAbierta(idAsamblea: number) {
		window.localStorage['asambleaAbierta'] = idAsamblea.toString();
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

	getAsamblea(idAsamblea: number) {
		return this.asambleas.find(asamblea => { return asamblea.IdAsamblea == idAsamblea });
	}


	getNopciones() {
		return Nopciones;
	}
}
