import { PropsWithChildren, Suspense } from 'react';

import PostDetailNavMore from '@/src/app/(post)/result/[postId]/_components/PostDetailNavMore';
import Spinner from '@/src/components/Spinner';
import TopBar from '@/src/components/Topbar';
import { getGenerateMetadata } from '@/src/utils/getGenerateMetadata';

export const generateMetadata = getGenerateMetadata();

const PostDetailLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton />
        <TopBar.Title>투표 글</TopBar.Title>
        <PostDetailNavMore />
      </TopBar.Container>
      <Suspense fallback={<Spinner text='게시글 정보를 불러오는 중 입니다.' />}>
        {children}
      </Suspense>
    </>
  );
};

export default PostDetailLayout;
