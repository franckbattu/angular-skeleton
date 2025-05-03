import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'skt-spinner',
  templateUrl: './spinner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class SpinnerComponent {
  size = input<'sm' | 'md' | 'lg' | 'xl'>('md');

  get spinnerClass(): string {
    switch (this.size()) {
      case 'sm': {
        return 'h-4 w-4';
      }
      case 'md': {
        return 'h-8 w-8';
      }
      case 'lg': {
        return 'h-12 w-12';
      }
      case 'xl': {
        return 'h-16 w-16';
      }
    }
  }
}
