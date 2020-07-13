import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent {
  @Output() navigateToLogin: EventEmitter<any> = new EventEmitter();
  enterOTP: boolean;

  phoneNumber: number;

  getOtp(): void {
    this.enterOTP = true;
  }

  goToLogin(): void {
    this.navigateToLogin.emit();
  }
}
