import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from '../../model/film';
import {PageFilm} from '../../model/page-film';
import {Category} from '../../model/category';
import {CategoryFilm} from '../../model/category-film';

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
    url += '/list/search?value=' + searchName + '&page=' + page;
    return this.http.get<PageFilm>(url);
  }
  deleteFilm(id: number): Observable<PageFilm> {
    return this.http.delete<PageFilm>(API_URL + '/' + id);
  }
  detailFilm(id: number): Observable<Film> {
    return this.http.get<Film>(API_URL + '/' + id);
  }
  add(film: Film): Observable<Film> {
    return this.http.post<Film>(API_URL + '/create', film);
  }
  update(id: number, film: Film) {
    console.log('id = ' + id );
    return this.http.put<Film>(API_URL + '/update/' + film.id, film);
  }
  findById(id: number): Observable<Film> {
    return this.http.get<Film>(API_URL + '/' + id);
  }
  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/getAllCategory');
  }

  // tslint:disable-next-line:ban-types
  getFilmIdByName(name: String): Observable<Number> {
    // tslint:disable-next-line:ban-types
    return this.http.get<Number>(API_URL + '/findFilmIdByName/' + name);
  }

  // tslint:disable-next-line:ban-types
  addCategoryFilm(id: Number, categoryId: Number, filmId: Number): Observable<CategoryFilm> {
    // @ts-ignore
    return this.http.post<CategoryFilm>( API_URL + '/createCategoryFilm/' + id + '/' + categoryId + '/' + filmId);
  }
  // tslint:disable-next-line:ban-types
  getNumberOfReCordOfCategoryFilm(): Observable<Number> {
    // tslint:disable-next-line:ban-types
    return this.http.get<Number>(API_URL + '/findNumberOfReCordOfCategoryFilm');
  }

  // getAllFilmsWithPage(page: number): Observable<PageFilm> {
  //   return this.http.get<PageFilm>(API_URL + '/list?page=' + page);
  // }
  //
  // search(searchName: any = '', page: number = 0): Observable<PageFilm> {
  //   let url = API_URL;
  //   url += '/search?value=' + searchName + '&page=' + page;
  //   return this.http.get<PageFilm>(url);
  // }
  getInfoFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(API_URL + '/info' + '?' + 'id=' + id);
  }
  constructor(private http: HttpClient) {
  }
}
