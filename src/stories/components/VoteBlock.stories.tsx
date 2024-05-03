import type { Meta, StoryObj } from '@storybook/react';

import VoteBlock from '@/src/app/result/[postId]/_components/VoteBlock';
import { PageLayoutDecorator } from '@/src/stories/decorator';

const meta = {
  title: 'Components/VoteBlock',
  tags: ['autodocs'],
  component: VoteBlock,
  decorators: PageLayoutDecorator,
} satisfies Meta<typeof VoteBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '지브리 영화 추천',
    options: ['벼랑위의 포뇨', '하울의 움직이는 성', '모노노케 히메'],
  },
};
