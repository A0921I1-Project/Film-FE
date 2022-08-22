import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmUpdateComponent } from './components/film-update/film-update.component';
import {FilmCreateComponent} from "./components/film-create/film-create.component";
import {FilmModuleRoutingModule} from "./film-module-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [FilmCreateComponent, FilmUpdateComponent],
  imports: [
    CommonModule,
    FilmModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class FilmModuleModule { }
