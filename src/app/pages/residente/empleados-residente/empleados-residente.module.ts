import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadosResidentePageRoutingModule } from './empleados-residente-routing.module';

import { EmpleadosResidentePage } from './empleados-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadosResidentePageRoutingModule
  ],
  declarations: [EmpleadosResidentePage]
})
export class EmpleadosResidentePageModule {}
