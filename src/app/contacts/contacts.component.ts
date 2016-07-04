import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ContactsService } from '../contacts.service';

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  id: string;
  contacts: FirebaseListObservable<any[]>;

  constructor(private contactsService: ContactsService) {
    this.contacts = contactsService.getContacts()
  }

  ngOnInit() { }

  showDetails(id) {
    // change route to ContactDetails/:id
    console.log(id);
  }
}
