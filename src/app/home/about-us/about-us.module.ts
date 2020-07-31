import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ContactComponent } from './contact/contact.component';
import {AccordionModule} from 'primeng/accordion';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';



@NgModule({
  declarations: [AboutComponent, FeedbackComponent, ComplaintComponent, SuggestionsComponent, ContactComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    InputTextareaModule,
    ButtonModule,
    InputTextModule
  ]
})
export class AboutUsModule { }
