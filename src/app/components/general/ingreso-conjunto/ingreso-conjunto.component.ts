import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-conjunto',
  templateUrl: './ingreso-conjunto.component.html',
  styleUrls: ['./ingreso-conjunto.component.scss'],
})
export class IngresoConjuntoComponent implements OnInit {
  public conjunto:string = "Maria";
  constructor() { }

  ngOnInit() {}

  getConjunto(){
    return this.conjunto;
  }
}
