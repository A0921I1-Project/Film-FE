import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../service/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.css']
})
export class AccountRegisterComponent implements OnInit {
  accountForm: FormGroup;
  account: Account;

  constructor(
    private accountService: AccountService,
    private router: Router) {
    this.accountForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      fullname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('((09|03|07|08|05)([0-9]{8})\\b)')]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9,12}$')]),
      birthday: new FormControl(''),
      gender: new FormControl(''),
      address: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  saveAccount() {
    console.log(this.accountForm.value);
    this.accountService.addAccount(this.accountForm.value).subscribe(next => {
      alert('Đăng ký thành công');
      // this.router.navigate('')
    });
  }
}
