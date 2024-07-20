'use client';

import { PropsWithChildren } from 'react';

import TopBar from '@/src/components/Topbar';

const ChatLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar.Container>
        <TopBar.BackButton href='/' />
      </TopBar.Container>
      {children}
    </>
  );
};

export default ChatLayout;
