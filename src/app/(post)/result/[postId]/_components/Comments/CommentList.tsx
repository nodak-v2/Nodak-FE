import { useParams } from 'next/navigation';

import { useGetCommentsAPI } from '@/src/apis/comments';

import CommentItem from './CommentItem';

const CommentList = () => {
  const { postId } = useParams() as { postId: string };
  const comments = useGetCommentsAPI(postId);

  console.log(comments[0]);

  return (
    <div className='border-t border-gray-accent3'>
      {comments.map((comment, idx) => (
        <CommentItem key={`${comment.commentId}-${idx}`} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
