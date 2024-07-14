import { useParams } from 'next/navigation';

import { useGetCommentsAPI } from '@/src/apis/comments';
import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import CommentReplyItem from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem/CommentReplyItem';
import CommentRootItem from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem/CommentRootItem';

const CommentList = () => {
  const { postId } = useParams() as { postId: string };
  const comments = useGetCommentsAPI(postId);
  const { commentSize } = useGetPostDetailAPI(postId);

  return (
    <div>
      <div className='font-h3-sm border-t border-gray-accent2 px-4 py-5'>
        댓글 {commentSize}
      </div>
      <div className=' flex flex-col divide-y divide-gray-accent2'>
        {comments.map((rootComment, idx) => (
          <div key={`${rootComment.commentId}-${idx}`}>
            <CommentRootItem isFirst={idx === 0} comment={rootComment} />
            {rootComment.children.map((replyComment, idx) => (
              <CommentReplyItem
                key={`${replyComment.replyId}-${idx}`}
                comment={replyComment}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
