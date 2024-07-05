'use client';

import { useGetFollowersAPI } from '@/src/apis/follow';
import FollowList from '@/src/app/social/_components/FollowList';

const FollowersPage = () => {
  const followers = useGetFollowersAPI();

  return <FollowList users={followers} />;
};

export default FollowersPage;
