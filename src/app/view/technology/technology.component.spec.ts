import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechnologyComponent } from './technology.component';

describe('ViewTechnologyComponent', () => {
  let component: ViewTechnologyComponent;
  let fixture: ComponentFixture<ViewTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
