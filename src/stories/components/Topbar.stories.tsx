import { Meta, StoryObj } from '@storybook/react';

import TopBar from '@/src/components/Topbar';

import { PageLayoutDecorator } from '../decorator';

const meta = {
  title: 'components/TopBar',
  tags: ['autodocs'],
  component: TopBar.Container,
  decorators: [PageLayoutDecorator],
} satisfies Meta<typeof TopBar.Container>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PostDetail: Story = {
  name: '게시글 상세페이지',
  args: {
    children: (
      <>
        <TopBar.BackButton href='/' />
        <TopBar.Title>프로필</TopBar.Title>
      </>
    ),
  },
};

export const Comment: Story = {
  name: '댓글창',
  args: {
    children: (
      <>
        <TopBar.BackButton href='/' />
        <TopBar.Title>댓글 0개</TopBar.Title>
      </>
    ),
  },
};

export const Profile: Story = {
  name: '유저정보',
  args: {
    children: (
      <>
        <TopBar.BackButton href='/' />
        <TopBar.Title>프로필</TopBar.Title>
      </>
    ),
  },
};
