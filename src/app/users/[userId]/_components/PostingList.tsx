import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useGetProfileAPI } from '@/src/apis/profile';
import PostItem from '@/src/app/_components/PostItem';

const NO_POSTING_TEXT = '작성 글이 없습니다.';
const Posting = () => {
  const { userId } = useParams() as { userId: string };
  const { posts } = useGetProfileAPI(userId);

  return (
    <div className='flex h-full flex-col'>
      <span className='font-h4-sm px-4 text-gray-accent3'>작성 글</span>
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
          <span className='mt-[52px] w-full px-4 text-center text-[12px] text-gray-accent3'>
            {NO_POSTING_TEXT}
          </span>
        )}
      </div>
    </div>
  );
};

export default Posting;
