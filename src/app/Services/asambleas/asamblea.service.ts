import { Injectable } from '@angular/core';


export class Asamblea {
	IdAsamblea: number;
	FechaAsamblea: string;
	Tema: string;
	NumeroPropuestas: number;
}

export class Opciones{
    IdPropuesta: number;
    Nombre: string;
}

let asamblea: Asamblea = {
    "IdAsamblea":1,
	"FechaAsamblea": "2021/04/21",
	"Tema": "Junta anual 2021",
	"NumeroPropuestas":0,
};

    
   

let Nopciones: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];


@Injectable({
  providedIn: 'root'
})
export class AsambleaService {

  getAsamblea() {
		return asamblea;
	}


	getNopciones() {
		return Nopciones;
	}
}
