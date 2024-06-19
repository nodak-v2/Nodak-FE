'use client';

import Link from 'next/link';

import PostItem from '@/src/app/_components/PostItem';

import useGetPostHistory from '../hooks/useGetPostHistory';

const MyLikeHistoryPage = () => {
  const posts = useGetPostHistory();

  return (
    <div className='flex flex-col'>
      {posts.map((post, index) => (
        <Link href={`/result/${post.postId}`} key={`${index}-${post.title}`}>
          <PostItem post={post} />
        </Link>
      ))}
    </div>
  );
};

export default MyLikeHistoryPage;
