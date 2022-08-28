import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {AccountModuleModule} from './account-module/account-module.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import {SecurityRoutingModule} from './security/security-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SecurityModule} from './security/security.module';
import {AuthenticationService} from './security/service/authentication.service';
import {TokenStorageService} from './security/service/token-storage-service.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AccountModuleModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    ShowHidePasswordModule,

    SecurityModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    TokenStorageService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
