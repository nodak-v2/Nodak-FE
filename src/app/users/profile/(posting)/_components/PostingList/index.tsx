import { PropsWithChildren } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import PullToRefresh from 'react-simple-pull-to-refresh';

import PostItem from '@/src/app/_components/PostItem';

import useGetPostHistory from '../../hooks/useGetPostHistory';

interface PostingListProps {
  isNickname?: boolean;
}

const PostingList = ({
  isNickname = true,
  children,
}: PropsWithChildren<PostingListProps>) => {
  const posts = useGetPostHistory();
  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ['postList'] });
  };

  return (
    <PullToRefresh onRefresh={handleRefresh} pullingContent=''>
      <div className='flex h-full flex-col overflow-y-auto'>
        {posts.length
          ? posts.map((post, index) => (
              <Link
                href={`/result/${post.postId}`}
                key={`${index}-${post.voteTitle}`}
              >
                <PostItem post={post} isNickname={isNickname} />
              </Link>
            ))
          : children}
      </div>
    </PullToRefresh>
  );
};

export default PostingList;
