import type { Meta, StoryObj } from '@storybook/react';

import PostItem from '@/src/app/_components/PostItem';

import { PageLayoutDecorator } from '../decorator';

const meta: Meta<typeof PostItem> = {
  title: 'components/PostItem',
  tags: ['autodocs'],
  component: PostItem,
  decorators: PageLayoutDecorator,
};

export default meta;

type Story = StoryObj<typeof PostItem>;

export const DefaultTemplate: Story = {
  args: {
    post: {
      title: '게시글 제목입니다.',
      votedCount: 10,
      likedCount: 10,
      commentedCount: 10,
      author: 'homin',
      profileImageUrl: 'https://via.placeholder.com/150',
      imageUrl: 'https://via.placeholder.com/150',
      createdAt: '2021-10-10',
    },
  },
};
