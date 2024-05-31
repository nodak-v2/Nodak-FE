import { BASE_URL, TEST_TOKEN } from '@/src/apis/constants';

export interface VoteResult {
  message: string;
  body: VoteResultBody;
}

export interface VoteResultBody {
  voteId: number;
  voteTitle: string;
  hasVoted: boolean;
  choiceVoteOptionId: number;
  totalNumber: number;
  voteOptions: VoteOption[];
}

export interface VoteOption {
  voteOptionId: number;
  seq: number;
  voteOptionContent: string;
  count: number;
}

export const getVoteResult = async (voteId: number) => {
  const data = await fetch(`${BASE_URL}/votes/${voteId}`, {
    headers: {
      Authorization: TEST_TOKEN || '',
    },
  });

  const awaitedData = (await data.json()) as VoteResult;

  return awaitedData.body;
};

export const doVote = async (voteId: number, optionSeq: number) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_URL}/votes/${voteId}?option=${optionSeq}`,
    {
      method: 'post',
      headers: {
        Authorization: TEST_TOKEN || '',
      },
    },
  );
};
