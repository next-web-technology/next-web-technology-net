import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inquiry, InquiryResponse } from './inquiry.model';
import { InquiryInfrastructureService } from '../inquiry/inquiry.infrastructure.service';

export interface InterfaceInquiryInfrastructureService {
  send$(inquiry: Inquiry): Observable<InquiryResponse>;
}

@Injectable({
  providedIn: 'root',
})
export class InquiryService {
  constructor(
    private inquiryInfrastractureService: InquiryInfrastructureService,
  ) {}

  send$(inquiry: Inquiry): Observable<InquiryResponse> {
    return this.inquiryInfrastractureService.send$(inquiry);
  }
}
