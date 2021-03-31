import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaNosotrosPageRoutingModule } from './acerca-nosotros-routing.module';

import { AcercaNosotrosPage } from './acerca-nosotros.page';

import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaNosotrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AcercaNosotrosPage]
})
export class AcercaNosotrosPageModule {}
