import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {AgregarFechaAreaService, FechaArea,} from '../../../Services/AgregarFechaArea/agregar-fecha-area.service';
import { NgModule, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxAutocompleteModule,
         DxFormComponent
       } from 'devextreme-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-fecha-area',
  providers: [AgregarFechaAreaService],
  templateUrl: './agregar-fecha-area.component.html',
  styleUrls: ['./agregar-fecha-area.component.scss'],
})
export class AgregarFechaAreaComponent implements OnInit {

  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent

  fechaArea: FechaArea;
	horaDeApertura: string[];
	horaDeCierre: string[];
	diasDisponibles: string[];

  link = 'agregar-area';
  label="top";
  rojo="#e27c65"


  constructor(service: AgregarFechaAreaService,private navCtrl: NavController) {
    this.fechaArea = service.getFechaArea();
		this.horaDeApertura = service.getHoraDeApertura();
    this.horaDeCierre = service.getHoraDeCierre();
    this.diasDisponibles = service.getDiasDisponibles();
   }

  ngOnInit() {}

  goToCancel() {
    this.navCtrl.navigateForward("/agregar-area");
  }

  goToAcept() {
    notify("Agregado Correctametnte");
    
  }

}
