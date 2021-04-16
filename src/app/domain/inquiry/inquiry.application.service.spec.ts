import { TestBed } from '@angular/core/testing';

import { InquiryApplicationService } from './inquiry.application.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('InquiryApplicationService', () => {
  let service: InquiryApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InquiryApplicationService],
      imports: [MatSnackBarModule],
    });
    service = TestBed.inject(InquiryApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
