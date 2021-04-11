import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inquiry, InquiryResponse } from './inquiry.model';
import { InterfaceInquiryInfrastructureService } from './inquiry.service';

@Injectable({
  providedIn: 'root',
})
export class InquiryInfrastructureService
  implements InterfaceInquiryInfrastructureService {
  constructor() {}

  send$(inquiry: Inquiry): Observable<InquiryResponse> {
    // Todo: This is dummy response. API request must be implemented.
    return of({ status: 'success' });
  }
}
