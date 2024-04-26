import type { Meta, StoryObj } from '@storybook/react';

import Icon from '@/src/components/Icon';

const meta: Meta<typeof Icon> = {
  title: 'components/Icon',
  tags: ['autodocs'],
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const DefaultTemplate: Story = {
  args: {
    size: 20,
    id: 'add',
  },
};
