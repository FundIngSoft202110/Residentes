import { Injectable } from '@angular/core';
import { PersonasService } from '../personas/personas.service';
import { Conjunto } from './conjunto.model';
import { HttpClient } from '@angular/common/http';
import { IPRESIDENTES, MONTHS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class ConjuntosService {
  conjuntoxPersona : any;
  private fechaActual:any;

  private conjuntoPago:any;

  constructor(private http: HttpClient) { 
  }

  getConjuntos() {
    return this.conjuntoxPersona;
  } // end getConjuntos

	setConjuntoActivo(id: number) {
		window.localStorage['conjuntoActivo'] = id.toString();
	}// setConjuntoActivo

	getConjuntoActivo(){
		return Number(window.localStorage['conjuntoActivo'] || -1);
	}// getConjuntoActivo

  public getConjuntoUrl(url: string) {
    return this.http.get(url);
  } // end getConjuntoUrl

  public putConjuntoUrl(url: string) {
    return this.http.put(url,this.conjuntoPago);
  }

  async getPagoAdmin(numConjunto: number, numApto: number) {
    this.getConjuntoUrl(IPRESIDENTES + "consultas/Conjuntos/cuotaAdmin/"+numConjunto.toString()+"/"+numApto.toString())
      .subscribe(respuesta => {
        this.conjuntoPago = respuesta;
      })
  }

  async getConjuntosPersona(idPersona: number) {
    this.getConjuntoUrl(IPRESIDENTES + "consultas/Conjuntos/netflix/" + idPersona)
      .subscribe(respuesta => {
        this.conjuntoxPersona = respuesta;
      })
  }

  varRes:any;
  
  async pagarAdmin(numConjunto: number, numApto: number) {
    this.putConjuntoUrl(IPRESIDENTES + "consultas/Conjuntos/pagarAdmin/"+numConjunto.toString()+"/"+numApto.toString())
      .subscribe(respuesta => {
        this.varRes = respuesta;
        console.log("Respuesta = ", this.varRes);
      })
  }

  async cargarFechaActual() {
    this.getConjuntoUrl(IPRESIDENTES + "consultas/Conjuntos/fechaActual")
      .subscribe(respuesta => {
        this.fechaActual = respuesta;
      })
  } // end cargarFechaActual

  getConjuntoPago(){
    return this.conjuntoPago;
  }

  getFechaActual(){
    return this.fechaActual;
  } // end getFechaActual

  convertHour(hour: number):string{ // 2315
    var minutes:number;
    var hours:number;
    minutes = Math.trunc(hour%100);
    hours = Math.trunc((hour/100)%100);
    if(hours > 11){
      hours -= 12;
      if(minutes > 9)
        return hours.toString() + ":" + minutes.toString() + " pm";
      else
        return hours.toString() + ":0" + minutes.toString() + " pm";
    }else{
      if(minutes > 9)
        return hours.toString() + ":" + minutes.toString() + " am";
      else
      return hours.toString() + ":0" + minutes.toString() + " am";
    } // end if
  } // end convertHour

  convertDate(date: number):string{  // 29052021
    var year:number;
    var month:number;
    var day:number;
    year = Math.trunc(date%10000);
    month = Math.trunc((date/10000)%100);
    day = Math.trunc((date/1000000)%100);
    return MONTHS[Math.trunc(month)-1] + " " + day.toString() + " " + year.toString();
  } // end convertDate

} // end ConjuntosService
