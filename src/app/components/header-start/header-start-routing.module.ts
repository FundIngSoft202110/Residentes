import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderStartPage } from './header-start.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderStartPageRoutingModule {}
