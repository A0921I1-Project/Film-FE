import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Film} from "../../model/film";
import {Observable} from "rxjs";
import {Category} from "../../model/category";
import {CategoryFilm} from "../../model/categoryFilm";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  add(film: Film):Observable<Film> {
    return this.http.post<Film>(API_URL+'/film/create',film);
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '/film/getAllCategory')
  }

  getFilmIdByName(name: String):Observable<Number>{
    return this.http.get<Number>(API_URL + '/film/findFilmIdByName/' +name);
  }

  addCategoryFilm(id: Number, categoryId: Number, filmId: Number):Observable<CategoryFilm> {
    // @ts-ignore
    return this.http.post<CategoryFilm>( API_URL+'/film/createCategoryFilm/'+id+'/'+categoryId+'/'+filmId);
  }
  getNumberOfReCordOfCategoryFilm():Observable<Number> {
    return this.http.get<Number>(API_URL+'/film/findNumberOfReCordOfCategoryFilm')
  }
}
