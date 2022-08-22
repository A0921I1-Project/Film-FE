import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewHistoryPointComponent} from './components/view-history-point/view-history-point.component';
import {ChangeInfoComponent} from './components/change-info/change-info.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent
  },
  {
    path: 'changePassword', component: ChangePasswordComponent
  },
  {
    path: 'changeInfo', component: ChangeInfoComponent
  },
  {
    path: 'view-history-point', component: ViewHistoryPointComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountModuleRoutingModule { }
