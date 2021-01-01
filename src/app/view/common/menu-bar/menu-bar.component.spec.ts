import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ViewMenuBarComponent } from './menu-bar.component';
import { MENUS } from '../../../domain/menu/menus';

describe('ViewMenuBarComponent', () => {
  let component: ViewMenuBarComponent;
  let fixture: ComponentFixture<ViewMenuBarComponent>;
  let compiled: DebugElement['nativeElement'];
  let buttons: DebugElement['nativeElement'][];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewMenuBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    buttons = compiled.querySelectorAll('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('menus should be MENUS in ../../../domain/menu/menus', () => {
    expect(component.menus).toBe(MENUS);
  });

  it('button counts should be MENUS.length', () => {
    const buttonsCounts = buttons.length;
    expect(buttonsCounts).toBe(MENUS.length);
  });

  it('button icon should be menu of MENUS menu.icon', () => {
    buttons.forEach((button, index) => {
      const matIcon = button.querySelector('mat-icon');
      expect(matIcon.textContent).toBe(MENUS[index].icon);
    });
  });

  it('button icon aria-hiden should be true', () => {
    buttons.forEach((button) => {
      const matIcon = button.querySelector('mat-icon');
      expect(matIcon.getAttribute('aria-hidden')).toBe('true');
    });
  });

  it('button name should be menu of MENUS menu.name', () => {
    buttons.forEach((button, index) => {
      const span = button.querySelector('span');
      expect(span.textContent).toBe(MENUS[index].name);
    });
  });
});
