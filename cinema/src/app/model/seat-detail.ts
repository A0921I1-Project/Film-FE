import {Time} from './time';
import {Room} from './room';
import {Seat} from './seat';
import {Film} from './film';
import {Booking} from './booking';

export interface SeatDetail {
  id: number;
  isFlag: any;
  dateShow: any;
  status: any;
  film_id: Film;
  room_id: Room;
  seat_id: Seat;
  time_id: Time;
  booking_id: Booking;
}
