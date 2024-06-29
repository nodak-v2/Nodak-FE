import { ReplyComment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem';
import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

interface ReplyCommentItemProps {
  comment: ReplyComment;
  isSelected: boolean;
  isFirstChild?: boolean;
}

const ReplyCommentItem = ({
  comment,
  isSelected,
  isFirstChild,
}: ReplyCommentItemProps) => {
  const { replyId, nickname, content, createdAt, userId } = comment;

  const { userId: ownId } = useGetUserStatusAPI();

  return (
    <div
      className={cn('flex w-full gap-2 p-4', isSelected && 'bg-gray-accent2')}
    >
      {isFirstChild && <Icon id='reply' />}
      {!isFirstChild && <Icon id='reply' className=' opacity-0' />}
      <CommentItem
        commentId={replyId}
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        isOwnComment={userId === ownId}
      />
    </div>
  );
};

export default ReplyCommentItem;
