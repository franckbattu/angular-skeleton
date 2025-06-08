import { Component, input, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDirective, ButtonTheme, ButtonWeight, ButtonWidth } from './button.directive';
import { beforeEach, describe, expect, it } from 'vitest';
import { By } from '@angular/platform-browser';

@Component({
  template: '<button sktButton [theme]="theme()" [weight]="weight()" [width]="width()"></button>',
  imports: [ButtonDirective],
})
class ButtonDirectiveComponent {
  theme = input<ButtonTheme>('primary');
  weight = input<ButtonWeight>('normal');
  width = input<ButtonWidth>('auto');
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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should apply classes based on inputs', async () => {
    fixture.componentRef.setInput('theme', 'outline-primary');
    fixture.componentRef.setInput('weight', 'bold');
    fixture.componentRef.setInput('width', 'full');

    await fixture.whenStable();

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
