import { Meta, StoryObj } from '@storybook/angular';
import { ProgressButtonComponent } from '../src/helpers/progress-button/progress-button.component';

const meta: Meta<ProgressButtonComponent> = {
  component: ProgressButtonComponent,
  title: 'Atoms/Progress Button',
  render: (args) => ({
    props: args,
    template: "<skt-progress-button [loading]='loading' [disabled]='disabled'>Download</skt-progress-button>",
  }),
};

export default meta;

type Story = StoryObj<ProgressButtonComponent>;

export const Normal: Story = {
  name: 'Normal',
  args: {
    loading: false,
    disabled: false,
  },
};

export const Loading: Story = {
  name: 'Loading',
  args: {
    loading: true,
    disabled: false,
  },
};
