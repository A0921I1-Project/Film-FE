import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmModuleRoutingModule} from "./film-module/film-module-routing.module";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FilmModuleRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
