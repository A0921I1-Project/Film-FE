import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PageAccount} from '../model/page-employee';
import {Content} from '../model/content';
import {AccountService} from '../../service/account.service';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  indexPagination = 0;
  page: PageAccount;
  numEmployee: number;
  employees: Content[];
  totalPages = 1;
  size: number;
  name: string;
  id: number;
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('',
      [Validators.pattern('^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ\\d .@]*$')])
  });

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.onSearch();
  }

  previousPage() {
    this.indexPagination -= 1;
    this.onSearch();
  }

  nextPage() {
    this.indexPagination += 1;
    this.onSearch();
  }

  onSearch() {
    this.accountService.getSearch(this.indexPagination, this.searchForm.value.name).subscribe(page => {
      this.employees = page.content;
      this.indexPagination = page.number;
      this.page = page;
      this.size = page.size;
      console.log(page.number);
      this.totalPages = page.totalPages;
      this.numEmployee = page.totalElements;
      // tslint:disable-next-line:triple-equals
      if (this.numEmployee == 0) {
        this.totalPages = 1;
      }
    });
    console.log(this.page);
  }
  findDeleteById(name: string | any, id: number | any) {
    this.name = name;
    this.id = id;
  }

  delete(id: any) {
    if (this.employees.length === 1) {
      this.indexPagination--;
    }
    this.accountService.delete(id).subscribe(
      data => {
        this.onSearch();
      },
      error => {
        this.onSearch();
      }
    );
    alert('Xoá thành công');
  }
}
