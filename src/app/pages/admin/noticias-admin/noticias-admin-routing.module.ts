import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasAdminPage } from './noticias-admin.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasAdminPageRoutingModule {}
