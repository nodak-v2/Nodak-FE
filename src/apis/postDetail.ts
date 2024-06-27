import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

interface PostDetailBody {
  title: string;
  author: string;
  isAuthor: boolean;
  commentSize: number;
  profileImageUrl: string | null;
  createdAt: string;
  content: string;
  imageUrl: string | null;
  starCount: number;
  checkStar: boolean;
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
