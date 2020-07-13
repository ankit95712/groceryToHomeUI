import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() goToHome: EventEmitter<any> = new EventEmitter();

  username: string;
  password: string;
  successful: string;
  forgotPass = false;

  forgotPassword(): void {
    this.forgotPass = true;
  }

  goToLogin(): void {
    this.forgotPass = false;
  }

  login(): void {
    if (!!this.username && !!this.password) {
      this.goToHome.emit();
    } else {
      this.successful = 'input cannot be empty';
    }
  }
}
