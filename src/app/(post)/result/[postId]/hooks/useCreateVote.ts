import { useRouter } from 'next/navigation';

import { useGetUserStatusAPI } from '@/src/apis/myInfo';
import { useCreateVoteAPI } from '@/src/apis/vote';
import Toast from '@/src/components/Toast';

export const useCreateVote = (voteId: string, postId: string) => {
  const createVote = useCreateVoteAPI(voteId, postId);
  const { login: isLogin } = useGetUserStatusAPI();
  const router = useRouter();

  return async (optionSeq: number) => {
    if (isLogin) {
      await createVote(optionSeq);
    } else {
      router.push('/signin');
      Toast.default('로그인이 필요합니다.');
    }
  };
};
