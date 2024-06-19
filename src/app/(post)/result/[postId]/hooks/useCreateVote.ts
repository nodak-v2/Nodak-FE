import { useCreateVoteAPI } from '@/src/apis/vote';

export const useCreateVote = (voteId: string, postId: string) => {
  const createVote = useCreateVoteAPI(voteId, postId);

  return async (optionSeq: number) => await createVote(optionSeq);
};
