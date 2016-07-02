import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/routes.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: 'AIzaSyB1wm8byvmgfBB7QBKEx6JSgBt-Pi_UkFI',
    authDomain: 'contact-book-d01f2.firebaseapp.com',
    databaseURL: 'https://contact-book-d01f2.firebaseio.com',
    storageBucket: ''
  })
]);