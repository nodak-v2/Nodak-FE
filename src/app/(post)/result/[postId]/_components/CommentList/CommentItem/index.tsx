import { PropsWithChildren } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import { formatDateCustom } from '@/src/utils/formatDate';

import OwnCommentChip from './OwnCommentChip';

interface CommentItemProps {
  nickname: string;
  content: string;
  createdAt: string;
  isOwnComment: boolean;
  authorId: number;
  profileImageUrl: string | null;
}

const CommentItem = ({
  nickname,
  content,
  createdAt,
  children,
  profileImageUrl,
  authorId,
}: PropsWithChildren<CommentItemProps>) => {
  const { postId } = useParams() as { postId: string };
  const { authorId: postAuthorId } = useGetPostDetailAPI(postId);

  return (
    <div className='flex w-full flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <Link href={`/users/${authorId}`}>
          <div className='flex items-center gap-2'>
            <Image
              src={profileImageUrl || '/picky/user-square.svg'}
              alt='유저프로필'
              width={24}
              height={24}
              className='h-[24px] w-[24px] rounded-[4px]'
            />
            <span className='font-title-1-md'>{nickname}</span>
            {postAuthorId === authorId && <OwnCommentChip />}
          </div>
        </Link>
        {children}
      </div>

      <div className='flex flex-col gap-0.5'>
        <span className='font-text-1-rg'>{content}</span>
        <span className='font-text-4-rg text-gray-accent4'>
          {formatDateCustom(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default CommentItem;
