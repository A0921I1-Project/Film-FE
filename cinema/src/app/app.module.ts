import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AccountModuleModule} from './account-module/account-module.module';
// import {NgxPaginationModule} from 'ngx-pagination';
// import {Ng2SearchPipeModule} from 'ng2-search-filter';
// import {Ng2OrderModule} from 'ng2-order-pipe';
// import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import {SecurityRoutingModule} from './security/security-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SecurityModule} from './security/security.module';
import {AuthenticationService} from './security/service/authentication.service';
import {TokenStorageService} from './security/service/token-storage-service.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // CommonModule,
    // BrowserModule,
    // AppRoutingModule,
    // HttpClientModule,
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
    FormsModule
  ],

  providers: [
    AuthenticationService,
    TokenStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
