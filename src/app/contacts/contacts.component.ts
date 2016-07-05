import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { FirebaseListObservable } from 'angularfire2';
import { ContactsService } from '../contacts.service';
import { IContact } from '../contact';

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MdIcon],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  id: string;
  contacts: FirebaseListObservable<IContact[]>;

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
