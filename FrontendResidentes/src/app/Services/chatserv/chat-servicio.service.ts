import { Injectable } from '@angular/core';
import { Chat } from './chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatServicioService {
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
  constructor() { }

  getMsjs() {
    return this.mensajes;
  } // end getConjuntos

  addChats( contenido: string, fecha_hora: number, rolempleado: string,roladmin:string){ 
    this.mensajes.push({
      contenido,
      fecha_hora,
      rolempleado,
      roladmin
    });
  } // end addConjunto

}
