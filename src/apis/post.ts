import { useSuspenseQuery } from '@tanstack/react-query';

import { api } from './core';

export interface PostDetail {
  message: string;
  body: PostDetailBody;
}

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
interface PostListBody {
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

export interface PostList {
  message: string;
  body: PostListBody;
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

export interface PostValue {
  title: string;
  content: string;
  imageUrl?: File;
  channel?: string;
  voteTitle?: string;
  voteOptions?: string[];
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
