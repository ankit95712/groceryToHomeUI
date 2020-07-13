import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.component.html',
  styleUrls: ['./enter-otp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterOtpComponent {
  @Output() navigateToLogin: EventEmitter<any> = new EventEmitter();
  enterOTP: number;
  shouldGoToCreatePassword: boolean;

  enterNewPass() {
    this.shouldGoToCreatePassword = true;
  }

  goToLogin(): void {
    this.navigateToLogin.emit();
  }
}
