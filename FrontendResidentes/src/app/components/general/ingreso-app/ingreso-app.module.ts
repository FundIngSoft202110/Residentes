import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoAppPageRoutingModule } from './ingreso-app-routing.module';

import { IngresoAppPage } from './ingreso-app.page';
import { RouterModule, Routes } from '@angular/router';
import { IngreAptoPage } from '../ingre-apto/ingre-apto.page';

const routes: Routes = [
  {
    path: "",
    component: IngreAptoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoAppPageRoutingModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IngresoAppPage]
})
export class IngresoAppPageModule {}
