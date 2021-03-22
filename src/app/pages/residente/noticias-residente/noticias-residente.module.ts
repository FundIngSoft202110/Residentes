import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasResidentePageRoutingModule } from './noticias-residente-routing.module';

import { NoticiasResidentePage } from './noticias-residente.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasResidentePageRoutingModule,
    ComponentsModule
  ],
  declarations: [NoticiasResidentePage]
})
export class NoticiasResidentePageModule {}
