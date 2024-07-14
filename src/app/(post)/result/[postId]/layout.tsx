import { PropsWithChildren, Suspense } from 'react';

import Link from 'next/link';

import Spinner from '@/src/components/Spinner';
import TopBar from '@/src/components/Topbar';
import { getGenerateMetadata } from '@/src/utils/getGenerateMetadata';

export const generateMetadata = getGenerateMetadata();

const PostDetailLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>투표 글</TopBar.Title>
        <TopBar.NavMore>
          <Link href='/report'>신고하기</Link>
        </TopBar.NavMore>
      </TopBar.Container>
      <Suspense fallback={<Spinner text='게시글 정보를 불러오는 중 입니다.' />}>
        {children}
      </Suspense>
    </>
  );
};

export default PostDetailLayout;
