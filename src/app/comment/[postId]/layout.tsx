import { PropsWithChildren } from 'react';

import TopBar from '../../_components/Topbar';

const CommentLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar.Container>
        <TopBar.Left>
          <TopBar.BackButton />
          <TopBar.Title>댓글 0개</TopBar.Title>
        </TopBar.Left>
      </TopBar.Container>
      {children}
    </>
  );
};

export default CommentLayout;
