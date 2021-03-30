import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComunesResidentePage } from './areas-comunes-residente.page';

const routes: Routes = [
  {
    path: '',
    component: AreasComunesResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreasComunesResidentePageRoutingModule {}
