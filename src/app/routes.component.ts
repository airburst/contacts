import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: RouterConfig = [
  { path: '', redirectTo: 'contacts', terminal: true },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'contacts/:id/edit', component: EditContactComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
