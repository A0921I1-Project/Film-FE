import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmModuleComponent} from './film-module.component';
import {FilmInfoComponent} from './film-info/film-info.component';
import {RouterModule} from '@angular/router';
import {FilmModuleRoutingModule} from './film-module-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SafePipeModule} from 'safe-pipe';
import {BookingModuleModule} from '../booking-module/booking-module.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlimListComponent} from './flim-list/flim-list.component';


@NgModule({
  declarations: [FlimListComponent, FilmInfoComponent, FilmModuleComponent],
  exports: [
    FlimListComponent, FilmInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilmModuleRoutingModule,
    SafePipeModule
  ]
})
export class FilmModuleModule {
}
