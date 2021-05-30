import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from '../../../Services/conjuntos/conjuntos.service'
import { AptosService } from '../../../Services/aptos/aptos.service'
import { PersonasService } from 'src/app/Services/personas/personas.service';
import { Apto } from 'src/app/Services/aptos/apto.model';
import { Conjunto } from 'src/app/Services/conjuntos/conjunto.model';
import { NavController } from '@ionic/angular';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';

@Component({
  selector: 'app-netflix-component',
  templateUrl: './netflix-component.component.html',
  styleUrls: ['./netflix-component.component.scss'],
})
export class NetflixComponent implements OnInit {

  conjuntos : any;
  public usuario: string;
  public idUsuario:number;

  constructor(private personasService:PersonasService, private conjuntoService : ConjuntosService, private servIngAptoService: ServIngAptoService, private navCtrl: NavController) { }

  ngOnInit(){}

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 750));
  }

  async ionViewWillEnter(){
    this.usuario = this.personasService.getPersonaActiva();
    this.idUsuario = this.personasService.getPersonaActivaAux();
    console.log(this.usuario, "  Id usuario: ", this.idUsuario);
    this.conjuntoService.getConjuntosPersona(this.idUsuario);
    await this.waitBD();
    this.conjuntos = this.conjuntoService.getConjuntos(); 
  }// end ngOnInit

  getUser(){
    return this.usuario;
  }// end getUser

  goAgregar(){
    if(this.usuario == "ADMIN"  ){
      this.navCtrl.navigateForward("/nuevo-conjunto");
    }else{
      this.navCtrl.navigateForward("/seleccion-conjunto");
    }
  }

  goConjunto(conjunto:Conjunto){
    this.conjuntoService.setConjuntoActivo(conjunto.id);
    if(this.usuario == "ADMIN"  ){
      this.navCtrl.navigateForward("/noticias");
    }else if(this.usuario == "EMPLEADO"){
      this.navCtrl.navigateForward("/empleados");
    }else if( this.usuario == "RESIDENTE" || this.usuario == "Residente" ){
      this.navCtrl.navigateForward("/ingre-apto");
    } // end if
  }// end getRouteConjunto
}// end NetflixComponent
