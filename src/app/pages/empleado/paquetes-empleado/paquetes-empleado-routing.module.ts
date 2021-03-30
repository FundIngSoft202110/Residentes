import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaquetesEmpleadoPage } from './paquetes-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: PaquetesEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaquetesEmpleadoPageRoutingModule {}
