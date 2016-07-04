import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ContactsService {

  _contacts: FirebaseListObservable<any[]>;
  
  constructor(af: AngularFire) {
    this._contacts = af.database.list('/contacts');
  }

  getContacts() {
    return this._contacts;
  }



}
