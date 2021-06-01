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
  constructor(private service: selConjService, private personasService: PersonasService, private router: Router) {
      
  }
  async click(id){
    //console.log("hola " , id , " - ", this.idPerActiva);
    this.service.vinResCon(id,  this.idPerActiva  );
    await this.waitBD();
    this.router.navigateByUrl("/netflix");
  }

  ngOnInit(){
    
  } 

  async ionViewWillEnter() {
    console.log("Ellos estan aqui");
    //this.personasService.difTiempo(new Date().getTime() );
    this.idPerActiva = this.personasService.getPersonaID();
    this.service.getConjuntosServ( this.idPerActiva  );
    await this.waitBD();
    console.log("Nosotros estan aqui");
    this.conjuntos = this.service.getConjuntosS();
    console.log("CONJUNTOSSSSSSSS: ", this.conjuntos);
  }

  getConjuntos(){
    return this.conjuntos;
  } // end getConjuntos

  async waitBD(){
    await new Promise(resolve => setTimeout(resolve, 850));
  }


}


