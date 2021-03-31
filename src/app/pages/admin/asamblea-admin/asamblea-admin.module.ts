import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsambleaAdminPageRoutingModule } from './asamblea-admin-routing.module';

import { AsambleaAdminPage } from './asamblea-admin.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsambleaAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AsambleaAdminPage]
})
export class AsambleaAdminPageModule {}
