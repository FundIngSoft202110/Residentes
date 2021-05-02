import { Component, OnInit, ViewChild } from '@angular/core';
import{AreaComunAdminService, Customer} from '../../../Services/AreaComunAdmin/area-comun-admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxSwitchModule ,
         DxAutocompleteModule,
         DxFormComponent } from 'devextreme-angular';
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
  selector: 'app-area-comun-admin',
  providers: [AreaComunAdminService],
  templateUrl: './area-comun-admin.component.html',
  styleUrls: ['./area-comun-admin.component.scss'],
})

export class AreaComunAdminComponent {
    @ViewChild(DxFormComponent, { static: false }) form1:DxFormComponent
    customer: Customer;
    countries: string[];
 
    constructor(service: AreaComunAdminService) {
        
        this.countries = service.getCountries();
        
    }
    
}