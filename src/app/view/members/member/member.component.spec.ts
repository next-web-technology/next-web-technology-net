import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewMemberComponent } from './member.component';

import { MEMBERS } from '../../../domain/member/members';

describe('ViewMemberComponent', () => {
  let component: ViewMemberComponent;
  let fixture: ComponentFixture<ViewMemberComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMemberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
