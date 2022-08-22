import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmCreateComponent} from "./components/film-create/film-create.component";

const routes: Routes = [
  {
    path: 'create', component: FilmCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmModuleRoutingModule { }
