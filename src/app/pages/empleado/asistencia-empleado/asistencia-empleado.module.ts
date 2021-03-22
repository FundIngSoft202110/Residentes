import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaEmpleadoPageRoutingModule } from './asistencia-empleado-routing.module';

import { AsistenciaEmpleadoPage } from './asistencia-empleado.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaEmpleadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsistenciaEmpleadoPage]
})
export class AsistenciaEmpleadoPageModule {}
