import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-nosotros-component',
  templateUrl: './acerca-nosotros-component.component.html',
  styleUrls: ['./acerca-nosotros-component.component.scss'],
})
export class AcercaNosotrosComponent implements OnInit {
  public user: string = "ADMIN";
  constructor() { }

  ngOnInit() {}

  getUser(){
    return this.user;
  }
}