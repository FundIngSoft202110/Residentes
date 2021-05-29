import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class Area {
  
	Selccionada: any	;
}


export class listaAreas{
   respuesta : any;
};



let tipo: string[] = [
    "Deportiva",
    "Relajante",
    "Social"
];

let listaDeAreasComunes: string[] = [
    "Cancha de futbol",
    "Salon Comunal",
    "Piscina"
];



@Injectable()
export class AreaComunAdminService {

	constructor(private http: HttpClient){

	}
	getArea() {
	  
	}

	getTipo() {
		return tipo;
	}
	getListaDeAreasComunes() {
		return listaDeAreasComunes;
	}
	getAreasBack(url:string){
       return this.http.get(url);
	}
}

