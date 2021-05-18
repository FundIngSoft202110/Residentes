import { Injectable } from '@angular/core';
import { AptosService } from '../aptos/aptos.service';
import { ConjuntosService } from '../conjuntos/conjuntos.service';
import { Paquete } from './paquete.model';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {

  private paquetes : Paquete[] = [
    {
      id: 1,
      idApto: 1,
      idConjunto: 1,
      tamano:'mediano',
      fecha:'01/05/2021',
      hora:'14:20',
      remitente:'ServiEntrega'
    },
    {
      id: 2,
      idApto: 1,
      idConjunto: 1,
      tamano:'pequeño',
      fecha:'20/10/2021',
      hora:'19:40',
      remitente:'MercadoLibre'
    },
    {
      id: 3,
      idApto: 2,
      idConjunto: 1,
      tamano:'grande',
      fecha:'10/11/2022',
      hora:'17:55',
      remitente:'Rapidisimo'
    },
    {
      id: 4,
      idApto: 2,
      idConjunto: 1,
      tamano:'mediano',
      fecha:'08/02/2021',
      hora:'21:40',
      remitente:'Amazon'
    },
    {
      id: 5,
      idApto: 1,
      idConjunto: 1,
      tamano:'pequeño',
      fecha:'14/06/2021',
      hora:'05:35',
      remitente:'Amazon'
    }
  ]
  
  private idApto : Number;
  private idConjunto : Number;
  private paquetesAux : Paquete[] = [];
  constructor(private conjuntosService : ConjuntosService, private aptosService : AptosService) { }


  getPaquete(id:number){
    return this.paquetes.find(paquete => { return paquete.id == id });
  }

  // Toco mandar el conjunto y apartamento en el Back.
  getPaquetes() {
    this.idApto = this.aptosService.getAptoActivo().id;
    this.idConjunto = this.conjuntosService.getConjuntoActivo();
    for(let paquete of this.paquetes){
      if(paquete.idConjunto == this.idConjunto && paquete.idApto == this.idApto){
        this.paquetesAux.push(paquete);
      }
    }
    return this.paquetesAux;
  } 



}
