'use client';

import { useGetFolloweesAPI } from '@/src/apis/follow';

const FolloweesPage = () => {
  const followees = useGetFolloweesAPI();

  console.log(followees);

  return <></>;
};

export default FolloweesPage;
