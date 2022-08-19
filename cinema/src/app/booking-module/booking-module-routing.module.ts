import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BookingModuleComponent} from "./booking-module.component";
import {BookingDetailComponent} from "./booking-detail/booking-detail.component";
import {BookingCreateComponent} from "./booking-create/booking-create.component";

const routes: Routes = [
  {
    path:"booking",component:BookingModuleComponent, children:[
      {
        path:"create", component:BookingCreateComponent
      },
      {
        path:"detail/:id", component:BookingDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingModuleRoutingModule { }
