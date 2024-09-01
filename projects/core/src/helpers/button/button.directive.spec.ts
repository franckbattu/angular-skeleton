import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonDirective, ButtonTheme, ButtonWeight, ButtonWidth } from './button.directive';

@Component({
  template: '<button sktButton [theme]="theme" [weight]="weight" [width]="width"></button>',
})
class ButtonDirectiveComponent {
  theme: ButtonTheme;
  weight: ButtonWeight;
  width: ButtonWidth;
}

describe('ButtonDirective', () => {
  let fixture: ComponentFixture<ButtonDirectiveComponent>;
  let component: ButtonDirectiveComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonDirective],
      declarations: [ButtonDirectiveComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    });

    fixture = TestBed.createComponent(ButtonDirectiveComponent);
    component = fixture.componentInstance;
  });

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
      jasmine.objectContaining({
        'text-blue-600': true,
        'hover:text-white': true,
        'font-bold': true,
        'w-full': true,
      }),
    );
  });
});
