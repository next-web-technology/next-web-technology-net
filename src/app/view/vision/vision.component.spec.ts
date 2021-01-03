import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewVisionComponent } from './vision.component';

describe('ViewVisionComponent', () => {
  let component: ViewVisionComponent;
  let fixture: ComponentFixture<ViewVisionComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewVisionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mat-card-title should be 理念', () => {
    expect(compiled.querySelector('mat-card-title').textContent).toBe('理念');
  });

  it('mat-card-subtitle should be Webの次の時代へ...', () => {
    expect(compiled.querySelector('mat-card-subtitle').textContent).toBe(
      'Webの次の時代へ...',
    );
  });

  it('img src should be matched to //assets/vision/city-and-moon.jpg$/', () => {
    expect(compiled.querySelector('img').src).toMatch(
      /\/assets\/vision\/city-and-moon.jpg$/,
    );
  });

  it("img alt should be Next Web Technology's vision key image", () => {
    expect(compiled.querySelector('img').alt).toMatch(
      "Next Web Technology's vision key image",
    );
  });

  it('mat-card-content p 1st should be Web・ITが大きく変えた世の中', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[0].textContent).toBe(
      'Web・ITが大きく変えた世の中',
    );
  });

  it('mat-card-content p 2nd should be 新しい技術で時代をもう一歩先へ', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[1].textContent).toBe(
      '新しい技術で時代をもう一歩先へ',
    );
  });

  it('mat-card-content p 3rd should be より良い未来へ', () => {
    expect(compiled.querySelectorAll('mat-card-content p')[2].textContent).toBe(
      'より良い未来へ',
    );
  });
});
