import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Contact, ContactResponse } from './contact.model';
import { InterfaceContactInfrastructureService } from './contact.service';

type ContactApiResponse = {
  status?: number;
  message?: string;
  data: ContactResponse;
};

@Injectable({
  providedIn: 'root',
})
export class ContactInfrastructureService
  implements InterfaceContactInfrastructureService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  send$(contact: Contact): Observable<ContactResponse> {
    return this.http
      .post<ContactApiResponse>(
        environment.apiUrl + '/contact',
        contact,
        this.httpOptions,
      )
      .pipe(map((contactApiResponse) => contactApiResponse.data));
  }
}
