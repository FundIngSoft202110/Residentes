import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { LstChatServicioService } from 'src/app/Services/lstChatServ/lst-chat-servicio.service';
import { lstChat } from 'src/app/Services/lstChatServ/lstChat.module';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
})
export class EmpleadosComponent implements OnInit {
  public user:string="RESIDENTE";
  idAConj : any;
  //private personasService:PersonasService;
  rol='A';
  chatBuscado: any;
  chats =[];
  constructor(private  conjServ: ConjuntosService,private serChats: LstChatServicioService, private personasService: PersonasService) { }

  ngOnInit() {
    this.idAConj = this.conjServ.getConjuntoActivo(); 
    console.log("entreee");
    this.rol = this.personasService.getUserActivo();
    if(this.rol == "EMPLEADO"){
      console.log("entreee Emp");
      this.chats = this.serChats.getlstMsjAptoAdmin(this.idAConj);
      console.log(this.chats);
    }

    if(this.rol == "ADMIN"){
      console.log("entreee admun");
      this.chats = this.serChats.getlstMsjAptoEmp(this.idAConj);
    }

    if(this.rol == "RESIDENTE"){
      console.log("entreee res");
      this.chats = this.serChats.getlstMsjsEmpAdmin(this.idAConj);
      console.log(this.chats);
    }

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
        return ( (chat.nombre.toLowerCase().indexOf(text.toLowerCase() ) >-1) || (chat.oficio.toLowerCase().indexOf(text.toLowerCase() ) >-1) );
      })
    }
  }
  elegirChat(chat:lstChat){
    this.serChats.setChatActivo(chat.nombre, chat.rol, chat.idc);
    console.log(chat.nombre);
    console.log(chat.rol);
    console.log(chat.idc);
  }
}
