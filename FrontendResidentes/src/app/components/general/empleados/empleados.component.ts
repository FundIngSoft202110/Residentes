import { Component, OnInit } from '@angular/core';
import { LstChatServicioService } from 'src/app/Services/lstChatServ/lst-chat-servicio.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';

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
  constructor(private serChats: LstChatServicioService, private personasService: PersonasService) { }

  ngOnInit() {
    this.rol = this.personasService.getUserActivo();
    this.chats = this.serChats.getlstMsjs();
    this.chatBuscado = this.chats;
  }

  getUser(){
    return this.personasService.getUserActivo();
  }

  
  buscarChat(event){
    const text = event.target.value ;
    this.chatBuscado = this.chats;
    if(text && text.trim() != ''){
      this.chatBuscado = this.chatBuscado.filter((chat: any)=>{
        return ( (chat.Nombre.toLowerCase().indexOf(text.toLowerCase() ) >-1) || (chat.Oficio.toLowerCase().indexOf(text.toLowerCase() ) >-1) );
      })
    }
  }
}
