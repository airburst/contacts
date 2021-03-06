import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { ContactsService } from '../contacts.service';
import { IContact, Contact } from '../contact';

@Component({
  moduleId: module.id,
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MdIcon],
  providers: [ContactsService, MdIconRegistry]
})
export class ContactDetailsComponent {

  id: string;
  contact: IContact;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {
    route.params.subscribe(params => { this.id = params['id']; });
    this.contactsService.contact$(this.id).subscribe(c => {
      this.contact = <IContact>c;
    });
  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  remove(id) {
    this.contactsService.remove(id);
  }

  edit(id) {
    this.router.navigate(['./', 'edit'], { relativeTo: this.route });
  }

}
