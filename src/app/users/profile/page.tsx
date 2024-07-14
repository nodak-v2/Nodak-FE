'use client';

import { Suspense } from 'react';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import GNB from '@/src/components/GNB';
import Spinner from '@/src/components/Spinner';

import ProfileBlock from '../_components/ProfileBlock';
import BadgeBlock from '../_components/badge';
import LoginInfo from './_components/LoginInfo';
import MyVote from './_components/MyVote';
import Setting from './_components/Setting';

const ProfilePage = () => {
  const { login: isLogin } = useGetUserStatusAPI();

  return (
    <Suspense fallback={<Spinner text='내 정보를 불러오고 있어요.' />}>
      <span className='font-h2-sm mb-1 p-4'>마이페이지</span>
      <div className='flex grow flex-col gap-8'>
        {isLogin ? <ProfileBlock /> : <LoginInfo />}
        <BadgeBlock />
        <MyVote />
        {isLogin && <Setting />}
      </div>
      <GNB />
    </Suspense>
  );
};

export default ProfilePage;
