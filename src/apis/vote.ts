interface Option {
  seq: number;
  content: string;
  count: number;
}

export interface VoteResult {
  voteId: number;
  title: string;
  totalNumber: number;
  options: Option[];
}

export const getVoteResult = async (voteId: string) => {
  const data = (
    await fetch(`${process.env.NEXT_PUBLIC_URL}/votes/${voteId}`)
  ).json() as Promise<VoteResult>;

  return data;
};
