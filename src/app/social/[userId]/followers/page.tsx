'use client';

import { useParams } from 'next/navigation';

import { useGetFollowersAPI } from '@/src/apis/follow';
import FollowList from '@/src/app/social/_components/FollowList';

const FollowersPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const followers = useGetFollowersAPI(userId);

  return <FollowList users={followers} />;
};

export default FollowersPage;
