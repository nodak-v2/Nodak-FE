'use client';

import { useParams } from 'next/navigation';

import { useGetFollowersAPI } from '@/src/apis/follow';

const FollowersPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const followers = useGetFollowersAPI(userId);

  console.log(followers);

  return <></>;
};

export default FollowersPage;
