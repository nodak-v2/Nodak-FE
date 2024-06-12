import type { Meta } from '@storybook/react';

import PostComment from '@/src/app/(post)/comment/_components/PostComment';

const meta: Meta<typeof PostComment> = {
  title: 'components/PostComment',
  tags: ['autodocs'],
  component: PostComment,
};

export default meta;

export const DefaultTemplate = () => {
  return <PostComment />;
};
