import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/post';
import { useGetVoteDetailAPI } from '@/src/apis/vote';

import VoteForm from './VoteForm';
import VoteResult from './VoteResult';

const PostingMain = () => {
  const { postId } = useParams() as { postId: string };
  //   const getPostDetail = useGetPostDetailAPI(postId);
  const { hasVoted } = useGetVoteDetailAPI(postId);

  const { content, createdAt, author } = useGetPostDetailAPI(postId);

  return (
    <div className='flex flex-col gap-5 px-4'>
      <div className='flex items-center gap-2'>
        <Image src='/user-square.png' alt='유저프로필' width={36} height={36} />
        <div className='flex flex-col'>
          <span className='font-title-1-md'>{author}</span>
          <span className='font-text-4-rg text-gray-accent4'>{createdAt}</span>
        </div>
      </div>
      {hasVoted ? <VoteResult /> : <VoteForm />}
      <span className='font-text-1-rg'>{content}</span>
    </div>
  );
};

export default PostingMain;
