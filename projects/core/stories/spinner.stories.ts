import { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from '../src/helpers/spinner/spinner.component';

const meta: Meta<SpinnerComponent> = {
  component: SpinnerComponent,
  title: 'Atoms/Spinner',
};

export default meta;

type Story = StoryObj<SpinnerComponent>;

export const SpinnerSm: Story = {
  name: 'sm',
  args: {
    size: 'sm',
  },
};

export const SpinnerMd: Story = {
  name: 'md',
  args: {
    size: 'md',
  },
};

export const SpinnerLg: Story = {
  name: 'lg',
  args: {
    size: 'lg',
  },
};
