import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-component',
  templateUrl: './manual-component.component.html',
  styleUrls: ['./manual-component.component.scss'],
})
export class ManualComponent implements OnInit {
  public user: string = "EMPLEADO";
  constructor() { }

  ngOnInit() {}

  getUser(){
    return this.user;
  }

}
