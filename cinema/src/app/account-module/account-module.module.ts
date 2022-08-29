import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountListComponent} from './component/account-list/account-list.component';
import {RouterModule} from '@angular/router';
import {AccountModuleRoutingModule} from './account-module-routing.module';
import {AccountModuleComponent} from './account-module.component';
import {AccountEditComponent} from './component/account-edit/account-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';
import {AccountRegisterComponent} from './account-register/account-register.component';
import {HttpClientModule} from '@angular/common/http';
import { ChangeInfoComponent } from './component/change-info/change-info.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {FormDirective} from '../common/focus.directive';
import {ViewHistoryPointComponent} from './component/view-history-point/view-history-point.component';


@NgModule({
  declarations: [AccountListComponent, AccountModuleComponent, AccountEditComponent, AccountRegisterComponent,
    ChangeInfoComponent, ChangePasswordComponent, SidebarComponent, ViewHistoryPointComponent, FormDirective],
  imports: [
    CommonModule,
    RouterModule,
    AccountModuleRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ShowHidePasswordModule,
    HttpClientModule,
  ]
})
export class AccountModuleModule {
}
