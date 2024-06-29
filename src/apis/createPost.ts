import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from './core';

export interface PostRequestBody {
  voteTitle: string;
  content: string;
  channel: string;
  voteOptionContent: VoteOption[];
  endDate: string;
}

export interface VoteOption {
  option: string;
  imageUrl: string | null;
}

const createPost = (data: PostRequestBody) => {
  return api.post({
    url: `/posts`,
    data,
  });
};

export const useCreatePostAPI = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (data: PostRequestBody) => createPost(data),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['postList'],
      }),
  });

  return mutateAsync;
};
