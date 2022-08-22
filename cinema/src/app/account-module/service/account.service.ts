import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from '../../model/account';

const API_URL = 'http://localhost:8080/api/account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<Account> {
    return this.http.get<Account>(API_URL + '/' + id);
  }

  changePassword(id: number, oldPass: string, newPass: string): Observable<Account> {
    return this.http.post<Account>
    (API_URL + '/updatePassword?id=' + id + '&oldPass=' + oldPass + '&newPass=' + newPass, {});
  }

  updateInfo(id: number, account: Account): Observable<Account> {
    return this.http.post<Account>(API_URL + '/update?id=' + id, account);
  }

  checkExistEmail(email: string): Observable<boolean> {
    return this.http.get<boolean>(API_URL + '/checkExistEmail?email=' + email);
  }
}
