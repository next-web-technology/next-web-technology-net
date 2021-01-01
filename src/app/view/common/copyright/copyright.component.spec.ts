import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewCopyrightComponent } from './copyright.component';

describe('ViewCopyrightComponent', () => {
  let component: ViewCopyrightComponent;
  let fixture: ComponentFixture<ViewCopyrightComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCopyrightComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('div textContent should be Copyright © 2021 Next Web Technology, LLC. All Rights Reserved', () => {
    expect(compiled.querySelector('div').textContent).toBe(
      'Copyright © 2021 Next Web Technology, LLC. All Rights Reserved',
    );
  });
});
