import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoAppPage } from './ingreso-app.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoAppPageRoutingModule {}
