import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCopyrightComponent } from './copyright.component';

describe('CopyrightComponent', () => {
  let component: ViewCopyrightComponent;
  let fixture: ComponentFixture<ViewCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCopyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
