import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetflixConjuntosPage } from './netflix-conjuntos.page';

const routes: Routes = [
  {
    path: '',
    component: NetflixConjuntosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetflixConjuntosPageRoutingModule {}
