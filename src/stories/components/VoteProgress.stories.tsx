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
    voteId: 123,
  },
};
