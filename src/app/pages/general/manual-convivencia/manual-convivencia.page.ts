import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-convivencia',
  templateUrl: './manual-convivencia.page.html',
  styleUrls: ['./manual-convivencia.page.scss'],
})
export class ManualConvivenciaPage implements OnInit {

  public user:string = "EMPLEADO";

  constructor() { }

  ngOnInit() {
  }

  getUser(){
    return this.user;
  }

}