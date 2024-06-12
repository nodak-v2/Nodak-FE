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

export interface PostValue {
  title: string;
  content: string;
  imageUrl?: File;
  channel?: string;
  voteTitle?: string;
  voteOptions?: string[];
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
