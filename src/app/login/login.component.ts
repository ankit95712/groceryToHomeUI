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
    this.loginService.login()
      .subscribe((data: any) => console.log(data));

    if (!!this.username && !!this.password) {
      this.error = '';
      this.router.navigate(['/home', {}]);
    } else {
      this.messageService.add({severity: 'error', summary: 'Login Failed', detail: 'Both User name and Password is required'});
    }
  }
}
