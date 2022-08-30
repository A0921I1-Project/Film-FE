import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FilmModuleModule} from './film-module/film-module.module';
import { HttpClientModule } from '@angular/common/http';
import {BookingModuleModule} from './booking-module/booking-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmModuleModule,
    HttpClientModule,
    BookingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
