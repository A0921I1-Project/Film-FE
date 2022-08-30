import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Booking} from "../../model/booking";
import {BookingService} from "../service/booking.service";

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  bookingDetail:Booking;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bookingService: BookingService,
              ) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      const id = Number(paramMap.get("id"));
      this.bookingService.getBookingFilmById(id).subscribe(next=>{
        this.bookingDetail = next;
        console.log(next);
      })
    })
  }

  ngOnInit(): void {
  }

}
