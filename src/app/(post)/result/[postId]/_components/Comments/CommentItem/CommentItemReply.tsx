import { ReplyComment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem';
import CommentReplyItemMenu from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/CommentItemMenu/CommentReplyItemMenu';
import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

interface CommentReplyItemProps {
  comment: ReplyComment;
  isSelected: boolean;
  isFirstChild?: boolean;
}

const CommentReplyItem = ({
  comment,
  isSelected,
  isFirstChild,
}: CommentReplyItemProps) => {
  const { replyId, nickname, content, createdAt, userId } = comment;

  const { userId: ownId } = useGetUserStatusAPI();

  const isOwnComment = userId === ownId;

  return (
    <div
      className={cn('flex w-full gap-2 p-4', isSelected && 'bg-gray-accent2')}
    >
      <Icon id='reply' className={cn(!isFirstChild && 'opacity-0')} />
      <CommentItem
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        isOwnComment={isOwnComment}
      >
        <CommentReplyItemMenu commentId={replyId} isOwnComment={isOwnComment} />
      </CommentItem>
    </div>
  );
};

export default CommentReplyItem;
