import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  mensajes = [
    {
      usuario: 'david',
      createdAt: 1554090856000,
      msg: 'Holaa como estas'
    },
    {
      usuario: 'maria',
      createdAt: 1554090956000,
      msg: 'buenaaas'
    },
    {
      usuario: 'maria',
      createdAt: 1554091056000,
      msg: 'kyc mi pez'
    },
    {
      usuario: 'david',
      createdAt: 1554091056000,
      msg: 'no hago mas na'
    }
  ];
  usuActual = 'david';

  newMsg: string = '';
  public user: string = "RESIDENTE";

  @ViewChild(IonContent) content: IonContent

  constructor() { }

  ngOnInit(){}

  enviarMensaje() {
    this.mensajes.push({
      usuario: 'david',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  getUser() {
    return this.user;
  }
}