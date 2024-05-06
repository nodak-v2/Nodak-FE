import { VoteResult } from '@/src/apis/types';

export const getVoteResult = async (voteId: string) => {
  const data = (
    await fetch(`${process.env.NEXT_PUBLIC_URL}/votes/${voteId}`)
  ).json() as Promise<VoteResult>;

  return data;
};
