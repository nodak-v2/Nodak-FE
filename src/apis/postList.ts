import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from '@/src/apis/core';

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

interface PostListInitialParams {
  page: string;
  size: string;
}

interface PostListParamsWithCategoryId extends PostListInitialParams {
  categoryId: string;
  keyword: null;
}

interface PostListParamsWithKeyword extends PostListInitialParams {
  keyword: string;
  categoryId: null;
}

export type GetPostListParams =
  | PostListParamsWithCategoryId
  | PostListParamsWithKeyword
  | PostListInitialParams;

export const getPostList = async (params: GetPostListParams) =>
  await api.get<PostList>({
    url: '/posts/search',
    params,
  });

export const useGetPostListAPI = (params: GetPostListParams) => {
  const { data } = useSuspenseQuery({
    queryKey: ['postList', ...Object.values(params)],
    queryFn: () => getPostList(params),
  });

  return data.body;
};
