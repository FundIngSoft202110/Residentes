import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreasComunesAdminPageRoutingModule } from './areas-comunes-admin-routing.module';

import { AreasComunesAdminPage } from './areas-comunes-admin.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreasComunesAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AreasComunesAdminPage]
})
export class AreasComunesAdminPageModule {}
