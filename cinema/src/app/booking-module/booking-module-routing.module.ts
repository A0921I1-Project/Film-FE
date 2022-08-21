import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingFilmComponent} from './booking-film/booking-film.component';
import {BookingSeatComponent} from './booking-seat/booking-seat.component';

const routes: Routes = [
  {path: 'bookingFilm', component: BookingFilmComponent},
  {path: 'bookingSeat/:id', component: BookingSeatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingModuleRoutingModule { }
