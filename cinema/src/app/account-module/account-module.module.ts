import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeInfoComponent } from './components/change-info/change-info.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ViewHistoryPointComponent } from './components/view-history-point/view-history-point.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AccountModuleRoutingModule} from './account-module-routing.module';
import {FormDirective} from '../common/form.directive';



@NgModule({
  declarations: [ChangeInfoComponent, ChangePasswordComponent, ViewHistoryPointComponent, SidebarComponent, FormDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AccountModuleRoutingModule
  ]
})
export class AccountModuleModule { }
