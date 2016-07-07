import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { FORM_DIRECTIVES } from '@angular/forms';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { ContactsService } from '../contacts.service';
import { IContact, Contact } from '../contact';

@Component({
  moduleId: module.id,
  selector: 'app-edit-contact',
  templateUrl: 'edit-contact.component.html',
  styleUrls: ['edit-contact.component.css'],
  directives: [FORM_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_INPUT_DIRECTIVES, MdIcon],
  providers: [ContactsService, MdIconRegistry]
})
export class EditContactComponent implements OnInit {

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

  ngOnInit() {}

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  remove(id) {
    this.contactsService.remove(id);
  }

}
