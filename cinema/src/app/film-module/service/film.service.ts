import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from '../../model/film';
import {PageFilm} from '../../model/page-film';

const API_URL = `${environment.apiUrl}` + 'film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  getAllFilmsWithPage(page: number): Observable<PageFilm> {
    return this.http.get<PageFilm>(API_URL + '?page=' + page);
  }

  search(searchName: any = '', page: number = 0): Observable<PageFilm> {
    let url = API_URL;
    url += '/search?name=' + searchName + '&page=' + page;
    return this.http.get<PageFilm>(url);
  }
  deleteFilm(id: number): Observable<Film> {
    return this.http.delete<Film>(API_URL + '/' + id);
  }

  constructor(private http: HttpClient) {
  }
}
