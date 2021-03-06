import {NgModule} from '@angular/core';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './home/shared/form/form.component';
import {ForgotPasswordComponent} from './login/forgot-password/forgot-password.component';
import {homeChildRoute} from './home/home-route';
import {CreatePasswordComponent} from './login/create-password/create-password.component';

const homeChildren = homeChildRoute.concat({path: 'createPassword', component: CreatePasswordComponent});

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: 'login', component: LoginComponent},
  {path: 'changePassword', component: ForgotPasswordComponent},
  {
    path: 'home', component: HomeComponent, children: homeChildren
  },
  {path: 'form', component: FormComponent},
  {path: 'registration', component: RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
