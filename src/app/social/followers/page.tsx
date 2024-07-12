'use client';

import { useGetFollowersAPI } from '@/src/apis/follow';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import FollowList from '@/src/app/social/_components/FollowList';

const FollowersPage = () => {
  const { userId: myId } = useGetUserStatusAPI();
  const followers = useGetFollowersAPI(myId.toString());

  return <FollowList users={followers} />;
};

export default FollowersPage;
