import type { Meta, StoryObj } from '@storybook/react';

import VoteProgress from '@/src/app/result/[postId]/_components/VoteBlock/VoteProgress';
import { PageLayoutDecorator } from '@/src/stories/decorator';

const meta = {
  title: 'Components/Vote/Progress',
  tags: ['autodocs'],
  component: VoteProgress,
  decorators: PageLayoutDecorator,
} satisfies Meta<typeof VoteProgress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '투표 제목',
    options: [
      { seq: 1, content: '옵션1', count: 10 },
      { seq: 2, content: '옵션2', count: 20 },
      { seq: 3, content: '옵션3', count: 30 },
    ],
    totalNumber: 60,
  },
};
