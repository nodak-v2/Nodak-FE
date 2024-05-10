import { HttpResponse, http } from 'msw';

import { VoteResult } from '@/src/apis/vote';
import { post } from '@/src/mocks/handlers/post-detail';

const voteResults = [
  {
    voteId: 123,
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

const doVote = http.post(
  `${process.env.NEXT_PUBLIC_URL}/votes/:voteId`,
  ({ request, params }) => {
    const { voteId } = params;
    const url = new URL(request.url);
    const optionSeq = url.searchParams.get('option');

    if (!optionSeq)
      return new HttpResponse('Not found', {
        status: 404,
      });

    const created = voteResults[0].options.find(
      ({ seq }) => seq === +optionSeq,
    );

    post.setVoteInfo(+voteId, voteInfo => {
      voteInfo.hasVoted = true;
    });

    console.log(post.getPostOfVoteId(+voteId));

    if (created)
      return new HttpResponse('Created', {
        status: 201,
      });
  },
);
export const handlers = [getVoteResult, doVote];
