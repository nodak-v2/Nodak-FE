'use client';

import { PropsWithChildren } from 'react';

import { usePathname } from 'next/navigation';

import TopBar from '@/src/components/Topbar';

const pathDict = {
  followers: '팔로워',
  followees: '팔로잉',
};

const FollowersLayout = ({ children }: PropsWithChildren) => {
  const a = usePathname()?.split('/').pop() as keyof typeof pathDict;

  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>{pathDict[a]}</TopBar.Title>
        <TopBar.NavMore />
      </TopBar.Container>
      <div className='px-4 py-2'>{children}</div>
    </>
  );
};

export default FollowersLayout;
