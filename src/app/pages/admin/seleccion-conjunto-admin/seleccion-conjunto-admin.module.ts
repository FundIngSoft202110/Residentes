import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionConjuntoAdminPageRoutingModule } from './seleccion-conjunto-admin-routing.module';

import { SeleccionConjuntoAdminPage } from './seleccion-conjunto-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionConjuntoAdminPageRoutingModule
  ],
  declarations: [SeleccionConjuntoAdminPage]
})
export class SeleccionConjuntoAdminPageModule {}
