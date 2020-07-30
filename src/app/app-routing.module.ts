import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './home/form/form.component';
import {ForgotPasswordComponent} from './login/forgot-password/forgot-password.component';
import {AboutComponent} from './home/about-us/about/about.component';
import {ContactComponent} from './home/about-us/contact/contact.component';
import {ComplaintComponent} from './home/about-us/complaint/complaint.component';
import {SuggestionsComponent} from './home/about-us/suggestions/suggestions.component';
import {FeedbackComponent} from './home/about-us/feedback/feedback.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'changePassword', component: ForgotPasswordComponent},
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'aboutUs', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'complaint', component: ComplaintComponent},
      {path: 'suggestions', component: SuggestionsComponent},
      {path: 'feedback', component: FeedbackComponent},
    ]
  },
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
