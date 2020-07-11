import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string
successfull:string


  constructor() { }

  ngOnInit(): void {
  }
 login(): void {
 if (!!this.username && !! this.password){
 this.successfull="successfull login"}
else
{
this.successfull="input cannot be empty"}
  }

}
