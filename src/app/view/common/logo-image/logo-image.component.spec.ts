import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewLogoImageComponent } from './logo-image.component';

describe('ViewLogoImageComponent', () => {
  let component: ViewLogoImageComponent;
  let fixture: ComponentFixture<ViewLogoImageComponent>;
  let compiled: DebugElement['nativeElement'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLogoImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLogoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('img src should be matched to //assets/logo-transparent.png$/', () => {
    expect(compiled.querySelector('img').src).toMatch(
      /\/assets\/logo-transparent.png$/,
    );
  });

  it("img alt should be Next Web Technology LLC's logo image", () => {
    expect(compiled.querySelector('img').alt).toMatch(
      "Next Web Technology LLC's logo image",
    );
  });
});
