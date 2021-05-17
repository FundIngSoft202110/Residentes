import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from '../../../Services/conjuntos/conjuntos.service'
import { AptosService } from '../../../Services/aptos/aptos.service'
import { PersonasService } from 'src/app/Services/personas/personas.service';
import { Apto } from 'src/app/Services/aptos/apto.model';

@Component({
  selector: 'app-netflix-component',
  templateUrl: './netflix-component.component.html',
  styleUrls: ['./netflix-component.component.scss'],
})
export class NetflixComponent implements OnInit {

  perfiles = []
  public perfil: string;
  public usuario: string;

  constructor(private personasService:PersonasService, private conjuntoService : ConjuntosService, private aptoService: AptosService) { }

  ngOnInit() {
    this.usuario = this.personasService.getUserActivo();
    console.log(this.usuario);
    if(this.usuario == "ADMIN" || this.usuario == "EMPLEADO"){
      this.perfiles = this.conjuntoService.getConjuntos();
      this.perfil = "conjunto";
    }else if(this.usuario == "RESIDENTE"){
      this.perfiles = this.aptoService.getAptos();
      this.perfil = "apartamento";
    }// end if
  }// end ngOnInit

  getUser(){
    return this.usuario;
  }// end getUser

  getConjunto(apto:Apto){
    return this.conjuntoService.getConjunto(apto.idConjunto);
  }// getConjunto

  getRouteConjunto(){
    if(this.usuario == "ADMIN"  ){
      return "/noticias";
    }
    if(this.usuario == "EMPLEADO"){
      return "/paquetes-empleado";
    }else if( this.usuario == "RESIDENTE" ){
      return "/ingre-apto";
    }// end if
  }// end getRouteConjunto
}
