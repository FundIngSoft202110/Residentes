import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'noticias-residente',
    loadChildren: () => import('./pages/residente/noticias-residente/noticias-residente.module').then( m => m.NoticiasResidentePageModule)
  },
  {
    path: 'asistencia-empleado',
    loadChildren: () => import('./pages/empleado/asistencia-empleado/asistencia-empleado.module').then( m => m.AsistenciaEmpleadoPageModule)
  },
  {
    path: 'noticias-admin',
    loadChildren: () => import('./pages/admin/noticias-admin/noticias-admin.module').then( m => m.NoticiasAdminPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
