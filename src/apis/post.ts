import { BASE_URL, TEST_TOKEN } from '@/src/apis/constants';

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

type GetPostListParams =
  | PostListParamsWithCategoryId
  | PostListParamsWithKeyword
  | PostListInitialParams;

const queryParamsStringify = (params: object) =>
  Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

export const getPostList = async (params: GetPostListParams) => {
  const response = await fetch(
    `api/posts/search?${queryParamsStringify(params)}`,
    {
      next: {
        tags: ['post', ...Object.values(params)],
      },
    },
  );

  const data = (await response.json()) as PostList;

  return data;
};

export const getPostDetail = async (postId: string) => {
  const data = await fetch(`${BASE_URL}/posts/${postId}`, {
    next: { tags: ['post', postId] },
    cache: 'no-cache',
    headers: {
      Authorization: TEST_TOKEN || '',
    },
  });

  const awaitedData = (await data.json()) as PostDetail;

  return awaitedData.body;
};

export const createLike = async (postId: string) => {
  await fetch(`${BASE_URL}/posts/${postId}/stars`, {
    method: 'post',
    headers: {
      Authorization: TEST_TOKEN || '',
    },
  });
};

export const deleteLike = async (postId: string) => {
  await fetch(`${BASE_URL}/posts/${postId}/stars`, {
    method: 'delete',
    headers: {
      Authorization: TEST_TOKEN || '',
    },
  });
};
