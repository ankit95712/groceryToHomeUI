import {MessageService} from 'primeng/api';
import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService, LoginService]
})
export class LoginComponent {
  @Output() goToHome: EventEmitter<any> = new EventEmitter();

  username: string;
  password: string;
  error: string;
  forgotPass = false;

  constructor(private loginService: LoginService,
              private messageService: MessageService,
              private router: Router) {
  }

  forgotPassword(): void {
    this.forgotPass = true;
  }

  goToLogin(): void {
    this.forgotPass = false;
  }

  login(): void {
    if (!!this.username && !!this.password) {
      this.loginService.login(this.username, this.password)
        .subscribe((data: any) => this.router.navigate(['/home', data]));
      } else {
      this.messageService.add({severity: 'error', summary: 'Login Failed', detail: 'Both User name and Password is required'});
    }
  }
}
