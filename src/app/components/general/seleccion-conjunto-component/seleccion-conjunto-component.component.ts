import { NgModule, Component, OnInit, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule, DxListModule, DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { Conjunto, selConjService } from '../../../Services/SeleccionConjuntoServ/seleccion-conj-serv.service' ;


if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}


@Component({
  selector: 'app-seleccion-conjunto-component',
  templateUrl: './seleccion-conjunto-component.component.html',
  styleUrls: ['./seleccion-conjunto-component.component.scss'],
})

@NgModule({
  imports: [
      BrowserModule,
      DxSelectBoxModule,
      DxListModule,
      DxTemplateModule 
  ],
  declarations: [SeleccionConjuntoComponent],
  bootstrap: [SeleccionConjuntoComponent]
})


export class SeleccionConjuntoComponent {
  conjuntos: Conjunto[];

  constructor(service: selConjService) {
      this.conjuntos = service.getConjuntos();
  }
}

