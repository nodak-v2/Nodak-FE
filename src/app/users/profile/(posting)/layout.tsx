'use client';

import { PropsWithChildren, Suspense } from 'react';

import { usePathname } from 'next/navigation';

import Spinner from '@/src/components/Spinner';
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
        <TopBar.BackButton />
        <TopBar.Title>{postingNavigation[pathname]}</TopBar.Title>
      </TopBar.Container>
      <Suspense fallback={<Spinner text='게시글 목록을 불러오는 중 입니다.' />}>
        {children}
      </Suspense>
    </>
  );
};

export default PostingLayout;
