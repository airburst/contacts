import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: RouterConfig = [
  { path: '', redirectTo: 'contacts', terminal: true },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
