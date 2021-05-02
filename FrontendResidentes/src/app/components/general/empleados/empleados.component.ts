import { Component, OnInit } from '@angular/core';
import { LstChatServicioService } from 'src/app/Services/lstChatServ/lst-chat-servicio.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
})
export class EmpleadosComponent implements OnInit {
  public user:string="RESIDENTE";
  //private personasService:PersonasService;
  rol='A';
  chatBuscado: any;
  chats =[];

  constructor(private serChats: LstChatServicioService) { }

  ngOnInit() {
    this.chats = this.serChats.getlstMsjs();
  }

  getUser(){
    return this.user;
    //return this.personasService.getUserActivo();
  }

  /*
  buscarChat(event){
    const text = event.target.value ;
    this.chatBuscado = this.chats;
    if(text && text.trim() != ''){
      this.chatBuscado = this.buscarChat.filter((chat: any)=>{
        return (chat.name.toLowerCase().indexOf(text.toLowerCase()) >-1);
      })
    }
  }*/
}
