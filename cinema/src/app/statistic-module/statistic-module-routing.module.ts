import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountstatisticComponent} from './accountstatistic/accountstatistic.component';
import {FilmstatisticComponent} from './filmstatistic/filmstatistic.component';


const routes: Routes = [
  {
    path: 'currentDay',
    component: FilmstatisticComponent
  },
  {
    path: 'account',
    component: AccountstatisticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticModuleRoutingModule { }
