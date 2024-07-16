import { useDeleteLikeAPI, usePostLikeAPI } from '@/src/apis/like';

export const usePostingLike = (postId: string) => {
  const postLike = usePostLikeAPI(postId);
  const deleteLike = useDeleteLikeAPI(postId);

  return {
    postLike: async () => await postLike(),
    deleteLike: async () => await deleteLike(),
  };
};
