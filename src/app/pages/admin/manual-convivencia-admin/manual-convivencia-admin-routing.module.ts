import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualConvivenciaAdminPage } from './manual-convivencia-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ManualConvivenciaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualConvivenciaAdminPageRoutingModule {}
