import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoApartamentoPageRoutingModule } from './ingreso-apartamento-routing.module';

import { IngresoApartamentoPage } from './ingreso-apartamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoApartamentoPageRoutingModule
  ],
  declarations: [IngresoApartamentoPage]
})
export class IngresoApartamentoPageModule {}
