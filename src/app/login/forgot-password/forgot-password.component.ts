import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @Output() navigateToLogin: EventEmitter<any> = new EventEmitter();
  @Output() navigateToOTP: EventEmitter<any> = new EventEmitter();

  phoneNumber: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  getOtp(): void {
    this.navigateToOTP.emit();
  }

  goToLogin(): void {
    this.navigateToLogin.emit();
  }
}
