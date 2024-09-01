import { Component, Input } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonDirective, ButtonTheme, ButtonWeight } from '../src/helpers/button/button.directive';
import { ProgressButtonComponent } from '../src/helpers/progress-button/progress-button.component';

@Component({
  selector: 'sb-button',
  template: ` <button sktButton [weight]="weight" [theme]="theme">Button Action</button>`,
})
class ButtonComponent {
  @Input() theme: ButtonTheme;
  @Input() weight: ButtonWeight;
}

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  tags: ['Button'],
  decorators: [
    moduleMetadata({
      imports: [ButtonDirective],
      declarations: [ButtonComponent],
    }),
  ],
  render: (args: ButtonComponent) => ({
    props: args,
  }),
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Button: Story = {
  argTypes: {
    theme: {
      options: ['primary', 'warning', 'outline-primary', 'outline-dark'],
      control: { type: 'select' },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    weight: {
      options: ['light', 'semi', 'normal', 'bold'],
      table: {
        defaultValue: {
          summary: 'normal',
        },
      },
      control: { type: 'select' },
    },
  },
};

export const PrimaryButton: Story = {
  args: {
    theme: 'primary' as ButtonTheme,
    weight: 'normal' as ButtonWeight,
  },
};

export const WarningButton: Story = {
  args: {
    theme: 'warning' as ButtonTheme,
    weight: 'normal' as ButtonWeight,
  },
};

export const OutlinePrimaryButton: Story = {
  args: {
    theme: 'outline-primary' as ButtonTheme,
    weight: 'normal' as ButtonWeight,
  },
};

export const OutlineDarkButton: Story = {
  args: {
    theme: 'outline-dark' as ButtonTheme,
    weight: 'normal' as ButtonWeight,
  },
};
