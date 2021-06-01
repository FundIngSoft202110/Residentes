import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CalendarPaqueteComponent } from '../calendar-paquete/calendar-paquete.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(public popoverController: PopoverController) {}

  ngOnInit(){}

  async mostrarPop(){
    const popover = await this.popoverController.create({
      component: CalendarPaqueteComponent,
      cssClass: 'popoverCal'
    });

    await popover.present();
  }
}
