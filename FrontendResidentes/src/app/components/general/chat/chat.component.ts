import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ChatServicioService } from 'src/app/Services/chatserv/chat-servicio.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  mensajes = [];
  usuActual = '';
  usuDesti= '';
  newMsg: string = '';
  public user: string = "RESIDENTE";

  @ViewChild(IonContent) content: IonContent

  constructor(private chatServ:ChatServicioService, private personasService:PersonasService ) {
      
   }

  ngOnInit(){
    this.usuDesti= 'María';
    this.usuActual = 'David';
    this.mensajes = this.chatServ.getMsjs(); 
   
  }

  enviarMensaje() {
 
    this.chatServ.addChats(this.usuActual,this.usuActual, this.newMsg, new Date().getTime());
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