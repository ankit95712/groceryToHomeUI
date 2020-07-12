import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {LoginComponent} from './login.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { EnterOtpComponent } from './enter-otp/enter-otp.component';
import { CreatePasswordComponent } from './create-password/create-password.component';


@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    EnterOtpComponent,
    CreatePasswordComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class LoginModule {
}
