import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

interface PostDetailBody {
  author: string;
  authorId: number;
  isAuthor: boolean;
  commentSize: number;
  profileImageUrl: string | null;
  createdAt: string;
  content: string;
  starCount: number;
  checkStar: boolean;
  categoryName: string;
}

const getPostDetail = (postId: string) => {
  return api.get<PostDetailBody>({
    url: `/posts/${postId}`,
  });
};

export const useGetPostDetailAPI = (postId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['posts', postId],
    queryFn: () => getPostDetail(postId),
  });

  return data.body;
};
