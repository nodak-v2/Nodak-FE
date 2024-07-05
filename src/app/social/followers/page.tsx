'use client';

import { useGetFollowersAPI } from '@/src/apis/follow';

const FollowersPage = () => {
  const followers = useGetFollowersAPI();

  console.log(followers);

  return <></>;
};

export default FollowersPage;
