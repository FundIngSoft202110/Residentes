import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadosAdminPageRoutingModule } from './empleados-admin-routing.module';

import { EmpleadosAdminPage } from './empleados-admin.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadosAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EmpleadosAdminPage]
})
export class EmpleadosAdminPageModule {}
