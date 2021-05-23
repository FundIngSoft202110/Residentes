import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { IPRESIDENTES } from 'src/app/constants';
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
      fechaHora: 1554090856000,
      rolEmpleado: 'X',
      rolAdmin: 'destinatario'
     },
     {
      contenido: 'No pasa nada',
      fechaHora: 1554090856000,
      rolEmpleado: 'X',
      rolAdmin: 'remitente'
     },
     {
      contenido: 'Luego te cuentoooooo',
      fechaHora: 1554090856000,
      rolEmpleado: 'X',
      rolAdmin: 'remitente'
     },
     {
      contenido: 'Gracias',
      fechaHora: 1554090856000,
      rolEmpleado: 'X',
      rolAdmin: 'destinatario'
     },
     {
      contenido: 'A que horas es el te',
      fechaHora: 1554090856000,
      rolEmpleado: 'X',
      rolAdmin: 'destinatario'
     },
     {
      contenido: 'A las 8pm',
      fechaHora: 1554090856000,
      rolEmpleado: 'X',
      rolAdmin: 'remitente'
     }

  ]
    private  mensajes:Chat[] = [
      {

      contenido: 'Buenaaaaaas',
      fechaHora: 1554090856000,
      rolEmpleado: 'destinatario',
      rolAdmin: 'X'
    },
    {

      contenido: 'Como se encuentra ud el dia de hoy',
      fechaHora: 1554090956000,
      rolEmpleado: 'remitente',
      rolAdmin: 'X'
    },
    {
      contenido: 'Sr Daviiiiiiiiiiiiid',
      fechaHora: 1554091056000,
      rolEmpleado: 'remitente',
      rolAdmin: 'X'
    },
    {
      contenido: 'Bien gracias, un fa, me puedes llamar cuando inicie la novela?',
      fechaHora: 1554091156000,
      rolEmpleado: 'destinatario',
      rolAdmin: 'X'
    },
    {
      contenido: 'R',
      fechaHora: 1554091256000,
      rolEmpleado: 'remitente',
      rolAdmin: 'X'
    }
  ];
  constructor(private http: HttpClient) { }

  getMensajes(){
    return this.chat;
  }

  getMsjs() {
    return this.mensajes;
  } // end getConjuntos
  getMsjsAdmin(){
    return this.mensajesAd;
  }

  chat: any;
  obtener(url: string) {
    this.chat = [];
    this.getChatss(url)
      .subscribe(respuesta => {
        console.log("subscirbe ", respuesta);
        this.chat = respuesta;
      })
  }

  getMsjsEmpApto(idConjunto : number , idApto: number,idEmp:number ){
    console.log("consulta EMPLE APTO");
    this.obtener(IPRESIDENTES + "consultas/mensajes/chatEmpleApto/" +idConjunto.toString()+"/"+idApto.toString()+"/"+idEmp.toString());
  }

  getMsjsEmpAdm(idConjunto : number , idAdmin: number,idEmp:number ){
    this.obtener(IPRESIDENTES + "consultas/mensajes/chatEmpleAdmin/" +idConjunto.toString()+"/"+idAdmin.toString()+"/"+idEmp.toString());
    console.log("entre pez" ,idConjunto, idAdmin, idEmp );
  }

  getMsjsAdminApto(idConjunto : number , idAdmin: number,idApto:number ){
    console.log("consulta ADMIN APTO");
    this.obtener(IPRESIDENTES + "consultas/mensajes/chatAdminApto/" +idConjunto.toString()+"/"+idAdmin.toString()+"/"+idApto.toString());
  }




  public getChatss(url: string) {
    return this.http.get(url);
  }

  addChats( contenido: string, fechaHora: number, rolEmpleado: string,rolAdmin:string){ 
    this.mensajes.push({
      contenido,
      fechaHora,
      rolEmpleado,
      rolAdmin
    });
  } // end addConjunto
  addChatsAd( contenido: string, fechaHora: number, rolEmpleado: string,rolAdmin:string){ 
    this.chat.push({
      contenido,
      fechaHora,
      rolEmpleado,
      rolAdmin
    });
  } // end addConjunto

  public postNuevoMsj(url:string,body){
    console.log("hello");
    return this.http.post(url,body);
    
 }

}
