import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from '../../../Services/conjuntos/conjuntos.service'
import { AptosService } from '../../../Services/aptos/aptos.service'
import { PersonasService } from 'src/app/Services/personas/personas.service';
import { Apto } from 'src/app/Services/aptos/apto.model';
import { Conjunto } from 'src/app/Services/conjuntos/conjunto.model';

@Component({
  selector: 'app-netflix-component',
  templateUrl: './netflix-component.component.html',
  styleUrls: ['./netflix-component.component.scss'],
})
export class NetflixComponent implements OnInit {

  conjuntos = []
  public usuario: string;

  constructor(private personasService:PersonasService, private conjuntoService : ConjuntosService, private aptoService: AptosService) { }

  ngOnInit() {
    this.usuario = this.personasService.getUserActivo();
    console.log(this.usuario);
    this.conjuntos = this.conjuntoService.getConjuntos();
  }// end ngOnInit

  getUser(){
    return this.usuario;
  }// end getUser

  getConjunto(apto:Apto){
    return this.conjuntoService.getConjunto(apto.idConjunto);
  }// getConjunto

  getRouteConjunto(conjunto:Conjunto){
    this.conjuntoService.setConjuntoActivo(conjunto.id);
    if(this.usuario == "ADMIN"  )
      return "/noticias";
    if(this.usuario == "EMPLEADO"){
      return "/empleados";
    }else if( this.usuario == "RESIDENTE" ){
      return "/ingre-apto";
    }// end if
  }// end getRouteConjunto
}// end NetflixComponent
