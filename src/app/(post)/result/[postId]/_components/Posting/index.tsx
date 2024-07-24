import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import { useGetVoteDetailAPI } from '@/src/apis/vote';
import { formatDateCustom } from '@/src/utils/formatDate';

import VoteForm from './VoteForm';
import VoteResult from './VoteResult';

const PostingMain = () => {
  const { postId } = useParams() as { postId: string };
  const { hasVoted, terminated: isTerminated } = useGetVoteDetailAPI(postId);

  const { content, createdAt, author, authorId, profileImageUrl } =
    useGetPostDetailAPI(postId);

  return (
    <div className='flex flex-col gap-5 px-4'>
      <div className='flex items-center gap-2'>
        <Link href={`/users/${authorId}`}>
          <Image
            src={profileImageUrl || '/picky/user-square.svg'}
            alt='유저프로필'
            width={36}
            height={36}
            className='max-h-[36px] max-w-[36px]'
          />
        </Link>
        <div className='flex flex-col'>
          <Link href={`/users/${authorId}`}>
            <span className='font-title-1-md'>{author}</span>
          </Link>
          <span className='font-text-4-rg text-gray-accent4'>
            {formatDateCustom(createdAt)}
          </span>
        </div>
      </div>
      {hasVoted || isTerminated ? <VoteResult /> : <VoteForm />}
      <span className='font-text-1-rg'>{content}</span>
    </div>
  );
};

export default PostingMain;
