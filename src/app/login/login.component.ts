import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  successfull: string;
  forgotPass = false;
  phoneNumber: number;
  enterOTP: boolean;
  enterPassword: string;
  enterNewPassword: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  getOtp(): void {
    this.enterOTP = true;
    this.forgotPass = false;
  }

  forgotPassword(): void {
    this.forgotPass = true;
  }

  createPassword(): void {

  }

  goToLogin(): void {
    this.forgotPass = false;
    this.enterOTP = false;
    this.enterNewPassword = false;
  }


  forgotUsername(): void {
    this.phoneNumber = this.phoneNumber;
  }

  login(): void {
    if (!!this.username && !!this.password) {
      this.successfull = 'successfull login';
    } else {
      this.successfull = 'input cannot be empty';
    }
  }
enterNewPass(): void {
    this.enterOTP = false;
    this.enterNewPassword = true;

  }

}
