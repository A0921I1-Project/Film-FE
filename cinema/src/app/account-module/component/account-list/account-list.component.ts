import { Component, OnInit } from '@angular/core';
import {Account} from '../../../model/account';
import {AccountServiceService} from '../../service/account-service.service';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {newArray} from '@angular/compiler/src/util';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  page: number = 1;
  pages: Array<number>;
  username: string;
  id: number;
  // usernameSearch = '';
  searchForm: FormGroup = new FormGroup({
    username: new FormControl(''),
  });

  constructor(private accountService: AccountServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.accountService.getAll(this.page).subscribe(next => {
      // console.log(next['content']);
      // console.log(next['totalPages']);
      this.accounts = next['content'];
      this.pages = new Array(next['totalPages']);
      // this.page = next['number' + 1];
    });
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getAll();
  }

  onSearch() {
    // if (this.usernameSearch !== this.searchForm.value.username) {
    //   this.usernameSearch = this.searchForm.value.username;
    //   // this.page = 1;
    // }
    this.accountService.searchByUsername(this.username).subscribe(next => {
        console.log(next['content']);
        this.accounts = next['content'];
        this.pages = new Array(next['totalPages']);
        // this.page = next['number' + 1];
    });
  }
}
