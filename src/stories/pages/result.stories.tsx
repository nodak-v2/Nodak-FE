import { Meta, StoryObj } from '@storybook/react';

import ResultPage from '@/src/app/result/[postId]/page';
import '@/src/mocks/handlers/post-detail';
import { PageLayoutDecorator } from '@/src/stories/decorator';

const meta = {
  title: 'pages/result',
  tags: ['autodocs'],
  decorators: [PageLayoutDecorator],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/result',
      },
    },
  },
  component: ResultPage,
} satisfies Meta<typeof ResultPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'default',
  args: { params: { postId: '0' }, searchParams: { voteId: '0' } },
};

export const Author: Story = {
  name: 'NotVotedAuthor',
  args: { params: { postId: '0' }, searchParams: { voteId: '0' } },
};

export const NotAuthor: Story = {
  name: 'VotedAuthor',
  args: { params: { postId: '1' }, searchParams: { voteId: '1' } },
};

export const Voted: Story = {
  name: 'NotVotedNotAuthor',
  args: { params: { postId: '2' }, searchParams: { voteId: '2' } },
};

export const NotVoted: Story = {
  name: 'VotedNotAuthor',
  args: { params: { postId: '3' }, searchParams: { voteId: '3' } },
};
