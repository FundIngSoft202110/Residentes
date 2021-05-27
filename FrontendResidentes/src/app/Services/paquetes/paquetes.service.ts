import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';
import { Paquete } from './paquete.model';


@Injectable({
  providedIn: 'root'
})
export class PaquetesService {
  private paquetes:any;
  constructor(private http: HttpClient) { }

  public getPaquetesUrl(url: string) {
    return this.http.get(url);
  } // end getPaquetesUrl

  public postPaquetesUrl(url: string, body:any) {
    return this.http.post(url,body);
  } // end postPaquetesUrl

  public deletePaquetesUrl(url: string) {
    return this.http.delete(url);
  } // end deletePaquetesUrl

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

  async elimnarPaquete(numConjunto: number, numApto: number, numPaquete:number) {
    this.deletePaquetesUrl(IPRESIDENTES + "consultas/paquetes/eliminarPaquete/"+numConjunto.toString()+"/"+numApto.toString()+"/"+numPaquete.toString())
      .subscribe(respuesta => {
        console.log("Respuesta: ", respuesta);
      })
  } // end cargarPaquetes
  
  getPaquetes() {
    return this.paquetes;
  } // end getPaquetes

} // end PaquetesService
