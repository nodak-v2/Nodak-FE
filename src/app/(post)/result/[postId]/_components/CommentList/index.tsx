import { useParams } from 'next/navigation';

import { useGetCommentsAPI } from '@/src/apis/comments';
import { useGetPostDetailAPI } from '@/src/apis/postDetail';
import CommentReplyItem from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem/CommentReplyItem';
import CommentRootItem from '@/src/app/(post)/result/[postId]/_components/CommentList/CommentItem/CommentRootItem';

const INITIAL_TEXT = '댓글이 없습니다.\n첫 댓글을 작성해보세요.';

const CommentList = () => {
  const { postId } = useParams() as { postId: string };
  const comments = useGetCommentsAPI(postId);
  const { commentSize } = useGetPostDetailAPI(postId);

  return (
    <>
      <div className='font-h3-sm border-t border-gray-accent2 px-4 py-5'>
        댓글 {commentSize}
      </div>
      <div className=' flex flex-col divide-y divide-gray-accent2'>
        {comments.length === 0 && (
          <span className='font-text-2-md self-center whitespace-pre-line p-4 text-center text-gray-accent3'>
            {INITIAL_TEXT}
          </span>
        )}
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
    </>
  );
};

export default CommentList;
