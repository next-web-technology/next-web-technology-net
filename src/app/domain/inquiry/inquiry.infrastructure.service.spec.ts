import { TestBed } from '@angular/core/testing';

import { InquiryInfrastructureService } from './inquiry.infrastructure.service';

describe('InquiryInfrastructureService', () => {
  let service: InquiryInfrastructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InquiryInfrastructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
