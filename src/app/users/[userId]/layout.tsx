import { PropsWithChildren } from 'react';

import TopBar from '@/src/components/Topbar';

const UserPageLayout = ({ children }: PropsWithChildren) => {
  // TopBar 컴포넌트가 이전 PR이 머지되면 추가될 예정입니다.
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>프로필</TopBar.Title>
        <TopBar.NavMore />
      </TopBar.Container>
      {children}
    </>
  );
};

export default UserPageLayout;
