import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'groceryToHome';
  showLogin = true;
  show(){
    this.showLogin = !this.showLogin;

  }

}
