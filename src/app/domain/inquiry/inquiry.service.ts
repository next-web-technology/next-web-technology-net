import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, ContactResponse } from './inquiry.model';
import { ContactInfrastructureService } from '../inquiry/inquiry.infrastructure.service';

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
