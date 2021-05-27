import { Injectable, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class FechaArea {
	horaApertura: string;
	horaCierre: string;
	nombreDia: string; 
	areacomun: AreaComun;
}

export class AreaComun{
	areacomunPK:areaComunPKfecha;

}

export class areaComunPKfecha{
    idArea:any;
	conjuntoIdConjunto: any;
}





let horaDeApertura: string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

let horaDeCierre: string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

let diasDisponibles: string[] = ["Lunes-Viernes", "Lunes-Domingo", "Viernes-Domingo"];


@Injectable()
export class AgregarFechaAreaService {

	constructor(private http: HttpClient){

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

	getDiasDisponiblesBack(url:string) {
		return this.http.get(url);
	}
	
	postDiasDisponibles(url:string, body: any){
		return this.http.post(url,body);
	}

}

