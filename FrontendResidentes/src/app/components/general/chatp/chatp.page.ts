import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ChatServicioService } from 'src/app/Services/chatserv/chat-servicio.service';
import { LstChatServicioService } from 'src/app/Services/lstChatServ/lst-chat-servicio.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-chatp',
  templateUrl: './chatp.page.html',
  styleUrls: ['./chatp.page.scss'],
})
export class ChatpPage implements OnInit {
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
  @Input() routeBack: string;
  constructor(private serChats: LstChatServicioService, private chatServ:ChatServicioService, private personasService:PersonasService, private navCtrl: NavController ) {
      
  }

  ngOnInit(){
    console.log("foasdjfidsajf");
    this.chatn= this.serChats.getChatN();
    this.chatid= this.serChats.getChatId();
    console.log(this.chatn+"qaui");
    console.log(this.chatid+"id");
    this.usuario = this.personasService.getUserActivo();
    this.usuDesti= 'María';
    this.usuActual = 'David';
    this.mensajes = this.chatServ.getMsjs(); 
    
  }

  enviarMensaje() {
    if(this.usuario == "RESIDENTE"){
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "destinatario", "X");
    }else{
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

  goBack(){
    this.navCtrl.navigateForward("/empleados");
  }
}
