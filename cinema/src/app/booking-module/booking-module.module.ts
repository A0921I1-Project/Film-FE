import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingFilmComponent} from './booking-film/booking-film.component';
import {BookingSeatComponent} from './booking-seat/booking-seat.component';
import {BookingModuleRoutingModule} from './booking-module-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsogService} from 'jsog-typescript';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [BookingFilmComponent, BookingSeatComponent],
  imports: [
    CommonModule,
    BookingModuleRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
      JsogService
  ]
})
export class BookingModuleModule { }
