import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {ModificarAreaAdminService, NuevaArea } from '../../../Services/modificarAreaAdmin/modificar-area-admin.service';
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
  selector: 'app-modificar-area-admin',
  providers: [ModificarAreaAdminService],
  templateUrl: './modificar-area-admin.component.html',
  styleUrls: ['./modificar-area-admin.component.scss'],
})
export class ModificarAreaAdminComponent implements OnInit {
    @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  
    estado: any;
    nuevaArea: NuevaArea;
	tipo: string[];
	horaDeApertura: string[];
	horaDeCierre: string[];
	diasDisponibles: string[];
   
    buttonOptions1: any = {
        text: "Guardar/Modificar",
        type: "success",
        useSubmitBehavior: true
    }
    
    
   
    constructor(service: ModificarAreaAdminService) {
        this.nuevaArea = service.getNuevaArea();
		this.tipo = service.getTipo();
		this.horaDeApertura = service.getHoraDeApertura();
        this.horaDeCierre = service.getHoraDeCierre();
        this.diasDisponibles = service.getDiasDisponibles();
        
    }
   
    onFormSubmit = function(e) {
        notify({
            message: "Se ha agregado el área común",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
    }
  ngOnInit() {}
}
