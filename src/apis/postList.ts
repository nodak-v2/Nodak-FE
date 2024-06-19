import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { api } from '@/src/apis/core';

import { VoteOption } from './createPost';

export interface PostListContent {
  postId: number;
  voteId: number;
  voteTitle: string;
  commentCount: number;
  likeCount: number;
  voterCount: number;
  author: string;
  createdAt: string;
  voteOptions: VoteOption[];
  terminated: boolean;
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

export interface PostListResponse {
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

interface GetPostListParams {
  page: string;
  size: string;
  keyword: string | null;
  categoryId: string | null;
}

export const getPostList = async (params: GetPostListParams) =>
  await api.get<PostListResponse>({
    url: '/posts/search',
    params,
  });

const PAGE_SIZE = '8';

export const useGetPostListAPI = (
  keyword: string | null,
  categoryId: string | null,
) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['postList', { page: '0', keyword, categoryId }],
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) =>
      getPostList({
        page: pageParam.toString(),
        size: PAGE_SIZE,
        keyword,
        categoryId,
      }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.body.last ? allPages.length : undefined,
    select: data => data.pages.flatMap(page => page.body.content),
  });
};
