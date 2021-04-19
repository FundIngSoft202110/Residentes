import { Component, OnInit } from '@angular/core';
import { MenuResidenteComponent } from '../../residente/menu-residente/menu-residente.component';
import { ConjuntosService } from './../../../services/conjuntos/conjuntos.service'

@Component({
  selector: 'app-netflix-component',
  templateUrl: './netflix-component.component.html',
  styleUrls: ['./netflix-component.component.scss'],
})
export class NetflixComponent implements OnInit {

  conjuntos = []
  public usuario : string = "RESIDENTE";

  constructor(private conjuntoService : ConjuntosService) { }

  ngOnInit() {
    this.conjuntos = this.conjuntoService.getConjuntos()
  }

  getUser(){
    return this.usuario;
  }

  getRouteConjunto(){
    if(this.getUser() == "ADMIN" || this.getUser() == "RESIDENTE"){
      return "/noticias";
    }else if(this.getUser() == "EMPLEADO"){
      return "/asistencia-empleado";
    }
  }
}
