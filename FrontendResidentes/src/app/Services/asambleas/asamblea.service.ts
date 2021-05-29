import { HttpClient } from '@angular/common/http';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';

export class AsambleaPK{
    idAsamblea: number;
    ConjuntoIdConjunto :number;
}

export class Asamblea {
	asambleaPK: AsambleaPK;
	ConjuntoIdConjunto: number;
	fecha: number;
	hora: number;
	Tema: number;
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

	private asambleas: any;

	private asambleaAbierta: number;

	constructor(private http: HttpClient) {
	}

	setAsambleaAbierta(id: number) {
		window.localStorage['asambleaAbierta'] = id.toString();
	}// setAsambleaAbierta

	getAsambleaAbierta() {
		this.asambleaAbierta = Number(window.localStorage['asambleaAbierta'] || -1);
		if (this.asambleaAbierta == -1)
			return null;
		else
			return this.asambleaAbierta;
	}// getAsambleaAbierta

	public getConjuntoUrl(url: string) {
		return this.http.get(url);
	} // end getConjuntoUrl

	async cargarAsambleas(numConjunto: number) {
		this.getConjuntoUrl(IPRESIDENTES + "consultas/asambleas/" + numConjunto.toString())
			.subscribe(respuesta => {
				this.asambleas = respuesta;
			})
	}

	getAsambleas() {
		return this.asambleas;
	}

	getNopciones() {
		return Nopciones;
	}
}
