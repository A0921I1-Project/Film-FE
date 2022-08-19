import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "../../model/film";
import {Booking} from "../../model/booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private URL_API: string;
  constructor(private httpClient: HttpClient) {
    this.URL_API = "http://localhost:8080/api/booking";
  }


  getBookingFilmById(id: number): Observable<Booking> {
    return this.httpClient.get<Booking>(this.URL_API + "/info" + "?" + "id=" + id);
  }
}
