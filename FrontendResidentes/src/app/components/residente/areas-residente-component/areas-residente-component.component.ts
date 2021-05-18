import { Component, OnInit } from '@angular/core';
import{AreaComunResidenteService, Company} from '../../../Services/AreaComunResidente/area-comun-residente.service';
import { NgModule, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxDateBoxModule,
         DxCalendarModule,
         DxAutocompleteModule,
         DxFormComponent,
       } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

const sendRequest = function(value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(value === validEmail);
        }, 1000);
    });    
}

@Component({
  selector: 'app-areas-residente-component',
  providers: [AreaComunResidenteService],
  templateUrl: './areas-residente-component.component.html',
  styleUrls: ['./areas-residente-component.component.scss'],
})

export class AreasResidenteComponent implements OnInit  {
    @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  
    companies: Company[];

    constructor( service: AreaComunResidenteService ) {

      this.companies = service.getCompanies();
  }
    
    now: Date = new Date();
    currentValue: Date = new Date();
    
   
    ngOnInit() {}
   
}