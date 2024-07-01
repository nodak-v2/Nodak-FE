import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { api } from './core';

export interface VoteResultResponse {
  voteId: number;
  voteTitle: string;
  hasVoted: boolean;
  choiceVoteOptionId: number;
  totalNumber: number;
  voteOptions: VoteContent[];
  terminated: boolean;
}

export interface VoteContent {
  voteOptionId: number;
  seq: number;
  voteOptionContent: string;
  voteOptionImageUrl: string;
  count: number;
}

const getVoteDetail = (postId: string) => {
  return api.get<VoteResultResponse>({
    url: `/votes/${postId}`,
  });
};

export const useGetVoteDetailAPI = (postId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['votes', postId],
    queryFn: () => getVoteDetail(postId),
  });

  return data.body;
};

const postVote = (voteId: string, optionSeq: number) => {
  return api.post({
    url: `/votes/${voteId}?option=${optionSeq}`,
  });
};

export const useCreateVoteAPI = (voteId: string, postId: string) => {
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (optionSeq: number) => postVote(voteId, optionSeq),
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ['votes', postId] }),
  });

  return mutateAsync;
};

const terminateVote = (postId: string) => {
  return api.patch({
    url: `/posts/${postId}/terminate`,
  });
};

export const useTerminateVoteAPI = (postId: string) => {
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => terminateVote(postId),
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ['votes', postId] }),
  });

  return mutateAsync;
};
