import Image from 'next/image';

import type { Comment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import Icon from '@/src/components/Icon';

import OwnCommentChip from './OwnCommentChip';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const { nickname, content, createdAt, userId } = comment;
  const { userId: ownId } = useGetUserStatusAPI();

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
          {ownId === userId && <OwnCommentChip />}
        </div>
        <Icon id='more-square' />
      </div>
      <div className='flex flex-col gap-0.5'>
        <span className='font-text-1-rg'>{content}</span>
        <span className='font-text-4-rg text-gray-accent4'>{createdAt}</span>
      </div>
    </div>
  );
};

export default CommentItem;
