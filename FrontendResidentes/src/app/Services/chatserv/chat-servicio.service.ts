import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { Chat } from './chat.model';
import { mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})




export class ChatServicioService {
  msj : mensaje;
    private mensajesAd: Chat[]= [
      {
      contenido: 'Hola me dormi en la reu',
      fecha_hora: 1554090856000,
      rolempleado: 'X',
      roladmin: 'destinatario'
     },
     {
      contenido: 'No pasa nada',
      fecha_hora: 1554090856000,
      rolempleado: 'X',
      roladmin: 'remitente'
     },
     {
      contenido: 'Luego te cuento',
      fecha_hora: 1554090856000,
      rolempleado: 'X',
      roladmin: 'remitente'
     },
     {
      contenido: 'Gracias',
      fecha_hora: 1554090856000,
      rolempleado: 'X',
      roladmin: 'destinatario'
     },
     {
      contenido: 'A que horas es el te',
      fecha_hora: 1554090856000,
      rolempleado: 'X',
      roladmin: 'destinatario'
     },
     {
      contenido: 'A las 8pm',
      fecha_hora: 1554090856000,
      rolempleado: 'X',
      roladmin: 'remitente'
     }

  ]
    private  mensajes:Chat[] = [
      {

      contenido: 'Buenaaaaaas',
      fecha_hora: 1554090856000,
      rolempleado: 'destinatario',
      roladmin: 'X'
    },
    {

      contenido: 'Como se encuentra ud el dia de hoy',
      fecha_hora: 1554090956000,
      rolempleado: 'remitente',
      roladmin: 'X'
    },
    {
      contenido: 'Sr David',
      fecha_hora: 1554091056000,
      rolempleado: 'remitente',
      roladmin: 'X'
    },
    {
      contenido: 'Bien gracias, un fa, me puedes llamar cuando inicie la novela?',
      fecha_hora: 1554091156000,
      rolempleado: 'destinatario',
      roladmin: 'X'
    },
    {
      contenido: 'R',
      fecha_hora: 1554091256000,
      rolempleado: 'remitente',
      roladmin: 'X'
    }
  ];
  constructor(private http: HttpClient) { }

  getMsjs() {
    return this.mensajes;
  } // end getConjuntos
  getMsjsAdmin(){
    return this.mensajesAd;
  }
  addChats( contenido: string, fecha_hora: number, rolempleado: string,roladmin:string){ 
    this.mensajes.push({
      contenido,
      fecha_hora,
      rolempleado,
      roladmin
    });
  } // end addConjunto
  addChatsAd( contenido: string, fecha_hora: number, rolempleado: string,roladmin:string){ 
    this.mensajesAd.push({
      contenido,
      fecha_hora,
      rolempleado,
      roladmin
    });
  } // end addConjunto

  public postNuevoMsj(url:string,body){
    return this.http.post(url,body);
    
 }

}
