import { Injectable, bind } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';
import { Contact } from './contact';

@Injectable()
export class ContactsService {

  contacts$: FirebaseListObservable<Contact[]>;

  constructor(private af: AngularFire) {
    this.contacts$ = af.database.list('/contacts');
  }

  contact$(id: string): FirebaseListObservable<Contact[]> {
    let url:string = '/contacts/' + id;
    console.log('Getting id:', url)
    return this.af.database.list(url);
  }

}
