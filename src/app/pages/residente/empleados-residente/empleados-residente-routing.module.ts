import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosResidentePage } from './empleados-residente.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadosResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadosResidentePageRoutingModule {}
