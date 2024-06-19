import { useCreateCommentAPI } from '@/src/apis/comments';

export const useCreateComment = (postId: string) => {
  const createComment = useCreateCommentAPI(postId);

  return async (comment: string) => await createComment(comment);
};
