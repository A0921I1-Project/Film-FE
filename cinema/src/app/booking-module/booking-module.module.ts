import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerBookingListComponent } from './manager-booking-list/manager-booking-list.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BookingModuleRoutingModule} from './booking-module-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ManagerBookingDetailComponent } from './manager-booking-detail/manager-booking-detail.component';
import { ManagerBookingInformationComponent } from './manager-booking-information/manager-booking-information.component';



@NgModule({
  declarations: [ManagerBookingListComponent, ManagerBookingDetailComponent, ManagerBookingInformationComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BookingModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookingModuleModule { }
