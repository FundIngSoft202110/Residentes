import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-asamblea-residente-component',
  templateUrl: './asamblea-residente-component.component.html',
  styleUrls: ['./asamblea-residente-component.component.scss'],
})
export class AsambleaResidenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  next(slides: IonSlides) {
    console.log(slides);
    slides.slideNext();
  }
  prev(slides: IonSlides) {
    console.log(slides);
    slides.slidePrev();
  }
}
