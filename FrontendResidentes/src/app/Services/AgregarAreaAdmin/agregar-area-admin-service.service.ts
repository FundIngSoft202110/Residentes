import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



export class NuevaArea {
    Idconjunto: any;
    NombreDelArea: string;
	Tipo: string;
	CapacidadMaxima: number;
	Descripcion: string; 
    Estado: string;
}




let tipo: string[] = [
    "Deportiva",
    "Social",
    "Relajante"
];






@Injectable()
export class AgregarAreaAdminServiceService {
   

    setIdConjunto(id:any){
      
    }

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
