import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


export class NuevaArea {
    areacomunPK: AreaComunPK;
    nombre: string;
	tipo: string;
	capacidad: number;
	descripcion: string; 
    estado: string;
    horaApertura: number;
	horaCierre: number;
	nombreDia: string; 
}

export class AreaComunPK{
    conjuntoIdConjunto : any;
}





let tipo: string[] = [
    "Deportiva",
    "Social",
    "Relajante"
];

let horaDeApertura: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let horaDeCierre: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

let diasDisponibles: string[] = ["Lunes-Viernes", "Lunes-Domingo", "Viernes-Domingo"];





@Injectable()
export class AgregarAreaAdminServiceService {
   

   

	getTipo() {
		return tipo;
	}
    constructor(private http: HttpClient){

    }
 
    public getAreasComunes(url:string){
     return this.http.get(url);

   }
 // AGREGAR AREA COMUN
    public postAreaNueva(url:string,body:any){
        return this.http.post(url,body);
  
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

  
    // TREAER AREA COMUN
    public getAreaEspecifica(url:string){
        return this.http.get(url);
    }
    
}
