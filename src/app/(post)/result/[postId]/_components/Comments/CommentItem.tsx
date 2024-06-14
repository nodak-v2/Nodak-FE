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
    <div className='flex flex-col gap-2 border-b border-gray-accent3 p-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <Icon id='user-square' size={24} />
          <span className='text-[14px]'>{nickname}</span>
          {ownId === userId && <OwnCommentChip />}
        </div>
        <Icon id='more-square' />
      </div>
      <span className='text-sm'>{content}</span>
      <span className='text-gray-accent4 text-[10px]'>{createdAt}</span>
    </div>
  );
};

export default CommentItem;
