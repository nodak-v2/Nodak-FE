import { useMutation } from '@tanstack/react-query';

import { api } from '@/src/apis/core';

type VoteOptionContent = { [key: `${number}`]: string };
export interface CreatePostRequest {
  title: string;
  content: string;
  imageUrl: string;
  channel: string;
  voteTitle: string;
  voteOptionContent: VoteOptionContent;
}

const createPost = async (data: CreatePostRequest) =>
  await api.post({
    url: '/posts',
    data,
  });

export const useCreatePostAPI = () => {
  const { mutateAsync } = useMutation({
    mutationFn: createPost,
  });

  return mutateAsync;
};
