import { useSearchParams } from 'next/navigation';

import { Comment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentItem from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem';
import CommentRootItemMenu from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem/CommentItemMenu/CommentRootItemMenu';
import { cn } from '@/src/utils/cn';

interface CommentRootItemProps {
  isFirst?: boolean;
  comment: Comment;
}

const CommentRootItem = ({
  isFirst = false,
  comment,
}: CommentRootItemProps) => {
  const {
    commentId,
    nickname,
    content,
    createdAt,
    userId: authorId,
    profileImageUrl,
  } = comment;
  const commentIdFromSearchParams = useSearchParams().get('commentId');

  const isSelected = Number(commentIdFromSearchParams) === commentId;

  const { userId: ownId } = useGetUserStatusAPI();

  const isOwnComment = authorId === ownId;

  return (
    <div
      className={cn(
        'px-4 py-2',
        isSelected && 'bg-gray-accent2',
        isFirst && 'px-4 pb-2',
      )}
    >
      <CommentItem
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        isOwnComment={isOwnComment}
        authorId={authorId}
        profileImageUrl={profileImageUrl}
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
