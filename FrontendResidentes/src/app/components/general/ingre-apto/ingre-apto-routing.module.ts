import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngreAptoPage } from './ingre-apto.page';

const routes: Routes = [
  {
    path: '',
    component: IngreAptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngreAptoPageRoutingModule {}
