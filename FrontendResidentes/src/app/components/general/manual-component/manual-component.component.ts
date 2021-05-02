import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/Services/personas/personas.service';

@Component({
  selector: 'app-manual-component',
  templateUrl: './manual-component.component.html',
  styleUrls: ['./manual-component.component.scss'],
})
export class ManualComponent implements OnInit {

  constructor(private personasService:PersonasService) { }

  ngOnInit() {}

  getUser(){
    return this.personasService.getUserActivo();
  }

}
