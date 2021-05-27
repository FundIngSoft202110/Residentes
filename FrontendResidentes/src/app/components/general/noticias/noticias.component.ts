import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  constructor(private personasService:PersonasService) { }

  ngOnInit() {} // end ngOnInit

  getUser(){
    return this.personasService.getUserActivo();
  } // end getUser
} // end NoticiasComponent
