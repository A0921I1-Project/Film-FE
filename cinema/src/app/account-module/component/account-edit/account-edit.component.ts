import { Component, OnInit } from '@angular/core';
import {Account} from '../../../model/account';
import {AccountRole} from '../../../model/account-role';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountServiceService} from '../../service/account-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  account: Account = new class implements Account {
    id: number;
    isEnabled: boolean;
    username: string;
    accountCode: string;
    password: string;
    fullname: string;
    birthday: any;
    idCard: string;
    address: string;
    phone: string;
    verificationCode: string;
    email: string;
    gender: string;
    totalPoint: number;
    imageUrl: string;
    account_role_test: AccountRole;
  };

  id: number;

  editForm: FormGroup;

  constructor(private accountService: AccountServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.id = parseInt(paramMap.get('id'));
      this.getAccount(this.id);
    });
  }

  ngOnInit(): void {
  }

  getAccount(id: number) {
    this.accountService.findById(id).subscribe(account => {
      this.editForm = new FormGroup({
        id: new FormControl(account.id),
        username: new FormControl(account.username),
        fullname: new FormControl(account.fullname),
        password: new FormControl(account.password),
        birthday: new FormControl(account.birthday),
        gender: new FormControl(account.gender),
        email: new FormControl(account.email),
        idCard: new FormControl(account.idCard),
        phone: new FormControl(account.phone),
        address: new FormControl(account.address)
      });
    });
  }

  editAccount(id: number) {
    const account = this.editForm.value;
    this.accountService.edit(id, account).subscribe(() => {
      alert('Sửa thành công');
      this.router.navigateByUrl('/account/list');
    });

  }

  onSubmit() {
    this.editAccount(this.id);
  }

  public showPassword: boolean;
}
