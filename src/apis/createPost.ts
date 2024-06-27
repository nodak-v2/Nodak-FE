import { useMutation } from '@tanstack/react-query';

import { VoteOption } from '../components/VoteForm';
import { api } from './core';

export interface PostRequestBody {
  voteTitle: string;
  content: string;
  channel: string;
  voteOptionContent: VoteOption[];
  endDate: string;
}

const createPost = (data: PostRequestBody) => {
  return api.post({
    url: `/posts`,
    data,
  });
};

export const useCreatePostAPI = () => {
  const { mutateAsync } = useMutation({
    mutationFn: (data: PostRequestBody) => createPost(data),
  });

  return mutateAsync;
};
