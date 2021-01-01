import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisionComponent } from './vision.component';

describe('ViewVisionComponent', () => {
  let component: ViewVisionComponent;
  let fixture: ComponentFixture<ViewVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewVisionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
