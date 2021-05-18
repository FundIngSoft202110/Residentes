import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ChatServicioService } from 'src/app/Services/chatserv/chat-servicio.service';
import { mensaje } from 'src/app/Services/chatserv/mensaje';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { LstChatServicioService } from 'src/app/Services/lstChatServ/lst-chat-servicio.service';
import { PersonasService } from 'src/app/Services/personas/personas.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  idConjunto : any;
  idApto: any;
  idPerActiva : any;
  msj: mensaje = new mensaje();
  respuestapost:any;
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

  constructor(private servApto:ServIngAptoService,private serChats: LstChatServicioService,private chatServ:ChatServicioService, private personasService:PersonasService ) {
      
   }

  ngOnInit(){
    this.idPerActiva = this.personasService.getPersonaID();
    this.idConjunto = 1;//SETEAR DE NETFLIX EL CONJUNTO
    this.idApto = this.servApto.getIdApto(); //SETEAR DE APTO INGRESO EL CONJUNTO
    this.chatn= this.serChats.getChatN();
    this.chatid= this.serChats.getChatId();
    this.chatrol= this.serChats.getRol();
    console.log(this.chatn+"qaui");
    console.log(this.chatid+"id");
    console.log(this.chatrol+"id");
    this.usuario = this.personasService.getUserActivo();
    this.usuDesti= 'María';
    this.usuActual = 'David';
    if( (this.usuario === 'ADMIN' && this.chatrol==='apartamento') || (this.usuario === 'RESIDENTE' && this.chatrol==='administrador') ){
      this.mensajes = this.chatServ.getMsjsAdmin(); 
    }
    if( (this.usuario === 'EMPLEADO' && this.chatrol==='apartamento') || (this.usuario === 'RESIDENTE' && this.chatrol==='empleado')){
      this.mensajes = this.chatServ.getMsjs();
    }
    if( (this.usuario === 'ADMIN' && this.chatrol==='empleado') || (this.usuario === 'EMPLEADO' && this.chatrol==='administrador')){
      this.mensajes = this.chatServ.getMsjs();
    }
   
   
  }
  bandera: any;
  enviarMensaje() {
    this.bandera=0;
    this.msj.fecha_hora = new Date().getTime();
    this.msj.contenido = this.newMsg;
    this.msj.visto = 1;
    this.msj.idConjunto = this.idConjunto;

    console.log(  new Date().getTime() );
    if(this.usuario == "RESIDENTE" && this.chatrol== "empleado"){
      this.msj.idEmpleado = this.chatid;
      this.msj.idApto = this.idApto;
      this.msj.idAdmin = 0;
      this.msj.RolEmpleado = "destinatario" ;
      this.msj.RolAdmin = "X"  ;
      
      console.log("Siendo residente a Empleado");
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "destinatario", "X");
    }
    if(this.usuario == "RESIDENTE" && this.chatrol== "administrador"){
      this.msj.idEmpleado = 0;
      this.msj.idApto = this.idApto;
      this.msj.idAdmin = this.chatid;
      this.msj.RolEmpleado = "X" ;
      this.msj.RolAdmin = "destinatario"  ;

      console.log("Siendo residente a administrador");
      this.chatServ.addChatsAd( this.newMsg, new Date().getTime(), "X", "destinatario");
      this.bandera=1;
    }
    
    if(this.usuario == "ADMIN" && this.chatrol== "empleado"){
      this.msj.idEmpleado = this.chatid;
      this.msj.idApto = 0;
      this.msj.idAdmin = this.idPerActiva ;
      this.msj.RolEmpleado = "destinatario" ;
      this.msj.RolAdmin = "X"  ;
      console.log("Siendo admin a empleado");
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "destinatario", "X");
    }
    if(this.usuario == "ADMIN" && this.chatrol== "apartamento"){
      this.msj.idEmpleado=0;
      this.msj.idApto = this.idApto;
      this.msj.idAdmin = this.idPerActiva ;
      this.msj.RolEmpleado = "X" ;
      this.msj.RolAdmin = "remitente"  ;
      console.log("Siendo admin a apartamento");
      this.chatServ.addChatsAd( this.newMsg, new Date().getTime(), "X", "remitente");
      this.bandera=1;
    }

    if(this.usuario == "EMPLEADO" && this.chatrol== "administrador"){
      this.msj.idEmpleado=this.idPerActiva;
      this.msj.idApto = 0;
      this.msj.idAdmin = this.chatid;
      this.msj.RolEmpleado = "remitente" ;
      this.msj.RolAdmin = "X"  ;

      console.log("Siendo empleado a administrador");
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "remitente", "X");
    }
    if(this.usuario == "EMPLEADO" && this.chatrol== "apartamento"){
      this.msj.idEmpleado=this.idPerActiva;
      this.msj.idApto = this.idApto;
      this.msj.idAdmin = 0;
      this.msj.RolEmpleado = "remitente" ;
      this.msj.RolAdmin = "X"  ;

      console.log("Siendo empleado a apto");
      this.chatServ.addChats( this.newMsg, new Date().getTime(), "remitente", "X");
    }
    if(this.bandera==1){
      this.mensajes = this.chatServ.getMsjsAdmin();
    }else{
      this.mensajes = this.chatServ.getMsjs(); 
    }
    console.log(this.msj);
    //this.postNuevoMsj(); //ENVIAR MENSAJE
    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  getUser(){
      return this.user;
    //return this.personasService.getPersonaActiva().rolConjunto;
  }

  public postNuevoMsj() {
        
    this.chatServ.postNuevoMsj("http://192.168.76.71:8080/BackendResidentes/consultas/mensajes/NuevoMensaje",this.msj)
        .subscribe(respuesta => {
            console.log(respuesta);
            this.respuestapost=respuesta;
             
    })
}

}