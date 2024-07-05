'use client';

import { useGetFolloweesAPI } from '@/src/apis/follow';
import FollowList from '@/src/app/social/_components/FollowList';

const FolloweesPage = () => {
  const followees = useGetFolloweesAPI();

  return <FollowList users={followees} />;
};

export default FolloweesPage;
