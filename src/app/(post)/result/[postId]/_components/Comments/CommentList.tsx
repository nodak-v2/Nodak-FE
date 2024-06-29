import { useParams, useSearchParams } from 'next/navigation';

import { useGetCommentsAPI } from '@/src/apis/comments';

import CommentItem from './CommentItem';

const CommentList = () => {
  const { postId } = useParams() as { postId: string };
  const comments = useGetCommentsAPI(postId);
  const commentId = useSearchParams().get('commentId');

  return (
    <div className='border-t border-gray-accent2'>
      {comments.map((comment, idx) => (
        <CommentItem
          key={`${comment.commentId}-${idx}`}
          comment={comment}
          isSelected={Boolean(commentId)}
        />
      ))}
    </div>
  );
};

export default CommentList;
