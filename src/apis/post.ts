import { BASE_URL } from '@/src/apis/constants';

interface Vote {
  voteId: number;
  voteTitle: string;
  hasVoted: boolean;
  choice: number;
  options: string[];
}

export interface PostDetail {
  title: string;
  author: string;
  isAuthor: boolean;
  profileImageUrl: string;
  date: string;
  content: string;
  imageUrl: string;
  voteInfo: Vote;
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

export interface PostValue {
  title: string;
  content: string;
  imageUrl?: File;
  channel?: string;
  voteTitle?: string;
  voteOptions?: string[];
}

export const getPostDetail = async (postId: string) => {
  const data = (
    await fetch(`${BASE_URL}/posts/${postId}`, {
      next: { tags: ['post', postId] },
    })
  ).json() as Promise<PostDetail>;

  return data;
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

export const createPost = async (data: PostValue) => {
  await fetch(`${BASE_URL}/posts`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
    body: JSON.stringify(data),
  });
};
