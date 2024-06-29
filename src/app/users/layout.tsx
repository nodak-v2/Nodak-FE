'use client';

import { PropsWithChildren } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';

const UsersLayout = ({ children }: PropsWithChildren) => {
  const { userId } = useParams() as { userId: string };
  const router = useRouter();
  const { login: isLogin, userId: currentUserId } = useGetUserStatusAPI();

  if (isLogin && userId === String(currentUserId))
    router.replace('/users/profile');

  return <>{children}</>;
};

export default UsersLayout;
