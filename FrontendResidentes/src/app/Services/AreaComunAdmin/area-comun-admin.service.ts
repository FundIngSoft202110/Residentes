import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class Area {
  
	Seleccionada: any	;
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



@Injectable({
	providedIn: 'root'
  })
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
	
	deleteArea(url:string){
		return this.http.delete(url);
	}
	setareaComun( nombre:String) {
		window.localStorage['nombreAreaComun'] = nombre;
	}// setareaComun

	getareaComun(){
		return String(window.localStorage['nombreAreaComun'] || -1);
	}// getConjuntoActivo

	getstate(url:string){
      return this.http.get(url);
	}

	putestador(url:string, body:any){
		return this.http.put(url,body);
	}

}

