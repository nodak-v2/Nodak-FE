'use client';

import { useParams } from 'next/navigation';

import { useGetFolloweesAPI } from '@/src/apis/follow';
import FollowList from '@/src/app/social/_components/FollowList';

const FolloweesPage = () => {
  const { userId } = useParams<{ userId: string }>();

  const followees = useGetFolloweesAPI(userId);

  return <FollowList users={followees} />;
};

export default FolloweesPage;
