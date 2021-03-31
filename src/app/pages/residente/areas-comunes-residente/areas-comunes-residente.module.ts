import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreasComunesResidentePageRoutingModule } from './areas-comunes-residente-routing.module';

import { AreasComunesResidentePage } from './areas-comunes-residente.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreasComunesResidentePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AreasComunesResidentePage]
})
export class AreasComunesResidentePageModule {}
