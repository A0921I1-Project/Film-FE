import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountRegisterComponent} from './account-register/account-register.component';
import {AccountModuleRoutingModule} from './account-module-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AccountRegisterComponent],
  imports: [
    CommonModule,
    AccountModuleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AccountModuleModule {
}
