import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadosAdminPageRoutingModule } from './empleados-admin-routing.module';

import { EmpleadosAdminPage } from './empleados-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadosAdminPageRoutingModule
  ],
  declarations: [EmpleadosAdminPage]
})
export class EmpleadosAdminPageModule {}
