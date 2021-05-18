import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import{FechaArea, ModificarFechaAreaService} from '../../../Services/ModificarFechaArea/modificar-fecha-area.service';
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
  selector: 'app-modificar-fecha-area',
  providers: [ModificarFechaAreaService],
  templateUrl: './modificar-fecha-area.component.html',
  styleUrls: ['./modificar-fecha-area.component.scss'],
})

export class ModificarFechaAreaComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  fechaArea: FechaArea;
	horaDeApertura: string[];
	horaDeCierre: string[];
	diasDisponibles: string[];

	buttonOptions1: any = {
        text: "Guardar/Modificar",
        type: "success",
        useSubmitBehavior: true
    }
    
    buttonOptions2: any = {
        text: "Cancelar",
        type: "danger",
        useSubmitBehavior: true
    }

  constructor(service:ModificarFechaAreaService) { 
    this.fechaArea = service.getFechaArea();
		this.horaDeApertura = service.getHoraDeApertura();
        this.horaDeCierre = service.getHoraDeCierre();
        this.diasDisponibles = service.getDiasDisponibles();
  }

  ngOnInit() {}

}
