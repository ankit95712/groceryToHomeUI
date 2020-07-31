import {NgModule} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import {AboutUsModule} from './about-us/about-us.module';
import {SharedModule} from './shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [HomeComponent, FormComponent, LandingPageComponent],
  imports: [
    CommonModule,
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AboutUsModule,
    SharedModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
