import { Component, OnInit } from '@angular/core';
import { Inquiry } from '../../domain/inquiry/inquiry.model';
import { InquiryApplicationService } from '../../domain/inquiry/inquiry.application.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private inquiryApplicationService: InquiryApplicationService) {}

  ngOnInit(): void {}

  onSendInquiry(inquiry: Inquiry): void {
    this.inquiryApplicationService.send(inquiry);
  }
}
