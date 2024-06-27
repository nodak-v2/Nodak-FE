import { useMutation } from '@tanstack/react-query';

import { BASE_URL, TEST_TOKEN } from '@/src/apis/constants';

import { VoteOption } from '../components/VoteForm';
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

export interface PostRequestBody {
  title: string;
  content: string;
  channel: string;
  voteOptions: VoteOption[];
  endDate: string;
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

// export const createPost = async (data: PostValue) => {
//   await fetch(`${BASE_URL}/posts`, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
// };

const createPost = (data: PostRequestBody) => {
  return api.post({
    url: `/posts`,
    data: { ...data, startDate: new Date().toISOString() },
  });
};

export const useCreatePostAPI = () => {
  const { mutateAsync } = useMutation({
    mutationFn: (data: PostRequestBody) => createPost(data),
  });

  return mutateAsync;
};
