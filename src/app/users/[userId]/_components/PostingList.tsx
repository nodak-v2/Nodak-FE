import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PullToRefresh from 'react-simple-pull-to-refresh';

import { useGetProfileAPI } from '@/src/apis/profile';
import PostItem from '@/src/app/_components/PostItem';
import EmptyPage from '@/src/components/EmptyPage';

const NO_POSTING_TEXT = '작성한 게시글이 없습니다.';
const Posting = () => {
  const { userId } = useParams() as { userId: string };
  const { posts } = useGetProfileAPI(userId);

  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    await queryClient.invalidateQueries({ queryKey: ['profile', userId] });
  };

  return (
    <div className='flex h-full flex-col'>
      <span className='font-h4-sm px-4 text-gray-accent3'>작성 글</span>
      <PullToRefresh onRefresh={handleRefresh} pullingContent=''>
        <div className='flex grow flex-col overflow-y-auto'>
          {posts.length ? (
            posts.map((post, index) => (
              <Link
                href={`/result/${post.postId}`}
                key={`${index}-${post.voteTitle}`}
              >
                <PostItem post={post} isNickname={false} />
              </Link>
            ))
          ) : (
            <EmptyPage text={NO_POSTING_TEXT} />
          )}
        </div>
      </PullToRefresh>
    </div>
  );
};

export default Posting;
