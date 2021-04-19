import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from './../../../services/conjuntos/conjuntos.service'

@Component({
  selector: 'app-netflix-component',
  templateUrl: './netflix-component.component.html',
  styleUrls: ['./netflix-component.component.scss'],
})
export class NetflixComponent implements OnInit {

  conjuntos = []
  
  constructor(private conjuntoService : ConjuntosService) { }

  ngOnInit() {
    this.conjuntos = this.conjuntoService.getConjuntos()
  }

}
