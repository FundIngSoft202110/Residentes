import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/general/home/home.module').then( m => m.HomePageModule)
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
  {
    path: 'pagos',
    loadChildren: () => import('./pages/residente/pagos/pagos.module').then( m => m.PagosPageModule)
  },
  {
    path: 'asamblea-residente',
    loadChildren: () => import('./pages/residente/asamblea-residente/asamblea-residente.module').then( m => m.AsambleaResidentePageModule)
  },
  {
    path: 'areas-comunes-residente',
    loadChildren: () => import('./pages/residente/areas-comunes-residente/areas-comunes-residente.module').then( m => m.AreasComunesResidentePageModule)
  },
  {
    path: 'paquetes-residente',
    loadChildren: () => import('./pages/residente/paquetes-residente/paquetes-residente.module').then( m => m.PaquetesResidentePageModule)
  },
  {
    path: 'empleados-residente',
    loadChildren: () => import('./pages/residente/empleados-residente/empleados-residente.module').then( m => m.EmpleadosResidentePageModule)
  },
  {
    path: 'manual-convivencia',
    loadChildren: () => import('./pages/general/manual-convivencia/manual-convivencia.module').then( m => m.ManualConvivenciaPageModule)
  },
  {
    path: 'quejas-residente',
    loadChildren: () => import('./pages/residente/quejas-residente/quejas-residente.module').then( m => m.QuejasResidentePageModule)
  },
  {
    path: 'acerca-nosotros',
    loadChildren: () => import('./pages/general/acerca-nosotros/acerca-nosotros.module').then( m => m.AcercaNosotrosPageModule)
  },
  {
    path: 'claves',
    loadChildren: () => import('./pages/admin/claves/claves.module').then( m => m.ClavesPageModule)
  },
  {
    path: 'asamblea-admin',
    loadChildren: () => import('./pages/admin/asamblea-admin/asamblea-admin.module').then( m => m.AsambleaAdminPageModule)
  },
  {
    path: 'areas-comunes-residente',
    loadChildren: () => import('./pages/residente/areas-comunes-residente/areas-comunes-residente.module').then( m => m.AreasComunesResidentePageModule)
  },
  {
    path: 'areas-comunes-admin',
    loadChildren: () => import('./pages/admin/areas-comunes-admin/areas-comunes-admin.module').then( m => m.AreasComunesAdminPageModule)
  },
  {
    path: 'empleados-admin',
    loadChildren: () => import('./pages/admin/empleados-admin/empleados-admin.module').then( m => m.EmpleadosAdminPageModule)
  },
  {
    path: 'manual-convivencia-admin',
    loadChildren: () => import('./pages/admin/manual-convivencia-admin/manual-convivencia-admin.module').then( m => m.ManualConvivenciaAdminPageModule)
  },
  {
    path: 'quejas-admin',
    loadChildren: () => import('./pages/admin/quejas-admin/quejas-admin.module').then( m => m.QuejasAdminPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/general/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/general/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'netflix-conjuntos',
    loadChildren: () => import('./pages/general/netflix-conjuntos/netflix-conjuntos.module').then( m => m.NetflixConjuntosPageModule)
  },
  {
    path: 'ingreso-apartamento',
    loadChildren: () => import('./pages/residente/ingreso-apartamento/ingreso-apartamento.module').then( m => m.IngresoApartamentoPageModule)
  },
  {
    path: 'ingreso-conjunto',
    loadChildren: () => import('./pages/general/ingreso-conjunto/ingreso-conjunto.module').then( m => m.IngresoConjuntoPageModule)
  },
  {
    path: 'seleccion-conjunto',
    loadChildren: () => import('./pages/general/seleccion-conjunto/seleccion-conjunto.module').then( m => m.SeleccionConjuntoPageModule)
  },
  {
    path: 'agregar-conjunto',
    loadChildren: () => import('./pages/admin/agregar-conjunto/agregar-conjunto.module').then( m => m.AgregarConjuntoPageModule)
  },
  {
    path: 'paquetes-empleado',
    loadChildren: () => import('./pages/empleado/paquetes-empleado/paquetes-empleado.module').then( m => m.PaquetesEmpleadoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
