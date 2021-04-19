import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact, ContactResponse } from './contact.model';
import { InterfaceContactInfrastructureService } from './contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactInfrastructureService
  implements InterfaceContactInfrastructureService {
  constructor() {}

  send$(contact: Contact): Observable<ContactResponse> {
    // Todo: This is dummy response. API request must be implemented.
    return of({ status: 'success' });
  }
}
