'use client';

import { useGetFolloweesAPI } from '@/src/apis/follow';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import FollowList from '@/src/app/social/_components/FollowList';

const FolloweesPage = () => {
  const { userId: myId } = useGetUserStatusAPI();
  const followees = useGetFolloweesAPI(myId.toString());

  return <FollowList users={followees} />;
};

export default FolloweesPage;
