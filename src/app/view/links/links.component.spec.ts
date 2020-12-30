import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLinksComponent } from './links.component';

describe('ViewLinksComponent', () => {
  let component: ViewLinksComponent;
  let fixture: ComponentFixture<ViewLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
