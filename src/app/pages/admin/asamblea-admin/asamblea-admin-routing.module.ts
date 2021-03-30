import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsambleaAdminPage } from './asamblea-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AsambleaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsambleaAdminPageRoutingModule {}
