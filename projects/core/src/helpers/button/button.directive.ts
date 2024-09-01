import { Directive, HostBinding, Input } from '@angular/core';

export type ButtonTheme = 'primary' | 'outline-primary' | 'outline-dark' | 'warning';
export type ButtonWeight = 'normal' | 'bold' | 'semi' | 'light';
export type ButtonWidth = 'auto' | 'full';

const baseClasses: string =
  'rounded-md py-2 px-4 border border-transparent text-center text-sm transition-all ' +
  'shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 ' +
  'disabled:shadow-none ml-2';

const themeClasses: { [key in ButtonTheme]: string } = {
  primary: `${baseClasses} text-white bg-blue-600 focus:bg-blue-700 active:bg-blue-700 hover:bg-blue-700`,
  warning: `${baseClasses} text-white bg-yellow-500 focus:bg-yellow-600 active:bg-yellow-600 hover:bg-yellow-600`,
  'outline-primary': `${baseClasses} text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-700`,
  'outline-dark': `${baseClasses} text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900`,
};

const weightClasses: { [key in ButtonWeight]: string } = {
  bold: 'font-bold',
  normal: 'font-normal',
  semi: 'font-semi',
  light: 'font-light',
};

const widthClasses: { [key in ButtonWidth]: string } = {
  full: 'w-full',
  auto: 'w-auto',
};

/**
 * `ButtonDirective` allows dynamic customization of buttons and anchor (`a`) elements
 * with different themes, font weights, and widths.
 *
 * This directive provides a flexible way to define reusable button styles using the following inputs:
 *
 * - `theme`: Defines the visual theme of the button (e.g., "primary", "outline-primary", "warning").
 * - `weight`: Defines the font weight (e.g., "normal", "bold", "semi", "light").
 * - `width`: Defines the button width (e.g., "auto" or "full").
 *
 * CSS classes are dynamically generated and applied to the host element based on the values of these properties.
 *
 * ### Usage Example:
 *
 * ```html
 * <button sktButton theme="primary" weight="bold" width="full">My Button</button>
 * <a sktButton theme="outline-primary" weight="light" width="auto">My Link</a>
 * ```
 *
 * @input `theme` Sets the visual theme of the button (default: `"primary"`).
 * @input `weight` Sets the font weight of the text (default: `"normal"`).
 * @input `width` Sets the width of the button (default: `"auto"`).
 *
 * The associated CSS classes are automatically generated based on the input values
 * and applied to the button, allowing for customizable and reusable button components
 * throughout the application.
 */
@Directive({
  standalone: true,
  selector: 'button[sktButton], a[sktButton]',
})
export class ButtonDirective {
  private _theme: ButtonTheme = 'primary';
  private _weight: ButtonWeight = 'normal';
  private _width: ButtonWidth = 'auto';

  @Input() set theme(value: ButtonTheme) {
    this._theme = value;
    this.updateClasses();
  }

  @Input() set weight(value: ButtonWeight) {
    this._weight = value;
    this.updateClasses();
  }

  @Input() set width(value: ButtonWidth) {
    this._width = value;
    this.updateClasses();
  }

  @HostBinding('class') private _classes = this.buildClasses();

  private buildClasses(): string {
    return `${themeClasses[this._theme]} ${weightClasses[this._weight]} ${widthClasses[this._width]}`;
  }

  private updateClasses() {
    this._classes = this.buildClasses();
  }
}
