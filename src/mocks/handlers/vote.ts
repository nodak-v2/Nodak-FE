import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/src/apis/constants';
import { VoteResult } from '@/src/apis/vote';

class Vote {
  private voteResults: VoteResult[];
  private mockVoteResult = (index: number): VoteResult => ({
    message: 'success',
    body: {
      voteId: index,
      voteTitle: '시연영상 만족도',
      hasVoted: false,
      choiceVoteOptionId: 0,
      totalNumber: 13,
      voteOptions: [
        {
          voteOptionId: 1,
          seq: 1,
          voteOptionContent: '만족',
          count: 12,
        },
        {
          voteOptionId: 2,
          seq: 2,
          voteOptionContent: '불만족',
          count: 1,
        },
      ],
    },
  });

  constructor() {
    this.voteResults = Array.from({ length: 10 }, (_, index) =>
      this.mockVoteResult(index),
    );
    this.setHasVotedById(0, true);
    this.setHasVotedById(1, false);
    this.setHasVotedById(2, true);
    this.setHasVotedById(3, false);
  }

  getVoteResult(voteId: number) {
    return this.voteResults.find(vote => vote.body.voteId === voteId);
  }
  setVoteInfo(voteId: number, optionSequence: number) {
    const voteResult = this.getVoteResult(voteId);
    if (!voteResult) return;

    voteResult.body.hasVoted = true;
    voteResult.body.voteOptions.forEach(option => {
      if (option.seq === optionSequence) option.count++;
    });

    voteResult.body.totalNumber++;
  }

  vote(voteId: number, optionSeq: number) {
    const voteResult = this.getVoteResult(voteId);

    if (!voteResult) return false;

    this.setVoteInfo(voteId, optionSeq);

    return true;
  }
  setHasVotedById(voteId: number, hasVoted: boolean) {
    this.voteResults[voteId].body.hasVoted = hasVoted;
  }
}

const vote = new Vote();

const getVoteResult = http.get(`${BASE_URL}/votes/:voteId`, ({ params }) => {
  const { voteId } = params;
  const result = vote.getVoteResult(+voteId);

  if (!result) return new HttpResponse('Not found', { status: 404 });

  return HttpResponse.json<VoteResult>(result);
});

const doVote = http.post(`${BASE_URL}/votes/:voteId`, ({ request, params }) => {
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
});
export const handlers = [getVoteResult, doVote];
