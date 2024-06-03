import type { Meta, StoryObj } from '@storybook/react';

import ProfileBlock from '@/src/app/(post)/result/[postId]/_components/ProfileBlock';

const meta = {
  title: 'Components/ProfileBlock',
  tags: ['autodocs'],
  component: ProfileBlock,
  decorators: Style => (
    <div className=' bg-dark-accent1'>
      <Style />
    </div>
  ),
} satisfies Meta<typeof ProfileBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '이름',
    imageUrl: 'https://via.placeholder.com/150',
  },
};
