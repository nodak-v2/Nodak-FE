'use client';

import { useParams } from 'next/navigation';

import { useGetFolloweesAPI } from '@/src/apis/follow';

const FolloweesPage = () => {
  const { userId } = useParams<{ userId: string }>();

  const followees = useGetFolloweesAPI(userId);

  console.log(followees);

  return <></>;
};

export default FolloweesPage;
