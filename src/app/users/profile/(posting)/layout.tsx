'use client';

import { PropsWithChildren } from 'react';

import { usePathname } from 'next/navigation';

import TopBar from '@/src/components/Topbar';

const postingNavigation = {
  myPosting: '작성 글',
  myVoteHistory: '투표 내역',
  myLike: '좋아한 투표',
  myComment: '내 댓글',
};

export type PostingNavigation =
  | 'myPosting'
  | 'myVoteHistory'
  | 'myLike'
  | 'myComment';

const PostingLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname().split('/').pop() as PostingNavigation;

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/users/profile' />
        <TopBar.Title>{postingNavigation[pathname]}</TopBar.Title>
        {/* <TopBar.NavMore /> */}
      </TopBar.Container>
      {children}
    </>
  );
};

export default PostingLayout;
