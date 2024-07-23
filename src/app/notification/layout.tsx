'use client';

import { PropsWithChildren } from 'react';

import { useRouter } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import GNB from '@/src/components/GNB';

const NotificationLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { login: isLogin } = useGetUserStatusAPI();

  if (!isLogin) {
    router.push('/signin');
    return null;
  }

  return (
    <>
      <span className='font-h2-sm mb-1 p-4'>알림</span>
      {children}
      <GNB />
    </>
  );
};

export default NotificationLayout;
