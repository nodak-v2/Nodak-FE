'use client';

import { useGetFollowersAPI } from '@/src/apis/follow';
import FollowList from '@/src/app/social/_components/FollowList';

const mockedFollower = {
  nickname: 'inerum',
  profileImageUrl: null,
  isFollowing: true,
};

const FollowersPage = () => {
  const followers = [
    ...useGetFollowersAPI(),
    ...new Array(10).fill(mockedFollower),
  ];

  return <FollowList users={followers} />;
};

export default FollowersPage;
