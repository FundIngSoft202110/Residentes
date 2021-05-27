import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';
import { Paquete } from './paquete.model';


@Injectable({
  providedIn: 'root'
})
export class PaquetesService {
  private paquetes:any;
  private fechaActual:any;
  constructor(private http: HttpClient) { }

  public getPaquetesUrl(url: string) {
    return this.http.get(url);
  } // end getPaquetesUrl

  public postPaquetesUrl(url: string, body:any) {
    return this.http.post(url,body);
  } // end postPaquetesUrl

  async nuevoPaquete(paquete:Paquete){
    this.postPaquetesUrl(IPRESIDENTES + "consultas/paquetes/nuevoPaquete", paquete)
    .subscribe(respuesta =>{
      console.log("Respuesta: ", respuesta);
    })
  }

  async cargarPaquetes(numConjunto: number, numApto: number) {
    this.getPaquetesUrl(IPRESIDENTES + "consultas/paquetes/"+numConjunto.toString()+"/"+numApto.toString())
      .subscribe(respuesta => {
        this.paquetes = respuesta;
      })
  } // end cargarPaquetes

  async cargarFechaActual() {
    this.getPaquetesUrl(IPRESIDENTES + "consultas/paquetes/fechaActual")
      .subscribe(respuesta => {
        this.fechaActual = respuesta;
      })
  } // end cargarFechaActual
  
  getPaquetes() {
    return this.paquetes;
  } // end getPaquetes

  getFechaActual(){
    return this.fechaActual;
  } // end getFechaActual
  
} // end PaquetesService
