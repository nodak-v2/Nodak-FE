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
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${postId}/comments`, {
      cache: 'force-cache',
    })
  ).json();

  return data;
};
