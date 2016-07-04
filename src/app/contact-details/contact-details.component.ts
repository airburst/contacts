import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  moduleId: module.id,
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.css'],
  providers: [ContactsService]
})
export class ContactDetailsComponent implements OnInit {

  id: string;
  contact: any;
  
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
    this.contact = this.contactsService.contact$(this.id).subscribe(queriedItems => {
      console.log(queriedItems);
    });
  }

}
