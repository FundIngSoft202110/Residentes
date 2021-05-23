import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPRESIDENTES } from 'src/app/constants';
import { AptosService } from '../aptos/aptos.service';
import { ConjuntosService } from '../conjuntos/conjuntos.service';
import { Paquete } from './paquete.model';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {
  
  private paquetes:any;
  constructor(private conjuntosService : ConjuntosService, private aptosService : AptosService, private http: HttpClient) { }

  public getPaquetesUrl(url: string) {
    return this.http.get(url);
  }

  async cargarPaquetes(numConjunto: number, numApto: number) {
    this.getPaquetesUrl(IPRESIDENTES + "consultas/paquetes/"+numConjunto.toString()+"/"+numApto.toString())
      .subscribe(respuesta => {
        this.paquetes = respuesta;
      })
  }
  // Toco mandar el conjunto y apartamento en el Back.
  getPaquetes() {
    return this.paquetes;
  } 
  
}
