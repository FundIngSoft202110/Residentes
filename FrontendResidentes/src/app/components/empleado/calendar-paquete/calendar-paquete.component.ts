import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxoFullstackedsplineareaComponent } from 'devextreme-angular/ui/nested';
import {CalendarComponent} from 'ionic2-calendar';

@Component({
  selector: 'app-calendar-paquete',
  templateUrl: './calendar-paquete.component.html',
  styleUrls: ['./calendar-paquete.component.scss'],
})
export class CalendarPaqueteComponent implements OnInit {
  
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    events: false
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor() { }

  ngOnInit() {}

  next(){
    this.myCal.slideNext();
  }

  back(){
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title :string){
    this.viewTitle = title;
  }

  num:number;
  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    this.num = ev.selectedTime.getMonth() + 1;
    console.log('Selected time: ' + ev.selectedTime.getDate() + " " + this.num + " " + ev.selectedTime.getFullYear());
  };

}
