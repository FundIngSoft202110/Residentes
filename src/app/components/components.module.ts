import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { MenuResidenteComponent } from './menu-residente/menu-residente.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuEmpleadoComponent } from './menu-empleado/menu-empleado.component';


@NgModule({
  declarations: [
    MenuResidenteComponent,
    MenuAdminComponent,
    MenuEmpleadoComponent
  ],
  exports: [
    MenuResidenteComponent,
    MenuAdminComponent,
    MenuEmpleadoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
