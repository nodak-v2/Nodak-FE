'use client';

import { PropsWithChildren } from 'react';

import { useParams } from 'next/navigation';

import { useGetCommentsAPI } from '@/src/apis/comments';

import TopBar from '../../../../components/Topbar';

const CommentLayout = ({ children }: PropsWithChildren) => {
  const { postId } = useParams() as { postId: string };
  const commentData = useGetCommentsAPI(postId);

  return (
    <>
      <TopBar.Container>
        <TopBar.Left>
          <TopBar.BackButton href={`/result/${postId}`} />
          <TopBar.Title>{`댓글 ${commentData.length}개`}</TopBar.Title>
        </TopBar.Left>
      </TopBar.Container>
      {children}
    </>
  );
};

export default CommentLayout;
