import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';


@Injectable()
export class QuejaService {
	constructor(private http: HttpClient){

	}
	url:string;

	public envioQueja(body:any){
		this.url= IPRESIDENTES + "consultas/quejas/nuevaQueja/";
		return this.http.post(this.url, body);
		
	 }
}