import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingModuleComponent } from './booking-module.component';
import {BookingModuleRoutingModule} from './booking-module-routing.module';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingCreateComponent } from './booking-create/booking-create.component';
import {RouterModule} from '@angular/router';



@NgModule({
declarations: [BookingModuleComponent, BookingDetailComponent, BookingCreateComponent],
  imports: [
  CommonModule,
  RouterModule,
  BookingModuleRoutingModule
  ]
})
export class BookingModuleModule { }
