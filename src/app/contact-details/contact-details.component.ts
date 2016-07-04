import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html',
  styleUrls: ['contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  id: string;
  
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
  }

}
