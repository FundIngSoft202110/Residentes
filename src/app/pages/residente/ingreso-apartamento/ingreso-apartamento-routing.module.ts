import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoApartamentoPage } from './ingreso-apartamento.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoApartamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoApartamentoPageRoutingModule {}
