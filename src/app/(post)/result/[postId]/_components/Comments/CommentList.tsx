import { useParams, useSearchParams } from 'next/navigation';

import { useGetCommentsAPI } from '@/src/apis/comments';
import CommentReplyItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/CommentItemReply';
import CommentRootItem from '@/src/app/(post)/result/[postId]/_components/Comments/CommentItem/CommentItemRoot';

const CommentList = () => {
  const { postId } = useParams() as { postId: string };
  const comments = useGetCommentsAPI(postId);
  const commentIdFromSearchParams = useSearchParams().get('commentId');
  const isSelected = Boolean(commentIdFromSearchParams);

  return (
    <div className=' flex flex-col divide-y divide-gray-accent2 border-t border-gray-accent2'>
      {comments.map((rootComment, idx) => (
        <div key={`${rootComment.commentId}-${idx}`}>
          <CommentRootItem comment={rootComment} isSelected={isSelected} />
          {rootComment.children.map((replyComment, idx) => (
            <CommentReplyItem
              key={`${replyComment.replyId}-${idx}`}
              isFirstChild={idx === 0}
              comment={replyComment}
              isSelected={isSelected}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
