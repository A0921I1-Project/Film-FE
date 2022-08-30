import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BookingModuleModule} from './booking-module/booking-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FilmModuleModule} from './film-module/film-module.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingModuleModule,
    HttpClientModule,
    FilmModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
