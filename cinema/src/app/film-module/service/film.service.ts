import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PageFilm} from '../../model/page-film';
import {environment} from '../../../environments/environment';
import {Film} from '../../model/film';
import {HttpClient} from '@angular/common/http';
const API_URL = `${environment.apiUrl}` + 'film';
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  getAllFilmsWithPage(page: number): Observable<PageFilm> {
    return this.http.get<PageFilm>(API_URL + '/list?page=' + page);
  }

  search(searchName: any = '', page: number = 0): Observable<PageFilm> {
    let url = API_URL;
    url += '/search?value=' + searchName + '&page=' + page;
    return this.http.get<PageFilm>(url);
  }
  constructor(private http: HttpClient) {}
}
