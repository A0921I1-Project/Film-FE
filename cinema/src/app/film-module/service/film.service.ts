import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "../../model/film";

@Injectable({
  providedIn: 'root'
})


export class FilmService {
  private URL_API: string;

  constructor(private httpClient: HttpClient) {
    this.URL_API = "http://localhost:8080/api/film";
  }

  getInfoFilmById(id: number): Observable<Film> {
    return this.httpClient.get<Film>(this.URL_API + "/info" + "?" + "id=" + id);
  }
}
