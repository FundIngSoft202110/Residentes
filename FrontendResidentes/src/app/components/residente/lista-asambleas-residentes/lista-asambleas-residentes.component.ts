import { Component, OnInit } from '@angular/core';
import { Asamblea, AsambleaService } from 'src/app/Services/asambleas/asamblea.service';

@Component({
  selector: 'app-lista-asambleas-residentes',
  templateUrl: './lista-asambleas-residentes.component.html',
  styleUrls: ['./lista-asambleas-residentes.component.scss'],
})
export class ListaAsambleasResidentesComponent implements OnInit {

  asambleas = [];

  constructor(private asambleaService: AsambleaService) { }

  ngOnInit() {
    this.asambleas = this.asambleaService.getAsambleas();
  }// end 

  saveAsamblea(asamblea:Asamblea){
    this.asambleaService.setAsambleaAbierta(asamblea.IdAsamblea);
  }// end saveAsamblea

}
