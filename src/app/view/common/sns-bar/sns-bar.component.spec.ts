import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSnsBarComponent } from './sns-bar.component';
import { SNSS } from '../../../domain/sns/snss';

describe('ViewSnsBarComponent', () => {
  let component: ViewSnsBarComponent;
  let fixture: ComponentFixture<ViewSnsBarComponent>;
  let compiled: DebugElement['nativeElement'];
  let buttons: DebugElement['nativeElement'][];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSnsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSnsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    buttons = compiled.querySelectorAll('button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component.snss should be snss in ../../../domain/sns/snss', () => {
    expect(component.snss).toBe(SNSS)
  })

  it('button counts should be component.snss.length', () => {
    const buttonsCounts = buttons.length
    expect(buttonsCounts).toBe(component.snss.length)
  })

  it('button span textContent should be sns of component.snss sns.name', () => {
    buttons.forEach((button, index) => {
      const span = button.querySelector('span')
      expect(span.textContent).toBe(component.snss[index].name)
    });
  })
});
