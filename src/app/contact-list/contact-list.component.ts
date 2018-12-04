import { Component, OnInit } from '@angular/core';

import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [new Contact('Max'), new Contact('Moritz')];

  constructor() { }

  ngOnInit() {
  }

}
