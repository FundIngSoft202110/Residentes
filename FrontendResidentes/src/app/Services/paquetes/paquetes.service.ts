import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {
  
  private paquetes:any;
  constructor(private http: HttpClient) { }

  public getPaquetesUrl(url: string) {
    return this.http.get(url);
  }

  async cargarPaquetes(numConjunto: number, numApto: number) {
    this.getPaquetesUrl(IPRESIDENTES + "consultas/paquetes/"+numConjunto.toString()+"/"+numApto.toString())
      .subscribe(respuesta => {
        this.paquetes = respuesta;
      })
  }
  
  getPaquetes() {
    return this.paquetes;
  } 
  
}
