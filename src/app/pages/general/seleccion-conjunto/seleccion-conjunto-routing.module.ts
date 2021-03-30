import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionConjuntoPage } from './seleccion-conjunto.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionConjuntoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionConjuntoPageRoutingModule {}
