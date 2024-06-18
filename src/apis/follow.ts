import { useMutation } from '@tanstack/react-query';

import { api } from './core';

const postFollow = (userId: string) => {
  return api.post({
    url: `/follow/${userId}`,
  });
};

const deleteFollow = (userId: string) => {
  return api.delete({
    url: `/unfollow/${userId}`,
  });
};

export const usePostFollowAPI = (userId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: () => postFollow(userId),
  });

  return mutateAsync;
};

export const useDeleteFollowAPI = (userId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteFollow(userId),
  });

  return mutateAsync;
};
