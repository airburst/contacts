import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
})
export class AppComponent {

  constructor(af: AngularFire) {
    this.contacts = af.database.list('contacts');
  }

  contacts: FirebaseListObservable<any[]>;

  title = 'Contacts';
}
