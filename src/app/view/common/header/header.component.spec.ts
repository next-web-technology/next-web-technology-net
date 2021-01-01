import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewHeaderComponent } from './header.component';

describe('ViewHeaderComponent', () => {
  let component: ViewHeaderComponent;
  let fixture: ComponentFixture<ViewHeaderComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('h1 textContent should be Next Web Technology合同会社', () => {
    expect(compiled.querySelector('h1').textContent).toBe('Next Web Technology合同会社');
  });
});
