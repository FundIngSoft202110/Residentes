import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from '../../../Services/conjuntos/conjuntos.service'
import { AptosService } from '../../../Services/aptos/aptos.service'

@Component({
  selector: 'app-netflix-component',
  templateUrl: './netflix-component.component.html',
  styleUrls: ['./netflix-component.component.scss'],
})
export class NetflixComponent implements OnInit {

  perfiles = []
  public usuario : string = "ADMIN";

  constructor(private conjuntoService : ConjuntosService, private aptoService: AptosService) { }

  getUser(){
    return this.usuario;
  }

  ngOnInit() {
    if(this.getUser() == "ADMIN" || this.getUser() == "EMPLEADO"){
      this.perfiles = this.conjuntoService.getConjuntos();
    }else if(this.getUser() == "RESIDENTE"){
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
