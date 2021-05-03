import { Component, OnInit } from '@angular/core';
import { Contact } from '../../domain/contact/contact.model';
import { ContactApplicationService } from '../../domain/contact/contact.application.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email?: string;
  name?: string;
  title?: string;
  content?: string;

  constructor(private contactApplicationService: ContactApplicationService) {
    this.email = '';
    this.name = '';
    this.title = '';
    this.content = '';
  }

  ngOnInit(): void {}

  onSendContact(contact: Contact): void {
    this.contactApplicationService.send(contact);
  }
}
