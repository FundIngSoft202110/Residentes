import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class NuevaArea {
    NombreDelArea: string;
	Tipo: string;
	CapacidadMaxima: number;
	Descripcion: string;
}

let nuevaArea: NuevaArea = {

    "NombreDelArea": "Piscina",
    "Tipo":"Deportiva",
    "CapacidadMaxima": 10,
    "Descripcion":"Espacio en el cual podra disfritar con su familia",
};

let tipo: string[] = [
    "Deportiva",
    "Social",
    "Relajante"
];

let horaDeApertura: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let horaDeCierre: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let diasDisponibles: string[] = ["Lunes-Viernes", "Lunes-Domingo", "Viernes-Domingo"];





@Injectable()
export class ModificarAreaAdminService {
    constructor(private http: HttpClient){

    }
    getNuevaArea() {
		return nuevaArea;
	}

	getTipo() {
		return tipo;
	}
   putAreaComun(url:string, body : any){
       return this.http.put(url,body);
   }
   
   getAreaComun(url:string){
       return this.http.get(url);
   }
   getHoraDeApertura() {
    return horaDeApertura;
}

getHoraDeCierre() {
    return horaDeCierre;
}

getDiasDisponibles() {
    return diasDisponibles;
}
    
}
