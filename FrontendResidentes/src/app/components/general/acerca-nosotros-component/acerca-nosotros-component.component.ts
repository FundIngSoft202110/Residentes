import { Component, OnInit } from '@angular/core';
import { AcercaDeNosotrosService, Residentes } from 'src/app/Services/AcercaDeNosotros/acerca-de-nosotros.service';
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
  selector: 'app-acerca-nosotros-component',
  providers: [AcercaDeNosotrosService],
  templateUrl: './acerca-nosotros-component.component.html',
  styleUrls: ['./acerca-nosotros-component.component.scss'],
})

export class AcercaNosotrosComponent implements OnInit {
  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  residentes: Residentes;

  constructor(private service:AcercaDeNosotrosService) { 
    this.residentes = service.getResidentes();
  }

  ngOnInit() {}

}
