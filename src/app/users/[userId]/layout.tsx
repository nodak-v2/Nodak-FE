import { PropsWithChildren, Suspense } from 'react';

import Spinner from '@/src/components/Spinner';
import TopBar from '@/src/components/Topbar';

const UserPageLayout = ({ children }: PropsWithChildren) => {
  // TopBar 컴포넌트가 이전 PR이 머지되면 추가될 예정입니다.
  return (
    <Suspense fallback={<Spinner text='유저 정보를 불러오는 중 입니다.' />}>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
        <TopBar.Title>프로필</TopBar.Title>
        <TopBar.NavMore />
      </TopBar.Container>
      {children}
    </Suspense>
  );
};

export default UserPageLayout;
