import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewMembersComponent } from './members.component';

import { MEMBERS } from '../../domain/member/members';

describe('ViewMembersComponent', () => {
  let component: ViewMembersComponent;
  let fixture: ComponentFixture<ViewMembersComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMembersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mat-card-title should be メンバー', () => {
    expect(compiled.querySelector('mat-card-title').textContent).toBe(
      'メンバー',
    );
  });

  it('mat-card-subtitle should be 技術で社会をより良くしていくエンジニア', () => {
    expect(compiled.querySelector('mat-card-subtitle').textContent).toBe(
      '技術で社会をより良くしていくエンジニア',
    );
  });

  it('img src should be matched to //assets/members/members.jpg$/', () => {
    expect(compiled.querySelector('img').src).toMatch(
      /\/assets\/members\/members.jpg$/,
    );
  });

  it("img alt should be Next Web Technology's business key image", () => {
    expect(compiled.querySelector('img').alt).toMatch(
      "Next Web Technology's members image",
    );
  });

  it('members should be MEMBERS', () => {
    expect(component.members).toBe(MEMBERS);
  });
});
