import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCardsComponent } from './basic-cards/basic-cards.component';
import {SidebarModule} from 'primeng/sidebar';
import {FormComponent} from "./form/form.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddItemCardComponent } from './add-item-card/add-item-card.component';
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [BasicCardsComponent, FormComponent, AddItemCardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SidebarModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],
  exports: [
    BasicCardsComponent, AddItemCardComponent
  ]
})
export class SharedModule { }
