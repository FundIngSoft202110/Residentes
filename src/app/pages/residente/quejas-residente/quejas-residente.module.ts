import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuejasResidentePageRoutingModule } from './quejas-residente-routing.module';

import { QuejasResidentePage } from './quejas-residente.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuejasResidentePageRoutingModule,
    ComponentsModule
  ],
  declarations: [QuejasResidentePage]
})
export class QuejasResidentePageModule {}