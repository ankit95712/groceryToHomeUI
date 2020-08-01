import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './home/shared/form/form.component';
import {ForgotPasswordComponent} from './login/forgot-password/forgot-password.component';
import {homeChildRoute} from './home/home-route';
import {CreatePasswordComponent} from "./login/create-password/create-password.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'changePassword', component: ForgotPasswordComponent},
  {path: 'createPassword', component: CreatePasswordComponent},
  {
    path: 'home', component: HomeComponent, children: homeChildRoute
  },
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
