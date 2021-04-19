import { Component, OnInit } from '@angular/core';
import { Contact } from '../../domain/inquiry/contact.model';
import { ContactApplicationService } from '../../domain/inquiry/contact.application.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private contactApplicationService: ContactApplicationService) {}

  ngOnInit(): void {}

  onSendContact(contact: Contact): void {
    this.contactApplicationService.send(contact);
  }
}
