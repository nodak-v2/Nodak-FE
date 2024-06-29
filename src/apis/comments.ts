import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { api } from './core';

export interface ChildrenComment {
  replyId: number;
  profileImageUrl: string | null;
  nickname: string;
  content: string;
  createdAt: string;
  userId: number;
}

export interface Comment {
  commentId: number;
  profileImageUrl: string | null;
  nickname: string;
  content: string;
  createdAt: string;
  userId: number;
  children: ChildrenComment[];
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
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['comments', postId] });
      QueryClient.invalidateQueries({ queryKey: ['posts', postId] });
      QueryClient.invalidateQueries({ queryKey: ['postList'] });
    },
  });

  return mutateAsync;
};

const updateComment = (postId: string, commentId: number, comment: string) => {
  return api.patch({
    url: `/posts/${postId}/comments/${commentId}`,
    data: { content: comment },
  });
};

export const useUpdateCommentAPI = (postId: string, commentId: number) => {
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (comment: string) => updateComment(postId, commentId, comment),
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ['comments', postId] }),
  });

  return mutateAsync;
};

const deleteComment = (postId: string, commentId: number) => {
  return api.delete({
    url: `/posts/${postId}/comments/${commentId}`,
  });
};

export const useDeleteCommentAPI = (postId: string, commentId: number) => {
  const QueryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => deleteComment(postId, commentId),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ['comments', postId] });
      QueryClient.invalidateQueries({ queryKey: ['posts', postId] });
      QueryClient.invalidateQueries({ queryKey: ['postList'] });
    },
  });

  return mutateAsync;
};
