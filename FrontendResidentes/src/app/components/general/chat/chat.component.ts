import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ChatServicioService } from 'src/app/Services/chatserv/chat-servicio.service';
import { LstChatServicioService } from 'src/app/Services/lstChatServ/lst-chat-servicio.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chatn: any;
  chatid: any;
  chatrol: any;
  mensajes = [];
  usuActual = '';
  usuDesti= '';
  newMsg: string = '';
  public user: string = "RESIDENTE";
  public usuario: string;
  @ViewChild(IonContent) content: IonContent

  constructor(private serChats: LstChatServicioService,private chatServ:ChatServicioService, private personasService:PersonasService ) {
      
   }

  ngOnInit(){
    console.log("foasdjfidsajf");
    this.chatn= this.serChats.getChatN();
    this.chatid= this.serChats.getChatId();
    this.chatrol= this.serChats.getRol();
    console.log(this.chatn+"qaui");
    console.log(this.chatid+"id");
    console.log(this.chatrol+"id");
    this.usuario = this.personasService.getUserActivo();
    this.usuDesti= 'María';
    this.usuActual = 'David';
    this.mensajes = this.chatServ.getMsjs(); 
   
  }

  enviarMensaje() {
    if(this.usuario == "RESIDENTE" && this.chatrol== "empleado"){
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "destinatario", "X");
    }
    if(this.usuario == "RESIDENTE" && this.chatrol== "administrador"){
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "X", "destinatario");
    }
    
    if(this.usuario == "ADMIN" && this.chatrol== "empleado"){
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "destinatario", "X");
    }
    if(this.usuario == "ADMIN" && this.chatrol== "apartamento"){
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "X", "remitente");
    }

    if(this.usuario == "EMPLEADO" && this.chatrol== "administrador"){
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "remitente", "X");
    }
    if(this.usuario == "EMPLEADO" && this.chatrol== "apartamento"){
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "remitente", "X");
    }

    this.mensajes = this.chatServ.getMsjs(); 
    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  getUser(){
      return this.user;
    //return this.personasService.getPersonaActiva().rolConjunto;
  }
}