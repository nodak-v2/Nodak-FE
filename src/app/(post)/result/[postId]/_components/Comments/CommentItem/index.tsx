import Image from 'next/image';

import type { Comment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentMenu from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/CommentMenu';
import { formatDateCustom } from '@/src/utils/formatDate';

import OwnCommentChip from './OwnCommentChip';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { nickname, content, createdAt, userId, commentId } = comment;
  const { userId: ownId } = useGetUserStatusAPI();

  const isOwnComment = ownId === userId;

  return (
    <div className='flex flex-col gap-2 border-b border-gray-accent2 p-4 text-white'>
      <div className='flex items-center justify-between'>
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
        <CommentMenu commentId={commentId} isOwnComment={isOwnComment} />
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
