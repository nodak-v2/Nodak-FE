import { BASE_URL } from './constants';

interface Comment {
  commentId: number;
  profileImageUrl: string | null;
  writerName: string;
  content: string;
  createdAt: string;
}

interface CommentResponse {
  body: Comment[];
  message: string;
}

export const getComments = async (postId: string): Promise<CommentResponse> => {
  const data = (
    await fetch(`${BASE_URL}/posts/${postId}/comments`, {
      cache: 'force-cache',
    })
  ).json();

  return data;
};

export const createComment = async (postId: string, comment: string) => {
  await fetch(`${BASE_URL}/posts/${postId}/comments`, {
    method: 'post',
    body: JSON.stringify({ content: comment }),
  });
};
