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

interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}
interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}
interface PostListInfo {
  postId: number;
  title: string;
  totalCount: number;
  userId: number;
  author: string;
  profileImageUrl: string;
  imageUrl: string;
  createdAt: string;
}

export interface PostList {
  posts: PostListInfo[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}

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
  });
};

export const deleteLike = async (postId: string) => {
  await fetch(`${BASE_URL}/posts/${postId}/stars`, {
    method: 'delete',
  });
};
