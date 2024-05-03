import type { Meta, StoryObj } from '@storybook/react';

import ProfileBlock from '@/src/app/result/[postId]/_components/ProfileBlock';

const meta = {
  title: 'Components/ProfileBlock',
  tags: ['autodocs'],
  component: ProfileBlock,
} satisfies Meta<typeof ProfileBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test',
    imageUrl: 'https://via.placeholder.com/40',
  },
};
