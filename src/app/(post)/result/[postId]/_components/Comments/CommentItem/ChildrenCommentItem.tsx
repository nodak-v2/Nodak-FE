import { ChildrenComment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem';
import Icon from '@/src/components/Icon';

interface CommentItemProps {
  comment: ChildrenComment;
  isSelected: boolean;
}

const ChildrenCommentItem = ({ comment, isSelected }: CommentItemProps) => {
  const { replyId, nickname, content, createdAt, userId } = comment;

  const { userId: ownId } = useGetUserStatusAPI();

  return (
    <>
      <Icon id='reply' />
      <CommentItem
        commentId={replyId}
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        isOwnComment={userId === ownId}
        isSelected={isSelected}
      />
    </>
  );
};

export default ChildrenCommentItem;
