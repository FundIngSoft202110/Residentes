import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
	DxSelectBoxModule,
	DxTextAreaModule,
	DxFormModule
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { ConjuntosService } from 'src/app/Services/conjuntos/conjuntos.service';
import { ServIngAptoService } from 'src/app/Services/ingreAptoServ/serv-ing-apto.service';
import { quejadto } from 'src/app/Services/quejasA-service/quejadto';

import { QuejaService } from '../../../Services/quejasA-service/queja.service';

@Component({
  selector: 'app-quejas-residente-component',
  providers:[QuejaService],
  templateUrl: './quejas-residente-component.component.html',
  styleUrls: ['./quejas-residente-component.component.scss'],
})
export class QuejasResidenteComponent implements OnInit {

  queja: quejadto;
  descripcion: string;
  anonimus:any;
	constructor(private service: QuejaService, private servApto: ServIngAptoService,  private conjuntoService: ConjuntosService) {
		
	}
  

  idApto : any;
  idConjunto: any;
  ngOnInit() {
    this.idConjunto = this.conjuntoService.getConjuntoActivo();
    this.idApto = this.servApto.getIdApto(); 
    this.descripcion ="";
  }
 aux: number;
  envInfo(){
    if(this.anonimus == true){
      this.queja.anonimo = 1;
    }else{
      this.queja.anonimo = 0;
    }
    this.queja.contenido =  this.descripcion;
    this.queja.idC = this.idConjunto;
    this.queja.idA = this.idApto;
    
    this.service.envioQueja(this.queja).subscribe(respuesta => {
        notify(respuesta, 'sucess');
    })


  }

}
