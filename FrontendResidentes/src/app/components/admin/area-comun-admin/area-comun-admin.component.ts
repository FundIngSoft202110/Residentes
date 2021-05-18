import { Component, OnInit, ViewChild } from '@angular/core';
import{Area, AreaComunAdminService, } from '../../../Services/AreaComunAdmin/area-comun-admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule,
	DxTextAreaModule,
    DxButtonModule,
	DxDateBoxModule,
	DxFormModule,
    DxRadioGroupModule, 
    DxRadioGroupComponent, 
    DxTemplateModule,
    DxSwitchModule,
    DxActionSheetModule,
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
    @ViewChild("eventRadioGroup") eventRadioGroup: DxRadioGroupComponent;
    area: Area;
	tipo: string[];
	listaDeAreasComunes: string[];

	constructor(service: AreaComunAdminService) {
		this.area = service.getArea();
		this.tipo = service.getTipo();
        this.tipo=[
    		"Deportivo",
    		"Relajante",
    		"Social"
        ]
		this.listaDeAreasComunes = service.getListaDeAreasComunes();
	}


    
}