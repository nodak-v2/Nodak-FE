import type { Meta } from '@storybook/react';

import CommentInfo from '@/src/app/(post)/comment/_components/CommentInfo';

const meta: Meta<typeof CommentInfo> = {
  title: 'components/CommentInfo',
  tags: ['autodocs'],
  component: CommentInfo,
};

export default meta;

export const DefaultTemplate = () => {
  return (
    <CommentInfo
      writerName='User'
      profileImageUrl='https://via.placeholder.com/150'
      content='댓글 텍스트'
      createdAt={new Date()}
    />
  );
};
