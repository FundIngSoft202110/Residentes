import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoConjuntoPage } from './nuevo-conjunto.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoConjuntoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoConjuntoPageRoutingModule {}
