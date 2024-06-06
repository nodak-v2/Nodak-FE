export interface Comment {
  commentId: number;
  profileImageUrl: string | null;
  writerName: string;
  content: string;
  createdAt: string;
}

export interface GetData<T> {
  body: T;
  message: string;
}

export const getComments = async (postId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comments`,
  );

  const data = (await response.json()) as GetData<Comment[]>;

  return data.body;
};

export const createComment = async (postId: string, comment: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comments`, {
    method: 'post',
    body: JSON.stringify({ content: comment }),
  });
};
