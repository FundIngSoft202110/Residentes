import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { MenuResidenteComponent } from './menu-residente/menu-residente.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuEmpleadoComponent } from './menu-empleado/menu-empleado.component';
import { HeaderComponent } from './header/header.component';
import { HeaderStartComponent } from './header-start/header-start.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuResidenteComponent,
    MenuAdminComponent,
    MenuEmpleadoComponent,
    HeaderComponent,
    HeaderStartComponent
  ],
  exports: [
    MenuResidenteComponent,
    MenuAdminComponent,
    MenuEmpleadoComponent,
    HeaderComponent,
    HeaderStartComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
