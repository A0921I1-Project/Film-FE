import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BookingModuleModule} from './booking-module/booking-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingModuleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
