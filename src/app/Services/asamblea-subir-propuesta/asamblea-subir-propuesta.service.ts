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
	"FechaAsamblea": "1964/03/16",
	"Tema": "Nuevo Presidente",
	"NumeroPropuestas": 2,
};

let opciones: Opciones[] = [{
    "IdPropuesta": 1,
    "Nombre": "Andres"
    
},{
    "IdPropuesta": 2,
    "Nombre": "Alejo"
    
    
}];
    
   

let Nopciones: number[] = [1,2,3,4,5,6,7,8,9,20,11,12,13];


@Injectable({
  providedIn: 'root'
})
export class AsambleaSubirPropuestaService {

  getAsamblea() {
		return asamblea;
	}

	getOpciones() {
		return opciones;
	}
	getNopciones() {
		return Nopciones;
	}
}
