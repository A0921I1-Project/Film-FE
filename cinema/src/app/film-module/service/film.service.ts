
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Film} from '../../model/film';
import {HttpClient} from '@angular/common/http';
import {PageFilm} from '../../model/page-film';
const API_URL = `${environment.apiUrl}` + 'film';
@Injectable({
  providedIn: 'root'
})

export class FilmService {
  constructor(private http: HttpClient) {
   // this.URL_API = "http://localhost:8080/api/film";
  }
  getAllFilmsWithPage(page: number): Observable<PageFilm> {
    return this.http.get<PageFilm>(API_URL + '/list?page=' + page);
  }

  search(searchName: any = '', page: number = 0): Observable<PageFilm> {
    let url = API_URL;
    url += '/search?value=' + searchName + '&page=' + page;
    return this.http.get<PageFilm>(url);
  }
  getInfoFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(API_URL + '/info' + '?' + 'id=' + id);
  }
}
