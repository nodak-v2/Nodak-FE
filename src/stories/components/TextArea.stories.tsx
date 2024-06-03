import type { Meta, StoryObj } from '@storybook/react';

import Textarea from '@/src/components/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  tags: ['autodocs'],
  component: Textarea,
  argTypes: {
    variant: { control: 'radio', options: ['default', 'error', 'filled'] },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
