import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionConjuntoPageRoutingModule } from './seleccion-conjunto-routing.module';

import { SeleccionConjuntoPage } from './seleccion-conjunto.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionConjuntoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SeleccionConjuntoPage]
})
export class SeleccionConjuntoPageModule {}
