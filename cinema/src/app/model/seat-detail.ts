import {Time} from "./time";
import {Room} from "./room";
import {Seat} from "./seat";
import {Film} from "./film";
import {Booking} from "./booking";

export interface SeatDetail {
  id: number;
  isFlag: any;
  dateShow: Date;
  status: boolean;
  time: Time;
  room:Room;
  seat: Seat;
  film:Film;
  booking:Booking;
}
