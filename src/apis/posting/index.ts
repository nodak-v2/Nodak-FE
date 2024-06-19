import { useSuspenseQuery } from '@tanstack/react-query';

import { PostingNavigation } from '@/src/app/users/profile/(posting)/layout';

import { api } from '../core';

export interface PostListContent {
  postId: number;
  voteId: number;
  title: string;
  commentCount: number;
  likeCount: number;
  voterCount: number;
  author: string;
  profileImageUrl: string | null;
  postImageUrl: string | null;
  createdAt: string;
}

interface PostListPageable {
  pageNumber: number;
  pageSize: number;
  sort: PostListSort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface PostListSort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface PostList {
  content: PostListContent[];
  pageable: PostListPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: PostListSort;
  numberOfElements: number;
  empty: boolean;
}

export interface PostListInitialParams {
  page: number;
  size: number;
}

export const getPosting = async (
  params: PostListInitialParams,
  category: PostingNavigation,
) =>
  await api.get<PostList>({
    url: `/posts/${category}`,
    params,
  });

export const useGetPostingAPI = (
  params: PostListInitialParams,
  category: PostingNavigation,
) => {
  const { data } = useSuspenseQuery({
    queryKey: ['postList', category, ...Object.values(params)],
    queryFn: () => getPosting(params, category),
  });

  return data.body;
};
