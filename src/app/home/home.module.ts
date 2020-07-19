import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MenubarModule,
     BrowserModule,
     BrowserAnimationsModule,
     FormsModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
