import { useSearchParams } from 'next/navigation';

import { ReplyComment } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import CommentItem from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem';
import CommentReplyItemMenu from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem/CommentItemMenu/CommentReplyItemMenu';
import Icon from '@/src/components/Icon';
import { cn } from '@/src/utils/cn';

interface CommentReplyItemProps {
  comment: ReplyComment;
}

const CommentReplyItem = ({ comment }: CommentReplyItemProps) => {
  const { replyId, nickname, content, createdAt, userId: authorId } = comment;
  const commentIdFromSearchParams = useSearchParams().get('commentId');

  const isSelected = Number(commentIdFromSearchParams) === replyId;

  const { userId: ownId } = useGetUserStatusAPI();

  const isOwnComment = authorId === ownId;

  return (
    <div
      className={cn(
        'flex w-full gap-2 px-4 py-2',
        isSelected && 'bg-gray-accent2',
      )}
    >
      <Icon
        id='reply'
        className=' text-gray-accent3'
        aria-label='대댓글 표시'
      />
      <CommentItem
        nickname={nickname}
        content={content}
        createdAt={createdAt}
        isOwnComment={isOwnComment}
        authorId={authorId}
      >
        <CommentReplyItemMenu replyId={replyId} isOwnComment={isOwnComment} />
      </CommentItem>
    </div>
  );
};

export default CommentReplyItem;
