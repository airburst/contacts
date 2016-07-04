import { Injectable } from '@angular/core';
import {
  AngularFire, 
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';
import { Contact } from './contact';

@Injectable()
export class ContactsService {

  _contacts: FirebaseListObservable<Contact[]>;
  
  constructor(af: AngularFire) {
    this._contacts = af.database.list('/contacts');
  }

  getContacts() {
    return this._contacts;
  }

  // getContact(id: string): FirebaseObjectObservable<Contact> {
  //   return af.database.list('/contacts/' + id);
  // }

}
