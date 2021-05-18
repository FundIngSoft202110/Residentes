import { Component, OnInit } from '@angular/core';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';

@Component({
  selector: 'app-menu-empleado',
  templateUrl: './menu-empleado.component.html',
  styleUrls: ['./menu-empleado.component.scss'],
})
export class MenuEmpleadoComponent implements OnInit {

  constructor(private conjuntoService: ConjuntosService) { }

  ngOnInit() {}

  salirConjunto(){
    this.conjuntoService.clearConjuntoActivo();
  }

}
