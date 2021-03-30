import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarConjuntoPageRoutingModule } from './agregar-conjunto-routing.module';

import { AgregarConjuntoPage } from './agregar-conjunto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarConjuntoPageRoutingModule
  ],
  declarations: [AgregarConjuntoPage]
})
export class AgregarConjuntoPageModule {}
