import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netflix-component',
  templateUrl: './netflix-component.component.html',
  styleUrls: ['./netflix-component.component.scss'],
})
export class NetflixComponent implements OnInit {
  public conjunto:string ="Maria"
  constructor() { }

  ngOnInit() {}
  
  getConjunto(){
    return this.conjunto;
  }
}
