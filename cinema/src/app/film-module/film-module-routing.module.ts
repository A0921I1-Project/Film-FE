import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmInfoComponent} from './film-info/film-info.component';
import {FilmModuleComponent} from './film-module.component';
import {FlimListComponent} from './flim-list/flim-list.component';

const routes: Routes = [
  {
    path: 'film', component: FilmModuleComponent, children: [
      {
        path: 'info/:id', component: FilmInfoComponent
      },
      {
        path: '', component: FlimListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FilmModuleRoutingModule {
}

