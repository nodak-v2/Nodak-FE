import { Comment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem';

interface CommentItemProps {
  comment: Comment;
  isSelected: boolean;
}

const RootCommentItem = ({ comment, isSelected }: CommentItemProps) => {
  const { commentId, nickname, content, createdAt, userId } = comment;

  const { userId: ownId } = useGetUserStatusAPI();

  return (
    <CommentItem
      commentId={commentId}
      nickname={nickname}
      content={content}
      createdAt={createdAt}
      isOwnComment={userId === ownId}
      isSelected={isSelected}
    />
  );
};

export default RootCommentItem;
