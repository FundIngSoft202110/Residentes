import { Injectable } from '@angular/core';


export class Asamblea {
	IdAsamblea: number;
	FechaAsamblea: string;
	Tema: string;
	NumeroPropuestas: number;
}

export class Opciones {
	IdPropuesta: number;
	Nombre: string;
}

let Nopciones: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


@Injectable({
	providedIn: 'root'
})
export class AsambleaService {

	private asambleas: Asamblea[] = [
		{
			IdAsamblea: 1,
			FechaAsamblea: "2021/04/21",
			Tema: "Junta anual 2021",
			NumeroPropuestas: 2,
		},
		{
			IdAsamblea: 2,
			FechaAsamblea: "2021/06/21",
			Tema: "Junta extraordinaroa junio 2021",
			NumeroPropuestas: 0,
		}
	]

	getAsambleas(){
		return this.asambleas;
	}

	getAsamblea(idAsamblea:number) {
		return this.asambleas.find(asamblea => {return asamblea.IdAsamblea == idAsamblea});
	}


	getNopciones() {
		return Nopciones;
	}
}
