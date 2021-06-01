import { HttpClient } from '@angular/common/http';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { IPRESIDENTES, IPRESIDENTESA } from 'src/app/constants';

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
    private asambleaEstado:string;

	private asambleas: any;

	private asambleaAbierta: number;

	private resultadosVoto:any;

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

	getAsambleaEstado() {
		this.asambleaEstado = window.localStorage['asambleaEstado'] ;
		return this.asambleaEstado;
	}// getAsambleaAbierta

	setAsambleaEstado(estado: string) {
		window.localStorage['asambleaEstado'] = estado;
	}// setAsambleaAbierta

	public getAsambleaUrl(url: string) {
		return this.http.get(url);
	} // end getConjuntoUrl

	async cargarAsambleas(numConjunto: number) {
		this.getAsambleaUrl(IPRESIDENTESA + "/consultas/asambleas/" + numConjunto.toString())
			.subscribe(respuesta => {
				this.asambleas = respuesta;
			})
	} // end cargarAsambleas

	async cargarResultadosVoto(numConjunto:number, numAsamblea:number) {
		this.getAsambleaUrl(IPRESIDENTESA + "/consultas/asambleas/resultadosVotos/" + numConjunto.toString() + "/" + numAsamblea.toString())
			.subscribe(respuesta => {
				this.resultadosVoto = respuesta;
			})
	} // end cargarResultadosVoto

	getAsamblea(idAsamblea:number){
		for(let asam of this.asambleas)
			if(asam.asambleaPK.idAsamblea == idAsamblea)
				return asam;
		return null;
	} // end getAsamblea

	getAsambleas() {
		return this.asambleas;
	} // end getAsambleas

	getNopciones() {
		return Nopciones;
	} // end getNopciones

	getResultadosVoto(){
		return this.resultadosVoto;
	} // end getResultadosVoto
}
