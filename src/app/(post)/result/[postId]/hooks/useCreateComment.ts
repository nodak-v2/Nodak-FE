'use';

import { useRouter } from 'next/navigation';

import { useCreateCommentAPI } from '@/src/apis/comments';
import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import Toast from '@/src/components/Toast';

export const useCreateComment = (postId: string) => {
  const createComment = useCreateCommentAPI(postId);
  const { login: isLogin } = useGetUserStatusAPI();
  const router = useRouter();

  return async (comment: string) => {
    if (isLogin) {
      await createComment(comment);
    } else {
      router.push('/signin');
      Toast.default('로그인이 필요합니다.');
    }
  };
};
