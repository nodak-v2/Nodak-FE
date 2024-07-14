import { useRouter } from 'next/navigation';

import { useDeleteLikeAPI, usePostLikeAPI } from '@/src/apis/like';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import Toast from '@/src/components/Toast';

export const usePostingLike = (postId: string) => {
  const postLike = usePostLikeAPI(postId);
  const deleteLike = useDeleteLikeAPI(postId);

  const { login: isLogin } = useGetUserStatusAPI();
  const router = useRouter();

  return {
    postLike: async () => {
      if (isLogin) {
        await postLike();
      } else {
        Toast.default('로그인이 필요합니다.');
        router.push('/signin');
      }
    },
    deleteLike: async () => await deleteLike(),
  };
};
