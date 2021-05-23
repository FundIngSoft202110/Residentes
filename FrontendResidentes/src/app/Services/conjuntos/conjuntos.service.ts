import { Injectable } from '@angular/core';
import { PersonasService } from '../personas/personas.service';
import { Conjunto } from './conjunto.model';
import { HttpClient } from '@angular/common/http';
import { IPRESIDENTES } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class ConjuntosService {

  private conjuntos:Conjunto[] = [ 
    {
      id: 1,
      nombre: 'Mari1',
      linkDePago: 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=446&searchedCategoryId=&searchedAgreementName=CON%20UNIDAD%20RESID%20%20EL%20QUIRINAL',
      direccion: 'Carrera 68 # 26 - 48',
      precioAdmin: 545000,
      manual: 'ManualMaria.pdf'
    },
    {
      id: 2,
      nombre: 'Conjuntos Quirinal',
      linkDePago: 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=446&searchedCategoryId=&searchedAgreementName=CON%20UNIDAD%20RESID%20%20EL%20QUIRINAL',
      direccion: 'Carrera 68 # 26 - 48',
      precioAdmin: 545000,
      manual: 'ManualMaria.pdf'
    },
    {
      id: 3,
      nombre: 'El Trebol',
      linkDePago: 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=446&searchedCategoryId=&searchedAgreementName=CON%20UNIDAD%20RESID%20%20EL%20QUIRINAL',
      direccion: 'Carrera 68 # 26 - 48',
      precioAdmin: 545000,
      manual: 'ManualMaria.pdf'
    }
  ]

  private conjuntoPago:any;

  constructor(private personasService:PersonasService, private http: HttpClient) { 
    this.setConjuntoActivo(1);
  }

  getConjuntos() {
    /// pide a la base los conjutnos que son de esa persona this.personasService.getUserActivo();
    return this.conjuntos;
  } // end getConjuntos

  getConjunto(conjuntoId:number) { 
    return this.conjuntos.find(conjunto => { return conjunto.id == conjuntoId });
  }// end getConjunto

	setConjuntoActivo(id: number) {
		window.localStorage['conjuntoActivo'] = id.toString();
	}// setConjuntoActivo

	clearConjuntoActivo(){
		window.localStorage.clear();
	}

	getConjuntoActivo(){
		return Number(window.localStorage['conjuntoActivo'] || -1);
	}// getConjuntoActivo

  public getPagoAdminUrl(url: string) {
    return this.http.get(url);
  }

  public putPagoAdminUrl(url: string) {
    return this.http.put(url,this.conjuntoPago);
  }

  async getPagoAdmin(numConjunto: number, numApto: number) {
    this.getPagoAdminUrl(IPRESIDENTES + "consultas/Conjuntos/cuotaAdmin/"+numConjunto.toString()+"/"+numApto.toString())
      .subscribe(respuesta => {
        this.conjuntoPago = respuesta;
      })
  }


  varRes:any;
  
  async pagarAdmin(numConjunto: number, numApto: number) {
    this.putPagoAdminUrl(IPRESIDENTES + "consultas/Conjuntos/pagarAdmin/"+numConjunto.toString()+"/"+numApto.toString())
      .subscribe(respuesta => {
        this.varRes = respuesta;
        console.log("Respuesta = ", this.varRes);
      })
  }

  getConjuntoPago(){
    return this.conjuntoPago;
  }

}
