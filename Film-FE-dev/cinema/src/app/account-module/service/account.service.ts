import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageAccount} from '../employee/model/page-employee';
import {Content} from '../employee/model/content';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private API_URL = 'http://localhost:8080/api/employee';
  constructor(private http: HttpClient) { }
  getSearch(page: number, search: string): Observable<PageAccount> {
    return this.http.get<PageAccount>(this.API_URL + `/list?page=` + page + '&search=' + search );
  }
  getViewEmployee(id: number): Observable<Content> {
    return this.http.get<Content>(this.API_URL + `/` + id );
  }
  // update(id: number, content: Content ): Observable<Content> {
  //   // @ts-ignore
  //   return this.http.put<Content>(this.API_URL + `/update/` + id , content);
  // }

  delete(id: number): Observable<Content> {
    return this.http.delete<Content>(this.API_URL + '/delete/' + id);
  }
}
