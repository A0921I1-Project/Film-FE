import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../../model/account';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}` + 'account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {
  }

  addAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(API_URL + '/add', account);
  }
}
