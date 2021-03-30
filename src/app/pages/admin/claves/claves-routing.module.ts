import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClavesPage } from './claves.page';

const routes: Routes = [
  {
    path: '',
    component: ClavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClavesPageRoutingModule {}
