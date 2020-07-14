import {MessageService} from 'primeng/api';
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [MessageService]
})
export class LoginComponent {
  @Output() goToHome: EventEmitter<any> = new EventEmitter();

  username: string;
  password: string;
  error: string;
  forgotPass = false;
constructor(private messageService: MessageService) {}
  forgotPassword(): void {
    this.forgotPass = true;
  }

  goToLogin(): void {
    this.forgotPass = false;
  }

  login(): void {
    if (!!this.username && !!this.password) {
      this.error = '';
      this.goToHome.emit();
    } else {

      this.successful = 'input cannot be empty';
        this.messageService.add({severity:'error', summary:'Input cannot be empty', detail:'Via MessageService'});

    }
  }
}
