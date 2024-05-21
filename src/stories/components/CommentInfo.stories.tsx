import type { Meta } from '@storybook/react';

import CommentInfo from '@/src/app/comment/_components/CommentInfo';

const meta: Meta<typeof CommentInfo> = {
  title: 'components/CommentInfo',
  tags: ['autodocs'],
  component: CommentInfo,
};

export default meta;

export const DefaultTemplate = () => {
  return (
    <CommentInfo
      nickname='User'
      profileImageUrl='https://via.placeholder.com/150'
      commentText='댓글 텍스트'
      createdAt={new Date()}
    />
  );
};
