import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLinkComponent } from './link.component';

describe('ViewLinkComponent', () => {
  let component: ViewLinkComponent;
  let fixture: ComponentFixture<ViewLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLinkComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
