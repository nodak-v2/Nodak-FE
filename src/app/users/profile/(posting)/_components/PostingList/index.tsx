import Link from 'next/link';

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

  return (
    <div className='flex h-full flex-col'>
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
  );
};

export default PostingList;
