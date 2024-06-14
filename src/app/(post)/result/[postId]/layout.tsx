'use client';

import { PropsWithChildren } from 'react';

import TopBar from '../../../../components/Topbar';

const CommentLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>투표 글</TopBar.Title>
        <TopBar.NavMore />
      </TopBar.Container>
      {children}
    </>
  );
};

export default CommentLayout;
