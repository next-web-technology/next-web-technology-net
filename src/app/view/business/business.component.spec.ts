import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewBusinessComponent } from './business.component';

describe('ViewBusinessComponent', () => {
  let component: ViewBusinessComponent;
  let fixture: ComponentFixture<ViewBusinessComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBusinessComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mat-card-title should be 事業', () => {
    expect(compiled.querySelector('mat-card-title').textContent).toBe('事業');
  });

  it('mat-card-subtitle should be Webアプリ開発・その他アプリ開発', () => {
    expect(compiled.querySelector('mat-card-subtitle').textContent).toBe(
      'Webアプリ開発・その他アプリ開発',
    );
  });

  it('img src should be matched to //assets/business/coding.jpg$/', () => {
    expect(compiled.querySelector('img').src).toMatch(
      /\/assets\/business\/coding.jpg$/,
    );
  });

  it("img alt should be Next Web Technology's business key image", () => {
    expect(compiled.querySelector('img').alt).toMatch(
      "Next Web Technology's business key image",
    );
  });

  it('mat-card-content p 1st should be Webサイト制作, Webアプリ開発', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[0].textContent).toBe(
      'Webサイト制作, Webアプリ開発',
    );
  });

  it('mat-card-content p 2nd should be スマホアプリ開発, PCアプリ開発', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[1].textContent).toBe(
      'スマホアプリ開発, PCアプリ開発',
    );
  });

  it('mat-card-content p 3rd should be プログラミング教育, ITコンサルティング', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[2].textContent).toBe(
      'プログラミング教育, ITコンサルティング',
    );
  });
});
