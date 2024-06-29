import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/src/apis/core';

const createReplyComment = (commentId: number, content: string) => {
  return api.post({
    url: '/comments',
    data: { commentId, content },
  });
};

export const useCreateReplyCommentAPI = (postId: string, commentId: number) => {
  const QueryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (content: string) => createReplyComment(commentId, content),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['comments', postId] });
      QueryClient.invalidateQueries({ queryKey: ['posts', postId] });
      QueryClient.invalidateQueries({ queryKey: ['postList'] });
    },
  });

  return mutateAsync;
};

const deleteReplyComment = (replyId: number) => {
  return api.patch({
    url: `/comments`,
    data: { replyId },
  });
};

export const useDeleteReplyCommentAPI = (postId: string, replyId: number) => {
  const QueryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: () => deleteReplyComment(replyId),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['comments', postId] });
      QueryClient.invalidateQueries({ queryKey: ['posts', postId] });
      QueryClient.invalidateQueries({ queryKey: ['postList'] });
    },
  });

  return mutateAsync;
};
