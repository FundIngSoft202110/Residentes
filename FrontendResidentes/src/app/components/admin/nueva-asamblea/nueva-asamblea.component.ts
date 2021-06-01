import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DxDrawerComponent } from 'devextreme-angular';
import { AsambleaService } from 'src/app/Services/asambleas/asamblea.service';
import { Opcion } from 'src/app/Services/opciones/opcion.model';
import { OpcionesService } from 'src/app/Services/opciones/opciones.service';
import { PropuestasService } from 'src/app/Services/propuestas/propuestas.service';

@Component({
  selector: 'app-nueva-asamblea',
  templateUrl: './nueva-asamblea.component.html',
  styleUrls: ['./nueva-asamblea.component.scss'],
})
export class NuevaAsambleaComponent implements OnInit {
  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  
  opciones: Opcion[];
  propuesta: any;
  Nopciones: number[];
  step = 1;
  backButtonOptions: any;
  asambleas = [];
  labelL ="top";

  constructor(private navCtrl: NavController,private service: AsambleaService, opcionesServices: OpcionesService, propuestaServices: PropuestasService) {
    //this.asamblea = service.getAsamblea(1);
    this.propuesta = propuestaServices.getPropuestas();
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
  async ionViewWillEnter(){}

  ngOnInit() {
    this.asambleas = this.service.getAsambleas();
  }

  botonReportar() {
    this.navCtrl.navigateForward("/lista-asamblea-admin"); 
  }
}
