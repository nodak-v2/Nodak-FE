'use client';

import { PropsWithChildren } from 'react';

import GNB from '@/src/components/GNB';

const NotificationLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <span className='font-h2-sm mb-1 p-4'>알림</span>
      {children}
      <GNB />
    </>
  );
};

export default NotificationLayout;
