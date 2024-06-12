import { BASE_URL } from '@/src/apis/constants';

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

const queryParamsStringify = (params: object) =>
  Object.entries(params)
    .map(([key, value]) => (value ? `${key}=${value}` : null))
    .join('&');

export const getPostList = async (params: GetPostListParams) => {
  const response = await fetch(
    `${BASE_URL}/posts/search?${queryParamsStringify(params)}`,
    {
      next: {
        tags: ['post', ...Object.values(params)],
      },
    },
  );

  const data = (await response.json()) as PostList;

  return data;
};
