import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmListComponent} from './film-list/film-list.component';
import {FilmCreateComponent} from './film-create/film-create.component';

const routes: Routes = [{
  path: 'list',
  component: FilmListComponent
}, {
  path: 'create',
  component: FilmCreateComponent
}, {
    path: 'update/:id',
    component: FilmCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmModuleRoutingModule {
}
