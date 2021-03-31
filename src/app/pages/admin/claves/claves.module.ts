import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClavesPageRoutingModule } from './claves-routing.module';

import { ClavesPage } from './claves.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClavesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClavesPage]
})
export class ClavesPageModule {}
