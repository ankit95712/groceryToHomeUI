import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCardsComponent } from './basic-cards/basic-cards.component';
import {SidebarModule} from 'primeng/sidebar';
import {FormComponent} from "./form/form.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [BasicCardsComponent, FormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SidebarModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    BasicCardsComponent
  ]
})
export class SharedModule { }
