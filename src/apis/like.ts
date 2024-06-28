import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from './core';

const postLike = (postId: string) => {
  return api.post({
    url: `/posts/${postId}/stars`,
  });
};

const deleteLike = (postId: string) => {
  return api.delete({
    url: `/posts/${postId}/stars`,
  });
};

export const usePostLikeAPI = (postId: string) => {
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => postLike(postId),
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ['posts', postId] }),
  });

  return mutateAsync;
};

export const useDeleteLikeAPI = (postId: string) => {
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteLike(postId),
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ['posts', postId] }),
  });

  return mutateAsync;
};
