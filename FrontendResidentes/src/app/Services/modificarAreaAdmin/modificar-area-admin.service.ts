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
    
}
