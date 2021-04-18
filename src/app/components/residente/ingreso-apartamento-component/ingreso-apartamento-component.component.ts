import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-apartamento-component',
  templateUrl: './ingreso-apartamento-component.component.html',
  styleUrls: ['./ingreso-apartamento-component.component.scss'],
})
export class IngresoApartamentoComponent implements OnInit {
  public conjunto:string = "Maria";
  constructor() { }

  ngOnInit() {}

  getConjunto(){
    return this.conjunto;
  }
}
