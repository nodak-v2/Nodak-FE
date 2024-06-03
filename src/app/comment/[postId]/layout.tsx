import { PropsWithChildren } from 'react';

import { getComments } from '@/src/apis/comments';

import TopBar from '../../_components/Topbar';

interface PropsWithParams extends PropsWithChildren {
  params: {
    postId: string;
  };
}

const CommentLayout = async ({
  children,
  params: { postId },
}: PropsWithParams) => {
  const commentData = await getComments(postId);

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
