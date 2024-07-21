import { useRouter } from 'next/navigation';

import { useDeleteFollowAPI, usePostFollowAPI } from '@/src/apis/follow';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import Toast from '@/src/components/Toast';

export const useFollow = (userId: string) => {
  const { userId: myId } = useGetUserStatusAPI();
  const postFollow = usePostFollowAPI(userId, myId.toString());
  const deleteFollow = useDeleteFollowAPI(userId, myId.toString());

  const { login: isLogin } = useGetUserStatusAPI();
  const router = useRouter();

  return {
    postFollow: async () => {
      if (isLogin) {
        await postFollow();
      } else {
        router.push('/signin');
        Toast.default('로그인이 필요합니다. ');
      }
    },
    deleteFollow: async () => await deleteFollow(),
  };
};
