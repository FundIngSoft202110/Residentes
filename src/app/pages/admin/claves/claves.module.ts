import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClavesPageRoutingModule } from './claves-routing.module';

import { ClavesPage } from './claves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClavesPageRoutingModule
  ],
  declarations: [ClavesPage]
})
export class ClavesPageModule {}
