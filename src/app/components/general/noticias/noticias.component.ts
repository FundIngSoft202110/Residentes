import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  public user:string="RESDIENTES";
  constructor() { }

  ngOnInit() {}

  getUser(){
    return this.user;
  }

}
