import {AboutComponent} from './about-us/about/about.component';
import {ContactComponent} from './about-us/contact/contact.component';
import {ComplaintComponent} from './about-us/complaint/complaint.component';
import {SuggestionsComponent} from './about-us/suggestions/suggestions.component';
import {FeedbackComponent} from './about-us/feedback/feedback.component';

export let homeChildRoute = [
  {path: 'aboutUs', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'complaint', component: ComplaintComponent},
  {path: 'suggestions', component: SuggestionsComponent},
  {path: 'feedback', component: FeedbackComponent},
];
