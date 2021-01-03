import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewTechnologyComponent } from './technology.component';

describe('ViewTechnologyComponent', () => {
  let component: ViewTechnologyComponent;
  let fixture: ComponentFixture<ViewTechnologyComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTechnologyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mat-card-title should be 技術', () => {
    expect(compiled.querySelector('mat-card-title').textContent).toBe('技術');
  });

  it('mat-card-subtitle should be シンプルかつ強力な技術の組合せ', () => {
    expect(compiled.querySelector('mat-card-subtitle').textContent).toBe(
      'シンプルかつ強力な技術の組合せ',
    );
  });

  it('img src should be matched to //assets/technology/Angular_Vue_Firebase_NEM_Symbol_has_infinite_possibility.png$/', () => {
    expect(compiled.querySelector('img').src).toMatch(
      /\/assets\/technology\/Angular_Vue_Firebase_NEM_Symbol_has_infinite_possibility.png$/,
    );
  });

  it("img alt should be Next Web Technology's technology key image", () => {
    expect(compiled.querySelector('img').alt).toMatch(
      "Next Web Technology's technology key image",
    );
  });

  it('mat-card-content p 1st should be SPA...Angular, Vue.js', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[0].textContent).toBe(
      'SPA...Angular, Vue.js',
    );
  });

  it('mat-card-content p 2nd should be Firebase...サーバーレス, NoSQL', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[1].textContent).toBe(
      'Firebase...サーバーレス, NoSQL',
    );
  });

  it('mat-card-content p 3rd should be ブロックチェーン...NEM, Symbol, mijin', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[2].textContent).toBe(
      'ブロックチェーン...NEM, Symbol, mijin',
    );
  });
});
