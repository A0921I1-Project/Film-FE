import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {AccountListComponent} from './component/account-list/account-list.component';
import {AccountEditComponent} from './component/account-edit/account-edit.component';
import {AccountModuleComponent} from './account-module.component';

const routes: Routes = [
  {
    path: 'account', component: AccountModuleComponent, children: [
      {
        path: 'list', component: AccountListComponent
      },
      {
        path: 'edit/:id', component: AccountEditComponent
      },
      {
        path : 'employee',
        component: EmployeeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountModuleRoutingModule { }
