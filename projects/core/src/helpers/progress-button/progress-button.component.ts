import { Component, computed, input, InputSignal, output, OutputEmitterRef, Signal } from '@angular/core';
import { ButtonDirective, ButtonTheme, ButtonWeight, ButtonWidth } from '../button/button.directive';
import { NgClass } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';

/**
 * `ProgressButtonComponent` is a reusable button component that shows a loading indicator
 * and can be disabled based on certain conditions. It supports dynamic theming, font weights,
 * and widths, and allows for additional custom styling through CSS classes.
 *
 * This component is ideal for scenarios where you need a button that indicates ongoing processing
 * through a spinner and handles both visual and functional states such as disabled and loading.
 *
 * ### Usage Example:
 *
 * ```html
 * <skt-progress-button
 *   [loading]="isLoading"
 *   [disabled]="isDisabled"
 *   [customClass]="myCustomClass"
 *   [theme]="theme"
 *   [weight]="weight"
 *   [width]="width"
 *   (clickEvent)="handleClick()">
 *   Submit
 * </skt-progress-button>
 * ```
 *
 * @input `loading` Determines whether the button displays a loading spinner and is disabled (default: `false`).
 * @input `disabled` Specifies whether the button is disabled (default: `false`).
 * @input `class` Optional CSS classes to add to the button for additional styling (default: `undefined`).
 * @input `theme` Defines the visual theme of the button, affecting its color scheme (default: `"primary"`).
 * @input `weight` Specifies the font weight of the button text (default: `"normal"`).
 * @input `width` Sets the width of the button (default: `"auto"`).
 *
 * @output `clickEvent` Emits an event when the button is clicked, provided it is not disabled or loading.
 *
 * The button dynamically applies CSS classes based on the input values, allowing for customizable
 * and reusable button instances across the application.
 */
@Component({
  selector: 'skt-progress-button',
  templateUrl: './progress-button.component.html',
  imports: [NgClass, ButtonDirective, SpinnerComponent],
})
export class ProgressButtonComponent {
  loading: InputSignal<boolean> = input.required<boolean>();
  disabled: InputSignal<boolean> = input.required<boolean>();
  class: InputSignal<string | undefined> = input<string>();
  theme: InputSignal<ButtonTheme> = input<ButtonTheme>('primary');
  weight: InputSignal<ButtonWeight> = input<ButtonWeight>('normal');
  width: InputSignal<ButtonWidth> = input<ButtonWidth>('auto');

  isDisabled: Signal<boolean> = computed(() => this.loading() || this.disabled());

  clickEvent: OutputEmitterRef<void> = output();
}
