import { CommonModule, registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgregarConjuntoComponent } from './components/admin/agregar-conjunto-component/agregar-conjunto-component.component';
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
import { PagosComponent } from './components/residente/pagos-component/pagos-component.component';
import { PaquetesResidenteComponent } from './components/residente/paquetes-residente-component/paquetes-residente-component.component';
import { QuejasResidenteComponent } from './components/residente/quejas-residente-component/quejas-residente-component.component';
import { DxAutocompleteModule, DxButtonModule, DxCalendarModule, DxCheckBoxModule, DxDataGridModule, DxFileUploaderModule, DxFormModule, DxListModule, DxNumberBoxModule, DxRadioGroupModule, DxScrollViewComponent, DxScrollViewModule, DxSelectBoxModule, DxTabPanelModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NoticiasComponent } from './components/general/noticias/noticias.component';
import { EmpleadosComponent } from './components/general/empleados/empleados.component';
import { AsambleaSubirVotosComponent } from './components/admin/asamblea-Subir-Votos/asamblea-subir-votos/asamblea-subir-votos.component';
import { SeleccionConjuntoComponent } from './components/general/seleccion-conjunto-component/seleccion-conjunto-component.component';
import { ResultadosResidenteComponent } from './components/residente/resultados-residente/resultados-residente.component';
import { IngresoPerfilesComponent } from './components/general/ingreso-perfiles/ingreso-perfiles.component';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ListaAsambleasResidentesComponent } from './components/residente/lista-asambleas-residentes/lista-asambleas-residentes.component';
import { ChatComponent } from './components/general/chat/chat.component';
import { ReservarAreaComponent } from './components/residente/reservar-area/reservar-area.component';
import { AreaComunAdminComponent } from './components/admin/area-comun-admin/area-comun-admin.component';
import { AgregarAreaAdminComponent } from './components/admin/agregar-area-admin/agregar-area-admin.component';
import { ModificarAreaAdminComponent } from './components/admin/modificar-area-admin/modificar-area-admin.component';


import { CalendarComponent, NgCalendarModule } from 'ionic2-calendar';

import localeDe from '@angular/common/locales/es-CO';
registerLocaleData(localeDe);
import { NuevoPaqueteComponent } from './components/empleado/nuevo-paquete/nuevo-paquete.component';

import { ReservacionAreaResidenteComponent } from './components/residente/reservacion-area-residente/reservacion-area-residente.component';

import { ModificarReservaAreaComponent } from './components/residente/modificar-reserva-area/modificar-reserva-area.component';
import { ListaAsasambleaAdminComponent } from './components/admin/lista-asambleas-admin/lista-asasamblea-admin/lista-asasamblea-admin.component';
import { CalendarPaqueteComponent } from './components/empleado/calendar-paquete/calendar-paquete.component';
import { ListaptoscComponent } from './components/admin/listaptosc/listaptosc.component';
import { CambicontraComponent } from './components/admin/cambicontra/cambicontra.component';
import { NuevaAsambleaComponent } from './components/admin/nueva-asamblea/nueva-asamblea.component';
import { NuevaPropuestaComponent } from './components/admin/nueva-propuesta/nueva-propuesta.component';
//ngx-extended-pdf-viwer

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nuevo-conjunto2',
    component: AgregarConjuntoComponent
  },
  {
    path: 'asamblea-admin',
    component: AsambleaAdminComponent
  },
  {
    path: 'nueva-asamblea',
    component: NuevaAsambleaComponent
  },
  {
    path: 'nueva-propuesta',
    component: NuevaPropuestaComponent
  },
  {
    path: 'claves2',
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
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'paquetes-empleado',
    component: PaquetesEmpleadoComponent
  },
  {
    path: 'nuevo-paquete',
    component: NuevoPaqueteComponent
  },
  {
    path: 'acerca-nosotros',
    component: AcercaNosotrosComponent
  },
  {
    path: 'ingresob',
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
    path: 'lista-asambleas-residentes',
    component: ListaAsambleasResidentesComponent
  },
  {
    path: 'asamblea-residente',
    component: AsambleaResidenteComponent
  },
  {
    path: 'ingreso-perfiles',
    component: IngresoPerfilesComponent
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
    path: 'reservar-area',
    component: ReservarAreaComponent
  },
  {
    path: 'area-comun-admin',
    component: AreaComunAdminComponent
  },
  {
    path: 'agregar-area',
    component: AgregarAreaAdminComponent
  },
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'modificar-area',
    component: ModificarAreaAdminComponent
  },
  
  {
    path: 'mis-reservas',
    component: ReservacionAreaResidenteComponent
  },
  {
    path: 'modificar-reserva-area',
    component: ModificarReservaAreaComponent
  },
  {
    path: 'lista-asamblea-admin',
    component: ListaAsasambleaAdminComponent
  },
  {
    path: 'claves',
    component: ListaptoscComponent
  },
  {
    path: 'clavescambio',
    component: CambicontraComponent
  },
  
  {
    path: 'ingre-apto',
    loadChildren: () => import('../app/components/general/ingre-apto/ingre-apto.module').then( m => m.IngreAptoPageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./components/general/ingreso-app/ingreso-app.module').then( m => m.IngresoAppPageModule)
  },
  {
    path: 'chatB',
    loadChildren: () => import('./components/general/chatp/chatp.module').then( m => m.ChatpPageModule)
  },
  {
    path: 'agregar-empleado',
    loadChildren: () => import('./components/admin/agregar-empleado/agregar-empleado.module').then( m => m.AgregarEmpleadoPageModule)
  },
  {
    path: 'nuevo-conjunto',
    loadChildren: () => import('./components/admin/nuevo-conjunto/nuevo-conjunto.module').then( m => m.NuevoConjuntoPageModule)
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
    DxFileUploaderModule,
    DxTextBoxModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    DxRadioGroupModule,
    DxTabPanelModule,
    BrowserModule,
    DxCalendarModule,
    NgCalendarModule
    
  ],
  exports: [RouterModule],
  declarations: [
    MenuResidenteComponent,
    MenuAdminComponent,
    MenuEmpleadoComponent,
    HeaderComponent,
    HeaderStartComponent,
    AgregarConjuntoComponent,
    AsambleaAdminComponent,
    NuevaAsambleaComponent,
    NuevaPropuestaComponent,
    ClavesComponent,
    ManualAdminComponent,
    QuejasAdminComponent,
    AsistenciaEmpleadoComponent,
    PaquetesEmpleadoComponent,
    NuevoPaqueteComponent,
    AcercaNosotrosComponent,
    HomeComponent,
    IngresoComponent,
    ManualComponent,
    NetflixComponent,
    RegistroComponent,
    AreasResidenteComponent,
    AsambleaResidenteComponent,
    PagosComponent,
    PaquetesResidenteComponent,
    QuejasResidenteComponent,
    NoticiasComponent,
    EmpleadosComponent,
    AsambleaSubirVotosComponent,
    SeleccionConjuntoComponent,
    ListaAsambleasResidentesComponent,
    ChatComponent,
    CambicontraComponent,
    ReservarAreaComponent,
    AreaComunAdminComponent,
    AgregarAreaAdminComponent,
    ListaptoscComponent,
    ModificarAreaAdminComponent,
    ReservacionAreaResidenteComponent, // ojo
    ModificarReservaAreaComponent,
    ListaAsasambleaAdminComponent,
    ReservacionAreaResidenteComponent,
    CalendarPaqueteComponent// ojo
  ],
  providers:[
    {provide: LOCALE_ID, useValue:'es-Co'}
  ]
})
export class AppRoutingModule { }
