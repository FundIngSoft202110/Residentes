import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaquetesResidentePageRoutingModule } from './paquetes-residente-routing.module';

import { PaquetesResidentePage } from './paquetes-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaquetesResidentePageRoutingModule
  ],
  declarations: [PaquetesResidentePage]
})
export class PaquetesResidentePageModule {}
