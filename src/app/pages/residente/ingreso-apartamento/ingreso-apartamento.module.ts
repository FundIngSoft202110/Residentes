import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoApartamentoPageRoutingModule } from './ingreso-apartamento-routing.module';

import { IngresoApartamentoPage } from './ingreso-apartamento.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoApartamentoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IngresoApartamentoPage]
})
export class IngresoApartamentoPageModule {}
