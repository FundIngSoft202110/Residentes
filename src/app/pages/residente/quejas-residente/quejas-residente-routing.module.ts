import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuejasResidentePage } from './quejas-residente.page';

const routes: Routes = [
  {
    path: '',
    component: QuejasResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuejasResidentePageRoutingModule {}
