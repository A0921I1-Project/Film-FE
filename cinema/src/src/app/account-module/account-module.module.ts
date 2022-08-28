import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AccountListComponent } from './component/account-list/account-list.component';
import {RouterModule} from '@angular/router';
import {AccountModuleRoutingModule} from './account-module-routing.module';
import { AccountModuleComponent } from './account-module.component';
import { AccountEditComponent } from './component/account-edit/account-edit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';



@NgModule({
  declarations: [AccountListComponent, AccountModuleComponent, AccountEditComponent, EmployeeListComponent],
    imports: [
        CommonModule,
        RouterModule,
        AccountModuleRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        ShowHidePasswordModule,
        FormsModule,
        HttpClientModule
    ]
})
export class AccountModuleModule { }
