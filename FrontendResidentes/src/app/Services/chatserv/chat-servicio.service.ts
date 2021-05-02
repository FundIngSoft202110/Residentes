import { Injectable } from '@angular/core';
import { Chat } from './chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatServicioService {
    private  mensajes:Chat[] = [
      {
      Remitente: 'David',
      Destinatario: 'María',
      Contenido: 'Buenaaaaaas',
      Fecha_Hora: 1554090856000
    },
    {
      Remitente: 'María',
      Destinatario: 'David',
      Contenido: 'Como se encuentra ud el dia de hoy',
      Fecha_Hora: 1554090956000
    },
    {
      Remitente: 'María',
      Destinatario: 'David',
      Contenido: 'Sr David',
      Fecha_Hora: 1554091056000
    },
    {
      Remitente: 'David',
      Destinatario: 'María',
      Contenido: 'Bien gracias, un fa, me puedes llamar cuando inicie la novela?',
      Fecha_Hora: 1554091156000
    },
    {
      Remitente: 'María',
      Destinatario: 'David',
      Contenido: 'R',
      Fecha_Hora: 1554091256000
    }
  ];
  constructor() { }

  getMsjs() {
    return this.mensajes;
  } // end getConjuntos

  addChats(Remitente: string, Destinatario: string, Contenido: string, Fecha_Hora: number){ 
    this.mensajes.push({
      Remitente,
      Destinatario,
      Contenido,
      Fecha_Hora
    });
  } // end addConjunto

}
