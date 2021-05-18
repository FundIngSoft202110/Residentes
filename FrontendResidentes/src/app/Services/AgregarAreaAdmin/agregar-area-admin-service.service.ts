import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



export class NuevaArea {
    areacomunPK: AreaComunPK;
    nombre: string;
	tipo: string;
	capacidad: number;
	descripcion: string; 
    estado: string;
}

export class AreaComunPK{
    conjuntoIdConjunto : any;
}



let tipo: string[] = [
    "Deportiva",
    "Social",
    "Relajante"
];






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

    public postAreaNueva(url:string,body:any){
        return this.http.post(url,body);
  
     }
    
}
