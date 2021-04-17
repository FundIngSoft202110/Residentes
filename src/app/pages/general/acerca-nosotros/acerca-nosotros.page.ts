import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-nosotros',
  templateUrl: './acerca-nosotros.page.html',
  styleUrls: ['./acerca-nosotros.page.scss'],
})
export class AcercaNosotrosPage implements OnInit {

  public user:string = "EMPLEADO";

  constructor() { }

  ngOnInit() {
  }

  getUser(){
    return this.user;
  }

}
