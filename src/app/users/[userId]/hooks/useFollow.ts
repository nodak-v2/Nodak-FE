import { useDeleteFollowAPI, usePostFollowAPI } from '@/src/apis/follow';

export const useFollow = (userId: string) => {
  const postFollow = usePostFollowAPI(userId);
  const deleteFollow = useDeleteFollowAPI(userId);

  return {
    postFollow: async () => await postFollow(),
    deleteFollow: async () => await deleteFollow(),
  };
};
