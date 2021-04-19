import { TestBed } from '@angular/core/testing';

import { ContactInfrastructureService } from './inquiry.infrastructure.service';

describe('ContactInfrastructureService', () => {
  let service: ContactInfrastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactInfrastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
