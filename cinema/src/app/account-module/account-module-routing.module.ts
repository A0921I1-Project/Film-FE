import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountRegisterComponent} from './account-register/account-register.component';

const routes: Routes = [
  {
    path: 'register',
    component: AccountRegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountModuleRoutingModule { }
