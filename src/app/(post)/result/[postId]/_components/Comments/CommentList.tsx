import { useParams, useSearchParams } from 'next/navigation';

import { useGetCommentsAPI } from '@/src/apis/comments';
import ReplyCommentItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/ReplyCommentItem';
import RootCommentItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/RootCommentItem';

const CommentList = () => {
  const { postId } = useParams() as { postId: string };
  const comments = useGetCommentsAPI(postId);
  const commentIdFromSearchParams = useSearchParams().get('commentId');

  return (
    <div className='border-t border-gray-accent2'>
      {comments.map((rootComment, idx) => (
        <div
          key={`${rootComment.commentId}-${idx}`}
          className='flex flex-col gap-2'
        >
          <RootCommentItem
            comment={rootComment}
            isSelected={Boolean(commentIdFromSearchParams)}
          />
          {rootComment.children.map((replyComment, idx) => (
            <ReplyCommentItem
              key={`${replyComment.replyId}-${idx}`}
              comment={replyComment}
              isSelected={Boolean(commentIdFromSearchParams)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
