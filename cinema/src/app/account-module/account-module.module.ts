import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AccountModuleRoutingModule} from './account-module-routing.module';
// import {ToastrModule} from 'ngx-toastr';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AccountModuleRoutingModule
  ]
})
export class AccountModuleModule { }
