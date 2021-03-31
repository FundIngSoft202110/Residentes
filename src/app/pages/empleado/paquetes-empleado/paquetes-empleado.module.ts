import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaquetesEmpleadoPageRoutingModule } from './paquetes-empleado-routing.module';

import { PaquetesEmpleadoPage } from './paquetes-empleado.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaquetesEmpleadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaquetesEmpleadoPage]
})
export class PaquetesEmpleadoPageModule {}
