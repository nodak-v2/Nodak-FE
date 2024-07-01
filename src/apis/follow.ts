import { useMutation, useQueryClient } from '@tanstack/react-query';

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
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => postFollow(userId),
    onSuccess: () =>
      QueryClient.invalidateQueries({
        queryKey: ['profile', userId],
      }),
  });

  return mutateAsync;
};

export const useDeleteFollowAPI = (userId: string) => {
  const QueryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: () => deleteFollow(userId),
    onSuccess: () =>
      QueryClient.invalidateQueries({
        queryKey: ['profile', userId],
      }),
  });

  return mutateAsync;
};
