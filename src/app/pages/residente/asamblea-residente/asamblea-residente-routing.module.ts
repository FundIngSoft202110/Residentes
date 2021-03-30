import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsambleaResidentePage } from './asamblea-residente.page';

const routes: Routes = [
  {
    path: '',
    component: AsambleaResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsambleaResidentePageRoutingModule {}
