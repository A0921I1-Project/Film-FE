import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlimListComponent } from './flim-list/flim-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilmModuleRoutingModule} from './film-module-routing.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [FlimListComponent],
  exports: [
    FlimListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilmModuleRoutingModule,

  ]
})
export class FilmModuleModule { }
