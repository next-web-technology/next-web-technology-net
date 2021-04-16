import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  @Output()
  appSendInquiry: EventEmitter<{
    email: string;
    name: string;
    title: string;
    content: string;
  }>;

  constructor() {
    this.appSendInquiry = new EventEmitter();
  }

  ngOnInit(): void {}

  onSubmit(email: string, name: string, title: string, content: string): void {
    this.appSendInquiry.emit({ email, name, title, content });
  }
}
