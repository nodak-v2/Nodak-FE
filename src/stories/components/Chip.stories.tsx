import type { Meta, StoryObj } from '@storybook/react';

import Chip from '@/src/app/_components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  tags: ['autodocs'],
  component: Chip,
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const DefaultTemplate: Story = {
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: { control: 'radio', options: ['default', 'selected'] },
  },
  render: function Render(args) {
    return <Chip {...args}>전체</Chip>;
  },
};
