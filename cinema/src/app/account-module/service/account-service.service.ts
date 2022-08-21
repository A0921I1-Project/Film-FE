import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from '../../model/account';
import {Content} from '@angular/compiler/src/render3/r3_ast';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private  http: HttpClient) { }

  getAll(page: Array<number>, searchUsername: string): Observable<Account[]> {
    return this.http.get<Account[]>(API_URL + '/account/list?page=' + page + '&username=' + searchUsername);
  }
  // searchByUsername(username: any = ''): Observable<Account[]> {
  //   return this.http.get<Account[]>(API_URL + '/account/search?username=' + username);
  // }

  findById(id: number): Observable<Account> {
    return this.http.get<Account>(`${API_URL}/account/find/${id}`);
  }

  edit(id: number, account: Account): Observable<Account> {
    return this.http.put<Account>(`${API_URL}/account/edit/${id}`, account);
  }
}
