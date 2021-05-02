import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            CommonModule,
            HttpClientModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            FormsModule
            ],

  providers: [InAppBrowser, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
