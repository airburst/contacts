import { Component } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  moduleId: module.id,
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.css'],
  providers: [ContactsService]
})
export class ContactDetailsComponent {

  id: string;
  contact: Contact;
  
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {
    route.params.subscribe(params => { this.id = params['id']; });
    this.contactsService.contact$(this.id).subscribe(c => {
      this.contact = <Contact>c;
    });
  }

}
