import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaNosotrosPageRoutingModule } from './acerca-nosotros-routing.module';

import { AcercaNosotrosPage } from './acerca-nosotros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaNosotrosPageRoutingModule
  ],
  declarations: [AcercaNosotrosPage]
})
export class AcercaNosotrosPageModule {}
