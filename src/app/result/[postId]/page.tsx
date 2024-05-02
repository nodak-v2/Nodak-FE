'use client';

import { useEffect, useState } from 'react';

import { getPostDetail } from '@/src/apis/post';
import { Post } from '@/src/apis/types';

const Page = () => {
  const [postDetail, setPostDetail] = useState<Post>();

  useEffect(() => {
    getPostDetail(0).then(v => setPostDetail(v));
  }, []);

  return <div>{JSON.stringify(postDetail)}</div>;
};

export default Page;
