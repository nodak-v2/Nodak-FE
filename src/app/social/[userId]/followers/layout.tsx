import { PropsWithChildren } from 'react';

import TopBar from '@/src/components/Topbar';

const FollowersLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>팔로워</TopBar.Title>
        <TopBar.NavMore />
      </TopBar.Container>
      <div className='px-4 py-2'>{children}</div>
    </>
  );
};

export default FollowersLayout;
