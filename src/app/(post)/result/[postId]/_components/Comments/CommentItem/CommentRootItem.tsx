import { useSearchParams } from 'next/navigation';

import { Comment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem';
import CommentRootItemMenu from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/CommentItemMenu/CommentRootItemMenu';
import { cn } from '@/src/utils/cn';

interface CommentRootItemProps {
  comment: Comment;
}

const CommentRootItem = ({ comment }: CommentRootItemProps) => {
  const { commentId, nickname, content, createdAt, userId } = comment;
  const commentIdFromSearchParams = useSearchParams().get('commentId');

  const isSelected = Number(commentIdFromSearchParams) === commentId;

  const { userId: ownId } = useGetUserStatusAPI();

  const isOwnComment = userId === ownId;

  return (
    <div className={cn('p-4', isSelected && 'bg-gray-accent2')}>
      <CommentItem
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        isOwnComment={isOwnComment}
      >
        <CommentRootItemMenu
          commentId={commentId}
          isOwnComment={isOwnComment}
        />
      </CommentItem>
    </div>
  );
};

export default CommentRootItem;
