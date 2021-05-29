import { NgModule, Component, OnInit, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { DxSelectBoxModule, DxListModule, DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { concat } from 'rxjs';
import { PersonasService } from 'src/app/Services/personas/personas.service';

import { selConjService } from '../../../Services/SeleccionConjuntoServ/seleccion-conj-serv.service' ;


if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}


@Component({
  selector: 'app-seleccion-conjunto-component',
  templateUrl: './seleccion-conjunto-component.component.html',
  styleUrls: ['./seleccion-conjunto-component.component.scss'],
})




export class SeleccionConjuntoComponent implements OnInit{
  conjuntos: any;
  idPerActiva;
  constructor(service: selConjService, private personasService: PersonasService, private router: Router) {
      this.conjuntos = service.getConjuntos();
  }
  click(id){
    console.log("hola " , id , " - ", this.idPerActiva);
    this.router.navigateByUrl("/netflix");
  }

  ngOnInit() {
    this.idPerActiva = this.personasService.getPersonaID();
  }


}


