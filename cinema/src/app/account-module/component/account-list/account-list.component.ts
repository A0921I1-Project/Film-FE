import { Component, OnInit } from '@angular/core';
import {Account} from '../../../model/account';
import {AccountServiceService} from '../../service/account-service.service';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {newArray} from '@angular/compiler/src/util';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  page: number = 1;
  pages: Array<number>;
  username: string;
  id: number;
  searchUsername: any = '';
  searchForm: FormGroup = new FormGroup({
    username: new FormControl(''),
  });
  p: number = 1;

  constructor(private accountService: AccountServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
      // if (this.searchUsername !== this.searchForm.value.username) {
      //   this.searchUsername = this.searchForm.value.username;
      //   // this.page = 1;
      // }
      this.accountService.getAll(this.pages, this.searchForm.value.username).subscribe(next => {
          // console.log(next['content']);
          this.accounts = next['content'];
          this.pages = new Array(next['totalPages']);
          // this.page = next['number' + 1];
      });
    }

  // getAll() {
  //   this.accountService.getAll(this.page, this.searchUsername).subscribe(next => {
  //     // console.log(next['content']);
  //     // console.log(next['totalPages']);
  //     this.accounts = next['content'];
  //     this.pages = new Array(next['totalPages']);
  //     // this.page = next['number' + 1];
  //   });
  // }

  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getAll();
  }

  // onSearch() {
  //   // if (this.usernameSearch !== this.searchForm.value.username) {
  //   //   this.usernameSearch = this.searchForm.value.username;
  //   //   // this.page = 1;
  //   // }
  //   this.accountService.searchByUsername(this.username).subscribe(next => {
  //       console.log(next['content']);
  //       this.accounts = next['content'];
  //       this.pages = new Array(next['totalPages']);
  //       // this.page = next['number' + 1];
  //   });
  // }
}
