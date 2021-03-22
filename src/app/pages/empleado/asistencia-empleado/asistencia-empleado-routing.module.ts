import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaEmpleadoPage } from './asistencia-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaEmpleadoPageRoutingModule {}
