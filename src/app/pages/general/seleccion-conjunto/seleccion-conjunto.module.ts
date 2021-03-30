import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionConjuntoPageRoutingModule } from './seleccion-conjunto-routing.module';

import { SeleccionConjuntoPage } from './seleccion-conjunto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionConjuntoPageRoutingModule
  ],
  declarations: [SeleccionConjuntoPage]
})
export class SeleccionConjuntoPageModule {}
