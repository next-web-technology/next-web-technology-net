import { TestBed } from '@angular/core/testing';

import { ContactInfrastructureService } from './contact.infrastructure.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('ContactInfrastructureService', () => {
  let service: ContactInfrastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactInfrastructureService],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ContactInfrastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
