
import {Film} from './film';
import {Room} from './room';
import {Seat} from './seat';
import {Booking} from './booking';
import {Time} from './time';

export interface SeatDetail {
  id: number;
  isFlag: any;
  dateShow: any;
  status: any;
  ticket_id: any;
  film_id: Film;
  room_id: Room;
  seat_id: Seat;
  time_id: Time;
  booking_id: Booking;
}
