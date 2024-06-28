import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { api } from './core';

export interface Comment {
  commentId: number;
  profileImageUrl: string | null;
  nickname: string;
  content: string;
  createdAt: string;
  userId: number;
}

const getComments = (postId: string) => {
  return api.get<Comment[]>({
    url: `/posts/${postId}/comments`,
  });
};

export const useGetCommentsAPI = (postId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['comments', postId],
    queryFn: () => getComments(postId),
  });

  return data.body;
};

const createComment = (postId: string, comment: string) => {
  return api.post({
    url: `/posts/${postId}/comments`,
    data: { content: comment },
  });
};

export const useCreateCommentAPI = (postId: string) => {
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (comment: string) => createComment(postId, comment),
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ['comments', postId] }),
  });

  return mutateAsync;
};
