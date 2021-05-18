import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

import {ConjuntosService} from '../../../Services/conjuntos/conjuntos.service'
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
  disponibles : any;
  conjuntoA: any;

  link = 'agregar-area';

	buttonOptions1: any = {
        text: "Aceptar",
        type: "success",
        useSubmitBehavior: true
    }
    
    buttonOptions2: any = {
        text: "Cancelar",
        type: "danger",
        useSubmitBehavior: true,
        routerLink: this.link
    }

  constructor(private service: AgregarFechaAreaService, conjunto : ConjuntosService) {
    this.fechaArea = service.getFechaArea();
		this.horaDeApertura = service.getHoraDeApertura();
    this.horaDeCierre = service.getHoraDeCierre();
    this.diasDisponibles = service.getDiasDisponibles();
    this.conjuntoA= conjunto.getConjuntoActivo().id;
   }

  ngOnInit() {}


  // MIRAR COMO PASAR ENTRE COMPONENTES PARA PASAR EL ID DEL AREA 
  public getDisponibilidad(){
    this.service.getDiasDisponiblesBack("http://192.168.76.71:8080/BackendResidentes/consultas/DiasDisponibles/NuevoHorario/conjunto/${this.conjuntoA}/area/{IdArea}}")
    .subscribe( respuesta => {
      this.disponibles = respuesta;
    })
  }
}
