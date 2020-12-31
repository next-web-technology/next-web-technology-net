import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuBarComponent } from './menu-bar.component';

describe('ViewMenuBarComponent', () => {
  let component: ViewMenuBarComponent;
  let fixture: ComponentFixture<ViewMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMenuBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
