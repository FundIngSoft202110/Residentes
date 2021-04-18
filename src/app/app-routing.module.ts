import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HeaderStartComponent } from './components/header-start/header-start.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { MenuEmpleadoComponent } from './components/menu-empleado/menu-empleado.component';
import { MenuResidenteComponent } from './components/menu-residente/menu-residente.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/general/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
      CommonModule,
      IonicModule,
      RouterModule 
  ],
  exports: [RouterModule],
  declarations:[  MenuResidenteComponent,
    MenuAdminComponent,
    MenuEmpleadoComponent,
    HeaderComponent,
    HeaderStartComponen,
    ,
    ]
})
export class AppRoutingModule { }
