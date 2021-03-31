import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuejasAdminPageRoutingModule } from './quejas-admin-routing.module';

import { QuejasAdminPage } from './quejas-admin.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuejasAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QuejasAdminPage]
})
export class QuejasAdminPageModule {}
