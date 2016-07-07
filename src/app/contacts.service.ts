import { Injectable, bind } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';
import { IContact } from './contact';

@Injectable()
export class ContactsService {

  contacts$: FirebaseListObservable<IContact[]>;

  constructor(private af: AngularFire) {
    this.contacts$ = af.database.list('/contacts');
  }

  contact$(id: string): FirebaseObjectObservable<IContact> {
    let url:string = '/contacts/' + id;
    return this.af.database.object(url);
  }

  add(contact: IContact) {
    // Add new record into contacts collection
    console.log('Adding contact: ', contact);
  }

  update(contact: IContact) {
    // Push update for contact record
    console.log('Updating contact: ', contact);
  }

  remove(contactId: string) {
    // Delete contact record
    console.log('Removing contact: ', contactId);
  }

}
