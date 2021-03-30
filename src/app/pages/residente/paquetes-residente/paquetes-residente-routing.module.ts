import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaquetesResidentePage } from './paquetes-residente.page';

const routes: Routes = [
  {
    path: '',
    component: PaquetesResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaquetesResidentePageRoutingModule {}
