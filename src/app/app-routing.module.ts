import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgregarConjuntoComponent } from './components/admin/agregar-conjunto-component/agregar-conjunto-component.component';
import AreasComunesAdminComponent from './components/admin/areas-comunes-admin-component/areas-comunes-admin-component.component';
import { AsambleaAdminComponent } from './components/admin/asamblea-admin-component/asamblea-admin-component.component';
import { ClavesComponent } from './components/admin/claves-component/claves-component.component';
import { ManualAdminComponent } from './components/admin/manual-admin-component/manual-admin-component.component';
import { QuejasAdminComponent } from './components/admin/quejas-admin-component/quejas-admin-component.component';
import { AsistenciaEmpleadoComponent } from './components/empleado/asistencia-empleado-component/asistencia-empleado-component.component';
import { PaquetesEmpleadoComponent } from './components/empleado/paquetes-empleado-component/paquetes-empleado-component.component';
import { AcercaNosotrosComponent } from './components/general/acerca-nosotros-component/acerca-nosotros-component.component';
import { HomeComponent } from './components/general/home-component/home-component.component';
import { IngresoComponent } from './components/general/ingreso-component/ingreso-component.component';
import { ManualComponent } from './components/general/manual-component/manual-component.component';
import { NetflixComponent } from './components/general/netflix-component/netflix-component.component';
import { RegistroComponent } from './components/general/registro-component/registro-component.component';
import { HeaderStartComponent } from './components/general/header-start/header-start.component';
import { HeaderComponent } from './components/general/header/header.component';
import { MenuAdminComponent } from './components/admin/menu-admin/menu-admin.component';
import { MenuEmpleadoComponent } from './components/empleado/menu-empleado/menu-empleado.component';
import { MenuResidenteComponent } from './components/residente/menu-residente/menu-residente.component';
import { AreasResidenteComponent } from './components/residente/areas-residente-component/areas-residente-component.component';
import { AsambleaResidenteComponent } from './components/residente/asamblea-residente-component/asamblea-residente-component.component';
import { IngresoApartamentoComponent } from './components/residente/ingreso-apartamento-component/ingreso-apartamento-component.component';
import { PagosComponent } from './components/residente/pagos-component/pagos-component.component';
import { PaquetesResidenteComponent } from './components/residente/paquetes-residente-component/paquetes-residente-component.component';
import { QuejasResidenteComponent } from './components/residente/quejas-residente-component/quejas-residente-component.component';
import { DxAutocompleteModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxFormModule, DxListModule, DxNumberBoxModule, DxScrollViewComponent, DxScrollViewModule, DxSelectBoxModule, DxTemplateModule, DxTextAreaModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NoticiasComponent } from './components/general/noticias/noticias.component';
import { EmpleadosComponent } from './components/general/empleados/empleados.component';
import { AsambleaSubirVotosComponent } from './components/admin/asamblea-Subir-Votos/asamblea-subir-votos/asamblea-subir-votos.component';
import { SeleccionConjuntoComponent } from './components/general/seleccion-conjunto-component/seleccion-conjunto-component.component';
import { ResultadosResidenteComponent } from './components/residente/resultados-residente/resultados-residente.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nuevo-conjunto',
    component: AgregarConjuntoComponent
  },
  {
    path: 'areas-admin',
    component: AreasComunesAdminComponent
  },
  {
    path: 'asamblea-admin',
    component: AsambleaAdminComponent
  },
  {
    path: 'claves',
    component: ClavesComponent
  },
  {
    path: 'manual-admin',
    component: ManualAdminComponent
  },
  {
    path: 'quejas-admin',
    component: QuejasAdminComponent
  },
  {
    path: 'asistencia-empleado',
    component: AsistenciaEmpleadoComponent
  },
  {
    path: 'paquetes-empleado',
    component: PaquetesEmpleadoComponent
  },
  {
    path: 'acerca-nosotros',
    component: AcercaNosotrosComponent
  },
  {
    path: 'ingreso',
    component: IngresoComponent
  },
  {
    path: 'manual',
    component: ManualComponent
  },
  {
    path: 'netflix',
    component: NetflixComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'seleccion-conjunto',
    component: SeleccionConjuntoComponent
  },
  {
    path: 'areas-residente',
    component: AreasResidenteComponent
  },
  {
    path: 'asamblea-residente',
    component: AsambleaResidenteComponent
  },
  {
    path: 'ingreso-apto',
    component: IngresoApartamentoComponent
  },
  {
    path: 'pagos',
    component: PagosComponent
  },
  {
    path: 'paquetes-residente',
    component: PaquetesResidenteComponent
  },
  {
    path: 'quejas-residente',
    component: QuejasResidenteComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'subir-votos-admin',
    component: AsambleaSubirVotosComponent
  },
  {
    path: 'resultados-residente',
    component: ResultadosResidenteComponent
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
    
    RouterModule,
    DxDataGridModule,
    DxButtonModule,
    BrowserModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxFormModule,
    DxTextAreaModule,
    BrowserModule,
    DxSelectBoxModule,
    DxListModule,
    DxTemplateModule , 

  ],
  exports: [RouterModule],
  declarations: [MenuResidenteComponent,
    MenuAdminComponent,
    MenuEmpleadoComponent,
    HeaderComponent,
    HeaderStartComponent,
    AgregarConjuntoComponent,
    AreasComunesAdminComponent,
    AsambleaAdminComponent,
    ClavesComponent,
    ManualAdminComponent,
    QuejasAdminComponent,
    AsistenciaEmpleadoComponent,
    PaquetesEmpleadoComponent,
    AcercaNosotrosComponent,
    HomeComponent,
    IngresoComponent,
    ManualComponent,
    NetflixComponent,
    RegistroComponent,
    AreasResidenteComponent,
    AsambleaResidenteComponent,
    IngresoApartamentoComponent,
    PagosComponent,
    PaquetesResidenteComponent,
    QuejasResidenteComponent,
    NoticiasComponent,
    EmpleadosComponent,
    AsambleaSubirVotosComponent,
    SeleccionConjuntoComponent
  ]
})
export class AppRoutingModule { }
