import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuejasAdminPage } from './quejas-admin.page';

const routes: Routes = [
  {
    path: '',
    component: QuejasAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuejasAdminPageRoutingModule {}
