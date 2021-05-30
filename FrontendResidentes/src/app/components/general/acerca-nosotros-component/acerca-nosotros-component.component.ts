import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-acerca-nosotros-component',
  templateUrl: './acerca-nosotros-component.component.html',
  styleUrls: ['./acerca-nosotros-component.component.scss'],
})
export class AcercaNosotrosComponent implements OnInit {

  constructor(private personasService:PersonasService) { }

  ngOnInit() {}

  getUser(){
    return this.personasService.getUserActivo();
  }
}
