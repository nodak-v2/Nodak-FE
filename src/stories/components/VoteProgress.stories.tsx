import type { Meta, StoryObj } from '@storybook/react';

import VoteProgress from '@/src/app/result/[postId]/_components/VoteProgress';
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
    title: '지브리 영화 추천',
    options: [
      { seq: 1, content: '벼랑위의 포뇨', count: 2 },
      { seq: 2, content: '하울의 움직이는 성', count: 6 },
      { seq: 3, content: '모노노케 히메', count: 4 },
    ],
    totalNumber: 12,
  },
};
