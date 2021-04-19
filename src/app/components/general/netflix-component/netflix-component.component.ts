import { Component, OnInit } from '@angular/core';
import { MenuResidenteComponent } from '../../residente/menu-residente/menu-residente.component';
import { ConjuntosService } from './../../../services/conjuntos/conjuntos.service'

@Component({
  selector: 'app-netflix-component',
  templateUrl: './netflix-component.component.html',
  styleUrls: ['./netflix-component.component.scss'],
})
export class NetflixComponent implements OnInit {

  perfiles = []
  public usuario : string = "RESIDENTE";

  constructor(private conjuntoService : ConjuntosService, private aptoService: AptoService) { }

  getUser(){
    return this.usuario;
  }

  ngOnInit() {
    if(this.getUser() == "ADMIN" || this.getUser() == "RESIDENTE"){
      this.perfiles = this.conjuntoService.getConjuntos();
    }else if(this.getUser() == "EMPLEADO"){
      this.perfiles = this.aptoService.getAptos();
    }
  }

  getRouteConjunto(){
    if(this.getUser() == "ADMIN" || this.getUser() == "RESIDENTE"){
      return "/noticias";
    }else if(this.getUser() == "EMPLEADO"){
      return "/asistencia-empleado";
    }
  }
}
