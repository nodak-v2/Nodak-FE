import { Meta, StoryObj } from '@storybook/react';

import ResultPage from '@/src/app/result/[postId]/page';
import '@/src/mocks/handlers/post-detail';
import {
  NOT_VOTED_AUTHOR,
  NOT_VOTED_NOT_AUTHOR,
  VOTED_AUTHOR,
  VOTED_NOT_AUTHOR,
} from '@/src/mocks/handlers/post-detail';
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
  args: { params: { postId: '0' } },
};

export const Author: Story = {
  name: 'NotVotedAuthor',
  args: { params: { postId: NOT_VOTED_AUTHOR.toString() } },
};

export const NotAuthor: Story = {
  name: 'VotedAuthor',
  args: { params: { postId: VOTED_AUTHOR.toString() } },
};

export const Voted: Story = {
  name: 'NotVotedNotAuthor',
  args: { params: { postId: NOT_VOTED_NOT_AUTHOR.toString() } },
};

export const NotVoted: Story = {
  name: 'VotedNotAuthor',
  args: { params: { postId: VOTED_NOT_AUTHOR.toString() } },
};
