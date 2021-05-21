import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarEmpleadoPageRoutingModule } from './agregar-empleado-routing.module';

import { AgregarEmpleadoPage } from './agregar-empleado.page';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: "",
    component: AgregarEmpleadoPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgregarEmpleadoPageRoutingModule
  ],
  declarations: [AgregarEmpleadoPage]
})
export class AgregarEmpleadoPageModule {}
