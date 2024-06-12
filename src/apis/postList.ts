import { useQuery } from '@tanstack/react-query';

import { api } from '@/src/apis/core';

interface PostListContent {
  postId: number;
  voteId: number;
  title: string;
  totalCount: number;
  author: string;
  profileImageUrl: string | null;
  postImageUrl: string | null;
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

export const getPostList = async (params: GetPostListParams) => {
  const data = await api.get<PostList>({
    url: '/posts/search',
    params,
  });

  return data;
};

export const useGetPostListAPI = (params: GetPostListParams) => {
  const { data } = useQuery({
    queryKey: ['postList', ...Object.values(params)],
    queryFn: () => getPostList(params),
    select: data => data?.body.content,
  });

  return data;
};
