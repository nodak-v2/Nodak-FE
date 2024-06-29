import { Comment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem';
import { cn } from '@/src/utils/cn';

interface RootCommentItemProps {
  comment: Comment;
  isSelected: boolean;
}

const RootCommentItem = ({ comment, isSelected }: RootCommentItemProps) => {
  const { commentId, nickname, content, createdAt, userId } = comment;

  const { userId: ownId } = useGetUserStatusAPI();

  return (
    <div className={cn('p-4', isSelected && 'bg-gray-accent2')}>
      <CommentItem
        commentId={commentId}
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        isOwnComment={userId === ownId}
      />
    </div>
  );
};

export default RootCommentItem;
