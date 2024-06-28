'use client';

import { PropsWithChildren, Suspense } from 'react';

import CommentForm from '@/src/app/(post)/result/[postId]/_components/CommentForm';
import Spinner from '@/src/components/Spinner';

import TopBar from '../../../../components/Topbar';

const PostDetailLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>투표 글</TopBar.Title>
        <TopBar.NavMore />
      </TopBar.Container>
      <Suspense fallback={<Spinner text='게시글 정보를 불러오는 중 입니다.' />}>
        {children}
        <CommentForm />
      </Suspense>
    </>
  );
};

export default PostDetailLayout;
