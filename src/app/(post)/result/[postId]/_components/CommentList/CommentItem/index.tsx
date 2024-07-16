import { PropsWithChildren } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { formatDateCustom } from '@/src/utils/formatDate';

import OwnCommentChip from './OwnCommentChip';

interface CommentItemProps {
  nickname: string;
  content: string;
  createdAt: string;
  isOwnComment: boolean;
  authorId: number;
}

const CommentItem = ({
  nickname,
  content,
  createdAt,
  isOwnComment,
  children,
  authorId,
}: PropsWithChildren<CommentItemProps>) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <Link href={`/users/${authorId}`}>
          <div className='flex items-center gap-1'>
            <Image
              src='/user-square.png'
              alt='유저프로필'
              width={24}
              height={24}
            />
            <span className='font-title-1-md'>{nickname}</span>
            {isOwnComment && <OwnCommentChip />}
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
