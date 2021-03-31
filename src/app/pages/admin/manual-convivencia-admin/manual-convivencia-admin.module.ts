import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualConvivenciaAdminPageRoutingModule } from './manual-convivencia-admin-routing.module';

import { ManualConvivenciaAdminPage } from './manual-convivencia-admin.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualConvivenciaAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ManualConvivenciaAdminPage]
})
export class ManualConvivenciaAdminPageModule {}
