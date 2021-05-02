import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'view-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  recaptchaSiteKey: string = environment.recaptchaSiteKey;

  @Output()
  appSendContact: EventEmitter<{
    email: string;
    name: string;
    title: string;
    content: string;
  }>;

  constructor() {
    this.appSendContact = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(email: string, name: string, title: string, content: string): void {
    this.appSendContact.emit({ email, name, title, content });
  }
}
