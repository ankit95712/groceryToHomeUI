import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent {
  @Output() navigateToLogin: EventEmitter<any> = new EventEmitter();

  goToLogin(): void {
    this.navigateToLogin.emit();
  }

  enterNewPass(): void {

  }
}
