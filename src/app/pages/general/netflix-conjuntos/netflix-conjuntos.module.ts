import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetflixConjuntosPageRoutingModule } from './netflix-conjuntos-routing.module';

import { NetflixConjuntosPage } from './netflix-conjuntos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetflixConjuntosPageRoutingModule
  ],
  declarations: [NetflixConjuntosPage]
})
export class NetflixConjuntosPageModule {}
