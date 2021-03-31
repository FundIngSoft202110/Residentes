import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualConvivenciaPageRoutingModule } from './manual-convivencia-routing.module';

import { ManualConvivenciaPage } from './manual-convivencia.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualConvivenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ManualConvivenciaPage]
})
export class ManualConvivenciaPageModule {}
