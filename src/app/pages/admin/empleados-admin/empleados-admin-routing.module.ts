import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosAdminPage } from './empleados-admin.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadosAdminPageRoutingModule {}
