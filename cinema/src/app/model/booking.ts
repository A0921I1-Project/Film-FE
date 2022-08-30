import {SeatDetail} from './seat-detail';

export interface Booking {
  id: number;
  dayTimeBooking: any;
  totalPrice: number;
  pointExchange: number;
  pointReward: number;
  bookingCode: string;
  account: Account;
  seatDetails: SeatDetail[];

}
