import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSnsBarComponent } from './sns-bar.component';

describe('ViewSnsBarComponent', () => {
  let component: ViewSnsBarComponent;
  let fixture: ComponentFixture<ViewSnsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSnsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSnsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
