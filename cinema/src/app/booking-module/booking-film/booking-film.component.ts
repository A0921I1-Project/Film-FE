import { Component, OnInit } from '@angular/core';
import {BookingService} from '../service/booking.service';

import {SeatDetail, SeatDetailDto} from '../../model/seat-detail';
import {Time} from '../../model/time';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {JsogService} from 'jsog-typescript';
import {Film} from '../../model/film';
import {Router} from '@angular/router';
import {Timedto} from '../../model/dto/timedto';

@Component({
  selector: 'app-booking-film',
  templateUrl: './booking-film.component.html',
  styleUrls: ['./booking-film.component.css']
})
export class BookingFilmComponent implements OnInit {
  films: Film[];
  seatDetails: SeatDetail[];
  seatDetails1: SeatDetailDto;
  times: Time[] = null;
  times1: Timedto[];
  dateShow: any;
  idFilm: any;
  idTime: number;
  timeShow: any;
  nameFilm: string;
  film: Film = null;
  message: string;
  idSeat: any = null;
  tmp: string;
  constructor(private bookingService: BookingService, private form: FormBuilder,
              private jsogService: JsogService, private router: Router) { }
  bookingFilm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    dateshow: new FormControl('', [Validators.required]),
    timeshow: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.bookingService.getMovieShowing().subscribe(data => {
      // this.films = data;
      this.films = this.jsogService.deserializeArray(data);
    });


  }

  showDateShow(id: number) {
    this.message = null;
    this.bookingService.getDateShowByIdFilm(id).subscribe(data => {
      // this.seatDetails = data;
        this.message = null;
        this.seatDetails = this.jsogService.deserializeArray(data);
        this.bookingService.getFilmById(id).subscribe(t => {
        this.film = t;
        this.nameFilm = this.film.name;
        this.times = null;
        this.dateShow = null;
        this.timeShow = null;
        this.bookingFilm.patchValue({name: this.nameFilm});
        this.bookingFilm.patchValue({dateshow: ''});
        this.bookingFilm.patchValue({timeshow: ''});
      });
    });
    this.idFilm = id;
  }
  ShowTimeShow(dateShow: string) {
    this.message = null;
    const x = dateShow.substr(0, 8);
    // tslint:disable-next-line:radix
    const y = parseInt(dateShow.substr(8, 10)) + 1;
    this.tmp = x + y;
    this.bookingService.getTimeShowByIdSeatDetail(this.tmp, this.idFilm).subscribe(data => {
      // this.times = data;
      this.times = this.jsogService.deserializeArray(data);
      console.log(this.times);
      this.dateShow = dateShow;
      this.bookingFilm.patchValue({dateshow: this.dateShow});
    });
  }


  chooseTimeShow(timeShow: string, time_id: number) {
    this.idTime = time_id;
    this.timeShow = timeShow;
    this.bookingFilm.patchValue({timeshow: this.timeShow});
  }

  onSubmit() {
    // this.bookingFilm.patchValue(
    //   {name: this.nameFilm},
    //   {dateshow: this.dateShow},
    //         {timeshow: this.timeShow});
    if (this.bookingFilm.valid) {
      console.log(this.nameFilm);
      console.log(this.dateShow);
      console.log(this.timeShow);
      for (let i = 0 ; i < this.times.length ; i++) {
        if (this.timeShow === this.times[i].timeShow) {
          this.idTime = this.times[i].id;
        }
      }
      // this.seatDetails1 = new SeatDetailDto(this.nameFilm, this.dateShow, this.idTime);
      this.bookingService.findAllSeatDetailByCondition(this.nameFilm, this.dateShow, this.idTime).subscribe(next => {
        console.log(this.jsogService.deserializeObject(next));
        this.idSeat = this.jsogService.deserializeObject(next.id);
        this.router.navigate(['bookingSeat', this.idSeat]);
      });
      // this.idSeat = this.seatDetails1[0].seat_id.id;
      // this.bookingFilm.

     // console.log(this.bookingFilm.value);
    } else {
      this.message = null;
      if (this.bookingFilm.controls.name.value === '') {
        this.message = 'Vui lòng chọn thông tin';
      } else
      if (this.bookingFilm.controls.dateshow.value === '') {
          this.message = 'Vui lòng chọn ngày chiếu';
      } else
      if (this.bookingFilm.controls.timeshow.value === '') {
          this.message = 'Vui lòng chọn giờ chiếu';
        }
      }

    }
  }
