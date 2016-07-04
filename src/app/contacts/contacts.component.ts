import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {
    this.contacts = contactsService.contacts$;
  }

  ngOnInit() { }

  showDetails(id) {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }
}
