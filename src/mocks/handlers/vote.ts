import { HttpResponse, http } from 'msw';

import { VoteResult } from '@/src/apis/types';

const voteResults = [
  {
    voteId: 1,
    title: '시연영상 만족도',
    totalNumber: 13,
    options: [
      {
        seq: 1,
        content: '만족',
        count: 12,
      },
      {
        seq: 2,
        content: '불만족',
        count: 1,
      },
    ],
  },
];
const getVoteResult = http.get(
  `${process.env.NEXT_PUBLIC_URL}/votes/:voteId`,
  () => {
    return HttpResponse.json<VoteResult>(voteResults[0]);
  },
);
export const handlers = [getVoteResult];
