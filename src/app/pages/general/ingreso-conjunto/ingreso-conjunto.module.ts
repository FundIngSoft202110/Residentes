import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoConjuntoPageRoutingModule } from './ingreso-conjunto-routing.module';

import { IngresoConjuntoPage } from './ingreso-conjunto.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoConjuntoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IngresoConjuntoPage]
})
export class IngresoConjuntoPageModule {}
