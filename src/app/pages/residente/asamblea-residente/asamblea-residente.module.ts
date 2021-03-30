import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsambleaResidentePageRoutingModule } from './asamblea-residente-routing.module';

import { AsambleaResidentePage } from './asamblea-residente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsambleaResidentePageRoutingModule
  ],
  declarations: [AsambleaResidentePage]
})
export class AsambleaResidentePageModule {}
