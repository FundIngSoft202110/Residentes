import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasAdminPageRoutingModule } from './noticias-admin-routing.module';

import { NoticiasAdminPage } from './noticias-admin.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NoticiasAdminPage]
})
export class NoticiasAdminPageModule {}
