import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogoImageComponent } from './logo-image.component';

describe('ViewLogoImageComponent', () => {
  let component: ViewLogoImageComponent;
  let fixture: ComponentFixture<ViewLogoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLogoImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLogoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
