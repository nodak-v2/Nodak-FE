'use client';

import { PropsWithChildren, Suspense } from 'react';

import Spinner from '@/src/components/Spinner';

import TopBar from '../../../../components/Topbar';
import CommentInput from './_components/CommentInput';

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
      </Suspense>
      <CommentInput />
    </>
  );
};

export default PostDetailLayout;
