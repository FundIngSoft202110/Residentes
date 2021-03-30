import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaNosotrosPage } from './acerca-nosotros.page';

const routes: Routes = [
  {
    path: '',
    component: AcercaNosotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcercaNosotrosPageRoutingModule {}
