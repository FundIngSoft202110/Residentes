import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualConvivenciaPage } from './manual-convivencia.page';

const routes: Routes = [
  {
    path: '',
    component: ManualConvivenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualConvivenciaPageRoutingModule {}
