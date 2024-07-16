'use client';

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
      setTimeout(() => router.push('/signin'), 0); // setTimeout 으로 우선순위를 높임
      Toast.default('로그인이 필요합니다.');
    }
  };
};
