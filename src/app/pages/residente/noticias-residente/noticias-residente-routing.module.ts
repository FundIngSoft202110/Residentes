import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasResidentePage } from './noticias-residente.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasResidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasResidentePageRoutingModule {}
