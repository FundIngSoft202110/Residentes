import { Component, OnInit, ViewChild } from '@angular/core';
import { OpcionesService } from 'src/app/Services/opciones/opciones.service';
import { Opcion } from 'src/app/Services/opciones/opcion.model';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AsambleaService, Asamblea } from '../../../Services/asambleas/asamblea.service';
import { Propuesta } from 'src/app/Services/propuestas/propuesta.model';
import { PropuestasService } from 'src/app/Services/propuestas/propuestas.service';
import notify from 'devextreme/ui/notify';
import { DxDrawerComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-asamblea-admin-component',
  providers: [AsambleaService],
  templateUrl: './asamblea-admin-component.component.html',
  styleUrls: ['./asamblea-admin-component.component.scss'],
})
export class AsambleaAdminComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;

  opciones: Opcion[];
  propuesta: Propuesta[];
  Nopciones: number[];
  step = 1;
  backButtonOptions: any;
  asambleas = [];





  constructor(private service: AsambleaService, opcionesServices: OpcionesService, propuestaServices: PropuestasService) {
    //this.asamblea = service.getAsamblea(1);
    this.propuesta = propuestaServices.getPropuestas(1);
    this.opciones = opcionesServices.getOpciones(1);
    this.Nopciones = service.getNopciones();



    this.backButtonOptions = {
      type: 'prueba',
      icon: 'add',
      onClick: () => {
        return this.step = 2;
      }
    };
  }

  ngOnInit() {
    this.asambleas = this.service.getAsambleas();
  }









}

