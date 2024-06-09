import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';

import { api } from './core';

export interface Comment {
  commentId: number;
  profileImageUrl: string | null;
  writerName: string;
  content: string;
  createdAt: string;
}

export interface GetData<T> {
  body: T;
  message: string;
}

// export const getComments = async (postId: string) => {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comments`,
//   );

//   const data = (await response.json()) as GetData<Comment[]>;

//   return data.body;
// };

// export const createComment = async (postId: string, comment: string) => {
//   await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comments`, {
//     method: 'post',
//     body: JSON.stringify({ content: comment }),
//   });
// };

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
