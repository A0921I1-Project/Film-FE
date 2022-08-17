import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlimListComponent} from './flim-list/flim-list.component';

const routes: Routes = [{
  path : '',
  component : FlimListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmModuleRoutingModule { }
