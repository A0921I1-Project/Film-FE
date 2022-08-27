import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './component/account-list/account-list.component';
import {RouterModule} from '@angular/router';
import {AccountModuleRoutingModule} from './account-module-routing.module';
import { AccountModuleComponent } from './account-module.component';
import { AccountEditComponent } from './component/account-edit/account-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';


@NgModule({
  declarations: [AccountListComponent, AccountModuleComponent, AccountEditComponent],
    imports: [
        CommonModule,
        RouterModule,
        AccountModuleRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        ShowHidePasswordModule
    ]
})
export class AccountModuleModule { }
