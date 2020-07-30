import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [AboutComponent, FeedbackComponent, ComplaintComponent, SuggestionsComponent, ContactComponent],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
