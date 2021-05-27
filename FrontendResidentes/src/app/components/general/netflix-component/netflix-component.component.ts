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

  constructor(private personasService:PersonasService, private conjuntoService : ConjuntosService, private servIngAptoService: ServIngAptoService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.usuario = this.personasService.getPersonaActiva();
    console.log(this.usuario);
    this.conjuntos = this.conjuntoService.getConjuntosPersona(this.usuario);
  }// end ngOnInit

  getUser(){
    return this.usuario;
  }// end getUser

  getConjunto(apto:Apto){
    return this.conjuntoService.getConjunto(apto.idConjunto);
  }// getConjunto

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
