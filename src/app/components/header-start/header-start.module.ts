import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderStartPageRoutingModule } from './header-start-routing.module';

import { HeaderStartPage } from './header-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderStartPageRoutingModule
  ],
  declarations: [HeaderStartPage]
})
export class HeaderStartPageModule {}
