import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoConjuntoPageRoutingModule } from './nuevo-conjunto-routing.module';

import { NuevoConjuntoPage } from './nuevo-conjunto.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: NuevoConjuntoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NuevoConjuntoPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevoConjuntoPage]
})
export class NuevoConjuntoPageModule {}
