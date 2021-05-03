import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'view-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  recaptchaSiteKey: string = environment.recaptchaSiteKey;

  @Input() email?: string;
  @Input() name?: string;
  @Input() title?: string;
  @Input() content?: string;

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

  onSubmit(
    email: string,
    name: string,
    title: string,
    content: string,
    formRef: NgForm,
  ): void {
    this.appSendContact.emit({ email, name, title, content });
    formRef.resetForm();
  }
}
