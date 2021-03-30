import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionConjuntoAdminPage } from './seleccion-conjunto-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionConjuntoAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionConjuntoAdminPageRoutingModule {}
