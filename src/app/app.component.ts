import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import { ContactsComponent } from './contacts/contacts.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MdIcon, MdToolbar],
  providers: [MdIconRegistry]
})
export class AppComponent {

  constructor(af: AngularFire) {
    this.contacts = af.database.list('contacts');
  }

  contacts: FirebaseListObservable<any[]>;
  title = 'Contacts';

  showDetails(uid) {
    console.log(uid);
  }

  delete($event) {

  }

}
