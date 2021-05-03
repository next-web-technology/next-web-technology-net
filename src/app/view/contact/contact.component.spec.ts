import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactComponent } from './contact.component';

import { FormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

describe('ViewContactComponent', () => {
  let component: ViewContactComponent;
  let fixture: ComponentFixture<ViewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewContactComponent],
      imports: [FormsModule, RecaptchaModule, RecaptchaFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
