import type { Meta, StoryObj } from '@storybook/react';

import TextInput from '@/src/app/_components/TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  tags: ['autodocs'],
  component: TextInput,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'error', 'filled', 'underline'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};
