'use client';

import { PropsWithChildren, Suspense } from 'react';

import Link from 'next/link';

import Spinner from '@/src/components/Spinner';
import TopBar from '@/src/components/Topbar';

const UserPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<Spinner text='유저 정보를 불러오는 중 입니다.' />}>
      <TopBar.Container>
        <TopBar.BackButton />
        <TopBar.Title>프로필</TopBar.Title>
        <TopBar.NavMore>
          <TopBar.NavMore.Item>
            <Link href='/report'>신고하기</Link>
          </TopBar.NavMore.Item>
        </TopBar.NavMore>
      </TopBar.Container>
      {children}
    </Suspense>
  );
};

export default UserPageLayout;
