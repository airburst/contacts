import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component';
//import { ContactsComponent } from './contacts/contacts.component';

const routes: RouterConfig = [
  {
    path: 'contacts',
    component: AppComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
