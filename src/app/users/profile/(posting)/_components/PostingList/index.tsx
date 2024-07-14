import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import PullToRefresh from 'react-simple-pull-to-refresh';

import PostItem from '@/src/app/_components/PostItem';
import EmptyPage from '@/src/components/EmptyPage';

import useGetPostHistory from '../../hooks/useGetPostHistory';

const PostingList = ({
  text,
  isNickname = true,
}: {
  text: string;
  isNickname?: boolean;
}) => {
  const posts = useGetPostHistory();
  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ['postList'] });
  };

  return (
    <PullToRefresh onRefresh={handleRefresh} pullingContent=''>
      <div className='flex h-full flex-col overflow-y-auto'>
        {posts.length ? (
          posts.map((post, index) => (
            <Link
              href={`/result/${post.postId}`}
              key={`${index}-${post.voteTitle}`}
            >
              <PostItem post={post} isNickname={isNickname} />
            </Link>
          ))
        ) : (
          <EmptyPage text={text} />
        )}
      </div>
    </PullToRefresh>
  );
};

export default PostingList;
