import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoConjuntoPage } from './ingreso-conjunto.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoConjuntoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoConjuntoPageRoutingModule {}
