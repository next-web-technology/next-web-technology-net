import { TestBed } from '@angular/core/testing';

import { ContactApplicationService } from './contact.application.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

describe('ContactApplicationService', () => {
  let service: ContactApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactApplicationService],
      imports: [MatSnackBarModule, HttpClientModule],
    });
    service = TestBed.inject(ContactApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
