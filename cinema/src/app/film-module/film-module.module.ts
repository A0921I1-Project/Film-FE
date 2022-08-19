import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmModuleComponent} from './film-module.component';
import {FilmInfoComponent} from "./film-info/film-info.component";
import {RouterModule} from "@angular/router";
import {FilmModuleRoutingModule} from "./film-module-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {SafePipeModule} from "safe-pipe";


@NgModule({
  declarations: [
    FilmInfoComponent,
    FilmModuleComponent
  ],
  imports: [
    CommonModule,
    FilmModuleRoutingModule,
    RouterModule,
    SafePipeModule
  ]
})
export class FilmModuleModule {
}
