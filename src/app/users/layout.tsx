'use client';

import { PropsWithChildren, useEffect } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';

const UsersLayout = ({ children }: PropsWithChildren) => {
  const { userId } = useParams() as { userId: string };
  const router = useRouter();
  const { login: isLogin, userId: currentUserId } = useGetUserStatusAPI();

  useEffect(() => {
    if (isLogin) {
      if (userId === String(currentUserId)) {
        router.replace('/users/profile');
      }
    }
  }, [isLogin, currentUserId, router, userId]);

  return <>{children}</>;
};

export default UsersLayout;
