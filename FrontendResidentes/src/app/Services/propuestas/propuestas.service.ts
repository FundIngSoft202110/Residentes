import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';
import { Propuesta } from './propuesta.model';

@Injectable({
  providedIn: 'root'
})
export class PropuestasService {

  private propuestas:any;

  constructor(private http: HttpClient) { }

  private propuestaAbierta: number;

	setPropuestaAbierta(IdPropuesta: number) {
		window.localStorage['propuestaAbierta'] = IdPropuesta.toString();
	}// setPropuestaAbierta

	getPropuestaAbierta():number{
		this.propuestaAbierta = Number(window.localStorage['propuestaAbierta'] || -1);
		if(this.propuestaAbierta == -1)
			return null;
		else
			return this.propuestaAbierta;
	}// getPropuestaAbierta

  public getPropuestaUrl(url: string) {
		return this.http.get(url);
	} // end getPropuestaUrl

	async cargarPropuestas(numConjunto: number, numApto:number, numAsamblea:number) {
		this.getPropuestaUrl(IPRESIDENTES + "consultas/asambleas/mostrarPropuestas/"+numConjunto.toString()+"/"+numApto.toString()+"/"+numAsamblea.toString())
			.subscribe(respuesta => {
				this.propuestas = respuesta;
			})
	} // end cargarPropuestas

  getPropuestas() {
    return this.propuestas;
  }// end getPropuestas

} // end PropuestasService
