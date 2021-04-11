import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewLinksComponent } from './links.component';

import { LINKS } from '../../domain/link/links';

describe('ViewLinksComponent', () => {
  let component: ViewLinksComponent;
  let fixture: ComponentFixture<ViewLinksComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLinksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mat-card-title should be リンク', () => {
    expect(compiled.querySelector('mat-card-title').textContent).toBe('リンク');
  });

  it('mat-card-subtitle should be ノード・各種サービス等', () => {
    expect(compiled.querySelector('mat-card-subtitle').textContent).toBe(
      'ノード・各種サービス等',
    );
  });

  it('img src should be matched to //assets/members/links.png$/', () => {
    expect(compiled.querySelector('img').src).toMatch(
      /\/assets\/links\/links.png$/,
    );
  });

  it("img alt should be Next Web Technology's links image", () => {
    expect(compiled.querySelector('img').alt).toMatch(
      "Next Web Technology's links image",
    );
  });

  it('members should be LINKS', () => {
    expect(component.links).toBe(LINKS);
  });
});
