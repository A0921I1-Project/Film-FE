import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-seat',
  templateUrl: './booking-seat.component.html',
  styleUrls: ['./booking-seat.component.css']
})
export class BookingSeatComponent implements OnInit {
  movies: any[];
  showtimes: any[] = [];
  movieId: number;
  showtimeId: number;
  maxDate: Date;
  minDate: Date;
  selectedMovie: any;
  selectedTasks = {};
  isLoggedIn = false;
  public rows: Array<string>;
  public seats: Array<number>;
  seatChoose = [];
  seatBooking: any[] = [];
  selectedIdx = '';
  constructor() { }

  ngOnInit(): void {
    this.rows = ['A', 'B', 'C', 'D', 'E'];
    this.seats = [1, 2, 3, 4, 5, 6, 7, 8];
  }

  booking() {

  }

  chooseSeat(seat: string) {
    this.selectedIdx = seat;
    const index: number = this.seatChoose.indexOf(seat);
    console.log(this.seatChoose.indexOf(seat));
    if (index !== -1) {
      this.seatChoose.splice(index, 1);
      return;
    }
    this.seatChoose.push(seat);
  }
}
