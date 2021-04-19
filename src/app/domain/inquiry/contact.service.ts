import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, ContactResponse } from './contact.model';
import { ContactInfrastructureService } from './contact.infrastructure.service';

export interface InterfaceContactInfrastructureService {
  send$(contact: Contact): Observable<ContactResponse>;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(
    private contactInfrastractureService: ContactInfrastructureService,
  ) {}

  send$(contact: Contact): Observable<ContactResponse> {
    return this.contactInfrastractureService.send$(contact);
  }
}
