
import { NgModule, Component, OnInit , enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxFormModule } from 'devextreme-angular';

import { Usuario, ClaveContraService, Rol } from '../../../Services/ClavServ/clave-contra.service';


@Component({
  selector: 'app-claves-component',
  templateUrl: './claves-component.component.html',
  styleUrls: ['./claves-component.component.scss'],
})

export class ClavesComponent {
  usuarios: Usuario[];
  roles: Rol[];

  constructor( service: ClaveContraService ) {
      this.usuarios = service.getUsuarios();
      this.roles = service.getRoles();
  }
}



