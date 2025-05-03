import { Component, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDirective, ButtonTheme, ButtonWeight, ButtonWidth } from './button.directive';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { By } from '@angular/platform-browser';

@Component({
  template: '<button sktButton [theme]="theme" [weight]="weight" [width]="width"></button>',
  imports: [ButtonDirective],
})
class ButtonDirectiveComponent {
  theme: ButtonTheme;
  weight: ButtonWeight;
  width: ButtonWidth;
}

describe('ButtonDirective', () => {
  let fixture: ComponentFixture<ButtonDirectiveComponent>;
  let component: ButtonDirectiveComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDirectiveComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDirectiveComponent);
    component = fixture.componentInstance;
  });

  // TODO: remove after update to Angular 20
  afterEach(() => TestBed.resetTestingModule());

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should apply classes based on inputs', () => {
    component.theme = 'outline-primary';
    component.weight = 'bold';
    component.width = 'full';

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('button'));
    expect(element.classes).toEqual(
      expect.objectContaining({
        'text-blue-600': true,
        'hover:text-white': true,
        'font-bold': true,
        'w-full': true,
      }),
    );
  });
});
