import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TicketModuleModule} from './ticket-module/ticket-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TicketModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
