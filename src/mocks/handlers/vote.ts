import { HttpResponse, http } from 'msw';

import { VoteResult } from '@/src/apis/vote';
import { post } from '@/src/mocks/handlers/post-detail';

class Vote {
  private voteResults: VoteResult[];

  constructor() {
    this.voteResults = Array.from({ length: 10 }, (_, index) => ({
      voteId: 123 + index,
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
    }));
  }

  getVoteResult(voteId: number): VoteResult | undefined {
    return this.voteResults.find(vote => vote.voteId === voteId);
  }

  vote(voteId: number, optionSeq: number) {
    const voteResult = this.getVoteResult(voteId);

    if (!voteResult) return false;

    voteResult.options.forEach(option => {
      if (option.seq === optionSeq) option.count++;
    });

    post.setVoteInfo(+voteId, voteInfo => {
      voteInfo.hasVoted = true;
    });

    return true;
  }
}

const vote = new Vote();

const getVoteResult = http.get(
  `${process.env.NEXT_PUBLIC_URL}/votes/:voteId`,
  ({ params }) => {
    const { voteId } = params;
    const result = vote.getVoteResult(+voteId);

    if (!result) return new HttpResponse('Not found', { status: 404 });

    return HttpResponse.json<VoteResult>(result);
  },
);

const doVote = http.post(
  `${process.env.NEXT_PUBLIC_URL}/votes/:voteId`,
  ({ request, params }) => {
    const { voteId } = params;
    const url = new URL(request.url);
    const optionSeq = url.searchParams.get('option'); // 쿼리 파라미터 가져오기

    if (!optionSeq)
      return new HttpResponse('Not found', {
        status: 404,
      });

    const isSuccess = vote.vote(+voteId, +optionSeq);

    if (!isSuccess)
      return new HttpResponse('Not found', {
        status: 404,
      });

    return new HttpResponse('Created', {
      status: 201,
    });
  },
);
export const handlers = [getVoteResult, doVote];
