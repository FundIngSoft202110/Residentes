import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { LstChatServicioService } from 'src/app/Services/lstChatServ/lst-chat-servicio.service';
import { lstChat } from 'src/app/Services/lstChatServ/lstChat.module';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
})
export class EmpleadosComponent implements OnInit{
  length:number = -1;
  public user:string="RESIDENTE";
  idAConj : any;
  //private personasService:PersonasService;
  rol='A';
  chatBuscado: any;
  chats =[];
  
  //@Input() routeBack: string
  constructor(private  conjServ: ConjuntosService,private serChats: LstChatServicioService, 
              private personasService: PersonasService, private navCtrl: NavController) { }

  ngOnInit(){
    
  } 

  async ionViewWillEnter() {
    this.length = -1;
    this.idAConj = this.conjServ.getConjuntoActivo(); 
    console.log("entreee");
    this.rol = this.personasService.getUserActivo();
    if(this.rol == "EMPLEADO"){
      console.log("entreee Emp");
      this.serChats.getlstMsjAptoAdmin(this.idAConj);
      console.log(this.chats);
    }
    if(this.rol == "ADMIN"){
      console.log("entreee admun");
      this.serChats.getlstMsjAptoEmp(this.idAConj);
    }
    if(this.rol == "RESIDENTE"){
      console.log("entreee res");
      this.serChats.getlstMsjsEmpAdmin(this.idAConj)
    }
    await this.waitBD();
    this.chats = this.serChats.getChat();
    console.log("WAIT: ", this.chats);
    this.chatBuscado = this.chats;
    this.length =  this.chatBuscado.length();
  }

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 250));
  }

  getUser(){
    return this.personasService.getUserActivo();
  }

  getChatBuscado(){
    return this.chatBuscado;
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

  goToAdd(){
    console.log("Quintana ");
    this.navCtrl.navigateForward("/agregar-empleado");
  }

  getLength(){
    return this.length;
  }

}